---
title: Overview
hide_title: true
sidebar_position: 0
---

# Overview

Cado provides flexible deployment options for **Microsoft Azure**, enabling you to start quickly or roll out a full-scale deployment with advanced processing capabilities.

At its core, a Cado deployment in Azure consists of:

- **Infrastructure:** A core virtual machine that runs the Cado platform within your Azure subscription.
- **Permissions:** Azure [RBAC permissions](https://docs.cadosecurity.com/cado/deploy/azure/iam-description) (e.g., Contributor on the Cado resource group) to manage the main VM and, in full deployments, launch worker VMs.
- **Cross-subscription/tenant access:** An [Azure App Registration](https://docs.cadosecurity.com/cado/deploy/cross/adding-azure) used to import data from other Azure subscriptions or tenants.

---

## Next Steps

| Goal | Method | Description | Link |
|---|---|---|---|
| **Deploy Cado with full capabilities** | **Terraform Module** | Use Cado’s Terraform to deploy a full-featured platform (including support for worker VMs for faster processing and large imports). | [Azure Terraform deployment](https://docs.cadosecurity.com/cado/deploy/azure/azure-deploy) |
| **Quickly deploy Cado with minimal setup** | **Minimal (Portal) Deployment** | Launch a basic Cado instance directly from the Azure Portal using the Cado Community Images—ideal for restricted environments or quick evaluations. | [Minimal Deployment Guide](https://docs.cadosecurity.com/cado/deploy/azure/azure-quickstart-deployment) |
| **Understand architecture & networking** | **Architecture Overview** | Review how the platform is deployed in its own isolated network and the options available for private access. | [Architecture in Azure](https://docs.cadosecurity.com/cado/deploy/azure/azure-architecture) |
| **Configure cross-subscription/tenant imports** | **App Registration** | Register an application in the target subscription/tenant and add it to Cado to enable acquisitions across subscriptions/tenants. | [Adding Azure subscriptions](https://docs.cadosecurity.com/cado/deploy/cross/adding-azure) |
| **Review supported configurations** | **Supported Deployment Configurations** | Ensure your IAM and network setup aligns with Cado’s supported configurations to avoid import failures. | [Supported Configurations](https://docs.cadosecurity.com/cado/deploy/supported) |

---

## Deployment Options

### Minimal Deployment
- **Purpose:** Fast setup with minimal permissions.
- **Use Case:** Highly restricted environments or quick proofs-of-concept. 
- **Availability:** Azure Portal via Cado Community Images.

### Full Deployment
- **Purpose:** Enables worker VMs for faster processing and large system imports.
- **Use Case:** Production environments with higher performance needs.
- **Availability:** Terraform for Azure.

---

## Permissions and Security

Cado in Azure relies on [Azure RBAC](https://docs.cadosecurity.com/cado/deploy/azure/iam-description) to provision and operate platform resources. At minimum, **Contributor** permissions on the Cado resource group and **Storage Account Contributor** are required to deploy the platform, with optional broader permissions (e.g., VM/Disk roles) if you plan to run acquisitions locally within the same subscription.

For cross-subscription/tenant acquisitions, register an [Azure App Registration](https://docs.cadosecurity.com/cado/deploy/cross/adding-azure) in the target subscription/tenant and supply its details to Cado. This enables controlled access to data sources outside the deployment subscription.

Organizations that need tighter control can replace broad roles with [scoped custom roles](https://docs.cadosecurity.com/cado/deploy/azure/azure-scoping) that grant only the specific actions required for storage, compute, and activity log acquisitions.

Cado’s Azure [architecture](https://docs.cadosecurity.com/cado/deploy/azure/azure-architecture) can be deployed into an **isolated virtual network**, with options to support private access patterns as needed. Deployments can typically be brought online in under ~25 minutes.
