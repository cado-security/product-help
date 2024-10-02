"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9609],{6e3:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=o(5893),s=o(1151);const i={title:"Summary",hide_title:!0,sidebar_position:1},a="Cado Host",r={id:"cado-host/intro",title:"Summary",description:"Cado Host is a solution to acquire forensic artifacts from systems and place them into cloud storage, enabling you to perform a quick triage investigation of a target system.",source:"@site/docs/cado-host/intro.md",sourceDirName:"cado-host",slug:"/cado-host/intro",permalink:"/cado-host/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/intro.md",tags:[],version:"current",lastUpdatedAt:1727886201,formattedLastUpdatedAt:"Oct 2, 2024",sidebarPosition:1,frontMatter:{title:"Summary",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Summary",permalink:"/cado-response/community-edition/community-intro"},next:{title:"Deploying",permalink:"/cado-host/deploy"}},d={},l=[];function c(e){const t={a:"a",h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"cado-host",children:"Cado Host"}),"\n",(0,n.jsx)(t.p,{children:"Cado Host is a solution to acquire forensic artifacts from systems and place them into cloud storage, enabling you to perform a quick triage investigation of a target system.\nData is collected and stored in a zip file that can be automatically uploaded to Amazon AWS, Microsoft Azure or Google Cloud Storage.\nIt also supports storing captured files locally, for usage in environments where cloud storage is not available such as air-gapped networks.\nOnce collected, these artifacts can be imported, processed and analysed in the Cado Response platform."}),"\n",(0,n.jsx)(t.h1,{id:"data-collected",children:"Data Collected"}),"\n",(0,n.jsx)(t.p,{children:"On a target system Cado Host will collect:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Files from a list of key locations of forensic artefacts"}),"\n",(0,n.jsx)(t.li,{children:"Open files"}),"\n",(0,n.jsx)(t.li,{children:"Meta-data on running processes and network connections"}),"\n",(0,n.jsxs)(t.li,{children:["Memory (Optional)\nFor more, see ",(0,n.jsx)(t.a,{href:"/cado-host/artifacts",children:"Collected Artifacts"})]}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"use-case-and-integrations",children:"Use Case and Integrations"}),"\n",(0,n.jsx)(t.p,{children:"Cado Host is also used by the Cado Platform to collect data from:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"AWS EC2's over SSM"}),"\n",(0,n.jsx)(t.li,{children:"Kubernetes systems such as ECS, EKS, GKE and AKS"}),"\n",(0,n.jsx)(t.li,{children:"XDR systems such as Crowdstrike and SentinelOne"}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"high-level-dataflow",children:"High Level Dataflow"}),"\n",(0,n.jsxs)(t.p,{children:["The following diagram shows the high level dataflow of Cado Host for AWS. The same dataflow applies to Azure and Google Cloud Storage, with the exception of the cloud storage provider:\n",(0,n.jsx)(t.img,{alt:"Cado Host Dataflow",src:o(9709).Z+"",width:"1726",height:"1018"})]}),"\n",(0,n.jsx)(t.h1,{id:"supported-operating-systems",children:"Supported Operating Systems"}),"\n",(0,n.jsx)(t.p,{children:"Cado Host binaries are available for:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Microsoft Windows: 7, 8.1, 10, 11 and Microsoft Windows Server Server 2012 R2+. Windows releases are signed with an EV certificate."}),"\n",(0,n.jsx)(t.li,{children:"Linux: Debian: 9+, Ubuntu: 16.04+, Fedora: 29+, RHEL: 6+, openSUSE: 15+, SUSE Enterprise (SLES): 12 SP2+, Alpine: 3.10+"}),"\n",(0,n.jsx)(t.li,{children:"MacOS (Intel and ARM): 10.13+"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For older Operating systems we recommend instead acquiring with:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/tclahr/uac",children:"UAC"})," for Linux"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/cado-security/Cado-Batch",children:"Cado Batch"})," for Windows (for Windows 2003+)"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9709:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cado-host-dfd-6295c1966c9f08fcb96fba696973f979.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>a});var n=o(7294);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);