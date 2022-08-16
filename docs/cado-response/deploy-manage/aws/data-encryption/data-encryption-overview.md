---
title: Data Encryption Overview
hide_title: true
sidebar_position: 3
---

# Data Encryption and Security
During deployment, by default, an S3 bucket, a VPC and a Subnet are created for use by the Cado Response solution.  From an access and security perspective, the S3 Bucket is encrypted with server-side encryption using AES256 and attached volumes are also encrypted using KMS.  We recommend you enable key rotation as well (https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html). The default VPC and Subnet create an isolated environment to which customers can control access rights.  When processing data, the Cado Response worker instances are launched within the same VPC as the main Cado Response instance.  Worker instances are started using the same AMI as the main Cado Response instance as well.

## Removing Internet Routable Addresses
By default, Cado Response deploys into its own VPC with an allow-list of known good IP Addresses set by the user. Public IPv4 addresses are assigned to the main Cado Response platform to enable a user to connect with their web browser, and are also assigned to workers to allow them to connect to required AWS services e.g. s3.amazonaws.com.

You can remove the requirement for publicly routable IP addresses if you have set up [VPC Endpoints](https://tomgregory.com/when-to-use-an-aws-s3-vpc-endpoint/) to connect Cado Response to required AWS Services.
You can remove the Public IP addresses associated with Workers under Settings > Advanced.
You can edit the deployment to remove the Public Elastic IP address from the main Cado Response web server and set up an Application Load Balancer instead to handle traffic to the user over the internet. If you remove the Public Elastic IP address, the built-in Update service will be unable to function and you will need to update via Terraform instead.