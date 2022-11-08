---
title: Detections
hide_title: true
sidebar_position: 9
---

## Setting Up Detections

The Cado platform can integrate with a number of systems as well as incorporate custom Indicators of Compromise. These can be defined in *Settings - General Settings - Detection* 

The **VirusTotal API Key** is used to enhance the analysis of already detected files by checking their file-hash against the VirusTotal database. It is not used to detect files. 

The **Yara Rules** text-box allows you to run your own set of Yara rules against files. These are run in addition to a set built-in to Cado. Rules that match will trigger a `Malicious` detection, unless the yara rule name starts with the keyword suspicious - in which case it will create a `Suspicious` detection.

The **Indicators of Compromise** are matched against the contents of files and events, for example connections from network logs. Enter one indicator on each line. You can enter any keyword such as a filename, IP address or Domain name. If you enter a SHA256 filehash, it will be matched against files too. You can optionally enter a title for an indicator, preceded by the ';' character. For example "Domain.com;A bad domain"