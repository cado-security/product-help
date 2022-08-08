---
title: Updating
hide_title: true
sidebar_position: 9
---


# Updating Your Cado Response Instance

You can view version information and trigger updates by clicking **Updates** from the **Settings** menu.

* For AWS, the default update mechanism requires the ability for the Cado Response instance to connect outbound to a URL hosted at cado-public.s3.amazonaws.com and then deploy a public AMI in the same region in which Cado Response is deployed.
* For Azure, the default update mechanism requires the ability to connect outbound to a VHD URL. 

Alternatively, you can specify an AMI ID in AWS or a VHD URL in Azure using the Alternative Update Method.  In all cases, upgrades to Cado Response are user-initiated and will not be initiated automatically by Cado.

If you have deployed with Terraform, update the AMI ID (AWS) or VHD URL (Azure) and run ``terraform apply``.