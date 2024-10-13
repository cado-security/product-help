---
title: Azure Storage
hide_title: true
sidebar_position: 2
---

# How to Import Azure Storage

The Cado platform supports acquiring data from Azure Blob Storage. The two main use cases for Azure Storage acquisition are:

- **Analyzing disk images or zip files** uploaded to an Azure Blob Storage container as part of an investigation.
- **Analyzing the contents of an Azure Blob Storage container** for any uploaded content that could be part of an incident.

### Steps to Import Data from Azure Blob Storage

1. **Select an Azure Subscription**  
   Choose the Azure subscription linked to your investigation.
   
2. **Select the Storage Account**  
   Pick the appropriate storage account and then select the container containing the data you wish to analyze.
   
3. **Download the Blob**  
   Click the download icon next to the relevant blob to start the acquisition process.

![Import Azure Storage](/img/azure-storage.png)

## Uploading On-Premise Evidence to Azure Storage for Import

If you have access to the [Azure Console](https://portal.azure.com/), you can upload data directly from your web browser.

Alternatively, you can use a **SAS Token** or **Access Key** with a desktop tool like [Cyberduck](https://cyberduck.io/azure/) to upload files easily. Tools like Cyberduck support useful features such as resuming failed uploads.

We recommend scoping the access permissions by giving **write-only** access to Azure Storage. More information on setting write-only permissions can be found [here](https://stackoverflow.com/questions/50864068/write-only-access-no-read-no-list-no-delete-to-azure-storage).

You can also use **Cado Host** with the `--single_file_unzipped` parameter to upload evidence. This is particularly useful if you do not have direct access to Azure, as Cado will generate the necessary credentials under **Import > Cado Host**.