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
Navigate to the instance IP https:\\\<instance_ip> You can initially login with the username "admin" and the password "i-xxx" where i-xxx is the ID of your instance.  After first login, you will be asked to change your password.

### Can I allow or restrict IP ranges from accessing our Cado Response instance?
Yes, and it is strongly recommended to restrict access to only those IPs which require access.  Navigate to your **[AWS EC2 Console](https://console.aws.amazon.com/ec2)**, click on your Cado Instance ID, navigate to the Security tab, then click on the "Security Group" link, then "Edit Inbound Rules". Here you can add and remove access rules for the Cado Reponse instance.  Note that you can also restrict access to HTTPS and SSH during the deployment process via the CloudFormation Template. 

### How can I control the lifecyle of data stored by Cado Response in my S3 bucket?
AWS supports this through **[Object Locks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)** and **[Lifecycle Rules](https://docs.aws.amazon.com/console/s3/lifecyclerules)** associated with your S3 bucket.  Please see the AWS documentation for more details.
