"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4224],{9193:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var t=s(5893),c=s(1151);const n={title:"Adding Google Projects to Azure/AWS",hide_title:!0,sidebar_position:3},r="How to add Google Projects to Azure/AWS",i={id:"cado-response/deploy/cross/adding-gcp",title:"Adding Google Projects to Azure/AWS",description:"Make sure the GCP service account credentials are enabled from the Google Cloud console.",source:"@site/docs/cado-response/deploy/cross/adding-gcp.md",sourceDirName:"cado-response/deploy/cross",slug:"/cado-response/deploy/cross/adding-gcp",permalink:"/cado-response/deploy/cross/adding-gcp",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/cross/adding-gcp.md",tags:[],version:"current",lastUpdatedAt:1728385192,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:3,frontMatter:{title:"Adding Google Projects to Azure/AWS",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Adding Azure subscriptions to Azure/AWS/GCP",permalink:"/cado-response/deploy/cross/adding-azure"},next:{title:"Access an AWS account with keys",permalink:"/cado-response/deploy/cross/adding-keys"}},l={},d=[];function a(e){const o={a:"a",admonition:"admonition",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"how-to-add-google-projects-to-azureaws",children:"How to add Google Projects to Azure/AWS"}),"\n",(0,t.jsx)(o.admonition,{type:"warning",children:(0,t.jsx)(o.p,{children:"Make sure the GCP service account credentials are enabled from the Google Cloud console."})}),"\n",(0,t.jsx)(o.p,{children:"Cross-cloud access of GCP is performed by designating a primary GCP project where evidence will be stored before being captured by Cado using a service account. This primary project also coordinates IAM access so that Cado can import evidence from your other GCP projects. Access is given to the service account in the primary project to each GCP project you would like Cado to collect evidence from. Note: you will need permission to create IAM roles and service accounts."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Sign in to the GCP project which you are designating your primary project"}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Enable the ",(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/cloud-build/",children:"Cloud Build API"})," if it is not already activated"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Create a new ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/storage/docs/creating-buckets",children:"GCS bucket"})," for storing evidence collected by Cado. This bucket will be selected during the import process in the Cado Response interface."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Create a new Cado IAM role with the ",(0,t.jsx)(o.a,{href:"/cado-response/deploy/gcp/gcp-settings#creating-a-cado-role.",children:"permissions listed here"}),".\nThis role can be ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/creating-custom-roles#creating",children:"created"})," at the organisation level to give access to multiple projects under one service account."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Assign the new Cado IAM role to the Compute Engine principal - note that as of June 2024 the Compute Engine principal needs to be updated instead of the Cloud Build prinicpal due ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/build/docs/cloud-build-service-account-updates",children:"to changes in GCP"})," Go to IAM and Admin -> IAM and locate the principle which looks like ",(0,t.jsx)(o.a,{href:"mailto:xxxxxxxxxxxx-compute@developer.gserviceaccount.com",children:"xxxxxxxxxxxx-compute@developer.gserviceaccount.com"}),". Edit this principle to give it permission to the new Cado role. Take note of the principal name as it will be used to set up access to other GCP projects."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Follow these Google instructions to create a ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/service-accounts-create",children:"new service account"})]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Follow these Google instructions to assign the ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/create-service-agents#grant-roles",children:"new Cado IAM role"})," to the service account"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"If you will be importing from GKE clusters, the service account also needs the permission iam.serviceAccounts.implicitDelegation"}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Follow the Cado documentation to create service account credentials and enter them into the platform:\n",(0,t.jsx)(o.a,{href:"/cado-response/deploy/gcp/gcp-settings#getting-gcp-credentials",children:"here"})," & ",(0,t.jsx)(o.a,{href:"/cado-response/deploy/gcp/gcp-settings#entering-settings",children:"here"})]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["To allow access to your other GCP projects, follow the ",(0,t.jsx)(o.a,{href:"/cado-response/deploy/gcp/gcp-cross-project",children:"Cado documentation"})," for each other GCP project."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Ensure the following ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/apis/library",children:"APIs"})})," are enabled in the project:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com",children:"Compute Engine"})})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com",children:"Cloud Build"})})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/file.googleapis.com",children:"Cloud Filestore"})})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/secretmanager.googleapis.com",children:"Secret Manager"})})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com",children:"Cloud Resource Manager"})})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com",children:"IAM Service Account Credentials"})})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com",children:"Cloud Storage"})})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,c.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>i,a:()=>r});var t=s(7294);const c={},n=t.createContext(c);function r(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);