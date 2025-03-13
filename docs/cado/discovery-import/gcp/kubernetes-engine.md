---
title: Google Cloud Kubernetes Engine
hide_title: true
sidebar_position: 5
---

# How to Import from Google Cloud Kubernetes Engine

The Cado platform allows you to collect key logs and forensic artifacts from Google Cloud Kubernetes Engine (GKE) containers.

:::info
For distroless containers, please use Cado Host to perform the acquisition.
:::

## Import Steps

1. **Go to Import > Cloud**  
   Navigate to the cloud import screen.

   ![Cado Import Screen showing the Kubernetes Engine options](/img/import-cloud-focus.png)

2. **Select Cluster, Pod, and Container**  
   Follow the prompts to choose your **Cluster**, **Pod**, and **Container**.

   ![Cado Import Screen showing the available Kubernetes Engine Clusters](/img/gke.png)

3. **Confirm and Start Import**  
   Review the details, then click **Start Import**.

Cado will automatically collect all relevant logs and forensic artifacts from the container to support your investigation. For most acquisitions, the import and processing will complete within a few minutes.

   ![Cado showing the confirmation screen of a successful Kubernetes Engine container capture](/img/eks3.png)

:::info
To import GKE containers, ensure the **`iam.serviceAccounts.implicitDelegation`** IAM permission is added to the Service Account.  
:::

# Data Flow Diagram

![Data Flow Diagram for GKE Acquisition](/img/gke_acquisition.png)
