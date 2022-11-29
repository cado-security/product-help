---
title: EC2 and EBS
hide_title: true
sidebar_position: 1
---
# AWS EC2 and EBS Support

Cado supports acquisition of EC2 instances. While the project is open, select *Import - AWS EC2 Instance*. Select the region from which you want to acquire an instance and select the appropriate role. This will populate a list of available instances.

![AWS EC2 Import](/img/aws-ec2.png)

You can filter the list of instances and buckets by instance ID, name, state or public IP address.

Click on "Acquire Volume" .

## Capture Options

For volume capture, set the options for what data you want to capture, plus any optional labels for chain of custody and hit "Acquire Instance".

### Triage Capture
To perform a faster triage collection on an EC2 instance using Cado Host, select the button "Use Alternate Triage Acquisition". Please note that this requires that SSM be enabled on the target instance. This will also collect memory from Linux systems.

For more information about about what Cado Host collects see [Collected Artifacts](/cado-host/artifacts.md)

![AWS EC2 details](/img/aws-ec2-options.png)