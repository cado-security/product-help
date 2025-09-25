---
title: Export to on-premise forensic tools
hide_title: true
sidebar_position: 1
---

# How to Export to On-Premise Forensic Tools

Cado collects forensic data in the following formats based on the cloud provider:

- **AWS EC2** systems: DD format
- **Azure Virtual Machines**: VHD format
- **GCP Instances**: VMDK format
- **Cado Host Triage captures** (including captures from Containers): ZIP format

These files are stored in cloud storage (e.g., S3 in AWS or Storage in Azure) and can be downloaded from the respective cloud console. Once downloaded, the data can be imported into desktop forensic tools such as:

- [Magnet Axiom](https://www.magnetforensics.com/products/magnet-axiom/) ([How to import from S3](https://www.magnetforensics.com/docs/axiom/html/Content/en-us/acquire-cloud/acquire-amazon-s3.htm))
- [X-Ways Forensics](https://www.x-ways.net/forensics/)
- [EnCase Forensic](https://www.opentext.com/products/encase-forensic)

## Centrally Preserving Data

:::info
This section is not relevant to SaaS deployments.
:::

If your deployment is in AWS, you can configure the system to automatically copy and preserve all processed evidence in a central S3 bucket. To enable this feature, go to **Settings** > **Preservation**.


![Preservation](/img/preserve.png)

When data is collected in AWS (to the "default" bucket)/Azure/GCP - a second copy of the data will be copied to the S3 bucket set for evidence preservation.

