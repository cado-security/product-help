"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2309],{1939:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var o=t(5893),r=t(1151);const n={title:"Azure Kubernetes Service",hide_title:!0,sidebar_position:3},i="Azure Kubernetes Service",a={id:"cado-response/discovery-import/import/azure/azure-aks",title:"Azure Kubernetes Service",description:"The Cado platform will collect key logs and forensic artifacts from Azure Kubernetes Service containers.",source:"@site/docs/cado-response/discovery-import/import/azure/azure-aks.md",sourceDirName:"cado-response/discovery-import/import/azure",slug:"/cado-response/discovery-import/import/azure/azure-aks",permalink:"/cado-response/discovery-import/import/azure/azure-aks",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/azure/azure-aks.md",tags:[],version:"current",lastUpdatedAt:1710075333,formattedLastUpdatedAt:"Mar 10, 2024",sidebarPosition:3,frontMatter:{title:"Azure Kubernetes Service",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Azure Storage",permalink:"/cado-response/discovery-import/import/azure/azure-storage"},next:{title:"Google Compute Engine",permalink:"/cado-response/discovery-import/import/gcp/engine-instance"}},c={},d=[{value:"Import Steps",id:"import-steps",level:2},{value:"Private Cluster Support",id:"private-cluster-support",level:3},{value:"Scoping Down The Role for Access to AKS",id:"scoping-down-the-role-for-access-to-aks",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"azure-kubernetes-service",children:"Azure Kubernetes Service"}),"\n",(0,o.jsx)(s.p,{children:"The Cado platform will collect key logs and forensic artifacts from Azure Kubernetes Service containers."}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["Due to the way the Cado platform interacts with Kubernetes, it is not possible to import containers built from a ",(0,o.jsx)(s.a,{href:"https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images",children:"distroless"})," image."]})}),"\n",(0,o.jsx)(s.h2,{id:"import-steps",children:"Import Steps"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Go to ",(0,o.jsx)(s.strong,{children:"Import > Cloud"})]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Cado Import Screen showing the AKS options",src:t(263).Z+"",width:"842",height:"242"})}),"\n",(0,o.jsxs)(s.ol,{start:"2",children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Choose the Azure Credenitals configured in ",(0,o.jsx)(s.a,{href:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions",children:"Azure > Cross Subscription and Tenancy"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Choose the resource group the AKS cluster is attached to."}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Go through the steps to choose your ",(0,o.jsx)(s.strong,{children:"Cluster"}),", ",(0,o.jsx)(s.strong,{children:"Pod"})," and ",(0,o.jsx)(s.strong,{children:"Container"}),":"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Cado Import Screen showing the available AKS Clusters",src:t(2693).Z+"",width:"1837",height:"497"})}),"\n",(0,o.jsxs)(s.ol,{start:"5",children:["\n",(0,o.jsxs)(s.li,{children:["Confirm the details and click ",(0,o.jsx)(s.strong,{children:"Start Import"})]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.\nFor a typical acquisition, import and processing will take a few minutes to complete."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Cado showing the confirmation screen of a successful AKS container capture",src:t(1574).Z+"",width:"1795",height:"698"})}),"\n",(0,o.jsxs)(s.admonition,{type:"info",children:[(0,o.jsx)(s.h3,{id:"private-cluster-support",children:"Private Cluster Support"}),(0,o.jsxs)(s.p,{children:["As of release v2.31.0, the Cado platform now supports capture of AKS Private Clusters. It should be noted that the Cado platform\nuses the ",(0,o.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/azure/aks/command-invoke",children:"Azure Command Invoke APIs"})," to achieve this functionality."]}),(0,o.jsx)(s.p,{children:"There are two main caveats to this method:"}),(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"The process is consideribly slower than capturing a Public Cluster"}),"\n",(0,o.jsx)(s.li,{children:"The Azure API will spin up a pod inside the cluster to execute Cado Host, make sure that there are enough nodes and resources in your cluster to schedule this command pod."}),"\n"]}),(0,o.jsx)(s.p,{children:"The newly created pod will shutdown and remove itself after 1 hour."})]}),"\n",(0,o.jsx)(s.h3,{id:"scoping-down-the-role-for-access-to-aks",children:"Scoping Down The Role for Access to AKS"}),"\n",(0,o.jsx)(s.p,{children:"The Cado platform requires permissions to access and execute code against containers. The following role definition can be used to scope down the permissions required for the Cado platform to access and acquire data from AKS:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Scoped down AKS role",src:t(6548).Z+"",width:"2220",height:"1242"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'{\n    "id": "",\n    "properties": {\n        "roleName": "ScopedDownAKSTest",\n        "description": "",\n        "assignableScopes": [\n            ""\n        ],\n        "permissions": [\n            {\n                "actions": [\n                    "Microsoft.Resources/subscriptions/operationresults/read",\n                    "Microsoft.Resources/subscriptions/read",\n                    "Microsoft.Resources/subscriptions/resourceGroups/read",\n                    "Microsoft.ContainerService/managedClusters/read",\n                    "Microsoft.ContainerService/managedClusters/runCommand/action",\n                    "Microsoft.ContainerService/managedClusters/commandResults/read",\n                    "Microsoft.ContainerService/managedClusters/privateEndpointConnections/read",\n                    "Microsoft.ContainerService/managedClusters/listClusterAdminCredential/action"\n                ],\n                "notActions": [],\n                "dataActions": [],\n                "notDataActions": []\n            }\n        ]\n    }\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2693:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/aks-a8db98692b9b481c6fc41df7f42005c1.png"},6548:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/aks_role-d38d8dde5594f8ce2a568fb29d58cd4e.png"},1574:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/eks3-fc961c2189e29adc6a2571cacf950e28.png"},263:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var o=t(7294);const r={},n=o.createContext(r);function i(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);