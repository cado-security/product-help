---
title: Adding GCP Projects to Azure/AWS
hide_title: true
sidebar_position: 8
---

# How to add GCP projects to Azure or AWS

To enable cross-cloud access from GCP, you need to designate a primary GCP project where evidence will be stored and managed. A service account within this primary project coordinates IAM access to allow Cado to import evidence from other GCP projects. 

:::note
You will need permission to create IAM roles, service accounts, and generate keys before continuing.
:::

### Required APIs to Enable

Ensure the following **APIs** are enabled in your primary GCP project. You can enable them from the [Google Cloud Console](https://console.cloud.google.com/apis/library):

- **[Compute Engine API](https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com)**
Needed for Compute Engine acquisition
- **[Cloud Storage API](https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com)**
Needed for exporting disks when acquiring Compute Engines, and for GCS acquisition
- **[Kubernetes Engine API](https://console.cloud.google.com/marketplace/product/google/container.googleapis.com)**
Needed for Kubernetes Engine acquisition
- **[Cloud Build API](https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com)**
Necessary for export operations when acquiring Compute Engines
- **[IAM Service Account Credentials API](https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com)**
Needed to generate keys and allow access to GCP resources
- **[Cloud Resource Manager API](https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com)**
Needed to navigate projects

### Steps to Add a GCP Project
:::tip 
Parts of this process can be automated by using our [GCP Automated Setup Scripts](/cado/deploy/gcp/gcp-auto-setup). Those steps will contains links to the relevant scripts when appropriate.
:::

1. **Sign In to Your Primary GCP Project**  
   Start by logging into the GCP project that you will designate as the primary project for storing evidence.

2. **Create a GCS Bucket for Evidence Storage**  
   Set up a new [Google Cloud Storage (GCS) bucket](https://cloud.google.com/storage/docs/creating-buckets) to store evidence collected by Cado. You will select this bucket during the import process in the Cado interface.

3. **Create a Cado IAM Role**  
   Create a new IAM role for Cado with the required permissions. The permissions for cross-cloud acquisitions are listed [below](/cado/deploy/cross/adding-gcp#permissions). <br />
   [**Script link**](/cado/deploy/gcp/gcp-auto-setup#role-creation)

   :::info 
   This role can be created at the organization level to provide access to multiple projects using one service account.
   :::

4. **Assign the IAM Role to the Compute Engine Principal**
   - Go to **IAM and Admin** > **IAM** in the Google Cloud Console.  
   - Locate the principal with the format `xxxxxxxxxxxx-compute@developer.gserviceaccount.com`
      - You may need to check the box 'Include Google-provided role grants'
   - Edit this principal to grant it the new Cado IAM role.  
   - Note down the principal name, as it will be used to configure access to other GCP projects.

5. **Create a New Service Account and Grant Role**  
   Follow these [Google instructions](https://cloud.google.com/iam/docs/service-accounts-create) to create a new service account in the primary GCP project.
   Assign the newly created Cado IAM role to the service account by following [these Google instructions](https://cloud.google.com/iam/docs/create-service-agents#grant-roles), making sure to grant it the Cado IAM role. <br />
   [**Script link**](/cado/deploy/gcp/gcp-auto-setup#service-account-creation)

6. **Create Service Account Credentials and add to Cado**  
   Navigate to the **Keys** tab of the created service account and **Add Key**, selecting the **JSON** option. This is the JSON you will input into the **Cloud Accounts** settings section in Cado.
   :::warning
   These credentials are **sensitive** and should be stored appropriately according to your organization's password/secret management policy
   :::

7. **Grant Access to Other GCP Projects**  
   To allow Cado to collect evidence from additional GCP projects, follow the [Cado documentation](/cado/deploy/gcp/gcp-cross-project) for setting up access to each additional project. <br />
   [**Script link**](/cado/deploy/gcp/gcp-auto-setup#cross-project-access)

---

### Permission list for importing from GCP into a Cado deployment in AWS or Azure

Please see [here](/cado/deploy/gcp/iam-description) for permissions for Cado to be deployed in GCP, as opposed to just importing from GCP.

| **Permission**                             | **Purpose**                                                                                      |
|--------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Required for Compute  acquisition**                  | |
| cloudbuild.builds.get| View details of a specific build. |
| cloudbuild.builds.create| Start a new build using Cloud Build. |
| compute.disks.get| View details of a specific disk. |
| compute.disks.use| Attach and use disks with read/write access. |
| compute.disks.list| List all disks in a project or zone. |
| compute.disks.useReadOnly| Attach and use disks with read-only access. |
| compute.globalOperations.get| View global operation status. |
| compute.images.create| Create custom images from disks or snapshots. |
| compute.instances.get| View details of a specific instance. |
| compute.instances.list| List all VM instances. |
| compute.images.delete| Delete VM image |
| compute.images.get| View details of a specific image. |
| compute.instances.getSerialPortOutput` – Read the serial port output from a VM instance. |
| compute.projects.get| View project-level metadata and settings. |
| **Required for Store and other acquisitions**                  | |
| storage.buckets.create | Create new GCS buckets. |
| storage.buckets.get | View details of a specific bucket. |
| storage.buckets.list | List all buckets in a project. |
| storage.objects.create | Upload new objects (files) to a bucket. |
| storage.objects.get | Download or view objects. |
| storage.objects.list | List objects in a bucket. |
| **Required for GKE acquisition** |  |
| container.clusters.get | View details of a specific GKE cluster. |
| container.clusters.list | List all GKE clusters in a project. |
| container.pods.exec | Execute commands inside a running pod (e.g., kubectl exec). |
| container.pods.get | View details of a specific pod. |
| container.pods.list | List all pods in a namespace or cluster. |
| iam.serviceAccounts.implicitDelegation | Allows service accounts to delegate to Kubernetes API |
| **Required for access to GCP projects, necessary for all acquisitions** |  |
| iam.serviceAccounts.getAccessToken | Generate access tokens for service accounts (used for authentication). |
| resourcemanager.projects.get | View metadata and configuration of a GCP project. |

