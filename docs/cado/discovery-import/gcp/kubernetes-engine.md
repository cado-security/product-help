---
title: Google Cloud Kubernetes Engine
hide_title: true
sidebar_position: 5
---

# How to Import from Google Cloud Kubernetes Engine

The / Forensic Acquisition and Investigation platform allows you to collect key logs and forensic artifacts from Google Cloud Kubernetes Engine (GKE) containers.

## Known Limitations

- / Forensic Acquisition and Investigation can acquire artifacts from containers built with **distroless containers** and **private clusters** using / Forensic Acquisition and Investigation Host only. Containers with the `gcr.io/distroless` image tag will be hidden. For more details, see [Kubernetes Deployments](/cado/discovery-import/kubernetes#alternate-collection-by-using-cado-host-with-a-sidecar-container).
- / Forensic Acquisition and Investigation will hide pods running under the following namespaces, which are generally system-level namespaces running a distroless environment:
  - `kube-system`, `kube-public`, `kube-node-lease`
  - `gke-gmp-system`, `aks-command`
  - `gmp-system`, `calico-system`, `tigera-operator`

## Import Steps

1. **Go to Import > Cloud**  
   Navigate to the cloud import screen.

   ![Cado Import Screen showing the Kubernetes Engine options](/img/import-cloud-focus.png)

2. **Select Cluster, Pod, and Container**  
   Follow the prompts to choose your **Cluster**, **Pod**, and **Container**.

   ![Cado Import Screen showing the available Kubernetes Engine Clusters](/img/gke.png)

3. **Confirm and Start Import**  
   Review the details, then click **Start Import**.

/ Forensic Acquisition and Investigation will automatically collect all relevant logs and forensic artifacts from the container to support your investigation. For most acquisitions, the import and processing will complete within a few minutes.

   ![Cado showing the confirmation screen of a successful Kubernetes Engine container capture](/img/eks3.png)

:::info
To import GKE containers, ensure the **`iam.serviceAccounts.implicitDelegation`** IAM permission is added to the Service Account.  
:::

## Data Flow Diagram

![Data Flow Diagram for GKE Acquisition](/img/gke_acquisition.png)
