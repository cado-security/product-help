---
title: Azure Terraform deployment
hide_title: true
sidebar_position: 1
---

# How to deploy / Forensic Acquisition and Investigation in Azure with Terraform

To set up / Forensic Acquisition and Investigation in Azure you can deploy via our Terraform script.  The Terraform script automates the process of configuring the platform stack.

If you are working with the / Forensic Acquisition and Investigation Sales team already, you should receive the following pieces of information:
- a link to the / Forensic Acquisition and Investigation image
- the latest / Forensic Acquisition and Investigation Terraform module (**azure.zip**) for deploying into Azure, or clone from https://github.com/cado-security/Deployment-Templates/tree/main/azure

If you have not received the above items, reach out to sales@cadosecurity.com for more details or retrieve from our [public update information](https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json).
Once you receive them, continue on to the steps below.

1. **[Install Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)**, if you have not already.

2. **[Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)**, if you have not already.

3. Run 'az login'. The account you log in with will be used to deploy.  You should store the / Forensic Acquisition and Investigation VHD in your local Azure container for this account as well.

    :::tip
    If you have multiple Subscriptions, please ensure you set the Subscription properly prior to beginning the deployment, as outlined here:  
    https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/azure_cli#logging-into-the-azure-cli
    :::

    :::tip
    Depending on your Azure permissions, you may need to be assigned one or more of the following roles in order to complete the deployment:
    - Storage Blob Data Contributor
    - Storage Blob Data Reader
    - Storage Queue Data Contributor
    - Storage Queue Data Reader
    :::

6. Extract `azure.zip`  This is the ZIP that was provided by / Forensic Acquisition and Investigation Sales

7. Change directories into `azure/cado` which was extracted in the previous step.

8. Create a public and private ssh key. Make sure the directory exists before running the command and do not use a passphrase:
    
    :::tip
    You will likely need to create the `keys` directory by running `mkdir ../keys` prior to running the next step
    :::

    ```console
    ssh-keygen -t rsa -b 4096 -f ../keys/azure_demo_key -q -N ""
    ```

9. Customize the file `azure/cado/main.tf` by filling in the default values for the following variables:

    | Parameter Name | Description | Example |
    | -------------- | ----------- | ------- |
    | `image_id` | Cado [Image Gallery URL](https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json) | `/communityGalleries/cadoplatform-1a38e0c7-afa4-4e0d-9c56-433a12cd67b1/images/CadoResponseV2.0/versions/2.209.0` |
    | `ip_pattern_https` | List of incoming IPs permitted to access HTTPS. CIDR or source IP range or * to match any IP.  At least one value is required. | `["1.2.3.4/32","1.2.3.5/32"]`|
    | `ip_pattern_all` | List of incoming IPs permitted to access HTTPS and SSH. CIDR or source IP range or * to match any IP. At least one value is required. This should be the CIDR of the machine that is running the Terraform deployment script. | `["1.2.3.6/32"]`  |
    | `instance_type` | Instance type to use for main | Recommended to use `Standard_D16ds_v4`  If you have questions on instance sizing, please contact support for guidance. |
    | `resource_group` | Resource group name which will be created.  This resource group name must not exist already | `resgroup123` |
    | `region` | Region to deploy in.  You can use the Display Name or Name of the region as shown when running `az account list-locations -o table` | `North Europe`, `northeurope`, `East US`, `eastus` |
    | `share_size` | Size of network file share | `500` This value is dependent on the amount of data you will be processing into the Cado platform.  Please speak with the sales or support team for proper sizing. |
    | `main_size` | Size of main instance local disk in GB | `30` *Do not change* |
    | `main_data_size` | Size of main instance local disk in GB | `500` This value is dependent on the amount of data you will be processing into the Cado platform.  Please speak with the sales or support team for proper sizing. |
    | `processing_mode` | Processing mode to start in | `scalable-vm` *Do not change* |
    | `ssh_key_public` | Path to SSH public key | `../keys/azure_demo_key.pub` |
    | `ssh_key_private` | Path to SSH private key | `../keys/azure_demo_key` |
    | `proxy` | (https://user:pass@1.2.3.4:1234) | Optional Proxy URL to use for outbound connections in format / User Pass - https://user:pass@1.2.3.4:1234 |
    | `proxy_cert_url` | (url) | Optional location of where to download and trust the proxy certificate, leave blank to use proxy without a cert. |

    :::tip
     We recommend a minimum setting of 500GB for `main_data_size`. The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Investigations can always be deleted to recover space.
    :::
    ---

    ### Example Usage of `service_principal`

    If you decide to use a service principal, set it in your `terraform.tfvars` or adjust `variable "service_principal"` in `azure/cado/main.tf` (or pass it via command line as a `-var` parameter). For example:

    ```hcl
    service_principal = {
        client_id     = "YOUR-CLIENT-ID"
        tenant_id     = "YOUR-TENANT-ID"
        client_secret = "YOUR-CLIENT-SECRET"
        object_id     = "YOUR-SERVICE-PRINCIPLE-OBJECT-ID"
    }
    ```
    **Warning:** We pass the service principal credentials via `user_data` to the instance. These credentials are stored in base64 in the Terraform state file.

9. Deploy by running the following commands in the directory `azure/cado/`

    `terraform init` followed by `terraform plan`.  Once you confirm the plan looks correct, you can then run `terraform apply`

10. Make a note of the IP Address and the full Resource Id (/subscription/.../cado-main-vm) in the logs e.g.:

```console
module.cado_scalable.azurerm_linux_virtual_machine.vm (remote-exec): public_ip = 1.2.3.4
module.cado_scalable.azurerm_linux_virtual_machine.vm: Creation complete after 1m53s [id=/subscriptions/2f34c608-91b5-4d14-ac36-b8e0377fbcca/resourceGroups/new_res_three/providers/Microsoft.Compute/virtualMachines/cado-main-vm]
```

The Resource ID can also be found within your Azure Portal by navigating to `Home > Virtual Machines`, clicking on the / Forensic Acquisition and Investigation VM name, then clicking `Properties` on the left navigation bar.  Scroll down to find the `Resource ID`.

It will take about 20 minutes to deploy, then you can **[Log into Cado](/cado/deploy/logging-in)** 

11. Login to the / Forensic Acquisition and Investigation Platform with:

    **Username:** admin
    **Password:** The long resource ID that can be found by opening the VM in the Azure portal > Settings > Properties > Resource ID starting with /subscription/... ending with /subscription/.../VM NAME

### Testing the deployment
After deployment, you can import Test Data from the `Help` menu to confirm that the deployment was successful.
:::

### Renaming the / Forensic Acquisition and Investigation Instance
When deploying, the main / Forensic Acquisition and Investigation instance will have the name `CadoResponse`.  If you rename your instance, please ensure the name **starts with** `CadoResponse`, otherwise the default update mechanism may not work properly due to how permissions are configured.
:::


### If you receive the error "The Cado platform in Azure will not start with the error: The client with object id does not have authorization to perform action 'Microsoft.Storage/storageAccounts/read'"

If you find the Cado platform in Azure will not start with the error:
```The client $client with object id $object does not have authorization to perform action 'Microsoft.Storage/storageAccounts/read' over scope $subscription or the scope is invalid. If access was recently granted, please refresh your credentials. ```

Please resolve by:
- Find the cado-main-vm in the azure portal
- Go to the Identity section
- You should see 'system assigned' is off, and 'user assigned' has a single entry 'cado-identity'
- Remove any extra managed and switch system assigned to off
- Then, reboot cado-main-vm and it will use the correct policy
