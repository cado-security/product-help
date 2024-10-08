"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6020],{2708:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var c=s(5893),t=s(1151);const n={title:"Adding Azure and GCP to AWS",hide_title:!0,sidebar_position:5},r="Cross Cloud with AWS",i={id:"cado-response/deploy/aws/iam/cross-cloud",title:"Adding Azure and GCP to AWS",description:"Adding AWS Access to Azure or GCP Deployments",source:"@site/docs/cado-response/deploy/aws/iam/cross-cloud.md",sourceDirName:"cado-response/deploy/aws/iam",slug:"/cado-response/deploy/aws/iam/cross-cloud",permalink:"/cado-response/deploy/aws/iam/cross-cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/iam/cross-cloud.md",tags:[],version:"current",lastUpdatedAt:1728377691,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:5,frontMatter:{title:"Adding Azure and GCP to AWS",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"AWS Organizations",permalink:"/cado-response/deploy/aws/iam/aws-organizations"},next:{title:"Temporary Credentials with STS",permalink:"/cado-response/deploy/aws/iam/temporary-credentials"}},d={},l=[{value:"Adding AWS Access to Azure or GCP Deployments",id:"adding-aws-access-to-azure-or-gcp-deployments",level:2},{value:"Adding Azure Access to AWS Deployments",id:"adding-azure-access-to-aws-deployments",level:2},{value:"Adding GCP Access to AWS Deployments",id:"adding-gcp-access-to-aws-deployments",level:2}];function a(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.h1,{id:"cross-cloud-with-aws",children:"Cross Cloud with AWS"}),"\n",(0,c.jsx)(o.h2,{id:"adding-aws-access-to-azure-or-gcp-deployments",children:"Adding AWS Access to Azure or GCP Deployments"}),"\n",(0,c.jsxs)(o.p,{children:["AWS accounts can be imported into Cado Response from Azure or GCP deployments.\nTo do so, add the AWS account under Settings > Cloud Accounts:\n",(0,c.jsx)(o.img,{alt:"Add Role",src:s(5132).Z+"",width:"2134",height:"1248"})]}),"\n",(0,c.jsxs)(o.p,{children:["Currently AWS EC2's can only be imported cross-cloud through SSM Triage Acquisition, due to how the data is collected.\nFor more, see ",(0,c.jsx)(o.a,{href:"https://docs.cadosecurity.com/cado-response/deploy/azure/adding-aws-gcp",children:"Adding AWS to Azure"})," and ",(0,c.jsx)(o.a,{href:"https://docs.cadosecurity.com/cado-response/deploy/gcp/adding-azure-gcp",children:"Adding AWS to GCP"}),"."]}),"\n",(0,c.jsx)(o.h2,{id:"adding-azure-access-to-aws-deployments",children:"Adding Azure Access to AWS Deployments"}),"\n",(0,c.jsxs)(o.p,{children:["See ",(0,c.jsx)(o.a,{href:"https://docs.cadosecurity.com/cado-response/deploy/cross/adding-azure",children:"How to add Azure subscriptions to Azure/AWS/GCP"}),"."]}),"\n",(0,c.jsx)(o.h2,{id:"adding-gcp-access-to-aws-deployments",children:"Adding GCP Access to AWS Deployments"}),"\n",(0,c.jsx)(o.admonition,{type:"warning",children:(0,c.jsx)(o.p,{children:"Make sure the GCP service account credentials are enabled from the Google Cloud console."})}),"\n",(0,c.jsx)(o.p,{children:"Cross-cloud access of GCP from AWS is performed by designating a primary GCP project where evidence will be stored before being captured by Cado using a service account. This primary project also coordinates IAM access so that Cado can import evidence from your other GCP projects. Access is given to the service account in the primary project to each GCP project you would like Cado to collect evidence from. Note: you will need permission to create IAM roles and service accounts."}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsx)(o.p,{children:"Sign in to the GCP project which you are designating your primary project"}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsxs)(o.p,{children:["Enable the ",(0,c.jsx)(o.a,{href:"https://console.cloud.google.com/cloud-build/",children:"Cloud Build API"})," if it is not already activated"]}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsxs)(o.p,{children:["Create a new ",(0,c.jsx)(o.a,{href:"https://cloud.google.com/storage/docs/creating-buckets",children:"GCS bucket"})," for storing evidence collected by Cado. This bucket will be selected during the import process in the Cado Response interface."]}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsxs)(o.p,{children:["Create a new Cado IAM role with the ",(0,c.jsx)(o.a,{href:"https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-settings#creating-a-cado-role.",children:"permissions listed here"}),".\nThis role can be ",(0,c.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/creating-custom-roles#creating",children:"created"})," at the organisation level to give access to multiple projects under one service account."]}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsxs)(o.p,{children:["Assign the new Cado IAM role to the Compute Engine principal - note that as of June 2024 the Compute Engine principal needs to be updated instead of the Cloud Build prinicpal due ",(0,c.jsx)(o.a,{href:"https://cloud.google.com/build/docs/cloud-build-service-account-updates",children:"to changes in GCP"}),". Go to IAM and Admin -> IAM and locate the principle which looks like ",(0,c.jsx)(o.a,{href:"mailto:xxxxxxxxxxxx-compute@developer.gserviceaccount.com",children:"xxxxxxxxxxxx-compute@developer.gserviceaccount.com"}),". Edit this principle to give it permission to the new Cado role. Take note of the principal name as it will be used to set up access to other GCP projects."]}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsxs)(o.p,{children:["Follow these Google instructions to create a ",(0,c.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/service-accounts-create",children:"new service account"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsxs)(o.p,{children:["Follow these Google instructions to assign the ",(0,c.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/create-service-agents#grant-roles",children:"new Cado IAM role"})," to the service account."]}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsxs)(o.p,{children:["If you will be importing from GKE clusters, the service account also needs the ",(0,c.jsx)(o.code,{children:"iam.serviceAccounts.implicitDelegation"})," permission."]}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsxs)(o.p,{children:["Follow the Cado documentation to create service account credentials and enter them into the platform:\n",(0,c.jsx)(o.a,{href:"https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-settings#getting-gcp-credentials",children:"here"})," & ",(0,c.jsx)(o.a,{href:"https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-settings#entering-settings",children:"here"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsxs)(o.p,{children:["To allow access to your other GCP projects, follow the ",(0,c.jsx)(o.a,{href:"https://docs.cadosecurity.com/cado-response/deploy/gcp/gcp-cross-project",children:"Cado documentation"})," for each other GCP project."]}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsxs)(o.p,{children:["Ensure the following ",(0,c.jsx)(o.strong,{children:(0,c.jsx)(o.a,{href:"https://console.cloud.google.com/apis/library",children:"APIs"})})," are enabled in the project:"]}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.strong,{children:(0,c.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com",children:"Compute Engine"})})}),"\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.strong,{children:(0,c.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com",children:"Cloud Build"})})}),"\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.strong,{children:(0,c.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/file.googleapis.com",children:"Cloud Filestore"})})}),"\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.strong,{children:(0,c.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/secretmanager.googleapis.com",children:"Secret Manager"})})}),"\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.strong,{children:(0,c.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com",children:"Cloud Resource Manager"})})}),"\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.strong,{children:(0,c.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com",children:"IAM Service Account Credentials"})})}),"\n",(0,c.jsx)(o.li,{children:(0,c.jsx)(o.strong,{children:(0,c.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com",children:"Cloud Storage"})})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},5132:(e,o,s)=>{s.d(o,{Z:()=>c});const c=s.p+"assets/images/add-role-cf34be238a0b5ac245ac1c0ddf70fcb6.png"},1151:(e,o,s)=>{s.d(o,{Z:()=>i,a:()=>r});var c=s(7294);const t={},n=c.createContext(t);function r(e){const o=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(n.Provider,{value:o},e.children)}}}]);