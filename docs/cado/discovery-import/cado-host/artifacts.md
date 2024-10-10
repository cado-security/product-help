---
title: Collected artifacts
hide_title: true
sidebar_position: 3
---

# What artifacts are collected by Cado Host
Cado Host collects a number of artifacts by default, based on the operating system.  Note that you can configure additional files and folders to be collected by defining the --additional_files parameter when running Cado Host.  See the `--additional_files` **[Command Line Parameters](cli)** for more details.

### Volatile Data
Cado Host collects the following volatile data available at the time Cado Host is executed
- Data about running processes
- Memory of running processes on a per-process basis *(note - memory collection on Windows is disabled by default; [see Command Line Parameters](cli) )*
- Netstat data of active connections
- The contents of open files - for example running binaries

### Linux and OSX
Cado Host collects the following artifacts on Linux and OSX, when available:
- .bash_history
- .ssh/known_hosts
- /.fseventsd
- /Library/LaunchAgents
- /Library/LaunchDaemons
- /Library/Preferences/SystemConfiguration
- /Library/Receipts/InstallHistory.plist
- /Library/StartupItems
- /System/Library/LaunchAgents
- /System/Library/LaunchDaemons
- /System/Library/StartupItems
- /etc/group
- /etc/hosts
- /etc/hosts.allow
- /etc/hosts.deny
- /etc/httpd/logs/
- /etc/passwd
- /etc/rc.d
- /etc/utmp
- /private/var/log/
- /root/.bash_history
- /var/adm/wtmp
- /var/db/application_usage.sqlite
- /var/log
- /var/run/utmp
- /var/run/wtmp

### Windows
Cado Host collects the following artifacts on Windows, when available:
- Running Processes
- Active Network Connections
- $MFT
- ALLUSERSPROFILE\McAfee\DesktopProtection\AccessProtectionLog.txt
- APPDATA\LocalLow\Sun\Java\Deployment\cache\6.0
- APPDATA\Local\Apple Computer\Safari\Cookies\Cookies.binarycookies
- APPDATA\Local\ConnectedDevicesPlatform
- APPDATA\Local\Google\Chrome\User Data\Default\Extensions
- APPDATA\Local\Google\Chrome\User Data\Default\History
- APPDATA\Local\Google\Chrome\User Data\Default\Web Data
- APPDATA\Local\Microsoft\Windows\Explorer
- APPDATA\Local\Microsoft\Windows\FileHistory\Configuration
- APPDATA\Local\Microsoft\Windows\UsrClass.dat
- APPDATA\Local\Microsoft\Windows\UsrClass.dat.LOG1
- APPDATA\Local\Microsoft\Windows\UsrClass.dat.LOG2
- APPDATA\Local\Microsoft\Windows\WebCache
- APPDATA\Roaming\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt
- APPDATA\Roaming\Microsoft\Windows\Recent
- APPDATA\Roaming\Microsoft\Windows\Recent\AutomaticDestinations\
- APPDATA\Roaming\Mozilla\Firefox\Profiles\
- APPDATA\Roaming\Opera\Opera\global_history.dat
- APPDATA\Roaming\Opera\Opera\typed_history.xml
- NTUSER.DAT
- NTUSER.DAT.LOG1
- NTUSER.DAT.LOG2
- PROGRAMDATA\McAfee\DesktopProtection\AccessProtectionLog.txt
- PROGRAMDATA\Microsoft\Windows\Start Menu\Programs\Startup
- SYSTEMROOT\AppCompat\Programs\AmCache.hve
- SYSTEMROOT\Prefetch
- SYSTEMROOT\SchedLgU.Txt
- SYSTEMROOT\System32\Config\AppEvent.evt
- SYSTEMROOT\System32\Config\SecEvent.evt
- SYSTEMROOT\System32\Config\SysEvent.evt
- SYSTEMROOT\System32\LogFiles\W3SVC1
- SYSTEMROOT\System32\Tasks
- SYSTEMROOT\System32\config\SAM
- SYSTEMROOT\System32\config\SAM.LOG1
- SYSTEMROOT\System32\config\SAM.LOG2
- SYSTEMROOT\System32\config\SECURITY
- SYSTEMROOT\System32\config\SECURITY.LOG1
- SYSTEMROOT\System32\config\SECURITY.LOG2
- SYSTEMROOT\System32\config\SOFTWARE
- SYSTEMROOT\System32\config\SOFTWARE.LOG1
- SYSTEMROOT\System32\config\SOFTWARE.LOG2
- SYSTEMROOT\System32\config\SYSTEM
- SYSTEMROOT\System32\config\SYSTEM.LOG1
- SYSTEMROOT\System32\config\SYSTEM.LOG2
- SYSTEMROOT\System32\drivers\etc\hosts
- SYSTEMROOT\System32\sru
- SYSTEMROOT\System32\winevt\logs
- SYSTEMROOT\Tasks
- SYSTEMROOT\inf\setupapi.dev.log
- SYSTEMROOT\inf\setupapi.log
- inetpub\logs\LogFiles
