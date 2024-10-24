---
title: Google Workspace logs
hide_title: true
sidebar_position: 10
---

# How to Import Google Workspace Logs

### Introduction

The Cado platform supports the acquisition and processing of Google Workspace logs. Activity logs from various Google Workspace applications can be captured, as listed [here](https://developers.google.com/admin-sdk/reports/reference/rest/v1/activities).

Note: This feature is currently in Beta. To use it, enable the "SaaS Imports" feature on the **/settings/experiments** page.

Before importing Google Workspace logs into Cado, follow these steps:

1. Ensure that **Workspace API access** for your Google Cloud project is enabled (Admin SDK API access).
2. Enable the **Internal OAuth Consent Screen** to allow authentication with a service account.
3. **Create a service account** in Google Cloud, and download the JSON file of the access key created for the service account.
4. Note the email address of a **Google Workspace admin account** for the Impersonation Email field, which will be entered into the Cado platform.
5. Grant the service account permission to access the Workspace API via **domain-wide delegation**, with read-only access to audit logs:  
   `https://www.googleapis.com/auth/admin.reports.audit.readonly`.

### Log Acquisition

After completing the setup, you can add the service account credentials to the Cado platform by navigating to **Settings > Integrations > Google Workspace** (/settings/integrations/google-workspace) and selecting **Add Credentials**. Provide the following details:

- **Name**: A friendly name for your credentials, such as “Google Workspace.”
- **Impersonation Email**: The Google Workspace admin email.
- **Service Account Credentials**: Upload the JSON file for the service account.

![Google Workspace - Add Creds](/img/gws-add-creds.png)

Once the credentials are set, you can acquire Google Workspace logs. In an investigation, use the import wizard and select **SaaS**, then choose **Google Workspace**.

![Google Workspace - Import](/img/gws-import.png)

Next, select the credentials you entered in the integrations page.

![Google Workspace - Select credentials](/img/gws-import-select-creds.png)

You will then have the option to refine the acquisition by timeframe, application, or user.

![Google Workspace - Import Configuration](/img/gws-import-config.png)

Review your selections and proceed with the import. Once the acquisition and processing are complete, the logs will be available for viewing and searching on the main timeline page.

### Log Field Mapping

To help with analysis, certain Google Workspace fields are mapped to Cado fields:

| Google Workspace Field | Cado Field       | Cado Facet Name   |
| ---------------------- | ---------------- | ----------------- |
| `ipAddress`            | `source_hostname` | Source Hostname   |
| `actor.email`          | `user`            | Users             |
| `id.applicationName`   | `sourcetype`      | Datatype          |

For example, you can filter the dataset by the 'Mobile' application by selecting it under the "Datatype" facet.

![Google Workspace - Timeline Filtering](/img/gws-timeline.png)