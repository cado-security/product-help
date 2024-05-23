---
title: Detections
hide_title: true
sidebar_position: 9
---

## Setting Up Detections

The Cado platform can integrate with a number of systems as well as incorporate custom Indicators of Compromise. These can be defined in *Settings - General Settings - Detection* 

The **VirusTotal API Key** is used to enhance the analysis of already detected files by checking their file-hash against the VirusTotal database. It is not used to detect files, but is a supplement to existing Cado-native detections. Cado will use the VirusTotal API key to do a lookup for the hash of each file that already has a detection. 

If the VirusTotal (VT) lookup fails for some reason, a retry of that same lookup will not occur. Cado also caches the API lookups, so if the same file is seen twice, only one lookup will occur. It's probable that Cado will only do a small amount of VT lookups for any system we're processing evidence for, however it is possible that a system could be overwhelmed with malicious files, which means the VT API Key could potentially hit its subscription lookup limits. Workarounds for the above include:

-Possibly creating specific VT API keys with limited API key lookups
-Creating a separate free VT API Key (outside of an Enterprise license)
-Not leveraging VT at all for alarms or detections. Yara and Indicators of Compromise still be used (as described below). 

The **Yara Rules** text-box allows you to run your own set of Yara rules against files. These are run in addition to a set built-in to Cado. Rules that match will trigger a `Malicious` detection, unless the yara rule name starts with the keyword suspicious - in which case it will create a `Suspicious` detection.

The **Indicators of Compromise** are matched against the contents of files and events, for example connections from network logs. Enter one indicator on each line. You can enter any keyword such as a filename, IP address or Domain name. If you enter a SHA256 filehash, it will be matched against files too. You can optionally enter a title for an indicator, preceded by the ';' character. For example "Domain.com;A bad domain". You can also upload a MISP formatted json file containing indicators.
