---
title: AMI and EBS Snapshot
hide_title: true
sidebar_position: 3
---
# AWS AMI and EBS Snapshot support
The Cado platform supports acquiring AMIs or EBS Snapshots of machines, either by using a cross account role, or directly sharing the image/snapshot with the Cado AWS account.  
If sharing an AMI, you will need to select the option to share the underlying Snapshots ("Edit AMI Permissions" > Tick "Add 'Create volume' permission")
For more information, see [Share an Amazon EBS snapshot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html).

![AWS AMI](/img/aws-ami.png)
