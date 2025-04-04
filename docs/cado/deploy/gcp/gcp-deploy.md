---
title: GCP Full Terraform deployment
hide_title: true
sidebar_position: 1
---
# How to deploy Cado in GCP with Terraform

To set up Cado in GCP you can deploy via our Terraform script.  The Terraform script automates the process of configuring the platform stack.
Visit the GCP Marketplace listing **[here](https://console.cloud.google.com/marketplace/product/cado-public/cado-response)** to download the latest Terraform code.

Once you have downloaded the Terraform code from the Marketplace listing above, continue on to the steps below.
1. **[Install Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)**, if you have not already.
2. **[Install GCloud CLI](https://cloud.google.com/sdk/docs/install)**, if you have not already.
3. Create a project and generate some service account credentials for the project, exporting the credentials.json. To create and use a service account, the user account will need **Service Account User** and **Service Account Admin** roles.
The service account itself will need to have the following roles:
    - Compute Admin
    - Service Account User
    - Storage Admin
    - Cloud Filestore Editor
    - Role Administrator
    - Security Admin
4. Ensure the following **[APIs](https://console.cloud.google.com/apis/library)** are enabled in the project:
    - **[Compute Engine](https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com)**
    - **[Cloud Build](https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com)**
    - **[Cloud Filestore](https://console.cloud.google.com/marketplace/product/google/file.googleapis.com)**
    - **[Secret Manager](https://console.cloud.google.com/marketplace/product/google/secretmanager.googleapis.com)**
    - **[Cloud Resource Manager](https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com)**
    - **[IAM Service Account Credentials](https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com)**
    - **[Cloud Storage](https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com)**

5. Run `gcloud auth activate-service-account --key-file <key_file>` where key_file is the path to your GCP service account credentials.json. 
6. Run `gcloud config set project <project_id>`
7. Extract gcp.zip This is the ZIP that was provided by Cado Sales, or downloaded from the GCP Marketplace, or cloned from https://github.com/cado-security/Deployment-Templates/tree/main/gcp

8. Change directories into gcp/ which was extracted in the previous step.
9. Customize the file `gcpVars.tfvars` by filling in values:

    | Parameter Name | Description | Example |
    | -------------- | ----------- | ------- |
    | `unique_name` | A string to ensure that resources created by Cado are unique | `cado` |
    | `credentials_file` | Path to your GCP service account credentials json | `../credentials.json` |
    | `project_id` | ID of the project Cado will be deployed into | `cado-12839`  |
    | `region` | The region which Cado will be deployed to | `us-east1` |
    | `image` | The link of the image provided by Sales or the [public release URL](https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json) | `https://www.googleapis.com/compute/v1/projects/cado-public/global/images/cadoresponse-xxx` |
    | `tags` | Tags to be applied to your Cado instance | `{tag1 = "cado-test"}` |
    | `vm_size` | Size of main instance | `n2-standard-16` |
    | `vol_size` | Size of main instance local disk in GB | This value is dependent on the amount of data you will be processing into the Cado platform. Please speak with the sales or support team for proper sizing. |
    | `allowed_ips` | List of incoming IPs  | `[“1.2.3.6/32”]` |
    :::tip
     We recommend a minimum setting of 500GB for `vol_size`. The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can always be deleted to recover space.
    :::
10. Deploy by running the following commands in the directory `gcp/`
    `terraform init` followed by `terraform plan -var-file=gcpVars.tfvars`.  Once you confirm the plan looks correct, you can then run `terraform apply -var-file=gcpVars.tfvars`
11. Find your Cado instance in the [Compute Engine portal](https://console.cloud.google.com/compute/instances), navigate to its public IP address in the browser
12. Login with:
    - Username: admin
    - Password: \<instance_id\> (found in the Compute Engine console for your instance e.g. 8784481508256766876)

