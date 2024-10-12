---
title: Temporarily access an AWS account with STS
hide_title: true
sidebar_position: 6
---

# How to temporarily access an AWS account with STS

In complex cloud environments, setting up long-term roles with access often requires approvals from multiple teams, which can be time-consuming. To simplify this process, you can use a temporary Security Token (STS) to gain access to specific AWS resources without needing to create a permanent role.

### Steps to Access AWS with a Temporary Security Token

1. **Select AWS Security Token**  
   In the Cado platform, go to **Import** > **AWS** > **Security Token**.

   ![Security Token](/img/security-token.png)

2. **Enter the Resource ARN**  
   Provide the full [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the AWS resource you want to import.

   ![ARN](/img/arn.png)

3. **Grant Temporary Access via AWS CLI**  
   Use the AWS CLI to generate the STS token for temporary access. This action uses the permissions available in your local AWS CLI environment. Alternatively, you can temporarily assume a predefined role:

   ![Assume Role](/img/assume-role.png)

### Setting the Session Duration

The maximum session duration for an STS token can be set between 1 hour and 12 hours. However, if you request a session longer than the maximum allowed by your administrator, the operation will fail. For example, if you request a 12-hour session but the administrator's limit is 6 hours, the token generation will not succeed.

More details on session duration limits can be found in the [AWS documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/assume-role.html).
