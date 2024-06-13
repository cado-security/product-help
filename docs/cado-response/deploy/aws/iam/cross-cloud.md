---
title: Adding Azure and GCP to AWS
hide_title: true
sidebar_position: 5
---

# Cross Cloud with AWS

## Adding AWS Access to Azure or GCP Deployments
AWS accounts can be imported into Cado Response from Azure or GCP deployments.
To do so, add the AWS account under Settings > Cloud Accounts:
![Add Role](/img/add-role.png)

Currently AWS EC2's can only be imported cross-cloud through SSM Triage Acquisition, due to how the data is collected.
For more, see [Adding AWS to Azure](https://docs.cadosecurity.com/cado-response/deploy/azure/adding-aws-gcp) and [Adding AWS to GCP](https://docs.cadosecurity.com/cado-response/deploy/gcp/adding-azure-gcp).

## Adding Azure Access to AWS Deployments
Cross-subscription Azure access is performed using an application registered into the target subscription. The following steps should be performed in each Azure subscription that you want to allow Cado to collect data from. Note: you will need permission to register applications and create IAM roles.

* Log into the target Azure subscription that you want Cado to collect evidence from
* Follow the Microsoft instructions to start registering a [new application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)
* Follow the Cado documentation to [configure the application](https://docs.cadosecurity.com/cado-response/deploy/azure/azure-cross-tenancy-subscriptions#setting-up-an-app-registration-for-cross-tenancysubcription-acquisitions)
* Once the application is set up, add the details to the Cado Response platform by following the [documentation](https://docs.cadosecurity.com/cado-response/deploy/azure/azure-cross-tenancy-subscriptions#registering-credentials-within-cado)
* In Cado Response, confirm that you can see resources for import by going into a project and selecting Import -> Cloud -> Choose your new Azure role -> confirm you can see resources available for import

For a diagram on how cross-cloud imports from AWS into Azure work, please see our [Knowledge Base](https://cadosecurity.zendesk.com/hc/en-gb/articles/23261488255121-What-network-access-is-required-to-operate-cross-cloud-from-Azure).

## Adding GCP Access to AWS Deployments
:::warning
Make sure the GCP service account credentials are enabled from the Google Cloud console.
:::
Cross-cloud access of GCP from Azure is performed by designating a primary GCP project where evidence will be stored before being captured by Cado using a service account. This primary project also coordinates IAM access so that Cado can import evidence from your other GCP projects. Access is given to the service account in the primary project to each GCP project you would like Cado to collect evidence from. Note: you will need permission to create IAM roles and service accounts.

* Sign in to the GCP project which you are designating your primary project
* Enable the [Cloud Build API](https://console.cloud.google.com/cloud-build/) if it is not already activated
* Create a new [GCS bucket](https://cloud.google.com/storage/docs/creating-buckets) for storing evidence collected by Cado. This bucket will be selected during the import process in the Cado Response interface. 
* Create a new Cado IAM role with the [permissions listed here](https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-settings#creating-a-cado-role.).
This role can be [created](https://cloud.google.com/iam/docs/creating-custom-roles#creating) at the organisation level to give access to multiple projects under one service account.
* Assign the new Cado IAM role to the Cloud Build principal. Go to IAM and Admin -> IAM and locate the principle which looks like xxxxxxxxxxxx@cloudbuild.gserviceaccount.com. Edit this principle to give it permission to the new Cado role. Take note of the principal name as it will be used to set up access to other GCP projects.
* Follow these Google instructions to create a [new service account](https://cloud.google.com/iam/docs/service-accounts-create).
* Follow these Google instructions to assign the [new Cado IAM role](https://cloud.google.com/iam/docs/create-service-agents#grant-roles) to the service account.
* If you will be importing from GKE clusters, the service account also needs the `iam.serviceAccounts.implicitDelegation` permission.
* Follow the Cado documentation to create service account credentials and enter them into the platform:
[here](https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-settings#getting-gcp-credentials) & [here](https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-settings#entering-settings).
* To allow access to your other GCP projects, follow the [Cado documentation](https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-cross-project) for each other GCP project.

* Ensure the following **[APIs](https://console.cloud.google.com/apis/library)** are enabled in the project:
    - **[Compute Engine](https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com)**
    - **[Cloud Build](https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com)**
    - **[Cloud Filestore](https://console.cloud.google.com/marketplace/product/google/file.googleapis.com)**
    - **[Secret Manager](https://console.cloud.google.com/marketplace/product/google/secretmanager.googleapis.com)**
    - **[Cloud Resource Manager](https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com)**
    - **[IAM Service Account Credentials](https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com)**
    - **[Cloud Storage](https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com)**