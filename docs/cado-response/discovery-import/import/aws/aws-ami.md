---
title: AMI and EBS Snapshot
hide_title: true
sidebar_position: 3
---
# AWS AMI and EBS Snapshot support
Cado Response supports acquiring AMIs or EBS Snapshots of machines, either by using a cross account role, or directly sharing the image/snapshot with the Cado Response AWS account.  Whether importing an AMI or an EBS Snapshot, the AMI and snapshot need to be in the same AWS Region as the Cado Response instance.  Also note that you can not share AMIs that are backed by snapshots that are encrypted with the default AWS managed key. For more information, see [Share an Amazon EBS snapshot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html).

![AWS AMI](/img/aws-ami.png)