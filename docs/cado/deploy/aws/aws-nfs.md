---
title: NFS
hide_title: true
sidebar_position: 4
---

# NFS

The initial minimal deployment deploys without a Network File Share (NFS). Enabling an NFS allows Darktrace to keep a copy of every file processed on disk. This enables the re-running of analysis and the downloading of the original file in the UI for further analysis.

### Prerequisites

  - The VPC and subnet you used in the initial deployment
  - The security group you used in the initial deployment, and permission to edit it

### Steps

1. Configure inbound Security Group rules. Use security group id as Custom Source

| Type | Port  | Source | Reason                    |
|----|-------|----------|---------------------------|
| Custom TCP | 2049  | Custom -  Your / Forensic Acquisition and Investigation security group      | Communicating with NFS    |

2. Navigate to the EFS page in AWS Console
3. Click “**Create file system**”
4. Select your VPC from step 1, then press “**Customize**”.

![AWS Create FS](/img/aws-create-fs.png)

5. Leave defaults unchanged for General, Performance settings and Tags. Click Next.
6. On the Network Access page
   
   a. Under Virtual Private Cloud (VPC): Select the VPC where your instance is deployed.
   
   b. Under mount targets: Create a mount target using the subnet and security group your instance is deployed with

![AWS Network Access](/img/aws-network-access.png)

7. Leave the File system policy settings unchanged. Click Next.
8. On the Review and Create page: click "**Create**"
9. On the last page, confirm the settings are correct, then press “**Create**”. 
10. Select the filesystem ID of the newly created filesystem and open the access points tab.

![AWS FS Overview](/img/aws-fs-overview.png)

11. Create a new access point with the following settings:

    a. Under **Details**, set **Root directory path** to **/process**.

    ![AWS Details](/img/aws-details.png)

    b. Under **POSIX user**:  
       i. Set **User ID** to `0`.  
       ii. Set **Group ID** to `0`.

    ![AWS POSIX](/img/aws-posix.png)

    c. Under Root directory creation permissions:  
       i. Set **Owner user ID** to `0`.  
       ii. Set **Owner group ID** to `0`.  
       iii. Set **Access point permissions** to `0755`.
    
    ![AWS Root Permission](/img/aws-root-permission.png)

12. **Click Create**
13. For the file system go to the Network tab and make a note of the ip address for the availability zone your VM is in

![AWS AZ](/img/aws-az.png)

14. Once the access point and mount target have finished creation, Mount in the UI (**Settings** > **Advanced** > **NFS** > **Setup NFS**) using the ip address of the mount target:

![AWS NFS](/img/aws-nfs.png)





