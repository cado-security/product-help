---
title: Automatically add cross-account roles to / Forensic Acquisition and Investigation with AWS Organizations
hide_title: true
sidebar_position: 5
---

# How to automatically add cross-account roles to / Forensic Acquisition and Investigation with AWS Organizations

This guide will walk you through how to integrate AWS roles into the platform using AWS Organizations.

This is the recommended way to add cross-account roles you have deployed to the Platform, to enable the platform to import data from multiple AWS accounts.

Alternatively, you can use the [Cado API](/cado/deploy/cross/cross-account-creation-api) to add cross-account roles to the platform.

## Prerequisites

Before starting, ensure that you have the following in place:
- **AWS Organizations** configured with multiple AWS accounts under a single management account.
- **IAM roles** with the necessary cross-account permissions applied to all AWS accounts using [AWS StackSets](/cado/deploy/cross/cross-account-creation-auto) or [manual deployment](/cado/deploy/cross/cross-account-creation).
- **/ Forensic Acquisition and Investigation Access**, specifically with admin rights to manage cloud accounts.


### 1. **Setting Permissions for Account Discovery**

The [ListAccounts](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html) operation is used by / Forensic Acquisition and Investigation to retrieve a list of all accounts within your organization. It can only be executed from the management account of the AWS Organization.

### 2. **IAM roles**

With the necessary cross-account permissions applied to all AWS accounts using [AWS StackSets](/cado/deploy/cross/cross-account-creation-auto) or [manual deployment](/cado/deploy/cross/cross-account-creation).


### 3. **Set Cross-Account IAM Role**


Next, configure the cross-account IAM role that the / Forensic Acquisition and Investigation platform will use to interact with other accounts:

- Enter the role name (e.g., `CadoResponseRole`) in the `Cross Account IAM Role Name` field.
- Click `Continue` to trigger the discovery process using the provided role.

Ensure that only the role name is used, not the entire ARN. The role name should be the name of the role that was applied to all AWS accounts using the StackSet.

An example is below:

![Select List Accounts Role 2](/img/aws-orgs-list-accounts-role-2.png)



### 4. **Pipeline execution**
The pipeline to add accounts will then execute, and can be monitored in the pipeline view.

![Pipeline View](/img/aws-orgs-pipeline.png)


## Performing Account Checks

Once the accounts are added to the / Forensic Acquisition and Investigation platform, it's recommended to regularly run Account Checks to ensure the necessary permissions are still in place for acquisitions. For details on running these checks, refer to [Account Check](/cado/manage/monitoring#account-check).
