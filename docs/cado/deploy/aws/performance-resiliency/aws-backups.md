---
title: Backup and recover
hide_title: true
sidebar_position: 1
---


# How to backup and recover / Forensic Acquisition and Investigation in AWS

/ Forensic Acquisition and Investigation backs up any imports to S3 which can then be re-imported later to a fresh instance. This is the simplest method for backups.
You will need to restore the data volume if you want to recover user settings such as user logins, and processed data.

## Backup and Recovery Options

There are two ways to back up your deployment:

#### Scheduled Backups
Set up automated snapshots using AWS tools like Data Lifecycle Manager (DLM). This ensures you always have recent backups without manual effort.

- Use AWS DLM to create recurring snapshots of your data volume.
	
#### Manual Backups
Create snapshots or AMIs when needed. This is best for one-time migrations or before major changes.

- Create a snapshot of your instance’s volume and convert it into an AMI. This captures the current system state so you can redeploy without rebuilding.

Note: AMIs only work in the same AWS region and require the same IAM roles and permissions.

### Scheduling Automated Backups of the Data Volume
Amazon EBS Snapshots are stored by AWS in Amazon S3, where it is stored redundantly in multiple Availability Zones.

You can create an **[EventBridge](https://us-west-2.console.aws.amazon.com/events/home)** rule that regularly (e.g. daily) backs up the CadoResponse EC2 instance:

![AWS Backup 1](/img/aws-backup-1.png)

![AWS Backup 2](/img/aws-backup-2.png)

For more, see **[this tutorial](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-scheduled-snapshot.html)** from AWS.

### Restoring the Data Volume 
To perform a migration or restoration to a new instance, deploy a fresh / Forensic Acquisition and Investigation installation (from Cloudformation, Terraform etc.) and stop the Main VM/EC2 instance that will start as part of the new deployment.

:::warning
This will need to be a new deployment, rather than just starting a new EC2 from e.g. an AMI. Creating an AMI snapshot from the Cado main VM and starting a new EC2 from that AMI will not work, and the platform will enter an unreliable state.
:::

The operating system volume will be smaller (typically 10 GB). Detach the larger Data Volume (`/dev/sdh` seen below):

![AWS Backup 3](/img/aws-backup-3.png)

![AWS Backup 4](/img/aws-backup-4.png)

Next, **[restore](https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/restore.html)** the Snapshot backup of your old Cado installation to a Volume in the same availability zone as your new / Forensic Acquisition and Investigation EC2 Instance.

![AWS Backup 5](/img/aws-backup-5.png)

Then, simply **[attach](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html)** the restored Data Volume to your new Cado EC2 Instance and start it.


### Deploying with a non / Forensic Acquisition and Investigation owned AMI
In order to prevent incorrect operation, the platform checks to confirm if the AMI is owned by / Forensic Acquisition and Investigation and will not start if this check fails, with the error "Cannot run Cado Response in a non-Cado Response image" in the logs. If you require running a non / Forensic Acquisition and Investigation supplied AMI, please contact support for details on how to override this safety setting.
