---
title: GCP Deployment Overview
hide_title: true
sidebar_position: 0
---

# GCP Deployment Overview

/ Forensic Acquisition and Investigation provides flexible deployment options for Google Cloud Platform (GCP), allowing organizations to tailor their setup based on operational needs and security requirements. Whether you're looking for a quick start or a full-scale deployment with advanced processing capabilities, Cado supports multiple methods to get you up and running.

## What does a / Forensic Acquisition and Investigation deployment in GCP consist of?

At its core, a deployment in GCP consists of:

- **Infrastructure**: A core virtual machine that runs the platform.
- **Permissions**: IAM roles to manage the main VM and optionally start worker VMs.
- **Cross-project access**: Roles to import data from other GCP projects or cloud providers.

[Architecture diagrams](https://docs.cadosecurity.com/cado/deploy/gcp/gcp-architecture) and [permission requirements](https://docs.cadosecurity.com/cado/deploy/gcp/iam-description) are available to guide secure and compliant deployments.

## Deployment Options

### Minimal Deployment
- **Purpose**: Fast setup with minimal permissions.
- **Use Case**: Highly restricted environments.
- **Availability**: Terraform-based quickstart guide.
- [Minimal Deployment Guide](https://docs.cadosecurity.com/cado/deploy/gcp/gcp-quickstart-deployment-guide)

### Full Deployment
- **Purpose**: Enables worker VMs for faster processing and large system imports.
- **Use Case**: Production environments with higher performance needs.
- **Availability**: Terraform-based full deployment.
- [Full Deployment Guide](https://docs.cadosecurity.com/cado/deploy/gcp/gcp-deploy)

## Permissions and Security

Deployments require specific IAM roles and permissions to operate securely and effectively. These include:
- Permissions to manage the core VM.
- Permissions to start worker VMs (if applicable).
- Cross-project roles for importing data.
- Access to services such as Cloud Storage, Secret Manager, Filestore, and IAM.

Refer to the [IAM Permissions Description](https://docs.cadosecurity.com/cado/deploy/gcp/iam-description) for full details.

---

## Next Steps

| **Goal**                                | **Method**                     | **Description**                                                                 | **Link**                                                                 |
|----------------------------------------|--------------------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Deploy / Forensic Acquisition and Investigation with full capabilities     | Full Terraform Deployment      | Use / Forensic Acquisition and Investigation Terraform script to deploy a full-featured platform with worker VMs. | [Full Deployment Guide](https://docs.cadosecurity.com/cado/deploy/gcp/gcp-deploy) |
| Quickly deploy / Forensic Acquisition and Investigation with minimal setup | Quickstart Terraform Guide     | Launch a basic instance with minimal permissions.                          | [Quickstart Guide](https://docs.cadosecurity.com/cado/deploy/gcp/gcp-quickstart-deployment-guide) |
| Automate environment setup             | GCP Setup Scripts              | Use automation scripts to configure your GCP environment for / Forensic Acquisition and Investigation.              | [Auto Setup](https://docs.cadosecurity.com/cado/deploy/gcp/gcp-auto-setup) |
| Understand architecture and security   | Architecture & IAM Overview    | Learn how / Forensic Acquisition and Investigation creates an isolated network and what permissions are required.   | [Architecture](https://docs.cadosecurity.com/cado/deploy/gcp/gcp-architecture) / [IAM Description](https://docs.cadosecurity.com/cado/deploy/gcp/iam-description) |
| Enable cross-project access            | Cross-Project Configuration    | Configure roles and permissions to import data from other GCP projects.         | [Cross-Project Setup](https://docs.cadosecurity.com/cado/deploy/gcp/gcp-settings) |
