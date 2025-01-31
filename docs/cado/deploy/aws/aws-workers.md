---
title: Workers
hide_title: true
sidebar_position: 4
---

# Workers

The initial minimal deployment runs everything on a single EC2 instance. In order to limit load on this instance and ensure the platform remains stable we limit types of imports that can be run to those based around Cado Host captures and small artefacts stored in S3. We also limit how many pieces of evidence can be processed at once.

To enable processing data from all sources or to process many items of evidence at once, Cado must be configured to allow it to run imports on additional EC2s.

### Prerequisites

  - vCPU capacity in your region: we recommend requesting 128 "Running On-Demand All Standard" instances.
  - The IAM instance role used in the initial deployment, and permission to edit it
  - The security group you used in the initial deployment, and permission to edit it

### Steps

1. Add the necessary permissions by adding the following Sid to your IAM instance role:

```json
[
 {
   "Sid": "RequiredForWorkers",
   "Effect": "Allow",
   "Action": [
     "ec2:DeleteVolume",
     "ec2:DeleteSnapshot",
     "ec2:TerminateInstances",
     "ec2:AttachVolume",
     "ec2:DetachVolume",
     "ec2:StopInstances",
     "ec2:StartInstances",
     "ec2:RunInstances",
     "ec2:DescribeInstances",
     "ec2:DescribeInstanceStatus",
     "ec2:CreateTags",
     "ec2:DescribeAddresses",
     "ec2:AssociateAddress"
   ],
   "Resource": "*"
 },
 {
   "Sid": "RequiredForWorkersAndUpdatesIAM",
   "Effect": "Allow",
   "Action": [
     "iam:PassRole"
   ],
   "Resource": "arn:aws:iam::*:role/*CadoResponse*"
 }
]
```

2. Add the following inbound rules to your security group

| Type          | Port  | Source                  | Reason       |
|---------------|-------|-------------------------|-------------------|
| Custom TCP    | 5432  | Custom -  Your Cado security group | Data Storage |
| Custom TCP    | 9200  | Custom -  Your Cado security group | Data Storage |
| Custom TCP    | 6379  | Custom -  Your Cado security group | Data Storage |
| Custom TCP    | 24224 | Custom -  Your Cado security group | Log Handling |

![AWS Inbound Rules](/img/aws-inbound-rules.png)

3. Enable in the UI: **Settings** > **Advanced** > **Deployed Workers** > Enable Deployed Workers
4. Got to **Platform** > **Run a Platform Check**
