---
title: AWS Organizations
hide_title: true
sidebar_position: 4
---

# Enabling Cross-Account Access in AWS through AWS Organizations

:::tip
This feature is currently in beta. To enable, go to *Settings - Experiments* and toggle on "AWS Organizations Account Discovery"
:::

An alternative way to enable [cross-account access](./cross-account-creation.md) for the Cado Platform is to leverage AWS Organizations. This allows you to add and remove access to AWS accounts more easily in environments where accounts are managed by AWS Organizations

## Enabling Trusted Access
First, enable the AWS Account Management service in your root account and delegate the service to the account Cado is running in. AWS account Trusted Access must be enabled for AWS Account Management, so the Cado Platform can use the ListAccounts permission.

This setting is found under *AWS Organizations > Services > AWS Account Management > Enable Trusted Access:*

![Enable AWS Account Management](/img/enable-aws-org.png)

Once enabled, add a policy for `ListAccounts` under *AWS Organisation > Settings > Delegated administrator for AWS Organizations:*

![Add ListAccounts Policy](/img/listaccounts-policy.png)

For more information, refer to [AWS documentation on Enabling trusted access for AWS Account Management](https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html) and [AWS Account Management and AWS Organizations](https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html).

An example IAM Policy is as follows:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListAccounts",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::xxx:root"
      },
      "Action": [
        "organizations:ListAccounts",
        "organizations:ListTagsForResource"
      ],
      "Resource": "*"
    }
  ]
}
```

## Entering the role in the Cado UI

1. Navigate in the Cado UI to *Settings> Cloud Accounts:*
2. Enter the name of the role e.g. `CadoResponseRole` into the AWS Orgs role field.

This will then trigger a pipeline to fetch all of the assumable roles across your AWS accounts where that role name matches the provided value.

![AWS Orgs Settings in Cado](/img/aws-orgs.png)
