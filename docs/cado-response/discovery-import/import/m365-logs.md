---
title: M365 Unified Audit Logs
hide_title: true
sidebar_position: 10
---

# M365 Unified Audit Logs

Cado has the capability to import, process and analyze M365 Unified Audit Logs (UAL). This can aid in the investigation of Business Email Compromise and insider threats

## Setting up the View-only Audit logs role
To acquire the M365 Unified Audit Log (UAL), the ‘View-only Audit Logs’ role you need to grant the ‘View-only Audit Logs’ to the Microsoft account of the user who is performing the acquisition. 

You will need to grant this role in both the Exchange Admin Centre and Microsoft Purview.

### Exchange Admin Centre
1. Navigate to the [Exchange Admin Centre](https://admin.exchange.microsoft.com/) and login.
2. In the left side panel under ‘Roles’, click on ‘Admin roles’.
3. You will be presented with a list of roles and their descriptions. At the top of the page click on ‘Add role group’.
4. Give your role a name and description, then click next.
5. On the permissions page, search for ‘View-Only Audit Logs’ and tick the box, then click next.
6. On the ‘Admins’ page, add the users who require this role, then click next. On the next page, review your role group and finish the setup. 

### Microsoft Purview
1. Navigate to [Microsoft Purview](https://compliance.microsoft.com/homepage) and login.
2. In the left side panel under ‘Roles & scopes’, click on ‘Permissions’.
3. On the ‘Permissions’ page under ‘Microsoft Purview Solutions’, click on ‘Roles’.
4. On the Role Groups page click on ‘Create Role Group’.
5. Give your role a name and description, then click next.
6. On the roles page, click on ‘Choose Roles’ and search for ‘View-Only Audit Logs’. Tick the box for this role, click select then next.
7. On the ‘Members’ page, add the users who require this role. You can do this by selecting individual users or a group, click select then next. 
8. On the ‘Review and finish’ page, review your role group, then click ‘Create’ to finish the setup. 

## UAL acquisition

:::tip
The feature is currently in Beta. To enable, navigate to *Settings - Experiments* and enable the ‘SaaS Imports’ button.
:::

Once you have granted the role to the user’s Microsoft account, you can acquire the the UAL through the Cado platform 

To do this, click the *Import* button from within an investigation. Select ‘SaaS’ > ‘Microsoft 365 Logs’ > ‘Unified Audit Log’.

![Import M365 UAL Logs](/img/import-m365-ual-1.png)

At step 3 in the import process, you can refine the acquisition by timeframe, user, IP, or workload. For example:
* From date to date
* Specific to the ‘Exchange’ workload
* Specific to the user ‘user1@cadosecurity.com’

![Refine M365 Log Import Filter](/img/import-m365-ual-2.png)

On the last page of the import wizard, you will see instructions to navigate to the pipelines page, where you can authenticate to M365 using your Microsoft account using the access code provided.

![Instructions to finish import](/img/import-m365-ual-3.png)
![Pipeline link](/img/import-m365-ual-4.png)

Finally, when the acquisition and processing is completed, the logs will be available to view and search in the main timeline page. To help users with their search and analysis, Cado maps the following UAL fields.

### Mapped fields

| UAL Field | Cado Field | CADO Facet Name |
| --------- | ---------- | ----- |
| ClientIP | source_hostname | Source Hostname |
| UserID | user | Users |
| Workload | sourcetype | Datatype |

For example, the user is able to filter the dataset by the ‘AzureActiveDirectory’ workload by selecting this value in the ‘Datatype’ facet.



