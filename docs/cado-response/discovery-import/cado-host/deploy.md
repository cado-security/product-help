---
title: Deploy
hide_title: true
sidebar_position: 2
---

# How to deploy Cado Host

## Deploy through Cado Response Platform
In order to deploy Cado Host, you can choose from one of the following deployment methods:
1. Use the **Script Builder** from within the Cado Response Platform.  This allows you to build a script which can be run on any supported device, upload the triage artifacts to cloud storage and automatically process the data into Cado Response.
2. Use the **Direct Download** method.  This allows customers to download and run Cado Host independent of running Cado Response.

### Using Script Builder
In order to deploy Cado Host via the Script Builder in the Cado Response platform, follow the instructions below.  Note that when using the Script Builder in AWS, the pre-signed URLs and API keys expire 2 hours after being generated and AWS enforces a limit of 5GB total upload size.

:::caution
Ensure that the devices on which the scripts will be run have HTTPS access to the AWS S3 endpoint.  For example: `https://<BUCKET_NAME>.s3.amazonaws.com/`
:::

1. Find the Cado Host deployment options on the platform under `Investigation > Import > Cado Host`.

  ![Import Evidence](/img/import.png)

2. Select either **Direct Download** or **Script Builder**.  **Direct Download** can be used if you are downloading the Cado Host binary to your endpoints directly, via Group Policy or via a MDM tool.  **Script Builder** will generate a script that can be run directly on a device via a terminal window, cmd window or remote script execution tool.

	![Select OS, storage, etc](/img/import-step2.png)

3. If you choose the **Script Builder** tab, select your OS, cloud storage (where the Cado Host ZIP will be uploaded to) and then the Cado Host binary deployment method.  

	:::tip
	If you select **Manual** under `Select Cado Host Binary deployment`, download the Cado Host binary to your devices, then copy and paste the command generated for you, into your terminal.
	:::

4. Copy the pre-generated command to the device and run it, or click the "Download Script" button and run that script on the device.

	![Download Script](/img/cado-host-script.png)


### Using Direct Download 
If wish to download the Cado Host binary for manual deployment, select your OS, click **Download** and then follow the instructions to run Cado Host locally.

![Direct Download](/img/cado-direct-download.png)

## Running as non-administrator
​Cado Host is designed to be executed through the commandline.
If you do not execute the application with administrative privileges there are some artifacts you will not be able to acquire, such as memory and other files that are locked by the operating system.

## Windows SmartScreen
On Microsoft Windows, if you execute it without the use of the command line, you may be prompted by the Windows SmartScreen. If you wish to run cado-host.exe by manually clicking it, you will have to select Properties and Untick this box:

![Properties](/img/import-security.png)

## Setting the Binary as Executable on Linux and OSX
When running on Linux or OSX, you may need to set the binary as executable:

```console
chmod +x ./cado-host
./cado-host
```

## Using Local Storage
​If you do not set a cloud storage option, files will be saved to the same folder that Cado Host is run from. You can not set a different storage location at this time.

## Deploying Cado Host to Multiple Devices
You can execute Cado Host individually on a device or you can deploy it to a number of machines that may be compromised, for example through **[Group Policy](https://support.microsoft.com/en-gb/help/816102/how-to-use-group-policy-to-remotely-install-software-in-windows-server)** or other systems management software.

## Deployment from XDR Integrations
You can deploy Cado Host to machines that may be compromised, for example through XDR systems such as Crowdstrike and SentinelOne.
For more, see [SentinelOne](/cado-response/manage/integrations/xdr/sentinelone) and [Crowdstrike](/cado-response/manage/integrations/xdr/crowdstrike).

