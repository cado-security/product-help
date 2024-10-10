---
title: Worker Management
hide_title: true
sidebar_position: 6
---

# What are the settings for Workers?
This section covers the options available for managing workers spun up during processing jobs. These settings can be accessed under **Settings > General Settings**

## Processing

The **Maximum Workers** sets the maximum number of workers (AWS EC2 Instances) the system will start for processing. The platform will wait to launch new workers if this limit is exceeded. The default value is 20.  The platform will also back off and wait if the AWS limits for the maximum number of VCPUs in a region have been exceeded.

The **Worker Instance Size** limits the size of data that can be imported. The default setting in AWS (i3.4xlarge) has 1.9 TB of disk space, allowing the processing of disks up to approximately 1.5 TB in size. The default Azure setting allows the processing of disks up to approximately 800 GB in size. Please set a large instance size (see for AWS or Azure) to increase the working space.  

:::tip
In AWS, for most use cases, you should keep the Worker Instance Size set to a Storage Optimized instance, like an `i3.4xlarge`
:::

The **Worker Shutdown Wait** is the number of seconds after a worker finishes processing a pipeline before it should shutdown. If nothing is set, the default is 5 minutes (300 seconds).