---
title: Manually add a cross-account role to Cado in AWS
hide_title: true
sidebar_position: 4
---

# How to manually add a cross-account role to Cado

There are two main steps to set up cross-account acquisitions:

1. **Create a Cross-Account IAM Policy and Role** in the target AWS account from which the Cado platform will acquire data. This allows Cado to assume the cross-account role for data acquisition.
2. **Add the Cross-Account IAM Role ARN** to the Cado platform to enable access to that AWS account.

This page describes step 2. For step 1, see [Manually deploy a cross-account IAM role in AWS](/cado/deploy/cross/cross-account-creation).

:::info
Throughout this guide:
- The **primary AWS account** is where Cado is deployed (referred to as account `111111111111`).
- The **target AWS account** is where cross-account access is being set up (referred to as account `222222222222`).
:::


## Step 2: Add the Target AWS Role ARN to the Cado Platform

Once the cross-account role is created in the target AWS account (`222222222222`), add the Role ARN to the Cado platform:

1. **Log into the Cado platform** and go to **Settings > Accounts** and click **Create an account**.
2. Select **AWS** from the set of providers.
3. The **AWS Role** option should already be selected.

![Add AWS Account](/img/Accounts-AWSRole.png)

4. Enter the IAM Role ARN created in Step 1, and provide an **Account Name**. The Account Name should include the AWS account number for clarity.
5. The Cado platform will validate the role to ensure it is assumable. Once validated, the account name will appear in the list of available AWS accounts.
6. By default, Cado will perform an **Account Check** to confirm the required permissions are in place for successful acquisitions. You can skip this by unchecking the "Run account check after adding account" option. For more information, refer to the [Account Check guide](/cado/manage/monitoring#account-check).

Adding the cross-account ARN to Cado can also be automated using Cado’s API. See [Automating Cado Cross-Account Creation](#automating-cado-cross-account-creation).

