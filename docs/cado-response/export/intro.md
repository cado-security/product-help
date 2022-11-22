---
title: Exporting Data
hide_title: true
sidebar_position: 1
---

## Exporting Data from Cado Response
Cado Response is designed to be an open platform to import and export data from.

#### Exporting Collected Disk Images and Raw Data to Forensic Tools
We collect:
* AWS EC2 systems in DD format
* Azure Virtual Machines in VHD format
* GCP Instances in VMDK format
* Cado Host Triage captures (and captures from Containers) in a Zip format
In to storage (S3 in AWS, Storage in Azure).

These formats can be downloaded from the relevant cloud consoel and imported into desktop forensic tools such as:
* https://www.magnetforensics.com/products/magnet-axiom/
* https://www.x-ways.net/forensics/
* https://www.opentext.com/products/encase-forensic

#### Exporting Processed Data to SIEM Platforms

Please see **[SIEM Integrations >](/manage/integrations/siem.md)**
