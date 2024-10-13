---
title: Updating
hide_title: true
sidebar_position: 9
---


# How to Update the Cado Platform

You can check version details and initiate updates by selecting **Updates** from the **Settings** menu.

### AWS
- The default update method in AWS requires the Cado instance to have outbound connectivity to `cado-public.s3.amazonaws.com`. It will then deploy a public AMI in the same region as the Cado platform.

### Azure
- For Azure, the default update process requires outbound connectivity to a VHD URL. You can update via the UI, but to minimize Terraform state drift, it is recommended to follow the Terraform instructions for updates.

### GCP
- Updates in GCP can be performed through the UI or using Terraform. Terraform users should specify the new image in the `gcpVars.tfvars` file.

### Alternative Update Method
In AWS or Azure, you can manually specify an AMI ID or VHD URL, respectively, using the **Alternative Update Method**. 

Note that all updates are user-initiated; Cado will not trigger updates automatically.

### Updating with Terraform
For users deploying with Terraform, update the AMI ID (AWS), VHD URL (Azure), or VMDK URL (GCP) and then run `terraform apply`.

:::warning
When upgrading via Terraform, it is recommended to gracefully stop your currently running instance through the console before starting the upgrade.
:::

## Update Details for Terraform and Custom Updates

To retrieve the latest AMI IDs and URLs for updating your Cado platform, refer to our public [update JSON](https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json).

The latest release information is listed at the bottom of the JSON file:
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