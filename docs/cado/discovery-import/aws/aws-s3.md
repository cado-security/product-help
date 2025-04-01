---
title: S3
hide_title: true
sidebar_position: 3
---

# How to Import Data from S3

The Cado platform supports acquiring data from AWS S3 buckets. The two primary use cases for S3 data acquisition are:

- Analyzing disk images or zip files uploaded to an S3 bucket as part of an investigation.
- Analyzing the contents of an S3 bucket for any uploaded files that may be part of an incident.

### Steps to Import from S3

1. On your investigation select **import** > **Cloud** > **AWS** > 

2. Select your account then select **S3**

3. Select to **Import** or **Search**
   Choose the bucket you need, navigate through the objects, and select the files you want to import.

   
    - Import will allow you to import the full S3 bucket that you select.
    - Search will allow you to use parameters to grep into specific folders inside your S3 bucket
   

![Import or Search](/img/importorsearch.png)

4. Select the bucket you would like to import or search.

   - If you selected search you will have to fill our search fields as seen in the screenshot below.

![Grep Paramaters](/img/grepfields.png)
   
4. Click the **'Import objects'** button.

5. **Confirm the Details** and click **Start Import** to begin the acquisition process.

![Import S3 Bucket](/img/aws-s3.png)

## Uploading On-Premise Evidence to S3 for Import

If you have access to the AWS Console, you can upload data directly from your web browser. Alternatively, you can create an [AWS Access and Secret Key](https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/) and use a desktop GUI tool like [Cyberduck](https://cyberduck.io/) to upload files, with features like resuming failed uploads.

### Recommendations for Using Access Keys

If you create access keys for uploading data to S3, we recommend the following:

- Scope the access by giving the associated role **write-only** access to a single S3 bucket. For more details, see [Write-Only Access](https://stackoverflow.com/questions/15076645/amazon-s3-write-only-access).
- Use **temporary credentials** when possible. Learn more about this in [Cyberduck’s S3 documentation](https://docs.cyberduck.io/protocols/s3/).

### Using Cado Host for Upload

If you don’t have direct access to AWS, you can use Cado Host with the `--single_file_unzipped` parameter. Cado will generate the necessary credentials when you go to **Import > Cado Host**.

### Data Flow Diagram

The following diagram shows how S3 acquisitions work:

![S3 Data Flow](/img/s3-imports.png)
