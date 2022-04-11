---
title: File Types
hide_title: true
sidebar_position: 2
---

# File Types
Cado Response supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform.

### AWS Capture Formats
- EC2
- S3 Storage (normal and glacier)
- AWS Kubernetes
- AWS Lambda
- Kubernetes logs
- Cloud Trail logs
- Guard Duty logs
- VPC Flow logs
- SSM logs
- AWS Memory Capture

### Azure Capture Formats
- Virtual Machines 
- Disks
- Storage Containers
- Container Blobs
- Kubernetes Disks

### Storage Formats
In addition to native capture support for machines and data running/stored in the cloud, Cado Response also supports processing of the following local evidence formats.  

#### Storage Media
- E01, and split E01
- VHD and VHDX
- DD (Optionally .GZ Compressed)
- GZ / Tar / Zip
- VMDK (Partial Support*)
- Other forensic triage artifacts collected by EDR Tools or Cado Host

:::info 
Currently, split E01 format disks are supported in AWS only.
*VMDK's are partially supported as the file format contains many different sub-formats.  If possible, we recommend converting to dd format before importing.
:::

To import a compressed dd image, compress with Gzip and add .gz to the extension. (example: `disk.dd.gz`)

If you import a zip, it will be treated as a container of files. For example, if you compress a disk image with zip, it will not be processed as a disk image.

#### Volume Systems
- GPT
- LVM
- MBR
- Volume Shadow Snapshots (VSS)

#### File Systems
- ext version 2, 3, 4
- FAT
- NTFS version 3
- XFS version 4, 5
- Apple File System (APFS) 

#### Log File Formats
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

Cado Response can also import a number of other disk image and file formats that are not listed here; however, these evidence types and file formats are not officially supported.  If you have a filetype that you would like to see supported, please reach out to support@cadosecurity.com and let us know.