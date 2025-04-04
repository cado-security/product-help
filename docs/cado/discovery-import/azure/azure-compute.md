---
title: Azure Compute
hide_title: true
sidebar_position: 1
---

# How to Import Azure Compute Instances

The Cado platform allows you to acquire Azure Compute instances for investigation. Follow these steps:

1. **Select an Azure Subscription**  
   This will populate a list of available compute instances associated with that subscription.

2. **Choose the Instance**  
   Select the instance you want to import, review the details, and confirm the selection.

3. **Select the Action Type**  
  Choose between Full Acqusition, Triaged Acquisition and Scan Only.

4. **Start the Import**  
   Click on **Start Import** to begin the acquisition process.

![Azure Compute Import](/img/azure-compute.png)

Once the import is initiated, the platform will automatically collect and process the necessary data for further analysis.

## Capture Options

#### Full Aquisition
- Acquisition will aquire the full instance

#### Triaged Aquisition
- Triaged acquisition will leverage Cado Host and Azure's Run Command action for a faster, but less complete, collection

#### Scan Only
- Scan only is for a view of any threats and vulnerabilities that exists on the resource. This skips some processing tasks speeding up the acquisition.

![Action Type](/img/captureoptions.png)
