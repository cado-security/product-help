"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8586],{5749:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=o(5893),r=o(1151);const s={title:"AWS Memory Analysis",hide_title:!0,sidebar_position:7},n="How to Import Memory from AWS EC2",a={id:"cado/discovery-import/aws/memory",title:"AWS Memory Analysis",description:"To acquire memory from Linux systems running in EC2, use the Triage Acquisition option under Import > EC2:",source:"@site/docs/cado/discovery-import/aws/memory.md",sourceDirName:"cado/discovery-import/aws",slug:"/cado/discovery-import/aws/memory",permalink:"/cado/discovery-import/aws/memory",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/aws/memory.md",tags:[],version:"current",lastUpdatedAt:1731344277,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:7,frontMatter:{title:"AWS Memory Analysis",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Lambda",permalink:"/cado/discovery-import/aws/aws-lambda"},next:{title:"Lightsail",permalink:"/cado/discovery-import/aws/aws-lightsail"}},c={},d=[{value:"Data Flow Diagram",id:"data-flow-diagram",level:3}];function m(e){const t={a:"a",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-import-memory-from-aws-ec2",children:"How to Import Memory from AWS EC2"}),"\n",(0,i.jsxs)(t.p,{children:["To acquire memory from Linux systems running in EC2, use the ",(0,i.jsx)(t.strong,{children:"Triage Acquisition"})," option under ",(0,i.jsx)(t.strong,{children:"Import > EC2"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"AWS Memory",src:o(877).Z+"",width:"1648",height:"284"})}),"\n",(0,i.jsxs)(t.p,{children:["This method requires the AWS Systems Manager (SSM) agent to be installed and running on the EC2 instance. The instance must also be registered with AWS Systems Manager. If the SSM agent is not available, you can still acquire memory by connecting to the machine via SSH (for Linux) or RDP (for Windows) and running ",(0,i.jsx)(t.strong,{children:"Cado Host"})," from ",(0,i.jsx)(t.strong,{children:"Import > Forensic Artifacts"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This method can also be used to acquire memory from Windows systems."}),"\n",(0,i.jsx)(t.p,{children:"For ECS and EKS acquisitions, memory will be collected automatically by default."}),"\n",(0,i.jsxs)(t.p,{children:["For additional details, see the ",(0,i.jsx)(t.a,{href:"/cado/discovery-import/data-types/memory",children:"Memory Analysis"})," page."]}),"\n",(0,i.jsx)(t.h3,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,i.jsx)(t.p,{children:"The following diagram illustrates how EC2 SSM memory acquisitions work:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"EC2 SSM Data Flow",src:o(9720).Z+"",width:"1674",height:"1056"})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},877:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/alternate-ec2-1d44379783163049a09c15fbf9a92565.png"},9720:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/ec2-ssm-d9a42580843ce87b725c9b3ebc71fb27.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>n});var i=o(7294);const r={},s=i.createContext(r);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);