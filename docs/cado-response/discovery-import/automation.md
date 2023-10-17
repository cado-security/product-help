---
title: Automation Rules (Beta)
hide_title: true
sidebar_position: 3
---

# Configuring Automation Rules

**This feature is currently in beta - to enable this feature go to Settings > Experiments**

The Cado platform allows you to define automation rules to better prepare for incidents in cloud environments. These automation rules allow you to define in advance
* What data you want to collect
* The alert triggers that will trigger a response
* Against which cloud resources, and
* What response actions you want to take

Automation in Cado is based upon three main concepts
* **Scopes** - Scopes are sets of cloud resources within a single cloud provider (currently only AWS supported). These cloud resources may be defined by the region and/or account in which they reside, the service (e.g. EC2, S3), and any tags applied to those resources
* **Environments** - Environments are sets of one or more scopes that you want to treat similarly - for example an application that spans multiple services across multiple cloud environments
* **Rules** - Rules are sets of actions that will automatically take place in the event that an alert gets triggered

to give an example of how the rules work lets take the following. A GuardDuty Alert has been raised with a severirty level of 5, the alert is for an EC2 that has been compromised, we then check the automation rules to determine if ther is a rule set up for GuardDuty alerts for EC2  in region & accouint the EC2 reside in. If a rule matches we then prform the investigation based on the Investigation type defined in the rule i.e full investigation. After the import is complete we can check the click the automated investigation tab to see if all malicous and suspispious activity in relation to the compromised EC2. You can then select the piece of evidence and view the cloud resource there a panel will open with the metadata and actions tab. the metadata tab is just metadata about the resource and the actions tab is the remediationactions that can be preformed on the compromised resource. To autmate the remediation actions you can enable this in the settings -> advanced which will do the above until the full investiagation is complete and will automatically invoke the actions defined in the automation rules for malicious or suspicious activity 

## Creating a Scope

To create a scope, navigate to the Scopes tab and hit "Create Scope" button. Enter the name of the scope, the regions, the accounts, the services covered and any tags that identify your services. If you specify multiple tags, resources tagged with any one of those tags will be included.

Hit 'Save' to create the scope

![Create Scope](/img/scopes.png)

## Creating an Environment

To create an Environment, navigate to the Environments tab and hit "Create Environment" button. Enter the name of the environment, and choose the scopes to add to the environment from the bottom of the screen. Click "Add scope" and these will add to the list of selected scopes.

Hit 'Save' to create the environment

![Create Environments](/img/environments.png)

## Creating a Rule

*NOTE: You can create rules without necessarily creating scopes or environments*

To create an rule, navigate to the Rules tab and hit "Create Rule" button.

Enter the name of the rule and a description. Specify

* ***Environments (optional)*** - the environments specifying the assets against which the rule will run. If this is left blank, this rule will trigger against any alert identifying an affected workloads
    * *Monitoring Enabled* - if monitoring is checked then GuardDuty Monitoring will be enabled on all regions in the cloud accounts specified within a particular Environment(s), this will run every 5 minutes to check for new alerts that contain a minimum severity of 5
* ***Alert Type***  - the type of alert that will trigger the rule (e.g. GuardDuty)
* ***Asset Type*** - the type of cloud resource to which the rule will apply (e.g. EC2)
* ***Investigation Type*** - the type of invesigation to perform. This currently has three options
    * *Default* - Performs triage collection from any workload specified in the alert
    * *Triage* - Performs triage collection from any workload specified in the alert
    * *Full* - Performs full disk collection from any workload specified in the alert
* ***Response Actions (optional)*** - the actions to take against machines upon which malicious activities have been detected, and machines upon which suspicous activities have been detected. Cado currently supports shutting down EC2 instances, isolating the IAM roles of that the EC2 instance assumes and isolate security group attached to the EC2.

Hit 'Save' to create the rule

![Create Rule](/img/rules.png)

### Permissions Required
Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add these permissions to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on.

| Action | Description | Required Permissions
| -------- | ----------- | ----------|
| Stop Instance | Stops an EC2 instance using the AWS API | ec2:StopInstances |
| Isolate Role | Isolates the IAM role attached to an EC2 instance. Isolated by adding a deny all inline policy to the given IAM role. | iam:GetInstanceProfile iam:PutRolePolicy |

## Managing Rules ##

You can configure multiple response rules. In the event that a resource is covered by multiple rules, the first rule in the list applies

![Manage Rules](/img/rules-list.png)

## Example Scenario ##

A GuardDuty Alert has been raised with a severity level of 5. The alert is for an EC2 that has been compromised. An investigation will be triggered, but before this, we check the Automation Rules defined - if there is a rule set up for GuardDuty alerts for EC2  in the Region & Account the compromised EC2 resides in.
If a rule matches, we then perform the investigation based on the Investigation type defined in the rule (i.e full investigation).

After the import is complete we can check the automated investigation tab to view all malicious and suspicious activity in relation to the compromised EC2.
You can then select the cloud resource and view the cloud resource. A panel will open with the metadata and actions tab. The metadata tab contains metadata about the resource and the Actions tab contains actions which can be performed on the compromised resource.

To automate the remediation actions on the compromised resource, you can enable this under the Settings -> Advanced tab, this would avoid you having to manually invoke the actions via the cloud resource panel. This will automatically invoke the actions defined in the Automation Rule for malicious or suspicious activity after the investigation is complete.