---
title: Automatically add cross-account access with AWS Organizations (recommended)
hide_title: true
sidebar_position: 3
---

# Automatically adding cross-account access with AWS Organizations (Recommended)

:::tip
This feature is currently in beta and is the recommended method. To enable it, go to *Settings > Experiments* and turn on "AWS Organizations Account Discovery."
:::

Using AWS Organizations is an alternative, and recommended, way to enable [cross-account access](./cross-account-creation.md) for the Cado Platform. This method simplifies managing access to multiple AWS accounts in environments where accounts are organized under AWS Organizations.

You can view the cross-account role configuration [here](https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml).

## Permissions: ListAccounts

The [ListAccounts](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html) operation retrieves a list of all accounts within your organization. It can only be executed from the management account of the AWS Organization. 

In the Cado Platform, you’ll need to choose the role with the ListAccounts permission for the management account. You can do this by selecting the appropriate role from the 'List Accounts Role' dropdown, found in *Settings > Cloud Accounts*.

### Example IAM Policy

Here’s an example of an IAM policy for granting the ListAccounts permission:

```json
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

![Select List Accounts Role](/img/aws-orgs-list-accounts-role.png)

## Setting Up a Cross-Account IAM Role

To enable cross-account access, enter the name of your IAM role (e.g., `CadoResponseRole`) in the 'Cross Account IAM Role Name' field.

Then, click 'Discover accounts.' This will trigger a process to identify all AWS accounts where the specified role exists and is assumable.

![AWS Orgs Settings in Cado](/img/aws-orgs-cross-account-iam-role.png)

## Performing Account Checks

Once the accounts are added to the Cado platform, it's recommended to regularly run Account Checks to ensure the necessary permissions are still in place for acquisitions. For details on running these checks, refer to [Account Check](/cado/manage/monitoring#account-check).
