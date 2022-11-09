---
title: Log Types
hide_title: true
sidebar_position: 1
---

# Log Types
Cado Response supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform.

### AWS Log Formats
- Cloud Trail logs
- Guard Duty logs
- Kubernetes logs
- VPC Flow logs
- SSM logs

### System Log Formats
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
- Pcap files
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

Cado can also import a number of other log formats that are not listed here; however, these evidence types and file formats are not officially supported.  If you have a log format that you would like to see supported, please reach out to support@cadosecurity.com and let us know.

# Adding Your Own Events

During an investigation, you may want to add our own non-computer generated events to the timeline.
For example, it is common to keep a Spreadsheet of key events in a large incident.
The simplest way to add these events into a Project timeline is to import an ISO Format Log event of the format:
* YYYY-MM-DD HH:MM:SS Log Event Message

For example you can save the following text into a file named "custom_events.log" then import into the platform:

```
2021-01-01 01:01:01 User phoned help desk and reported ransomware
2021-01-01 01:01:02 Three more phone calls to help desk
```

Which will result in events such as the following:

![Custom logs imported into Cado](/img/custom_log.png)


