---
title: Azure Cross Account Creation
hide_title: true
sidebar_position: 1
---

# Azure Cross Account Creation

### Setting up a cross account Azure app registration
To leverage cross Azure imports, you need to create an **[Azure app registration](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)** in the Azure tenancy you want to acquire resources.  Follow the contents of this guide, and be sure to select the option for *Accounts in any organizational directory (Any Azure AD directory - Multitenant)*. ![Azure App Registration](/img/azure-registering-app.png)  You can then generate a client secret associated with this app registration using **[this guide](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-credentials)**, be sure to keep a note of it as you will need it to register the app with Cado Response.

:::tip
If you are only importing from a seperate subscription within the same tenancy as your Cado Response deployment, you can use **Accounts in this organizational directory only** as your app registration account type.
:::

By default, when you create an app registration Azure will also create an enterprise application alongside it with the same name.  You have to navigate to this, and under the **properties** sidebar, allow the option for *Enabled for users to sign-in*.  Without enabling this option, cross Azure acquisitions will not work.
![Azure Enterprise App Registration Permission](/img/azure-enterprise-app-permission.png)

#### Required role-asignments
Once you have created your app registration, you will need to give it the required Azure role-assignments to allow it to access your Azure resources.

1. Go to the Azure subscription you want to acquire from, this could be within the same, or a different Azure tenancy.
2. Select your subscription and go to the IAM permissions for it.
3. Add the following role-assignments for your app registration:
    - Storage Account Contributor.
    - Disk Snapshot Contributor.
    - Virtual Machine Contributor.
    - Azure Kubernetes Service Cluster Admin Role.

With these credentials in place, you are able to register the app with Cado Response.

### Registering credentials within Cado Response
Once you have created the app registration, you will be able to register the credentials within Cado Response using the following steps:

1. Navigate to the to the settings page, and choose the **clouds** option.
2. Select the **Azure** tab, and add a new credential. ![Azure Credentials Page](/img/azure-creds-page.png)
3. Using the information generated during the the app registration setup, fill-in the required fields with the appropriate information and save said credentials. ![Azure Credentials Insertion Page](/img/azure-insert-custom-creds.png)  Some of the information you will need is on the Azure app registration page, shown below: ![Azure App Registration Page](/img/azure-app-registration-info.png)

The credentials are now ready to use within Cado Response.  Go to an Azure import and select the credential you wish to use from the dropdown in the top left of the import page.  You are now able to import as normal, but from resources managed by other tenants and or subscriptions.

:::tip
If you encounter an error when attempting to acquire a resource across Azure accounts or subscriptions, verify that a typo has not been made during addition, or if the wrong information has been entered in the wrong field.
:::