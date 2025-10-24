---
title: AMI, EBS Snapshot and Volume
hide_title: true
sidebar_position: 3
---

# How to Import AWS AMIs, EBS Snapshots, and Volumes

The / Forensic Acquisition and Investigation platform allows you to acquire AWS AMIs, EBS Snapshots, or Volumes using either a cross-account role or by directly sharing the image or snapshot with the Cado AWS account.

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

/ Forensic Acquisition and Investigation now defaults to a faster acquisition method using the **EBS Direct API**, which speeds up the data acquisition process.
As a result, snapshots are no longer copied to regions. Unless you have disabled this feature under Settings > Experiments, the EBS Direct API acquisition method is now enabled by default. The process for acquiring an EBS volume now follows this pattern:

1. Import the cross-account EBS volume.
2. A snapshot of the EC2 volume is created in your target account.
3. A worker is started within your "Cado Account" that / Forensic Acquisition and Investigation is deployed in.
4. The worker downloads the snapshot from your other account and processes it.

For example:
- If / Forensic Acquisition and Investigation is deployed in "Cado account" in us-east-1.
- And you are importing a volume from us-west-2 in "other account":
- The snapshot of the EC2 volume is created in us-west-2 in "other account".
- A worker is started in "Cado account" in us-east-1.
- The worker downloads the snapshot from us-west-2 in "other account" and processes it.

![EBS Direct API](/img/aws-snapshot-ebs.png)
