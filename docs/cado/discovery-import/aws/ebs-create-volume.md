---
title: EBS Create Volume Acquisition
hide_title: true
sidebar_position: 11
---

## What is EBS Create Volume Acquisition
This is a legacy method for acquiring EC2 instances ans associated volumes, by creating a volume from a snapshot and attaching it to an instance to acquire the data.

#### **Data Flow Diagram: EC2 Disk Acquisition**
The diagram below illustrates how EC2 disk acquisitions work.

![EC2 Disk Acquisition](/img/import-aws-ec2-cross.png)

#### **Data Flow Diagram: EC2 Role Acquisition**
If an IAM role is used for acquisition, the process is shown below.

![EC2 Role Acquisition](/img/import-aws-ec2-role.png)
