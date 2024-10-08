---
title: Automatically create a cross-account role
hide_title: true
sidebar_position: 2
---

# How to automatically create a cross-account IAM role in AWS

## Using CloudFormation StackSets to deploy IAM Policy and Role in target AWS accounts

To automate the creation of the IAM Policy and Role in each target AWS Account via CloudFormation StackSets across your AWS organization, you can follow the steps below. More details about CloudFormation StackSets can be found here: [Working with AWS CloudFormation StackSets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html)

![Stacks1](/img/stacks1.png)

1. Go to "StackSets" from your master StackSet account that is enabled to deploy into other accounts.

  ![StackSets Role](/img/stacks2.png)

2.  Click **Create StackSet**

3. Enter the S3 URL as https://cado-public.s3.amazonaws.com/cloudformation/template-organization-stackset-iam-only.json then click **Next**:

  ![Stacks3](/img/stacks3.png)

4. Click **Next** through the next two dialogues, and under "Create StackSet" select any region (this works as IAM is global):

  ![Stacks4](/img/stacks4.png)

5. Once deployed, this will then create a IAM Policy and IAM Role in each target AWS account, that you can view in IAM:

  ![Stacks5](/img/stacks5.png)

:::tip
You will then need to add the newly created cross-account IAM Role ARN to the Cado platform, using the steps outlined [here](#step-2-add-the-target-aws-role-arn-to-the-cado-platform) or if you choose to automate the process, the steps outlined [here](#automating-cado-cross-account-creation)
:::

## Automating Cado Cross-account addition to the Cado UI

As mentioned previously, the second step to adding cross-account access is to add the newly created cross-account IAM Role ARN to the Cado platform. This enables the new AWS account within the Cado platform. To automate this process via the Cado APIs, please see the example Cado API for adding AWS credentials [here](https://github.com/cado-security/cado-api-examples/blob/main/examples/saving_credentials.py).
