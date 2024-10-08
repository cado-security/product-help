---
title: IAM permissions description
hide_title: true
sidebar_position: 4
---

## What IAM permissions does Cado use?

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
