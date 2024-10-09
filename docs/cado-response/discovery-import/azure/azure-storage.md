---
title: Azure Storage
hide_title: true
sidebar_position: 2
---

# Azure Storage Support

The Cado platform supports acquisition of data from Azure Blob Storage. The two main use cases for this are:

* Analyzing disk images or zip files that have been uploaded to an Azure Blob Storage container as part of an investigation
* Analyzing the contents of an Azure Blob Storage container for any uploaded content that could be part of an incident

Select an Azure subscription, and select the storage account, select the container and the click the download icon for the appropriate blob. 

![Import Azure Storage](/img/azure-storage.png)


## Uploading On-Premise evidence to Azure Storage for Import

You can use the [Azure Console](https://portal.azure.com/) to upload data from your web browser if you have access to it.

Alternatively, you can use a [Sas Token or Access Key](https://cyberduck.io/azure/) with a Desktop GUI tool such as [Cyberduck](https://cyberduck.io/) to easily upload files from your desktop, with support for functionality such as resuming failed uploads.

We recommend scoping access by giving [write-only](https://stackoverflow.com/questions/50864068/write-only-access-no-read-no-list-no-delete-to-azure-storage) access to Azure storage.

You can also use Cado Host with the --single_file_unzipped parameter - this may be a good option if you do not have direct access to Azure as Cado Response will generate the credentials at Import > Cado Host.


