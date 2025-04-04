---
title: Cross account permissions
hide_title: true
sidebar_position: 3
---

# Minimal Permissions for cross account imports
By default, the Cado platform uses Azure contributor roles for cross-account permissions, it is possible to use custom roles to granularly scope the permissions required.

## Valid Scopes
There are three ways to assign scope to the following permissions, these and their effects are explained below:

| Assignable Scope    | Effect |
| ------------ | ------- |
| `/providers/Microsoft.Management/managementGroups/<<GROUP ID>>`  | Allows access to all resources in the management group where the Cado app registration was created, typically allows access at the root of an Azure tenancy.   |
| `/subscription/<<Subscription ID>>` | Allows access to all resources, within a given subscription, in the tenant where the Cado app registration was created.    |
| `/subscription/<<Subscription ID>>/resourceGroups/<<Resource Group>>`    | Allows access to a specific resource group, within a given subscription, in the tenant where the Cado app registration was created.|

## Storage Account
This is a scoped down replacement for the Storage Account Contributor role, the following are a list of permissions required for Azure blob storage acquisitions:

| Permission | Purpose |
| -----------|----------|
| `Microsoft.Resources/subscriptions/resourceGroups/read` | Retrieves or lists resource groups.|
| `Microsoft.Storage/storageAccounts/read` | Retrieves the storage account with the given account.|
| `Microsoft.Storage/storageAccounts/listKeys/action` | Retrieves access keys for the storage account.|

### Example
```json
{
    "properties": {
        "roleName": "Cado Storage Role",
        "description": "Required by Cado for blob based acquisitions",
        "assignableScopes": [
            "<<YOUR SCOPE HERE>>"
        ],
        "permissions": [
            {
                "actions": [
                    "Microsoft.Resources/subscriptions/resourceGroups/read",
                    "Microsoft.Storage/storageAccounts/read",
                    "Microsoft.Storage/storageAccounts/listKeys/action"
                ],
                "notActions": [],
                "dataActions": [],
                "notDataActions": []
            }
        ]
    }
}
```

## Compute and Activity Logs
This is a scoped down replacement for the Virtual Machine Contributor, Disk Snapshot Contributor, and Monitoring Contributor roles.  The following are the permissions needed for virtual machine and activity log acquisitions:

| Permission    | Effect |
| ------------ | ------- |
| `Microsoft.Compute/snapshots/write` |Create a new snapshot, or update an existing one. |
| `Microsoft.Compute/snapshots/read` |Retrieve the properties of a snapshot. |
| `Microsoft.Compute/snapshots/delete` |Delete a snapshot.|
| `Microsoft.Compute/snapshots/beginGetAccess/action` | Get the SAS URI of a snapshot for download.|
| `endGetAccess/actionMicrosoft.Compute/snapshots/` |Revoke a SAS URI of a given snapshot. |
| `Microsoft.Compute/disks/beginGetAccess/action` | Get the SAS URI of a disk for download.|
| `Microsoft.Compute/disks/read` |Retrieve the properties of a disk. |
| `Microsoft.Compute/virtualMachines/read` | Retrieve the properties of a virtual machine |
| `Microsoft.Compute/virtualMachines/runCommand/action` | Execute a predefined script on a virtual machine.|
| `Microsoft.Insights/eventtypes/values/read` |Retrieve activity log events. |

### Example
```json
{
    "properties": {
        "roleName": "Cado Compute and Activity Log Role",
        "description": "Required by Cado for virtual machine based acquisitions",
        "assignableScopes": [
            "<<YOUR SCOPE HERE>>"
        ],
        "permissions": [
            {
                "actions": [
                    "Microsoft.Compute/snapshots/read",
                    "Microsoft.Compute/snapshots/write",
                    "Microsoft.Compute/snapshots/delete",
                    "Microsoft.Compute/snapshots/beginGetAccess/action",
                    "Microsoft.Compute/snapshots/endGetAccess/action",
                    "Microsoft.Compute/disks/beginGetAccess/action",
                    "Microsoft.Compute/disks/read",
                    "Microsoft.Compute/virtualMachines/read",
                    "Microsoft.Compute/virtualMachines/runCommand/action",
                    "Microsoft.Insights/eventtypes/values/read"
                ],
                "notActions": [],
                "dataActions": [],
                "notDataActions": []
            }
        ]
    }
}
```
## Azure Kubernetes Service

| Permission    | Effect |
| ------------ | ------- |
| `Microsoft.Resources/subscriptions/operationresults/read` | Retrieve subscription operation results.|
| `Microsoft.Resources/subscriptions/read` | Retrieve a list of subscriptions.|
| `Microsoft.Resources/subscriptions/resourceGroups/read` | Retrieve or list resource groups.|
| `Microsoft.ContainerService/managedClusters/read` |Retrieve a managed cluster. |
| `Microsoft.ContainerService/managedClusters/runCommand/action` | Run a command against a managed kubernetes cluster.|
| `Microsoft.ContainerService/managedClusters/commandResults/read` | Retrieve the result of a previously issued command.|
| `Microsoft.ContainerService/managedClusters/privateEndpointConnections/read` | Retrieve a private endpoint connection.|
| `Microsoft.ContainerService/managedClusters/listClusterAdminCredential/action` | List the cluster admin credential of a managed cluster.|

### Example
```json
{
    "properties": {
        "roleName": "Cado Kubernetes role",
        "description": "Required by Cado for AKS based acquisitions",
        "assignableScopes": [
            "<<YOUR SCOPE HERE>>"
        ],
        "permissions": [
            {
                "actions": [
                    "Microsoft.Resources/subscriptions/operationresults/read",
                    "Microsoft.Resources/subscriptions/read",
                    "Microsoft.Resources/subscriptions/resourceGroups/read",
                    "Microsoft.ContainerService/managedClusters/read",
                    "Microsoft.ContainerService/managedClusters/runCommand/action",
                    "Microsoft.ContainerService/managedClusters/commandResults/read",
                    "Microsoft.ContainerService/managedClusters/privateEndpointConnections/read",
                    "Microsoft.ContainerService/managedClusters/listClusterAdminCredential/action"
                ],
                "notActions": [],
                "dataActions": [],
                "notDataActions": []
            }
        ]
    }
}
```