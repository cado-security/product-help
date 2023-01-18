---
title: Cross Account Creation
hide_title: true
sidebar_position: 2
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
AWS resources in other accounts can be made accessible to the Cado platform via AWS roles.  For example, if you have 100 accounts, you can grant Cado access to all 100 accounts which will allow the platform to acquire, process and analyze evidence across multiple accounts.

### High-Level Summary
The below examples will outline how to grant permission for Cado to access a single secondary account, however this same process can be used for as many additional accounts as needed.

In this guide we will create:
1. An **IAM role** in your secondary account, where you will acquire evidence from, with a trust relationship to your primary account. 
2. An **IAM policy** in your primary account where Cado is deployed.


The instructions below will allow cross-account access from account `111111111111` (the primary account where Cado is deployed) to a secondary account `22222222222` (where you will be acquiring evidence from).

### Prepare Secondary Account

- In your secondary account avigate to **IAM > Roles** and click **Create Role**. Under "Select type of trusted entity", select "Another AWS Account" and enter the account ID of your primary account (`111111111111` in this example).

![Create Role](/img/create-role.png)

- Click **Next**, and in the permissions wizard attach the Cado Cross-Account Policy [located here](https://cado-public.s3.amazonaws.com/policy-in-cross-account.json) then click **Next**, then **Next** again.

- Click through to review and give the role a name. The role name **_must_** include the text `CadoResponse` (we use `CadoResponseSecondRole` in this example).

:::warning
If the secondary account role name does not contain the text `CadoResponse` (case sensitive) cross account acquisition will not work.
:::


:::info
The Cado Cross-Account Policy includes permissions to acquire a variety of AWS resources. You can remove permissions that are not needed for your use case.
* The EC2 permissions are required are acquire EC2 systems.
* The KMS permissions are required to acquire KMS encrypted volumes.
* The SSM permissions are required for Triage captures.
* The S3 Permissions are required to import from S3 buckets in other accounts.
* The CloudTrail permissioms are required to import CloudTrail logs in other accounts.
* The ECS permissions are required to import ECS containers in other accounts.
* The EC2 de-register permission is required to import AMI images cross-account.
:::

:::info
If you choose to change **Maximum session duration**, the minimum currently supported by Cado is 1 hour.
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

- In your primary account navigate to **IAM** > **Policies** and click **Create Policy**.
- Select the "JSON" tab and insert the below JSON, substituting the details of your secondary account role created in the above step.
    - If you will be acquiring from multiple 'secondary' accounts, add their respective sedondary roles to the `Resource` list.
- Click **Next** and name the policy `CadoResponseCrossAccountPolicy`, then click **Create Policy**.

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

:::warning
The naming convention of the IAM policy `CadoResponseCrossAccountPolicy` is important.  This name should not be changed.
This policy allows Cado Response to list the cross-account roles available.
:::

:::info
IAM Policies are limited to 6,144 characters, so if the number of secondary accounts will exceed this character limit you can create additional policies in your primary account as we did above. The first policy in the primary account should still be named `CadoResponseCrossAccountPolicy`, and subsequent policies should be named `CadoResponseCrossAccountPolicy_1`, `CadoResponseCrossAccountPolicy_2`, etc.
:::

:::info
Wildcards here will not be valid to Cado, roles must be listed in full.
:::

:::info
If you created multiple cross account policies in your primary account (to circumvent IAM policy character limits) and your platform was deployed before **version 1.5.1** you will need to adjust the IAM Role for the Cado platform. 

Ensure that the `myCadoResponseRole` inline policy attached to the platform's IAM Role contains:

```json
{
    "Action": [
            "iam:GetPolicy",
            "iam:GetPolicyVersion"
    ],
    "Resource": "arn:aws:iam::*:policy/CadoResponseCrossAccountPolicy*",
    "Effect": "Allow"
}
```
*(the only difference is the trailing "\*"")*
:::


## Automated Cross Account Deployment Using CloudFormation StackSets and AWS Organisations or Terraform

If you use Terraform, you can see an example of how to automatically add the cross-account policy to new accounts at https://github.com/cado-security/cado-terraform-role-example

If you want to process data sources such as EC2 from one account into another, Cado requires cross account access via IAM. 
- You only need to install Cado into a single region in a single account. 
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

You will then need to add the list of roles that were created in each account to the "AssumeRole" section of the primary Cado role that is created at installation time. Cado uses the list of trusted roles in other accounts to populate the cross-account options shown to a user.  See the section **[Prepare Primary Account](#prepare-primary-account)** for more details.
