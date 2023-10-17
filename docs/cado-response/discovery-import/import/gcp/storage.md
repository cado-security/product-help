---
title: Google Cloud Storage
hide_title: true
sidebar_position: 2
---
# Google Cloud Storage Support

The Cado platform supports acquistion of data from GCP Storage Buckets. The two main use cases for this are:

* Analyzing disk images or zip files that have been uploaded to an Azure Blob Storage continer as part of an investigation
* Analyzing the contents of a GCP Storage Bucket for any uploaded content that could be part of an incident

Select the project you require, select the bucket and then select the objects to import. 

![Import GCP Storage](/img/google-cloud-storage.png)

## Uploading On-Premise evidence to GCP Storage for Import

You can use the [GCP Console](https://console.cloud.google.com/) to upload data from your web browser if you have access to it.

Alternatively, you can use [oAuth 2.0 Access](https://docs.cyberduck.io/protocols/google_cloud_storage/) with a Desktop GUI tool such as [Cyberduck](https://cyberduck.io/) to easily upload files from your desktop, with support for functionality such as resuming failed uploads.

We reccomend scoping access by giving the associated role [write-only](https://stackoverflow.com/questions/57147765/gcp-write-only-access-to-bucket-gcs) access.


