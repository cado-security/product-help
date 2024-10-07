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

## Cross-Account Access without the Cross-Account Role
By default, we recommend creating a role in each account that you want Cado to access. 
This enables one click acquisition of data.
However, if you cannot create roles in other accounts you can still use the AMI import functionality to import EC2 resources from other accounts without the need to create any cross-account roles
This requires you to create the AMI of any instance you want to import yourself and share it with the AWS account that Cado resides in.
For more, see the AWS documentation on [creating an EC2 AMI snapshot](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/tkv-create-ami-from-instance.html) and [AMI Imports](../../../discovery-import/import/aws/aws-ami)