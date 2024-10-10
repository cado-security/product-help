---
title: Updating
hide_title: true
sidebar_position: 9
---


# How to update the Cado platform

You can view version information and trigger updates by clicking **Updates** from the **Settings** menu.

* For AWS, the default update mechanism requires the ability for the Cado instance to connect outbound to a URL hosted at cado-public.s3.amazonaws.com and then deploy a public AMI in the same region in which the Cado platform is deployed.
* For Azure, the default update mechanism requires the ability to connect outbound to a VHD URL. You can upgrade via the UI, however if you wish to reduce Terraform state drift, it's recommended that you upgrade using the Terraform instructions below.
* For GCP, updates can be initiated through the user interface or Terraform. Terraform users can specify the new image in the `gcpVars.tfvars` file.

Alternatively, you can specify an AMI ID in AWS or a VHD URL in Azure using the Alternative Update Method.
In all cases, upgrades to the Cado platform are user-initiated and will not be initiated automatically by Cado.

If you have deployed with Terraform, update the AMI ID (AWS) or VHD URL (Azure) or VMDK URL (GCP) and run ``terraform apply``.
:::warning
For Terraform upgrades, it is recommended to gracefully stop your currently running instance in the console before proceeding with the upgrade.
:::

# Update Details for Terraform and Custom Updates

Please view our public [update JSON](https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json) for where to retrieve the latest AMI IDs and URLs for updating your Cado platform.

This URL contains the information, with the latest release at the bottom of the JSON file:
```
{
      "release_date": 1709694258, 
      "version": "2.119.0", 
      "required": false, 
      "ami_id": {
        "us-east-1": "ami-xxx"
      }, 
      "vhd_uri": "https://xxx", 
      "gcp_image": "https://xxx"
}
```
