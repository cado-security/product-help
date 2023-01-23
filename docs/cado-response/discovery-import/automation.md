---
title: Automation Rules (Beta)
hide_title: true
sidebar_position: 2
---

# Configuring Automation Rules

**This feature is currently in beta - to enable this feature please reach out to Customer Support**

The Cado platform allows you to define automation rules to better prepare for incidents in cloud environments. These automation rules allow you to define in advance
* What data you want to collect
* The alert triggers taht will trigger a response
* Against which cloud resources, and
* What response actions you want to take

Automation in Cado is based upon three main concepts
* **Scopes** - Scopes are sets of cloud resources within a single cloud provider (currently only AWS supported). These cloud resources may be defined by the region and/or account in which they reside, the service (e.g. EC2, S3), and any tags applied to those resources
* **Environments** - Environments are sets of one or more scopes that you want to treat similarly - for example an application that spans multiple services across multiple cloud environments
* **Rules** - Rules are sets of actions that will automatically take place in the event that an alert gets triggered

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
* ***Alert Type***  - the type of alert that will trigger the rule (e.g. GuardDuty)
* ***Asset Type*** - the type of cloud resource to which the rule will apply (e.g. EC2)
* ***Investigation Type*** - the type of invesigation to perform. This currently has three options
    * *Default* - Performs triage collection from any workload specified in the alert
    * *Triage* - Performs triage collection from any workload specified in the alert
    * *Full* - Performs full disk collection from any workload specified in the alert
* ***Response Actions (optional)*** - the actions to take against machines upon which malicious activities have been detected, and machines upon which suspicous activities have been detected. Cado currently supports shutting down EC2 instances, and isolating the IAM roles that the EC2  instance assumes.

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