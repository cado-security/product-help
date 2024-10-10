---
title: Log & Artifact Types
hide_title: true
sidebar_position: 1
---

# What log and artifact types can Cado process?
Cado supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform.

## What cloud logs can Cado import from cloud Storage?
Cado can import most cloud log types from cloud storage, including:

### AWS Log Formats
- Cloud Trail logs
- Guard Duty logs
- Kubernetes logs
- VPC Flow logs
- SSM logs
- S3 Access Logs

### Azure Log Formats
- Activity logs

We can process additional log types through our generic extractors, so this list is not exhaustive.

## What logs does Cado capture via APIs?

Cado can capture logs from the following cloud services via their APIs:

When acquiring an EC2 system, Cado accesses the CloudTrail API to retrieve [VPC flow logs](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-flow-logs.html#create-flow-log) and [CloudTrail logs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-getting-started.html) associated with the instance id, if enabled.

When acquiring a Lambda function, Cado accesses the CloudWatch API to retrieve [logs associated with the function](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html).

When acquiring Azure compute, Cado retrieves [activity logs associated with the VM](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/activity-log).

If logs are stored in a central account, at this point Cado does not have the capability to traverse accounts and pull logs from a different account. Instead, you would need to collect them in cloud storage and import from there.

## Operating System Log and Artifact Formats
A non-exhaustive list of the forenic artifacts that Cado can process is provided below:
- Common AWS, Azure and GCP Logs
- AppleSystemLog (ASL)
- Androidusage-history (appusage)
- BasicSecurityModule (BSM)
- Bencodefiles
- Chrome Disk Cache Format
- Chrome preferences
- CUPS IPP
- ExtensibleStorageEngine (ESE) DatabaseFile (EDB)
- Firefox Cache
- JavaWeb Start IDX
- JumpLists.customDestinations-msfiles
- MacOS Application firewall
- MacOS Keychain
- MacOS Securityd
- MacOS Wifi
- mactimelogs
- McAfee Anti-Virus Logs
- Microsoft InternetExplorer History File Format (also known as MSIE4-9 Cache Files or index.dat)
- Microsoft IIS log files
- NTFS $MFT and $UsnJrnl:$J
- OLE Compound File
- Opera Browser history
- OpenXML
- Portable Executable (PE) 
- PLSQL cache file (PL-SQL developer recall files)
- Popularity Contest log
- Propertylist (plist)
- RestorePointlogs (rp.log)
- Safari Binary Cookies
- SCCM client logs
- SELinux audit logs
- SkyDrive log and error log files
- SQLite database format using SQLite
- Symantec AV Corporate Edition and Endpoint Protection log
- Syslog
- utmp,utmpx
- Windows EventLog (EVT)
- Windows Firewall
- Windows Job files (also known as "atjobs")
- Windows Prefetch files
- Windows Recyclebin (INFO2and$I/$R)
- Windows NTRegistry File
- Windows ShortcutFile (LNK)
- WindowsXML EventLog (EVTX)
- Xchat and Xchat scroll back files
- Zsh history files

Cado can also import a number of other log formats that are not listed here; however, these evidence types and file formats are not officially supported.
If you have a log format that you would like to see supported, please reach out to support@cadosecurity.com and let us know.

# Adding Your Own Events

During an investigation, you may want to add our own non-computer generated events to the timeline.
For example, it is common to keep a Spreadsheet of key events in a large incident.
The simplest way to add these events into an Investigation timeline is to import an ISO Format Log event of the format:
* YYYY-MM-DD HH:MM:SS Log Event Message

For example you can save the following text into a file named "custom_events.log" then import into the platform:

```
2021-01-01 01:01:01 User phoned help desk and reported ransomware
2021-01-01 01:01:02 Three more phone calls to help desk
```

Which will result in events such as the following:

![Custom logs imported into Cado](/img/custom_log.png)

## Log Analysis Considerations 
For exposing or uncovering suspicious behavior within large sets of logs (typically anything over ~1 million events), we encourage leveraging traditional SIEM solutions and/or open-source tools, like Cado's cloudgrep: https://github.com/cado-security/cloudgrep.
Cado's emphasis is to capture more than just logs from Cloud Service Providers or other log sources. See [here](/cado/intro) for more details on Cado's capabilities.
