---
title: Manually deploy a cross-account role
hide_title: true
sidebar_position: 1
---

# How to manually deploy a cross-account IAM role in AWS

The Cado platform can be configured to access resources across multiple AWS accounts. For example, if you manage multiple AWS accounts, you can deploy Cado in a single AWS account and grant access to the other accounts, enabling the platform to acquire, process, and analyze evidence seamlessly. Alternatively, you can use AWS Control Tower and deploy via [AWS Organizations](./aws-organizations.md).

You can view the cross-account role setup [here](https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml).

## Overview

The process below outlines how to grant the Cado platform access to a target AWS account (other than the one where Cado is deployed). This process can be repeated for every AWS account you want to provide access to.

There are two main steps to set up cross-account acquisitions:

1. **Create a Cross-Account IAM Policy and Role** in the target AWS account from which the Cado platform will acquire data. This allows Cado to assume the cross-account role for data acquisition.
2. **Add the Cross-Account IAM Role ARN** to the Cado platform to enable access to that AWS account.

:::tip
Creating the Cross-Account IAM Policy and Role can be automated using AWS StackSets or other methods. See [Automating AWS IAM Role and Policy Deployment](#automating-aws-iam-role-and-policy-deployment).

Adding the cross-account ARN to Cado can also be automated using Cado’s API. See [Automating Cado Cross-Account Creation](#automating-cado-cross-account-creation).
:::

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

:::info
The Cado Cross-Account Policy includes permissions to acquire various AWS resources. You can customize it by removing permissions that are not needed for your use case:

- **EC2 permissions** are required to acquire EC2 systems.
- **KMS permissions** are needed for acquiring KMS-encrypted volumes.
- **SSM permissions** are necessary for triage captures.
- **S3 permissions** allow importing from S3 buckets in other accounts.
- **CloudTrail permissions** enable importing CloudTrail logs from other accounts.
- **ECS permissions** are required to import ECS containers.
- **EC2 de-register permissions** are needed for importing AMI images cross-account.

If you modify the **Maximum session duration**, note that the minimum currently supported by Cado is 1 hour.

If you prefer using an existing IAM role with proper EC2 access, update the trust relationship with the following JSON, replacing `111111111111` with the ID of your primary AWS account:

```json
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Effect": "Allow",
           "Principal": {
               "AWS": "111111111111"
           },
           "Action": "sts:AssumeRole",
           "Condition": {}
       }
   ]
}
```

You can further restrict this by specifying a specific Cado role rather than trusting the entire account. For more details, see the AWS documentation on [IAM policy elements](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html).
:::

## Step 2: Add the Target AWS Role ARN to the Cado Platform

Once the cross-account role is created in the target AWS account (`222222222222`), add the Role ARN to the Cado platform:

1. **Log into the Cado platform** and go to `Settings > Cloud`.
2. Click the **Create Role** button.
3. Enter the IAM Role ARN created in Step 1, and provide an **Account Alias (Cloud ID)**. The alias should include the AWS account number for clarity.

   ![Add Role](/img/add-role.png)

4. The Cado platform will validate the role to ensure it is assumable. Once validated, the account alias will appear in the list of available AWS accounts.

5. By default, Cado will perform an **Account Check** to confirm the required permissions are in place for successful acquisitions. You can skip this by unchecking the "Run account check after adding account" option. For more information, refer to the [Account Check guide](/cado/manage/monitoring#account-check).