---
title: Adding AWS and GCP to Azure
hide_title: true
sidebar_position: 4
---

# Adding AWS and GCP to Azure

## Setting up other Azure subscriptions
Cross-subscription Azure access is performed using an application registered into the target subscription. The following steps should be performed in each Azure subscription that you want to allow Cado to collect data from. Note: you will need permission to register applications and create IAM roles.

* Log into the target Azure subscription that you want Cado to collect evidence from
* Follow the Microsoft instructions to start registering a [new application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)
* Follow the Cado documentation to [configure the application](https://docs.cadosecurity.com/cado-response/deploy/azure/azure-cross-tenancy-subscriptions#setting-up-an-app-registration-for-cross-tenancysubcription-acquisitions)
* Once the application is set up, add the details to the Cado Response platform by following the [documentation](https://docs.cadosecurity.com/cado-response/deploy/azure/azure-cross-tenancy-subscriptions#registering-credentials-within-cado)
* In Cado Response, confirm that you can see resources for import by going into an investigation and selecting Import -> Cloud -> Choose your new Azure role -> confirm you can see resources available for import

## Setting up AWS accounts
* Cross-cloud access of AWS from Azure is performed by setting up an IAM role in the target AWS account. The following steps should be performed in each AWS account you would like Cado to collect data from. Note: you will need permission to create IAM roles.
* Log into target AWS account
* Follow these AWS instructions to create an [IAM group](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_create.html)
* Create a new IAM role with a new policy containing the [permissions listed here](https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml)
* Guides for creating new roles and policies can be found [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html) and [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html)
* Add your new IAM user to the [group](https://docs.aws.amazon.com/singlesignon/latest/userguide/adduserstogroups.html)
* Generate access keys for the [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). These keys provide access to the account and should be kept secret.
* In Cado Response, add the keys to the platform by going to Settings -> Cloud -> Create Role -> Choose AWS tab -> Add a name for the role and enter the access token and secret
* In Cado Response, confirm that you can see resources for import by going into an investigation and selecting Import -> Cloud -> Choose your new AWS role -> confirm you can see resources.

## Setting up GCP projects
Cross-cloud access of GCP from Azure is performed by designating a primary GCP project where evidence will be stored before being captured by Cado using a service account. This primary project also coordinates IAM access so that Cado can import evidence from your other GCP projects. Access is given to the service account in the primary project to each GCP project you would like Cado to collect evidence from. Note: you will need permission to create IAM roles and service accounts.

* Sign in to the GCP project which you are designating your primary project
* Enable the [Cloud Build API](https://console.cloud.google.com/cloud-build/) if it is not already activated
* Create a new [GCS bucket](https://cloud.google.com/storage/docs/creating-buckets) for storing evidence collected by Cado. This bucket will be selected during the import process in the Cado Response interface. 
* Create a new Cado IAM role with the [permissions listed here](https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-settings#creating-a-cado-role.).
This role can be [created](https://cloud.google.com/iam/docs/creating-custom-roles#creating) at the organisation level to give access to multiple projects under one service account.
* Assign the new Cado IAM role to the Compute Engine principal - note that as of June 2024 the Compute Engine principal needs to be updated instead of the Cloud Build prinicpal due [to changes in GCP](https://cloud.google.com/build/docs/cloud-build-service-account-updates) Go to IAM and Admin -> IAM and locate the principle which looks like xxxxxxxxxxxx-compute@developer.gserviceaccount.com. Edit this principle to give it permission to the new Cado role. Take note of the principal name as it will be used to set up access to other GCP projects.
* Follow these Google instructions to create a [new service account](https://cloud.google.com/iam/docs/service-accounts-create)
* Follow these Google instructions to assign the [new Cado IAM role](https://cloud.google.com/iam/docs/create-service-agents#grant-roles) to the service account
* If you will be importing from GKE clusters, the service account also needs the permission iam.serviceAccounts.implicitDelegation
* Follow the Cado documentation to create service account credentials and enter them into the platform:
[here](https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-settings#getting-gcp-credentials) & [here](https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-settings#entering-settings)
* To allow access to your other GCP projects, follow the [Cado documentation](https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-cross-project) for each other GCP project