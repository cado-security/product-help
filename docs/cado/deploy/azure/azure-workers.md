---
title: Workers
hide_title: true
sidebar_position: 7
---

# Workers 

The initial deployment runs everything on a single Compute instance. In order to limit load on this instance and ensure the platform remains stable we limit types of imports that can be run to those based around Cado Host captures. We also limit how many pieces of evidence can be processed at once.

To enable processing data from all sources or to process many items of evidence at once, Cado must be configured to allow it to run imports on additional Compute instances.

### Prerequisites

A “User Assigned Managed Identity” named “cado-identity”, with the Role assignment “Contributor” scoped to your resource group attached to your Cado instance

### Enable Deployed Workers

1. Navigate to **Settings** > **Advanced** (Admin required)
2. Enable **Deployed Workers** (This is needed for full acquisition)

![EBS Workers](/img/ebs-workers.png)
