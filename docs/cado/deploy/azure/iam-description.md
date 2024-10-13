---
title: IAM permissions description
hide_title: true
sidebar_position: 6
---

# Cado Security - Required Azure Permissions

Cado Security requires specific permissions to be granted in your Azure environment to function correctly. The permissions described here are based on the [Cado Security Azure Terraform Module](https://github.com/cado-security/Deployment-Templates/blob/main/azure/azure_persistent/main.tf). Please refer to this link for the latest and most detailed information regarding required permissions.


If these permissions are too broad for your environment, or if you have concerns regarding the scope of any permissions, please contact our support team at [support@cadosecurity.com](mailto:support@cadosecurity.com) for assistance in reducing the permission set while maintaining necessary functionality.


## Required Permissions

The following Azure roles and permissions are required for Cado Security deployment:

1. **Resource Group**  
   - The resource group will host the infrastructure for Cado Security.
   - **Permission**: `Contributor` on the resource group.

2. **Network Permissions**
   - Cado Security requires a static public IP for provisioning.
   - **Permission**: Permissions to create and manage public IPs.

3. **Storage Account Permissions**
   - The module will create a storage account to store investigation data.
   - **Permission**: `Storage Account Contributor` on the resource group (or subscription if acquisition permissions are deployed).
   
4. **Disk Permissions**
   - To manage and attach disks for processing.
   - **Permission**: `Disk Snapshot Contributor` at the subscription level (optional, depending on configuration).
   
5. **Virtual Machine Permissions**
   - Required for creating, managing, and interacting with virtual machines.
   - **Permission**: `Virtual Machine Contributor` at the subscription level (optional, depending on configuration).

6. **Kubernetes Service Permissions**
   - If deploying Kubernetes clusters, permissions to interact with Azure Kubernetes Service are needed.
   - **Permission**: `Azure Kubernetes Service Cluster Admin Role` at the subscription level (optional, depending on configuration).

7. **Identity Permissions**
   - A managed identity will be created to run Cado Security operations.
   - **Permission**: `Contributor` role for the managed identity within the resource group.

## Optional Permissions

You can choose whether or not to grant acquisition-related permissions for local investigations within the same subscription. These include:
- `Storage Account Contributor`
- `Disk Snapshot Contributor`
- `Virtual Machine Contributor`
- `Azure Kubernetes Service Cluster Admin Role`
