---
title: Bucket
hide_title: true
sidebar_position: 4
---

# Bucket

The / Forensic Acquisition and Investigation deployment requires a storage bucket for various functionality including evidence preservation, health checks and host based acquisitions.

### Prerequisites

  - The IAM role used in the initial deployment, and permission to edit it
  - Permission to create a S3 bucket in the AWS console

### Steps

1. Create an S3 bucket in your AWS console

2. Add the necessary permissions by adding the following to your IAM role:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "RequiredForCadoHostAndPreservation",
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:RestoreObject",
                "s3:PutObjectTagging",
                "s3:GetObjectTagging"
            ],
            "Resource": "arn:aws:s3:::MY_CADO_BUCKET/*" // Replace MY_CADO_BUCKET with your bucket name and delete this comment
        },
        {
            "Sid": "RequiredForCadoHostAndPreservation2",
            "Effect": "Allow",
            "Action": [
                "s3:ListAllMyBuckets",
                "s3:ListBucket",
                "s3:GetBucketLocation"
            ],
            "Resource": "arn:aws:s3:::MY_CADO_BUCKET" // Replace MY_CADO_BUCKET with your bucket name and delete this comment
        }
    ]
}

```
  
3. Enter the bucket name in the Setup Wizard - if the configured permissions are insufficient you will be notified and asked to correct before logging into the platform.

![AWS Bucket](/img/aws-bucket.png)


