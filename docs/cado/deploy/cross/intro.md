---
title: Overview
hide_title: true
sidebar_position: 1
---
# How do cross cloud imports work in Cado?

Cado allows you to import data across different cloud environments, meaning that you can deploy Cado in one cloud (AWS, Azure, or Google Cloud) and import data from another. This is referred to as **cross-cloud** importing.

In a cross-cloud setup, Cado can seamlessly acquire data from cloud environments other than where the platform is deployed, enabling flexible and comprehensive data collection across multiple cloud providers.

![Cross-Cloud Collection](/img/cross-cloud.png)

## Next Steps in AWS

Cado supports multiple methods for configuring cross-account access in AWS:

- **AWS Organizations Integration (Reccomended)**
  - [Using AWS Organizations](https://docs.cadosecurity.com/cado/deploy/cross/aws-organizations)

- **Manual Setup**
  - [Creating cross-account roles manually](https://docs.cadosecurity.com/cado/deploy/cross/cross-account-creation)
  - [Adding cross-account roles manually](https://docs.cadosecurity.com/cado/deploy/cross/add-cross-account-manual)

- **Automated Setup**
  - [Automated cross-account role creation](https://docs.cadosecurity.com/cado/deploy/cross/cross-account-creation-auto)

- **API-Based Setup**
  - [Cross-account role creation via API]( https://docs.cadosecurity.com/cado/deploy/cross/cross-account-creation-api)


- **Additional AWS Configuration**
  - [Adding AWS accounts](https://docs.cadosecurity.com/cado/deploy/cross/adding-aws)
  - [Adding AWS access keys](https://docs.cadosecurity.com/cado/deploy/cross/adding-keys)
  - [Using AWS STS](https://docs.cadosecurity.com/cado/deploy/cross/aws-sts)
  - [Skip role configuration](https://docs.cadosecurity.com/cado/deploy/cross/skip-role)

## Next Steps in Azure

Cado supports cross-tenancy investigations in Azure:

- [Adding Azure tenants](https://docs.cadosecurity.com/cado/deploy/cross/adding-azure)
- [Cross-tenancy subscription access](https://docs.cadosecurity.com/cado/deploy/cross/azure-cross-tenancy-subscriptions)

## Next Steps in GCP

Cado enables investigations across multiple GCP projects:

- [Adding GCP projects](https://docs.cadosecurity.com/cado/deploy/cross/adding-gcp)

## Comparison: Cross-Account vs Individual Account Setup

Understand the differences between centralized cross-account configurations and individual account setups:

- [Cross-account vs individual account deployment](https://docs.cadosecurity.com/cado/deploy/cross/cross_vs_individual)

## Diagrams

Below are diagrams showing how cross-cloud imports work for each cloud provider:

### AWS
![AWS Cross-Cloud Imports](/img/aws-network.png)

### Azure
![Azure Imports](/img/azure-imports.png)
![Azure Cross-Cloud Imports](/img/azure-cross.png)

### Google Cloud
![Google Cloud Imports](/img/gcp-imports.png)
