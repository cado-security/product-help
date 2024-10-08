---
title: IAM Overview
hide_title: true
sidebar_position: 1
---
# Deployment IAM Considerations
There are several AWS Identity & Access Management best practices to consider when deploying the Cado platform 

## Dedicated Forensics Account
You may choose to deploy into an AWS account dedicated to storing forensics data securely. You can then use cross-account roles to bring data into the forensics account. Cado copies data back into the forensics account, and performs processing there.
For more on this best practice, see the AWS blog on [Forensic investigation environment strategies in the AWS Cloud
](https://aws.amazon.com/blogs/security/forensic-investigation-environment-strategies-in-the-aws-cloud/).
