---
title: Updating
hide_title: true
sidebar_position: 9
---

:::info
This section is not relevant to SaaS deployments.
:::

# How to Update the / Forensic Acquisition and Investigation Platform

You can check version details and initiate updates by selecting **Updates** from the **Settings** menu.

### AWS
- The default update method in AWS requires the / Forensic Acquisition and Investigation instance to have outbound connectivity to `cado-public.s3.amazonaws.com`. It will then deploy a public AMI in the same region as the / Forensic Acquisition and Investigation platform.

### Azure
- For Azure, the default update process requires outbound connectivity to a VHD URL. You can update via the UI, but to minimize Terraform state drift, it is recommended to follow the Terraform instructions for updates.

### GCP
- Updates in GCP can be performed through the UI or using Terraform. Terraform users should specify the new image in the `gcpVars.tfvars` file.

### Alternative Update Method
:::warning
Required updates must not be skipped. All versions marked as `required: true` in the [update JSON](https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json) must be upgraded through before later versions can be upgraded to. If no future versions are marked as required, you can jump striaght to the latest version.
:::
In AWS or Azure, you can manually specify an AMI ID or VHD URL, respectively, using the **Alternative Update Method**. 

Note that all updates are user-initiated; Cado will not trigger updates automatically.

![Update](/img/alt-update.png)

### Updating with Terraform
For users deploying with Terraform, update the AMI ID (AWS), VHD URL (Azure), or VMDK URL (GCP) and then run `terraform apply`.

:::warning
When upgrading via Terraform, it is recommended to gracefully stop your currently running instance through the console before starting the upgrade.
:::
:::warning
Required updates must not be skipped. All versions marked as `required: true` in the [update JSON](https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json) must be upgraded through before later versions can be upgraded to. If no future versions are marked as required, you can jump striaght to the latest version.
:::


## Update Details for Terraform and Custom Updates

To retrieve the latest AMI IDs and URLs for updating your / Forensic Acquisition and Investigation platform, refer to our public [update JSON](https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json).

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

## How does the Update Mechanism work?

The update mechanism works by deploying a new instance (via AMI in AWS, or via URL in Azure and GCP) and moving the attatched data-disk. In AWS HA environments, the ASG is updated to use the new AMI.

If updating via the User Interface, before the update is performed, a number of checks are performed to ensure any IAM or Infrastructure requirements are met. A warning is issued in the UI if the AMI is not from an official / Forensic Acquisition and Investigation account.

If updating manually by Terraform or CloudFormation, these checks cannot be run.
