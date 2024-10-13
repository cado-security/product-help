---
title: Azure credentials
hide_title: true
sidebar_position: 4
---

:::warning
We now recommend using the automatically generated temporary credentials from Cado. For more details, see our documentation **[here](deploy#deploy-through-cado-response-platform)**.
:::

# How to Create Secure Azure Credentials

To securely write to Azure, you will need to create a limited-access key called a Shared Access Signature (SAS).

<iframe width="100%" height="628" src="https://www.youtube.com/embed/FQoAnYVPRLo" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

## Step 1: Create Blob Storage

If you haven’t already, follow this guide to **[Create a Blob storage container](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)** in Azure to store your data.

## Step 2: Generate a Shared Access Signature (SAS)

1. Go to your Azure **Storage Account**.
2. Click on **Shared Access Signature** to generate credentials for writing to the storage containers.
3. Uncheck permissions for **Read**, **List**, and **Delete** to restrict access, and then click **Generate SAS**.

## Step 3: Generate a Shared Access Signature Using Azure Storage Explorer

You can also generate a Shared Access Signature using **[Azure Storage Explorer](https://azure.microsoft.com/en-us/features/storage-explorer/)**:

1. Right-click the blob container you want to use and select **Get Shared Access Signature**.
2. Specify the time period for which the credentials will be valid, and untick all permissions except for **Write**.
3. Click **Next** and copy the **Query String**, which will be used for authentication.

## Ready to Go

When you're ready for the imaging process, you should have:

1. The **Account Name** (the account that owns the container where the access signature was generated).
2. The **Container Name** (where the data will be stored).
3. The **Generated Access Signature** (the query string used for authentication).

:::warning
Keep this information safe, as you would with a sensitive password. Once access is no longer needed, we recommend revoking the credentials.
:::

:::tip
For additional security, we recommend setting up **IP whitelisting** for containers where possible. Ensure that **read** and **list** permissions are never granted, which prevents unauthorized access if the SAS token is exposed.
:::