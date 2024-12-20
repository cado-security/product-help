---
title: Automating collection from detections
hide_title: true
sidebar_position: 3
---

# How to automate data collection from detections

The **Detections** area of the platform (/detections/integrations) helps streamline your Security Operations Center (SOC) by enabling end-to-end workflow automation for investigations. You can easily connect various alert sources, automatically collect and process critical data, and integrate results into tools like SIEMs, task managers, and other productivity systems.

## Collecting Data After CrowdStrike and Defender Alerts

To get started, watch the video below that demonstrates how to ingest alerts from Microsoft Defender. The same process applies to CrowdStrike. Here's a summary of the steps:

1. **Create an XDR Connection**  
   Go to ‘Settings’ > ‘Integrations’ > ‘XDR’ (/settings/integrations/xdr). For details on required API permissions, see the [CrowdStrike Integration Guide](/cado/integrations/xdr/crowdstrike) and the [Defender Integration Guide](/cado/integrations/xdr/defender).

2. **Set Up a Detection Rule**  
   In the **Detections** area, select one of the supported threat detection sources (/detections/integrations) to create a detection rule.

<video src="/img/detections-set-up.mp4" controls width="90%"></video>

## Collecting Data After Alerts from Other XDR Platforms

You can trigger an import from the Cado platform by creating a webhook from your XDR platform, then using the [Cado API](/cado/integrations/api-overview) to initiate the import via a SOAR platform or your own API integration.

### SentinelOne
To create a webhook:
1. Visit the SentinelOne [Singularity Marketplace](https://www.sentinelone.com/partners/singularity-marketplace/).
2. Search for "Webhook" to create and configure the webhook.

## Collecting Data After AWS GuardDuty Alerts

1. **Create an Environment**  
   Navigate to **Environments** (/environments) and click the **Create Environment** button. Name the environment and define the scopes by selecting **Add Group**. For example, you can create a scope that covers all EC2 instances across all accounts, with optional filtering by region or tag.

   ![Create Environments](/img/environments-create.png)

   Click **Save** to create the environment.

2. **Set Up a Detection Rule for GuardDuty**  
   In the **Detections** area (/detections/integrations), select **GuardDuty** as the source to create a detection rule. The configuration process is similar to XDR platforms, with a few differences:

   - On **Page 2** of the wizard, select the **Environment** instead of an XDR connection.
   - On **Page 3**, specify response actions if a malicious or suspicious activity is detected by Cado. Under 'Acquisition Type' you can also configure Cado to perform a full acquisition which will acquire the full EBS volume. This is in addition to performing a triage collecion. Note that the full EBS volume will not be processed - processing can be triggered manually in the 'Evidence' tab within the appropriate investigation.

   Currently, Cado supports the following response actions for EC2 instances:

   | Action | Description | Required Permissions |
   | -------- | ----------- | ---------- |
   | Stop Instance | Stops an EC2 instance using the AWS API | `ec2:StopInstances` |
   | Isolate Role | Adds a "deny all" inline policy to isolate the IAM role attached to the EC2 instance | `iam:GetInstanceProfile`, `iam:PutRolePolicy` |
   | Isolate Security Group | Replaces the security group of an EC2 instance with a blank one | `ec2:CreateSecurityGroup`, `ec2:RevokeSecurityGroupEgress`, `ec2:ModifyInstanceAttribute` |

   Ensure the appropriate IAM permissions are added to your Cado role and that the role has access to the resources on which you want to invoke actions.

   ![Full Acquisition](/img/guardduty-full-acquisition.png)

## Collecting Data After Wiz Alerts

For instructions on automatically processing systems detected by Wiz, refer to the [Wiz Forensics Integration Guide](/cado/integrations/cnapp/wiz).

## Managing Detection Rules

You can manage detection rules in the **Rules** area (/detections/rules). This interface allows you to easily create, enable/disable, edit, and delete rules as needed.

![Manage Rules](/img/detections-rules.png)
