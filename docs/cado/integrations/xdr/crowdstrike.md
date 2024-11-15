---
title: CrowdStrike
hide_title: true
sidebar_position: 4
---

# How to Integrate with CrowdStrike

Integrating CrowdStrike Falcon with Cado allows you to initiate triage acquisition on hosts running the Falcon Sensor via CrowdStrike Real Time Response.

Once initiated, CrowdStrike Falcon Real Time Response will locate the endpoint with the Falcon Sensor, execute a [Cado Host](/cado/discovery-import/cado-host/intro) command to collect the triage package, and upload it to Cado for processing.

For more information, see the [CrowdStrike and Cado Security Joint Solution Brief](https://offers.cadosecurity.com/cado-security-and-crowdstrike-integration) and the [CrowdStrike Marketplace listing](https://marketplace.crowdstrike.com/listings/the-cado-platform).

## Prerequisites

1. **Create an API Client** with the following permissions. Refer to this [blog article](https://www.crowdstrike.com/blog/tech-center/get-access-falcon-apis/) for instructions:
   - **Real Time Response Admin**: Write
   - **Hosts**: Read
   - **Real Time Response**: Read
   - **Real Time Response**: Write
   - **Alerts**: Read
   - **Detections**: Read
2. Note the **Client ID**, **Client Secret**, and **Endpoint URL** for entry into the Cado Platform.
3. Enable **Real Time Response** in the Default policies for each OS or in custom policies attached to host groups.
4. Create **Detections and Preventions Machine Learning exclusions** with the following patterns to enable Windows integration:
   - `Windows\Temp\_MEI*\**\CadoHostRawGrabber.exe`
   - `Windows\Temp\cado-host-*\cado-host.exe`
5. (Optional) To prevent endpoint detection alerts for `CadoHostRawGrabber.exe` related to `HiveCredTheft`, `RawReadOnSAMHive`, and `RawReadOnSecurityHive`, create IOA exclusions with the following patterns:
   - **Image Filename**: `.*\\Windows\\Temp\\_MEI.*\\.*\\CadoHostRawGrabber\.exe`
   - **Command Line**: `.*\\Windows\\TEMP\\_MEI.*\\binaries\\CadoHostRawGrabber\.exe\s+--inputPath\s+.*\s+--outputPath\s+.*\\Windows\\TEMP\\.*`

Exclusions are not required for Linux and macOS.

:::note
CrowdStrike Falcon defines policies by platform, so you will need separate Windows and Linux Response Policies that allow RTR Admin. macOS is not currently supported.
:::

## Enabling the Integration in Cado Platform

1. Navigate to **Settings > Accounts** and click **Create an account**.
2. Select **CrowdStrike** from the set of providers.
3. Give the account a **Name** and enter the **Endpoint**, **Client ID**, and **Client Secret**. Leave the 'Run account check after adding account' checkbox selected, which will validate the account has the correct permissions after selecting 'Continue'.
4. Navigate to the 'Accounts' table and the newly created CrowdStrike account should present. If configured correctly, you will see a green coloured health status.
5. An alternative way to check the account has been set up correctly is to browse to any investigation, and click **Import > XDR > CrowdStrike**. If configured correctly, a paginated list of hosts with the CrowdStrike Falcon Sensor installed will appear, showing those within the appropriate Host Group.
