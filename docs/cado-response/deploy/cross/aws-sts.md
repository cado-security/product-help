---
title: Temporarily access an AWS account with STS
hide_title: true
sidebar_position: 6
---

## How to temporarily access an AWS account with STS
In complex cloud environments, creating long term roles with access can be cumbersome and involve multiple teams to approve. To avoid this, you can create a temporary Security Token which allows access to a specific resource in AWS without having to create a permanent role.


Under **Import** - select **AWS**, then **Security Token**:

![Security Token](/img/security-token.png)

Then enter the full [ARN](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the resource you wish to import:

![ARN](/img/arn.png)

Then execute the AWS CLI command to grant temporary access to the resource, using the permissions that your local AWS CLI environment has. Alternatively, you can assume a pre-defined role temporarily:

![Assume Role](/img/assume-role.png)

The maximum session duration setting can [have a value](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/assume-role.html) from 1 hour to 12 hours. If you specify a value higher than this setting or the administrator setting (whichever is lower), the operation fails. For example, if you specify a session duration of 12 hours, but your administrator has set the maximum session duration to 6 hours, generating the STS token will fail.
