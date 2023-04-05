---
title: GCP Cross-Project Setup
hide_title: true
sidebar_position: 2
---

# GCP Cross-Project Importing

After creating the service account, enabling Cloud Build and other relevant APIs, and setting up the Primary GCP Project as discussed in the [Overview](/docs/cado-response/deploy/gcp/gcp-settings.md), we can use these principals to import from other GCP projects under the same service acount.
:::info
This also allows cross-project importing, meaning images from an instance in `Project-A` can be saved to a bucket in `Project-B`
:::

In this example we'll be using `cadoserviceaccount@my-project.iam.gserviceaccount.com` as the service account we've already set up, and `01234567890@cloudbuild.gserviceaccount.com` as the defualt Cloud Build principal for our primary project.

## Secondary Project Permissions

In the secondary project, navigate to the **IAM and Admin > IAM** section and select **Grant Access**. Add both the created service account and cloud buid `gserviceaccount.com` emails in the **Add Principal** section and assign them both the **Basic -> Editor** role.

![GCP-Cross-Project-IAM](/img/gcp-cross-project-iam.png)

Once added they should both appear as principals in the **IAM** section of that project.

:::tip
This approach also works for adding permissions to Folders or Organizations. Simply select whichever resource you wish to grant access to in the [Manage Resources](https://console.cloud.google.com/cloud-resource-manager) section, and navigate to the **IAM and Admin > IAM** section for that resource.
:::

# Project Selection

Now in Cado, if the credentials of the service account are already in the platform after following the [Overview](/docs/cado-response/deploy/gcp/gcp-settings.md), when importing from GCP you will now have a selection of projects to choose from.

![GCP-Cado-Cross-Project](/img/gcp-cado-project-selection.png)

:::info
This configuration only allows us to import from our Secondary Project to our Primary Project. If we want to be able to import the other way as well, the Seconday Account's Cloud Build `gserviceaccount.com` will need to be granted access to the Primary Account's IAM section and given the **Editor** role.

Simply follow the same steps in the **Secondary Project Permissions** section, but using the Secondary Project's principal and adding it to the Primary Project.
:::
