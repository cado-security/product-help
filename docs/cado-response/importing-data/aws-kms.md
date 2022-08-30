---
title: AWS KMS Support
hide_title: true
sidebar_position: 4
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

There are a number of options available - but recommended approaches are below:
1. You may choose to forgo giving all the permissions and only provide `kms:CreateGrant` to CadoResponseRole
    - This is recommended if the goal is simplicity, especially when there are cross account or cross region considerations (see below)
    - Grants will be created and retired as required by the platform

2. Give required permissions to CadoResponseRole directly and withhold CreateGrant for resources only 
    - You may not wish to give kms:CreateGrant permission to CadoResponseRole itself
    - Your policy must feature a statement which provides access to CadoResponseRole with the above permissions (except CreateGrant)
    - You may then tighten the policy to only allow CreateGrant permission to AWS resources
    - Example (be sure to adjust `Principal` and add `Condition` according to your needs)

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

3. Alternatively you may use grants to give out the equivalent KMS access for the above options

### Cross Region
It is important to ensure that if you are acquiring cross region that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy `Conditions` don't preclude the platform's access).

### Cross Account
The simplest approach is to give `kms:CreateGrant` permissions to the role being assumed **in the target account being acquired from**. See the **[Cross Account Acquisition](/cado-response/guides/cross-account-creation)** instructions for more details on cross account permissions.

Alternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to `"kms:Encrypt", "kms:Decrypt", "kms:ReEncrypt*", kms:GenerateDataKey*"`

:::info
Cross account acquisition of volumes encrypted with the AWS default key are currently not supported.
:::