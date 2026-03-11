---
title: Import data
hide_title: true
sidebar_position: 1
---

# Importing Data into the / Forensic Acquisition and Investigation Platform

The platform offers several ways to import data. Once you select the data you want to import, the platform will automatically process it according to the configured **Processing Settings**. For more information on how processing works, refer to our [Processing Settings Guide](/cado/manage/workers.md#processing).

## Steps to Import Data

1. Select the appropriate **Investigation**.
2. Click the **Import** button to start.

![Import Button](/img/import-button.png)

3. Follow the on-screen instructions to choose your evidence source and complete the import process.

![Import Data](/img/import.png)

## Import Options

### Importing from Cloud Services

You can import evidence from cloud platforms such as AWS, Azure, and GCP. Ensure that the correct credentials are added to the system and that your role is granted access to use these credentials.

For a step-by-step guide, visit our [Cloud Import Documentation](import-from-cloud.md).

### Importing from / Forensic Acquisition and Investigation Host

The / Forensic Acquisition and Investigation platform can use **/ Forensic Acquisition and Investigation Host** to acquire forensic artifacts from on-premises systems and analyze them in the cloud. Additionally, Cado Host can upload evidence, like previously collected disk images.

To learn more about using / Forensic Acquisition and Investigation Host, see the [Cado Host Documentation](/cado/discovery-import/cado-host/intro).

### Importing from a URL

If you’ve stored forensic artifacts at a URL, you can import them directly into the platform. Ensure that the file types are supported by checking the list of compatible [file types](data-types/filetypes.md).

![On-Premises URL](/img/on-premises-url.png)

### Importing a Local File

You can drag and drop or select up to 10 files (max 5 GB each) from your local machine to import directly into the platform.

│ **Note:** This requires an initial change to the CORS permissions on the cado-collector bucket.

#### AWS

***Terraform***

On the resource resource "aws_s3_bucket_cors_configuration" "bucket_cors", add:
```
hcl
cors_rule {
  allowed_origins = ["*"]
  allowed_methods = ["PUT"]
  allowed_headers = ["*"]
  max_age_seconds = 3600
}
```

***CloudFormation***

On the resource CadoS3BucketAlt → Properties, add:
```
yaml
CorsConfiguration:
  CorsRules:
    - AllowedOrigins:
        - '*'
      AllowedMethods:
        - PUT
      AllowedHeaders:
        - '*'
      MaxAge: 3600
```
#### GCP

On the resource resource "google_storage_bucket" "bucket", add:
```
hcl
cors {
  origin          = ["*"]
  method          = ["PUT"]
  response_header = ["*"]
  max_age_seconds = 3600
}
```
#### Azure

On the resource resource "azurerm_storage_account" "storage", add:
```
hcl
blob_properties {
  cors_rule {
    allowed_origins    = ["*"]
    allowed_methods    = ["PUT"]
    allowed_headers    = ["*"]
    exposed_headers    = ["ETag"]
    max_age_in_seconds = 3600
  }
}
```
