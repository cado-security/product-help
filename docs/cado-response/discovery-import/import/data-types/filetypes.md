---
title: File Types
hide_title: true
sidebar_position: 1
---

# File Types
The Cado platform supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform.

### AWS Capture Formats
- EC2 (Including AMI, EBS Snapshots and Volumes)
- S3 Storage (normal and glacier)
- AWS Kubernetes (ECS and EKS)
- AWS Lambda

### Azure Capture Formats
- Virtual Machines 
- Disks
- Storage Containers
- Container Blobs
- Kubernetes (AKS)

### GCP Capture Formats
- Compute Engine
- Disks
- Storage Buckets
- Kubernetes (GKE)

### Storage Formats
In addition to native capture support for machines and data running/stored in the cloud, Cado also supports processing of the following local evidence formats.  

#### Storage Media
- .E01, and split E01
- .VHD and .VHDX
- .DD (Optionally .GZ Compressed)
- .GZ / .Tar / .Zip
- .VMDK (Partial Support*)
- Other forensic triage artifacts collected by EDR Tools or [Cado Host](/cado-host/intro)

To import a compressed dd image, compress with Gzip and add .gz to the extension. (example: `disk.dd.gz`)


### Limitations and Notes
- Currently, split E01 format disks are supported in AWS only. Importing zipped split E01s is not supported.
- VMDK's are partially supported as the file format contains many different sub-formats. If possible, we recommend converting to dd format before importing.
- If you import a zip, it will be treated as a container of files **unless** it is a zip of a single file.

#### Volume Systems
- GPT
- LVM
- MBR
- Volume Shadow Snapshots (VSS)

#### File Systems
- ext version 2, 3, 4
- FAT
- NTFS version 3
- XFS version 4, 5
- Apple File System (APFS) 

Cado can also import a number of other disk image and file formats that are not listed here; however, these evidence types and file formats are not officially supported.  If you have a filetype that you would like to see supported, please reach out to support@cadosecurity.com and let us know.