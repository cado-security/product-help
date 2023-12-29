---
title: KMS Support
hide_title: true
sidebar_position: 2
---

# AWS KMS Support
The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole. 

AWS provides default keys in your account. These provide default access with the statement below, and this default is supported by the platform out of the box.  For more information on KMS, you can visit the **[AWS Key Management Service (KMS)](https://aws.amazon.com/kms/)** page.

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

As the Sid suggests: all `Principals` (users/roles etc) in the account and region specified in `Condition` have permission to perform the given actions.

### Custom Keys
When using custom keys the required actions to CadoResponseRole are:
```json
"kms:Encrypt",
"kms:Decrypt",
"kms:ReEncrypt*",
"kms:GenerateDataKey*",
"kms:CreateGrant"
```

There are a number of options available - but the recommended approach is adding required permisisons to `myCadoResponseRole` directly and witholding `"CreateGrant"` for resources only:
- You may not wish to give kms:CreateGrant permission to CadoResponseRole itself
- Your policy must feature a statement which provides access to CadoResponseRole with the above permissions (except CreateGrant)
- You may then tighten the policy to only allow CreateGrant permission to AWS resources

An sample policy is shown below (be sure to adjust `Principal` and add `Condition` according to your needs):
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

### Cross Region
It is important to ensure that if you are acquiring cross region that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy `Conditions` don't preclude the platform's access).

### Cross Account using Customer Managed Keys
The simplest approach is to give `kms:CreateGrant` permissions to the role being assumed **in the target account EC2s are being acquired from**. See the **[Cross Account Acquisition](../iam/cross-account-creation.md)** instructions for more details on cross account permissions.

Alternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to `"kms:Encrypt", "kms:Decrypt", "kms:ReEncrypt*", kms:GenerateDataKey*"`

### Cross Account using AWS default keys
:::warning
When importing a Default KMS encrypted EC2 for the first time, it is recommended that you include the following permission for `"iam:CreateServiceLinkedRole"` in the myCadoResponseRole in the **account where the Cado platform has been deployed**.  Failure to do so may result in IAM errors until the permission has been added.  Once added, and a default encrypted EC2 import has suceeded, the permission can be removed.  While this permission is present in the supplied Terraform and CloudFormation templates, it is reproduced here for your convenience.

```json
{
	"Sid": "RequiredForFirstTimeKMSDefaultencryptedImportCanBeDeletedAfter",
	"Effect": "Allow",
	"Action": [
		"iam:CreateServiceLinkedRole"
	],
	"Resource": "arn:aws:iam::*:role/aws-service-role/kms.amazonaws.com/*CadoResponse*",
	"Condition": {
		"StringLike": {
			"iam:AWSServiceName": "kms.amazonaws.com"
		}
	}
}
```
:::
To import EC2s across accounts that are encrypted with AWS default keys, you will require the following permissions in the `myCadoResponseRole` in the **account where the Cado Response platform has been deployed**.  You will not need to alter your cross-account role.  These permissions are also located in the supplied terraform and cloudformation configurations.

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

### Resolving Issues with KMS Support
Getting the right KMS policies can prove difficult, particularly for cross-account Default KMS acquisitions and custom configurations.

#### Using Cado Host to bypass KMS
If you are unable to obtain a full disk capture, you can bypass KMS by acquiring a system using Cado Host:
- If the system has SSM enabled, select "Use Alternate Triage Acquisition" when acquiring the system
- Conect to the system via SSH or RDP, and perform a collection of Forensic Artifacts by going to Import > Forensic Artifacts

#### Bypassing KMS by creating an Unencrypted Volume
You can remove KMS from a volume by following the steps at https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/

#### Debugging IAM Permissions for KMS
Simple issues can be identified by the automated healthchecks present in Cado Response.  Alternatively (Or when more granular output is required), you can debug any IAM permissions using the AWS Policy Simulator at https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html.  


