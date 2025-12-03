---
title: Google Compute Engine
hide_title: true
sidebar_position: 1
---

# How to Import a Google Compute Engine Instance

The / Forensic Acquisition and Investigation platform supports the acquisition of Google Cloud Platform (GCP) Compute Engine instances. Follow these steps to import a GCP Compute instance into / Forensic Acquisition and Investigation:

1. **Select the GCP Project and Bucket**: Choose the GCP project and the storage bucket where the disk image will be uploaded before importing it into / Forensic Acquisition and Investigation.

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

### Using the Acquisition Service Account for acquisition

With this option selected during import, the Service Account from the Forensic Acquisition and Investigation project will be used for the image export instead of the Compute Engine default service account. This can be helpful for more restricted GCP environments.

Under the hood, the following parameters will be passed to CloudBuild via [GCE Export](https://github.com/GoogleCloudPlatform/compute-image-tools/tree/master/cli_tools/gce_export)):
- Arguments: "-compute_service_account={acquisition_service_account}"
- Service Account parameter: "projects/{self.gcp_project_id}/serviceAccounts/{acquisitionservice_account_email}

For more information on the permissions required for this set-up, please see:
- https://docs.cloud.google.com/iam/docs/service-account-impersonation#enabling-cross-project
- https://blog.salrashid.dev/articles/2021/cross_project_svc_account/
- https://docs.cloud.google.com/compute/docs/import/requirements-export-import-images#required-roles-cloud-build-sa

# Data Flow Diagram

![Compute engine](/img/compute_engine_gcp.png)
