---
title: Workers
hide_title: true
sidebar_position: 11
---

# Workers

The initial deployment runs everything on a single Compute instance. In order to limit load on this instance and ensure the platform remains stable we limit types of imports that can be run to those based around Cado Host captures and small artefacts stored in GCS. We also limit how many pieces of evidence can be processed at once.

To enable processing data from all sources or to process many items of evidence at once, Cado must be configured to allow it to run imports on additional Compute instances.

### Prerequisites

   - vCPU capacity in your region: we recommend requesting 128
   - The IAM instance role used in the initial deployment, and permission to edit it
   - The firewall you used in the initial deployment, and permission to edit it

### Steps

1. Add the necessary permissions by adding the following to your IAM role:

```json
// Worker Permissions
"compute.disks.create"
"compute.instances.create"
"compute.instances.setMetadata"
"compute.instances.setServiceAccount"
"compute.addresses.use"
"compute.instances.addAccessConfig"
"compute.instances.delete"
"compute.instances.setLabels"
"compute.subnetworks.use"
"compute.networks.get"
"compute.networks.list"
"compute.instances.setTags"
"compute.instances.get"

// Adjusting Worker Settings
"compute.machineTypes.get"
"compute.machineTypes.list"
"compute.regions.get"
```
2. Add the following inbound rules to your firewall

| Port  | Protocol           | Description     |
|-------|------------------|-----------------|
| 5432  | TCP | Data Storage    |
| 9200  | TCP | Data Storage    |
| 6379  | TCP | Data Storage    |
| 24224 | TCP | Log Handling    |


3. Enable in the UI: **Settings** > **Advanced** > **Deployed Workers** > Enable Deployed Workers
4. Got to **Platform** > **Run a Platform Check**

