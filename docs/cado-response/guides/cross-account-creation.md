---
title: AWS Cross Account Creation
hide_title: true
sidebar_position: 1
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

# Cross Account Access Creation
EC2 instances in other accounts can be made accessible to Cado Response via AWS roles.  For example, if you have 100 accounts, you can grant Cado Response access to all 100 accounts which will allow the platform to acquire, process and analyze evidence across multiple accounts.

### High-Level Summary
The below examples will outline how to grant permission for Cado Response to access a second account, but this same process can be used to add as many as needed.

To start, create:
- An **IAM role** (`CadoResponseSecondRole`) in your second account, where you will acquire evidence from, with:
    - **Read/Write** access to EC2
    - A **trust relationship** to the primary account. 
- An IAM policy named `CadoResponseCrossAccountPolicy` in your primary account where Cado Response is installed.

:::warning
The naming convention of the IAM policy `CadoResponseCrossAccountPolicy` is important.  This name should not be changed.
This policy allows Cado Response to list the cross-account roles available.  It must be attached to your Cado instance role
:::

![Secondary Account Access](/img/secondary.png)

The instructions below will allow cross-account access from account 111111111111 (the **primary** account, i.e. the one with the Cado Response instance running) to a **second** account 22222222222 (where you will be acquiring EC2 evidence from).

### Prepare Secondary Account

In your **second** account (222222222222 in this example), if one does not exist already, create a role with read/write access to EC2.
- Navigate to **IAM > Roles** and click **Create Role**
- Under `Select type of trusted entity`, select **Another AWS Account**
- Enter the account ID of your **primary** account (111111111111 in this example)

![Create Role](/img/create-role.png)

- Click **Next**, and in the permissions wizard attach the Cado Response Cross-Account Policy at https://cado-public.s3.amazonaws.com/policy-in-cross-account.json then click **Next**, then **Next** again.

:::info
This document defines the Cross-Account role used by Cado Response. You need to add this into accounts that you want Cado Response to import from. You can remove permissions that are not needed for your use case as follows:
* The EC2 permissions are required are acquire EC2 systems.
* The KMS permissions are required to acquire KMS encrypted volumes.
* The SSM permissions are required for Memory Forensics.
* The S3 Permissions are required to import from S3 buckets in other accounts.
* The CloudTrail permissioms are required to import CloudTrail logs in other accounts.
* The ECS permissions are required to import ECS containers in other accounts.
* The EC2 de-register permission is required to import AMI images cross-account.
:::


- Click through to review and give the role a name (will be referred to as `CadoResponseSecondRole` in following examples but this can be anything you'd like)

:::info
If you choose to change **Maximum session duration**, the minimum currently supported by Cado Response is 1 hour.
:::

:::info
The above steps walked through how to create a new role, however, if you already have a role with appropriate EC2 access, you can instead edit its trust relationship to include the below AWS **principal** (replacing the account number with your own primary account). 

The below JSON is only required if you choose to use an existing role and you didn't create a new role as recommended earlier.

```json
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Effect": "Allow",
           "Principal": {
               "AWS": "11111111111"
           },
           "Action": "sts:AssumeRole",
           "Condition": {}
       }
   ]
}
```

You may choose to limit this further and trust only your specific Cado role rather than the entire primary account.  See AWS JSON policy elements: **[Principal - AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html)** for more information.
:::

### Prepare Primary Account

In your **primary** account (111111111111 in this example)
- Create `CadoResponseCrossAccountPolicy` in Primary Account
- Currently only managed policies are supported (rather than in-line), so in the AWS console navigate to **IAM** > **Policies** and click **Create Policy** in your primary account where Cado Response is installed.
 - Select the JSON tab
- The JSON  should look like the below, substituting in the details of your second account and the role you just created in the other account. The `Resource` list may be appended with as many cross account roles as you require.

:::info
Wildcards here will not be valid to Cado Response, roles must be listed in full.
:::

```json	
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Effect": "Allow",
           "Action": "sts:AssumeRole",
           "Resource": [
               "arn:aws:iam::222222222222:role/CadoResponseSecondRole"
           ]
       }
   ]
}
```

- Click **Next** to review and give it the name `CadoResponseCrossAccountPolicy` (this name is required)
- Then click **Create Policy**


### Attach Policy in the Primary Account
- Still in the **primary** account, under **IAM** > **Roles** find the role for your Cado Response instance.
- If you are unsure, this is the role specified in the Cado UI in **Settings > Cloud Connectivity > AWS Role**

    ![AWS Role](/img/aws-role.png)

- Click **Attach Policy**
    
    ![Attach Policy](/img/attach-policy.png)

- Then attach the `CadoResponseCrossAccountPolicy` you just created.

    ![Attach Role](/img/attach-permissions.png)

The roles listed in `CadoResponseCrossAccountPolicy` will now be available in the Cado Response UI and you can import instances from them as normal.


## Automated Cross Account Deployment Using CloudFormation StackSets and AWS Organisations or Terraform

If you use Terraform, you can see an example of how to automatically add the cross-account policy to new accounts at https://github.com/cado-security/cado-terraform-role-example

If you want to process data sources such as EC2 from one account into another, Cado Response requires cross account access via IAM. 
- You only need to install Cado Response into a single region in a single account. 
- You can then use CloudFormation StackSets to easily deploy the required IAM Role into all of your accounts across your AWS organisation.
- More details about CloudFormation StackSets can be found here: [Working with AWS CloudFormation StackSets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html)

![Stacks1](/img/stacks1.png)

Go to "StackSets" from your master StackSet account that is enabled to deploy into other accounts.

![StackSets Role](/img/stacks2.png)

Click Click **<Highlight color="#F78631">Create StackSet</Highlight>**

Enter the S3 URL as https://cado-public.s3.amazonaws.com/cloudformation/template-organization-stackset-iam-only.json then click Next:

![Stacks3](/img/stacks3.png)

Click Next through the next two dialogues, and under "Create Stack Set" select any region (this works as IAM is global):

![Stacks4](/img/stacks4.png)

Once deployed, this will then create a role in each target account, that you can view in IAM:

![Stacks5](/img/stacks5.png)

You will then need to add the list of roles that were created in each account to the "AssumeRole" section of the primary Cado Response role that is created at installation time. Cado Response uses the list of trusted roles in other accounts to populate the cross-account options shown to a user.  See the section **[Prepare Primary Account](#prepare-primary-account)** for more details.
