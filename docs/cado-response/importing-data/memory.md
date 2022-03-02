---
title: Memory Forensics
hide_title: true
sidebar_position: 3
---

# Memory Forensics
Memory forensics support is currently in beta. You can enable it under the **Advanced** tab of the **Settings** page:

Once enabled, there are several options for acquiring memory:
1. To acquire memory from a running AWS EC2 instance, browse to `Import > AWS EC2 Instance` find the EC2 you wish to acquire memory from and click the  **Import Memory** button.  If you do not see the **Import Memory** button, please enable Memory Capture under 'Settings > Advanced > Memory Capture'.

:::info 
Note that importing memory via `Import > AWS EC2 Instance` requires the AWS SSM agent to be running on the EC2 and registered within the AWS Systems Manager.
:::

2. Alternatively, you can perform a memory acquisition of a Windows or Linux system by clicking `Import > Memory Collection` and running the pre-generated script on the host device.
3. Lastly, for importing externally acquired memory, ensure the memory dump is named with a `.mem` file extension so it is recognized as a memory file and upload the memory file to an S3 bucket to which Cado Response has access.  Then click `Import > AWS S3 Bucket` within Cado Response, navigate to the S3 bucket where the .mem file resides, and import it.    

It will take approximately 30 minutes for smaller memory files to process - more for those with large amounts of memory. Once processed, you will be able to browse the file system including the contents of files (if they were in memory at the time) and view information from running processes and network connections.  