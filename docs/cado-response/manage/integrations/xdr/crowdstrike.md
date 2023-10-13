---
title: CrowdStrike
hide_title: true
sidebar_position: 4
---

# CrowdStrike Integration (Beta)

Integrating with CrowdStrike Falcom allows you to select and kick off triage acquisition on hosts with the Falcon Sensor installed using CrowdStrike Real Time Response.

Once you have kicked off the triage acquisition CrowdStrike Falcon Real Time Response will locate the endpoint running CrowdStrike Falcon Sensor
Run a Cado Host command on the endpoint that performs collection of the triage package and uploads it to Cado for processing

:::info
**Beta Tester Note:** Currently CrowdStrike blocks Cado Host acquisitions for Windows. Reach out to your Cado Customer Support Request for help in creating the appropriate exclusions within CrowdStrike to allow this acquisition to work
:::

## Prerequisites
1. Create an API Client with the permissions listed below. For more information on how to do this see this helpful [blog article](https://www.crowdstrike.com/blog/tech-center/get-access-falcon-apis/). This API Client will need 
- **Real Time Response Admin**: Write
- **Hosts**: Read
- **Real Time Response**: Write

:::info
**Beta Tester Note**: To help in the future if the permissions are incorrect, scopes that we had during development was:
 
![beta crowdstrike permissions](/img/beta-crowdstrike-permissions.png)

:::
2. Copy and note down the Client ID,  Client Secret and Endpoint URL to enter into the Cado Platform
3. Enable RTR Admin for all devices from which you may want to acquire.
4. Create a Host Group with a Response Policy which enables RTR Admin.
5. Add hosts to this host group to enable RTR Admin commands to be run.

:::note
 CrowdStrike Falcon defines policies on a “per platform basis”, so you  will need to add a Windows Response Policy and a Linux Response Policy which allows RTR Admin.
:::

## Enabling integration in the Cado Platform

1. Enable beta CrowdStrike integration feature by navigating to *Settings > Experiments*. Then toggle the “Crowdstrike” feature.

![beta crowstrike setting](/img/beta-settings-crowdstrike.png)
2. Navigate to *Settings > Integrations > XDR* and click “Add Connection”.
3. Click “Add Connection” and select CrowdStrike from the dropdown menu.
Enter the URL, Client ID and Client Secret from the previous section. The integration should then appear on the settings page.

![crowdstrike dropdown](/img/crowdstrike-xdr-dropdown.png)

4. In any project, click *“Import” -> XDR -> CrowdStrike*
5. If you have configured it correctly, then it should show a paginated list of all the hosts the CrowdStrike Falcon sensor installed and are part of the correct Host Group.
