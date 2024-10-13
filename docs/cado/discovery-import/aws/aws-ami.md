---
title: AMI, EBS Snapshot and Volume
hide_title: true
sidebar_position: 3
---

# How to Import AWS AMIs, EBS Snapshots, and Volumes

The Cado platform allows you to acquire AWS AMIs, EBS Snapshots, or Volumes using either a cross-account role or by directly sharing the image or snapshot with the Cado AWS account.

### Sharing AMIs and Snapshots

If you're sharing an AMI, make sure to also share the underlying snapshots:
1. Navigate to **Edit AMI Permissions**.
2. Tick the option **Add 'Create volume' permission**.

For detailed steps, refer to the official AWS guide: [Share an Amazon EBS Snapshot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html).

### Steps to Import

1. **Select the Region** where your data is stored.
2. **Specify the Identifier** for the AMI, Snapshot, or Volume you wish to import.
3. Click **Continue**.
4. Review and confirm the details, then click **Start Import**.

![AWS AMI](/img/aws-ami.png)

## Data Flow Diagrams

### Original Acquisition via EBS Snapshots

The diagram below outlines the traditional method of acquiring data using EBS Snapshots:

![EBS Snapshots](/img/aws-snapshot.png)

### Faster Acquisition via EBS Direct API

Cado now supports a faster acquisition method using the **EBS Direct API**, which speeds up the data acquisition process:

![EBS Direct API](/img/aws-snapshot-ebs.png)
