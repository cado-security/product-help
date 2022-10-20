---
title: S3
hide_title: true
sidebar_position: 2
---
# AWS S3 Support and Uploading On-Premise Files

Cado Response supports acquistion of data from AWS S3 buckets. The two main use cases for this are:

* Analyzing disk images or zip files that have been uploaded to an S3 bucket as part of an investigation (e.g. as part of using Cado Response Community Edition)
* Analyzing the contents of an S3 bucket for any uploaded content that could be part of an incident

While the project is open, select *Import - Artifacts from S3*. Select or search for the bucket you require. Navigate and select the objects you need, or hit "Import Entire Bucket".

![Import S3 Bucket](/img/aws-s3.png)


## Uploading On-Premise evidence to S3 for Import

You can use the [AWS Console](https://aws.amazon.com/) to upload data from your web browser if you have access to it.

Alternatively, you can create an [https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/](AWS Access and Secret Key) then use a Desktop GUI tool such as [https://cyberduck.io/](Cyberduck) to easily upload files from your desktop, with support for functionality such as resuming failed uploads.

If you create an Access/Secret for uploading data to S3, we reccomend you scope the access by:
- Giving the associated role [write-only](https://stackoverflow.com/questions/15076645/amazon-s3-write-only-access) access to a single s3 bucket
- Use [temporary credentials](https://docs.cyberduck.io/protocols/s3/) if possible



