---
title: Overview
hide_title: true
sidebar_position: 1
---

# Importing Data
There are a number of options for importing data into the Cado platform. Once you select the data you would like to import, the Cado platform begins processing the data based on the platforms Processing Settings.  Check out our help section on **[Processing Settings](../../manage/workers.md#processing)** for more details.

Cado supports a wide range of **[file types](data-types/filetypes.md)** across a number of  **[cloud services](data-types/import-types.md)** which can be imported.  To begin importing data, you simply select a Project and click the **Import** button 

![Import Button](/img/import-button.png)

Based on the evidence you would like to import, follow the on-screen instructions and select your source.

![Import Data](/img/import.png)

### Importing from Cloud Services
You can import evidence from cloud services across AWS, Azure and GCP, provided you have the correct credentials entered into the system, and your role has been assigned access to those credentials. **[Learn more](import-from-cloud.md)**

### Importing from XDR
You can import data into the Cado platform via an eXtended Detection and Response (XDR) system. Currently Cado supports importing from SentinelOne. For more infomation about setting up this integration see the [SentinelOne Integration Setup page](../../../manage/integrations/xdr/sentinelone.md)

Once the integration is set up, from within a project click **Import from XDR**

Then choose the XDR Platform you have set up, and click *Continue*

![Choose XDR Platform](/img/xdr-import-2.png)

Then search for or select the endpoint from which you want to collect, and click *Continue*

![Import XDR Endpoints](/img/xdr-import-3.png)

Finally, confirm your selections and click *Start Import*

### Importing from Cado Host
The Cado platform can use Cado Host to acquire forensic artifacts from on-premises system for analysis in the cloud.
It can also generate credentials for Cado Host to upload evidence, such as a previously collected disk image.

For more information see the [Cado Host Documentation](/cado-host/intro)

### Importing from URL
You can import supported [file types](../data-types/filetypes.md) from a URL where you are storing forensic artifacts collected from on-premises systems.

> ![On-Premises URL](/img/on-premises-url.png)

:::info
During the EC2 Import process, an i3.4xlarge worker instance is deployed to allow for proper disk acquisition. During the Azure Instance Import process, a Standard_D8ds_v4 worker instance is deployed to allow for proper disk acquisition. You can configure the size of the worker instance in the Cado platform under **Settings/Processing**. This worker is spun down once the target disk is acquired.
:::

:::warning
By default when processing archive files Cado processes two layers of recursion and twenty folder branches. This provides faster processing but there is a slight risk that some malicious files or activites may be missed.

You can configure this at **Settings/Processing Speed** but increasing these numbers will increase the time taken to process disk images with archives.

![Processing Speed](/img/settings-processing-speed.png)
:::
