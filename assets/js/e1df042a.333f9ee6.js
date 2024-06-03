"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[265],{5418:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(5893),t=n(1151);const i={title:"Overview",hide_title:!0,sidebar_position:1},s=void 0,a={id:"cado-response/deploy/azure/azure-deploy",title:"Overview",description:"Azure Deployment Overview",source:"@site/docs/cado-response/deploy/azure/azure-deploy.md",sourceDirName:"cado-response/deploy/azure",slug:"/cado-response/deploy/azure/azure-deploy",permalink:"/cado-response/deploy/azure/azure-deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/azure/azure-deploy.md",tags:[],version:"current",lastUpdatedAt:1717412519,formattedLastUpdatedAt:"Jun 3, 2024",sidebarPosition:1,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"High Availability",permalink:"/cado-response/deploy/aws/performance-resiliency/high-availability"},next:{title:"Cross Subscription and Tenancy",permalink:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions"}},c={},d=[{value:"Azure Deployment Overview",id:"azure-deployment-overview",level:2},{value:"Azure Terraform Script",id:"azure-terraform-script",level:2},{value:"How to Add Tags to Resources",id:"how-to-add-tags-to-resources",level:3},{value:"If you receive the error &quot;The Cado platform in Azure will not start with the error: The client with object id does not have authorization to perform action &#39;Microsoft.Storage/storageAccounts/read&#39;&quot;",id:"if-you-receive-the-error-the-cado-platform-in-azure-will-not-start-with-the-error-the-client-with-object-id-does-not-have-authorization-to-perform-action-microsoftstoragestorageaccountsread",level:3}];function l(e){const o={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"azure-deployment-overview",children:"Azure Deployment Overview"}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Intended Audience and Operating Environment Requirements:"}),"\n",(0,r.jsx)(o.em,{children:"This information is written for proficient Azure cloud administrators who are familiar with Azure technology and cloud operations. This manual assumes familiarity with MS Azure, including: Subscriptions,  Resource Groups, Virtual Machines, Storage Accounts, and Storage Containers."})]})}),"\n",(0,r.jsx)(o.p,{children:"Deployment of the Cado platform is performed within your Azure cloud environment via a Terraform Script. When the platform is deployed, it creates its own isolated network in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes."}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.img,{alt:"Azure Architecture",src:n(8658).Z+"",width:"1954",height:"1048"}),"\nThis diagram is a simplified architecture, with options for alternate network access.\nFor a diagram of how cross-cloud imports from Azure into AWS work, please see our ",(0,r.jsx)(o.a,{href:"https://cadosecurity.zendesk.com/hc/en-gb/articles/23259971240465-How-do-cross-cloud-imports-from-Azure-into-AWS-work",children:"Knowledge Base"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"azure-terraform-script",children:"Azure Terraform Script"}),"\n",(0,r.jsx)(o.p,{children:"To set up Cado in Azure you can deploy via our Terraform script.  The Terraform script automates the process of configuring the platform stack."}),"\n",(0,r.jsx)(o.p,{children:"If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive the following pieces of information:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"a link to the Cado VHD image"}),"\n",(0,r.jsxs)(o.li,{children:["the latest Cado Terraform module (",(0,r.jsx)(o.strong,{children:"azure.zip"}),") for deploying into Azure, or clone from ",(0,r.jsx)(o.a,{href:"https://github.com/cado-security/Deployment-Templates/tree/main/azure",children:"https://github.com/cado-security/Deployment-Templates/tree/main/azure"})]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["If you have not received the above items, reach out to ",(0,r.jsx)(o.a,{href:"mailto:sales@cadosecurity.com",children:"sales@cadosecurity.com"})," for more details.  Once you receive them, continue on to the steps below."]}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"Install Terraform"})}),", if you have not already."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli",children:"Install Azure CLI"})}),", if you have not already."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Run 'az login'. The account you log in with will be used to deploy.  You should store the Cado VHD in your local Azure container for this account as well."}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:["If you have multiple Subscriptions, please ensure you set the Subscription properly prior to beginning the deployment, as outlined here:",(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/azure_cli#logging-into-the-azure-cli",children:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/azure_cli#logging-into-the-azure-cli"})]})}),"\n",(0,r.jsxs)(o.admonition,{type:"tip",children:[(0,r.jsx)(o.p,{children:"Depending on your Azure permissions, you may need to be assigned one or more of the following roles in order to complete the deployment:"}),(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Storage Blob Data Contributor"}),"\n",(0,r.jsx)(o.li,{children:"Storage Blob Data Reader"}),"\n",(0,r.jsx)(o.li,{children:"Storage Queue Data Contributor"}),"\n",(0,r.jsx)(o.li,{children:"Storage Queue Data Reader"}),"\n"]})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Create a storage account and container to stage the Cado VHD locally within your Azure tenancy.  This will be from where the platform will be deployed.  You must copy the image to the same region in which you want to deploy Cado.  You can complete these steps using the Azure portal or the Azure CLI"}),"\n",(0,r.jsxs)(o.p,{children:["a. ",(0,r.jsx)(o.strong,{children:"Create a resource group"}),", if you do not have one already, for the local download of the VHD using the Azure portal or the Azure CLI as shown below.  Note this needs to be less than 6 characters in length:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-console",children:'az group create --resource-group "<AzureResourceGroup>" --location "<AzureRegion>"  --subscription "<SubscriptionName>"\n'})}),"\n",(0,r.jsxs)(o.p,{children:["b. ",(0,r.jsx)(o.strong,{children:"Create a storage account"}),", if you do not have one already, using the Azure portal or the Azure CLI as shown below:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-console",children:'az storage account create --name "<StorageAccountName>" --resource-group "<ResourceGroup>" --location "<AzureRegion>" --sku "Standard_LRS"  --subscription "<SubscriptionName>"\n'})}),"\n",(0,r.jsxs)(o.p,{children:["c. ",(0,r.jsx)(o.strong,{children:"Create a container"}),", if you do not have one already, using the Azure portal or the Azure CLI as shown below:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-console",children:'az storage container create -n "<ContainerName>" -g "<ResourceGroup>" --account-name "<StorageAccountName>" --account-key "<AccountKeyValue>"  --subscription "<SubscriptionName>"\n'})}),"\n",(0,r.jsxs)(o.admonition,{type:"tip",children:[(0,r.jsx)(o.p,{children:"You can find your storage account's account key by either running the command below or by locating it within the Azure Portal:"}),(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Running the following command:"}),"\n"]}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-console",children:"az storage account keys list --account-name <StorageAccountName>\n"})}),(0,r.jsxs)(o.ol,{start:"2",children:["\n",(0,r.jsxs)(o.li,{children:["In the ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://portal.azure.com/",children:"Azure portal"})}),", navigate to the resource group that you created, then the storage account, then click ",(0,r.jsx)(o.strong,{children:"Settings > Access keys"})," in your storage account's menu blade to see both primary and secondary access keys.  You can then click the ",(0,r.jsx)(o.strong,{children:"Show keys"})," button and copy the ",(0,r.jsx)(o.strong,{children:"Key"})," value.  Key values should be enclosed in double quotes if working from within bash. You can also use a connection string or SAS token to authenticate the command. More details on this here: ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://docs.microsoft.com/en-US/cli/azure/storage/container?view=azure-cli-latest#az_storage_container_create",children:"Creating a container in a storage account"})})]}),"\n"]})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Copy the VHD to your Azure subscription using the command below.  Substitute ",(0,r.jsx)(o.code,{children:"$RELEASE_URI"})," with the VHD URL which was provided by Cado Sales:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-console",children:'az storage blob copy start --subscription "<SubscriptionName>" --account-name "<StorageAccountName>" --account-key "<AccountKeyValue>" --destination-blob "cado_response.vhd" --destination-container "<ContainerName>" --source-uri "$RELEASE_URI"\n'})}),"\n",(0,r.jsxs)(o.admonition,{type:"caution",children:[(0,r.jsxs)(o.p,{children:["Wait for the copy operation to complete before moving to the next step.  You can check the status of the blob copy by running the ",(0,r.jsx)(o.code,{children:"az storage blob show"})," command as outlined below.  This example is for Windows.  You can pipe the same command to ",(0,r.jsx)(o.em,{children:"grep"})," in Linux.  You will know the process is complete when the output ",(0,r.jsx)(o.code,{children:"status"})," field changes from ",(0,r.jsx)(o.strong,{children:"pending"})," to ",(0,r.jsx)(o.strong,{children:"success"})]}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-console",children:'az storage blob show --account-name "<StorageAccountName>" --account-key "<AccountKeyValue>" --name "cado_response.vhd" --container-name "<ContainerName>" --subscription "<SubscriptionName>"  -o yamlc | findstr status\n'})})]}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsx)(o.p,{children:"Also note that if you need to capture very large disks (>=1tb) you will need to deploy in a region where storage optimized (L) instances are available, e.g. US East."})}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Extract ",(0,r.jsx)(o.code,{children:"azure.zip"}),"  This is the ZIP that was provided by Cado Sales"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Change directories into ",(0,r.jsx)(o.code,{children:"azure/cado"})," which was extracted in the previous step."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Create a public and private ssh key. Make sure the directory exists before running the command and do not use a passphrase:"}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:["You will likely need to create the ",(0,r.jsx)(o.code,{children:"keys"})," directory by running ",(0,r.jsx)(o.code,{children:"mkdir ../keys"})," prior to running the next step"]})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-console",children:'ssh-keygen -b 4096 -f ../keys/azure_demo_key -q -N ""\n'})}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Customize the file ",(0,r.jsx)(o.code,{children:"azure/cado/main.tf"})," by filling in the default values for the following variables:"]}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Parameter Name"}),(0,r.jsx)(o.th,{children:"Description"}),(0,r.jsx)(o.th,{children:"Example"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"image_id"})}),(0,r.jsxs)(o.td,{children:["Cado VHD blobstore URL.  This is the URL to the ",(0,r.jsx)(o.em,{children:"cado_response.vhd"})," blob within your container storage (created in Step 4c above) . It is in the format: ",(0,r.jsx)(o.code,{children:"https:// <StorageAccountName>.blob.core.windows.net/ <ContainerName>/ cado_response.vhd"}),' and can be found within your Azure Portal by navigating to "Home > Storage accounts", selecting the ',(0,r.jsx)(o.em,{children:"StorageAccountName"}),', clicking "Storage browser (preview)", clicking the ',(0,r.jsx)(o.em,{children:"ContainerName"}),', clicking the "cado_response.vhd" blob and viewing the "URL" value.']}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"https:// mycadostorage.blob.core.windows.net/ cadocontainer/cado_response.vhd"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"ip_pattern_https"})}),(0,r.jsx)(o.td,{children:"List of incoming IPs permitted to access HTTPS. CIDR or source IP range or * to match any IP.  At least one value is required."}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:'["1.2.3.4/32","1.2.3.5/32"]'})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"ip_pattern_all"})}),(0,r.jsx)(o.td,{children:"List of incoming IPs permitted to access HTTPS and SSH. CIDR or source IP range or * to match any IP. At least one value is required. This should be the CIDR of the machine that is running the Terraform deployment script."}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:'["1.2.3.6/32"]'})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"instance_type"})}),(0,r.jsx)(o.td,{children:"Instance type to use for main"}),(0,r.jsxs)(o.td,{children:["Recommended to use ",(0,r.jsx)(o.code,{children:"Standard_D16ds_v4"}),"  If you have questions on instance sizing, please contact support for guidance."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"resource_group"})}),(0,r.jsx)(o.td,{children:"Resource group name which will be created.  This resource group name must not exist already"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"resgroup123"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"region"})}),(0,r.jsxs)(o.td,{children:["Region to deploy in.  You can use the Display Name or Name of the region as shown when running ",(0,r.jsx)(o.code,{children:"az account list-locations -o table"})]}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.code,{children:"North Europe"}),", ",(0,r.jsx)(o.code,{children:"northeurope"}),", ",(0,r.jsx)(o.code,{children:"East US"}),", ",(0,r.jsx)(o.code,{children:"eastus"})]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"share_size"})}),(0,r.jsx)(o.td,{children:"Size of network file share"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.code,{children:"500"})," This value is depenedent on the amount of data you will be processing into the Cado platform.  Please speak with the sales or support team for proper sizing."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"main_size"})}),(0,r.jsx)(o.td,{children:"Size of main instance local disk in GB"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.code,{children:"30"})," ",(0,r.jsx)(o.em,{children:"Do not change"})]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"main_data_size"})}),(0,r.jsx)(o.td,{children:"Size of main instance local disk in GB"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.code,{children:"500"})," This value is depenedent on the amount of data you will be processing into the Cado platform.  Please speak with the sales or support team for proper sizing."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"processing_mode"})}),(0,r.jsx)(o.td,{children:"Processing mode to start in"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.code,{children:"scalable-vm"})," ",(0,r.jsx)(o.em,{children:"Do not change"})]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"ssh_key_public"})}),(0,r.jsx)(o.td,{children:"Path to SSH public key"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"../keys/azure_demo_key.pub"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"ssh_key_private"})}),(0,r.jsx)(o.td,{children:"Path to SSH private key"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"../keys/azure_demo_key"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"finalize_cmd"})}),(0,r.jsx)(o.td,{children:"Finalize command"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.code,{children:"echo 'not required'"})," ",(0,r.jsx)(o.em,{children:"Do not change"})]})]})]})]}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:["We recommend a minimum setting of 500GB for ",(0,r.jsx)(o.code,{children:"main_data_size"}),". The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can always be deleted to recover space."]})}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Deploy by running the following commands in the directory ",(0,r.jsx)(o.code,{children:"azure/cado/"})]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"terraform init"})," followed by ",(0,r.jsx)(o.code,{children:"terraform plan"}),".  Once you confirm the plan looks correct, you can then run ",(0,r.jsx)(o.code,{children:"terraform apply"})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Make a note of the IP Address and the full Resource Id (/subscription/.../cado-main-vm) in the logs e.g.:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-console",children:"module.cado_scalable.azurerm_linux_virtual_machine.vm (remote-exec): public_ip = 1.2.3.4\nmodule.cado_scalable.azurerm_linux_virtual_machine.vm: Creation complete after 1m53s [id=/subscriptions/2f34c608-91b5-4d14-ac36-b8e0377fbcca/resourceGroups/new_res_three/providers/Microsoft.Compute/virtualMachines/cado-main-vm]\n"})}),"\n",(0,r.jsxs)(o.p,{children:["The Resource ID can also be found within your Azure Portal by navigating to ",(0,r.jsx)(o.code,{children:"Home > Virtual Machines"}),", clicking on the Cado VM name, then clicking ",(0,r.jsx)(o.code,{children:"Properties"})," on the left navigation bar.  Scroll down to find the ",(0,r.jsx)(o.code,{children:"Resource ID"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["It will take about 20 minutes to deploy, then you can ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"../../manage/logging-in",children:"Log into Cado"})})]}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:["After deployment, you can import Test Data from the ",(0,r.jsx)(o.code,{children:"Help"})," menu to confirm that the deployment was successful."]})}),"\n",(0,r.jsx)(o.admonition,{type:"caution",children:(0,r.jsxs)(o.p,{children:["When deploying, the main Cado instance will have the name ",(0,r.jsx)(o.code,{children:"CadoResponse"}),".  If you rename your Cado instance, please ensure the name ",(0,r.jsx)(o.strong,{children:"starts with"})," ",(0,r.jsx)(o.code,{children:"CadoResponse"}),", otherwise the default update mechanism may not work properly due to how permissions are configured."]})}),"\n",(0,r.jsx)(o.h3,{id:"how-to-add-tags-to-resources",children:"How to Add Tags to Resources"}),"\n",(0,r.jsxs)(o.p,{children:["Please see the ",(0,r.jsx)(o.a,{href:"/cado-response/deploy/intro#tagging-cado-response-resources",children:"guide on Deployment Options"})]}),"\n",(0,r.jsx)(o.h3,{id:"if-you-receive-the-error-the-cado-platform-in-azure-will-not-start-with-the-error-the-client-with-object-id-does-not-have-authorization-to-perform-action-microsoftstoragestorageaccountsread",children:"If you receive the error \"The Cado platform in Azure will not start with the error: The client with object id does not have authorization to perform action 'Microsoft.Storage/storageAccounts/read'\""}),"\n",(0,r.jsxs)(o.p,{children:["If you find the Cado platform in Azure will not start with the error:\n",(0,r.jsx)(o.code,{children:"The client $client with object id $object does not have authorization to perform action 'Microsoft.Storage/storageAccounts/read' over scope $subscription or the scope is invalid. If access was recently granted, please refresh your credentials. "})]}),"\n",(0,r.jsx)(o.p,{children:"Please resolve by:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Find the cado-main-vm in the azure portal"}),"\n",(0,r.jsx)(o.li,{children:"Go to the Identity section"}),"\n",(0,r.jsx)(o.li,{children:"You should see 'system assigned' is off, and 'user assigned' has a single entry 'cado-identity'"}),"\n",(0,r.jsx)(o.li,{children:"Remove any extra managed and switch system assigned to off"}),"\n",(0,r.jsx)(o.li,{children:"Then, reboot cado-main-vm and it will use the correct policy"}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8658:(e,o,n)=>{n.d(o,{Z:()=>r});const r=n.p+"assets/images/azure-architecture-60e65c12f8a39ecca2a63196096ad1c4.png"},1151:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>s});var r=n(7294);const t={},i=r.createContext(t);function s(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);