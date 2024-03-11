---
title: Updating
hide_title: true
sidebar_position: 9
---


# Updating Your Cado Instance

You can view version information and trigger updates by clicking **Updates** from the **Settings** menu.

* For AWS, the default update mechanism requires the ability for the Cado instance to connect outbound to a URL hosted at cado-public.s3.amazonaws.com and then deploy a public AMI in the same region in which the Cado platform is deployed.
* For Azure, the default update mechanism requires the ability to connect outbound to a VHD URL. You can upgrade via the UI, however if you wish to reduce Terraform state drift, it's recommended that you upgrade using the Terraform instructions below.
* For GCP, updates can be initiated through the user interface or Terraform.

Alternatively, you can specify an AMI ID in AWS or a VHD URL in Azure using the Alternative Update Method.
In all cases, upgrades to the Cado platform are user-initiated and will not be initiated automatically by Cado.

If you have deployed with Terraform, update the AMI ID (AWS) or VHD URL (Azure) and run ``terraform apply``.