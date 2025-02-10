"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5624],{36434:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=o(74848),i=o(28453);const n={title:"What is Cado Host",hide_title:!0,sidebar_position:1},a="What is Cado Host",r={id:"cado/discovery-import/cado-host/intro",title:"What is Cado Host",description:"Cado Host is a tool for acquiring forensic artifacts from target systems and storing them in cloud storage. It enables quick triage investigations by collecting essential data, which is stored in a zip file that can be automatically uploaded to Amazon AWS, Microsoft Azure, or Google Cloud Storage. Cado Host also supports local file storage, making it usable in air-gapped environments where cloud access is unavailable. Once the artifacts are collected, they can be imported, processed, and analyzed using the Cado platform.",source:"@site/docs/cado/discovery-import/cado-host/intro.md",sourceDirName:"cado/discovery-import/cado-host",slug:"/cado/discovery-import/cado-host/intro",permalink:"/cado/discovery-import/cado-host/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/cado-host/intro.md",tags:[],version:"current",lastUpdatedAt:1739185771,formattedLastUpdatedAt:"Feb 10, 2025",sidebarPosition:1,frontMatter:{title:"What is Cado Host",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Kubernetes Engine",permalink:"/cado/discovery-import/gcp/kubernetes-engine"},next:{title:"Deploy",permalink:"/cado/discovery-import/cado-host/deploy"}},d={},l=[];function c(e){const t={a:"a",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"what-is-cado-host",children:"What is Cado Host"}),"\n",(0,s.jsx)(t.p,{children:"Cado Host is a tool for acquiring forensic artifacts from target systems and storing them in cloud storage. It enables quick triage investigations by collecting essential data, which is stored in a zip file that can be automatically uploaded to Amazon AWS, Microsoft Azure, or Google Cloud Storage. Cado Host also supports local file storage, making it usable in air-gapped environments where cloud access is unavailable. Once the artifacts are collected, they can be imported, processed, and analyzed using the Cado platform."}),"\n",(0,s.jsx)(t.h1,{id:"data-collected",children:"Data Collected"}),"\n",(0,s.jsx)(t.p,{children:"Cado Host collects the following data from a target system:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Files from key forensic artifact locations."}),"\n",(0,s.jsx)(t.li,{children:"Open files."}),"\n",(0,s.jsx)(t.li,{children:"Metadata on running processes and network connections."}),"\n",(0,s.jsx)(t.li,{children:"Memory (optional)."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For more details, see ",(0,s.jsx)(t.a,{href:"/cado/discovery-import/cado-host/intro",children:"Collected Artifacts"}),"."]}),"\n",(0,s.jsx)(t.h1,{id:"use-cases-and-integrations",children:"Use Cases and Integrations"}),"\n",(0,s.jsx)(t.p,{children:"Cado Host integrates with the Cado platform to collect data from:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"AWS EC2 instances via SSM."}),"\n",(0,s.jsx)(t.li,{children:"Kubernetes systems like ECS, EKS, GKE, and AKS."}),"\n",(0,s.jsx)(t.li,{children:"XDR systems such as CrowdStrike and SentinelOne."}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"high-level-data-flow",children:"High-Level Data Flow"}),"\n",(0,s.jsx)(t.p,{children:"The diagram below illustrates the high-level data flow for Cado Host with AWS. The process is similar for Azure and Google Cloud Storage, differing only in the cloud storage provider."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Cado Host Dataflow",src:o(92366).A+"",width:"1726",height:"1018"})}),"\n",(0,s.jsx)(t.h1,{id:"supported-operating-systems",children:"Supported Operating Systems"}),"\n",(0,s.jsx)(t.p,{children:"Cado Host binaries are available for:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Microsoft Windows"}),": Versions 7, 8.1, 10, 11, and Windows Server 2012 R2 and above. Windows releases are signed with an EV certificate."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Linux"}),": Debian (9+), Ubuntu (16.04+), Fedora (29+), RHEL (7+), openSUSE (15+), SUSE Enterprise (SLES 12 SP2+), and Alpine (3.10+)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"macOS"})," (Intel and ARM): Version 10.13+."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"For older operating systems, we recommend alternative tools:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Linux"}),": Use ",(0,s.jsx)(t.a,{href:"https://github.com/tclahr/uac",children:"UAC"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Windows"}),": Use ",(0,s.jsx)(t.a,{href:"https://github.com/cado-security/Cado-Batch",children:"Cado Batch"})," (for Windows 2003+)."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},92366:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/cado-host-dfd-9a06225a628d6fc165244bd27617de33.png"},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var s=o(96540);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);