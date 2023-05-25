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

Response Actions make it possible to perform remediation actions in response to malicious activity being identified on a virtual machine. You can also trigger response actions using [Automation Rules](../discovery-import/automation.md).

Currently, Response Actions only supports [AWS EC2 instances acquired as a triage collection](../discovery-import/import/aws/aws-ec2.md#triage-capture). To invoke an action, select the instance id from the "Suspected Compromised Assets" table

Using the panel on the right - select the "Actions" tab, then the desired action and click "Invoke"
![Actions](/img/actions-tab.png)

### Permissions Required
Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add these permissions to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on.

| Action | Description | Required Permissions
| -------- | ----------- | ----------|
| Stop Instance | Stops an EC2 instance using the AWS API | ec2:StopInstances |
| Isolate Role | Isolates the IAM role attached to an EC2 instance. Isolated by adding a deny all inline policy to the given IAM role. | iam:PutRolePolicy |
| Isolate Security Group | Isolates the security group attached to an EC2. Isolated by creating a blank security group and attaching to the EC2. Due to the behaviour of AWS security groups, existing connections will not be dropped. | ec2:CreateSecurityGroup ec2:RevokeSecurityGroupEgress ec2:ModifyInstanceAttribute |

*NOTE: In order to perform an action on an asset in a different AWS account, you must have [Cross Account roles](/cado-response/deploy/aws/iam/cross-account-creation.md) configured and have added the relevant permission to the role in the different account*



## OpenAI Integration

The [GPT Interactive Incident Response feature](https://www.cadosecurity.com/cado-gpt-3-interactive-incident-response/) in the Cado platform automates incident analysis by leveraging OpenAI Completion API and semantic analysis. It provides a streamlined Q&A interface for investigating forensic evidence, enabling security teams to respond faster and smarter to incidents in the cloud.

![Example](https://www.cadosecurity.com/wp-content/uploads/image6-19.png)

To enable the feature, go to **Settings > Advanced** and provide a valid OpenAI API Key while also enabling the GPT-Indexing checkbox.

Please note the following important information:

:::info
The feature only supports new evidence items and does not have backward compatibility.
:::

:::caution
Enabling this integration has implications:
- All processing pipelines will be indexed with OpenAI.
- Analysts will have the option to send incident summary findings to the OpenAI API service using a dedicated button for summarization.
OpenAI will have access to the data sent to their APIs. Cado does not recommend enabling this for production implementations.
:::

By leveraging the OpenAI Integration, security teams can enhance their incident analysis capabilities. However, it is crucial to carefully consider the implications and exercise caution before enabling this integration in a production environment.