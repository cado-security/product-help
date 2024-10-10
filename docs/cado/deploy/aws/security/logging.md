---
title: Logging best practices
hide_title: true
sidebar_position: 2
---

# What are AWS logging best practices?
We recommend customers follow [AWS best practices regarding logging](https://aws.amazon.com/blogs/security/logging-strategies-for-security-incident-response/) which includes the following:
- Ensure CloudTrail is enabled in all regions
- Ensure CloudTrail log file validation is enabled
- Ensure the S3 bucket used to store CloudTrail logs is not publicly accessible
- Ensure CloudTrail trails are integrated with CloudWatch Logs
- Ensure AWS Config is enabled in all regions
- Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket
- Ensure CloudTrail logs are encrypted at rest using KMS CMKs
- Ensure rotation for customer created CMKs is enabled
- Ensure VPC flow logging is enabled in all VPCs

For more see our blog on [How to be IR Prepared in AWS](https://www.cadosecurity.com/how-to-be-ir-prepared-in-aws/)