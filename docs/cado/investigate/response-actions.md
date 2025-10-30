---
title: Response actions
hide_title: true
sidebar_position: 4
---

# What are Response Actions?

Response Actions allow you to take remediation steps when malicious activity is detected on a virtual machine. You can also trigger these actions using [Automation Rules](../discovery-import/automation.md).

Currently, Response Actions support only [AWS EC2 instances acquired as a triage collection](/cado/discovery-import/aws/aws-ec2.md#triage-capture). To initiate a response action, select the instance ID from the "Suspected Compromised Assets" table.

Use the panel on the right to select the **"Actions"** tab, choose the desired action, and click **"Invoke"**.

![Actions](/img/actions-tab.png)

### Permissions Required

Each action requires specific AWS IAM permissions. The table below lists each action, its description, and the permissions needed. Ensure these permissions are added to your / Forensic Acquisition and Investigation role and that the role has the required scope to cover the resource you want to perform actions on.

| Action                  | Description                                                                                                                                 | Required Permissions                               |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| Stop Instance            | Stops an EC2 instance via the AWS API                                                                                                       | `ec2:StopInstances`                                |
| Isolate Role             | Isolates the IAM role attached to an EC2 instance by adding a "deny all" inline policy to the IAM role.                                      | `iam:PutRolePolicy`                                |
| Isolate Security Group   | Isolates the security group attached to an EC2 instance by attaching a new blank security group. Existing connections will not be dropped.   | `ec2:CreateSecurityGroup`, `ec2:RevokeSecurityGroupEgress`, `ec2:ModifyInstanceAttribute` |

**Note**: To perform an action on an asset in a different AWS account, you must have [Cross Account roles](cado/deploy/cross/cross-account-creation.md) configured, and the relevant permissions must be added to the role in the other account.
