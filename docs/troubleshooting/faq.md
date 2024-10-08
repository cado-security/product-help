---
title: FAQs
hide_title: true
sidebar_position: 4
---

# Frequently Asked Questions

### Why do I see "Installing Cado Response" instead of the login page?
On first boot, the platform will take about 10 minutes to install.  During that time, you will see "Installing Cado Response".  After the one-time installation process completes, you will be presented with a login screen.  During an upgrade, you will also see "Installing Cado Response" until the upgrade is complete. 

### Can I allow or restrict IP ranges from accessing my Cado instance?
Yes, and it is strongly recommended to follow the principle of least privilege and restrict access to only those IPs which require access.  In AWS, navigate to your **[AWS EC2 Console](https://console.aws.amazon.com/ec2)**, click on your Cado Instance ID, navigate to the Security tab, then click on the "Security Group" link, then "Edit Inbound Rules". Here you can add and remove access rules for the Cado instance.  Note that you can also restrict access to HTTPS and SSH during the deployment process via the CloudFormation Template. In Azure, navigate to your **[Azure Portal](https://portal.azure.com/)** and find the Network Security Group where your Cado VM is deployed.  From there, click "Inbound security rules" and you can Add and Delete access rules. If you have deployed with an ALB then you'll need to update the inbound rules for the ALB secuirty group intead. Please note that the ALB will only allow HTTP/HTTPS access - SSH rules will need to be configured in the EC2 security group.

### Does the Cado platform store sensitive customer data?
Whether sensitive customer data is stored within the Cado platform is completely dependent on what data sources and evidence is imported into the software.  In all cases, data is either stored within the database on the main Cado instance, within EFS, within a customers' S3 bucket or  Azure storage.  Since the Cado platform is deployed within the customers' cloud environment, the customer has control over the life cycle management of the data (example: using Life Cycle management policies) as well as who has access to potential sensitive data via VPC and Subnet rules.

### Can I monitor the health and proper function of the Cado platform?
Yes. Within Cado, you can see the platform health and statistics by navigating to the "Platform" tab.

This lists Free Disk Space, Available Memory, Total Memory, CPU Usage and pipeline processing details.  In addition, roundtrip response latency for the API `/api/v2/system/status` endpoint should be less than or equal to 200ms.

### Can I estimate the costs for running the Cado platform in AWS?
Yes, please see [Cost Management](/cado-response/manage/cost-management) for details.

### What are the Cado Service Level Agreements?
The Cado Service Level Agreements (SLAs) are part of customers' end-user license agreement.  Please refer to your EULA for more details.

### If vulnerabilities are discovered within your software, are customers notified?
Yes. Updates and notifications are provided to customers if vulnerablities or vulnerable packages are identified within our software.

### How do I expand my available data storage within the Cado platform in AWS?
Below are the steps for expanding the Cado platform data storage volume after deployment.  This follows the steps as outline by AWS' documentation: **[Extend a Linux file system after resizing a volume](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html)**
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
