"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9517],{16332:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(74848),s=r(28453);const o={title:"IAM permissions description",hide_title:!0,sidebar_position:6},t="Cado Security - Required Azure Permissions",c={id:"cado/deploy/azure/iam-description",title:"IAM permissions description",description:"Cado Security requires specific permissions to be granted in your Azure environment to function correctly. The permissions described here are based on the Cado Security Azure Terraform Module. Please refer to this link for the latest and most detailed information regarding required permissions.",source:"@site/docs/cado/deploy/azure/iam-description.md",sourceDirName:"cado/deploy/azure",slug:"/cado/deploy/azure/iam-description",permalink:"/cado/deploy/azure/iam-description",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/azure/iam-description.md",tags:[],version:"current",lastUpdatedAt:1739185771,formattedLastUpdatedAt:"Feb 10, 2025",sidebarPosition:6,frontMatter:{title:"IAM permissions description",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Architecture in Azure",permalink:"/cado/deploy/azure/azure-architecture"},next:{title:"Workers",permalink:"/cado/deploy/azure/azure-workers"}},d={},l=[{value:"Required Permissions",id:"required-permissions",level:2},{value:"Optional Permissions",id:"optional-permissions",level:2}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"cado-security---required-azure-permissions",children:"Cado Security - Required Azure Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Cado Security requires specific permissions to be granted in your Azure environment to function correctly. The permissions described here are based on the ",(0,n.jsx)(i.a,{href:"https://github.com/cado-security/Deployment-Templates/blob/main/azure/azure_persistent/main.tf",children:"Cado Security Azure Terraform Module"}),". Please refer to this link for the latest and most detailed information regarding required permissions."]}),"\n",(0,n.jsxs)(i.p,{children:["If these permissions are too broad for your environment, or if you have concerns regarding the scope of any permissions, please contact our support team at ",(0,n.jsx)(i.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," for assistance in reducing the permission set while maintaining necessary functionality."]}),"\n",(0,n.jsx)(i.h2,{id:"required-permissions",children:"Required Permissions"}),"\n",(0,n.jsx)(i.p,{children:"The following Azure roles and permissions are required for Cado Security deployment:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Resource Group"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The resource group will host the infrastructure for Cado Security."}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Permission"}),": ",(0,n.jsx)(i.code,{children:"Contributor"})," on the resource group."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Network Permissions"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Cado Security requires a static public IP for provisioning."}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Permission"}),": Permissions to create and manage public IPs."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Storage Account Permissions"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The module will create a storage account to store investigation data."}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Permission"}),": ",(0,n.jsx)(i.code,{children:"Storage Account Contributor"})," on the resource group (or subscription if acquisition permissions are deployed)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Disk Permissions"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"To manage and attach disks for processing."}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Permission"}),": ",(0,n.jsx)(i.code,{children:"Disk Snapshot Contributor"})," at the subscription level (optional, depending on configuration)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Virtual Machine Permissions"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Required for creating, managing, and interacting with virtual machines."}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Permission"}),": ",(0,n.jsx)(i.code,{children:"Virtual Machine Contributor"})," at the subscription level (optional, depending on configuration)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Kubernetes Service Permissions"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"If deploying Kubernetes clusters, permissions to interact with Azure Kubernetes Service are needed."}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Permission"}),": ",(0,n.jsx)(i.code,{children:"Azure Kubernetes Service Cluster Admin Role"})," at the subscription level (optional, depending on configuration)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Identity Permissions"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"A managed identity will be created to run Cado Security operations."}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Permission"}),": ",(0,n.jsx)(i.code,{children:"Contributor"})," role for the managed identity within the resource group."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"optional-permissions",children:"Optional Permissions"}),"\n",(0,n.jsx)(i.p,{children:"You can choose whether or not to grant acquisition-related permissions for local investigations within the same subscription. These include:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Storage Account Contributor"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Disk Snapshot Contributor"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Virtual Machine Contributor"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Azure Kubernetes Service Cluster Admin Role"})}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>t,x:()=>c});var n=r(96540);const s={},o=n.createContext(s);function t(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);