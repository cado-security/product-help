---
title: Cross Account Creation
hide_title: true
sidebar_position: 1
---

# Cross Account Access Creation
EC2 instances in other accounts can be made accessible to Cado Response via AWS roles.  For example, if you have 100 accounts, you can grant Cado Response access to all 100 accounts which will allow the platform to acquire, process and analyze evidence across multiple accounts.

### High-Level Summary
The below examples will outline how to grant permission for Cado Response to access a second account, but this same process can be used to add as many as needed.

To start, create:
- An **IAM role** (`CadoResponseSecondRole`) in your second account, where you will acquire evidence from, with:
    - **Read/Write** access to EC2
    - A **trust relationship** to the primary account. 
- An IAM policy named `CadoResponseCrossAccountPolicy` in your primary account where Cado Response is installed.

:::info
This will list the cross-account roles available to Cado Response.  It must be attached to your Cado instance role
:::

![Secondary Account Access](/img/secondary.png)

The instructions below will allow cross-account access from account 111111111111 (the **primary** account, i.e. the one with the Cado Response instance running) to a **second** account 22222222222 (where you will be acquiring EC2 evidence from).

### Prepare Secondary Account

In your **second** account (222222222222 in this example), if one does not exist already, create a role with read/write access to EC2.
- Navigate to **IAM > Roles** and click **Create Role**
- Under `Select type of trusted entity`, select **Another AWS Account**
- Enter the account ID of your **primary** account (111111111111 in this example)

![Create Role](/img/create-role.png)

- Click **Next**, and in the permissions wizard attach `AmazonEC2FullAccess` then click **Next**, then **Next** again.

![Full Access](/img/full-access.png)

- Click through to review and give the role a name (will be referred to as `CadoResponseSecondRole` in following examples but this can be anything you’d like)

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