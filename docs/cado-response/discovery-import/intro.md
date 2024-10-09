---
title: Import data
hide_title: true
sidebar_position: 1
---

# How to import data
There are a number of options for importing data into the Cado platform. Once you select the data you would like to import, the Cado platform begins processing the data based on the platforms Processing Settings.  Check out our help section on **[Processing Settings](/cado-response/manage/workers.md#processing)** for more details.

Cado supports a wide range of file types across a number of cloud services which can be imported.  To begin importing data, you simply select an Investigation and click the **Import** button 

![Import Button](/img/import-button.png)

Based on the evidence you would like to import, follow the on-screen instructions and select your source.

![Import Data](/img/import.png)

### Importing from Cloud Services
You can import evidence from cloud services across AWS, Azure and GCP, provided you have the correct credentials entered into the system, and your role has been assigned access to those credentials. **[Learn more](import-from-cloud.md)**

### Importing from Cado Host
The Cado platform can use Cado Host to acquire forensic artifacts from on-premises system for analysis in the cloud.
It can also generate credentials for Cado Host to upload evidence, such as a previously collected disk image.

For more information see the [Cado Host Documentation](/cado-response/discovery-import/cado-host/intro)

### Importing from URL
You can import supported [file types](data-types/filetypes.md) from a URL where you are storing forensic artifacts collected from on-premises systems.

> ![On-Premises URL](/img/on-premises-url.png)
