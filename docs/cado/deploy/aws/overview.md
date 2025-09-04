---
title: Overview
hide_title: true
sidebar_position: 0
---

# Overview

Cado provides flexible deployment options for AWS, allowing organizations to tailor their setup based on operational needs and security requirements. Whether you're looking for a quick start or a full-scale deployment with advanced processing capabilities, Cado supports multiple methods to get you up and running.

At its core, a Cado deployment in AWS consists of:

- **Infrastructure**: A core virtual machine that runs the Cado platform.
- **Permissions**: IAM roles to manage the main VM and optionally start worker VMs.
- **Cross-account access**: Roles to import data from other AWS accounts or cloud providers.
- **Deployment templates**: Available via CloudFormation or Terraform.

Architecture diagrams and permission requirements are available to guide secure and compliant deployments.

---

## Next Steps

| Goal | Method | Description |
|------|--------|-------------|
| **Deploy Cado with full capabilities** | [CloudFormation Template](https://docs.cadosecurity.com/cado/deploy/aws/cloudformation) | Use Cado’s CloudFormation template to deploy a full-featured platform with support for worker VMs and large-scale imports. |
| **Quickly deploy Cado with minimal setup** | [Minimal Deployment](https://docs.cadosecurity.com/cado/deploy/aws/aws_quick_deployment) | Launch a basic Cado instance directly from the AWS Console with minimal permissions. Ideal for restricted environments. |
| **Deploy using infrastructure-as-code** | [Terraform](https://docs.cadosecurity.com/cado/deploy/aws/terraform) | Automate deployment using Terraform scripts. Supported across AWS, Azure, and GCP. |
| **Understand architecture and security features** | [Architecture Overview](https://docs.cadosecurity.com/cado/deploy/aws/architecture) | Learn how Cado creates an isolated VPC and supports private deployments with proxy inspection. |
| **Review supported configurations** | [Supported Deployment Configurations](https://docs.cadosecurity.com/cado/deploy/supported) | Ensure your IAM and network setup aligns with Cado’s supported configurations to avoid import failures. |

---

## Deployment Options

### Minimal Deployment
- **Purpose**: Fast setup with minimal permissions.
- **Use Case**: Highly restricted environments.
- **Availability**: AWS Console.

### Full Deployment
- **Purpose**: Enables worker VMs for faster processing and large system imports.
- **Use Case**: Production environments with higher performance needs.
- **Availability**: CloudFormation or Terraform.

---

## Permissions and Security

Cado deployments require specific IAM roles and permissions to operate securely and effectively. These include:

- Permissions to manage the core VM.
- Permissions to start worker VMs (if applicable).
- Cross-account roles for importing data.

Private deployments with no internet access and proxy inspection are supported for environments with strict security requirements.