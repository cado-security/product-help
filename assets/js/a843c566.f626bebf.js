"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6467],{14539:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=n(74848),s=n(28453);const r={title:"Adding GCP Projects to Azure/AWS",hide_title:!0,sidebar_position:8},c="How to add GCP projects to Azure or AWS",i={id:"cado/deploy/cross/adding-gcp",title:"Adding GCP Projects to Azure/AWS",description:"To enable cross-cloud access from GCP, you need to designate a primary GCP project where evidence will be stored and managed. A service account within this primary project coordinates IAM access to allow Cado to import evidence from other GCP projects.",source:"@site/docs/cado/deploy/cross/adding-gcp.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/adding-gcp",permalink:"/cado/deploy/cross/adding-gcp",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/adding-gcp.md",tags:[],version:"current",lastUpdatedAt:1738502359,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:8,frontMatter:{title:"Adding GCP Projects to Azure/AWS",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Import from subscriptions and tenants in Azure",permalink:"/cado/deploy/cross/azure-cross-tenancy-subscriptions"},next:{title:"Cross-cloud vs individual deployments",permalink:"/cado/deploy/cross/cross_vs_individual"}},d={},l=[{value:"Required APIs to Enable",id:"required-apis-to-enable",level:3},{value:"Steps to Add a GCP Project",id:"steps-to-add-a-gcp-project",level:3},{value:"Permission list",id:"permission-list",level:3}];function a(e){const o={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"how-to-add-gcp-projects-to-azure-or-aws",children:"How to add GCP projects to Azure or AWS"}),"\n",(0,t.jsx)(o.p,{children:"To enable cross-cloud access from GCP, you need to designate a primary GCP project where evidence will be stored and managed. A service account within this primary project coordinates IAM access to allow Cado to import evidence from other GCP projects."}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"You will need permission to create IAM roles, service accounts, and generate keys before continuing."})}),"\n",(0,t.jsx)(o.h3,{id:"required-apis-to-enable",children:"Required APIs to Enable"}),"\n",(0,t.jsxs)(o.p,{children:["Ensure the following ",(0,t.jsx)(o.strong,{children:"APIs"})," are enabled in your primary GCP project. You can enable them from the ",(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/apis/library",children:"Google Cloud Console"}),":"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com",children:"Compute Engine API"})}),"\nNeeded for Compute Engine acquisition"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com",children:"Cloud Storage API"})}),"\nNeeded for exporting disks when acquiring Compute Engines, and for GCS acquisition"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/container.googleapis.com",children:"Kubernetes Engine API"})}),"\nNeeded for Kubernetes Engine acquisition"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com",children:"Cloud Build API"})}),"\nNecessary for export operations when acquiring Compute Engines"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com",children:"IAM Service Account Credentials API"})}),"\nNeeded to generate keys and allow access to GCP resources"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com",children:"Cloud Resource Manager API"})}),"\nNeeded to navigate projects"]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"steps-to-add-a-gcp-project",children:"Steps to Add a GCP Project"}),"\n",(0,t.jsxs)(o.admonition,{type:"tip",children:[(0,t.jsx)(o.mdxAdmonitionTitle,{}),(0,t.jsxs)(o.p,{children:["Parts of this process can be automated by using our ",(0,t.jsx)(o.a,{href:"/cado/deploy/gcp/gcp-auto-setup",children:"GCP Automated Setup Scripts"}),". Those steps will contains links to the relevant scripts when appropriate."]})]}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Sign In to Your Primary GCP Project"}),(0,t.jsx)(o.br,{}),"\n","Start by logging into the GCP project that you will designate as the primary project for storing evidence."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Create a GCS Bucket for Evidence Storage"}),(0,t.jsx)(o.br,{}),"\n","Set up a new ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/storage/docs/creating-buckets",children:"Google Cloud Storage (GCS) bucket"})," to store evidence collected by Cado. You will select this bucket during the import process in the Cado interface."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Create a Cado IAM Role"}),(0,t.jsx)(o.br,{}),"\n","Create a new IAM role for Cado with the required permissions. The permissions for cross-cloud acquisitions are listed ",(0,t.jsx)(o.a,{href:"/cado/deploy/cross/adding-gcp#permissions",children:"below"}),". ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(o.a,{href:"/cado/deploy/gcp/gcp-auto-setup#role-creation",children:(0,t.jsx)(o.strong,{children:"Script link"})})]}),"\n",(0,t.jsxs)(o.admonition,{type:"info",children:[(0,t.jsx)(o.mdxAdmonitionTitle,{}),(0,t.jsx)(o.p,{children:"This role can be created at the organization level to provide access to multiple projects using one service account."})]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Assign the IAM Role to the Compute Engine Principal"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Go to ",(0,t.jsx)(o.strong,{children:"IAM and Admin"})," > ",(0,t.jsx)(o.strong,{children:"IAM"})," in the Google Cloud Console."]}),"\n",(0,t.jsxs)(o.li,{children:["Locate the principal with the format ",(0,t.jsx)(o.code,{children:"xxxxxxxxxxxx-compute@developer.gserviceaccount.com"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"You may need to check the box 'Include Google-provided role grants'"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.li,{children:"Edit this principal to grant it the new Cado IAM role."}),"\n",(0,t.jsx)(o.li,{children:"Note down the principal name, as it will be used to configure access to other GCP projects."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Create a New Service Account and Grant Role"}),(0,t.jsx)(o.br,{}),"\n","Follow these ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/service-accounts-create",children:"Google instructions"})," to create a new service account in the primary GCP project.\nAssign the newly created Cado IAM role to the service account by following ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/iam/docs/create-service-agents#grant-roles",children:"these Google instructions"}),", making sure to grant it the Cado IAM role. ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(o.a,{href:"/cado/deploy/gcp/gcp-auto-setup#service-account-creation",children:(0,t.jsx)(o.strong,{children:"Script link"})})]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Create Service Account Credentials and add to Cado"}),(0,t.jsx)(o.br,{}),"\n","Navigate to the ",(0,t.jsx)(o.strong,{children:"Keys"})," tab of the created service account and ",(0,t.jsx)(o.strong,{children:"Add Key"}),", selecting the ",(0,t.jsx)(o.strong,{children:"JSON"})," option. This is the JSON you will input into the ",(0,t.jsx)(o.strong,{children:"Cloud Accounts"})," settings section in Cado."]}),"\n",(0,t.jsx)(o.admonition,{type:"warning",children:(0,t.jsxs)(o.p,{children:["These credentials are ",(0,t.jsx)(o.strong,{children:"sensitive"})," and should be stored appropriately according to your organization's password/secret management policy"]})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Grant Access to Other GCP Projects"}),(0,t.jsx)(o.br,{}),"\n","To allow Cado to collect evidence from additional GCP projects, follow the ",(0,t.jsx)(o.a,{href:"/cado/deploy/gcp/gcp-cross-project",children:"Cado documentation"})," for setting up access to each additional project. ",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(o.a,{href:"/cado/deploy/gcp/gcp-auto-setup#cross-project-access",children:(0,t.jsx)(o.strong,{children:"Script link"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h3,{id:"permission-list",children:"Permission list"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"### Required for Compute and GCS acquisition\ncloudbuild.builds.create\ncloudbuild.builds.get\ncompute.disks.create\ncompute.disks.delete\ncompute.disks.get\ncompute.disks.list\ncompute.disks.setLabels\ncompute.disks.use\ncompute.disks.useReadOnly\ncompute.globalOperations.get\ncompute.images.create\ncompute.images.get\ncompute.images.useReadOnly\ncompute.instances.create\ncompute.instances.get\ncompute.instances.list\ncompute.instances.setLabels\ncompute.instances.setMetadata\ncompute.instances.setServiceAccount\ncompute.machineTypes.list\ncompute.networks.get\ncompute.networks.list\ncompute.projects.get\ncompute.subnetworks.use\ncompute.subnetworks.useExternalIp\ncompute.zoneOperations.get\ncompute.zones.list\nstorage.buckets.create\nstorage.buckets.get\nstorage.buckets.list\nstorage.objects.create\nstorage.objects.get\nstorage.objects.list\n\n### Required for GKE acquisition\ncontainer.clusters.get\ncontainer.clusters.list\ncontainer.pods.exec\ncontainer.pods.get\ncontainer.pods.list\niam.serviceAccounts.implicitDelegation\n\n### Required for access to GCP projects, necessary for all acquisitions\niam.serviceAccounts.getAccessToken\nresourcemanager.projects.get\n"})})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>i});var t=n(96540);const s={},r=t.createContext(s);function c(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);