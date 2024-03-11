---
title: EC2 and EBS
hide_title: true
sidebar_position: 1
---
# AWS EC2 and EBS Support

Cado supports acquisition of EC2 instances. Select the region, and this will populate a list of EC2 instances available. You can filter the list of instances and buckets by instance ID, name, state or public IP address. Select the instance you wish to acquire.

![AWS EC2 Import](/img/aws-ec2.png)

Click on "Continue" .

## Capture Options

For volume capture, set the options for what data you want to capture.

### Triage Capture
To perform a faster triage collection on an EC2 instance using Cado Host, select the button "Use Alternate Triage Acquisition". Please note that this requires that SSM be enabled on the target instance. This will also collect memory from Linux systems.

For more information about about what Cado Host collects see [Collected Artifacts](/cado-host/artifacts.md)

![AWS EC2 details](/img/aws-ec2-options.png)

Click 'Continue', review your selections and click 'Start Import'.

### Data Flow Diagram
For a diagram of how our EC2 disk acquisitions operate, please see our [Knowledge Base](https://cadosecurity.zendesk.com/hc/en-gb/articles/23258594209681-How-do-EC2-acquisitions-work-including-cross-account-and-the-IAM-role).

For a diagram of how our EC2 SSM acquisitions operate, please see our [Knowledge Base](https://cadosecurity.zendesk.com/hc/en-gb/articles/23259323166225-How-do-EC2-collections-over-SSM-work).
