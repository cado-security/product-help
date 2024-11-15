---
title: Microsoft 365 and Entra ID
hide_title: true
sidebar_position: 10
---

# How to Import Microsoft 365 and Entra ID Logs

## Introduction

The Cado platform supports acquiring and processing the following logs from Microsoft 365 and Entra ID:

- Microsoft 365 Unified Audit Log (UAL)
- Entra ID Audit logs
- Entra ID Sign-in logs

Note: This feature is currently in Beta, so you need to enable the 'SaaS Imports' feature in the **/settings/experiments** page.

Before acquiring these logs, a Microsoft Entra application and service principal must be set up and configured in the Azure portal. You can refer to the [Microsoft documentation](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal) for more details.

## Service Principal Setup

To support the acquisition of Microsoft 365 and Entra ID logs, follow these steps to set up a service principal:

### [Register an Application with Microsoft Entra ID and Create a Service Principal](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#register-an-application-with-microsoft-entra-id-and-create-a-service-principal)

- While setting up the service principal, using a redirect URL is optional.

### Entra ID Roles and Administrators

To pull logs from Exchange, follow these steps:

1. Open Entra ID.
2. Click on **Roles and Administrators**.

![Roles and administrators](/img/Entra-Roles.png)

3. Search for **Exchange Admin** and select the "Exchange administrator" role.

![Roles and administrators - Exchange Admin](/img/Entra-Roles-Exchange.png)

4. Click **Add Assignments**.
5. Type the name of the app registration assigned to the Exchange connector and add it.

![Roles and administrators - Exchange Admin - Assignments](/img/Entra-Roles-Exchange-Assignments.png)

6. Save the changes and try the connector again after a few minutes.

### [Assign a Role to the Application](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#assign-a-role-to-the-application)

- Assign the application to one of your subscriptions.
- Apply the **Security Reader** role to the application.

### [Sign In to the Application](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#sign-in-to-the-application)

### [Set Up Authentication](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#option-3-create-a-new-client-secret)

- Use **Option 3: Create a new client secret**.
- Avoid using "Key Vault" and securely store your secret keys elsewhere.
- If any changes are made to the service principal, new secret keys must be generated and used.

### [Grant Tenant-Wide Admin Consent to an Application](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal)

1. Go to the [Microsoft Entra admin center](https://entra.microsoft.com/#home).
2. Under **Applications > App Registrations**, find and select your newly created application.
3. Click **API Permissions** and select **Add a Permission**.
4. For Microsoft APIs, select **Microsoft Graph** and add the permission `AuditLog.Read.All`.

![Request API Permissions - MS Graph](/img/Entra-API-Permissions1.png)

5. For Office 365 logs, add the `ActivityFeed.Read` permission from **Office 365 Management APIs**.

![Request API Permissions - Office 365](/img/Entra-API-Permissions2.png)

6. For Office 365 Exchange Online, add the `full_access_as_app` and `Exchange.ManageAsApp` permissions.

![Request API Permissions - Office 365 Exchange Online](/img/Entra-API-Permissions3.png)

![Request API Permissions - Office 365 Exchange Online](/img/Entra-API-Permissions4.png)

7. Once the permissions are added, grant admin consent under **Entra Admin Center > Enterprise Applications**. Refer to [Grant Tenant-wide Admin Consent](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal#grant-tenant-wide-admin-consent-in-enterprise-apps-pane) for further instructions.

## Log Acquisition

Once the Microsoft Entra application and service principal are set up in the Azure portal, you can add the credentials to the Cado platform:

1. Navigate to **Settings > Accounts**
2. Select **Create an account**, then **Microsoft SaaS** from the set of providers and enter the following details:
   - **Name**: A friendly name, such as "MS SaaS."
   - **Tenant ID**: Found in the **Directory (tenant) ID** field in Azure app registration.
   - **Client ID**: Found in the **Application (client) ID** field in Azure app registration.
   - **Client Secret**: Found in the **Client credentials** field in Azure app registration.
   - **Organization**: Organization value ending in **.onmicrosoft.com**.

Leave the 'Run account check after adding account' checkbox selected, which will validate the account has the correct permissions after selecting 'Continue'. Navigate to the 'Accounts' table and the newly created Microsoft SaaS account should present. If configured correctly, you will see a green coloured health status.

Once the credentials are set, you can acquire Microsoft SaaS logs.

To import logs, use the import wizard within an investigation and select **SaaS**. You will see options for:
- Microsoft 365 Logs
- Microsoft Entra ID

![MS SaaS - Import](/img/Microsoft-SaaS-Import.png)

After selecting a SaaS application, choose the credentials entered on the integrations page.

![MS SaaS - Import - Select Creds](/img/Microsoft-SaaS-Import-Select-Creds.png)

You will be presented with options to refine the acquisition based on the SaaS application. For example, for Microsoft 365 UAL acquisition, you can filter by timeframe, user, IP, or workload.

![MS SaaS - Import - Config](/img/Microsoft-SaaS-Import-Config.png)

After reviewing your selections, proceed with the import. Once completed, the logs will be available in the main timeline for viewing and searching.

## Log Field Mapping

### Microsoft 365 Unified Audit Log (UAL)

| UAL Field   | Cado Field       | Cado Facet Name |
| ----------- | ---------------- | --------------- |
| ClientIP    | source_hostname   | Source Hostname |
| UserID      | user              | Users           |
| Workload    | sourcetype        | Datatype        |

### Entra ID Audit Logs

| Audit Log Field                       | Cado Field     | Cado Facet Name  |
| ------------------------------------- | -------------- | ---------------- |
| InitiatedBy.User.IPAddress            | source_hostname | Source Hostname  |
| InitiatedBy.User.UserPrincipalName    | user           | Users            |

### Entra ID Sign-in Logs

| Sign-in Log Field                     | Cado Field     | Cado Facet Name  |
| ------------------------------------- | -------------- | ---------------- |
| IPAddress                             | source_hostname | Source Hostname  |
| UserPrincipalName                     | user           | Users            |
| ResourceDisplayName                   | sourcetype     | Datatype         |

For example, you can filter data by the "AzureActiveDirectory" workload by selecting it in the **Datatype** facet.
