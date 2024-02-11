"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2309],{1939:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var r=s(5893),o=s(1151);const n={title:"Azure Kubernetes Service",hide_title:!0,sidebar_position:3},i="Azure Kubernetes Service",a={id:"cado-response/discovery-import/import/azure/azure-aks",title:"Azure Kubernetes Service",description:"The Cado platform will collect key logs and forensic artifacts from Azure Kubernetes Service containers.",source:"@site/docs/cado-response/discovery-import/import/azure/azure-aks.md",sourceDirName:"cado-response/discovery-import/import/azure",slug:"/cado-response/discovery-import/import/azure/azure-aks",permalink:"/cado-response/discovery-import/import/azure/azure-aks",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/azure/azure-aks.md",tags:[],version:"current",lastUpdatedAt:1707618697,formattedLastUpdatedAt:"Feb 11, 2024",sidebarPosition:3,frontMatter:{title:"Azure Kubernetes Service",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Azure Storage",permalink:"/cado-response/discovery-import/import/azure/azure-storage"},next:{title:"Google Compute Engine",permalink:"/cado-response/discovery-import/import/gcp/engine-instance"}},c={},l=[{value:"Import Steps",id:"import-steps",level:2},{value:"Private Cluster Support",id:"private-cluster-support",level:3}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"azure-kubernetes-service",children:"Azure Kubernetes Service"}),"\n",(0,r.jsx)(t.p,{children:"The Cado platform will collect key logs and forensic artifacts from Azure Kubernetes Service containers."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Due to the way the Cado platform interacts with Kubernetes, it is not possible to import containers built from a ",(0,r.jsx)(t.a,{href:"https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images",children:"distroless"})," image."]})}),"\n",(0,r.jsx)(t.h2,{id:"import-steps",children:"Import Steps"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Import > Cloud"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Cado Import Screen showing the AKS options",src:s(263).Z+"",width:"842",height:"242"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Choose the Azure Credenitals configured in ",(0,r.jsx)(t.a,{href:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions",children:"Azure > Cross Subscription and Tenancy"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Choose the resource group the AKS cluster is attached to."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Go through the steps to choose your ",(0,r.jsx)(t.strong,{children:"Cluster"}),", ",(0,r.jsx)(t.strong,{children:"Pod"})," and ",(0,r.jsx)(t.strong,{children:"Container"}),":"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Cado Import Screen showing the available AKS Clusters",src:s(2693).Z+"",width:"1837",height:"497"})}),"\n",(0,r.jsxs)(t.ol,{start:"5",children:["\n",(0,r.jsxs)(t.li,{children:["Confirm the details and click ",(0,r.jsx)(t.strong,{children:"Start Import"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.\nFor a typical acquisition, import and processing will take a few minutes to complete."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Cado showing the confirmation screen of a successful AKS container capture",src:s(1574).Z+"",width:"1795",height:"698"})}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.h3,{id:"private-cluster-support",children:"Private Cluster Support"}),(0,r.jsxs)(t.p,{children:["As of release v2.31.0, the Cado platform now supports capture of AKS Private Clusters. It should be noted that the Cado platform\nuses the ",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/aks/command-invoke",children:"Azure Command Invoke APIs"})," to achieve this functionality."]}),(0,r.jsx)(t.p,{children:"There are two main caveats to this method:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The process is consideribly slower than capturing a Public Cluster"}),"\n",(0,r.jsx)(t.li,{children:"The Azure API will spin up a pod inside the cluster to execute Cado Host, make sure that there are enough nodes and resources in your cluster to schedule this command pod."}),"\n"]}),(0,r.jsx)(t.p,{children:"The newly created pod will shutdown and remove itself after 1 hour."})]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2693:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/aks-a8db98692b9b481c6fc41df7f42005c1.png"},1574:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/eks3-fc961c2189e29adc6a2571cacf950e28.png"},263:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var r=s(7294);const o={},n=r.createContext(o);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);