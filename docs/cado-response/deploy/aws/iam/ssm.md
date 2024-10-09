---
title: Tighten SSM IAM permissions
hide_title: true
sidebar_position: 6
---

# How to tighten IAM permissions for SSM

The Cado platform uses AWS SSM to perform live captures of AWS EC2 systems - this provides for a faster mechanism than a full disk acquisition and can also collect process memory. The Cado platform also uses AWS SSM for [running commands](../../../discovery-import/import/aws/aws-ec2.md#run-command).

However, the default IAM permissions will be too wide for many environments, as this provides the Cado platform with permission to execute any command on SSM enabled systems:

```
{
    "Sid": "RequiredForTriageAndRunCommand",
    "Effect": "Allow",
    "Action": [
        "ssm:SendCommand",
        "ssm:DescribeInstanceInformation",
        "ssm:StartSession",
        "ssm:TerminateSession"
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
            "ssm:DescribeInstanceInformation",
            "ssm:StartSession",
            "ssm:TerminateSession"
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
            "ssm:DescribeInstanceInformation",
            "ssm:StartSession",
            "ssm:TerminateSession"
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
