---
title: What is / Forensic Acquisition and Investigation Host
hide_title: true
sidebar_position: 1
---

# What is / Forensic Acquisition and Investigation Host

/ Forensic Acquisition and Investigation Host is a tool for acquiring forensic artifacts from target systems and storing them in cloud storage. It enables quick triage investigations by collecting essential data, which is stored in a zip file that can be automatically uploaded to Amazon AWS, Microsoft Azure, or Google Cloud Storage. / Forensic Acquisition and Investigation Host also supports local file storage, making it usable in air-gapped environments where cloud access is unavailable. Once the artifacts are collected, they can be imported, processed, and analyzed using the / Forensic Acquisition and Investigation platform.

# Data Collected

/ Forensic Acquisition and Investigation Host collects the following data from a target system:
- Files from key forensic artifact locations.
- Open files.
- Metadata on running processes and network connections.
- Memory (optional).

For more details, see [Collected Artifacts](/cado/discovery-import/cado-host/intro).

# Use Cases and Integrations

/ Forensic Acquisition and Investigation Host integrates with the platform to collect data from:
- AWS EC2 instances via SSM.
- Kubernetes systems like ECS, EKS, GKE, and AKS.
- XDR systems such as CrowdStrike and SentinelOne.

# High-Level Data Flow

The diagram below illustrates the high-level data flow for / Forensic Acquisition and Investigation Host with AWS. The process is similar for Azure and Google Cloud Storage, differing only in the cloud storage provider.

![Cado Host Dataflow](/img/cado-host-dfd.png)

# Supported Operating Systems

Cado Host binaries are available for:
- **Microsoft Windows**: Versions 7, 8.1, 10, 11, and Windows Server 2012 R2 and above. Windows releases are signed with an EV certificate.
- **Linux**: Debian (9+), Ubuntu (16.04+), Fedora (29+), RHEL (7+), openSUSE (15+), SUSE Enterprise (SLES 12 SP2+), and Alpine (3.10+).
- **macOS** (ARM): Version 14.0.0+.

For older operating systems, we recommend alternative tools:
- **Linux**: Use [UAC](https://github.com/tclahr/uac).
- **Windows**: Use [Cado Batch](https://github.com/cado-security/Cado-Batch) (for Windows 2003+).
- **macOS** (Intel): Use [UAC](https://github.com/tclahr/uac) or an [older version](https://cado-public.s3-accelerate.amazonaws.com/cado-host/v2.0.0/osx/cado-host-x86) of / Forensic Acquisition and Investigation Host
