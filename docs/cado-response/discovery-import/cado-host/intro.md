---
title: Cado Host Summary
hide_title: true
sidebar_position: 1
---

# Cado Host
Cado Host is a solution to acquire forensic artifacts from systems and place them into cloud storage, enabling you to perform a quick triage investigation of a target system.
Data is collected and stored in a zip file that can be automatically uploaded to Amazon AWS, Microsoft Azure or Google Cloud Storage.
It also supports storing captured files locally, for usage in environments where cloud storage is not available such as air-gapped networks.
Once collected, these artifacts can be imported, processed and analyzed in the Cado Response platform.

# Data Collected
On a target system Cado Host will collect:
- Files from a list of key locations of forensic artifacts
- Open files
- Meta-data on running processes and network connections
- Memory (Optional)
For more, see [Collected Artifacts](/cado-response/discovery-import/cado-host/intro)

# Use Case and Integrations
Cado Host is also used by the Cado Platform to collect data from:
- AWS EC2's over SSM
- Kubernetes systems such as ECS, EKS, GKE and AKS
- XDR systems such as Crowdstrike and SentinelOne

# High Level Dataflow
The following diagram shows the high level dataflow of Cado Host for AWS. The same dataflow applies to Azure and Google Cloud Storage, with the exception of the cloud storage provider:
![Cado Host Dataflow](/img/cado-host-dfd.png)

# Supported Operating Systems
Cado Host binaries are available for:
- Microsoft Windows: 7, 8.1, 10, 11 and Microsoft Windows Server Server 2012 R2+. Windows releases are signed with an EV certificate.
- Linux: Debian: 9+, Ubuntu: 16.04+, Fedora: 29+, RHEL: 7+, openSUSE: 15+, SUSE Enterprise (SLES): 12 SP2+, Alpine: 3.10+
- MacOS (Intel and ARM): 10.13+

For older Operating systems we recommend instead acquiring with:
- [UAC](https://github.com/tclahr/uac) for Linux
- [Cado Batch](https://github.com/cado-security/Cado-Batch) for Windows (for Windows 2003+)
