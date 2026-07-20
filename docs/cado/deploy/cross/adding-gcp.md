---
title: Adding GCP Projects to Azure/AWS/SaaS
hide_title: true
sidebar_position: 8
---

# How to add GCP projects to Azure, AWS or SaaS

To enable cross-cloud access from GCP, you need to designate a primary GCP project where evidence will be stored and managed.

A Service Account within this primary project coordinates IAM access to allow / Forensic Acquisition and Investigation to import evidence from other GCP projects. 

You will need permissions in GCP to enable APIs, create IAM roles, Service Accounts, and generate Service Account Keys before continuing.

### Required APIs to Enable

Ensure the following **APIs** [are enabled](https://cloud.google.com/endpoints/docs/openapi/enable-api) in your primary GCP project.
You can enable them from the [Google Cloud Console](https://console.cloud.google.com/apis/library):

- **[Compute Engine API](https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com)**
Needed for Compute Engine acquisition (compute.googleapis.com)
- **[Cloud Storage API](https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com)**
Needed for exporting disks when acquiring Compute Engines, and for GCS acquisition (storage.googleapis.com)
- **[Kubernetes Engine API](https://console.cloud.google.com/marketplace/product/google/container.googleapis.com)**
Needed for Kubernetes Engine acquisition (container.googleapis.com)
- **[Cloud Build API](https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com)**
Necessary for export operations when acquiring Compute Engines (container.googleapis.com)
- **[IAM Service Account Credentials API](https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com)**
Needed to generate keys and allow access to GCP resources (iamcredentials.googleapis.com)
- **[Cloud Resource Manager API](https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com)**
Needed to navigate projects (cloudresourcemanager.googleapis.com)

### Steps to Add a GCP Project
:::tip 
Parts of this process can be automated by using our [GCP Automated Setup Scripts](/cado/deploy/gcp/gcp-auto-setup). Those steps will contains links to the relevant scripts when appropriate.
:::

1. **Sign In to Your Primary GCP Project**  
   Start by logging into the GCP project that you will designate as the primary project for storing evidence.

2. **Create a GCS Bucket for Evidence Storage**  
   Set up a new [Google Cloud Storage (GCS) bucket](https://cloud.google.com/storage/docs/creating-buckets) to store evidence collected by Cado. You will select this bucket during the import process in the / Forensic Acquisition and Investigation interface.

3. **Create a / Forensic Acquisition and Investigation IAM Role**  
   [Create a new IAM role](https://console.cloud.google.com/iam-admin/roles) for / Forensic Acquisition and Investigation with the [required permissions listed below](/cado/deploy/cross/adding-gcp#permissions).

   This can also be automated via a script: [**Script link**](/cado/deploy/gcp/gcp-auto-setup#role-creation).
   
   This role can be created at the organization level to provide access to multiple projects using one service account, or at the project level to provide access to a single project.

5. **Assign the IAM Role to the Compute Engine Principal**
   - Go to **IAM and Admin** > **IAM** in the [Google Cloud Console](https://console.cloud.google.com/iam-admin/iam).  
   - Locate the Compute Engine Principal with the format `xxxxxxxxxxxx-compute@developer.gserviceaccount.com`
      - You may need to check the box 'Include Google-provided role grants'
   - Edit this principal to [grant it](https://cloud.google.com/iam/docs/grant-role-console) the new / Forensic Acquisition and Investigation IAM role.  
   - Note down the principal name, as it will be used to configure access to other GCP projects.

6. **Create a new Service Account and Grant Role**  
   Follow these [Google instructions](https://cloud.google.com/iam/docs/service-accounts-create) to create a new Service Account in the primary GCP project.
   Assign the newly created / Forensic Acquisition and Investigation IAM Role to the Service Account by following [these Google instructions](https://cloud.google.com/iam/docs/create-service-agents#grant-roles), making sure to grant it the Cado IAM role.
   
   This can also be automated via a script: [**Script link**](/cado/deploy/gcp/gcp-auto-setup#service-account-creation).

8. **Create Service Account Credentials and add to / Forensic Acquisition and Investigation**  
   Navigate to the **Keys** tab of the created Service Account and **Add Key**, selecting the **JSON** option.
   These credentials are **sensitive** and should be stored appropriately according to your organization's password/secret management policy
   You can then add this JSON Key to the platform at **Settings** > **Accounts** > **Create Account**.

9. **Grant Access to Other GCP Projects (Optional)**  
   To allow / Forensic Acquisition and Investigation to collect evidence from additional GCP projects, follow the [Cado documentation](/cado/deploy/gcp/gcp-cross-project) for setting up access to each additional project.

   This can also be automated via a script: [**Script link**](/cado/deploy/gcp/gcp-auto-setup#cross-project-access).

---

### Permission list for importing from GCP into a / Forensic Acquisition and Investigation deployment in AWS, Azure or SaaS

Please see [here](/cado/deploy/gcp/iam-description) for permissions for / Forensic Acquisition and Investigation to be deployed in GCP, as opposed to importing from GCP cross-cloud or cross-project.

 #### Persistent (always required, cannot be tag-scoped to resources)

 **Authentication**
 - iam.serviceAccounts.getAccessToken 
 - iam.serviceAccounts.implicitDelegation 
 - iam.serviceAccounts.actAs 
 - resourcemanager.projects.get 

**Instance Acquisition**
 - cloudbuild.builds.create
 - cloudbuild.builds.get
 - compute.disks.create
 - compute.disks.delete
 - compute.disks.list
 - compute.disks.setLabels
 - compute.disks.use
 - compute.images.get
 - compute.images.useReadOnly
 - compute.images.delete
 - compute.instances.create
 - compute.instances.list
 - compute.instances.setLabels
 - compute.instances.setMetadata
 - compute.instances.setServiceAccount
 - compute.instances.getSerialPortOutput
 - compute.instances.delete
 - compute.machineTypes.list
 - compute.networks.get
 - compute.networks.list
 - compute.projects.get
 - compute.subnetworks.use
 - compute.subnetworks.useExternalIp
 - compute.zoneOperations.get
 - compute.zones.list

**Storage Acquisition**
 - storage.buckets.create
 - storage.buckets.get
 - storage.buckets.list
 - storage.objects.create

**GKE Acquisition**
 - container.pods.list

#### Transient (can be tag-scoped to target resources) 

**Instance Acquisition**
 - compute.disks.get
 - compute.disks.useReadOnly
 - compute.globalOperations.get
 - compute.images.create
 - compute.instances.get
 - compute.subnetworks.list
 - compute.subnetworks.get

 **Storage Acquisition**
 - storage.objects.get
 - storage.objects.list

 **GKE Acquisition**
 - container.clusters.get
 - container.clusters.list
 - container.pods.exec
 - container.pods.get
