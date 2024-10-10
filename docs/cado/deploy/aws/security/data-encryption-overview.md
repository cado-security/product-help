---
title: Platform encryption in AWS
hide_title: true
sidebar_position: 3
---

# What encryption does the Cado platform use in AWS?

## General
The default VPC and Subnet create an isolated environment to which customers can control access rights. 
When processing data, the Cado worker instances are launched within the same VPC as the main Cado instance.
Worker instances are started using the same AMI as the main Cado instance as well.

## AWS
During deployment, by default, an S3 bucket, a VPC and a Subnet are created for use by the Cado solution.

During deployment, a default S3 bucket for collections is created. This can be customized, including to use an existing bucket, but by default the created S3 Bucket is encrypted with server-side encryption using AES256 (SSE-AES256 - See [Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html).
Attached EBS volumes are encrypted using [KMS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).
Access to EFS/NFS [is over TLS ](https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html).
Secrets are stored using [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html).

Some settings can be customized, and you may wish to [enable key rotation](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) as well .
