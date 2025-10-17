---
title: Azure Deployment Overview
hide_title: true
sidebar_position: 0
---

# Azure Deployment Overview

/ Forensic Acquisition and Investigation provides flexible deployment options for **Microsoft Azure**, enabling you to start quickly or roll out a full-scale deployment with advanced processing capabilities.

At its core, a / Forensic Acquisition and Investigation deployment in Azure consists of:

- **Infrastructure:** A core virtual machine that runs the platform within your Azure subscription.
- **Permissions:** Azure [RBAC permissions](https://docs.cadosecurity.com/cado/deploy/azure/iam-description) (e.g., Contributor on the / Forensic Acquisition and Investigation resource group) to manage the main VM and, in full deployments, launch worker VMs.
- **Cross-subscription/tenant access:** An [Azure App Registration](https://docs.cadosecurity.com/cado/deploy/cross/adding-azure) used to import data from other Azure subscriptions or tenants.

---

## Next Steps

| Goal | Method | Description | Link |
|---|---|---|---|
| **Deploy / Forensic Acquisition and Investigation with full capabilities** | **Terraform Module** | Use / Forensic Acquisition and Investigation Terraform to deploy a full-featured platform (including support for worker VMs for faster processing and large imports). | [Azure Terraform deployment](https://docs.cadosecurity.com/cado/deploy/azure/azure-deploy) |
| **Quickly deploy / Forensic Acquisition and Investigation with minimal setup** | **Minimal (Portal) Deployment** | Launch a basic / Forensic Acquisition and Investigation instance directly from the Azure Portal using the / Forensic Acquisition and Investigation Community Images—ideal for restricted environments or quick evaluations. | [Minimal Deployment Guide](https://docs.cadosecurity.com/cado/deploy/azure/azure-quickstart-deployment) |
| **Understand architecture & networking** | **Architecture Overview** | Review how the platform is deployed in its own isolated network and the options available for private access. | [Architecture in Azure](https://docs.cadosecurity.com/cado/deploy/azure/azure-architecture) |
| **Configure cross-subscription/tenant imports** | **App Registration** | Register an application in the target subscription/tenant and add it to / Forensic Acquisition and Investigation to enable acquisitions across subscriptions/tenants. | [Adding Azure subscriptions](https://docs.cadosecurity.com/cado/deploy/cross/adding-azure) |
| **Review supported configurations** | **Supported Deployment Configurations** | Ensure your IAM and network setup aligns with / Forensic Acquisition and Investigation supported configurations to avoid import failures. | [Supported Configurations](https://docs.cadosecurity.com/cado/deploy/supported) |

---

## Deployment Options

### Minimal Deployment
- **Purpose:** Fast setup with minimal permissions.
- **Use Case:** Highly restricted environments or quick proofs-of-concept. 
- **Availability:** Azure Portal via / Forensic Acquisition and Investigation Community Images.

### Full Deployment
- **Purpose:** Enables worker VMs for faster processing and large system imports.
- **Use Case:** Production environments with higher performance needs.
- **Availability:** Terraform for Azure.

---

## Permissions and Security

/ Forensic Acquisition and Investigation in Azure relies on [Azure RBAC](https://docs.cadosecurity.com/cado/deploy/azure/iam-description) to provision and operate platform resources. At minimum, **Contributor** permissions on the / Forensic Acquisition and Investigation resource group and **Storage Account Contributor** are required to deploy the platform, with optional broader permissions (e.g., VM/Disk roles) if you plan to run acquisitions locally within the same subscription.

For cross-subscription/tenant acquisitions, register an [Azure App Registration](https://docs.cadosecurity.com/cado/deploy/cross/adding-azure) in the target subscription/tenant and supply its details to / Forensic Acquisition and Investigation. This enables controlled access to data sources outside the deployment subscription.

Organizations that need tighter control can replace broad roles with [scoped custom roles](https://docs.cadosecurity.com/cado/deploy/azure/azure-scoping) that grant only the specific actions required for storage, compute, and activity log acquisitions.

/ Forensic Acquisition and Investigation Azure [architecture](https://docs.cadosecurity.com/cado/deploy/azure/azure-architecture) can be deployed into an **isolated virtual network**, with options to support private access patterns as needed. Deployments can typically be brought online in under ~25 minutes.
