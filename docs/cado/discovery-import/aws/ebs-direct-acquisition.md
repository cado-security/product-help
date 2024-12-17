---
title: EBS Direct Acquisition
hide_title: true
sidebar_position: 11
---
### Why EBS Direct Acquisition

The EBS direct acquisition feature significantly improves the capture speed of disks. This feature also requires less permissions for acquisition.

### Prerequisites

### Enable EBS Direct Acquisition

To enable EBS Direct Acquisition (Admin required):
1. Go to **Settings** > **Experiments**.
2. Enable **EBS Direct Acquisitions**.

![EBS Direct Acquisition](/img/ebs-directac.png)

### Enable Deployed Workers

1. Navigate to **Settings** > **Advanced** (Admin required)
2. Enable **Deployed Workers** (This is needed for full acquisition)

![EBS Workers](/img/ebs-workers.png)

### Roles Required

* ebs:ListSnapshotBlocks
* ebs:ListChangedBlocks
* ebs:GetSnapshotBlock

### Steps to Import using EBS Direct Acquisition

1. On your investigation click **import**.
2. Select **cloud** from the list of providers

![EBS Providers](/img/ebs-providers.png)

3. Select **AWS**

![EBS Cloud Account](/img/ebs-cloudaccount.png)

4. Select Access method

![EBS Access Method](/img/ebs-accessmethod.png)

5. Select **EC2**

![EBS EC2](/img/ebs-ec2.png)

6. Select your region of choice

![EBS Region](/img/ebs-region.png)

7. Select **Full acquisition**

![EBS Full Acquisition](/img/ebs-actype.png)

8. Review your options then click continue to finish


