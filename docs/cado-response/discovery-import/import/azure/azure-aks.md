---
title: Azure Kubernetes Service
hide_title: true
sidebar_position: 3
---

# Azure Kubernetes Service

The Cado platform will collect key logs and forensic artifacts from Azure Kubernetes Service containers.

:::info
Due to the way the Cado platform interacts with Kubernetes, it is not possible to import containers built from a [distroless](https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images) image.
:::

## Import Steps

1) Go to **Import > Cloud**

![Cado Import Screen showing the AKS options](/img/import.png)

2) Choose the Azure Credenitals configured in [Azure > Cross Subscription and Tenancy](/cado-response/deploy/azure/azure-cross-tenancy-subscriptions)

3) Choose the resource group the AKS cluster is attached to.

4) Go through the steps to choose your **Cluster**, **Pod** and **Container**:

![Cado Import Screen showing the available AKS Clusters](/img/aks.png)

5) Confirm the details and click **Start Import**

Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.
For a typical acquisition, import and processing will take a few minutes to complete.

![Cado showing the confirmation screen of a successful AKS container capture](/img/eks3.png)

:::info
### Private Cluster Support
As of release v2.31.0, the Cado platform now supports capture of AKS Private Clusters. It should be noted that the Cado platform
uses the [Azure Command Invoke APIs](https://learn.microsoft.com/en-us/azure/aks/command-invoke) to achieve this functionality.

There are two main caveats to this method:
1. The process is consideribly slower than capturing a Public Cluster
2. The Azure API will spin up a pod inside the cluster to execute Cado Host, make sure that there are enough nodes and resources in your cluster to schedule this command pod.

The newly created pod will shutdown and remove itself after 1 hour.
:::

### Scoping Down The Role for Access to AKS
The Cado platform requires permissions to access and execute code against containers. The following role definition can be used to scope down the permissions required for the Cado platform to access and acquire data from AKS:

![Scoped down AKS role](/img/aks_role.png)

```
{
    "id": "",
    "properties": {
        "roleName": "ScopedDownAKSTest",
        "description": "",
        "assignableScopes": [
            ""
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