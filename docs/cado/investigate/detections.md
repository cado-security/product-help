---
title: Adding detections
hide_title: true
sidebar_position: 9
---

# How to Add Additional Detections to the / Forensic Acquisition and Investigation Platform

The / Forensic Acquisition and Investigation platform allows you to integrate with various systems and incorporate custom Indicators of Compromise (IOCs). You can configure these settings by navigating to **Settings > General Settings > Intelligence**.

### VirusTotal API Key

The **VirusTotal API Key** is used to enhance the analysis of already detected files by comparing their file-hash with the VirusTotal database. It does not perform file detection on its own but supplements / Forensic Acquisition and Investigation’s existing detections. When a file with a detection is processed, Cado will perform a VirusTotal lookup based on the file’s hash.

Key points to note:
- If the VirusTotal lookup fails, it will not be retried.
- / Forensic Acquisition and Investigation caches API lookups to avoid redundant queries. If the same file is encountered again, only the first lookup will occur.
- Typically, / Forensic Acquisition and Investigation will only perform a small number of VirusTotal lookups for any system being processed. However, systems with many malicious files may hit the VirusTotal API key's subscription limit.

Possible workarounds if limits are reached:
- Create specific API keys with limited usage.
- Use a separate free VirusTotal API key (outside of an Enterprise license).
- Disable VirusTotal integration for alarms or detections and rely on other detection methods like Yara rules and IOCs.

### Yara Rules

The **Yara Rules** field allows you to apply your own Yara rules in addition to the built-in rules provided by / Forensic Acquisition and Investigation. When a rule matches, it will trigger a detection:
- A match will generate a `Malicious` detection by default.
- If the Yara rule name starts with "suspicious", it will trigger a `Suspicious` detection.

### Indicators of Compromise (IOCs)

The **Indicators of Compromise** field enables you to match IOCs against file contents or events, such as network logs. You can enter one indicator per line, using any keyword, such as:
- Filename
- IP address
- Domain name
- SHA256 file hash (for matching against files)

You can also add a description for an indicator by using a semicolon (`;`). For example, to label a domain as suspicious, you can enter: 
```
Domain.com;A bad domain
```

Additionally, you can upload a MISP-formatted JSON file containing indicators for bulk input.
