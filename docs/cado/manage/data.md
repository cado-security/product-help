---
title: Manage data
hide_title: true
sidebar_position: 8
---

:::info
This section is not relevant to SaaS deployments.
:::

# How to Manage Data in the Cado Platform

There are several important considerations when managing data in the Cado platform.

## Controlling the Lifecycle of Data Stored by the Cado Platform

Each cloud provider offers tools to help manage the lifecycle of data stored in their environments. The Cado platform supports these tools based on the cloud provider you use:

- **AWS**: You can use **[Object Locks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)** and **[Lifecycle Rules](https://docs.aws.amazon.com/console/s3/lifecyclerules)** in your S3 bucket to control data retention and deletion. For more details, refer to the AWS documentation.
  
- **Azure**: Manage data lifecycle through **[Life Cycle Management Policies](https://docs.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview)** for Azure Blob Storage. For more information, refer to the Azure documentation.
  
- **Google Cloud**: Use **[Object Lifecycle Management](https://cloud.google.com/storage/docs/lifecycle)** for Google Cloud Storage buckets to control data lifecycle. See the Google Cloud documentation for further details.

## Storing Sensitive Customer Data

The storage of sensitive customer data in the Cado platform depends on the types of data sources and evidence imported into the software. Data can be stored in several locations, including:

- The database on the main Cado instance.
- EFS (Elastic File System).
- The customer's S3 bucket (AWS) or Azure storage.

Because the Cado platform is deployed within the customer's cloud environment, the customer has full control over data lifecycle management (e.g., using Lifecycle Management policies) and access controls, such as VPC and subnet rules, to secure sensitive data.
