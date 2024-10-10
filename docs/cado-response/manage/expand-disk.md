---
title: Expand disk in AWS
hide_title: true
sidebar_position: 8
---

# How to expand available data storage within the Cado platform in AWS
Below are the steps for expanding the Cado data storage volume after deployment.  This follows the steps as outline by AWS' documentation: **[Extend a Linux file system after resizing a volume](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html)**
:::warning
Before continuing, create a snapshot of the `CadoResponseDataVolume` volume which has the device name `/dev/sdh`.  This will ensure you have a backup of the data volume to restore, in case you encounter an issue. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html
:::
1. Extend the `/dev/sdh` storage volume via the AWS Console by: 
	- Navigating to your Cado instance
	- Click the **Storage** tab
	- Click on the volume instance ID for Device Name `/dev/sdh`
	- Select the `CadoResponseDataVolume`
	- Click **Actions**
	- Select **Modify Volume**
	- Enter the new volume size
	- Click **Modify**
2. SSH into the Cado instance. example: `ssh -i "us-east-2.pem" admin@ec2-55-234-10-9.compute-1.amazonaws.com`
3. Run `df -hT`. Note the Avail space for the `/dev/nvme1n1` filesystem mounted on `/home/admin/data`. This should display the old volume size.
4. Run `lsblk` and note the `nvme1n1` volume SIZE mounted on `/home/admin/data`. This should display the new volume size.
5. To extend the volume and make it available to the OS, run `sudo xfs_growfs -d /home/admin/data`
6. Run `df -hT` again and note the Avail space for the `/dev/nvme1n1` filesystem mounted on `/home/admin/data` This should now display the new volume size.

