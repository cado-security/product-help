---
title: Fail over to spare deployment on AWS
hide_title: true
sidebar_position: 16
---

:::info
This section is not relevant to SaaS deployments.
:::

# Using a backup deployment in AWS

A spare deployment of Forensic Acquisition and Investigation (FAI) can be run in a different AWS availability zone (AZ) from your main deployment to be used in the case that the compute or networking hosting the main instance becomes degraded. We will refer to the actively used deployment which contains investigation data as 'Deployment A' and the cold spare in another AZ as 'Deployment B'.

# Important points
1. The two FAI deployments must be in different AZ's in the same region. Trying to fail from one region to another will fail.
2. Both deployments must be deployed from the same AMI when failover is performed. If the AMIs do not match, the fail over may not work due to missing database migrations between AMI versions.
3. This configuration uses the intra-region high-availability features of AWS Elastic File Store (EFS) and AWS Simple Storage Service (S3) which allow the compute infrastructure of Deployment B to use the storage deployed by Deployment A.
4. The storage type of EFS must be the default regional file system. Changing to 'EFS One Zone' is not compatible.

# Set up
1. Deploy FAI as normal in two AZ's in the same region. The backup instance does not need to be configured beyond setting a user password and uploading a licence to allow for upgrading the platform.
2. Set up an automatic snapshot schedule for the data disk of Deployment A e.g., by using AWS Data Lifecycle Manager. We recommend to also enable Fast Snapshot Restore on the snapshots to speed up restoration.
3. Use FAI as normal, upgrading both deployments in tandem so that they are always running the same version. A new AMI is released for each version of FAI so if both deployments are using the same AMI, they will be on the same version of FAI.

# Perform fail over

If Deployment A is degraded and you want to switch over to use Deployment B, perform the following steps:
1. Shutdown the main VM of both deployments using the AWS console or CLI. The main VM will have a name starting with `CadoResponse`.
2. Either take a new snapshot or locate the last automatic snapshot of the Deployment A data volume. The data volume will be named starting with `CadoResponseDataVolume`.
3. Create a new volume from the snapshot of Deployment A data volume in the AZ of Deployment B. It must be named in the same convention.
4. Detatch the data volume from Deployment B.
5. Attach the newly created volume from the snapshot of Deployment A's data volume to the EC2 of Deployment B.
6. Boot up the Deployment B main VM.
7. Once the Cado UI is available on Deployment B, reboot the Deployment B EC2 to reset the worker IP address range.
8. Log into Deployment B. It will now be usable with all the data and settings of Deployment A migrated over.

# Returning to original configuration

If you would like to return to using Deployment A, perform the same steps as above but with Deployment A and Deployment B reversed.

