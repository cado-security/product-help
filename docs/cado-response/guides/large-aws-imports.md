---
title: Large AWS EC2 Imports
hide_title: true
sidebar_position: 8
---


# Importing Very Large EC2 Instances

Importing instances with disks over 500GB can start to reach limitations in AWS.
To speed up the importing of a very large instance, we recommend:
- Creating a Snapshot of the disk, then enabling [Fast Snapshot Restore](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html) on it. You will need to wait for up to an hour for the Fast Snapshot Restore to be enabled, then you can import the Snapshot (snap-xxx).
- Another option is to change the instance type of the target system to a larger system. When acquiring, we match the instance type of the target system for compatability. Larger instances can have higher disk, network and CPU limits.