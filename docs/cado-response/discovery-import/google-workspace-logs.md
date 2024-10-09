---
title: Google Workspace logs
hide_title: true
sidebar_position: 10
---

# Google Workspace Logs

### Introduction

The Cado platform supports acquisition and processing of Google Workspace logs. Activity logs can be captured from the various Google Workspace applications listed [here](https://developers.google.com/admin-sdk/reports/reference/rest/v1/activities).

Note: the feature is currently in Beta, so the ‘SaaS Imports’ feature needs to be enabled in the /settings/experiments page.

Before these logs can be acquired using the Cado platform, the following steps need to be taken:

1. Ensure Workspace API access for the Google Cloud project is enabled (admin SDK API access)
2. Enable internal OAuth consent screen (which will enable us to auth with a service account)
3. Create service account (in Google Cloud). Download the JSON file of the access key that is created against the service account
4. Take note of the email of a Google Workspace admin account for the Impersonation Email, which is entered into the Cado platform
5. Provide permission for the service account to access the Workspace API (domain wide delegation is required, however access can be limited to the audit logs and only the ability to read, https://www.googleapis.com/auth/admin.reports.audit.readonly)

### Log Acquisition

Once the above steps have been completed, the service account credentials need to be added to the Cado platform. To do this, navigate to ‘Settings’ > ‘Integrations’ > ‘Google Workspace’ (/settings/integrations/google-workspace) and select ‘Add Credentials’. Enter the following details:

* Name (give this any friendly name, for example ‘Google Workspace’)
* Impersonation Email 
* Service Account Credentials

![Google Workspace - Add Creds](/img/gws-add-creds.png)

We are now ready to acquire Google Workspace logs. Use the import wizard from within an investigation and select ‘SaaS’, then ‘Google Workspace’.

![Google Workspace - Import](/img/gws-import.png)

Next, select the credentials entered in the integrations page.

![Google Workspace - Select credentials](/img/gws-import-select-creds.png)

The user will be presented with various options to refine the acquisition. For example, the user is able to refine by timeframe, application and user.

![Google Workspace - Import Configuration](/img/gws-import-config.png)

Finally, the user is requested to review their selections and proceed with the import.

When the acquisition and processing is completed, the logs will be available to view and search in the main timeline page. To help users with their search and analysis, we have mapped the following fields to Cado fields:

| Google Workspace field | Cado Field | Cado Facet Name |
| ---------------------- | ---------- | ----- |
| ipAddress | source_hostname | Source Hostname |
| actor.email | user | Users |
| id.applicationName | sourcetype | Datatype |

For example, the user is able to filter the dataset by the ‘Mobile' application by selecting this value in the ‘Datatype’ facet.

![Google Workspace - Timeline Filtering](/img/gws-timeline.png)