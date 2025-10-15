# How to Tighten IAM Permissions for SSM in AWS

The / Forensic Acquisition and Investigation platform leverages AWS Systems Manager (SSM) to perform live captures of AWS EC2 systems. This provides a faster alternative to full disk acquisitions and allows the collection of process memory. Additionally, / Forensic Acquisition and Investigation uses SSM for executing commands on SSM-enabled systems during investigations. However, the default IAM permissions might be too broad for environments with stricter security requirements, as it grants the platform permission to execute any command on all SSM-enabled systems.

## Default Permissions

The default permissions grant wide access to execute commands on any EC2 instance:

```json
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

## Restricting SSM Permissions

To tighten these permissions, you can restrict SSM commands to only target specific EC2 instances by using **Tag Conditions**. This method ensures that only instances with a designated tag can be accessed via SSM.

### Example Policy with Tag Conditions

Here’s an example IAM policy that limits SSM commands to EC2 instances tagged with `CadoResponseSSMEnabled: True`:

```json
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

### Adding Tags to EC2 Instances

To implement this, add the tag `CadoResponseSSMEnabled: True` to the EC2 instances you want to allow access via SSM. You can manage tags in the AWS Management Console:

![IAM Tagging](/img/ssm_tag.png)

### Error Handling

If an EC2 instance you are trying to access via SSM does not have the required tag, you will encounter the following error:

```
An error occurred (AccessDeniedException) when calling the SendCommand operation: User: xxx is not authorized to perform: ssm:SendCommand on resource: i-xxx because no identity-based policy allows the ssm:SendCommand action.
```

This error indicates that the required tag (`CadoResponseSSMEnabled: True`) is missing from the instance.
