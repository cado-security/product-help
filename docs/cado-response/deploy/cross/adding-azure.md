---
title: Adding Azure subscriptions to Azure/AWS/GCP
hide_title: true
sidebar_position: 3
---

# How to add Azure subscriptions to Azure/AWS/GCP
Cross-subscription Azure access is performed using an application registered into the target subscription. The following steps should be performed in each Azure subscription that you want to allow Cado to collect data from. Note: you will need permission to register applications and create IAM roles.

* Log into the target Azure subscription that you want Cado to collect evidence from
* Follow the Microsoft instructions to start registering a [new application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)
* Follow the Cado documentation to [configure the application](/cado-response/deploy/azure/azure-cross-tenancy-subscriptions#setting-up-an-app-registration-for-cross-tenancysubscription-acquisitions)
* Once the application is set up, add the details to the Cado platform by following the [documentation](/cado-response/deploy/azure/azure-cross-tenancy-subscriptions#registering-credentials-within-cado)
* In Cado, confirm that you can see resources for import by going into an investigation and selecting Import -> Cloud -> Choose your new Azure role -> confirm you can see resources available for import

For a diagram on how cross-cloud imports from AWS into Azure work, please see below:

![Azure Cross](/img/azure-cross.png)