---
title: File Types
hide_title: true
sidebar_position: 1
---

# What Filetypes Can Cado Process?

The Cado platform supports a wide variety of evidence types for processing, with some differences depending on your cloud platform.

### AWS Capture Formats
- EC2 (Including AMIs, EBS Snapshots, and Volumes)
- S3 Storage (both standard and Glacier)
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

In addition to native support for cloud-based machines and data, Cado can process the following local evidence formats:

#### Storage Media
- `.E01` and split `.E01`
- `.VHD` and `.VHDX`
- `.DD` (Optionally `.GZ` Compressed)
- `.GZ`, `.TAR`, `.ZIP`
- `.VMDK` (Partial Support*)
- Other forensic artifacts collected by EDR tools or [Cado Host](/cado/discovery-import/cado-host/intro)

To import a compressed dd image, use Gzip and add the `.gz` extension (e.g., `disk.dd.gz`).

### Limitations and Notes
- **Split E01 disks** are currently supported only in AWS. Importing zipped split E01 files is not supported.
- **VMDK** files are partially supported, as the format has various sub-formats. For better compatibility, it's recommended to convert VMDK files to `.dd` format before importing.
- If you import a ZIP file, it will be treated as a container of files unless it contains a single file.

#### Volume Systems
- GPT
- LVM
- MBR
- Volume Shadow Snapshots (VSS)

#### File Systems
- ext2, ext3, ext4
- FAT
- NTFS (version 3)
- XFS (version 4, 5)
- Apple File System (APFS)

Cado can also handle a variety of other disk images and file formats not listed here, though they may not be officially supported. If you have a specific file type you'd like to see supported, feel free to contact us at support@cadosecurity.com.