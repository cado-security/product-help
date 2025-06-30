---
title: KMS support
hide_title: true
sidebar_position: 5
---

# Cado Deployment KMS

The Cado deployment uses default KMS keys, not Customer Managed Keys (CMK).

# Importing data that uses Customer Managed Keys (CMK)

The Cado platform supports importing EC2 instances with encrypted volumes, provided the appropriate permissions are granted to the `CadoResponseRole` used to import data.

By default, AWS provides keys in your account, which allow access based on the default policy below. This setup is supported by the Cado platform out of the box. For more information on KMS, refer to the [AWS Key Management Service (KMS)](https://aws.amazon.com/kms/) documentation.

```json
{
    "Sid": "Allow access through EBS for all principals in the account that are authorized to use EBS",
    "Effect": "Allow",
    "Principal": {
        "AWS": "*"
    },
    "Action": [
        "kms:Encrypt",
        "kms:Decrypt",
        "kms:ReEncrypt*",
        "kms:GenerateDataKey*",
        "kms:CreateGrant",
        "kms:DescribeKey"
    ],
    "Resource": "*",
    "Condition": {
        "StringEquals": {
            "kms:ViaService": "ec2.eu-west-3.amazonaws.com",
            "kms:CallerAccount": "012345678910"
        }
    }
}
```
This policy allows all `Principals` (users, roles, etc.) in the account and region specified in the `Condition` to perform the listed actions.

When using CMK KMS keys, the following actions must be granted to `CadoResponseRole`:

```json
"kms:Encrypt",
"kms:Decrypt",
"kms:ReEncrypt*",
"kms:GenerateDataKey*",
"kms:CreateGrant"
```

### Recommended Permissions Configuration

The recommended approach is to grant permissions to `myCadoResponseRole` directly while withholding `"CreateGrant"` for specific resources:
- You may choose not to grant `kms:CreateGrant` to `CadoResponseRole`.
- Your policy should provide access to `CadoResponseRole` for the necessary permissions (excluding `CreateGrant`).
- Limit the policy to allow `CreateGrant` permission only for AWS resources.

A sample policy is shown below (adjust the `Principal` and add `Condition` as needed):

```json
[
  {
    "Sid": "Allow required KMS permissions",
    "Effect": "Allow",
    "Principal": {
        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"
    },
    "Action": [
        "kms:Encrypt",
        "kms:Decrypt",
        "kms:ReEncrypt*",
        "kms:GenerateDataKey*"
    ],
    "Resource": "*"
  },
  {
    "Sid": "Allow attachment of persistent resources",
    "Effect": "Allow",
    "Principal": {
        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"
    },
    "Action": [
        "kms:CreateGrant"
    ],
    "Resource": "*",
    "Condition": {
        "Bool": {
            "kms:GrantIsForAWSResource": true
        }
      }
  }
]
```

## Cross-Region Support

When performing cross-region acquisitions, ensure that the relevant policy statements apply to the region where your Cado platform is located. Check that the policy `Conditions` do not block the platform's access.

## Cross-Account Using Customer Managed Keys

When acquiring cross-account resources, follow these guidelines:

1. Grant `kms:CreateGrant` permissions to the role being assumed in the **target account** from which EC2 instances are being acquired. For more details, refer to the [Cross-Account Acquisition](/cado/deploy/cross/cross-account-creation.md) documentation.

2. Alternatively, you can use the permissions in the "Custom Keys" section. Ensure that both the primary and secondary account roles are allowed principals for the required actions: `kms:Encrypt`, `kms:Decrypt`, `kms:ReEncrypt*`, and `kms:GenerateDataKey*`.

## Cross-Account Using AWS Default Keys

When importing EC2 instances with default KMS-encrypted volumes for the first time, it is recommended to include the following permission in the `myCadoResponseRole` in the **account where the Cado platform is deployed**. Failure to do so may result in IAM errors until this permission is added. Once the import is successful, the permission can be removed.

```json
{
	"Sid": "RequiredForFirstTimeKMSDefaultencryptedImportCanBeDeletedAfter",
	"Effect": "Allow",
	"Action": [
		"iam:CreateServiceLinkedRole"
	],
	"Resource": "arn:aws:iam::*:role/aws-service-role/mrk.kms.amazonaws.com/AWSServiceRoleForKeyManagementServiceMultiRegionKeys",
	"Condition": {
		"StringLike": {
			"iam:AWSServiceName": "mrk.kms.amazonaws.com"
		}
	}
}
```
More information can be found in the [AWS KMS documentation](https://docs.aws.amazon.com/kms/latest/developerguide/using-service-linked-roles.html#slr-permissions-multi-region).

To import KMS-encrypted EC2 instances across accounts, the following permissions are required in `myCadoResponseRole` in the **account where the Cado platform is deployed**. There is no need to modify the cross-account role.

```json
{
	"Sid": "RequiredForKmsEncryptedEc2Import",
	"Effect": "Allow",
	"Action": [
		"kms:Encrypt",
		"kms:Decrypt",
		"kms:ReEncrypt*",
		"kms:GenerateDataKey*",
		"kms:CreateGrant"
	],
	"Resource": "*"
},
{
	"Sid": "RequiredForCrossAccountDefaultKmsEncryptedEc2Import",
	"Effect": "Allow",
	"Action": [
		"kms:CreateKey",
		"kms:CreateAlias",
		"kms:DescribeKey",
		"kms:ListAliases"
	],
	"Resource": "*"
},
{
	"Sid": "RequiredForOperationsOnTemporaryKMSResourcesduringDefaultEncryptedEc2Import",
	"Effect": "Allow",
	"Action": [
		"kms:DeleteAlias",
		"kms:ReplicateKey",
		"kms:ScheduleKeyDeletion"
	],
	"Resource": "*",
	"Condition": {
		 "ForAllValues:StringLike": {
		   "kms:ResourceAliases": [
		     "alias/CadoResponse-KMS-Alias*"
		   ]
		 },
		 "ForAnyValue:StringLike": {
		   "kms:ResourceAliases": [
		     "alias/CadoResponse-KMS-Alias*"
		   ]
		 }
	}
}
```

## Resolving KMS Support Issues

Configuring KMS policies can be challenging, especially for cross-account acquisitions or custom setups.

### How KMS-Encypted EBS Volumes Are Processed

When acquiring KMS-encrypted volumes, the platform attempts to access a snapshot of the volume using its IAM permissions. If access fails, the platform generates a temporary key to re-encrypt the snapshot and create a new volume for processing. The exact steps depend on your KMS key policy and IAM role permissions. Errors will be displayed if the necessary permissions are missing. For more information, refer to the [AWS documentation on ReEncryption](https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html).

### Using Cado Host to Bypass KMS

If you cannot obtain a full disk capture, you can bypass KMS encryption by using Cado Host:

- If SSM is enabled on the system, choose "Use Alternate Triage Acquisition" when acquiring the system.
- Alternatively, connect via SSH or RDP and collect forensic artifacts by selecting "Import > Cado Host."

### Creating an Unencrypted Volume to Bypass KMS

You can remove KMS encryption from a volume by following the steps in this [AWS guide](https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/).

### Debugging KMS IAM Permissions

You can identify simple permission issues using Cado’s automated health checks. For more detailed debugging, use the [AWS Policy Simulator](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html) to test policies and identify permission issues.
