---
title: XDR platforms
hide_title: true
sidebar_position: 7
---

# How to Import Data from XDR Platforms

You can import data into the / Forensic Acquisition and Investigation platform using an eXtended Detection and Response (XDR) system. / Forensic Acquisition and Investigation Host can be quickly deployed to compromised Windows and Linux machines via XDR vendors such as CrowdStrike, SentinelOne, and Microsoft Defender. However, macOS is not currently supported for SentinelOne and Defender integrations.

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

4. Configure the type of acquisition you would like to whether that's a balanced collection or a custom collection.

**Balanced Collection** - Collects most common artifacts. 

**Custom Collections** -  Able to customise your collection based on groups or filespaths or a mixture of both.

**Groups** - Filters collection to collect specific groups of files. Use the Groups Browser to see details about each group

**Files**  - Choose to filter your collection based on specific filepaths

You can also set some parameters for your acquisition:

**File Size Limit**: Set the maximum file size to 10MB to prevent collection of larger files.

**Skip SSL Verification**: Disable SSL verification in collection parameters when necessary, understanding the security implications.

**Collect Files Only**: Select the "Only Collect Files" option to restrict collection to specified files and disable group filtering.

![XDR Settings](/img/xdrsettings.png)

5. Confirm your selections and click **Start Import**.

Once initiated, / Forensic Acquisition and Investigation will begin importing data from the selected endpoint via the XDR platform.

