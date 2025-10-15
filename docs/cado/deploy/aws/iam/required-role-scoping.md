---
title: Required Role Scoping
hide_title: true
sidebar_position: 8
---

# Required Role Scoping

## Upgrade / Forensic Acquisition and Investigation Instance

Upgrade your instance to any version >= MIN_VERSION


## Switch to Instance Roles

Switch your platform to run using the instance role. 

> **Note:** If you originally deployed with a version >=2.161.0 you will already be using the new instance role and can skip this step. If this is the case you won’t have the ‘Scoped Up Instance Role’ settings section in step 2. If you aren’t sure, please share a log bundle with the / Forensic Acquisition and Investigation team and we can confirm if you need this step or not.

1. Update your `myCadoResponseInstanceRolePolicy` to match https://github.com/cado-security/Deployment-Templates/blob/main/new-roles/AWSInstanceRole.json

> **NOTE:** Replace MY_CADO_BUCKET with the name of your Cado S3 bucket. Replace CADO_REGION with the region you deployed / Forensic Acquisition and Investigation in. Replace CADO_ACCOUNT_NUMBER with the account number where / Forensic Acquisition and Investigation is deployed.

   i. This adds the permissions required to run the platform to the `myCadoResponseInstanceRolePolicy`, which leads to some duplications with `myCadoResponseRolePolicy`. The duplicate permissions will be removed in a later step.

   ii. If you are using Terraform, then our latest version (https://github.com/cado-security/Deployment-Templates/tree/main/aws_v2) already includes the required role.

3. In **Settings > Advanced > Scoped Up Instance Role**: clicking `Check Instance Role` will verify that your new role is set up correctly and if the check passes, swap your instance to use it. This tells / Forensic Acquisition and Investigation to use `myCadoResponseInstanceRole` for running the platform and `myCadoResponseRole` for acquisition.

![Scoped up Instance Role](/img/scoped-up-instance.png)   


## Enable EBS Direct Acquisition

Switch to using EBS direct access. This both reduces the permissions required, and significantly increases the speed of EC2 acquisitions. If you have already enabled the EBS direct access beta you can skip this step. 

1. Update your `myCadoResponesRole` role and cross account roles to the latest. The extra permissions you need are: ebs:ListSnapshotBlocks, ebs:ListChangedBlocks, ebs:GetSnapshotBlock.

   i. If you are using terraform the latest version of the / Forensic Acquisition and Investigation role (in https://github.com/cado-security/Deployment-Templates/tree/main/aws_v2) and cross account roles (https://github.com/cado-security/Deployment-Templates/tree/main/cross-account) include these already.

2. Enable the EBS Direct Acquisitions flag in Settings > Experiments

![EBS Direct Acquisition](/img/ebs-direct-acquisition.png)

3. Import an EC2 (full disk), ami, volume or snapshot


## Scope down Permissions

Remove now unused permissions (Optional but suggested)

1. Update your `myCadoResponseInstanceRole` to match https://github.com/cado-security/Deployment-Templates/blob/main/new-roles/AWSInstanceRole.yaml

2. Update your `myCadoResponseRole` and all cross account roles to https://github.com/cado-security/Deployment-Templates/blob/main/new-roles/AcquisitionPolicy.yaml

## Account & Platform Check

Run a health and platform check on your account to confirm everything is working as expected.

#### 1. **Account Health Check**
- Navigate to **Settings** on your Platform.  
- Go to **Accounts** and select the desired account.  
- Click **Run Account Check** to perform the health check.

#### 2. **Platform Check**
- On your / Forensic Acquisition and Investigation Platform, navigate to the **Platform** page.  
- Click **Run a Platform Check** to initiate the check.
