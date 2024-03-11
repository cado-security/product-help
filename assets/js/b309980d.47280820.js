"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3622],{1130:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(5893),s=o(1151);const i={title:"Google Cloud Kubernetes Engine",hide_title:!0,sidebar_position:5},r="Google Cloud Kubernetes Engine",c={id:"cado-response/discovery-import/import/gcp/kubernetes-engine",title:"Google Cloud Kubernetes Engine",description:"The Cado platform will collect key logs and forensic artifacts from Google Cloud Kubernetes Engine containers.",source:"@site/docs/cado-response/discovery-import/import/gcp/kubernetes-engine.md",sourceDirName:"cado-response/discovery-import/import/gcp",slug:"/cado-response/discovery-import/import/gcp/kubernetes-engine",permalink:"/cado-response/discovery-import/import/gcp/kubernetes-engine",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/gcp/kubernetes-engine.md",tags:[],version:"current",lastUpdatedAt:1710158328,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:5,frontMatter:{title:"Google Cloud Kubernetes Engine",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage",permalink:"/cado-response/discovery-import/import/gcp/storage"},next:{title:"Oracle Cloud Virtual Machines",permalink:"/cado-response/discovery-import/import/oracle/virtual-machine"}},a={},l=[{value:"Import Steps",id:"import-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"google-cloud-kubernetes-engine",children:"Google Cloud Kubernetes Engine"}),"\n",(0,n.jsx)(t.p,{children:"The Cado platform will collect key logs and forensic artifacts from Google Cloud Kubernetes Engine containers."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Due to the way the Cado platform interacts with Kubernetes, it is not possible to import containers built from a ",(0,n.jsx)(t.a,{href:"https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images",children:"distroless"})," image. A future update may allow for the collection of data from distroless containers."]})}),"\n",(0,n.jsx)(t.h2,{id:"import-steps",children:"Import Steps"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.strong,{children:"Import > Cloud"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cado Import Screen showing the Kubernetes Engine options",src:o(263).Z+"",width:"842",height:"242"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Go through the steps to choose your ",(0,n.jsx)(t.strong,{children:"Cluster"}),", ",(0,n.jsx)(t.strong,{children:"Pod"})," and ",(0,n.jsx)(t.strong,{children:"Container"}),":"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cado Import Screen showing the available Kubernetes Engine Clusters",src:o(3633).Z+"",width:"1837",height:"477"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Confirm the details and click ",(0,n.jsx)(t.strong,{children:"Start Import"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.\nFor a typical acquisition, import and processing will take a few minutes to complete."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cado showing the confirmation screen of a successful Kubernetes Engine container capture",src:o(1574).Z+"",width:"1795",height:"698"})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["To import GKE containers with Cado Response, the ",(0,n.jsx)(t.code,{children:"iam.serviceAccounts.implicitDelegation"})," IAM permission added to the Service Account."]}),(0,n.jsxs)(t.p,{children:["Currently, for GKE import Cado only suports GCP accounts configured using Workload Identity Federation. See more in the ",(0,n.jsx)(t.a,{href:"/cado-response/deploy/gcp/gcp-settings#workload-identity-federation",children:"GCP Import Settings"})," page."]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1574:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/eks3-fc961c2189e29adc6a2571cacf950e28.png"},3633:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gke-8354716bca9bc18f39cbf9caa850c641.png"},263:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>r});var n=o(7294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);