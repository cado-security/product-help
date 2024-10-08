---
title: Azure Overview
hide_title: true
sidebar_position: 1
---

## Azure Deployment Overview

:::note
**Intended Audience and Operating Environment Requirements:**
*This information is written for proficient Azure cloud administrators who are familiar with Azure technology and cloud operations. This manual assumes familiarity with MS Azure, including: Subscriptions,  Resource Groups, Virtual Machines, Storage Accounts, and Storage Containers.*
:::

Deployment of the Cado platform is performed within your Azure cloud environment via a Terraform Script. When the platform is deployed, it creates its own isolated network in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes.

![Azure Architecture](/img/azure-architecture.png)
This diagram is a simplified architecture, with options for alternate network access.
For a diagram of how cross-cloud imports from Azure into AWS work, please see our [Knowledge Base](https://cadosecurity.zendesk.com/hc/en-gb/articles/23259971240465-How-do-cross-cloud-imports-from-Azure-into-AWS-work).


## Azure Terraform Script


### How to Add Tags to Resources
Please see the [guide on Deployment Options](../intro.md#tagging-cado-response-resources)
