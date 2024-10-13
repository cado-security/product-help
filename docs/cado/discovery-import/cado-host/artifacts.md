---
title: Collected artifacts
hide_title: true
sidebar_position: 3
---

# What Artifacts Are Collected by Cado Host

Cado Host collects a variety of artifacts by default, depending on the operating system. You can configure additional files and folders to be collected by using the `--additional_files` parameter when running Cado Host. For more details, see the **[Command Line Parameters](cli)** documentation.

### Volatile Data

Cado Host collects the following volatile data available at the time of execution:
- Information about running processes.
- Memory of running processes on a per-process basis *(Note: Memory collection on Windows is disabled by default. [See Command Line Parameters](cli) for more details.)*
- Netstat data of active network connections.
- Contents of open files, such as running binaries.

### Linux and macOS

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

### Windows

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

These artifacts provide valuable forensic data for incident response and investigations.

For more details on the configuration and collection options, refer to the **[Command Line Parameters](cli)** documentation.