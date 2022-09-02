---
title: Overview
hide_title: true
sidebar_position: 1
---

# Data Encryption and Security
During deployment, by default, an S3 bucket, a VPC and a Subnet are created for use by the Cado Response solution.  From an access and security perspective, the S3 Bucket is encrypted with server-side encryption using AES256 and attached volumes are also encrypted using KMS.  We recommend you enable key rotation as well (https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html). The default VPC and Subnet create an isolated environment to which customers can control access rights.  When processing data, the Cado Response worker instances are launched within the same VPC as the main Cado Response instance.  Worker instances are started using the same AMI as the main Cado Response instance as well.
