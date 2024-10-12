---
title: Access an AWS account with via AMI Import
hide_title: true
sidebar_position: 7
---

# How to access an AWS account cross-account within AWS without a cross-account role via AMI Import

While we recommend creating a cross-account role in each AWS account you want Cado to access for seamless, one-click data acquisition, there is an alternative if creating roles is not possible. You can use the **AMI Import** feature to import EC2 resources from other accounts without needing a cross-account role.

### Steps to Import EC2 Resources via AMI Import

1. **Create an AMI**  
   In the AWS account containing the EC2 instance you want to import, manually create an AMI (Amazon Machine Image) of the instance. For instructions on creating an AMI, refer to the [AWS documentation](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/tkv-create-ami-from-instance.html).

2. **Share the AMI with the Cado AWS Account**  
   Once the AMI is created, share it with the AWS account where Cado resides.

By following these steps, you can import EC2 instances from other AWS accounts without needing to create cross-account roles.
