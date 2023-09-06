"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[265],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"Overview",hide_title:!0,sidebar_position:1},i=void 0,l={unversionedId:"cado-response/deploy/azure/azure-deploy",id:"cado-response/deploy/azure/azure-deploy",title:"Overview",description:"Azure Deployment Overview",source:"@site/docs/cado-response/deploy/azure/azure-deploy.md",sourceDirName:"cado-response/deploy/azure",slug:"/cado-response/deploy/azure/azure-deploy",permalink:"/cado-response/deploy/azure/azure-deploy",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/azure/azure-deploy.md",tags:[],version:"current",lastUpdatedAt:1694035850,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:1,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"High Availability",permalink:"/cado-response/deploy/aws/performance-resiliency/high-availability"},next:{title:"Cross Subscription and Tenancy",permalink:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions"}},p={},s=[{value:"Azure Deployment Overview",id:"azure-deployment-overview",level:2},{value:"Azure Terraform Script",id:"azure-terraform-script",level:2},{value:"How to Add Tags to Resources",id:"how-to-add-tags-to-resources",level:3}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"azure-deployment-overview"},"Azure Deployment Overview"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Intended Audience and Operating Environment Requirements:"),"\n",(0,r.kt)("em",{parentName:"p"},"This information is written for proficient Azure cloud administrators who are familiar with Azure technology and cloud operations. This manual assumes familiarity with MS Azure, including: Subscriptions,  Resource Groups, Virtual Machines, Storage Accounts, and Storage Containers."))),(0,r.kt)("p",null,"Deployment of the Cado platform is performed within your Azure cloud environment via a Terraform Script. When the platform is deployed, it creates its own isolated network in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes."),(0,r.kt)("h2",{id:"azure-terraform-script"},"Azure Terraform Script"),(0,r.kt)("p",null,"To set up Cado in Azure you can deploy via our Terraform script.  The Terraform script automates the process of configuring the platform stack."),(0,r.kt)("p",null,"If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive the following pieces of information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a link to the Cado VHD image"),(0,r.kt)("li",{parentName:"ul"},"the latest Cado Terraform module (",(0,r.kt)("strong",{parentName:"li"},"azure.zip"),") for deploying into Azure")),(0,r.kt)("p",null,"If you have not received the above items, reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@cadosecurity.com"},"sales@cadosecurity.com")," for more details.  Once you receive them, continue on to the steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"Install Terraform")),", if you have not already.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"Install Azure CLI")),", if you have not already.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run 'az login'. The account you log in with will be used to deploy.  You should store the Cado VHD in your local Azure container for this account as well."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you have multiple Subscriptions, please ensure you set the Subscription properly prior to beginning the deployment, as outlined here:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/azure_cli#logging-into-the-azure-cli"},"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/azure_cli#logging-into-the-azure-cli"))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Depending on your Azure permissions, you may need to be assigned one or more of the following roles in order to complete the deployment:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Storage Blob Data Contributor"),(0,r.kt)("li",{parentName:"ul"},"Storage Blob Data Reader"),(0,r.kt)("li",{parentName:"ul"},"Storage Queue Data Contributor"),(0,r.kt)("li",{parentName:"ul"},"Storage Queue Data Reader")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a storage account and container to stage the Cado VHD locally within your Azure tenancy.  This will be from where the platform will be deployed.  You must copy the image to the same region in which you want to deploy Cado.  You can complete these steps using the Azure portal or the Azure CLI"),(0,r.kt)("p",{parentName:"li"},"a. ",(0,r.kt)("strong",{parentName:"p"},"Create a resource group"),", if you do not have one already, for the local download of the VHD using the Azure portal or the Azure CLI as shown below.  Note this needs to be less than 6 characters in length:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'az group create --resource-group "<AzureResourceGroup>" --location "<AzureRegion>"  --subscription "<SubscriptionName>"\n')),(0,r.kt)("p",{parentName:"li"},"b. ",(0,r.kt)("strong",{parentName:"p"},"Create a storage account"),", if you do not have one already, using the Azure portal or the Azure CLI as shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'az storage account create --name "<StorageAccountName>" --resource-group "<ResourceGroup>" --location "<AzureRegion>" --sku "Standard_LRS"  --subscription "<SubscriptionName>"\n')),(0,r.kt)("p",{parentName:"li"},"c. ",(0,r.kt)("strong",{parentName:"p"},"Create a container"),", if you do not have one already, using the Azure portal or the Azure CLI as shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'az storage container create -n "<ContainerName>" -g "<ResourceGroup>" --account-name "<StorageAccountName>" --account-key "<AccountKeyValue>"  --subscription "<SubscriptionName>"\n')),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find your storage account's account key by either running the command below or by locating it within the Azure Portal:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Running the following command:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"az storage account keys list --account-name <StorageAccountName>\n")),(0,r.kt)("ol",{parentName:"admonition",start:2},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://portal.azure.com/"},"Azure portal")),", navigate to the resource group that you created, then the storage account, then click ",(0,r.kt)("strong",{parentName:"li"},"Settings > Access keys")," in your storage account's menu blade to see both primary and secondary access keys.  You can then click the ",(0,r.kt)("strong",{parentName:"li"},"Show keys")," button and copy the ",(0,r.kt)("strong",{parentName:"li"},"Key")," value.  Key values should be enclosed in double quotes if working from within bash. You can also use a connection string or SAS token to authenticate the command. More details on this here: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-US/cli/azure/storage/container?view=azure-cli-latest#az_storage_container_create"},"Creating a container in a storage account"))))))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the VHD to your Azure subscription using the command below.  Substitute ",(0,r.kt)("inlineCode",{parentName:"p"},"$RELEASE_URI")," with the VHD URL which was provided by Cado Sales:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'az storage blob copy start --subscription "<SubscriptionName>" --account-name "<StorageAccountName>" --account-key "<AccountKeyValue>" --destination-blob "cado_response.vhd" --destination-container "<ContainerName>" --source-uri "$RELEASE_URI"\n')),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Wait for the copy operation to complete before moving to the next step.  You can check the status of the blob copy by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"az storage blob show")," command as outlined below.  This example is for Windows.  You can pipe the same command to ",(0,r.kt)("em",{parentName:"p"},"grep")," in Linux.  You will know the process is complete when the output ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," field changes from ",(0,r.kt)("strong",{parentName:"p"},"pending")," to ",(0,r.kt)("strong",{parentName:"p"},"success")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'az storage blob show --account-name "<StorageAccountName>" --account-key "<AccountKeyValue>" --name "cado_response.vhd" --container-name "<ContainerName>" --subscription "<SubscriptionName>"  -o yamlc | findstr status\n'))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Also note that if you need to capture very large disks (>=1tb) you will need to deploy in a region where storage optimized (L) instances are available, e.g. US East."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract ",(0,r.kt)("inlineCode",{parentName:"p"},"azure.zip"),"  This is the ZIP that was provided by Cado Sales")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change directories into ",(0,r.kt)("inlineCode",{parentName:"p"},"azure/cado")," which was extracted in the previous step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a public and private ssh key. Make sure the directory exists before running the command and do not use a passphrase:"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You will likely need to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," directory by running ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir ../keys")," prior to running the next step")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'ssh-keygen -b 4096 -f ../keys/azure_demo_key -q -N ""\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Customize the file ",(0,r.kt)("inlineCode",{parentName:"p"},"azure/cado/main.tf")," by filling in the default values for the following variables:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Cado VHD blobstore URL.  This is the URL to the ",(0,r.kt)("em",{parentName:"td"},"cado_response.vhd")," blob within your container storage (created in Step 4c above) . It is in the format: ",(0,r.kt)("inlineCode",{parentName:"td"},"https:// <StorageAccountName>.blob.core.windows.net/ <ContainerName>/ cado_response.vhd"),' and can be found within your Azure Portal by navigating to "Home > Storage accounts", selecting the ',(0,r.kt)("em",{parentName:"td"},"StorageAccountName"),', clicking "Storage browser (preview)", clicking the ',(0,r.kt)("em",{parentName:"td"},"ContainerName"),', clicking the "cado_response.vhd" blob and viewing the "URL" value.'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https:// mycadostorage.blob.core.windows.net/ cadocontainer/cado_response.vhd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ip_pattern_https")),(0,r.kt)("td",{parentName:"tr",align:null},"List of incoming IPs permitted to access HTTPS. CIDR or source IP range or * to match any IP.  At least one value is required."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["1.2.3.4/32","1.2.3.5/32"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ip_pattern_all")),(0,r.kt)("td",{parentName:"tr",align:null},"List of incoming IPs permitted to access HTTPS and SSH. CIDR or source IP range or * to match any IP. At least one value is required. This should be the CIDR of the machine that is running the Terraform deployment script."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["1.2.3.6/32"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"instance_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Instance type to use for main"),(0,r.kt)("td",{parentName:"tr",align:null},"Recommended to use ",(0,r.kt)("inlineCode",{parentName:"td"},"Standard_D16ds_v4"),"  If you have questions on instance sizing, please contact support for guidance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resource_group")),(0,r.kt)("td",{parentName:"tr",align:null},"Resource group name which will be created.  This resource group name must not exist already"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resgroup123"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"region")),(0,r.kt)("td",{parentName:"tr",align:null},"Region to deploy in.  You can use the Display Name or Name of the region as shown when running ",(0,r.kt)("inlineCode",{parentName:"td"},"az account list-locations -o table")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"North Europe"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"northeurope"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"East US"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"eastus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"share_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of network file share"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500")," This value is depenedent on the amount of data you will be processing into the Cado platform.  Please speak with the sales or support team for proper sizing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"main_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of main instance local disk in GB"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30")," ",(0,r.kt)("em",{parentName:"td"},"Do not change"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"main_data_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of main instance local disk in GB"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500")," This value is depenedent on the amount of data you will be processing into the Cado platform.  Please speak with the sales or support team for proper sizing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"processing_mode")),(0,r.kt)("td",{parentName:"tr",align:null},"Processing mode to start in"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scalable-vm")," ",(0,r.kt)("em",{parentName:"td"},"Do not change"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ssh_key_public")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to SSH public key"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"../keys/azure_demo_key.pub"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ssh_key_private")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to SSH private key"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"../keys/azure_demo_key"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"finalize_cmd")),(0,r.kt)("td",{parentName:"tr",align:null},"Finalize command"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"echo 'not required'")," ",(0,r.kt)("em",{parentName:"td"},"Do not change"))))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"}," We recommend a minimum setting of 500GB for ",(0,r.kt)("inlineCode",{parentName:"p"},"main_data_size"),". The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can always be deleted to recover space."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy by running the following commands in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"azure/cado/")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"terraform init")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform plan"),".  Once you confirm the plan looks correct, you can then run ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make a note of the IP Address and the full Resource Id (/subscription/.../cado-main-vm) in the logs e.g.:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"module.cado_scalable.azurerm_linux_virtual_machine.vm (remote-exec): public_ip = 1.2.3.4\nmodule.cado_scalable.azurerm_linux_virtual_machine.vm: Creation complete after 1m53s [id=/subscriptions/2f34c608-91b5-4d14-ac36-b8e0377fbcca/resourceGroups/new_res_three/providers/Microsoft.Compute/virtualMachines/cado-main-vm]\n")),(0,r.kt)("p",null,"The Resource ID can also be found within your Azure Portal by navigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"Home > Virtual Machines"),", clicking on the Cado VM name, then clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," on the left navigation bar.  Scroll down to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource ID"),"."),(0,r.kt)("p",null,"It will take about 20 minutes to deploy, then you can ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../../manage/logging-in"},"Log into Cado"))," "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"After deployment, you can import Test Data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Help")," menu to confirm that the deployment was successful.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When deploying, the main Cado instance will have the name ",(0,r.kt)("inlineCode",{parentName:"p"},"CadoResponse"),".  If you rename your Cado instance, please ensure the name ",(0,r.kt)("strong",{parentName:"p"},"starts with")," ",(0,r.kt)("inlineCode",{parentName:"p"},"CadoResponse"),", otherwise the default update mechanism may not work properly due to how permissions are configured.")),(0,r.kt)("h3",{id:"how-to-add-tags-to-resources"},"How to Add Tags to Resources"),(0,r.kt)("p",null,"Please see the ",(0,r.kt)("a",{parentName:"p",href:"/cado-response/deploy/intro#tagging-cado-response-resources"},"guide on Deployment Options")))}d.isMDXComponent=!0}}]);