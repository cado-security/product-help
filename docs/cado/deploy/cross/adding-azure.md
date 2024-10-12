---
title: Adding Azure subscriptions to Azure/AWS/GCP
hide_title: true
sidebar_position: 6
---

# How to add Azure Subscriptions to Azure, AWS, or GCP

To allow Cado to access data from an Azure subscription, you must register an application within the target subscription. Follow the steps below to set up cross-subscription access. Ensure you have permission to register applications and create IAM roles.

### Steps to Add an Azure Subscription

1. **Log in to the Target Azure Subscription**  
   Start by logging into the Azure subscription where you want Cado to collect evidence.

2. **Register a New Application**  
   Follow [Microsoft's instructions](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) to begin the process of registering a new application in the Azure subscription.

3. **Configure the Application for Cado**  
   Once the application is registered, configure it for Cado by following the [Cado documentation on setting up cross-tenancy/subscription acquisitions](/cado/deploy/azure/azure-cross-tenancy-subscriptions#setting-up-an-app-registration-for-cross-tenancysubscription-acquisitions).

4. **Add Application Details to Cado**  
   After configuring the application, add the required details to the Cado platform by following the instructions in the [Cado documentation](/cado/deploy/azure/azure-cross-tenancy-subscriptions#registering-credentials-within-cado).

5. **Verify Access in Cado**  
   To ensure that Cado can access resources in the Azure subscription:
   - Open an investigation in Cado.
   - Select **Import** > **Cloud**.
   - Choose the Azure role you created.
   - Confirm that the resources available for import are visible.

### Cross-Cloud Import Diagram

For a visual representation of how cross-cloud imports from AWS into Azure work, refer to the diagram below:

![Azure Cross](/img/azure-cross.png)
