---
title: Removing and Tightening IAM Permissions
hide_title: true
sidebar_position: 2
---

## Removing and Tightening IAM Permissions
You can further tune the IAM permissions that Cado deploys if you do not require all functionality. We describe the functionality used by the permissions in the “Sid” section of the [cross-account role](https://cado-public.s3.amazonaws.com/policy-in-cross-account.json). Please contact support@cadosecurity.com for advice on what permissions are required for.


## How to tighten IAM Permissions for SSM

The Cado platform uses AWS SSM to perform live captures of AWS EC2 systems - this provides for a faster mechanism than a full disk acquisition and can also collect process memory.

However, the default IAM permissions will be too wide for many environments, as this provides the Cado platform with permission to execute any command on SSM enabled systems:

```
{
    "Sid": "RequiredForTriageAndRunCommand",
    "Effect": "Allow",
    "Action": [
        "ssm:SendCommand",
        "ssm:DescribeInstanceInformation"
    ],
    "Resource": [
        "arn:aws:ec2:*:*:instance/*",
        "arn:aws:ssm:*::document/AWS-RunShellScript",
        "arn:aws:ssm:*::document/AWS-RunPowerShellScript"
    ]
}
```


You may wish to scope these permissions down, so SSM commands can only be run against specific Instances. The easiest way to do this, is by adding a Tag Condition to the targeted EC2 resources:

```
{
        "Sid": "RequiredForTriageAndRunCommandTagged",
        "Effect": "Allow",
        "Action": [
            "ssm:SendCommand",
            "ssm:DescribeInstanceInformation"
        ],
        "Resource": [
            "arn:aws:ec2:*:*:instance/*"
        ],
        "Condition": {
            "StringLike": {
                "ssm:resourceTag/CadoResponseSSMEnabled": [
                    "True"
                ]
            }
        }
    },
    {
        "Sid": "RequiredForTriageAndRunCommandRun",
        "Effect": "Allow",
        "Action": [
            "ssm:SendCommand",
            "ssm:DescribeInstanceInformation"
        ],
        "Resource": [
            "arn:aws:ssm:*::document/AWS-RunShellScript",
            "arn:aws:ssm:*::document/AWS-RunPowerShellScript"
        ]
}
```

Then adding the tag to the specific EC2 you wish to access with SSM:
![IAM](/img/ssm_tag.png)

If an EC2 you are acquiring with SSM does not have the required Tag, you will receive an error such as:
An error occurred (AccessDeniedException) when calling the SendCommand operation: User: xxx is not authorized to perform: ssm:SendCommand on resource: i-xxx because no identity-based policy allows the ssm:SendCommand action


## Scoping down KMS Permissions if Required

The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole.  
This is granted by the default Cado IAM roles.
AWS provides default keys in each AWS account. The default Cado IAM permissions support decryption of these KMS keys out of the box.
Cado supports Custom KMS Keys as well.

### KMS Consideration - Custom Keys

When using custom keys the required actions to the CadoResponseRole are:
```
"kms:Encrypt",
"kms:Decrypt",
"kms:ReEncrypt*",
"kms:GenerateDataKey*",
"kms:CreateGrant"
```
You may choose to forgo giving all the permissions and only provide kms:CreateGrant to the CadoResponseRole.
This is recommended if the goal is simplicity, especially when there are cross account or cross region considerations.
Grants will be created and retired as required by the platform.


You can give required permissions to the CadoResponseRole directly and withhold CreateGrant for resources only
- You may not wish to give kms:CreateGrant permission to the CadoResponseRole itself
- Your policy must feature a statement which provides access to the CadoResponseRole with the above permissions (except CreateGrant)
- You may then tighten the policy to only allow CreateGrant permission to only certain AWS resources


### KMS Considerations - Cross Region / Cross Account
Ensure that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy Conditions don't preclude the platform's access).
For Cross Account, the simplest approach is to give kms:CreateGrant permissions to the role being assumed in the target account.
Alternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to "kms:Encrypt", "kms:Decrypt", "kms:ReEncrypt*", kms:GenerateDataKey*"

