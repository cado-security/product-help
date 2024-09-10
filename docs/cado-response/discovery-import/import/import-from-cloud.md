---
title: Import from Cloud
hide_title: true
sidebar_position: 2
---

# Importing from the Cloud
To import data from the cloud you need to have access configured to the cloud account/subscription/investigation where the data resides.
You can change and add cloud accounts under **Settings** > **Cloud Accounts**:

Learn more on how to add credentials to the Cado Platform for [AWS](../../deploy/aws/iam/cross-account-creation.md#adding-the-role-to-cado), [Azure](../../deploy/azure/azure-cross-tenancy-subscriptions.md#registering-credentials-within-cado), and [GCP](../../deploy/gcp/gcp-settings.md#entering-settings).

You also need to be assigned a Cado role that has acccess to a cloud role that can access the data to import. For more information read about Cado [users and roles](../../manage/users-authentication/users.md#managing-roles).

First select the Cloud Role you will use to import the data. You can filter the list by provider, or search for a specific account, subscription or investigation.

![Importing from cloud](/img/import-cloud.png)

To learn about collecting from each cloud service go to the relevant import page

### AWS
 * [EC2](aws/aws-ec2.md)
 * [S3](aws/aws-s3.md)
 * [AMI and EBS Snapshot](aws/aws-ami.md)
 * [ECS](aws/aws-ecs.md)
 * [EKS](aws/aws-eks.md)
 * [Lambda](aws/aws-lambda.md)

### Azure
 * [Azure Compute](azure/azure-compute.md)
 * [Azure Storage](azure/azure-storage.md)
 * [Azure AKS](azure/azure-aks.md)

### GCP
 * [Google Compute Engine](gcp/engine-instance.md)
 * [Google Cloud Storage](gcp/storage.md)
 * [Google Kubernetes Engine](gcp/kubernetes-engine.md)