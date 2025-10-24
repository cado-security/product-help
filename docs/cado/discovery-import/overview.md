---
title: Import Overview
hide_title: true
sidebar_position: 0
---

# Import Overview

The / Forensic Acquisition and Investigation platform provides multiple ways to bring evidence into an **Investigation**—from cloud services and Kubernetes to endpoint triage and third‑party images—and will automatically process it according to your Processing Settings.

This section helps you choose the right import method for your use case, understand prerequisites, and jump straight to the how‑to guides.

## Next steps

| Goal | Page | Description |
|---|---|---|
| Understand the import UI and flow | [Import data](https://docs.cadosecurity.com/cado/discovery-import/intro) | Overview of import options and automatic processing behavior. |
| Import from any cloud account | [Import from cloud](https://docs.cadosecurity.com/cado/discovery-import/import-from-cloud) | Choose a Cloud Role, filter by provider, and import multiple resources. |
| Acquire AWS EC2/EBS | [AWS: EC2 & EBS](https://docs.cadosecurity.com/cado/discovery-import/aws/aws-ec2) | Full volume or triage via SSM |
| Handle very large EC2 volumes | [AWS: Large EC2 imports](https://docs.cadosecurity.com/cado/discovery-import/aws/large-aws-imports) | Tips for large disks. |
| Import from Amazon S3 | [AWS: S3](https://docs.cadosecurity.com/cado/discovery-import/aws/aws-s3) | Upload/import disk images or archives from S3. |
| AWS containers | [AWS: ECS](https://docs.cadosecurity.com/cado/discovery-import/aws/aws-ecs) | Acquire container artifacts/logs from ECS. |
| Import Azure VMs | [Azure: Compute](https://docs.cadosecurity.com/cado/discovery-import/azure/azure-compute) | Select subscription/resources and start imports for Azure VMs. |
| Import from Azure Blob Storage | [Azure: Storage](https://docs.cadosecurity.com/cado/discovery-import/azure/azure-storage) | Upload/import using Azure Console, SAS tokens, or Access Keys. |
| Azure Kubernetes | [AKS](https://docs.cadosecurity.com/cado/discovery-import/azure/azure-aks) | Guided container import for AKS. |
| Import GCP instances | [GCP: Compute Engine](https://docs.cadosecurity.com/cado/discovery-import/gcp/engine-instance) | Guided import for Google Compute Engine VMs. |
| Import from GCP Storage | [GCP: Cloud Storage](https://docs.cadosecurity.com/cado/discovery-import/gcp/storage) | Upload via Console or OAuth 2.0 desktop tools. |
| Container acquisitions (generic) | [Kubernetes](https://docs.cadosecurity.com/cado/discovery-import/kubernetes) | Control‑plane acquisition, RBAC requirements, and sidecar/debug flows. |
| Google Kubernetes | [GKE](https://docs.cadosecurity.com/cado/discovery-import/gcp/kubernetes-engine) | Guided container import for GKE. |
| Triage with / Forensic Acquisition and Investigation Host | [What is Cado Host](https://docs.cadosecurity.com/cado/discovery-import/cado-host/intro) | Overview of endpoint triage collections and upload targets. |
| Deploy / Forensic Acquisition and Investigation Host | [Deploy Cado Host](https://docs.cadosecurity.com/cado/discovery-import/cado-host/deploy) | Launch from the UI or run standalone. |
| See collected items | [Collected artifacts](https://docs.cadosecurity.com/cado/discovery-import/cado-host/artifacts) | Default artifacts by OS and customization options. |
| Import other tool outputs | [Third‑party disk images & triage](https://docs.cadosecurity.com/cado/discovery-import/third-party) | Work with traditional forensic capture tools. |
| Automate after alerts | [Automating collection from detections](https://docs.cadosecurity.com/cado/discovery-import/automation) | Defender/CrowdStrike/GuardDuty/Wiz flows and response actions. |
| Integrate programmatically | [API overview](https://docs.cadosecurity.com/cado/integrations/api-overview) | Use the Cado API and webhooks/SOAR for imports and more. |
| Manage Investigations | [Managing investigations](https://docs.cadosecurity.com/cado/discovery-import/investigations) | Create/update, view processing pipeline, and housekeeping. |
| Verify provenance | [Chain of custody](https://docs.cadosecurity.com/cado/discovery-import/chain_of_custody) | Where to find evidence metadata and audit logs. |
