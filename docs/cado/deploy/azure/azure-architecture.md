---
title: Architecture in Azure
hide_title: true
sidebar_position: 5
---

# What is the Cado architecture in Azure?

Deployment of the Cado platform is performed within your Azure cloud environment via a Terraform Script. When the platform is deployed, it creates its own isolated network in which you can control who has access. From start to finish, you can be up and running in under 25 minutes.

![Azure Architecture](/img/azure-architecture.png)
This diagram is a simplified architecture, with options for alternate network access.
For a diagram of how cross-cloud imports from Azure into AWS work, please see below:

![Azure Imports](/img/azure-imports.png)


### Cross-Cloud Import Diagram

For a visual representation of how cross-cloud imports from AWS into Azure work, refer to the diagram below:

![Azure Cross](/img/azure-cross.png)
