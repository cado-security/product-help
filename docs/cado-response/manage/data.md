---
title: Data Management
hide_title: true
sidebar_position: 8
---

# Data Management
There are several considerations for managing data from Cado Response

## Controlling the lifecycle of data stored by Cado Response
AWS supports this through **[Object Locks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)** and **[Lifecycle Rules](https://docs.aws.amazon.com/console/s3/lifecyclerules)** associated with your S3 bucket.  Please see the AWS documentation for more details.

Azure supports this through **[Life Cycle Management Policies](https://docs.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview)** for your blob storage.  Please see the Azure documentation for more details.

## Storing sensitive customer data
Whether sensitive customer data is stored within Cado Response is completely dependent on what data sources and evidence is imported into the software.  In all cases, data is either stored within the database on the main Cado instance, within EFS, within a customers' S3 bucket or  Azure storage.  Since Cado Response is deployed within the customers' cloud environment, the customer has control over the life cycle management of the data (example: using Life Cycle management policies) as well as who has access to potential sensitive data via VPC and Subnet rules.

## Expanding available data storage within Cado Response in AWS
Below are the steps for expanding the Cado Response data storage volume after deployment.  This follows the steps as outline by AWS' documentation: **[Extend a Linux file system after resizing a volume](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html)**
:::warning
Before continuing, create a snapshot of the `CadoResponseDataVolume` volume which has the device name `/dev/sdh`.  This will ensure you have a backup of the data volume to restore, in case you encounter an issue. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html
:::
1. Extend the `/dev/sdh` storage volume via the AWS Console by: 
	- Navigating to your Cado Response instance
	- Click the **Storage** tab
	- Click on the volume instance ID for Device Name `/dev/sdh`
	- Select the `CadoResponseDataVolume`
	- Click **Actions**
	- Select **Modify Volume**
	- Enter the new volume size
	- Click **Modify**
2. SSH into the Cado Response instance. example: `ssh -i "us-east-2.pem" admin@ec2-55-234-10-9.compute-1.amazonaws.com`
3. Run `df -hT`. Note the Avail space for the `/dev/nvme1n1` filesystem mounted on `/home/admin/data`. This should display the old volume size.
4. Run `lsblk` and note the `nvme1n1` volume SIZE mounted on `/home/admin/data`. This should display the new volume size.
5. To extend the volume and make it available to the OS, run `sudo xfs_growfs -d /home/admin/data`
6. Run `df -hT` again and note the Avail space for the `/dev/nvme1n1` filesystem mounted on `/home/admin/data` This should now display the new volume size.

