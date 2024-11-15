---
title: Worker management
hide_title: true
sidebar_position: 6
---

# What Are the Settings for Workers?

This section explains the options available for managing workers that are spun up during processing jobs. You can access these settings under **Settings > General Settings**.

## Processing

- **Maximum Workers**: This setting defines the maximum number of workers (AWS EC2 Instances) that the system can launch for processing. If this limit is reached, the platform will pause before starting additional workers. The default limit is 20. The platform will also pause if AWS VCPU limits in a region are exceeded.

- **Worker Instance Size**: This setting determines the size of the instance used for data processing. The default instance size in AWS (i3.4xlarge) provides 1.9 TB of disk space, which supports the processing of disks up to approximately 1.5 TB. In Azure, the default setting supports disks up to about 800 GB. If you need more working space, select a larger instance size based on your environment (AWS or Azure).

  :::tip
  For most AWS use cases, it is recommended to keep the **Worker Instance Size** set to a storage-optimized instance, such as `i3.4xlarge`.
  :::

- **Worker Shutdown Wait**: This setting defines how long (in seconds) a worker will remain active after completing a processing task before shutting down. The default value is 5 minutes (300 seconds) if no value is set.