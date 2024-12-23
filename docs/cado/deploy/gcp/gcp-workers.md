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
   - Ability to update IAM role
   - Ability to update Firewall

### Steps

1. Add the necessary permissions:

```json
 // Worker Permissions
   "compute.disks.create",
   "compute.instances.create",
   "compute.instances.setMetadata",
   "compute.instances.setServiceAccount",
   "compute.addresses.use",
   "compute.instances.addAccessConfig",
   "compute.instances.delete",
   "compute.instances.setLabels",
   "compute.subnetworks.use",
   "compute.networks.get",
   "compute.networks.list",
   "compute.instances.setTags",
   "compute.instances.get",


// Adjusting Settings
   "compute.machineTypes.get",
   "compute.machineTypes.list",
   "compute.regions.get",
```
2. Add the following inbound firewall rules

| Type         | Port  | Source           | Description     |
|--------------|-------|------------------|-----------------|
| Custom TCP   | 5432  | Your Cado firewall | Data Storage    |
| Custom TCP   | 9200  | Your Cado firewall | Data Storage    |
| Custom TCP   | 6379  | Your Cado firewall | Data Storage    |
| Custom TCP   | 24224 | Your Cado firewall | Log Handling    |


3. Enable in the UI: **Settings** > **Advanced** > **Processing** > Turn on Workers

