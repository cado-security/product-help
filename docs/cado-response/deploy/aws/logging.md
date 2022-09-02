---
title: Logging
hide_title: true
sidebar_position: 4
---

# AWS Logging Best Practices
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