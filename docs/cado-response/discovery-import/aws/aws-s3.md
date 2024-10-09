---
title: S3
hide_title: true
sidebar_position: 2
---
# How to import data from S3

The Cado platform supports acquisition of data from AWS S3 buckets. The two main use cases for this are:

* Analyzing disk images or zip files that have been uploaded to an S3 bucket as part of an investigation (e.g. as part of using Cado Community Edition)
* Analyzing the contents of an S3 bucket for any uploaded content that could be part of an incident

Select or search for the bucket you require. Navigate and select the objects you need, and click the 'Import n objects' button. Confirm the details and click 'Start Import'.

![Import S3 Bucket](/img/aws-s3.png)


## Uploading On-Premise evidence to S3 for Import

You can use the [AWS Console](https://aws.amazon.com/) to upload data from your web browser if you have access to it.

Alternatively, you can create an [AWS Access and Secret Key](https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/) then use a Desktop GUI tool such as [Cyberduck](https://cyberduck.io/) to easily upload files from your desktop, with support for functionality such as resuming failed uploads.

If you create an Access/Secret for uploading data to S3, we recommend you scope the access by:
- Giving the associated role [write-only](https://stackoverflow.com/questions/15076645/amazon-s3-write-only-access) access to a single s3 bucket
- Use [temporary credentials](https://docs.cyberduck.io/protocols/s3/) if possible

You can also use Cado Host with the --single_file_unzipped parameter - this may be a good option if you do not have direct access to Azure as Cado Response will generate the credentials at Import > Cado Host.

### Data Flow Diagram
For a diagram of how our S3 acquisitions operate, please see below:

![S3 Data Flow](/img/s3-imports.png)