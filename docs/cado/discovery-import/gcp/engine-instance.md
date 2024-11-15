---
title: Google Compute Engine
hide_title: true
sidebar_position: 1
---

# How to Import a Google Compute Engine Instance

The Cado platform supports the acquisition of Google Cloud Platform (GCP) Compute Engine instances. Follow these steps to import a GCP Compute instance into Cado:

1. **Select the GCP Project and Bucket**: Choose the GCP project and the storage bucket where the disk image will be uploaded before importing it into Cado.

2. **Select the Compute Instance**: Choose the specific GCP Compute instance that you need to import.

3. **Review the Details**: Verify the details of the instance and click **Start Import** to begin the acquisition process.

:::info
For this feature to work, the GCP project must have the **default VPC** enabled. GCP Cloud Build requires workers that use the default VPC to help export the acquired disk.
:::

![GCP Compute Import](/img/gcp-compute.png)