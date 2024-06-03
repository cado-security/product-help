---
title: Microsoft Defender XDR
hide_title: true
sidebar_position: 4
---

# Microsoft Defender XDR Integration (Beta)

Integrating with Microsoft Defender XDR allows you to select and kick off triage acquisition on hosts with the Defender agent installed using Live Response.

Once you have kicked off the triage acquisition, Live Response will locate the endpoint running Defender agent
and will run a [Cado Host](/cado-host/intro) command on the endpoint that performs collection of the triage package and uploads it to Cado for processing.


## Prerequisites
1. Make sure you have a "Microsoft Defender for Endpoint Plan 2" license
2. Enable the following settings in the Defender Portal, by going to `Settings > Endpoints > Advanced Features`
![Defender Live Response Settings](/img/defender_settings.png)
3. Create an App Registration with the appropriate API access for Defender XDR, see the [Microsoft documentation](https://learn.microsoft.com/en-us/defender-endpoint/api/exposed-apis-create-app-webapp) on how to create this in your Azure portal.


## Enabling the integration in the Cado Platform

1. Enable the beta feature by navigating to *Settings > Experiments*. Then toggle the "Microsoft Defender Xdr" feature.
2. Navigate to *Settings > Integrations > XDR* and click “Add Connection”.
3. Click “Add Connection” and select Defender from the dropdown menu.
4. Enter the Tenant, Client ID and Client Secret from the App Registration you created. The integration should then appear on the settings page.
4. In any project, click *“Import” -> XDR -> Defender*
5. If you have configured it correctly, then it should show a paginated list of all of the hosts with the Defender agent installed.

## Limitations

* Microsoft Defender imposes a rate limit of 25 concurrent Live Response sessions
* Live Response scripts will time out after 10 minutes
* Only one Live Response session can be available per endpoint
