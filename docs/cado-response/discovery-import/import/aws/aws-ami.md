---
title: AMI, EBS Snapshot and Volume
hide_title: true
sidebar_position: 3
---

# AWS AMI, EBS Snapshot and Volume support
The Cado platform supports acquiring AMIs, EBS Snapshots or volumes of machines, either by using a cross account role, or directly sharing the image/snapshot with the Cado AWS account.  If sharing an AMI, you will need to select the option to share the underlying Snapshots ("Edit AMI Permissions" > Tick "Add 'Create volume' permission"). For more information, see [Share an Amazon EBS snapshot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html).

Select the region, and specify the identifer of the AMI, snapshot or volume. Click 'Continue', confirm the details and click 'Start Import'.
![AWS AMI](/img/aws-ami.png)

### Data Flow Diagram
For a diagram of how our snapshot acquisitions operate, please see our [Knowledge Base](https://cadosecurity.zendesk.com/hc/en-gb/articles/23258838264977-How-do-EC2-Snapshot-Imports-work).