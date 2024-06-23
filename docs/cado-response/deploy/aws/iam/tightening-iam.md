---
title: Removing and Tightening IAM Permissions
hide_title: true
sidebar_position: 2
---

## Removing and Tightening IAM Permissions
You can further tune the IAM permissions that Cado deploys if you do not require all functionality. We describe the functionality used by the permissions in the “Sid” section of the [cross-account role](https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml). Please contact support@cadosecurity.com for advice on what permissions are required for.


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

When Cado performs a default KMS encrypted import across account, it will re-encrypt to a temporary key that is used to move snapshots cross-account.
An alias with a Cado prefix is used for scoping purposes, and the alias and key are scheduled for deletion after the import has finished.


You can give required permissions to the CadoResponseRole directly and withhold CreateGrant for resources only
- You may not wish to give kms:CreateGrant permission to the CadoResponseRole itself
- Your policy must feature a statement which provides access to the CadoResponseRole with the above permissions (except CreateGrant)
- You may then tighten the policy to only allow CreateGrant permission to only certain AWS resources


### KMS Considerations - Cross Region / Cross Account
Ensure that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy Conditions don't preclude the platform's access).
For Cross Account, the simplest approach is to give kms:CreateGrant permissions to the role being assumed in the target account.
Alternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to "kms:Encrypt", "kms:Decrypt", "kms:ReEncrypt*", kms:GenerateDataKey*"

### Description of IAM Permissions
- Required,RequiredForStartup, RequiredForStartup2: Required for core platform operation and to start and stop workers.
- RequiredForEC2ImportAndCorePlatform: Required to start and stop workers, and to acquire EC2 volumes
- RequiredToCheckPolicy: Required for health checks to confirm the safe operation of the core platform
- RequiredForCrossAccountAccess: Required when performing cross-account operations
- RequiredToAccessCadoS3Bucket: Required to access the Cado S3 bucket, to store and access forensic data
- RequiredForAcquireToS3: Required for forensic preservation to S3 buckets and chain of custody. Can be scoped to the Cado bucket "CadoS3BucketAlt" if required.
- RequiredForS3Readiness: Required to check safe operation of the platform
- RequiredForMemoryForensics: Required to perform triage acquisitions via SSM that include memory acquisition
- RequiredForKmsEncryptedEc2Import: Required when acquiring KMS encrypted EBS volumes for EC2 systems
- RequiredForCrossAccountDefaultKmsEncryptedEc2Import: Required when acquiring KMS encrypted EBS volumes for EC2 systems from a different account
- RequiredForOperationsOnTemporaryKMSResourcesduringDefaultEncryptedEc2Import: Required when acquiring KMS encrypted EBS volumes, by generating a key for re-encryption
- RequiredForLambdaImport: Required to import Lambda functions. The Lambda permissions are required to acquire versions of the Lambda function, the Logs permission is for the CloudWatch logs, and the ecr permissions are required if the Lambda function is using a container image and you wish to acquire this. Container images are not required, but may include additional evidence such as malware or configuration data persisted in a malicious container.
- RequiredForEcsImport: Required for ECS import. The ECS permissions are required to acquire the ECS cluster, services, and tasks. The ExecuteCommand permission is required to execute commands on the ECS tasks.
- RequiredForEKSImport: Required for EKS import. The EKS permissions are required to acquire the EKS cluster.
- RequiredForEc2ImportAndAmiImport: Required for EC2 and AMI import. The EC2 permissions are required to acquire the EC2 instances, volumes, and snapshots. The CloudTrail permissions are required to acquire the CloudTrail logs. The SSM permissions are required to acquire the SSM documents and instances. The IAM permissions are required to acquire the IAM roles and policies. The EC2 permissions are required to acquire the EC2 instances, volumes, and snapshots. The CloudTrail permissions are required to acquire the CloudTrail logs. The SSM permissions are required to acquire the SSM documents and instances. The IAM permissions are required to acquire the IAM roles and policies.
- RequiredForEc2ImportAndAmiImport2: Required for EC2 and AMI imports, scoped to copied volumes created by Cado.
- RequiredForResponseActionIsolateEc2: Required to isolate EC2 instances. If you are not using the isolation feature, this permission is not required.
- RequiredForAmiImports: Required for AMI imports. This is scoped to the Cado copy of the AMI.
- RequiredForHealthChecks: Required for health checks to confirm the safe operation of the core platform.
- RequiredForNativeUpdatesWithALB: Required for native updates with ALB. This is not required if you are not using the ALB feature.
- RequiredForGuardDutyMonitoring: Required for GuardDuty monitoring. This is not required if you are not using the GuardDuty automation feature.
- RequiredForAutomatedErrorReporting: Required for automated error reporting. This is not required if you do not wish to send logs as needed to Cado, and are instead sharing logs manually.
- RequiredForFirstTimeKMSDefaultencryptedImportCanBeDeletedAfter: This is used once to create a Cado KMS key to use for default encrypted EBS volumes. This is not required if you are not using the default encrypted EBS volume feature, and is only used once.
- RequiredForAWSOrganizationsDiscoverAccounts: Required to discover accounts in AWS Organizations. This is not required if you are not using AWS Organizations.
