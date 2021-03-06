---
title: Memory Analysis
hide_title: true
sidebar_position: 3
---

# Memory Analysis
Memory analysis support is currently in beta. You can enable it under the **Advanced** tab of the **Settings** page:

Once enabled, there are several options for acquiring memory:
1. To acquire memory from a running AWS EC2 instance, browse to `Import > AWS EC2 Instance` find the EC2 you wish to acquire memory from and click the  **Import Memory** button.  If you do not see the **Import Memory** button, please enable Memory Capture under 'Settings > Advanced > Memory Capture'.

:::info 
Note that importing memory via `Import > AWS EC2 Instance` requires the AWS SSM agent to be running on the EC2 and registered within the AWS Systems Manager.
:::

2. Alternatively, you can perform a memory acquisition of a Windows or Linux system by clicking `Import > Memory Collection` and running the pre-generated script on the host device.
3. Lastly, for importing externally acquired memory, ensure the memory dump is named with a `.mem` file extension so it is recognized as a memory file and upload the memory file to an S3 bucket to which Cado Response has access.  Then click `Import > AWS S3 Bucket` within Cado Response, navigate to the S3 bucket where the .mem file resides, and import it.    

It will take approximately 30 minutes for smaller memory files to process - more for those with large amounts of memory. Once processed, you will be able to browse the file system including the contents of files (if they were in memory at the time) and view information from running processes and network connections.  

## Structured Memory Analysis
As a first step in memory analysis, Cado Response will attempt to perform structured memory analysis. If it is not possible, it will fall back to unstructured memory analysis.

Under the hood, Cado Response is using Volatility 2 (https://github.com/volatilityfoundation/volatility/) which supports structured analysis of memory dumps. A limitation is that it generally only works on older operating systems:
- Up to Win10x64_19041
- For Linux systems, we attempt to dynamically generate a profile.
- Up to OSX 10.15.x Catalina (these .mem files would need to be collected seperately, using other tools. Cado Response does not collect memory dumps from OSX systems at the moment)

## Unstructured Memory Analysis
Unstructured memory analysis allows Cado Response to extract key log data and perform Yara/Anti-Virus scans of memory regardless of the operating system. For this, we use an optimised version of our public Rip Raw tool (https://github.com/cado-security/rip_raw)