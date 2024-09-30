---
title: Large EC2 Imports
hide_title: true
sidebar_position: 5
---

# Importing Large AWS EC2 Instances

Importing AWS EC2 instances with disks over 500GB can start to reach limitations in AWS which results in potentially very long acquisition times. You will receive a warning such as this during the Acquisition of a system:

![Large EC2 Import Warning](/img/large-disk-warning.png)

# Alternate Acquisition via Triage of a Live System
If possible, acquire these systems using the "Triage" option if SSM is enabled.

Alternatively, you can use another option such as [SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html) or [AWS EC2 Instance Connect](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-connect-methods.html) where available (select the instance in the AWS console, then select "Actions" > "Connect") to acquire with Cado Host (via the Cado UI at “Import” > “Cado Host”). Additional files to be collected can be set using the [command line](https://docs.cadosecurity.com/cado-host/cli).

If a system is turned off, it may be possible to isolate at the network and IAM level then turn it on in order to capture data. 

# Alternate Manual Acquisition of a Live System
It is also possible to copy off individual files, or perform a live image by connecting to a system and running a command such as:

```dd if=/dev/source of=/path/to/image.dd bs=block_size count=total_blocks```

To create a disk image on a mounted Volume to hold the image.
Or if you have restricted access to S3:

```aws s3 cp /dev/[disk] s3://bucket/image.dd.gz --expected-size [size in bytes]```


# How Cado acquires EC2 Instances
When acquiring an EC2 instance, the Cado platform will:
1. Create a snapshot of a volume attached to an instance; then
2. Create a Volume from this snapshot; then
3. Then Create an Image of the volume for processing.

Below we outline possible optimizations to this process:

![Cado EC2 Acquisition Process](/img/snapshot-steps.png)

# Speeding up the 1. Create Snapshot Step
The first step of Creating a Snapshot will be faster if there is an earlier snapshot of the same volume, as AWS uses [incremental snapshots](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html#how_snapshots_work). If not, creating the snapshot can take a number of hours for a large Volume. AWS [recommend](https://repost.aws/knowledge-center/ebs-incremental-snapshot-creation-slow) creating regular snapshots to speed up the process, however this is often not possible when responding to an incident.

AWS does not provide estimates of how long Creating a Snapshot will take as it can vary on a number of factors. A Snapshot of a Volume larger than 500GB will typically take a number of hours, if earlier Snapshots do not exist.

# Speeding up the 2. Create Volume Step with Fast Restore
You can speed up the second step of Creating a Volume by using [Fast Snapshot Restore](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html). Note this will not speed up the first step of creating a snapshot, and the second stage of creating a volume will still take some time.

To create a Snapshot and enable Fast Snapshot Restore:

* 1. [Creating a Snapshot](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-creating-snapshot.html) of the disk in the AWS Console:
![Create Snapshot](/img/createsnap.png)

Or using the AWS CLI with:

```aws ec2 create-snapshot --volume-id vol-12345678  --description "My EBS volume snapshot"```


* 2. Enabling Fast Snapshot Restore on the snapshot:
![Enable Fast Snapshot Restore](/img/fast-restore.png)

Or with the AWS CLI:

```aws ec2 enable-fast-snapshot-restores --availability-zones us-east-2a us-east-2b  --source-snapshot-ids snap-1234567890abcdef0```

You will need to wait for the Fast Snapshot Restore to be enabled, then you can import the Snapshot (snap-xxx). AWS estimates this will take [60 minutes](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html#:~:text=View%20the%20fast%20snapshot%20restore%20state%20for%20a%20snapshot,-Fast%20snapshot%20restore&text=optimizing%20%E2%80%94%20Fast%20snapshot%20restore%20is,performance%20benefit%20when%20restoring%20volumes.) per Terabyte of data.

This will show in the AWS console as follows:

![Fast Snapshot Restore](/img/fast-restore-enabled.png)


# Increasing the Size of the Target Instance with EC2 Acquisition

When acquiring an instance, Cado matches the instance type of the target system for compatibility. This can be a requirement for AWS Marketplace images, but larger instances can have higher disk, network and CPU limits.

If you have the option to change the instance type of the target system to a larger system, it can speed up the 3. Create an Image step. It will not increase the speed of Creating a Snapshot, or Creating a Volume.

# Alternative Collection using the AWS EBS Direct API

We have released a new method to acquire EC2/EBS Volumes using the EBS Direct API.
This can be enabled set Settings > Experiments > EBS Direct Acquisitions

This works in a similiar method to coldsnap:
* https://github.com/awslabs/coldsnap
Which is executied using a command such as:

```coldsnap  --region us-east-1 download snap-0001 disk.dd```
