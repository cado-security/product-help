---
title: Microsoft Defender XDR
hide_title: true
sidebar_position: 4
---

# How to Integrate with Microsoft Defender XDR

Integrating with Microsoft Defender XDR allows you to initiate triage acquisition on hosts with the Defender agent installed using Live Response.

Once initiated, Live Response will locate the endpoint running the Defender agent and execute a [Cado Host](/cado/discovery-import/cado-host/intro) command to collect the triage package and upload it to Cado for processing.

## Prerequisites

1. Ensure you have a **Microsoft Defender for Endpoint Plan 2** license.
2. In the Defender Portal, enable the following settings by navigating to **Settings > Endpoints > Advanced Features**:
   
   ![Defender Live Response Settings](/img/defender_settings.png)
   
3. Create an **App Registration** with the required API permissions for Defender XDR. Refer to [Microsoft documentation](https://learn.microsoft.com/en-us/defender-endpoint/api/exposed-apis-create-app-webapp) for guidance on creating the App Registration in your Azure portal.

To add the required permissions for Cado to integrate with your newly created app, expand Manage and select API permissions. Click on `Add a permission`, select `APIs my organization uses` and search for `WindowsDefenderATP`. 

   ![WindowsDefenderATP API Permissions](/img/windowsdefenderatp_permissions.png)

Select the following API permissions:

| Permission          | Reason                                                                                  | Type        | Admin Consent Required |
|---------------------|-----------------------------------------------------------------------------------------|-------------|------------------------|
| Library.Manage       | Allows Cado to upload Cado Host scripts to the Live Response library for credential refresh | Application | Yes                    |
| Machine.LiveResponse | Allows Cado to run Cado Host against a machine                                          | Application | Yes                    |
| Machine.Read.All     | Allows Cado to inspect a single machine on Defender and obtain its UUID                 | Application | Yes                    |
| Machine.ReadWrite.All| Allows Cado to retrieve a list of all machines on Defender for display in the UI        | Application | Yes                    |
| Alert.Read.All       | Allows Cado to monitor alerts from Defender as part of the Detection integration        | Application | Yes                    |
| Alert.ReadWrite.All  | Allows Cado to manage alerts from Defender as part of the Detection integration         | Application | Yes                    |

## Enabling the Integration in the Cado Platform

1. Navigate to **Settings > Accounts** and click **Create an account**.
2. Select **Defender** from the set of providers.

![Defender Integration](/img/Accounts-Defender.png)

3. Give the account a **Name** and enter the **Endpoint**, **Client ID**, **Client Secret**, and **Tenant** from the App Registration you created. Leave the 'Run account check after adding account' checkbox selected, which will validate the account has the correct permissions after selecting 'Continue'.
4. Navigate to the 'Accounts' table and the newly created Defender account should present. If configured correctly, you will see a green coloured health status.
5. An alternative way to check the account has been set up correctly is to browse to any investigation, and click **Import > XDR > Defender**. If configured correctly, a paginated list of hosts with the Defender agent installed will be displayed.

## Limitations

- Microsoft Defender limits to 25 concurrent Live Response sessions.
- Live Response scripts will time out after 10 minutes.
- Only one Live Response session can be active per endpoint.
