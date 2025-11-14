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

## CrowdStrike Quarantined Host Capture

In this section we will go through the steps required to manually pull data from your quarantined host on Crowdstrike to allow you to create an investigation within your cado platform.

#### Pre-requisites

- Access to RTR in the CrowdStrike console.
- Cado Host binary available for upload. The latest version is available within the platform at Import -> Cado Host.

1. Go to Host Management on your Crowdstrike console (/host-management/hosts) 

![Host Management](/img/csstep1.png)

2. Upload Cado Host Binary (/real-time-response/scripts/put-files)

![Put File](/img/csstep2.png)

Once uploaded you will see the file on your “put file” list:

![Put File List](/img/csstep3.png)

3. Connect to Host

![Host Connect](/img/csstep4.png)

> **NOTE:** The binary default directory is `C:\` on Windows Hosts.

4. On the host using Crowdstrike RTR  run the command `put "cado-host.exe"`

You will now be able to see the `cado-host.exe` in `C:\`

![Host File](/img/csstep5.png)

5. Run the executable with the capture command:

`run "c:\cado-host.exe" -CommandLine="capture --output_path c:\capture.zip" -Wait`

If run successfully you will get the exit code 0

![Code 0](/img/csstep6.png)

6. You will now need to download the `capturetest.zip` using the following command

`get capturetest.zip`

You will now see a progress banner for the zip download

![Progress Bar](/img/csstep7.png)

7. Once the download has finished you will now be able to download the zip folder to your local machine

![Download](/img/csstep8.png)

The zip folder will now be available to view on your default downloads location on your local machine. You will be prompted to enter a password which will be shown on the Crowdstrike UI: 

![Password](/img/csstep9.png)

8. Use the AWS CLI to upload your file directly to your S3 bucket by using the below command:

`aws s3 cp capture.zip s3://your-bucket-name/path/`

9. Please follow [this](https://docs.cadosecurity.com/cado/discovery-import/aws/aws-s3) document to import your data from S3 into your Cado Platform.




