---
title: General Settings
hide_title: true
sidebar_position: 5
---

# General Settings
You can access the settings by clicking **Settings** on the left menu

### Processing Settings
The **Maximum Filesize** is used to determine how file-based plugins analyse individual files. For example, if a Log file is 1 GB and the Maximum File size is 5 Mb:
- The full 1 GB of events in the log will be processed;
- But the file-based plugins (for example Yara, String extraction) will only look at the first 5 Mb of the 1 GB file, and the original file will not be available for download.

This number can be increased, however large values can slow down processing and retrieval significantly.

The **Elastic Search Hostname** sets where the data is stored. By default Cado Response connects to a database that is only accessible locally to the server, and for security purposes it is highly recommended you do not change this value.

The **Worker Instance Size** limits the size of data that can be imported. The default setting in AWS (i3.4xlarge) has 1.9 TB of disk space, allowing the processing of disks up to approximately 1.5 TB in size. The default Azure setting allows the processing of disks up to approximately 800 GB in size. Please set a large instance size (see for AWS or Azure) to increase the working space, at additional cost.

### Cloud Connectivity
These settings are used to authenticate against cloud providers.

An AWS Role is created at installation to authenticate against AWS. This is the recommended method of authentication. Optionally, you can set an **AWS Access Key** and **AWS Secret Key** to authenticate against AWS.

### Threat Intelligence
The **VirusTotal API Key** is used to enhance the analysis of already detected files by checking their file-hash against the VirusTotal database. It is not used to detect files. 

The **Yara Rules** text-box allows you to run your own set of Yara rules against files. These are run in addition to a set built-in to Cado Response. Rules that match will trigger a `Malicious` detection, unless the yara rule name starts with the keyword suspicious - in which case it will create a `Suspicious` detection.

