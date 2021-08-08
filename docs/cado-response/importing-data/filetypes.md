---
title: File Types
hide_title: true
sidebar_position: 2
---

# Evidence Types
Cado Response can process a number of different types of evidence, including:
- Disk Images in DD, single E01, VHD, VMDK and VHDX file formats
- Forensic Artifacts collected by EDR Tools or Cado Host
- Compressed Archives (Zip, Tar, Gz)
- Log Files (A wide range of formats)
- Folders of Evidence Items
- Mounted Disks

:::info 
Our AWS deployment supports Split E01 format disks, but this is not yet supported in Azure.
:::

To import a compressed dd image, compress with Gzip and add .gz to the extension. (example: `disk.dd.gz`)

If you import a zip, it will be treated as a container of files. For example, if you compress a disk image with zip, it will not be processed as a disk image.

Cado Response can also import a number of other disk image and file formats that are not listed here - however they are not *officially* supported.  If you have a filetype which you would like to see supported, please reach out to support@cadosecurity.com and let us know.