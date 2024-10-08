---
title: Microsoft SaaS Logs
hide_title: true
sidebar_position: 10
---

# Microsoft 365 and Entra ID Logs

### Introduction

The Cado platform supports acquisition and processing of the following Microsoft 365 and Entra ID logs:

* Microsoft 365 Unified Audit Log (UAL)
* Entra ID Audit logs
* Entra ID Sign-in logs

Note: the feature is currently in Beta, so the ‘SaaS Imports’ feature needs to be enabled in the /settings/experiments page.

Before these logs can be acquired using the Cado platform, a Microsoft Entra application and service principal needs to be set-up and configured in the Azure portal, which is explained in the following section. For more information, please refer to [Microsoft documentation](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal).

### Service Principal Set-up

To support the acquisition of Microsoft 365 and Entra ID logs, a service principal needs to be set-up/configured. Instructions can be found here: [Create a Microsoft Entra application and service principal that can access resources](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#set-up-authentication).
 
For each section linked below please follow the Microsoft instructions. We have added additional configuration information for each section to help with the setup. 

#### [Register an application with Microsoft Entra ID and create a service principal](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#register-an-application-with-microsoft-entra-id-and-create-a-service-principal)

* In our testing, we did not use a redirect URL while setting up the service principal. This is optional.

#### Entra ID Roles and administrators

These steps are required to pull logs from Exchange:
1. Open Entra ID.
2. Click on the Roles and administrators

![Roles and administrators](/img/Entra-Roles.png)

3. In the search bar, type Exchange admin. Now click on the “Exchange administrator” role.

![Roles and administrators - Exchange Admin](/img/Entra-Roles-Exchange.png)

4. Choose the Add Assignments button.
5. In the window that appears, type in the name of the app registration that is assigned to the Exchange connector.  When there are multiple connectors, add the name of each app registration that is assigned to each Exchange connector.  

![Roles and administrators - Exchange Admin - Assignments](/img/Entra-Roles-Exchange-Assignments.png)

6.  Save the change.
7. Allow this to take effect and try the connector again within a few minutes.

#### [Assign a role to the application](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#assign-a-role-to-the-application)

* In our testing, we assigned the application to one of our subscriptions 
* We applied the “Security Reader” role assignment to our application. 

#### [Sign in to the application](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#sign-in-to-the-application)

#### [Set up Authentication](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#option-3-create-a-new-client-secret)
* In our testing, we used option 3 “Create a new client secret”
* We did not use “key vault”. We stored our secret keys securely elsewhere.
* Please note: If any changes are made to the service principal a new set of secrets need to be created/used

#### [Grant tenant-wide admin consent to an application](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal)
1. Navigate to to the [Microsoft Entra admin centre](https://entra.microsoft.com/#home)
2. In the left hand panel select “Applications” then “App registrations”
3. Under “All applications” search for your newly created application (Service principal) and click on it.
4. Click “API permissions” from the sidebar, then click “Add a permission”
5. On the pop up screen under “Microsoft APIs” select “Microsoft Graph”, then select “Application permissions”. Select and add the Audit log permission “AuditLog.Read.All”. 

![Request API Permissions - MS Graph](/img/Entra-API-Permissions1.png)

6. To add permissions for Office 365  Click “Add a permission”
under “Microsoft APIs”, select “Office 365 Management APIs”, then select “Application permissions”. Select and add the ”ActivityFeed.Read” permission.

![Request API Permissions - Office 365](/img/Entra-API-Permissions2.png)

7. To add permissions for Office 365 Exchange Online. Click “Add a permission”
under “APIs my organization uses” search for “Office 365 Exchange Online”, then select “Application permissions”. Select and add the following permissions: ”full_access_as_app” & “Exchange.ManageAsApp”.

![Request API Permissions - Office 365 Exchange Online](/img/Entra-API-Permissions3.png)

![Request API Permissions - Office 365 Exchange Online](/img/Entra-API-Permissions4.png)

8. How your permissions should look once added: 

![Request API Permissions - Configured Permissions](/img/Entra-API-Configured-Permissions.png)

9. Once permissions are added you will need to “Grant Admin Consent”. This is done under Entra Admin Center > Enterprise Applications. For further instructions see: [Grant Tenant-wide Admin Consent](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal#grant-tenant-wide-admin-consent-in-enterprise-apps-pane)

### Log Acquisition

Once the Microsoft Entra application and service principal has been set-up and configured in the Azure portal, these credentials need to be added to the Cado platform. To do this, navigate to ‘Settings’ > ‘Integrations’ > ‘Microsoft SaaS’ (/settings/integrations/microsoft) and select ‘Add Credential’. Enter the following details:

* Name (give this any friendly name, for example ‘MS SaaS’)
* Tenant ID (this can be found in the ‘Directory (tenant) ID’ field in Azure app registration)
* Client ID (this can be found in the ‘Application (client) ID’ field in Azure app registration)
* Client Secret (this can be found in the ‘Client credentials’ field in Azure app registration)
* Organization (organization value ending in .onmicrosoft.com)

![MS SaaS - Add Creds](/img/Microsoft-SaaS-Add-Creds.png)

We are now ready to acquire Microsoft 365 and Entra ID logs. Use the import wizard from within an investigation and select ‘SaaS’. The user will be presented with two options:

* Microsoft 365 Logs
* Microsoft Entra ID

![MS SaaS - Import](/img/Microsoft-SaaS-Import.png)

Once a SaaS application is selected, the user will be required to select the credentials entered in the integrations page.

![MS SaaS - Import - Select Creds](/img/Microsoft-SaaS-Import-Select-Creds.png)

Depending on the SaaS applications selected, the user will be presented with various options to refine the acquisition. For example, for M365 UAL acquisition, the user is able to refine by timeframe, user, IP, or workload. 

![MS SaaS - Import - Config](/img/Microsoft-SaaS-Import-Config.png)

Finally, the user is requested to review their selections and proceed with the import.

When the acquisition and processing is completed, the logs will be available to view and search in the main timeline page. To help users with their search and analysis, we have mapped the following fields to Cado fields:

#### M365 UAL

| UAL Field | Cado Field | Cado Facet Name |
| --------- | ---------- | ----- |
| ClientIP | source_hostname | Source Hostname |
| UserID | user | Users |
| Workload | sourcetype | Datatype |

#### Entra ID Audit Logs

| Audit log field | Cado Field | Cado Facet Name |
| --------------- | ---------- | ----- |
| InitiatedBy.User.IPAddress | source_hostname | Source Hostname |
| InitiatedBy.User.UserPrincipalName | user | Users |

#### Entra ID Sign-in Logs

| Sign-in log field | Cado Field | Cado Facet Name |
| ----------------- | ---------- | ----- |
| IPAddress | source_hostname | Source Hostname |
| UserPrincipalName | user | Users |
| ResourceDisplayName | sourcetype | Datatype |

For example, the user is able to filter the dataset by the ‘AzureActiveDirectory’ workload by selecting this value in the ‘Datatype’ facet.