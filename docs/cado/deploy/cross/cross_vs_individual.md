---
title: Cross-cloud vs individual deployments
hide_title: true
sidebar_position: 13
---


# What are the considerations for Cross-Cloud vs Individual deployments

/ Forensic Acquisition and Investigation offers flexibility when deploying across multiple cloud environments.

There are two primary deployment models available:

1. **Centralized Deployment in a Single Cloud (Cross-Cloud Access)**: Deploy / Forensic Acquisition and Investigation in one cloud environment (AWS, Azure, or GCP) and configure cross-cloud access to communicate with other cloud environments.
2. **Individual Deployments in Each Cloud**: Deploy separate instances of / Forensic Acquisition and Investigation in AWS, Azure, and GCP.

This document outlines key considerations to help you choose between these two deployment strategies.

## Key Considerations

### Infrastructure Costs
While deploying / Forensic Acquisition and Investigation in multiple cloud environments incurs additional infrastructure costs, these are relatively small. For more information on pricing, please refer to our [pricing documentation page](/cado/manage/cost-management). 

### Network Set-Up Complexity
The primary consideration when deciding between cross-cloud and individual deployments is the complexity of your network set-up. If you have a simple network configuration that enables seamless communication across all your cloud environments from a single location, a cross-cloud deployment is likely the best option.

However, if your network is more complex, with strict security boundaries or multiple network zones, individual deployments in each cloud might be more appropriate to avoid complications in setting up cross-cloud access.

### Proxy Support
We support various proxy configurations to facilitate communication with your cloud environments. Please see the [proxy documentation page](/cado/deploy/networking-proxy) for more details. However, if your network setup is highly complex or requires sophisticated routing, individual deployments may be more practical, as there are limits to the proxy configurations we support.

### Proof of Value or Trial Deployments
If you are in a proof of value or trial phase, we recommend setting up a single deployment in the cloud environment you are most familiar with. This allows for quicker and easier initial setup. Once you decide to proceed with a full deployment of / Forensic Acquisition and Investigation, you can then expand to additional deployments in other cloud environments if necessary.

### Data Transfer Costs and Speeds
There are some speed and cost considerations when copying data between cloud environments, such as egress fees and data transfer speeds. However, these generally are not significant concerns. For more details, consult your cloud provider's documentation regarding egress fees.

### Data Residency Requirements
If you have data residency requirements mandating that certain data remain in a specific cloud environment or geographical location, you should set up individual deployments in each cloud environment to ensure compliance.

### Maintenance and Management
Maintaining and updating individual / Forensic Acquisition and Investigation deployments across multiple clouds can be more time-consuming and resource-intensive compared to managing a single centralized deployment. Additionally, users will need to log into separate environments for each cloud.

### Licensing
For specific licensing information, please refer to your contract or consult with your sales representative (sales@cadosecurity.com) to confirm the requirements based on your use case.

