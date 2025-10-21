---
title: Adding Azure subscriptions to Azure/AWS/GCP/SaaS
hide_title: true
sidebar_position: 7
---

# How to add Azure Subscriptions to Azure, AWS, SaaS or GCP

To allow / Forensic Acquisition and Investigation to access data from an Azure subscription, you must register an application within the target subscription. Follow the steps below to set up cross-subscription access. Ensure you have permission to register applications and create IAM roles.

### Steps to Add an Azure Subscription

1. **Log in to the Target Azure Subscription**  
   Start by logging into the Azure subscription where you want / Forensic Acquisition and Investigation to collect evidence.

2. **Register a New Application**  
   Follow [Microsoft's instructions](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) to begin the process of registering a new application in the Azure subscription.

3. **Configure the Application for / Forensic Acquisition and Investigation**  
   Once the application is registered, configure it for / Forensic Acquisition and Investigation by following the [Cado documentation on setting up cross-tenancy/subscription acquisitions](/cado/deploy/cross/azure-cross-tenancy-subscriptions#setting-up-an-app-registration-for-cross-tenancysubscription-acquisitions).

4. **Add Application Details to / Forensic Acquisition and Investigation**  
   After configuring the application, add the required details to the platform by following the instructions in the [Cado documentation](/cado/deploy/cross/azure-cross-tenancy-subscriptions#registering-credentials-within-cado).

5. **Verify Access in / Forensic Acquisition and Investigation**  
   To ensure that / Forensic Acquisition and Investigation can access resources in the Azure subscription:
   - Open an investigation in / Forensic Acquisition and Investigation platform.
   - Select **Import** > **Cloud**.
   - Choose the Azure role you created.
   - Confirm that the resources available for import are visible.
