---
title: NFS
hide_title: true
sidebar_position: 8
---

# NFS

The initial deployment deployment deploys without a Network File Share (NFS). Enabling an NFS allows Cado to keep a copy of every file processed on disk. This enables the re-running of analysis and the downloading of the original file in the UI for further analysis.

### Prerequisites

- A storage account configured in the resource group (Can be the same as used to deploy)
- A File Share created inside this storage account
  
  - There are no particular requirements on this fileshare, although we recommend a minimum size of 2 Terabytes. 

### Steps

1. **Create an NFS**
   
   a. Navigate to your storage account in the UI.  
   b. Open **Datastorage > File Shares** in the sidebar.  
   c. Press **Create**.  
   d. Configure the File Share, choosing a memorable name and sensible size.

2. Mount in the UI (**Settings** > **Advanced** > **NFS** >) using the Storage account name and the File Share name.


![Azure NFS](/img/nfs-azure.png)

