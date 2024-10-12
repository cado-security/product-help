---
title: Automatically deploy a cross-account role with StackSets in AWS
hide_title: true
sidebar_position: 3
---

# How to automatically deploy a cross-account IAM Role in AWS

To automate the deployment of the IAM Policy and Role in multiple AWS accounts within your organization, you can use AWS CloudFormation StackSets. This method allows you to deploy the necessary IAM roles and policies across all target accounts in your organization.

More information on CloudFormation StackSets can be found here: [Working with AWS CloudFormation StackSets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html).

### Steps to Deploy the IAM Policy and Role using CloudFormation StackSets

1. **Open StackSets**  
   From your master StackSet account (the account enabled to deploy resources into other AWS accounts), navigate to "StackSets."

   ![StackSets Role](/img/stacks2.png)

2. **Create a New StackSet**  
   Click **Create StackSet**.

3. **Enter the CloudFormation Template URL**  
   Enter the S3 URL for the CloudFormation template:  
   ```
   https://cado-public.s3.amazonaws.com/cloudformation_v2/StacksetCrossIAM.yaml
   ```  
   Then, click **Next**.

   ![Stacks3](/img/stacks3.png)

4. **Proceed Through the Setup**  
   Click **Next** through the following configuration steps.

5. **Select Region**  
   Under "Create StackSet," select any region (IAM roles are global, so this can be any region).

   ![Stacks4](/img/stacks4.png)

6. **Deploy the StackSet**  
   Once deployed, this will create the required IAM Policy and IAM Role in each target AWS account. You can verify the role and policy by navigating to **IAM > Roles** in the target AWS accounts.

   ![Stacks5](/img/stacks5.png)

:::tip
After deploying the cross-account IAM roles, you will need to add the newly created Role ARN to the Cado platform. Follow the steps outlined [here](#step-2-add-the-target-aws-role-arn-to-the-cado-platform), or to automate this process, refer to [Automating Cado Cross-Account Creation](#automating-cado-cross-account-creation).
:::

## Automating Cross-Account Addition in Cado

Once the cross-account IAM role is created, the next step is to add the IAM Role ARN to the Cado platform. This enables access to the target AWS accounts within Cado.

To automate this process via the Cado API, see the example script for adding AWS credentials in the Cado platform:  
[Example API Script for Adding AWS Credentials](https://github.com/cado-security/cado-api-examples/blob/main/examples/saving_credentials.py).