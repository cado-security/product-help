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
The Cado platform can access AWS resources across multiple accounts using AWS roles. For instance, if you manage 100 accounts, you can grant Cado access to each one, enabling the platform to acquire, process, and analyze evidence from all accounts seamlessly.

### High-Level Summary
The examples below outline how to grant permission for Cado to access a single secondary account. However, you can use the same process for granting access to multiple additional accounts as needed.

In this guide, we will create an **IAM role** in your secondary account, from which you will acquire evidence, and establish a trust relationship with your primary account.

The following instructions enable cross-account access from the primary account (where Cado is deployed) with account ID `111111111111`, to a secondary account (from which you will acquire evidence) with account ID `222222222222`.

### Prepare Secondary Account

- In your secondary account navigate to **IAM > Policies**- and click **Create Policy**. In the Permissions Wizard, attach or paste the Cado Cross-Account Policy [located here](https://cado-public.s3.amazonaws.com/policy-in-cross-account.json), then click **Next**. Give the Policy a name, then click **Create Policy**.

- After your Policy is created, navigate to **IAM > Roles** and click **Create Role**. Under "Select type of trusted entity", click **Another AWS Account** and enter the account ID of your primary account (`111111111111` in this example).

![Create Role](/img/create-role.png)

- Add the policy you recently created in the steps above, then click **Next** give the role a name. The role name **_must_** include the text `CadoResponse` (we use `CadoResponseSecondRole` in this example). 

:::warning
If the secondary account role name does not contain the text `CadoResponse` (case sensitive), cross account acquisition will not work.
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

### Adding the Role to Cado
Now that we have the role set up in the Secondary account, it's time to add it to Cado. To do this, navigate to the cloud section in the settings and click on the **Add AWS Credentials** button. When prompted, enter the IAM role we just created in the Secondary account and provide an alias for the role.

![Add Role](/img/add-role.png)

Upon submission, Cado will attempt to validate the role, ensuring it's assumable. Once validated, you will see the alias in the list of available accounts, and the role is now ready for use.


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