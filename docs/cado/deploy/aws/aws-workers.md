---
title: Workers
hide_title: true
sidebar_position: 4
---

# Workers

The initial deployment runs everything on a single EC2 instance. In order to limit load on this instance and ensure the platform remains stable we limit types of imports that can be run to those based around Cado Host captures and small artefacts stored in S3. We also limit how many pieces of evidence can be processed at once.

To enable processing data from all sources or to process many items of evidence at once, Cado must be configured to allow it to run imports on additional EC2s.

### Prerequisites

  - vCPU capacity in your region: we recommend requesting 128 "Running On-Demand All Standard" instances.
  - Ability to update IAM role
  - Ability to update Security group

### Steps

1. Add the necessary permissions by adding the following Sid to your instance Role:

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

2. Add the following  inbound Security Group rules

| Type          | Port  | Source                  | Description       |
|---------------|-------|-------------------------|-------------------|
| Custom TCP    | 5432  | Custom                  | Your Cado security group - Data Storage |
| Custom TCP    | 9200  | Custom                  | Your Cado security group - Data Storage |
| Custom TCP    | 6379  | Custom                  | Your Cado security group - Data Storage |
| Custom TCP    | 24224 | Custom                  | Your Cado security group - Log Handling |

![AWS Inbound Rules](/img/aws-inbound-rules.png)

3. Enable in the UI: **Settings** > **Advanced** > **Processing** > Turn on Workers
