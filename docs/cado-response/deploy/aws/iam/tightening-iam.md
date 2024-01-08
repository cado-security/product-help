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
