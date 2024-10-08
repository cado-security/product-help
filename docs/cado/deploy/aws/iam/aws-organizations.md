---
title: Automatically add cross-account access with AWS Organizations (recommended)
hide_title: true
sidebar_position: 3
---

# How to automatically add cross-account access with AWS Organizations (recommended)

:::tip
This feature is now the recommended approach, but is currently in beta. To enable, go to *Settings - Experiments* and enable "AWS Organizations Account Discovery"
:::

An alternative way to enable [cross-account access](./cross-account-creation.md) for the Cado Platform is to leverage AWS Organizations. This allows you to add and remove access to AWS accounts more easily in environments where accounts are managed by AWS Organizations.

You can view the cross-account role [here](https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml).

## ListAccounts Permission

The [ListAccounts](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html) operation lists all the accounts in the organization. This operation can only be called from the organization's management account, therefore select the role that already has the ListAccounts permission on the management account from the 'List Accounts Role' dropdown. This can be accessed from *Settings> Cloud Accounts*.

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

![Select List Accounts Role](/img/aws-orgs-list-accounts-role.png)

## Cross Account IAM Role

Enter the name of the cross account IAM role e.g. `CadoResponseRole` into 'Cross Account IAM Role Name' field.

Select 'Discover accounts' which will then trigger a pipeline to fetch all of the assumable roles across your AWS accounts where that role name matches the provided value.

![AWS Orgs Settings in Cado](/img/aws-orgs-cross-account-iam-role.png)

After accounts have been added to the Cado platform, it is advisable that Account Checks are performed against roles on a periodic basis, to ensure the correct permissions are in place to perform successful acquisitions. For more information see [Account Check](/cado/manage/monitoring#account-check).
