"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1329],{1289:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=o(4848),i=o(8453);const s={title:"Google Cloud Kubernetes Engine",hide_title:!0,sidebar_position:5},r="How to Import from Google Cloud Kubernetes Engine",c={id:"cado/discovery-import/gcp/kubernetes-engine",title:"Google Cloud Kubernetes Engine",description:"The Cado platform allows you to collect key logs and forensic artifacts from Google Cloud Kubernetes Engine (GKE) containers.",source:"@site/docs/cado/discovery-import/gcp/kubernetes-engine.md",sourceDirName:"cado/discovery-import/gcp",slug:"/cado/discovery-import/gcp/kubernetes-engine",permalink:"/cado/discovery-import/gcp/kubernetes-engine",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/gcp/kubernetes-engine.md",tags:[],version:"current",lastUpdatedAt:1734011942,formattedLastUpdatedAt:"Dec 12, 2024",sidebarPosition:5,frontMatter:{title:"Google Cloud Kubernetes Engine",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage",permalink:"/cado/discovery-import/gcp/storage"},next:{title:"What is Cado Host",permalink:"/cado/discovery-import/cado-host/intro"}},a={},d=[{value:"Import Steps",id:"import-steps",level:2}];function l(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-import-from-google-cloud-kubernetes-engine",children:"How to Import from Google Cloud Kubernetes Engine"}),"\n",(0,n.jsx)(t.p,{children:"The Cado platform allows you to collect key logs and forensic artifacts from Google Cloud Kubernetes Engine (GKE) containers."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"For distroless containers, please use Cado Host to perform the acquisition."})}),"\n",(0,n.jsx)(t.h2,{id:"import-steps",children:"Import Steps"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Go to Import > Cloud"}),(0,n.jsx)(t.br,{}),"\n","Navigate to the cloud import screen."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cado Import Screen showing the Kubernetes Engine options",src:o(3913).A+"",width:"1522",height:"363"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Select Cluster, Pod, and Container"}),(0,n.jsx)(t.br,{}),"\n","Follow the prompts to choose your ",(0,n.jsx)(t.strong,{children:"Cluster"}),", ",(0,n.jsx)(t.strong,{children:"Pod"}),", and ",(0,n.jsx)(t.strong,{children:"Container"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cado Import Screen showing the available Kubernetes Engine Clusters",src:o(3674).A+"",width:"1837",height:"477"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Confirm and Start Import"}),(0,n.jsx)(t.br,{}),"\n","Review the details, then click ",(0,n.jsx)(t.strong,{children:"Start Import"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Cado will automatically collect all relevant logs and forensic artifacts from the container to support your investigation. For most acquisitions, the import and processing will complete within a few minutes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cado showing the confirmation screen of a successful Kubernetes Engine container capture",src:o(787).A+"",width:"1795",height:"698"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["To import GKE containers, ensure the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"iam.serviceAccounts.implicitDelegation"})})," IAM permission is added to the Service Account.",(0,n.jsx)(t.br,{}),"\n","Currently, GKE imports are supported only for GCP accounts configured with ",(0,n.jsx)(t.strong,{children:"Workload Identity Federation"}),". See more details on the ",(0,n.jsx)(t.a,{href:"/cado/deploy/gcp/gcp-settings#workload-identity-federation",children:"GCP Import Settings"})," page."]})}),"\n",(0,n.jsx)(t.h1,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Data Flow Diagram for GKE Acquisition",src:o(7565).A+"",width:"960",height:"540"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},787:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/eks3-fc961c2189e29adc6a2571cacf950e28.png"},3674:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/gke-8354716bca9bc18f39cbf9caa850c641.png"},7565:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/gke_acquisition-8f606a71d5be85030f1bf87b7863e8fb.png"},3913:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/import-cloud-focus-2430bd09657ad2f5e88391377ba1dc53.png"},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>c});var n=o(6540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);