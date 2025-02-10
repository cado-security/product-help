"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2948],{39036:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=s(74848),n=s(28453);const o={title:"Endpoint access",hide_title:!0,sidebar_position:3},t="What Azure Endpoints Does the Cado Platform Require Access To?",c={id:"cado/deploy/azure/endpoints",title:"Endpoint access",description:"The Cado platform requires access to the following Azure endpoints:",source:"@site/docs/cado/deploy/azure/endpoints.md",sourceDirName:"cado/deploy/azure",slug:"/cado/deploy/azure/endpoints",permalink:"/cado/deploy/azure/endpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/azure/endpoints.md",tags:[],version:"current",lastUpdatedAt:1739185771,formattedLastUpdatedAt:"Feb 10, 2025",sidebarPosition:3,frontMatter:{title:"Endpoint access",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Platform encryption in Azure",permalink:"/cado/deploy/azure/data-encryption-overview"},next:{title:"Architecture in Azure",permalink:"/cado/deploy/azure/azure-architecture"}},d={},l=[{value:"Azure Resource Manager",id:"azure-resource-manager",level:3},{value:"Storage Service",id:"storage-service",level:3},{value:"Networking Service",id:"networking-service",level:3},{value:"Monitor / Activity Logs",id:"monitor--activity-logs",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Identity",id:"identity",level:3},{value:"Compute",id:"compute",level:3}];function u(e){const r={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"what-azure-endpoints-does-the-cado-platform-require-access-to",children:"What Azure Endpoints Does the Cado Platform Require Access To?"}),"\n",(0,i.jsx)(r.p,{children:"The Cado platform requires access to the following Azure endpoints:"}),"\n",(0,i.jsx)(r.h3,{id:"azure-resource-manager",children:"Azure Resource Manager"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Provider APIs"}),": ",(0,i.jsx)(r.code,{children:"https://management.azure.com/"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Classic Deployment Model"}),": ",(0,i.jsx)(r.code,{children:"https://management.core.windows.net/"})]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"storage-service",children:"Storage Service"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/providers/Microsoft.Storage/storageAccounts"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"{account_name}.blob.core.windows.net/{container}?restype=container&comp=list"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"{account_name}.blob.core.windows.net/{container}/{blob}"})}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"networking-service",children:"Networking Service"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces"})}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"monitor--activity-logs",children:"Monitor / Activity Logs"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/providers/Microsoft.Insights/eventtypes/management/values"})}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}/listClusterAdminCredential"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/resourcegroups"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/managedClusters"})}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"identity",children:"Identity"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/providers/Microsoft.ManagedIdentity/userAssignedIdentities"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/roleAssignments"})}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"compute",children:"Compute"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/providers/Microsoft.Compute/disks"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/snapshots/"})}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>c});var i=s(96540);const n={},o=i.createContext(n);function t(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);