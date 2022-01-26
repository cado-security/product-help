---
title: FAQs
hide_title: true
sidebar_position: 1
---

# Frequently Asked Questions
Solutions to some common questions can be found here.  If you can't find your answer, please reach out to support@cadosecurity.com and let us know.

### Which cloud providers does Cado Response support?
AWS and Azure.

### Does Cado Response support memory capture?
Yes.  Amazon Linux, Amazon Ubuntu and Windows Systems are currently supported.  See **[Memory](/docs/cado-response/importing-data/memory)** for more details.

### Why do I see "Installing Cado Response" instead of the login page?
On first boot, the platform will take about 10 minutes to install.  During that time, you will see "Installing Cado Response".  After the one-time installation process completes, you will be presented with a login screen.  During an upgrade, you will also see "Installing Cado Response" until the upgrade is complete.

### I deployed Cado Response. How do I log in?
Navigate to the Cado Response instance IP `https://<Cado_Response_IP>`. You can initially login with the username `admin` and the password `i-xxx` where `i-xxx` is the ID of your instance.  After first login, you will be asked to change your password.  Note that for Azure, the password is the very long Resource ID.  The Resource ID can be found within your Azure Portal by navigating to `Home > Virtual Machines`, clicking on the Cado VM name, then clicking `Properties` on the left navigation bar.  Scroll down to find the `Resource ID`.

### Can I allow or restrict IP ranges from accessing my Cado Response instance?
Yes, and it is strongly recommended to follow the principle of least privilege and restrict access to only those IPs which require access.  In AWS, navigate to your **[AWS EC2 Console](https://console.aws.amazon.com/ec2)**, click on your Cado Instance ID, navigate to the Security tab, then click on the "Security Group" link, then "Edit Inbound Rules". Here you can add and remove access rules for the Cado Response instance.  Note that you can also restrict access to HTTPS and SSH during the deployment process via the CloudFormation Template. In Azure, navigate to your **[Azure Portal](https://portal.azure.com/)** and find the Network Security Group where your Cado Response VM is deployed.  From there, click "Inbound security rules" and you can Add and Delete access rules. 

### How can I control the lifecycle of data stored by Cado Response?
AWS supports this through **[Object Locks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)** and **[Lifecycle Rules](https://docs.aws.amazon.com/console/s3/lifecyclerules)** associated with your S3 bucket.  Please see the AWS documentation for more details.

Azure supports this through **[Life Cycle Management Policies](https://docs.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview)** for your blob storage.  Please see the Azure documentation for more details.

### Does Cado Response store sensitive customer data?
Whether sensitive customer data is stored within Cado Response is completely dependent on what data sources and evidence is imported into the software.  In all cases, data is either stored within the database on the main Cado instance, within EFS, within a customers' S3 bucket or  Azure storage.  Since Cado Response is deployed within the customers' cloud environment, the customer has control over the life cycle management of the data (example: using Life Cycle management policies) as well as who has access to potential sensitive data via VPC and Subnet rules.

### Can I monitor the health and proper funtion of Cado Response?
Yes. Within Cado Response, you can see the platform health and statistics by navigating to the "Platform" tab.  This list Free Disk Space, Available Memory, Total Memory, CPU Usage and pipeline processing details.  

### Can I estimate the costs for running Cado Response in AWS?
Yes. You can view the AWS Cost Calculator for a typical Cado Response installation at https://calculator.s3.amazonaws.com/index.html#r=IAD&key=files/calc-bca484373bcb2d07322fd6716a197d1cdc629534&v=ver20210903uJ

This includes: 
- A central platform server running permanently with 500 GB of space for hot data access
- 36.5 hours (5% of the time) worker usage to process data
- 500 GB of permanent S3 Storage used for forensic images
- 50 GB of Elastic File System Storage used for file transfer downloads

### How can I capture Logs or a Support Bundle from Cado Response?
You can download a set of logs from the Cado Response platform by navigating to `Help > Download Logs`.  Logs are password protected and used for troubleshooting with the Cado Support teams, so please contact support@cadosecurity.com should you need access.

### How do I contact Support?
You can contact Cado Support via email at support@cadosecurity.com or reach out to your account manager for more details.

### What are the Cado Response Service Level Agreements?
The Cado Response Service Level Agreements (SLAs) are part of customers' end-user license agreement.  Please refer to your EULA for more details.

### Does Cado Response support processing of EC2s or AMIs with EBS Encryption?
Yes. As of build 0.9.2.4, the `kms:CreateGrant` and `kms:Decrypt` permissions are enabled within the Cado Response role by default. If you upgraded from a build earlier than 0.9.2.4, you may need to add these permissions manually.

### If vulnerabilities are discovered within your software, are customers notified?
Yes. Updates and notifications are provided to customers if vulnerablities or vulnerable packages are identified within our software.
