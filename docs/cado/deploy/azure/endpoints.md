---
title: Endpoint access
hide_title: true
sidebar_position: 3
---

# What Azure Endpoints Does the Cado Platform Require Access To?

The Cado platform requires access to the following Azure endpoints:

### Azure Resource Manager
- **Provider APIs**: `https://management.azure.com/`
- **Classic Deployment Model**: `https://management.core.windows.net/`

### Storage Service
- `/subscriptions/{subscriptionId}/providers/Microsoft.Storage/storageAccounts`
- `{account_name}.blob.core.windows.net/{container}?restype=container&comp=list`
- `{account_name}.blob.core.windows.net/{container}/{blob}`

### Networking Service
- `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces`

### Monitor / Activity Logs
- `/subscriptions/{subscriptionId}/providers/Microsoft.Insights/eventtypes/management/values`

### Kubernetes
- `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/listClusterAdminCredential`
- `/subscriptions/{subscriptionId}/resourcegroups`
- `/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/managedClusters`

### Identity
- `/subscriptions/{subscriptionId}/providers/Microsoft.ManagedIdentity/userAssignedIdentities`
- `/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/roleAssignments`

### Compute
- `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines`
- `/subscriptions/{subscriptionId}/providers/Microsoft.Compute/disks`
- `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/`