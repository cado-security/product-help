---
title: Google Cloud Storage
hide_title: true
sidebar_position: 2
---

# How to Import from Google Cloud Storage

The Cado platform supports the acquisition of data from Google Cloud Platform (GCP) Storage Buckets. The two main use cases for this are:

- **Analyzing disk images or zip files** uploaded to a GCP Storage Bucket as part of an investigation.
- **Analyzing the contents of a GCP Storage Bucket** for any uploaded content that could be related to an incident.

### Steps to Import Data

1. **Select the Investigation**: Choose the investigation you are working on.
2. **Select the Bucket**: Choose the GCP Storage Bucket you wish to analyze.
3. **Select Objects to Import**: Select the specific files or objects from the bucket to import into Cado.

   ![Import GCP Storage](/img/google-cloud-storage.png)

## Uploading On-Premise Evidence to GCP Storage for Import

You can upload data to GCP Storage using the following methods:

- **GCP Console**: If you have access to the [GCP Console](https://console.cloud.google.com/), you can upload data directly from your web browser.
- **Desktop GUI Tools**: Alternatively, you can use a tool like [Cyberduck](https://cyberduck.io/) with [oAuth 2.0 Access](https://docs.duck.sh/protocols/googlecloudstorage/) to upload files from your desktop. Cyberduck supports features such as resuming failed uploads.

We recommend scoping access by assigning the associated role **[write-only](https://stackoverflow.com/questions/57147765/gcp-write-only-access-to-bucket-gcs)** permissions for enhanced security.