---
title: Memory Analysis
hide_title: true
sidebar_position: 3
---

# Memory Analysis

You can perform a memory acquisition of a Windows or Linux system using Cado Host by clicking `Import > Forensic Artifacts` and running the pre-generated script on the host device.

For importing externally acquired memory, ensure the memory dump is named with a `.mem` file extension so it is recognized as a memory file and upload the memory file to an S3 bucket to which Cado has access.  Then click `Import > AWS S3 Bucket` within Cado, navigate to the S3 bucket where the .mem file resides, and import it.    

You can acquire memory of Linux systems in EC2 by using the "Alternate Acquisition" option under Import > EC2:

![AWS Memory](/img/alternate-ec2.png)

This requires the AWS SSM agent to be running on the EC2 and registered within the AWS Systems Manager. If it is not, you can acquire memory by connecting to the machine over SSH or RDP and executing Cado Host from Import > Forensic Artifacts. You can also use this method to acquire from Windows systems.

Any acquisition from a container (e.g. ECS/EKS/AKS) will attempt to collect memory by default.

Once processed, you will be able to browse the file system including the contents of files (if they were in memory at the time) and view information from running processes and network connections.  
