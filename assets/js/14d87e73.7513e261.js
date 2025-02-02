"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9866],{14575:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=o(74848),s=o(28453);const r={title:"Export to on-premise forensic tools",hide_title:!0,sidebar_position:1},i="How to Export to On-Premise Forensic Tools",c={id:"cado/integrations/forensic-tools",title:"Export to on-premise forensic tools",description:"Cado collects forensic data in the following formats based on the cloud provider:",source:"@site/docs/cado/integrations/forensic-tools.md",sourceDirName:"cado/integrations",slug:"/cado/integrations/forensic-tools",permalink:"/cado/integrations/forensic-tools",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/integrations/forensic-tools.md",tags:[],version:"current",lastUpdatedAt:1738502359,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:1,frontMatter:{title:"Export to on-premise forensic tools",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API overview",permalink:"/cado/integrations/api-overview"},next:{title:"How to export to SIEM",permalink:"/cado/integrations/siem"}},a={},l=[{value:"Centrally Preserving Data",id:"centrally-preserving-data",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-export-to-on-premise-forensic-tools",children:"How to Export to On-Premise Forensic Tools"}),"\n",(0,n.jsx)(t.p,{children:"Cado collects forensic data in the following formats based on the cloud provider:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"AWS EC2"})," systems: DD format"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Azure Virtual Machines"}),": VHD format"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"GCP Instances"}),": VMDK format"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Cado Host Triage captures"})," (including captures from Containers): ZIP format"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These files are stored in cloud storage (e.g., S3 in AWS or Storage in Azure) and can be downloaded from the respective cloud console. Once downloaded, the data can be imported into desktop forensic tools such as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.magnetforensics.com/products/magnet-axiom/",children:"Magnet Axiom"})," (",(0,n.jsx)(t.a,{href:"https://www.magnetforensics.com/docs/axiom/html/Content/en-us/acquire-cloud/acquire-amazon-s3.htm",children:"How to import from S3"}),")"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.x-ways.net/forensics/",children:"X-Ways Forensics"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.opentext.com/products/encase-forensic",children:"EnCase Forensic"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"centrally-preserving-data",children:"Centrally Preserving Data"}),"\n",(0,n.jsxs)(t.p,{children:["If your deployment is in AWS, you can configure the system to automatically copy and preserve all processed evidence in a central S3 bucket. To enable this feature, go to ",(0,n.jsx)(t.strong,{children:"Settings"})," > ",(0,n.jsx)(t.strong,{children:"Preservation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Preservation",src:o(2181).A+"",width:"1614",height:"600"})}),"\n",(0,n.jsx)(t.p,{children:'When data is collected in AWS (to the "default" bucket)/Azure/GCP - a second copy of the data will be copied to the S3 bucket set for evidence preservation.'})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2181:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/preserve-77127c08dfd8fd7b4fd7ba1012390ff4.png"},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var n=o(96540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);