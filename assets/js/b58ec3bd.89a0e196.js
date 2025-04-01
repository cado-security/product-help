"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4225],{78406:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(74848),t=n(28453);const o={title:"Azure Kubernetes Service",hide_title:!0,sidebar_position:3},i="How to Import Azure Kubernetes Service (AKS) Containers",c={id:"cado/discovery-import/azure/azure-aks",title:"Azure Kubernetes Service",description:"The Cado platform allows you to collect key logs and forensic artifacts from containers running in Azure Kubernetes Service (AKS).",source:"@site/docs/cado/discovery-import/azure/azure-aks.md",sourceDirName:"cado/discovery-import/azure",slug:"/cado/discovery-import/azure/azure-aks",permalink:"/cado/discovery-import/azure/azure-aks",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/azure/azure-aks.md",tags:[],version:"current",lastUpdatedAt:1743513009,formattedLastUpdatedAt:"Apr 1, 2025",sidebarPosition:3,frontMatter:{title:"Azure Kubernetes Service",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Azure Storage",permalink:"/cado/discovery-import/azure/azure-storage"},next:{title:"Google Compute Engine",permalink:"/cado/discovery-import/gcp/engine-instance"}},a={},l=[{value:"Known Limitations",id:"known-limitations",level:2},{value:"Import Steps",id:"import-steps",level:2},{value:"Private Cluster Support",id:"private-cluster-support",level:2},{value:"Scoping Down the Role for Access to AKS",id:"scoping-down-the-role-for-access-to-aks",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"how-to-import-azure-kubernetes-service-aks-containers",children:"How to Import Azure Kubernetes Service (AKS) Containers"}),"\n",(0,r.jsx)(s.p,{children:"The Cado platform allows you to collect key logs and forensic artifacts from containers running in Azure Kubernetes Service (AKS)."}),"\n",(0,r.jsx)(s.h2,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Cado can acquire artifacts from containers built with ",(0,r.jsx)(s.strong,{children:"distroless containers"})," using Cado Host only. Containers with the ",(0,r.jsx)(s.code,{children:"gcr.io/distroless"})," image tag will be hidden. For more details, see ",(0,r.jsx)(s.a,{href:"/cado/discovery-import/kubernetes#alternate-collection-by-using-cado-host-with-a-sidecar-container",children:"Kubernetes Deployments"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Cado will hide pods running under the following namespaces, which are generally system-level namespaces running a distroless environment:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"kube-system"}),", ",(0,r.jsx)(s.code,{children:"kube-public"}),", ",(0,r.jsx)(s.code,{children:"kube-node-lease"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"gke-gmp-system"}),", ",(0,r.jsx)(s.code,{children:"aks-command"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"gmp-system"}),", ",(0,r.jsx)(s.code,{children:"calico-system"}),", ",(0,r.jsx)(s.code,{children:"tigera-operator"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"import-steps",children:"Import Steps"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Navigate to ",(0,r.jsx)(s.strong,{children:"Import > Cloud"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Cado Import Screen showing the AKS options",src:n(43913).A+"",width:"1522",height:"363"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Select the Azure credentials configured under ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/cado/deploy/cross/azure-cross-tenancy-subscriptions",children:"Azure > Cross Subscription and Tenancy"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Choose the resource group associated with the AKS cluster."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Follow the steps to select your ",(0,r.jsx)(s.strong,{children:"Cluster"}),", ",(0,r.jsx)(s.strong,{children:"Pod"}),", and ",(0,r.jsx)(s.strong,{children:"Container"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Cado Import Screen showing the available AKS Clusters",src:n(36094).A+"",width:"1837",height:"497"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Confirm the details and click ",(0,r.jsx)(s.strong,{children:"Start Import"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Cado will automatically collect all key logs and forensic artifacts from the container for investigation. For most acquisitions, the import and processing will take just a few minutes to complete."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Cado showing the confirmation screen of a successful AKS container capture",src:n(60787).A+"",width:"2684",height:"340"})}),"\n",(0,r.jsx)(s.h2,{id:"private-cluster-support",children:"Private Cluster Support"}),"\n",(0,r.jsxs)(s.p,{children:["As of release v2.31.0, the Cado platform supports capturing data from ",(0,r.jsx)(s.strong,{children:"AKS Private Clusters"}),". This functionality is achieved using the ",(0,r.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/azure/aks/command-invoke",children:"Azure Command Invoke APIs"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"There are two key considerations with this method:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Capturing from a private cluster is significantly slower than from a public cluster."}),"\n",(0,r.jsx)(s.li,{children:"The Azure API spins up a pod within the cluster to execute Cado Host. Ensure that your cluster has enough resources and nodes to schedule this command pod."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The newly created pod will automatically shut down and remove itself after 1 hour."}),"\n",(0,r.jsx)(s.h2,{id:"scoping-down-the-role-for-access-to-aks",children:"Scoping Down the Role for Access to AKS"}),"\n",(0,r.jsx)(s.p,{children:"The Cado platform requires specific permissions to access and execute code in containers. You can use the following role definition to limit the permissions required for Cado to access and acquire data from AKS:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Scoped down AKS role",src:n(2467).A+"",width:"2220",height:"1242"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "id": "",\n    "properties": {\n        "roleName": "ScopedDownAKSTest",\n        "description": "",\n        "assignableScopes": [\n            ""\n        ],\n        "permissions": [\n            {\n                "actions": [\n                    "Microsoft.Resources/subscriptions/operationresults/read",\n                    "Microsoft.Resources/subscriptions/read",\n                    "Microsoft.Resources/subscriptions/resourceGroups/read",\n                    "Microsoft.ContainerService/managedClusters/read",\n                    "Microsoft.ContainerService/managedClusters/runCommand/action",\n                    "Microsoft.ContainerService/managedClusters/commandResults/read",\n                    "Microsoft.ContainerService/managedClusters/privateEndpointConnections/read",\n                    "Microsoft.ContainerService/managedClusters/listClusterAdminCredential/action"\n                ],\n                "notActions": [],\n                "dataActions": [],\n                "notDataActions": []\n            }\n        ]\n    }\n}\n'})})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},36094:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/aks-a8db98692b9b481c6fc41df7f42005c1.png"},2467:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/aks_role-bc2f3d6620c2a5d836a1c4b9cf3ffeb8.png"},60787:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/eks3-1d4a0615141570987cd405548b7ab73e.png"},43913:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/import-cloud-focus-2430bd09657ad2f5e88391377ba1dc53.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var r=n(96540);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);