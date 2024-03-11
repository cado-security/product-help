---
title: Platform Encryption
hide_title: true
sidebar_position: 5
---

# Data Encryption and Security

## Google Cloud Platform
The Cloud Storage Bucket is configured to encrypt data at rest using GCP KMS and if using Cado Host to upload triage captures then data is encrypted using TLS by the GCP API client.
Secrets are stored using Google Cloud Secrets Manager.
