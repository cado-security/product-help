---
title: AMI, EBS Snapshot and Volume
hide_title: true
sidebar_position: 3
---

# How to import AWS AMI, EBS Snapshos and Volumes
The Cado platform supports acquiring AMIs, EBS Snapshots or volumes of machines, either by using a cross account role, or directly sharing the image/snapshot with the Cado AWS account.  If sharing an AMI, you will need to select the option to share the underlying Snapshots ("Edit AMI Permissions" > Tick "Add 'Create volume' permission"). For more information, see [Share an Amazon EBS snapshot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html).

Select the region, and specify the identifier of the AMI, snapshot or volume. Click 'Continue', confirm the details and click 'Start Import'.
![AWS AMI](/img/aws-ami.png)

## Data Flow Diagram


Please see the diagram below for our original acquisition via EBS Snapshots:

![EBS Snapshots](/img/aws-snapshot.png)

 

The Cado platform now supports a much faster acquisition method using EBS Direct API:

![EBS Direct API](/img/aws-snapshot-ebs.png)