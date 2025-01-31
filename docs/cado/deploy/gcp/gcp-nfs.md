---
title: NFS
hide_title: true
sidebar_position: 9
---

# NFS

The initial minimal deployment deployment deploys without a Network File Share (NFS). Enabling an NFS allows Cado to keep a copy of every file processed on disk. This enables the re-running of analysis and the downloading of the original file in the UI for further analysis.

### Prerequisites

   - The VPC and subnet you used in the initial deployment
   - The security group you used in the initial deployment, and permission to edit it.

### Steps

1. Configure inbound firewall rules

| Port | Protocol | Reason                     |
|------|----------|----------------------------|
| 2049 | TCP      | Communicating with NFS     |

2. Create a Filestore instance - there are no particular requirements on this fileshare, although we recommend a minimum size of 2 Terabytes.

![GCP Filestore](/img/gcp-filestore.png)

   a. Select your VPC from the “VPC network” dropdown  
   b. Click Create

3. Once the access point and mount target have finished creation, Mount in the UI (**Settings** > **Advanced** > **NFS** > **Setup NFS**) using the Filestore IP and Filestore Name

![GCP NFS](/img/gcp-nfs.png)

