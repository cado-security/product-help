---
title: GCP Import Settings
hide_title: true
sidebar_position: 5
---

# Entering Settings
You can add GCP Credentials at Settings > Cloud > GCP.
You will be asked for a "GCP Project Name" and the "GCP Credentials".

## Getting the "GCP Credentials"

When adding credentials in settings you are creating a mapping from a set of credentials (in GCP json format) to a project name.

Any time a user then attempts to access that particular GCP project name, the credentials that you registered in settings will be used - this is to keep non admin users from handling/managing credentials themselves, as well as to allow as many different GCP projects as you want.

Google credentials come in a json format that wraps around a ‘regular’ credential, for the benefit of the many different ways that a credential may be used on their end.

It can be treated as functionally no different to how you would handle any type of password or key.

For example, a service account key might come in a structure such as the below (truncated), but really the ‘credential’ is a literal rsa key as a string in the private_key field, all other fields are metadata for the benefit of the application that uses it:

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

#### Types of Credential

##### Service Accounts

The simplest method for setting up is to use a service account, which will give you a permanent key. Naturally these are very sensitive but they are easy to manage and simple to set up. They will work on AWS and Azure in the Cado platform.

For more see:
* https://console.cloud.google.com/iam-admin/serviceaccounts
* https://cloud.google.com/iam/docs/service-accounts

#### Workload Identity Federation

The recommended (by Google) approach is to use Workload Identity Federation, which means ‘allow my credentials from some other app to impersonate a GCP account’.

As with all the GCP credentials, the json is just metadata and can be treated as an RSA key.

It’s a lot more secure since the credentials are nothing but metadata telling the app where to go - the actual validation is all done server side.

Rather than give out the key to a service account, you instead register the permission with GCP to allow (say) AWS credentials for account 123 to assume/adopt/impersonate/act as if they were the given gcp service account.

The platform currently (July 2022) supports this on AWS but not on Azure.

You can download those already existing by clicking the display name of the identity pool → connected service accounts → Download, which will ask you which identity’s creds you’d like to download

For example: (note that you would never edit this, as it is a key)

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