---
title: Access an AWS account with via AMI Import
hide_title: true
sidebar_position: 7
---

# How to access an AWS account cross-account within AWS without a cross-account role via AMI Import

By default, we recommend creating a role in each account that you want Cado to access. 
This enables one click acquisition of data.
However, if you cannot create roles in other accounts you can still use the AMI import functionality to import EC2 resources from other accounts without the need to create any cross-account roles
This requires you to create the AMI of any instance you want to import yourself and share it with the AWS account that Cado resides in.
For more, see the AWS documentation on [creating an EC2 AMI snapshot](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/tkv-create-ami-from-instance.html).
