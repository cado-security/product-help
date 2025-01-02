---
title: Log & artifact types
hide_title: true
sidebar_position: 1
---

# What Log and Artifact Types Can Cado Process?

Cado supports the processing of a wide range of evidence types, which may vary slightly depending on your cloud platform.

## What Cloud Logs Can Cado Import from Cloud Storage?

Cado can import various cloud log types from cloud storage, including:

### AWS Log Formats
- CloudTrail logs
- GuardDuty logs
- Kubernetes logs
- VPC Flow logs
- SSM logs
- S3 Access Logs
- Route 53 (DNS) logs

### Azure Log Formats
- Activity logs
- Storage logs

### GCP Log Formats
- VPC Flow logs
- IAM logs
- Admin Activity logs

Cado also processes additional log types using generic extractors, so this list is not exhaustive.

## What Logs Does Cado Capture via APIs?

Cado can capture logs from the following cloud services via their APIs:

- **AWS EC2**: When acquiring an EC2 system, Cado accesses the CloudTrail API to retrieve [VPC flow logs](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-flow-logs.html#create-flow-log) and [CloudTrail logs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-getting-started.html) associated with the instance ID, if enabled.
- **AWS Lambda**: Cado accesses the CloudWatch API to retrieve [logs associated with the Lambda function](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html).
- **Azure Compute**: Cado retrieves [activity logs associated with the virtual machine](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/activity-log).

If logs are stored in a central account, Cado currently cannot traverse accounts to pull logs from different accounts. In such cases, logs must be collected in cloud storage and imported from there.

## Operating System Log and Artifact Formats

Here is a non-exhaustive list of the forensic artifacts Cado can process:
- Common AWS, Azure, and GCP logs
- Apple System Log (ASL)
- Android usage history (app usage)
- Basic Security Module (BSM)
- Bencode files
- Chrome Disk Cache and Preferences
- CUPS IPP logs
- Extensible Storage Engine (ESE) Database (EDB)
- Firefox Cache
- Java Web Start IDX
- JumpLists (`customDestinations-ms` files)
- MacOS Application Firewall, Keychain, Securityd, and Wifi logs
- McAfee Anti-Virus logs
- Microsoft Internet Explorer History (MSIE4-9 Cache Files or `index.dat`)
- Microsoft IIS logs
- NTFS `$MFT` and `$UsnJrnl:$J`
- OLE Compound Files
- Opera Browser History
- OpenXML
- Portable Executable (PE) files
- PLSQL cache files (PL-SQL developer recall files)
- Popularity Contest logs
- Property List (plist)
- Restore Point logs (`rp.log`)
- Safari Binary Cookies
- SCCM Client logs
- SELinux audit logs
- SkyDrive log and error logs
- SQLite databases
- Symantec AV Corporate Edition and Endpoint Protection logs
- Syslog
- Utmp, Utmpx
- Windows Event Logs (EVT, EVTX)
- Windows Firewall logs
- Windows Job files (atjobs)
- Windows Prefetch files
- Windows Recycle Bin (`INFO2` and `$I/$R`)
- Windows NT Registry Files
- Windows Shortcut Files (LNK)
- Xchat and Xchat scrollback files
- Zsh history files

Cado can also process many other log formats not listed here. If you have a log format you'd like to see supported, please contact us at support@cadosecurity.com.

## Adding Your Own Events

During an investigation, you may want to add custom events to the timeline, such as key events tracked in a spreadsheet. The simplest way to add custom events is to import an ISO format log event with the following format:
```
YYYY-MM-DD HH:MM:SS Log Event Message
```

For example, saving this text in a file named `custom_events.log` and importing it into the platform:

```
2021-01-01 01:01:01 User phoned help desk and reported ransomware
2021-01-01 01:01:02 Three more phone calls to help desk
```

Will result in events such as the following:

![Custom logs imported into Cado](/img/custom_log.png)

## Log Analysis Considerations

For analyzing large sets of logs (typically over 1 million events) and uncovering suspicious behavior, we recommend using traditional SIEM solutions or open-source tools like Cado's [cloudgrep](https://github.com/cado-security/cloudgrep). Cado's primary focus is on capturing more than just logs from cloud service providers and other log sources. See [here](/cado/intro) for more details on Cado's capabilities.