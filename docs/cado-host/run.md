---
title: Deploy and Run
hide_title: true
sidebar_position: 2
---

# Deployment

You can execute Cado Host individually on a machine or you may also want to deploy it to a number of machines that may be compromised, for example through **[Group Policy](https://support.microsoft.com/en-gb/help/816102/how-to-use-group-policy-to-remotely-install-software-in-windows-server)** or other systems management software.

## Deploy through Cado Response Platform
In order to deploy through the Cado Response platform, follow the instructions below:
1. Find the Cado Host deployment options on the platform under `Project > Import > Host Artifacts > Cado Host`.

  ![Import Evidence](/img/import.png)

2. Select your OS & platform

  ![Select OS and Platform](/img/import-step2.png)

3. Choose between Manual and Command Line Deployment

4. If Manual Deployment, download the installer and execute on your machine. Then copy and paste the command generated for you, into your terminal.

  ![Manual Import](/img/import-manual.png)

5. If Command Line Deployment, then paste the command generated into your terminal. This command will automatically install Cado Host and put your machines files into your S3 bucket.

  ![Automatic Import](/img/import-cmdline.png)

## Considerations

​Cado Host is designed to be executed through the command line. If you do not execute the application with administrative privileges there are some files you will not be able to acquire.
  Cado Host can take parameters from a file (named `config.cfg`) or on the command line.  On Microsoft Windows, if you execute it without the use of the command line, you may be prompted by the Windows SmartScreen. If you wish to run cado-host.exe by manually clicking it, you will have to select Properties and Untick this box:

![Properties](/img/import-security.png)

When running on Linux or OSX, you may need to set the binary as executable:

```console
chmod +x ./cado-host
./cado-host
```

## Creating Secure Cloud Storage Credentials
It is important to use credentials with access limited to only write objects to your cloud storage. Otherwise, if an attacker finds your credentials they could compromise data.
​Before using Cado Host, you will need to create secure credentials to upload with:

**[Creating Secure Credentials for Azure](azure-credentials)**

**[Creating Secure Credentials for AWS](aws-credentials)**

**[Creating Secure Credentials for Google Cloud Storage](google-credentials)**

## Using Local Storage
​If you do not set a cloud storage option, files will be saved to the same folder that Cado Host is run from. You can not set a different storage location at this time.

### Command Line Parameters
​It is very important to follow the advice above on creating write-only credentials if you are entering credentials on the command line.

```
cado-host:
  Cado Host

Usage:
  cado-host [options]

Options:
  --light							Exclude large files (over 100 Mb) from the collection
  --storage <storage>				The cloud storage to use (File will be stored locally if none selected)
  --bucket <bucket>                 The Bucket to store data in
  --access_key <access_key>    		The Access Key
  --secret_key <secret_key>         The Secret Key
  --region <region> 				The bucket region eg; US-EAST-1 (Optional)
  --account_name <account_name>		The Azure Account Name
  --container_name <container_name>	The Azure Container Name
  --sas_string <sas_string>			The Azure SAS string
  --gcp_bucket <gcp_bucket>			The Google Cloud Bucket to store data in
  --gcp_access_key <gcp_access_key>	The Google Cloud Access Key
  --gcp_secret_key <gcp_secret_key>	The Google Cloud Secret Key
  --version							Show version information
  -?, -h, --help					Show help and usage information
```

### Example Command Line
```console
cado-host.exe –storage aws –access_key xxx –secret_key xxx –bucket cado-live-test
```

### Example config.cfg
​The file `config.cfg` should be in the same current working directory as the cado-host binary.

```
[CORE]
storage = google
light = true

[AWS]
access_key = xxx
secret_key = xxx
bucket = xxx

[GOOGLE]
gcp_access_key = xxx
gcp_secret_key = xxx
gcp_bucket = xxx

[AZURE]
access_signature= xxx
account_name = xxx
container_name = xxx

[LOCAL]
destination_folder = /tmp/ or c:\windows\tmp\
```

## Collected Artifacts
Cado Host collects the following artifacts on Linux and OSX, where available:
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

Cado Host collects the following artifacts on Windows, where available:

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
