---
title: Intelligence
hide_title: true
sidebar_position: 11
---

# Intelligence Tab

When a Darktrace AIA incident occurs, any artifacts (file hashes, IP addresses, domains, etc.) associated with the incident are automatically extracted and converted into investigation-level IOCs.

These IOCs are then matched against evidence collected as part of the forensic investigation, to provide analysts with clear insights into suspicious and malicious activities as well as pivot points.



![IntelligenceTab](/img/intelligencetab.png)    

![Artifacts](/img/artifacts.png)

## Creating Custom IOC

You can now create custom IOC's for AIA incidents.

You can enter one indicator per line to match content inside files.

Indicators can include:

- Keywords (e.g., filenames, IP addresses, domain names)
- SHA256 file hashes (matched against files directly)

> Note
> 
> Matches occur within file content, not the filename itself. Optionally, add a descriptive title for an indicator by prefixing it with a semicolon (;).
> 
> **Example:**
> 
> Domain.com;A bad domain

![Custom IOC](/img/customioc.png)  

Once you click **Update Intelligence** all IOC's will be re-run for the evidence items in your investigation.





