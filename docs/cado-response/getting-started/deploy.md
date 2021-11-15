---
title: Deployment
hide_title: true
sidebar_position: 2
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

# Deployment

Deployment of Cado Response is performed within your cloud environment either via a CloudFormation Template or a Terraform Script. When the platform is deployed, it creates its own isolated VPC in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes.

:::info
Deployment differs slightly based on your preferred cloud provider. Links below will take you to the respective AWS and Azure deployment guides.
- **[AWS - CloudFormation Template](#aws-cloudformation-template)** 
- **[Azure - Terraform Script](#azure-terraform-script)** 
:::

## AWS CloudFormation Template

To set up Cado Response in AWS you simply deploy our CloudFormation Template (CFT).  The CFT steps you through the process of configuring the platform stack.

1. If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive a link to the Cado Response CloudFormation Template in order to get started. If you have not, reach out to sales@cadosecurity.com for more details.  Once you receive the link to the Cado Response CloudFormation Template, click the link to open the AWS CloudFormation Management Console.

2. On Step 1 (Specify template), do not change the default **Template is ready** and **Amazon S3 URL** settings.   Click **<Highlight color="#F78631">Next</Highlight>**

3. On Step 2 (Specify stack details), give your stack an appropriate Stack Name, for example: `CadoResponse` and enter the parameters as outlined below:

    | Parameter Name | Value | Description |
    | -------------- | ----- | ----------- |
    | Instance type for Cado Response EC2 Server | `t3a.xlarge` | For enterprise use we recommend at minimum a t3a.xlarge as the instance type. |
    | Key pair for Cado Response EC2 Server | *(choose your keypair)* | This key pair is used to enable SSH access to the Cado Response instance. This is not needed for normal operation, but is helpful should Cado Support ask for additional logs. |
    | CadoAMI | *(Please contact your Cado Sales team)* | Please contact your Cado Sales team for the appropriate AMI ID.  When contacting Sales, please provide your AWS Account Number and your AWS region where you will be deploying Cado Response. |
    | Allowed source IP addresses for connection to SSH | *(enter ip range)* | Enter details of your IP address/ IP address ranges that will be used to connect to SSH services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. Default is `0.0.0.0/0` but it is strongly recommended that these settings are restricted to your corporate network range. |
    | Allowed source IP addresses for connection to HTTPS | *(enter ip range)* |Enter details of your IP address/ IP address ranges that will be used to connect to HTTPS services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. Default is `0.0.0.0/0` but it is strongly recommended that these settings are restricted to your corporate network range. |
    | VPC CIDR | *(enter ip range)* | The Subnet the Cado VPC will use. Specify the IPv4 address range as a Classless Inter-Domain Routing (CIDR) block. |
    | EFSArchive | `AFTER_30_DAYS` | EFS - move data to infrequent storage after X days. |
    | InstanceVolumeSize | `1000`| EC2 instance volume required in GBit. |
    | S3ArchiveTime | `30` | Move S3 data to s3 glacier storage if not used after X days |
    | S3GlacierDelete | `365` | Delete S3 glacier storage data after X days. |
    
    :::tip
     We recommend a minimum setting of 500GB for InstanceVolumeSize. The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can always be deleted to recover space.
    :::

4. Click **<Highlight color="#F78631">Next</Highlight>**

5. On Step 3 (Configure stack options), click **<Highlight color="#F78631">Next</Highlight>** again (unless you require custom settings). If you require custom settings, please contact Cado Security

    ![Step 3](/img/cft-step3.png)

    :::info
    For more information on available stack options, see [AWS Documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html).
    :::

6. Click **<Highlight color="#F78631">Next</Highlight>**

7. Review the details that have been applied and click **<Highlight color="#F78631">Create Stack</Highlight>**

    :::info
    If an IAM role has not been applied in *Step 3 (Configure stack options)* tick the check box for `I acknowledge that AWS CloudFormation might create IAM resources`
    :::

### Deployment Time

Deploying the CloudFormation stack will take approximately fifteen minutes, followed by another ten minutes for the completed stack to run an installation and update process.

When the CFT stack has a status of `CREATE_COMPLETE`, CloudFormation has finished creating the infrastructure for Cado Response.

![Creation Complete](/img/create-complete.png)

You can then **[Log into Cado Response](logging-in)** 

:::tip
After deployment, you can import Test Data from the `Help` menu to confirm that the deployment was successful.
:::


## Azure Terraform Script

To set up Cado Response in Azure you can deploy via our Terraform script.  The Terraform script automates the process of configuring the platform stack.

If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive the following pieces of information:
- a link to the Cado Response VHD image
- the latest Cado Response Terraform module (`cado-azure-tf.zip`) for deploying into Azure

If you have not received the above items, reach out to sales@cadosecurity.com for more details.  Once you receive them, continue on to the steps below.

1. **[Install Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)**, if you have not already.

2. **[Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)**, if you have not already.

3. Run 'az login'. The account you log in with will be used to deploy.  You should store the Cado Response VHD in your local Azure container for this account as well.

4. Create a storage account and container to stage the Cado Response VHD locally within your Azure tenancy.  This will be from where the platform will be deployed.  You must copy the image to the same region in which you want to deploy Cado Response.  You can complete these steps using the Azure portal or the Azure CLI

    a. **Create a resource group**, if you do not have one already, for the local download of the VHD using the Azure portal or the Azure CLI as shown below.  Note this needs to be less than 6 characters in length:
    ```console
    az group create --resource-group "<AzureResourceGroup>" --location "<AzureReigon>"
    ```

    b. **Create a storage account**, if you do not have one already, using the Azure portal or the Azure CLI as shown below:
    ```console
    az storage account create --name "<StorageAccountName>" --resource-group "<ResourceGroup>" --location "<AzureReigon>" --sku "Standard_LRS"
    ```

    c. **Create a container**, if you do not have one already, using the Azure portal or the Azure CLI as shown below:
    ```console 
    az storage container create -n <ContainerName> -g <ResourceGroup> --account-name <StorageAccountName> --account-key "<AccountKeyValue>"
    ```

    :::tip
    You can find your storage account's account key in the **[Azure portal](https://portal.azure.com/)**. Navigate to **Settings > Access keys** in your storage account's menu blade to see both primary and secondary access keys.  You can then click the **Show keys** button and copy the **Key** value.  Key values should be enclosed in double quotes if working from within bash. You can also use a connection string or SAS token to authenticate the command. More details on this here: **[Creating a container in a storage account](https://docs.microsoft.com/en-US/cli/azure/storage/container?view=azure-cli-latest#az_storage_container_create)**

    ![Access Keys](/img/azure-access-keys.png)
    :::


5. Copy the VHD to your Azure subscription using the command below.  Substitute `$RELEASE_URI` with the VHD URL which was provided by Cado Sales:
    ```console
    az storage blob copy start --auth-mode login --account-name "<StorageAccountName>" --destination-blob "cado_response.vhd" --destination-container "<ContainerName>" --source-uri "$RELEASE_URI"
    ```

    :::caution
    Wait for the copy operation to complete before moving to the next step.  You can check the status of the blob copy by running the `az storage blob show` command as outlined below.  This example is for Windows.  You can pipe the same command to *grep* in Linux.  You will know the process is complete when the output `status` field changes from **pending** to **success**
    ```console
    az storage blob show --auth-mode login --account-name "<StorageAccountName>"  --name "cado_response.vhd" --container-name "<ContainerName>" | findstr status
    ```
    :::

    :::tip
    Also note that if you need to capture very large disks (>=1tb) you will need to deploy in a region where storage optimized (L) instances are available, e.g. US East.
    :::

6. Create a public and private ssh key. Make sure the directory exists before running the command and do not use a passphrase:
    ```console
    ssh-keygen -b 4096 -f ../keys/azure_demo_key -q -N ""
    ```

7. Extract `cado-azure-tf.zip`  This is the ZIP that was provided by Cado Sales

8. Customize the file `cado-azure-tf/cado/main.tf` by filling in the default values for the following variables:

    | Parameter Name | Description | Example |
    | -------------- | ----------- | ------- |
    | `image_id` | Cado Response VHD blobstore URL.  This is the URL to the *cado_response.vhd* blob within your container storage (created in Step 4c above) . It is in the format: `https:// <StorageAccountName>.blob.core.windows.net/ <ContainerName>/ cado_response.vhd` and can be found within your Azure Portal by navigating to "Home > Storage accounts", selecting the *StorageAccountName*, clicking "Storage browser (preview)", clicking the *ContainerName*, clicking the "cado_response.vhd" blob and viewing the "URL" value. | `https:// mycadostorage.blob.core.windows.net/ cadocontainer/cado_response.vhd` |
    | `ip_pattern_https` | List of incoming IPs permitted to access HTTPS. CIDR or source IP range or * to match any IP.  At least one value is required. | `["1.2.3.4/32","1.2.3.5/32"]`|
    | `ip_pattern_all` | List of incoming IPs permitted to access HTTPS and SSH. CIDR or source IP range or * to match any IP. At least one value is required. This should be the CIDR of the machine that is running the Terraform deployment script. | `["1.2.3.6/32"]`  |
    | `instance_type` | Instance type to use for main | Minimum is `Standard_D8ds_v4`, but for most deployments, it is recommended to use `Standard_D16ds_v4`  If you have questions on instance sizing, please contact support for guidance. |
    | `resource_group` | Resource group name which will be created.  This resource group name must not exist already | `resgroup123` |
    | `region` | Region to deploy in.  You can use the Display Name or Name of the region as shown when running `az account list-locations -o table` | `North Europe`, `northeurope`, `East US`, `eastus` |
    | `share_size` | Size of network file share | `500` This value is depenedent on the amount of data you will be processing into the Cado Response platform.  Please speak with the sales or support team for proper sizing. |
    | `main_size` | Size of main instance local disk in GB | `30` *Do not change* |
    | `main_data_size` | Size of main instance local disk in GB | `500` This value is depenedent on the amount of data you will be processing into the Cado Response platform.  Please speak with the sales or support team for proper sizing. |
    | `processing_mode` | Processing mode to start in | `scalable-vm` *Do not change* |
    | `ssh_key_public` | Path to SSH public key | `../keys/azure_demo_key.pub` |
    | `ssh_key_private` | Path to SSH private key | `../keys/azure_demo_key` |
    | `finalize_cmd` | Finalize command | `echo 'not required'` *Do not change*  |

    :::tip
     We recommend a minimum setting of 500GB for `main_data_size`. The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can always be deleted to recover space.
    :::

9. Deploy by running `terraform init` followed by `terraform apply`.  You can review settings before deploying by running `terraform plan`

10. Make a note of the IP Address and the full Instance Id (/subscription/.../cado-main-vm) in the logs e.g.:

```console
module.cado_scalable.azurerm_linux_virtual_machine.vm (remote-exec): public_ip = 1.2.3.4
module.cado_scalable.azurerm_linux_virtual_machine.vm: Creation complete after 1m53s [id=/subscriptions/2f34c608-91b5-4d14-ac36-b8e0377fbcca/resourceGroups/new_res_three/providers/Microsoft.Compute/virtualMachines/cado-main-vm]
```

It will take about 20 minutes to deploy, then you can **[Log into Cado Response](logging-in)** 

:::tip
After deployment, you can import Test Data from the `Help` menu to confirm that the deployment was successful.
:::