---
title: Adding Google Projects to Azure/AWS
hide_title: true
sidebar_position: 4
---

# How to add Google Projects to Azure/AWS

:::warning
Make sure the GCP service account credentials are enabled from the Google Cloud console.
:::

Cross-cloud access of GCP is performed by designating a primary GCP project where evidence will be stored before being captured by Cado using a service account. This primary project also coordinates IAM access so that Cado can import evidence from your other GCP projects. Access is given to the service account in the primary project to each GCP project you would like Cado to collect evidence from. Note: you will need permission to create IAM roles and service accounts.

* Sign in to the GCP project which you are designating your primary project
* Enable the [Cloud Build API](https://console.cloud.google.com/cloud-build/) if it is not already activated
* Create a new [GCS bucket](https://cloud.google.com/storage/docs/creating-buckets) for storing evidence collected by Cado. This bucket will be selected during the import process in the Cado interface. 
* Create a new Cado IAM role with the [permissions listed here](/cado-response/deploy/gcp/gcp-settings#creating-a-cado-role.).
This role can be [created](https://cloud.google.com/iam/docs/creating-custom-roles#creating) at the organization level to give access to multiple projects under one service account.
* Assign the new Cado IAM role to the Compute Engine principal - note that as of June 2024 the Compute Engine principal needs to be updated instead of the Cloud Build prinicpal due [to changes in GCP](https://cloud.google.com/build/docs/cloud-build-service-account-updates) Go to IAM and Admin -> IAM and locate the principle which looks like xxxxxxxxxxxx-compute@developer.gserviceaccount.com. Edit this principle to give it permission to the new Cado role. Take note of the principal name as it will be used to set up access to other GCP projects.
* Follow these Google instructions to create a [new service account](https://cloud.google.com/iam/docs/service-accounts-create)
* Follow these Google instructions to assign the [new Cado IAM role](https://cloud.google.com/iam/docs/create-service-agents#grant-roles) to the service account
* If you will be importing from GKE clusters, the service account also needs the permission iam.serviceAccounts.implicitDelegation
* Follow the Cado documentation to create service account credentials and enter them into the platform:
[here](/cado-response/deploy/gcp/gcp-settings#getting-gcp-credentials) & [here](/cado-response/deploy/gcp/gcp-settings#entering-settings)
* To allow access to your other GCP projects, follow the [Cado documentation](/cado-response/deploy/gcp/gcp-cross-project) for each other GCP project.

* Ensure the following **[APIs](https://console.cloud.google.com/apis/library)** are enabled in the project:
    - **[Compute Engine](https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com)**
    - **[Cloud Build](https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com)**
    - **[Cloud Filestore](https://console.cloud.google.com/marketplace/product/google/file.googleapis.com)**
    - **[Secret Manager](https://console.cloud.google.com/marketplace/product/google/secretmanager.googleapis.com)**
    - **[Cloud Resource Manager](https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com)**
    - **[IAM Service Account Credentials](https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com)**
    - **[Cloud Storage](https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com)**