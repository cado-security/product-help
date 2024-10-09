---
title: Automating collection from detections
hide_title: true
sidebar_position: 3
---

# How to automate collection from detections

The 'Detections' area of the platform (/detections/integrations) enables customers to dramatically streamline the effectiveness of their SOC using end-to-end workflow investigation automation capabilities.

Customers are able to easily connect different alert sources across cloud and on-prem systems, respond faster by automatically collecting and processing key data, as well as integrate actionable results to SIEMs, task managers, and other productivity tools.

## Collecting data after Crowdstrike and Defender alerts

To get started, watch the video below which shows how to ingest alerts from Microsoft Defender. The same process also applies to CrowdStrike. In summary:

1. Create an XDR Connection. To do this, navigate to ‘Settings’ > ‘Integrations’ > ‘XDR’ (/settings/integrations/xdr). For information on the API permissions required, see [CrowdStrike](/cado-response/integrations/xdr/crowdstrike) and [Defender](/cado-response/integrations/xdr/defender) documentation.
2. Create a detection rule in 'Detections' by selecting one of the threat detection provider sources in /detections/integrations.

<video src="/img/detections-set-up.mp4" controls width="90%"></video>

## Collecting data after alerts from other XDR platforms
You can trigger an import from the Cado platform by creating a webhook from the XDR platform then calling the [Cado API](/cado-response/integrations/api-overview) to trigger the import via a SOAR platform or your own API integration.

* SentinelOne: Go the SentinelOne [Singularity Marketplace](https://www.sentinelone.com/partners/singularity-marketplace/) and search for Webhook to create a webhook

## Collecting data after AWS GuardDuty alerts

To get started, create an Environment. Navigate to 'Environments' (/environments) and select the 'Create environment' button. Give the environment a name, and choose the scopes to add to the environment by selecting 'Add group'. In the example below, we have created a scope which encompasses all EC2s across all accounts. You can optionally filter by regions and tags.

Hit 'Save' to create the environment.

![Create Environments](/img/environments-create.png)

Next, create a detection rule for GuardDuty by selecting the 'GuardDuty' source in /detections/integrations. The configuration is very similar to that of creating a rule for one of the XDR platforms (see video above), with the following differences:

* On page 2 of the wizard, instead of being prompted to select an XDR Connection, you are prompted to select an Environment (see previous step).
* On page 3 of the wizard, you are able to select response actions if Cado detects a malicious or suspicious alarm. Cado currently supports shutting down EC2 instances, isolating the IAM roles of that the EC2 instance assumes and isolate security group attached to the EC2. Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add these permissions to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on.

| Action | Description | Required Permissions
| -------- | ----------- | ----------|
| Stop Instance | Stops an EC2 instance using the AWS API | ec2:StopInstances |
| Isolate Role | Isolates the IAM role attached to an EC2 instance. Isolated by adding a deny all inline policy to the given IAM role. | iam:GetInstanceProfile iam:PutRolePolicy |
| Isolate Security Group |  Isolates the security group attached to and EC2 instance. Isolated by creating a security group, blanking it and replacing it on the EC2. | ec2:CreateSecurityGroup ec2:RevokeSecurityGroupEgress ec2:ModifyInstanceAttribute |

## Collecting data after Wiz alerts
For details on how to automatically process systems detected by Wiz, see [Wiz Forensics Integration
](/cado-response/integrations/cnapp/wiz).

## Managing Rules ##

Detection rules can be managed in /detections/rules, where you are able to easy create, enable/disable, edit and delete rules.

![Manage Rules](/img/detections-rules.png)
