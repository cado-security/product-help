---
title: Deploy
hide_title: true
sidebar_position: 2
---


# How to Deploy / Forensic Acquisition and Investigation Host

## Deploy Through / Forensic Acquisition and Investigation Platform

You have two main options to deploy / Forensic Acquisition and Investigation Host:

1. **Script Builder**: Build a custom script in the / Forensic Acquisition and Investigation Platform that can be run on any supported device. The script will collect triage artifacts, upload them to cloud storage, and automatically process the data in / Forensic Acquisition and Investigation.
2. **Direct Download**: Download and run / Forensic Acquisition and Investigation Host independently without interacting with the Platform.

### Using Script Builder

Follow these steps to deploy / Forensic Acquisition and Investigation Host via the Script Builder:

- **Note:** Pre-signed URLs and API keys generated in AWS expire 2 hours after creation, and AWS limits the total upload size to 5GB.

:::caution
Make sure that devices running the scripts have HTTPS access to the AWS S3 endpoint, for example: `https://<BUCKET_NAME>.s3.amazonaws.com/`.
:::

1. In the / Forensic Acquisition and Investigation Platform, go to **Investigation > Import > / Forensic Acquisition and Investigation Host**.

   ![Import Evidence](/img/import.png)

2. Select either **Direct Download** or **Script Builder**.  
   - **Direct Download** is suitable for manually downloading the / Forensic Acquisition and Investigation Host binary to endpoints via Group Policy or an MDM tool.
   - **Script Builder** generates a script that can be run directly on a device via terminal, command prompt, or a remote execution tool.

   ![Select OS, storage, etc](/img/configure-runtime.png)

3. In the **Script Builder** tab, select:
   - Your **Operating System**.
   - Your **Cloud Storage** (where Cado Host will upload the collected data).
   - The **/ Forensic Acquisition and Investigation Host Binary Deployment Method**.

   :::tip
   If you choose **Manual** under `Select Cado Host Binary Deployment`, download the / Forensic Acquisition and Investigation Host binary separately and then copy/paste the generated command into your terminal.
   :::

4. Copy the pre-generated command and run it on the target device, or click **Download Script** and run the downloaded script.

   ![Download Script](/img/cado-host-script.png)

### Using Direct Download

To manually download and deploy the / Forensic Acquisition and Investigation Host binary:

1. Select your **Operating System**.
2. Click **Download**.
3. Follow the instructions to run / Forensic Acquisition and Investigation Host locally on the device.

   ![Direct Download](/img/cado-direct-download.png)

## Running as Non-Administrator

/ Forensic Acquisition and Investigation Host is designed to be run through the command line. Without administrative privileges, some artifacts (e.g., memory or locked files) cannot be acquired.

## Windows SmartScreen

On Windows, running Cado Host outside of the command line may trigger Windows SmartScreen. If you run `cado-host.exe` by manually clicking it, you will need to adjust the security settings:

1. Right-click the executable.
2. Select **Properties**.
3. Untick the "Blocked" box in the Security section.

   ![Properties](/img/import-security.png)

## Setting the Binary as Executable on Linux and macOS

For Linux and macOS, you may need to make the binary executable before running it:

```console
chmod +x ./cado-host
./cado-host
```

## Using Local Storage

If `--presigned_data` is not set, files will be saved to the same folder where / Forensic Acquisition and Investigation Host is run.

## Deploying / Forensic Acquisition and Investigation Host to Multiple Devices

/ Forensic Acquisition and Investigation Host can be deployed to multiple devices at once, such as through **[Group Policy](https://support.microsoft.com/en-gb/help/816102/how-to-use-group-policy-to-remotely-install-software-in-windows-server)** or other systems management tools.

## Deployment from XDR Integrations

/ Forensic Acquisition and Investigation Host can also be deployed to compromised machines via XDR systems such as CrowdStrike and SentinelOne. For more information, refer to the integrations with [SentinelOne](/cado/integrations/xdr/sentinelone) and [CrowdStrike](/cado/integrations/xdr/crowdstrike).

## Proxy and Network Access
/ Forensic Acquisition and Investigation Host will use the operating system defaults to connect to cloud storage.
This means you may need to configure a proxy or network access for / Forensic Acquisition and Investigation Host to connect to the internet and upload data.
