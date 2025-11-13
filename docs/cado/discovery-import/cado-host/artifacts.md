---
title: Collected artifacts
hide_title: true
sidebar_position: 3
---

# What Artifacts Are Collected by Cado Host

Cado Host collects a variety of artifacts by default, depending on the operating system. You can also use custom collections to gather specific files. Additionally, you can configure extra files and folders to be collected by using the `--additional_files` parameter when running Cado Host. For more details, see the **[Command Line Parameters](cli)** documentation.

### Volatile Data

Cado Host collects the following volatile data available at the time of execution:
- Information about running processes.
- Memory of running processes on a per-process basis *(Note: Memory collection on Windows is disabled by default. [See Command Line Parameters](cli) for more details.)*
- Netstat data of active network connections.
- Contents of open files, such as running binaries.

### Default Collection

<details>
  <summary>Linux and MacOS</summary>

Cado Host collects the following artifacts on Linux and macOS, when available:

- `.bash_history`
- `.ssh/known_hosts`
- `/var/adm/wtmp`
- `/var/db/application_usage.sqlite`
- `/var/log`, `/private/var/log/`
- `/etc/passwd`, `/etc/group`, `/etc/hosts`, `/etc/hosts.allow`, `/etc/hosts.deny`, `/etc/httpd/logs/`
- `/root/.bash_history`
- `/System/Library/LaunchAgents`, `/System/Library/LaunchDaemons`, `/System/Library/StartupItems`
- `/Library/LaunchAgents`, `/Library/LaunchDaemons`, `/Library/Preferences/SystemConfiguration`, `/Library/Receipts/InstallHistory.plist`, `/Library/StartupItems`
- `/etc/rc.d`
- `/etc/utmp`
- `/var/run/utmp`, `/var/run/wtmp`
-  Web browser history from Google Chrome and Mozilla Firefox.

</details>


<details>
  <summary>Windows</summary>

Cado Host collects the following artifacts on Windows, when available:

- Information about running processes and active network connections.
- File system artifacts including `$MFT`, `NTUSER.DAT`, and their associated log files.
- McAfee and security logs.
- Web browser history, cache, and cookies from Google Chrome, Mozilla Firefox, Opera, and Microsoft Edge.
- PowerShell history (`PSReadline\ConsoleHost_history.txt`).
- Application cache, prefetch data, event logs (`AppEvent.evt`, `SecEvent.evt`, `SysEvent.evt`).
- Task scheduler information (`SYSTEMROOT\Tasks`).
- Internet Information Services (IIS) logs (`inetpub\logs\LogFiles`).
- Windows system configuration files (`hosts`, `SAM`, `SECURITY`, `SOFTWARE`, `SYSTEM` logs).
- Windows startup programs and file history.
- System activity logs and setup logs.

</details>

### Custom Collection

To use custom collection you can do this by following selecting the **Enable Custom Collection** once you have selected the operating system.

<details>
  <summary>Linux and MacOS</summary>
  
Select the artifacts on Linux and macOS, when available:

- Shell History
- Program Execution
- Logs
- Webservers
- Hosts file
- SSH
- Users and Groups
- Misc
- Browsers
- Network connections
- Processes
- Open files

</details>

<details>
  <summary>Windows</summary>

Select the artifacts on Windows when available:

- Antivirus  
- Cloud Storage  
- Logs  
- Group Policy  
- Program Execution  
- Filesystem  
- LNK files and Jump lists  
- Messaging  
- Recycle Bin  
- Registry Hives  
- Remote Access  
- Scheduled Tasks  
- SRUM  
- SUM  
- WER  
- ThumbCache  
- WBEM  
- BITS  
- Browsers  
- Windows Search Index  
- Windows Timeline  
- Webservers  
- Hosts File  
- Java Cache  
- Network Connections  
- Processes  
- Open Files  

</details>


These artifacts provide valuable forensic data for incident response and investigations.

For more details on the configuration and collection options, refer to the **[Command Line Parameters](cli)** documentation.


