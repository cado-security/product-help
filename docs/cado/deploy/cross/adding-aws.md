---
title: Adding AWS accounts to Azure/AWS/GCP
hide_title: true
sidebar_position: 2
---

# Adding AWS accounts to Azure, AWS, or GCP

To enable cross-cloud access for AWS accounts, you need to set up an IAM role in each AWS account from which you want Cado to collect data. Follow the steps below to add AWS accounts. Ensure you have the required permissions to create IAM roles.

### Steps to Add an AWS Account

1. **Log in to the Target AWS Account**  
   Start by logging into the AWS account where you want to grant access.

2. **Create an IAM Group**  
   Follow [these AWS instructions](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_create.html) to create an IAM group in the target account.

3. **Create an IAM Role**  
   - Create a new IAM role.  
   - Attach a policy with the necessary permissions. You can find the policy [here](https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml).  
   - For step-by-step instructions on creating roles and policies, refer to AWS documentation on [creating policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html) and [creating roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html).

4. **Add the IAM User to the Group**  
   Once the IAM role is created, add your IAM user to the newly created group by following [this guide](https://docs.aws.amazon.com/singlesignon/latest/userguide/adduserstogroups.html).

5. **Generate Access Keys**  
   Generate access keys for the IAM user. These keys are needed to access the AWS account. Follow the [AWS instructions](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) to create and securely store the access keys.

6. **Add the IAM Role to Cado**  
   - In the Cado platform, go to **Settings** > **Cloud** > **Create Role**.  
   - Select the **AWS** tab, then provide a name for the role.  
   - Enter the access key and secret key you generated earlier.

7. **Verify Access in Cado**  
   To verify that Cado can access the AWS account:  
   - Open an investigation in Cado.  
   - Select **Import** > **Cloud**.  
   - Choose the AWS role you created.  
   - Confirm that resources from the target AWS account are visible.

## Adding AWS Accounts to Cado from Azure or GCP Deployments

You can import AWS accounts into Cado from deployments on Azure or GCP. To do this, go to **Settings** > **Cloud Accounts**, and add the AWS account.

![Add Role](/img/add-role.png)

### Importing AWS EC2 Data

AWS EC2 instances can currently only be imported across clouds using one of the following methods:  
- **SSM Triage Acquisition**  
- **EBS Direct Acquisition**: Available through **Settings** > **Experiments** > **EBS Direct API**.

This limitation exists due to the way data is collected from EC2 instances.
