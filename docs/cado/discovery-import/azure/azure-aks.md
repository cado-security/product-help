---
title: Azure Kubernetes Service
hide_title: true
sidebar_position: 3
---

# How to Import Azure Kubernetes Service (AKS) Containers

The / Forensic Acquisition and Investigation platform allows you to collect key logs and forensic artifacts from containers running in Azure Kubernetes Service (AKS).

## Known Limitations

- / Forensic Acquisition and Investigation can acquire artifacts from containers built with **distroless containers** using / Forensic Acquisition and Investigation Host only. Containers with the `gcr.io/distroless` image tag will be hidden. For more details, see [Kubernetes Deployments](/cado/discovery-import/kubernetes#alternate-collection-by-using-cado-host-with-a-sidecar-container).
- / Forensic Acquisition and Investigation will hide pods running under the following namespaces, which are generally system-level namespaces running a distroless environment:
  - `kube-system`, `kube-public`, `kube-node-lease`
  - `gke-gmp-system`, `aks-command`
  - `gmp-system`, `calico-system`, `tigera-operator`

## Import Steps

1. Navigate to **Import > Cloud**.

   ![Cado Import Screen showing the AKS options](/img/import-cloud-focus.png)

2. Select the Azure credentials configured under **[Azure > Cross Subscription and Tenancy](/cado/deploy/cross/azure-cross-tenancy-subscriptions)**.

3. Choose the resource group associated with the AKS cluster.

4. Follow the steps to select your **Cluster**, **Pod**, and **Container**.

   ![Cado Import Screen showing the available AKS Clusters](/img/aks.png)

5. Confirm the details and click **Start Import**.

/ Forensic Acquisition and Investigation will automatically collect all key logs and forensic artifacts from the container for investigation. For most acquisitions, the import and processing will take just a few minutes to complete.

   ![Cado showing the confirmation screen of a successful AKS container capture](/img/eks3.png)

## Private Cluster Support
As of release v2.31.0, the / Forensic Acquisition and Investigation platform supports capturing data from **AKS Private Clusters**. This functionality is achieved using the [Azure Command Invoke APIs](https://learn.microsoft.com/en-us/azure/aks/command-invoke).

There are two key considerations with this method:
1. Capturing from a private cluster is significantly slower than from a public cluster.
2. The Azure API spins up a pod within the cluster to execute / Forensic Acquisition and Investigation Host. Ensure that your cluster has enough resources and nodes to schedule this command pod.

The newly created pod will automatically shut down and remove itself after 1 hour.

## Scoping Down the Role for Access to AKS

The / Forensic Acquisition and Investigation platform requires specific permissions to access and execute code in containers. You can use the following role definition to limit the permissions required for / Forensic Acquisition and Investigation to access and acquire data from AKS:

![Scoped down AKS role](/img/aks_role.png)

```json
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
