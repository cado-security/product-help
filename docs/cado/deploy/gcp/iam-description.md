---
title: IAM permissions description
hide_title: true
sidebar_position: 6
---

# What IAM permissions does Cado use in GCP?

## Introduction

Cado Security requires specific permissions in Google Cloud Platform (GCP) to function correctly. This document outlines the permissions needed, categorized by their functionality. For the most up-to-date permissions, please refer to the [Cado Security GCP Terraform Module](https://github.com/cado-security/Deployment-Templates/blob/main/gcp/modules/iam/main.tf).

If these permissions are too broad for your environment, or if you have concerns regarding the scope of any permissions, please contact our support team at [support@cadosecurity.com](mailto:support@cadosecurity.com) for assistance in reducing the permission set while maintaining necessary functionality.

## Permissions Overview

### Minimal Permissions to Run

These are the essential permissions required for Cado Security to operate:

- `iam.serviceAccounts.actAs`
- `iam.serviceAccounts.get`
- `iam.serviceAccounts.getAccessToken`
- `iam.serviceAccounts.getIamPolicy`

### Cado Host Permissions

Permissions related to the Cado Host operations:

- `iam.serviceAccounts.signBlob`

### Bucket Acquisition Permissions

Needed for acquiring data from Cloud Storage buckets:

- `storage.buckets.get`
- `storage.buckets.list`
- `storage.objects.create`
- `storage.objects.delete`
- `storage.objects.get`
- `storage.objects.list`

### Worker Permissions

Permissions required for worker instances to perform tasks:

- `compute.disks.create`
- `compute.instances.create`
- `compute.instances.setMetadata`
- `compute.instances.setServiceAccount`
- `compute.addresses.use`
- `compute.instances.addAccessConfig`
- `compute.instances.delete`
- `compute.instances.setLabels`
- `compute.subnetworks.use`
- `compute.networks.get`
- `compute.networks.list`

#### Adjusting Settings

Permissions for modifying compute resource settings:

- `compute.machineTypes.get`
- `compute.machineTypes.list`
- `compute.regions.get`

### Upgrade Permissions

Required for upgrading Cado Security components:

- `compute.disks.create`
- `compute.instances.attachDisk`
- `compute.images.useReadOnly`
- `compute.instances.create`
- `compute.addresses.use`
- `compute.instances.detachDisk`
- `compute.instances.deleteAccessConfig`
- `compute.zoneOperations.get`
- `compute.subnetworks.useExternalIp`

### Secret Management Permissions

Needed for managing secrets in Secret Manager:

- `secretmanager.secrets.create`
- `secretmanager.versions.access`
- `secretmanager.versions.add`

### Acquisition Permissions

Permissions for acquiring resources and data within GCP:

- `resourcemanager.projects.get`

#### Instance Acquisition

Required for interacting with compute instances:

- `cloudbuild.builds.get`
- `cloudbuild.builds.create`
- `compute.disks.get`
- `compute.disks.use`
- `compute.disks.list`
- `compute.disks.useReadOnly`
- `compute.globalOperations.get`
- `compute.images.create`
- `compute.instances.get`
- `compute.instances.list`
- `compute.images.delete`
- `compute.images.get`
- `compute.instances.getSerialPortOutput`
- `compute.projects.get`

#### GKE Acquisition

Permissions related to Google Kubernetes Engine (GKE) clusters:

- `container.clusters.get`
- `container.clusters.list`
- `container.pods.exec`
- `container.pods.get`
- `container.pods.list`
