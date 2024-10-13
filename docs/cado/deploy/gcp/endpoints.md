---
title: Endpoint access
hide_title: true
sidebar_position: 3
---

# What GCP Endpoints Does the Cado Platform Require Access To?

The Cado platform requires access to the following GCP endpoints:

### GCP Provider APIs
- `https://cloudresourcemanager.googleapis.com`

### OAuth
- `/v1/{name=projects/*/serviceAccounts/*}:generateAccessToken`

### Cloud Build Service
- `/v1/projects/{projectId}/builds`

### Storage
- `/storage/v1/b`
- `/storage/v1/b/{bucket}/o`

### Compute
- `/compute/v1/projects/{project}/zones/{zone}/instances`
- `/compute/v1/projects/{project}/global/images`
- `/compute/v1/projects/{project}/zones/{zone}/disks/{disk}`
- `/compute/v1/projects/{project}/global/operations/{operation}`

### GCP Resource Manager
- `cloudresourcemanager.googleapis.com/v3/projects:search`