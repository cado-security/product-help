---
title: Export to on-premise forensic tools
hide_title: true
sidebar_position: 1
---

# How to export to on-premise forensic tools

Cado collects:
* AWS EC2 systems in DD format
* Azure Virtual Machines in VHD format
* GCP Instances in VMDK format
* Cado Host Triage captures (and captures from Containers) in a Zip format
In to storage (S3 in AWS, Storage in Azure).

These formats can be downloaded from the relevant cloud console and imported into desktop forensic tools such as:
* https://www.magnetforensics.com/products/magnet-axiom/ (See also [How to import from S3](https://www.magnetforensics.com/docs/axiom/html/Content/en-us/acquire-cloud/acquire-amazon-s3.htm))
* https://www.x-ways.net/forensics/
* https://www.opentext.com/products/encase-forensic


## Centrally Preserving Data
If you are deployed into AWS, you can enable all processed evidence to be copied and preserved in a central S3 bucket.
This setting can be enabled at **Settings** > **Preservation**.

![Preservation](/img/preserve.png)