---
title: AWS Security Considerations
hide_title: true
sidebar_position: 1
---


# AWS Security Considerations

The default deployment of Cado Response follows security best practices. There are a number of things you can do to additionally tighten the deployment if you wish to customise the deployment.

## Data Encryption and Security
During deployment, by default, an S3 bucket, a VPC and a Subnet are created for use by the Cado Response solution.  From an access and security perspective, the S3 Bucket is encrypted with server-side encryption using AES256 and attached volumes are also encrypted using KMS.  We recommend you enable key rotation as well (https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html). The default VPC and Subnet create an isolated environment to which customers can control access rights.  When processing data, the Cado Response worker instances are launched within the same VPC as the main Cado Response instance.  Worker instances are started using the same AMI as the main Cado Response instance as well.

## AWS Logging Best Practices
We recommend customers follow AWS best practices regarding logging (https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html) which includes the following:
- Ensure CloudTrail is enabled in all regions
- Ensure CloudTrail log file validation is enabled
- Ensure the S3 bucket used to store CloudTrail logs is not publicly accessible
- Ensure CloudTrail trails are integrated with CloudWatch Logs
- Ensure AWS Config is enabled in all regions
- Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket
- Ensure CloudTrail logs are encrypted at rest using KMS CMKs
- Ensure rotation for customer created CMKs is enabled
- Ensure VPC flow logging is enabled in all VPCs

## Dedicated Forensics Account
You may choose to deploy into an AWS account dedicated to storing forensics data securely. You can then use cross-account roles to bring data into the forensics account. Cado Response copies data back into the forensics account, and performs processing there.

## Cross-Account Access without the Cross-Account Role
By default, we recommend creating a role in each account that you want Cado Response to access. This enables one click acquisition of data.
However, if you cannot create roles in other accounts you can still use the AMI import functionality to import EC2 resources from other accounts without the need to create any cross-account roles. This requires you to create the AMI of any instance you want to import yourself and share it with the AWS account that Cado Response resides in.

## Removing and Tightening IAM Permissions
You can further tune the IAM permissions that Cado Response deploys if you do not require all functionality. We describe the functionality used by the permissions in the “Sid” section of the [cross-account role](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html). Please contact support@cadosecurity.com for advice on what permissions are required for.

## Removing Internet Routable Addresses
By default, Cado Response deploys into its own VPC with an allow-list of known good IP Addresses set by the user. Public IPv4 addresses are assigned to the main Cado Response platform to enable a user to connect with their web browser, and are also assigned to workers to allow them to connect to required AWS services e.g. s3.amazonaws.com.

You can remove the requirement for publicly routable IP addresses if you have set up [VPC Endpoints](https://tomgregory.com/when-to-use-an-aws-s3-vpc-endpoint/) to connect Cado Response to required AWS Services.
You can remove the Public IP addresses associated with Workers under Settings > Advanced.
You can edit the deployment to remove the Public Elastic IP address from the main Cado Response web server and set up an Application Load Balancer instead to handle traffic to the user over the internet. If you remove the Public Elastic IP address, the built-in Update service will be unable to function and you will need to update via Terraform instead.