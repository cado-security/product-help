---
title: Adding AWS accounts to Azure/AWS/GCP via Keys
hide_title: true
sidebar_position: 6
---

# Adding AWS accounts to Azure, AWS, or GCP via Keys

To enable cross-cloud access for AWS accounts, you need to set up an IAM role in each AWS account from which you want / Forensic Acquisition and Investigation to collect data. Follow the steps below to add AWS accounts. Ensure you have the required permissions to create IAM roles.

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

6. **Add the IAM Role to / Forensic Acquisition and Investigation**  
   - In the / Forensic Acquisition and Investigation platform, go to **Settings** > **Accounts** and click **Create an account**.
   - Select **AWS** from the set of providers.
   - Select the **AWS Keys** option, then provide a name for the role.  
   - Enter the access key and secret key you generated earlier.

7. **Verify Access in / Forensic Acquisition and Investigation**  
   To verify that / Forensic Acquisition and Investigation can access the AWS account:  
   - Open an investigation in / Forensic Acquisition and Investigation.  
   - Select **Import** > **Cloud**.  
   - Choose the AWS role you created.  
   - Confirm that resources from the target AWS account are visible.

## Adding AWS Accounts to / Forensic Acquisition and Investigation from Azure or GCP Deployments

You can import AWS accounts into / Forensic Acquisition and Investigation from deployments on Azure or GCP. To do this:

- In the / Forensic Acquisition and Investigation platform, go to **Settings** > **Accounts** and click **Create an account**.
- Select **AWS** from the set of providers.
- The **AWS Role** option should already be selected.
- Provide an **Account Name** and enter the **Role ARN**.
- Leave the 'Run account check after adding account' checkbox selected, which will validate the account has the correct permissions after selecting 'Continue'.
- Navigate to the 'Accounts' table and the newly created AWS account should present. If configured correctly, you will see a green coloured health status.

### Importing AWS EC2 Data

AWS EC2 instances can currently only be imported across clouds using one of the following methods:  
- **SSM Triage Acquisition**  
- **EBS Direct Acquisition**: Available through **Settings** > **Experiments** > **EBS Direct API**.

This limitation exists due to the way data is collected from EC2 instances.
