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

These are the essential permissions required for the Cado platform to start and operate when deployed in Google Cloud:

- `iam.serviceAccounts.actAs` - Allows a user or service to impersonate a service account. This is required to attach a service account to a resource like a VM
- `iam.serviceAccounts.get` - Grants permission to view metadata about a service account, such as its display name, description, and unique ID.
- `iam.serviceAccounts.getAccessToken` - Generate access tokens for service accounts (used for authentication).
- `iam.serviceAccounts.getIamPolicy` - Lets the caller view the IAM policy (i.e., who has what permissions) on a service account 1.

### Cado Host Permissions

Permissions related to the Cado Host operations:

- `iam.serviceAccounts.signBlob` - Sign a blob of data digitally.

### Bucket Acquisition Permissions

Needed for acquiring data from Cloud Storage buckets:

- `storage.buckets.get` - View details of a specific bucket.
- `storage.buckets.list` - List all buckets in a project.
- `storage.objects.create` - Upload new objects (files) to a bucket.
- `storage.objects.delete` - Delete objects in a bucket.
- `storage.objects.get` - Download or view objects.
- `storage.objects.list` - List objects in a bucket.

### Worker Permissions

Permissions required for worker instances to perform tasks:

- `compute.disks.create` - Create new persistent disks.
- `compute.instances.create` - Launch new VM instances.
- `compute.instances.setMetadata` - Set custom metadata on instances.
- `compute.instances.setServiceAccount` - Assign a service account to an instance.
- `compute.addresses.use` - Use static or ephemeral IP addresses in a project.
- `compute.instances.addAccessConfig` - Add an access configuration to a network interface.
- `compute.instances.delete` -  Delete VM instances.
- `compute.instances.setLabels` – Set or update labels on VM instances.
- `compute.subnetworks.use` – Attach a subnetwork to a VM.
- `compute.networks.get` – View details of a specific VPC network.
- `compute.networks.list` – List VPC networks in a project.

#### Adjusting Settings

Permissions for modifying compute resource settings:

- `compute.machineTypes.get`
- `compute.machineTypes.list`
- `compute.regions.get`

### Upgrade Permissions

Required for upgrading Cado Security components:

- `compute.disks.create` - Create new persistent disks.
- `compute.instances.attachDisk`
- `compute.images.useReadOnly` - Use images to create instances (read-only).
- `compute.instances.create`
- `compute.addresses.use` - Use static or ephemeral IP addresses in a project.
- `compute.instances.detachDisk`
- `compute.instances.deleteAccessConfig`
- `compute.zoneOperations.get` - View zone-specific operation status.
- `compute.subnetworks.useExternalIp` - Assign external IPs from a subnetwork.

### Secret Management Permissions

Needed for managing secrets in Secret Manager:

- `secretmanager.secrets.create`
- `secretmanager.versions.access`
- `secretmanager.versions.add`

### Acquisition Permissions

Permissions for acquiring resources and data within GCP:

- `resourcemanager.projects.get` - View metadata and configuration of a GCP project.

#### Instance Acquisition

Required for interacting with compute instances:

- `cloudbuild.builds.get` - View details of a specific build.
- `cloudbuild.builds.create` - Start a new build using Cloud Build.
- `compute.disks.get` - View details of a specific disk.
- `compute.disks.use` - Attach and use disks with read/write access.
- `compute.disks.list` - List all disks in a project or zone.
- `compute.disks.useReadOnly` - Attach and use disks with read-only access.
- `compute.globalOperations.get` - View global operation status.
- `compute.images.create` - Create custom images from disks or snapshots.
- `compute.instances.get` - View details of a specific instance.
- `compute.instances.list` - List all VM instances.
- `compute.images.delete` - Delete VM image
- `compute.images.get` - View details of a specific image.
- `compute.instances.getSerialPortOutput`
- `compute.projects.get` - View project-level metadata and settings.

#### GKE Acquisition

Permissions related to Google Kubernetes Engine (GKE) clusters:

- `container.clusters.get` - View details of a specific GKE cluster.
- `container.clusters.list` - List all GKE clusters in a project.
- `container.pods.exec` - Execute commands inside a running pod (e.g., kubectl exec).
- `container.pods.get` - View details of a specific pod.
- `container.pods.list` - List all pods in a namespace or cluster.



___



Adjusting Settings
compute.machineTypes.get – View details of a specific machine type.
compute.machineTypes.list – List all available machine types.
compute.regions.get – View metadata about a specific region.
Upgrade Permissions
compute.instances.attachDisk – Attach an existing disk to a VM.
compute.instances.detachDisk – Detach a disk from a VM.
compute.instances.deleteAccessConfig – Remove an access configuration (e.g., external IP) from a network interface.
compute.zoneOperations.get – View the status of operations in a specific zone.
compute.subnetworks.useExternalIp – Use external IPs from a subnetwork.
Secret Management Permissions
secretmanager.secrets.create – Create a new secret in Secret Manager.
secretmanager.versions.access – Access a specific version of a secret.
secretmanager.versions.add – Add a new version to an existing secret.
Instance Acquisition
compute.instances.getSerialPortOutput – Read the serial port output from a VM instance.
