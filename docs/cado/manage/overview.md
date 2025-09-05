---
title: Manage Overview
hide_title: true
sidebar_position: 0
---
# Manage Overview

### Roles, users & groups
Cado uses role‑based access control (RBAC) to ensure people only see and do what they’re permitted to. Built‑in roles include **Administrator**, **Platform Administrator**, **Lead Analyst**, **Analyst**, and **Read‑only Analyst**. You can manage **users** and **groups** (including mapping to your SSO groups) to control access to investigations and cloud accounts. 

### Single Sign‑On (SSO)
Cado supports SSO with **Azure AD**, **Okta OAuth**, and **Okta SAML**. When SSO is configured, user accounts are created automatically on first login, and you can map groups (e.g., an admin group) to control the initial role. 

### Updating the platform
From **Settings → Updates**, you can view your current version and initiate an update. Default update mechanisms require outbound connectivity. Terraform users can specify new images and apply updates via IaC. 

### Worker management
Configure **maximum workers**, **worker instance size**, **processing speed**, and **shutdown wait** to balance throughput, depth, and cost. Defaults and instance types differ by cloud; choose storage‑optimized instances where appropriate. 

### Monitoring & health
Track platform health and responsiveness (e.g., API round‑trip times) to maintain performance and uptime targets. 

### Data lifecycle & storage
Because Cado is deployed into your cloud, you control data lifecycle and access using your provider’s native controls (e.g., S3 Lifecycle/Locks, Azure Blob lifecycle policies, GCS Object Lifecycle).

---

## Next steps

| Goal | Page | Description |
|---|---|---|
| Define who can do what | [Manage users & roles](https://docs.cadosecurity.com/cado/manage/users-authentication/users) | Create users, manage groups, and apply RBAC to control access to investigations, data, and settings.  |
| Enable enterprise SSO (Azure) | [Azure AD SSO](https://docs.cadosecurity.com/cado/manage/users-authentication/sso/azure-ad) | Configure Azure AD for centralized authentication and initial role mapping.  |
| Enable enterprise SSO (Okta OAuth) | [Okta OAuth](https://docs.cadosecurity.com/cado/manage/users-authentication/sso/okta) | Set up Okta OIDC, configure redirect URIs, and map admin/non‑admin groups.  |
| Enable enterprise SSO (Okta SAML) | [Okta SAML](https://docs.cadosecurity.com/cado/manage/users-authentication/sso/okta_saml) | Configure an Okta SAML app and limit access via groups (e.g., admin groups).  |
| Keep Cado up to date | [Updating](https://docs.cadosecurity.com/cado/manage/updating) | Update via UI or Terraform; understand connectivity needs and image/AMI options.  |
| Tune processing performance | [Worker management](https://docs.cadosecurity.com/cado/manage/workers) | Adjust max workers, instance sizes, and processing depth to balance speed vs. fidelity.  |
| Monitor platform health | [Monitoring](https://docs.cadosecurity.com/cado/manage/monitoring) | Check status and response times to maintain reliability.  |
| Govern data lifecycle | [Manage data](https://docs.cadosecurity.com/cado/manage/data) | Apply cloud‑native lifecycle policies and control access to sensitive data.  |
| Add storage capacity (AWS) | [Expand disk in AWS](https://docs.cadosecurity.com/cado/manage/expand-disk) | Safely increase the data volume size and extend the filesystem after resizing.  |
