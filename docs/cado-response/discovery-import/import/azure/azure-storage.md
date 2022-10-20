---
title: Azure Storage
hide_title: true
sidebar_position: 2
---

# Azure Storage Support

Cado Response supports acquistion of data from Azure Blob Storage. The two main use cases for this are:

* Analyzing disk images or zip files that have been uploaded to an Azure Blob Storage continer as part of an investigation
* Analyzing the contents of an Azure Blob Storage container for any uploaded content that could be part of an incident

While the project is open, select *Azure Storage*. Select or search the account you require, select the container and the click the download icon for the appropriate blob. 

![Import Azure Storage](/img/azure-storage.png)


## Uploading On-Premise evidence to Azure Storage for Import

You can use the [Azure Console](https://portal.azure.com/) to upload data from your web browser if you have access to it.

Alternatively, you can use a Sas Token or Access Key [https://cyberduck.io/azure/] with a Desktop GUI tool such as [https://cyberduck.io/](Cyberduck) to easily upload files from your desktop, with support for functionality such as resuming failed uploads.

We reccomend scoping access by giving [write-only](https://stackoverflow.com/questions/50864068/write-only-access-no-read-no-list-no-delete-to-azure-storage) access to Azure storage.



