---
title: Bucket
hide_title: true
sidebar_position: 10
---

# Bucket

The / Forensic Acquisition and Investigation deployment requires a storage bucket for various functionality including evidence preservation, health checks and / Forensic Acquisition and Investigation host based acquisitions.

### Prerequisites

   - The Managed Identity used in the initial deployment and permission to edit it
   - Permission to create a Storage Account and Blob Storage container in the Azure console

### Steps

1. Add the necessary permissions by adding the following to your / Forensic Acquisition and Investigation managed identity:
   - Storage Account Contributor scoped to your resource group

2. Create a Storage Account in your / Forensic Acquisition and Investigation resource group
3. Create a Blob container in the Storage Account above
4. Enter the Storage Account and Container name in the Setup Wizard - if the configured permissions are insufficient you will be notified and asked to correct before logging into the platform.

![Azure Bucket](/img/azure-bucket.png)
