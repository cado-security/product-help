---
title: Automated Investigation
hide_title: true
sidebar_position: 4
---

# Automated Investigations

The Automated Investigation tab provides a summary of what Cado has determined during its investigation.

The Automated Investigation includes:
* A description of how the investgation was triggered
* The verdict - a one line description of what Cado determined has happened
* A set of suspected compromised assets

The timeline displays up to 50 events. Events are more likely to be included if they are malicious, tagged by a user, happened in rapid succession, etc.

![Automated Investigation](/img/automated-investigation.png)

## View Asset

Clicking "view" on a suspected compromised asset opens up a sidebar containing metadata about the asset.

![Metadata Sidebar](/img/metadata-sidebar.png)

## Response Actions

Response Actions make it possible to perform remediation actions in response to malicious activity being identified on a virtual machine.

Currently, Response Actions only supports [AWS EC2 instances acquired as a triage collection](../discovery-import/import/aws/aws-ec2.md#triage-capture). To invoke an action, select the instance id from the "Suspected Compromised Assets" table

Using the panel on the right - select the "Actions" tab, then the desired action and click "Invoke"
![Actions](/img/actions-tab.png)

### Permissions Required
Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add these permissions to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on.

| Action | Description | Required Permissions
| -------- | ----------- | ----------|
| Stop Instance | Stops an EC2 instance using the AWS API | ec2:StopInstances |
| Isolate Role | Isolates the IAM role attached to an EC2 instance. Isolated by adding a deny all inline policy to the given IAM role. | iam:GetInstanceProfile iam:PutRolePolicy |

*NOTE: In order to perform an action on an asset in a different AWS account, you must have [Cross Account roles](/cado-response/deploy/aws/iam/cross-account-creation.md) configured and have added the relevant permission to the role in the different account*


