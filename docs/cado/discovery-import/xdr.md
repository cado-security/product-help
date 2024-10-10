---
title: XDR platforms
hide_title: true
sidebar_position: 7
---

# How to import data from XDR platforms
You can import data into the Cado platform via an eXtended Detection and Response (XDR) system.

You can quickly deploy Cado Host to Windows and Linux machines that may be compromised through XDR vendors such as Crowdstrike, SentinelOne and Microsoft Defender.
Please note that macOS is not currently supported currently for SentinelOne and Defender.

For more infofmation about setting up this integration see:
- [SentinelOne Integration Setup page](/cado/integrations/xdr/sentinelone.md)
- [CrowdStrike Integration Setup page](/cado/integrations/xdr/crowdstrike.md)
- [Defender Integration Setup page](/cado/integrations/xdr/defender.md)

Once the integration is set up, from within an investigation click **Import from XDR**

Then choose the XDR Platform you have set up, and click *Continue*

![Choose XDR Platform](/img/xdr-import-2.png)

Then search for or select the endpoint from which you want to collect, and click *Continue*

![Import XDR Endpoints](/img/xdr-import-3.png)

Finally, confirm your selections and click *Start Import*