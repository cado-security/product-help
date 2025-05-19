---
title: Overview
hide_title: true
sidebar_position: 5
---

# Deployment Overview

## What does a Cado deployment consist of?
At it’s core, a Cado deployment consists of:
- Infrastructure - A core virtual machine that permanently runs
- Cado account/subscription/project role - Permissions to manage the main virtual machine, and start worker virtual machines if used.
- Cross-account role - Permissions to copy data into the main account.
Architecture diagrams are available for [AWS](/cado/deploy/aws/architecture), [Azure](/cado/deploy/azure/azure-architecture) and [GCP](/cado/deploy/gcp/gcp-architecture).

## What deployment options are available?
A “minimal” deployment involves starting a virtual machine with only the minimal permissions required to operate. This may be simpler in highly restricted environments. This is available in [AWS](/cado/deploy/aws/aws_quick_deployment), [Azure](/cado/deploy/azure/azure-quickstart-deployment) and [GCP](/cado/deploy/gcp/gcp-quickstart-deployment-guide).

A full deployment enables the ability to utilize workers for faster processing and importing large systems. This is available in Cloudformation in [AWS](/cado/deploy/aws/cloudformation), and Terraform in [AWS](/cado/deploy/aws/terraform), [Azure](/cado/deploy/azure/azure-deploy) and [GCP](/cado/deploy/gcp/gcp-deploy).

## What permissions are required?
Descriptions of required permissions are available for [AWS](/cado/deploy/aws/iam/iam-description), [Azure](/cado/deploy/azure/iam-description) and [GCP](/cado/deploy/gcp/iam-description).

## How to import from other accounts and cloud providers?
Permissions are required to copy data from other accounts and cloud providers in [AWS](/cado/deploy/cross/cross-account-creation), [Azure](/cado/deploy/cross/azure-cross-tenancy-subscriptions#setting-up-an-app-registration-for-cross-tenancysubscription-acquisitions) and [GCP](/cado/deploy/cross/adding-gcp).
