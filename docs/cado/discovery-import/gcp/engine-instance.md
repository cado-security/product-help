---
title: Google Compute Engine
hide_title: true
sidebar_position: 1
---

# How to Import a Google Compute Engine Instance

The Cado platform supports the acquisition of Google Cloud Platform (GCP) Compute Engine instances. Follow these steps to import a GCP Compute instance into Cado:

1. **Select the GCP Project and Bucket**: Choose the GCP project and the storage bucket where the disk image will be uploaded before importing it into Cado.

2. **Select the Compute Instance**: Choose the specific GCP Compute instance that you need to import.

3. **Select your acquisition type**: Choose between Acquisition or Scan Only

![Action](/img/scanonly.png)

### Capture Options

### Acquisition
Acquisition will aquire the full instance

### Scan Only
Scan only is for a view of any threats and vulnerabilities that exists on the resource. This skips some processing tasks speeding up the acquisition.


4. **Review the Details**: Verify the details of the instance and click **Start Import** to begin the acquisition process.

:::info
For this feature to work, the GCP project must have the **default VPC** enabled. GCP Cloud Build requires workers that use the default VPC to help export the acquired disk.
:::

![GCP Compute Import](/img/gcp-compute.png)


### Data Flow Diagram

![Compute engine](/img/compute_engine_gcp.png)

### Maintaining Operation

Under the hood, this feature uses GCP's built-in functionality for [exporting custom images](https://cloud.google.com/compute/docs/images/export-image) via Cloud Build.

This will create compute images in storage which are not automatically deleted, please see GCP's notes on [general limitations](https://cloud.google.com/compute/docs/images/export-image):

*"A Cloud Storage bucket called {PROJECT}-daisy-bkt-{REGION} is created for ephemeral resources created during the export process in the same region or multi-region as the target bucket. To manage the lifecycle of these resources, see [Object lifecycle management](https://cloud.google.com/storage/docs/lifecycle)."*

