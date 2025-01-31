---
title: Secret Manager
hide_title: true
sidebar_position: 9
---

# Secret Manager

The initial minimal deployment stores the key used to encrypt secrets in Cado locally on the machine. Enabling a Secret Manager allows Cado to instead store the key in Azure Key Vault.

### Prerequisites

  - Ability to create a Key Vault
  - Ability to update Role Assignments

### Steps

1. In the resource group click Create and search for “**Key Vault**” and select “**Key Vault**”
2. Add a Key vault name
3. Set Access Configuration to “**Vault access policy**”
4. On “**Access policies**” search for “**cado-identity**” and select. Confirm the Client ID is the correct one.

![Secret Manager](/img/secret-manager.png)

5. Go to the created resource. Copy the “**Vault URI**”
6. Enable in the UI: **Settings** > **Advanced** > **Secret Management** 
7. Enter the “**Vault URI**” from step 5 and click **Turn On Secrets Manager**