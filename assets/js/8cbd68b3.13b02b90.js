"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2978],{173:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(5893),t=n(1151);const s={title:"GCP Deployment",hide_title:!0,sidebar_position:1},c=void 0,i={id:"cado-response/deploy/gcp/gcp-deploy",title:"GCP Deployment",description:"GCP Deployment Overview",source:"@site/docs/cado-response/deploy/gcp/gcp-deploy.md",sourceDirName:"cado-response/deploy/gcp",slug:"/cado-response/deploy/gcp/gcp-deploy",permalink:"/cado-response/deploy/gcp/gcp-deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/gcp/gcp-deploy.md",tags:[],version:"current",lastUpdatedAt:1710155110,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:1,frontMatter:{title:"GCP Deployment",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Platform Encryption",permalink:"/cado-response/deploy/azure/data-encryption-overview"},next:{title:"GCP Settings",permalink:"/cado-response/deploy/gcp/gcp-settings"}},l={},d=[{value:"GCP Deployment Overview",id:"gcp-deployment-overview",level:2},{value:"GCP Terraform Script",id:"gcp-terraform-script",level:2}];function a(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"gcp-deployment-overview",children:"GCP Deployment Overview"}),"\n",(0,r.jsx)(o.p,{children:"You can deploy the Cado platform within your GCP cloud environment via a Terraform Script. When you deploy the platform, it creates its own isolated network in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes."}),"\n",(0,r.jsx)(o.h2,{id:"gcp-terraform-script",children:"GCP Terraform Script"}),"\n",(0,r.jsxs)(o.p,{children:["To set up Cado in GCP you can deploy via our Terraform script.  The Terraform script automates the process of configuring the platform stack.\nVisit the GCP Marketplace listing ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/cado-public/cado-response",children:"here"})})," to download the latest Terraform code."]}),"\n",(0,r.jsx)(o.p,{children:"Once you have downloaded the Terraform code from the Marketplace listing above, continue on to the steps below."}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"Install Terraform"})}),", if you have not already."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://cloud.google.com/sdk/docs/install",children:"Install GCloud CLI"})}),", if you have not already."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Create a project and generate some service account credentials for the project, exporting the credentials.json. To create and use a service account, the user account will need ",(0,r.jsx)(o.strong,{children:"Service Account User"})," and ",(0,r.jsx)(o.strong,{children:"Service Account Admin"})," roles.\nThe service account itself will need to have the following roles:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Compute Admin"}),"\n",(0,r.jsx)(o.li,{children:"Service Account User"}),"\n",(0,r.jsx)(o.li,{children:"Storage Admin"}),"\n",(0,r.jsx)(o.li,{children:"Cloud Filestore Editor"}),"\n",(0,r.jsx)(o.li,{children:"Role Administrator"}),"\n",(0,r.jsx)(o.li,{children:"Security Admin"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Ensure the following ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/apis/library",children:"APIs"})})," are enabled in the project:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com",children:"Compute Engine"})})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com",children:"Cloud Build"})})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/file.googleapis.com",children:"Cloud Filestore"})})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/secretmanager.googleapis.com",children:"Secret Manager"})})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com",children:"Cloud Resource Manager"})})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com",children:"IAM Service Account Credentials"})})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com",children:"Cloud Storage"})})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Run ",(0,r.jsx)(o.code,{children:"gcloud auth activate-service-account --key-file <key_file>"})," where key_file is the path to your GCP service account credentials.json."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Run ",(0,r.jsx)(o.code,{children:"gcloud config set project <project_id>"})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Extract gcp.zip This is the ZIP that was provided by Cado Sales, or downloaded from the GCP Marketplace, or cloned from ",(0,r.jsx)(o.a,{href:"https://github.com/cado-security/Deployment-Templates/tree/main/gcp",children:"https://github.com/cado-security/Deployment-Templates/tree/main/gcp"})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Change directories into gcp/ which was extracted in the previous step."}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Customize the file ",(0,r.jsx)(o.code,{children:"gcpVars.tfvars"})," by filling in values:"]}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Parameter Name"}),(0,r.jsx)(o.th,{children:"Description"}),(0,r.jsx)(o.th,{children:"Example"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"unique_name"})}),(0,r.jsx)(o.td,{children:"A string to ensure that resources created by Cado are unique"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"cado"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"credentials_file"})}),(0,r.jsx)(o.td,{children:"Path to your GCP service account credentials json"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"../credentials.json"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"project_id"})}),(0,r.jsx)(o.td,{children:"ID of the project Cado will be deployed into"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"cado-12839"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"region"})}),(0,r.jsx)(o.td,{children:"The region which Cado will be deployed to"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"us-east1"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"image"})}),(0,r.jsx)(o.td,{children:"The link of the image provided by Cado"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"https://www.googleapis.com/compute/v1/projects/cado-public/global/images/cadoresponse-2-112-0"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"tags"})}),(0,r.jsx)(o.td,{children:"Tags to be applied to your Cado instance"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:'{tag1 = "cado-test"}'})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"vm_size"})}),(0,r.jsx)(o.td,{children:"Size of main instance"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"n2d-standard-8"})})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"vol_size"})}),(0,r.jsx)(o.td,{children:"Size of main instance local disk in GB"}),(0,r.jsx)(o.td,{children:"This value is dependent on the amount of data you will be processing into the Cado platform. Please speak with the sales or support team for proper sizing."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"allowed_ips"})}),(0,r.jsx)(o.td,{children:"List of incoming IPs"}),(0,r.jsx)(o.td,{children:(0,r.jsx)(o.code,{children:"[\u201c1.2.3.6/32\u201d]"})})]})]})]}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:["We recommend a minimum setting of 500GB for ",(0,r.jsx)(o.code,{children:"vol_size"}),". The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can always be deleted to recover space."]})}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Deploy by running the following commands in the directory ",(0,r.jsx)(o.code,{children:"gcp/"}),"\n",(0,r.jsx)(o.code,{children:"terraform init"})," followed by ",(0,r.jsx)(o.code,{children:"terraform plan -var-file=gcpVars.tfvars"}),".  Once you confirm the plan looks correct, you can then run ",(0,r.jsx)(o.code,{children:"terraform apply -var-file=gcpVars.tfvars"})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Find your Cado instance in the ",(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/compute/instances",children:"Compute Engine portal"}),", navigate to its public IP address in the browser"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Login with:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Username: admin"}),"\n",(0,r.jsx)(o.li,{children:"Password: <instance_id> (found in the Compute Engine console for your instance e.g. 8784481508256766876)"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>i,a:()=>c});var r=n(7294);const t={},s=r.createContext(t);function c(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);