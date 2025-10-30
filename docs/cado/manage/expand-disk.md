---
title: Expand disk in AWS
hide_title: true
sidebar_position: 8
---

:::info
This section is not relevant to SaaS deployments.
:::

# How to Expand Available Data Storage within the / Forensic Acquisition and Investigation Platform in AWS

Below are the steps for expanding the / Forensic Acquisition and Investigation data storage volume after deployment, following AWS's instructions for **[Extending a Linux file system after resizing a volume](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html)**.


Before proceeding, create a snapshot of the `CadoResponseDataVolume` with the device name `/dev/sdh`.
This ensures you have a backup of the data volume in case any issues arise. Follow this guide: [Creating an EBS Snapshot](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html).


### Steps to Expand Storage

1. **Modify the `/dev/sdh` Storage Volume in AWS**:
   - Navigate to your / Forensic Acquisition and Investigation instance in the AWS Console.
   - Click the **Storage** tab.
   - Select the volume with the device name `/dev/sdh`.
   - Click the volume instance ID for the `CadoResponseDataVolume`.
   - Click **Actions** and select **Modify Volume**.
   - Enter the new volume size and click **Modify**.

2. **SSH into the / Forensic Acquisition and Investigation Instance**:
   - Example command: `ssh -i "us-east-2.pem" admin@ec2-55-234-10-9.compute-1.amazonaws.com`

3. **Check Current Available Space**:
   - Run `df -hT` to check the available space on the `/dev/nvme1n1` filesystem mounted on `/home/admin/data`. This should display the old volume size.

4. **Verify New Volume Size**:
   - Run `lsblk` to verify the size of the `nvme1n1` volume mounted on `/home/admin/data`. This should now display the new volume size.

5. **Extend the Volume**:
   - Run the command `sudo xfs_growfs -d /home/admin/data` to extend the volume and make it available to the operating system.

6. **Verify Updated Available Space**:
   - Run `df -hT` again to check the available space on the `/dev/nvme1n1` filesystem mounted on `/home/admin/data`. It should now show the expanded volume size.
