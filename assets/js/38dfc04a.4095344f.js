"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7012],{1377:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var n=s(4848),c=s(8453);const r={title:"IAM permissions description",hide_title:!0,sidebar_position:6},o="What IAM permissions does Cado use in GCP?",t={id:"cado/deploy/gcp/iam-description",title:"IAM permissions description",description:"Introduction",source:"@site/docs/cado/deploy/gcp/iam-description.md",sourceDirName:"cado/deploy/gcp",slug:"/cado/deploy/gcp/iam-description",permalink:"/cado/deploy/gcp/iam-description",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/gcp/iam-description.md",tags:[],version:"current",lastUpdatedAt:1733228233,formattedLastUpdatedAt:"Dec 3, 2024",sidebarPosition:6,frontMatter:{title:"IAM permissions description",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Cross-Project setup",permalink:"/cado/deploy/gcp/gcp-cross-project"},next:{title:"Architecture in GCP",permalink:"/cado/deploy/gcp/gcp-architecture"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Permissions Overview",id:"permissions-overview",level:2},{value:"Minimal Permissions to Run",id:"minimal-permissions-to-run",level:3},{value:"Cado Host Permissions",id:"cado-host-permissions",level:3},{value:"Bucket Acquisition Permissions",id:"bucket-acquisition-permissions",level:3},{value:"Worker Permissions",id:"worker-permissions",level:3},{value:"Adjusting Settings",id:"adjusting-settings",level:4},{value:"Upgrade Permissions",id:"upgrade-permissions",level:3},{value:"Secret Management Permissions",id:"secret-management-permissions",level:3},{value:"Acquisition Permissions",id:"acquisition-permissions",level:3},{value:"Instance Acquisition",id:"instance-acquisition",level:4},{value:"GKE Acquisition",id:"gke-acquisition",level:4}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"what-iam-permissions-does-cado-use-in-gcp",children:"What IAM permissions does Cado use in GCP?"}),"\n",(0,n.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(i.p,{children:["Cado Security requires specific permissions in Google Cloud Platform (GCP) to function correctly. This document outlines the permissions needed, categorized by their functionality. For the most up-to-date permissions, please refer to the ",(0,n.jsx)(i.a,{href:"https://github.com/cado-security/Deployment-Templates/blob/main/gcp/modules/iam/main.tf",children:"Cado Security GCP Terraform Module"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["If these permissions are too broad for your environment, or if you have concerns regarding the scope of any permissions, please contact our support team at ",(0,n.jsx)(i.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," for assistance in reducing the permission set while maintaining necessary functionality."]}),"\n",(0,n.jsx)(i.h2,{id:"permissions-overview",children:"Permissions Overview"}),"\n",(0,n.jsx)(i.h3,{id:"minimal-permissions-to-run",children:"Minimal Permissions to Run"}),"\n",(0,n.jsx)(i.p,{children:"These are the essential permissions required for Cado Security to operate:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"iam.serviceAccounts.actAs"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"iam.serviceAccounts.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"iam.serviceAccounts.getAccessToken"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"iam.serviceAccounts.getIamPolicy"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"cado-host-permissions",children:"Cado Host Permissions"}),"\n",(0,n.jsx)(i.p,{children:"Permissions related to the Cado Host operations:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"iam.serviceAccounts.signBlob"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"bucket-acquisition-permissions",children:"Bucket Acquisition Permissions"}),"\n",(0,n.jsx)(i.p,{children:"Needed for acquiring data from Cloud Storage buckets:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"storage.buckets.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"storage.buckets.list"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"storage.objects.create"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"storage.objects.delete"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"storage.objects.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"storage.objects.list"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"worker-permissions",children:"Worker Permissions"}),"\n",(0,n.jsx)(i.p,{children:"Permissions required for worker instances to perform tasks:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.disks.create"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.create"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.setMetadata"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.setServiceAccount"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.addresses.use"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.addAccessConfig"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.delete"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.setLabels"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.subnetworks.use"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.networks.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.networks.list"})}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"adjusting-settings",children:"Adjusting Settings"}),"\n",(0,n.jsx)(i.p,{children:"Permissions for modifying compute resource settings:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.machineTypes.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.machineTypes.list"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.regions.get"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"upgrade-permissions",children:"Upgrade Permissions"}),"\n",(0,n.jsx)(i.p,{children:"Required for upgrading Cado Security components:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.disks.create"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.attachDisk"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.images.useReadOnly"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.create"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.addresses.use"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.detachDisk"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.deleteAccessConfig"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.zoneOperations.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.subnetworks.useExternalIp"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"secret-management-permissions",children:"Secret Management Permissions"}),"\n",(0,n.jsx)(i.p,{children:"Needed for managing secrets in Secret Manager:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"secretmanager.secrets.create"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"secretmanager.versions.access"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"secretmanager.versions.add"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"acquisition-permissions",children:"Acquisition Permissions"}),"\n",(0,n.jsx)(i.p,{children:"Permissions for acquiring resources and data within GCP:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"resourcemanager.projects.get"})}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"instance-acquisition",children:"Instance Acquisition"}),"\n",(0,n.jsx)(i.p,{children:"Required for interacting with compute instances:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"cloudbuild.builds.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"cloudbuild.builds.create"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.disks.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.disks.use"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.disks.list"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.disks.useReadOnly"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.globalOperations.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.images.create"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.list"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.images.delete"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.images.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.instances.getSerialPortOutput"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"compute.projects.get"})}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"gke-acquisition",children:"GKE Acquisition"}),"\n",(0,n.jsx)(i.p,{children:"Permissions related to Google Kubernetes Engine (GKE) clusters:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"container.clusters.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"container.clusters.list"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"container.pods.exec"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"container.pods.get"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"container.pods.list"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>t});var n=s(6540);const c={},r=n.createContext(c);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);