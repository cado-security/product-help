---
title: GCP Import Settings
hide_title: true
sidebar_position: 2
---

## GCP Import Setings

You can acquire compute and storage resources from GCP with Cado Response by configuring Cado Response with GCP credentials. The below guide walks through this process.

## Entering Settings
You can add GCP Credentials to Cado Response in the **Settings > Cloud > GCP** page.
You will be asked for a "GCP Project Name" and the "GCP Credentials".

## Getting GCP Credentials

When you add credentials under Cado Response settings you are creating a mapping from a set of credentials (in GCP json format) to a project name.

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

### Types of Credentials

#### Service Accounts

The simplest method to add GCP credentials to Cado Response is to use a service account, which will give you a permanent key. Naturally these are very sensitive but they are easy to manage and simple to set up. Adding GCP credntials for service accounts is supported by Cado Response when deployed in both AWS and Azure.

For more see:
* https://console.cloud.google.com/iam-admin/serviceaccounts
* https://cloud.google.com/iam/docs/service-accounts

#### Workload Identity Federation

The GCP recommended best practice, however, is to use Workload Identity Federation, which allows credentials from another app to impersonate a GCP account. Workload Identity Federation is more secure since the credentials are nothing but metadata telling the app where to go, while the validation is handled on the server side. Adding GCP credentials via Workload Identity Federation is currently only supported for Cado Response when deployed in AWS.

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