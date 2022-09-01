---
title: Troubleshooting Deployment
hide_title: true
sidebar_position: 12
---

# Frequently Asked Deployment Questions
Solutions to some common deploymnet questions can be found here.  If you can't find your answer, please reach out to support@cadosecurity.com and let us know.

### Why do I see "Installing Cado Response" instead of the login page?
On first boot, the platform will take about 10 minutes to install.  During that time, you will see "Installing Cado Response".  After the one-time installation process completes, you will be presented with a login screen.  During an upgrade, you will also see "Installing Cado Response" until the upgrade is complete.

### I deployed Cado Response. How do I log in?
Navigate to the Cado Response instance IP `https://<Cado_Response_IP>`. You can initially login with the username `admin` and the password `i-xxx` where `i-xxx` is the ID of your instance.  After first login, you will be asked to change your password.  Note that for Azure, the password is the very long Resource ID.  The Resource ID can be found within your Azure Portal by navigating to `Home > Virtual Machines`, clicking on the Cado VM name, then clicking `Properties` on the left navigation bar.  Scroll down to find the `Resource ID`.

### Can I allow or restrict IP ranges from accessing my Cado Response instance?
Yes, and it is strongly recommended to follow the principle of least privilege and restrict access to only those IPs which require access.  In AWS, navigate to your **[AWS EC2 Console](https://console.aws.amazon.com/ec2)**, click on your Cado Instance ID, navigate to the Security tab, then click on the "Security Group" link, then "Edit Inbound Rules". Here you can add and remove access rules for the Cado Response instance.  Note that you can also restrict access to HTTPS and SSH during the deployment process via the CloudFormation Template. In Azure, navigate to your **[Azure Portal](https://portal.azure.com/)** and find the Network Security Group where your Cado Response VM is deployed.  From there, click "Inbound security rules" and you can Add and Delete access rules. 

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

