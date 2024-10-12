---
title: Adding Google Projects to Azure/AWS
hide_title: true
sidebar_position: 4
---

# How to add Google Cloud Projects to Azure or AWS

:::warning
Make sure GCP service account credentials are enabled from the Google Cloud console before proceeding.
:::

To enable cross-cloud access from GCP, you need to designate a primary GCP project where evidence will be stored and managed. A service account within this primary project coordinates IAM access to allow Cado to import evidence from other GCP projects. You will need permission to create IAM roles and service accounts.

### Steps to Add a GCP Project

1. **Sign In to Your Primary GCP Project**  
   Start by logging into the GCP project that you will designate as the primary project for storing evidence.

2. **Enable the Cloud Build API**  
   If it is not already enabled, activate the [Cloud Build API](https://console.cloud.google.com/cloud-build/) in your primary project.

3. **Create a GCS Bucket for Evidence Storage**  
   Set up a new [Google Cloud Storage (GCS) bucket](https://cloud.google.com/storage/docs/creating-buckets) to store evidence collected by Cado. You will select this bucket during the import process in the Cado interface.

4. **Create a Cado IAM Role**  
   Create a new Cado IAM role with the required permissions. The permissions are listed in the Cado documentation [here](/cado/deploy/gcp/gcp-settings#creating-a-cado-role).  
   This role can be created at the organization level to provide access to multiple projects using one service account.

5. **Assign the IAM Role to the Compute Engine Principal**  
   As of June 2024, due to changes in GCP, you need to assign the new Cado IAM role to the Compute Engine principal instead of the Cloud Build principal.  
   - Go to **IAM and Admin** > **IAM** in the Google Cloud Console.  
   - Locate the principal with a format like `xxxxxxxxxxxx-compute@developer.gserviceaccount.com`.  
   - Edit this principal to grant it the permissions for the new Cado IAM role.  
   - Note down the principal name, as it will be used to configure access to other GCP projects.

6. **Create a New Service Account**  
   Follow these [Google instructions](https://cloud.google.com/iam/docs/service-accounts-create) to create a new service account in the primary GCP project.

7. **Assign the Cado IAM Role to the Service Account**  
   Assign the newly created Cado IAM role to the service account by following [these Google instructions](https://cloud.google.com/iam/docs/create-service-agents#grant-roles).

8. **Assign Additional Permissions for GKE Clusters (Optional)**  
   If you will be importing data from GKE clusters, make sure the service account also has the `iam.serviceAccounts.implicitDelegation` permission.

9. **Create Service Account Credentials in Cado**  
   Follow the Cado documentation to generate and enter service account credentials into the Cado platform. Detailed steps are available [here](/cado/deploy/gcp/gcp-settings#getting-gcp-credentials) and [here](/cado/deploy/gcp/gcp-settings#entering-settings).

10. **Grant Access to Other GCP Projects**  
    To allow Cado to collect evidence from additional GCP projects, follow the [Cado documentation](/cado/deploy/gcp/gcp-cross-project) for setting up access to each additional project.

### Required APIs to Enable

Ensure the following **APIs** are enabled in your primary GCP project. You can enable them from the [Google Cloud Console](https://console.cloud.google.com/apis/library):

- **[Compute Engine API](https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com)**  
- **[Cloud Build API](https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com)**  
- **[Cloud Filestore API](https://console.cloud.google.com/marketplace/product/google/file.googleapis.com)**  
- **[Secret Manager API](https://console.cloud.google.com/marketplace/product/google/secretmanager.googleapis.com)**  
- **[Cloud Resource Manager API](https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com)**  
- **[IAM Service Account Credentials API](https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com)**  
- **[Cloud Storage API](https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com)**
