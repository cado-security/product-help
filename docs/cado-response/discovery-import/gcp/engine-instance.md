---
title: Google Compute Engine
hide_title: true
sidebar_position: 1
---

# How to import a Google Compute Engine instance
The Cado platform supports acquisition of GCP Compute instances. Select the GCP project and bucket where you can upload the image prior to importing it into the Cado platform.

Select the GCP project and Compute Instance you need. Review the details and click on 'Start Import'.

:::info In order for this feature to work we require the 'default' VPC in the GCP project you are acquiring from. GCP Cloud Build uses workers to help export the acquired disk which uses the 'default' VPC. :::

![GCP Compute Import](/img/gcp-compute.png)