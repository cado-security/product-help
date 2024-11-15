---
title: Automatically add cross-account roles to Cado with AWS Organizations
hide_title: true
sidebar_position: 5
---

# How to automatically add cross-account roles to Cado with AWS Organizations

This guide will walk you through how to integrate AWS roles into the Cado platform using AWS Organizations.

This is the recommended way to add cross-account roles you have deployed to the Cado Platform, to enable the platform to import data from multiple AWS accounts.

:::tip
This feature is currently in beta. To enable it, go to *Settings > Experiments* and turn on "AWS Organizations Account Discovery."
:::


Alternatively, you can use the [Cado API](/cado/deploy/cross/cross-account-creation-api) to add cross-account roles to the platform.

## Prerequisites

Before starting, ensure that you have the following in place:
- **AWS Organizations** configured with multiple AWS accounts under a single management account.
- **IAM roles** with the necessary cross-account permissions applied to all AWS accounts using [AWS StackSets](/cado/deploy/cross/cross-account-creation-auto) or [manual deployment](/cado/deploy/cross/cross-account-creation).
- **Cado Platform Access**, specifically with admin rights to manage cloud accounts.


### 1. **Setting Permissions for Account Discovery**

The [ListAccounts](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html) operation is used by Cado to retrieve a list of all accounts within your organization. It can only be executed from the management account of the AWS Organization.

For the code to function correctly, the IAM role used for discovery must have the necessary permissions to list accounts in AWS Organizations. Here’s a minimal example of an IAM policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListAccounts",
      "Effect": "Allow",
      "Action": [
        "organizations:ListAccounts",
        "organizations:ListTagsForResource"
      ],
      "Resource": "*"
    }
  ]
}
```

This policy must be attached to the role that the Cado platform will assume.

The ListAccounts permission should be set in the root account, and the Cado role (or a role that has trust with the Cado role) should be allowed to assume it.



### 2. **Select List Accounts Role in Cado**

To enable cross-account discovery on the Cado platform, follow these steps:

- Go to **Settings > Accounts** and click **Create an account**.
- Select **AWS** from the set of providers.
- Select the **AWS Organizations** option.
- Under the "Role with ListAccounts Permission" dropdown, select the role with permissions to list accounts in your AWS Organization.

You will need to select the role containing the organizations:ListAccounts permission to the platform via Settings > Accounts. This role should have a [trust policy](/cado/deploy/aws/iam/iam-description#using-an-existing-iam-role) allowing the CadoResponseRole to assume it, and added to the platform manually via Settings > Accounts.

The dropdown will only list roles that have been added to the platform. Since Cado validates the roles before adding them, all roles shown should be assumable by the CadoResponseRole.

An example is below:

![Select List Accounts Role 1](/img/aws-orgs-list-accounts-role.png)


### 3. **Set Cross-Account IAM Role**


Next, configure the cross-account IAM role that the Cado platform will use to interact with other accounts:

- Enter the role name (e.g., `CadoResponseRole`) in the `Cross Account IAM Role Name` field.
- Click `Discover accounts` to trigger the discovery process using the provided role.

Ensure that only the role name is used, not the entire ARN. The role name should be the name of the role that was applied to all AWS accounts using the StackSet.

An example is below:

![Select List Accounts Role 2](/img/aws-orgs-list-accounts-role-2.png)



### 4. **Pipeline execution**
The pipeline to add accounts will then execute, and can be monitored in the pipeline view.

![Pipeline View](/img/aws-orgs-pipeline.png)


## Performing Account Checks

Once the accounts are added to the Cado platform, it's recommended to regularly run Account Checks to ensure the necessary permissions are still in place for acquisitions. For details on running these checks, refer to [Account Check](/cado/manage/monitoring#account-check).
