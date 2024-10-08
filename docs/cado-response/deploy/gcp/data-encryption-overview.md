---
title: Platform Encryption in GCP
hide_title: true
sidebar_position: 5
---

# What encryption does the Cado platform use in GCP?

## Google Cloud Platform
The Cloud Storage Bucket is configured to encrypt data at rest using [GCP KMS](https://cloud.google.com/security/products/security-key-management) and if using Cado Host to upload triage captures.
Data is then encrypted using TLS by the GCP API client.
Secrets are stored using [Google Cloud Secrets Manager](https://cloud.google.com/security/products/secret-manager).
