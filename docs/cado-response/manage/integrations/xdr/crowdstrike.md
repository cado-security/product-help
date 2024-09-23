---
title: CrowdStrike
hide_title: true
sidebar_position: 4
---

# CrowdStrike Integration

Integrating with CrowdStrike Falcon allows you to select and kick off triage acquisition on hosts with the Falcon Sensor installed using CrowdStrike Real Time Response.

Once you have kicked off the triage acquisition, CrowdStrike Falcon Real Time Response will locate the endpoint running CrowdStrike Falcon Sensor
and will run a [Cado Host](/cado-host/intro) command on the endpoint that performs collection of the triage package and uploads it to Cado for processing.

For more information, see the [Crowdstrike and Cado Security Joint Solution Brief](https://offers.cadosecurity.com/cado-security-and-crowdstrike-integration) and the [CrowdStrike Marketplace listing](https://marketplace.crowdstrike.com/listings/the-cado-platform).

## Prerequisites
1. Create an API Client with the permissions listed below. For more information on how to do this see this helpful [blog article](https://www.crowdstrike.com/blog/tech-center/get-access-falcon-apis/). This API Client will need 
- **Real Time Response Admin**: Write
- **Hosts**: Read
- **Real Time Response**: Read
- **Real Time Response**: Write
- **Alerts**: Read
- **Detections**: Read
2. Copy and note down the Client ID,  Client Secret and Endpoint URL to enter into the Cado Platform
3. Enable Real Time Response in either the Default policies for each operating system, or your own that you can attach to a host group.
4. Create Detections and Preventions Machine Learning exclusions with the following pattern to allow the Windows integration to function:
- `Windows\Temp\_MEI*\**\CadoHostRawGrabber.exe`
- `Windows\Temp\cado-host-*\cado-host.exe`
5. Optional: `CadoHostRawGrabber.exe` will potentially raise an endpoint detection for the IOAs `HiveCredTheft`, `RawReadOnSAMHive` and `RawReadOnSecurityHive`. To prevent these detections from being raised, you can create an IOA exclusion for both IOAs using these patterns.
- Image Filename: `.*\\Windows\\Temp\\_MEI.*\\.*\\CadoHostRawGrabber\.exe`
- Command Line:  `.*\\Windows\\TEMP\\_MEI.*\\binaries\\CadoHostRawGrabber\.exe\s+--inputPath\s+.*\s+--outputPath\s+.*\\Windows\\TEMP\\.*`

:::note
 CrowdStrike Falcon defines policies on a “per platform basis”, so you  will need a Windows Response Policy and a Linux Response Policy which allows RTR Admin. macOS is not currently supported. 
:::

## Enabling integration in the Cado Platform

1. Navigate to *Settings > Integrations > XDR* and click “Add Connection”.
2. Click “Add Connection” and select CrowdStrike from the dropdown menu.
Enter the URL, Client ID and Client Secret from the previous section. The integration should then appear on the settings page.

![crowdstrike dropdown](/img/crowdstrike-xdr-dropdown.png)

3. In any investigation, click *“Import” -> XDR -> CrowdStrike*
4. If you have configured it correctly, then it should show a paginated list of all the hosts with the CrowdStrike Falcon sensor installed and are part of the correct Host Group.
