---
title: XDR platforms
hide_title: true
sidebar_position: 7
---

# How to Import Data from XDR Platforms

You can import data into the Cado platform using an eXtended Detection and Response (XDR) system. Cado Host can be quickly deployed to compromised Windows and Linux machines via XDR vendors such as CrowdStrike, SentinelOne, and Microsoft Defender. However, macOS is not currently supported for SentinelOne and Defender integrations.

For detailed setup instructions, refer to the following pages:
- [SentinelOne Integration Setup](/cado/integrations/xdr/sentinelone.md)
- [CrowdStrike Integration Setup](/cado/integrations/xdr/crowdstrike.md)
- [Defender Integration Setup](/cado/integrations/xdr/defender.md)

## Importing Data via XDR

Once the integration is set up, follow these steps to import data:

1. From within an investigation, click **Import from XDR**.
2. Select the XDR platform you have set up and click **Continue**.

   ![Choose XDR Platform](/img/xdr-import-2.png)

3. Search for or select the endpoint you want to collect data from, and click **Continue**.

   ![Import XDR Endpoints](/img/xdr-import-3.png)

4. Confirm your selections and click **Start Import**.

Once initiated, Cado will begin importing data from the selected endpoint via the XDR platform.