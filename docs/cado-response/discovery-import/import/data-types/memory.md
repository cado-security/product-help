---
title: Memory Analysis
hide_title: true
sidebar_position: 3
---

# Memory Analysis

You can perform a memory acquisition of a Windows or Linux system using Cado Host simply by clicking `Import > Cado Host` within the platform and running the pre-generated script on the host device. For more details on these steps, click [here](https://docs.cadosecurity.com/cado-host/deploy). Process memory collection is not currently supported on OSX. 

In your console and within Cado Host, ensure to enable the options to collect memory, and optionally collect larger process memory files:
![Enable Memory](/img/enable-memory.png)
Windows systems can have particularly large process memory files which can result in a slow collection process, so we recommend only enabling the **Enable Extended Memory Collection** option on Windows systems where required.

Cado collects memory from individual processes as .mem files, viewable under the "process_dumps" folder.
This allows for more reliable analysis than previous versions of Cado which collected a single capture of memory, and (also) utilises the Cado-branded open source tool [varc](https://github.com/cado-security/varc)

## Processing Previously Acquired Memory Images
The Cado Platform can also perform limited processing of full memory images (or dumps), acquiring using third party tools.
The memory image is carved to extract logs and other artifacts, using the Cado-branded open source tool [ripraw](https://github.com/cado-security/rip_raw). This approach does not perform a structured analysis of the memory image, but can be useful for extracting logs and other artifacts from a memory image.

To import externally acquired memory, ensure the memory image is named with a `.mem` file extension so it is recognized as a memory file.
Upload file to a cloud storage location (AWS S3, Azure Storage, or Google Cloud Storage) that Cado has access to.
Then click `Import > (Cloud) > (Storage)` within Cado, navigate to the location where the .mem file resides, and import it.    

## Acquiring Memory from AWS EC2
You can acquire memory of Linux systems in EC2 by using the "Alternate Acquisition" option under Import > EC2:

![AWS Memory](/img/alternate-ec2.png)

This requires the AWS SSM agent to be running on the EC2 and registered within the AWS Systems Manager.
If it is not, you can acquire memory by connecting to the machine over SSH or RDP and executing Cado Host from **Import** > **Cado Host**.
You can also use this method to acquire from Windows systems.


## Containers
Any acquisition from a container (e.g. ECS/EKS/AKS) will attempt to collect memory by default.
In our [testing](https://github.com/cado-security/varc):
- AWS Lambda successfully dumped process memory by default, however requires manual execution within the Lambda function.
- EKS on EC2 successfully dumped process memory by default.
- ECS on Fargate required us to enable CAP_SYS_PTRACE in our task definition.

## Processed Memory
Once the memory is processed, you will be able to browse the file system in the Cado UI, including the contents of files (if they were in memory at the time) and view information from running processes and network connections.  

Collected memory files are under the "process_dumps" folder:
![Import Evidence](/img/collected-memory.png)

And running process information is recorded in processes.json:

![Process Info](/img/proccess-info.png)

Information on network connections is recorded in network.json, open files in open_files.json, and open files are collected in the collected_files folder.

## File and Log Carving
Any file that is imported with the extension ".mem" will be processed using our open-source tool [RipRaw](https://github.com/cado-security/rip_raw) for file and log carving.
