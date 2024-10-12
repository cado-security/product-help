---
title: Manually deploy a cross-account role in AWS
hide_title: true
sidebar_position: 2
---

# How to manually deploy a cross-account IAM role in AWS

The Cado platform can be configured to access resources across multiple AWS accounts. For example, if you manage multiple AWS accounts, you can deploy Cado in a single AWS account and grant access to the other accounts, enabling the platform to acquire, process, and analyze evidence seamlessly.

Alternatively, you can automatically deploy the IAM role via [Stackets](/cado/deploy/cross/cross-account-creation-auto), then add the roles to the Cado platform using [AWS Organizations](./aws-organizations.md).

## Overview

The process below outlines how to grant the Cado platform access to a target AWS account (other than the one where Cado is deployed). This process can be repeated for every AWS account you want to provide access to.

There are two main steps to set up cross-account acquisitions:

1. **Create a Cross-Account IAM Policy and Role** in the target AWS account from which the Cado platform will acquire data. This allows Cado to assume the cross-account role for data acquisition.
2. **Add the Cross-Account IAM Role ARN** to the Cado platform to enable access to that AWS account.

This page describes step 1. For step 2, see [Manually add a cross-account role to Cado](./add-cross-account-manual.md).

:::info
Throughout this guide:
- The **primary AWS account** is where Cado is deployed (referred to as account `111111111111`).
- The **target AWS account** is where cross-account access is being set up (referred to as account `222222222222`).
:::

## Step 1: Create an IAM Policy and Role in the Target AWS Account

1. **Create the IAM Policy:**
   - In the target AWS account (`222222222222`), go to **IAM > Policies** and click **Create Policy**.
   - Use the Cado Cross-Account Policy [found here](https://raw.githubusercontent.com/cado-security/Deployment-Templates/main/cross-account/CrossAccountPolicy.yaml).
   - Give the policy a name, such as `CadoResponseCrossAccountPolicy`, and create the policy.

2. **Create the IAM Role:**
   - Navigate to **IAM > Roles** and click **Create Role**.
   - Select **Another AWS Account** and enter the account ID of your primary AWS account (`111111111111`).
   
   ![Create Role](/img/create-role.png)

   - Attach the policy created in the previous step and proceed to name the role.
   - The role name **must include** the text `CadoResponse` (e.g., `CadoResponseCrossAccountRole`). This is required for cross-account acquisition to function properly.


Deploying the Cross-Account IAM Policy and Role can be automated using AWS StackSets or other methods. See [Automating AWS IAM Role and Policy Deployment](#automating-aws-iam-role-and-policy-deployment).
