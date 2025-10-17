---
title: Workers
hide_title: true
sidebar_position: 7
---

# Workers 

The initial minimal deployment runs everything on a single Compute instance. In order to limit load on this instance and ensure the platform remains stable we limit types of imports that can be run to those based around / Forensic Acquisition and Investigation Host captures. We also limit how many pieces of evidence can be processed at once.

To enable processing data from all sources or to process many items of evidence at once, / Forensic Acquisition and Investigation must be configured to allow it to run imports on additional Compute instances.

### Prerequisites

- A “User Assigned Managed Identity” named “cado-identity” attached to the VM
- The “Contributor” Role Assignment scoped to your resource group attached to the identity


### Steps

1. Enable in the UI: **Settings** > **Advanced** > **Deployed Workers** > Enable Deployed Workers
2. Got to **Platform** > **Run a Platform Check**

![EBS Workers](/img/ebs-workers.png)
