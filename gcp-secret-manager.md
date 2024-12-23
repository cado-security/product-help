---
title: Secret Manager
hide_title: true
sidebar_position: 10
---

# Secret Manager

The initial deployment stores the key used to encrypt secrets in Cado locally on the machine. Enabling a Secret Manager allows Cado to instead store the key in GCP Secret Manager.

### Prerequisites

   - Ability to update IAM role

### Steps

1. Add the necessary permissions by adding the following to your IAM Role:

```json
   "secretmanager.secrets.create"
   "secretmanager.versions.access"
   "secretmanager.versions.add"
```

2. Enable in the UI: **Settings** > **Advanced** > **Secret Management** > **Turn on Secrets Manager**



