---
title: Summary
hide_title: true
sidebar_position: 1
---

# Cado Host
Cado Host is a solution to acquire forensic artifacts from systems and place them into cloud storage, enabling you to perform a quick triage investigation of a target system.
Data is collected and stored in a zip file that can be automatically uploaded to Amazon AWS, Microsoft Azure or Google Cloud Storage. It also supports storing captured files locally.
Once collected, these artifacts can be imported, processed and analysed in the Cado Response platform.

You can also use Cado Host with the --single_file_unzipped parameter - this may be a good option if you do not have direct access to Azure as Cado Response will generate the credentials at Import > Cado Host.

![Cado Host Single File](/img/cado-host-single-file.png)

Cado Host binaries are available for:
- Microsoft Windows: 7, 8.1, 10 (1607+) and Microsoft Windows Server Server 2012 R2+
- Linux: Debian: 9+, Ubuntu: 16.04+, Fedora: 29+, RHEL: 6+, openSUSE: 15+, SUSE Enterprise (SLES): 12 SP2+, Alpine: 3.10+
- MacOS (Intel based only): 10.13+

For older Operating systems we recommend instead acquiring with:
- [UAC](https://github.com/tclahr/uac) for Linux
- [Cado Batch](https://github.com/cado-security/Cado-Batch) for Windows
