---
title: Manage data
hide_title: true
sidebar_position: 8
---

# How to manage data in the Cado platform
There are several considerations for managing data from the Cado platform

## Controlling the lifecycle of data stored by the Cado platform
AWS supports this through **[Object Locks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)** and **[Lifecycle Rules](https://docs.aws.amazon.com/console/s3/lifecyclerules)** associated with your S3 bucket.  Please see the AWS documentation for more details.

Azure supports this through **[Life Cycle Management Policies](https://docs.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview)** for your blob storage.  Please see the Azure documentation for more details.

Google Cloud supports this through **[Object Lifecycle Management](https://cloud.google.com/storage/docs/lifecycle)** for your Cloud Storage bucket.  Please see the Google Cloud documentation for more details.

## Storing sensitive customer data
Whether sensitive customer data is stored within the Cado platform is completely dependent on what data sources and evidence is imported into the software.  In all cases, data is either stored within the database on the main Cado instance, within EFS, within a customers' S3 bucket or  Azure storage.  Since the Cado platform is deployed within the customers' cloud environment, the customer has control over the life cycle management of the data (example: using Life Cycle management policies) as well as who has access to potential sensitive data via VPC and Subnet rules.
