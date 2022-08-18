---
title: Discovering the Asset Landscape (Beta)
hide_title: true
sidebar_position: 3
---

# Discovering the Asset Landscape

**This feature is currently in beta - to enable this feature please reach out to Customer Support**

Cado Response allows you to import metadata from your cloud estate in order to better prepare for incidents.

A Cloud Snapshot gives you basic information about systems that are running in your environment. To perform a Cloud Snapshot, enter the AWS Account IDs of the accounts that you want to discover. You can supply a comma delimited list, or for a long lost you can upload a CSV of account IDs.

Hit *Validate Accounts* to ensure that you have access to all the accounts you have entered. Then hit *Create Snapshot* to import the metadata. This may take some time depending on the size of the cloud environment.

![Cloud Snapshot](/img/cloud-snapshot.png)

When the snapshot has been created it will appear in a list of cloud snapshots.

![Cloud Snapshot List](/img/cloud-snapshot-list.png)

Opening a successfully created snapshot gives you a searchable list of all EC2 instances and S3 buckets in your environment. 

![Asset Landscape](/img/asset-landscape.png)

By searching for and selecting any of these instances or buckets you can import them into an existing project.
![Asset Import](/img/asset-import.png)

Clicking on an asset attribute allows you view the details of that asset, or filter on the selected attribute

![Asset Click](/img/asset-click.png)

Asset details show available metadata about the asset. Clicking on any of the asset attributes adds that attribute to the filter
![Asset Details](/img/asset-details.png)