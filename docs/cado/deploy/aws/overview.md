---
title: AWS Deployment Overview
hide_title: true
sidebar_position: 0
---

# AWS Deployment Overview

/ Forensic Acquisition and Investigation provides flexible deployment options for AWS, allowing organizations to tailor their setup based on operational needs and security requirements. Whether you're looking for a quick start or a full-scale deployment with advanced processing capabilities, / Forensic Acquisition and Investigation supports multiple methods to get you up and running.

At its core, a / Forensic Acquisition and Investigation deployment in AWS consists of:

- **Infrastructure**: A core virtual machine that runs the platform.
- **Permissions**: IAM roles to manage the main VM and optionally start worker VMs.
- **Cross-account access**: Roles to import data from other AWS accounts or cloud providers.

Architecture diagrams and permission requirements are available to guide secure and compliant deployments.

---

## Next Steps

| Goal | Method | Description |
|------|--------|-------------|
| **Deploy / Forensic Acquisition and Investigation with full capabilities** | [CloudFormation Template](https://docs.cadosecurity.com/cado/deploy/aws/cloudformation) | Use / Forensic Acquisition and Investigation CloudFormation template to deploy a full-featured platform with support for worker VMs and large-scale imports. |
| **Quickly deploy / Forensic Acquisition and Investigation with simple setup** | [Simple Deployment](https://docs.cadosecurity.com/cado/deploy/aws/aws_quick_deployment) | Launch a basic / Forensic Acquisition and Investigation instance directly from the AWS Console with minimal permissions. Ideal for restricted environments. |
| **Deploy using infrastructure-as-code** | [Terraform](https://docs.cadosecurity.com/cado/deploy/aws/terraform) | Automate deployment using Terraform scripts. Supported across AWS, Azure, and GCP. |
| **Understand architecture and security features** | [Architecture Overview](https://docs.cadosecurity.com/cado/deploy/aws/architecture) | Learn how / Forensic Acquisition and Investigation creates an isolated VPC and supports private deployments with proxy inspection. |
| **Review supported configurations** | [Supported Deployment Configurations](https://docs.cadosecurity.com/cado/deploy/supported) | Ensure your IAM and network setup aligns with / Forensic Acquisition and Investigation supported configurations to avoid import failures. |

---

## Deployment Options

### Simple Deployment
- **Purpose**: Fast setup with minimal permissions.
- **Use Case**: Highly restricted environments.
- **Availability**: AWS Console.

### Full Deployment
- **Purpose**: Enables worker VMs for faster processing and large system imports.
- **Use Case**: Production environments with higher performance needs.
- **Availability**: CloudFormation or Terraform.

---

## Permissions and Security

/ Forensic Acquisition and Investigation deployments require specific IAM roles and permissions to operate securely and effectively. These include:

- Permissions to manage the core VM.
- Permissions to start worker VMs (if applicable).
- Cross-account roles for importing data.

Private deployments with no internet access and proxy inspection are supported for environments with strict security requirements.
