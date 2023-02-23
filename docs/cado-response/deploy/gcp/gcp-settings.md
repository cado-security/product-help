---
title: Overview
hide_title: true
sidebar_position: 1
---

## GCP Import Settings

You can acquire compute and storage resources from GCP with the Cado platform by configuring Cado with GCP credentials. The below guide walks through this process.

## Entering Settings
You can add GCP Credentials to Cado in the **Settings > Cloud > GCP** page.
You will be asked for a "GCP Project Name" and the "GCP Credentials".

## Getting GCP Credentials

When you add credentials under Cado settings you are creating a mapping from a set of credentials (in GCP json format) to a project name.

Any time a user then attempts to access that particular GCP project name, the credentials that you registered in settings will be used. This keeps non-admin users from having to managing credentials themselves, while also alllowing access to as many different GCP projects as you want.

GCP credentials come in a json format that wraps around a ‘regular’ credential, for the benefit of the many different ways that a credential may be used on their end. It can be treated as functionally no different to how you would handle any type of password or key.

For example, a service account key might come in a structure such as the below. The ‘credential’ is a literal RSA key as a string in the `private_key` field, all other fields are metadata for the benefit of the application that uses it:

      {
      "type": "service_account",
      "project_id": "cool-project",
      "private_key_id": "22c14ac5b63...",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKg...wggSkA.\n-----END PRIVATE KEY-----\n",
      "client_email": "cool-project.iam.gserviceaccount.com",
      "client_id": "...",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "..."
    }

Note that:
* The Cloud Build API (https://console.cloud.google.com/cloud-build/) needs to be enabled for the Project.
* Each Service Account that is created by the service being acquired (e.g. Compute) requires the Editor role.
* When you import an instance you first need to define a bucket for each GCP Project where the instance image will go - this bucket should be created during Cado install and will be used for future imports.

### Types of Credentials

#### Service Accounts

The simplest method to add GCP credentials to Cado is to use a service account, which will give you a permanent key. Naturally these are very sensitive but they are easy to manage and simple to set up. Adding GCP credntials for service accounts is supported by Cado when deployed in both AWS and Azure.

For more see:
* https://console.cloud.google.com/iam-admin/serviceaccounts
* https://cloud.google.com/iam/docs/service-accounts

#### Expected Access
We expect the service account the Cado platform will authorize with has the 'Basic -> Editor' role:
![Editor Role](/img/gcp-access.png)
To import GKE containers with Cado Response, the `iam.serviceAccounts.implicitDelegation` IAM permission also needs to added to the Service Account.

#### Workload Identity Federation

The GCP recommended best practice, however, is to use Workload Identity Federation, which allows credentials from another app to impersonate a GCP account. *Note - GKE import Cado only suports GCP accounts configured using Workload Identity Federation*. 

Workload Identity Federation is more secure since the credentials are nothing but metadata telling the app where to go, while the validation is handled on the server side. Adding GCP credentials via Workload Identity Federation is currently only supported for Cado when deployed in AWS.

Rather than give out the key to a service account, you instead register the permission with GCP to allow AWS credentials for account `123` to act as if they were the given GCP service account.

You can download existing credentials by clicking the display name of the **Identity Pool > Connected Service Accounts > Download**, which will then ask you which identity’s credentials you would like to download.

For example:

    {
      "type": "external_account",
      "audience": "//iam.googleapis.com/projects/...",
      "subject_token_type": "urn:ietf:params:aws:token-type:aws4_request",
      "service_account_impersonation_url": "https://...ount.comgenerateAccessToken",
      "token_url": "https://sts.googleapis.com/v1/token",
      "credential_source": {
        "environment_id": "...",
        "region_url": "http://169.254.169.254/latest/meta-data/placement/availability-zone",
        "url": "http://169.254.169.254/latest/meta-data/iam/security-credentials",
        "regional_cred_verification_url": "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15"
      }
    }

For more see:
* https://console.cloud.google.com/iam-admin/workload-identity-pools
* https://cloud.google.com/iam/docs/workload-identity-federation