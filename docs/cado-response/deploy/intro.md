---
title: Deployment Options
hide_title: true
sidebar_position: 1
---
# Cado Platform Deployment Options

The Cado platform can be deployed in either AWS or Azure.

**[Learn how in AWS >](aws/overview.md)**

**[Learn how in Azure >](azure/azure-deploy.md)**

## Cross Cloud Collection

When you deploy Cado in AWS you can import data "cross-cloud" from Azure or GCP. **Cross cloud** means that Cado is deployed in one cloud environment, but imports data from another.

![Cross Cloud Collection](/img/cross-cloud.png)

**[Learn how to set up cross cloud collection from Azure >](azure/azure-cross-tenancy-subscriptions.md)**

**[Learn how to set up cross cloud collection from GCP>](gcp/gcp-settings.md)**

## Tagging Cado Resources
You also have the option to have workers tagged when they are launched.  This can be done by specifying the **Tag Key** and **Tag Value** which will be assigned when workers are launched. If you wish to apply more than one tag to workers, please see the below options.

#### Terraform
If you have deployed via Terraform - You can apply multiple tags to workers in both AWS and Azure by updating the "tags" variable in Terraform. If you deployed via Terraform into Azure add the below snippet into the cado_deploy_azure/azure_transient/main.tf script.
Or, if you deployed via Terraform into AWS add the below snippet into the cado_deploy_aws/aws/main.tf script.
Please also note that you will have to run terraform apply again after saving these changes.

```
variable "tags" {
    type = map(string)
    default = {}
}
```

#### CloudFormation

If you deployed via CloudFormation Template you can apply multiple tags to workers by adding them to the "UserData" section of the CloudFormation Template. Please note that deploying via CloudFormation requires you to specify tags prior to deployment. To add a worker tag add the below to the "UserData" field. 

```
"echo CUSTOM_TAG_FOO = BAR  >> /home/admin/processor/first_run.cfg",
"\n",
```

:::info
The `CUSTOM_TAG_` prefix is required. If you would like to apply a tag with key "FOO" and value "BAR" then your line should appear as it does in the above example.
:::

:::info
The last line of the "UserData" field must contain
```
"sudo /home/admin/processor/release/finalize.sh --main"
```
:::
