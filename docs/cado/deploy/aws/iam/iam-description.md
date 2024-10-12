---
title: IAM permissions description
hide_title: true
sidebar_position: 4
---

# What IAM permissions does Cado use?

The Cado platform requires specific IAM permissions to operate effectively, depending on the tasks you need it to perform. Below is a clear breakdown of the different permission groups and their purposes:

| **Permission Group**                                      | **Purpose**                                                                                                          |
|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| **Core Platform and Worker Operations**                   |                                                                                                                      |
| RequiredForStartup                                         | Essential for core platform operation and starting/stopping workers.                                                 |
| RequiredForStartup2                                        | Additional permissions for core platform and worker management.                                                      |
| **EC2 and Core Platform Permissions**                     |                                                                                                                      |
| RequiredForEC2ImportAndCorePlatform                       | Required to start/stop workers and acquire EC2 volumes.                                                              |
| **Health Checks**                                         |                                                                                                                      |
| RequiredToCheckPolicy                                      | Needed for health checks to ensure safe operation of the core platform.                                              |
| **Health Check Operations**                               |                                                                                                                      |
| RequiredForHealthChecks                                    | Needed for performing health checks to ensure core platform safety.                                                  |
| **Native Updates with ALB**                               |                                                                                                                      |
| **Cross-Account Operations**                              |                                                                                                                      |
| RequiredForCrossAccountAccess                              | Required for cross-account operations between AWS accounts.                                                          |
| **Accessing Cado S3 Bucket**                              |                                                                                                                      |
| RequiredToAccessCadoS3Bucket                               | Allows access to the Cado S3 bucket for storing and retrieving forensic data.                                         |
| **S3 Bucket and Forensic Preservation**                   |                                                                                                                      |
| RequiredForAcquireToS3                                     | Permissions for forensic preservation to S3 buckets and maintaining the chain of custody (can be scoped to "CadoS3BucketAlt"). |
| **S3 Readiness Checks**                                   |                                                                                                                      |
| RequiredForS3Readiness                                     | Ensures the platform is ready by verifying safe S3 operations.                                                       |
| **Memory Forensics via SSM**                              |                                                                                                                      |
| RequiredForMemoryForensics                                 | Enables triage acquisitions that include memory acquisition using SSM.                                               |
| **KMS Encrypted EC2 Imports**                             |                                                                                                                      |
| RequiredForKmsEncryptedEc2Import                           | Allows acquisition of KMS-encrypted EBS volumes for EC2 systems.                                                     |
| RequiredForCrossAccountDefaultKmsEncryptedEc2Import        | Needed to acquire KMS-encrypted EBS volumes from other AWS accounts.                                                 |
| **Temporary KMS Resource Operations**                     |                                                                                                                      |
| RequiredForOperationsOnTemporaryKMSResourcesduringDefaultEncryptedEc2Import | Required to handle temporary KMS resources by generating keys for re-encryption during encrypted EC2 volume acquisitions. |
| **Lambda Function Imports**                               |                                                                                                                      |
| RequiredForLambdaImport                                    | Permissions for importing Lambda functions, CloudWatch logs, and container images if applicable.                      |
| **ECS Imports**                                           |                                                                                                                      |
| RequiredForEcsImport                                       | Allows importing ECS clusters, services, and tasks. **ExecuteCommand** is needed to run commands on ECS tasks.        |
| **EKS Imports**                                           |                                                                                                                      |
| RequiredForEKSImport                                       | Required for acquiring EKS clusters.                                                                                 |
| **EC2 and AMI Imports**                                   |                                                                                                                      |
| RequiredForEc2ImportAndAmiImport                           | Permissions for acquiring EC2 instances, volumes, snapshots, CloudTrail logs, IAM roles, policies, and SSM documents. |
| RequiredForEc2ImportAndAmiImport2                          | Scoped permissions for handling copied volumes created by Cado during EC2 and AMI imports.                           |
| **EC2 Isolation**                                         |                                                                                                                      |
| RequiredForResponseActionIsolateEc2                        | Required to isolate EC2 instances (optional if isolation is not needed).                                              |
| **AMI Imports**                                           |                                                                                                                      |
| RequiredForAmiImports                                      | Permissions scoped to the Cado copy of the AMI during import.                                                        |
| RequiredForNativeUpdatesWithALB                            | Required for performing native updates using an Application Load Balancer (ALB), optional if ALB is not used.         |
| **GuardDuty Monitoring**                                  |                                                                                                                      |
| RequiredForGuardDutyMonitoring                             | Needed for GuardDuty monitoring, optional if not using GuardDuty automation.                                          |
| **Automated Error Reporting**                             |                                                                                                                      |
| RequiredForAutomatedErrorReporting                         | Allows automated error logs to be sent to Cado (optional if logs are shared manually).                                |
| **One-Time KMS Key Creation**                             |                                                                                                                      |
| RequiredForFirstTimeKMSDefaultencryptedImportCanBeDeletedAfter | Used once to create a Cado-specific KMS key for default encrypted EBS volumes, can be deleted afterward.             |
| **AWS Organizations Account Discovery**                   |                                                                                                                      |
| RequiredForAWSOrganizationsDiscoverAccounts                | Required to discover accounts in AWS Organizations, optional if AWS Organizations is not being used.                 |