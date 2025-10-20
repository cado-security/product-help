---
title: Bucket
hide_title: true
sidebar_position: 11
---

# Bucket

The / Forensic Acquisition and Investigation deployment requires a storage bucket for various functionality including evidence preservation, health checks and / Forensic Acquisition and Investigation host based acquisitions.

### Prerequisites

   - The IAM role used in the initial deployment, and permission to edit it
   - Permission to create a GCS bucket in the GCP console


### Steps

1. Add the necessary permissions by adding the following to your IAM role:

```json
   // Bucket Access
   "storage.buckets.get",
   "storage.buckets.list",
   "storage.objects.create",
   "storage.objects.delete",
   "storage.objects.get",
   "storage.objects.list",
```
2. Create a GCS bucket in the GCP console
3. Enter the bucket name in the Setup Wizard - if the configured permissions are insufficient you will be notified and asked to correct before logging into the platform.

![GCP Bucket](/img/gcp-bucket.png)
