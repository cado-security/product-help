---
title: Response Actions
hide_title: true
sidebar_position: 4
---

# Response Actions

Response Actions makes it possible to perform remediation actions in response to malicious activity being identified on a virtual machine.

Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add this permission to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on.

| Action | Description | Permissions
| -------- | ----------- | ----------|
| Stop Instance | Stops an EC2 instance using the AWS API | ec2:StopInstances |

*NOTE: In order to perform an action on an asset in a different AWS account, you must have [Cross Account roles](/cado-response/deploy/aws/iam/cross-account-creation.md) configured and have added the relevant permission to the role in the different account*

Currently, response actions only supports AWS EC2 instances as the target. To invoke an action, do the following: 

1. Acquire an EC2 using the Cado Host SSM option, see [EC2 Import](/cado-response/discovery-import/import/aws/aws-ec2.md) for instructions
2. Navigate to the "Automated Investigation" tab
3. Select the instance id from the "Suspected Compromised Assets" table
![Actions](/img/actions-tab.png)
4. A panel should now be visible on the right - select the desired action and click "Invoke"
