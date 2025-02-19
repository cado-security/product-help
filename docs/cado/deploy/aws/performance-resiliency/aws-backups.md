---
title: Backup and recover
hide_title: true
sidebar_position: 1
---


# How to backup and recover Cado in AWS

Cado backs up any imports to S3 which can then be re-imported later to a fresh instance. This is the simplest method for backups.
You will need to restore the data volume if you want to recover user settings such as user logins, and processed data.

## Backup and Recovery for default non-HA deployments
This section explains how to recover or migrate the Cado platform to a new instance.

If a Cado instance fails, you will need to recover and attach the data volume to a new instance. The data volume contains previously imported data as well as user settings.

You can also use this approach to migrate Cado to a new availability zone or region.

### Scheduling Automated Backups of the Data Volume
Amazon EBS Snapshots are stored by AWS in Amazon S3, where it is stored redundantly in multiple Availability Zones.

You can create an **[EventBridge](https://us-west-2.console.aws.amazon.com/events/home)** rule that regularly (e.g. daily) backs up the CadoResponse EC2 instance:

![AWS Backup 1](/img/aws-backup-1.png)

![AWS Backup 2](/img/aws-backup-2.png)

For more, see **[this tutorial](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-scheduled-snapshot.html)** from AWS.

### Restoring the Data Volume 
To perform a migration or restoration to a new instance, deploy a fresh Cado installation (from Cloudformation, Terraform etc.) and Stop the Cado EC2 Installation.

:::warning
This will need to be a new deployment, rather than just starting a new EC2 from e.g. an AMI. Creating an AMI snapshot from the Cado main VM and starting a new EC2 from that AMI will not work, and the platform will enter an unreliably state.
:::

The operating system volume will be smaller (typically 10 GB). Detach the larger Data Volume (`/dev/sdh` seen below):

![AWS Backup 3](/img/aws-backup-3.png)

![AWS Backup 4](/img/aws-backup-4.png)

Next, **[restore](https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/restore.html)** the Snapshot backup of your old Cado installation to a Volume in the same availability zone as your new Cado EC2 Instance.

![AWS Backup 5](/img/aws-backup-5.png)

Then, simply **[attach](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html)** the restored Data Volume to your new Cado EC2 Instance and start it.

### Backups with High Availability
If you have opted for the High Availability deployment in AWS, back-ups need to be enabled for the native AWS services used in the deployment:
* https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-snapshots.html
* https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
* https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html
* https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups.html

You can also enable automated back-ups in the CloudFormation or Terraform deployment template, for example with:
- ElastiCache:
```yaml
SnapshotRetentionLimit: 7
SnapshotWindow: "03:00-04:00"
```
- RDS:
```yaml
BackupRetentionPeriod: 7
PreferredBackupWindow: "03:00-04:00"
```
- OpenSearch:
```yaml
SnapshotOptions:
    AutomatedSnapshotStartHour: 3
```

Snapshots are not enabled by default for cost reasons.