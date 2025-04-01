"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1563],{92867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(74848),o=n(28453);const a={title:"Wiz",hide_title:!0,sidebar_position:1},s="How to Integrate Wiz with Cado",r={id:"cado/integrations/cnapp/wiz",title:"Wiz",description:"The Cado platform automates the processing and analysis of AWS EC2 EBS volumes acquired through the Wiz platform. By integrating Wiz with Cado, you can seamlessly automate the collection, processing, and analysis of AWS EC2 virtual machines without granting Cado direct access to the environment where the EC2 instances are located.",source:"@site/docs/cado/integrations/cnapp/wiz.md",sourceDirName:"cado/integrations/cnapp",slug:"/cado/integrations/cnapp/wiz",permalink:"/cado/integrations/cnapp/wiz",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/integrations/cnapp/wiz.md",tags:[],version:"current",lastUpdatedAt:1743513009,formattedLastUpdatedAt:"Apr 1, 2025",sidebarPosition:1,frontMatter:{title:"Wiz",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cortex XSOAR",permalink:"/cado/integrations/soar/cortex-xsoar"},next:{title:"SentinelOne",permalink:"/cado/integrations/xdr/sentinelone"}},c={},l=[{value:"Setup",id:"setup",level:3}];function d(e){const t={h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-integrate-wiz-with-cado",children:"How to Integrate Wiz with Cado"}),"\n",(0,i.jsx)(t.p,{children:"The Cado platform automates the processing and analysis of AWS EC2 EBS volumes acquired through the Wiz platform. By integrating Wiz with Cado, you can seamlessly automate the collection, processing, and analysis of AWS EC2 virtual machines without granting Cado direct access to the environment where the EC2 instances are located."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Wiz",src:n(17078).A+"",width:"796",height:"470"})}),"\n",(0,i.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(t.p,{children:"To integrate Wiz with Cado, follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Navigate to the ",(0,i.jsx)(t.strong,{children:"Detections > Integrations"})," and select ",(0,i.jsx)(t.strong,{children:"Wiz"})," from the set of source providers."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Wiz Integration",src:n(68373).A+"",width:"2652",height:"1412"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Give the rule a ",(0,i.jsx)(t.strong,{children:"Name"})," and ",(0,i.jsx)(t.strong,{children:"Description"})," and select ",(0,i.jsx)(t.strong,{children:"Continue"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Add the ",(0,i.jsx)(t.strong,{children:"EBS Tag Key"})," and ",(0,i.jsx)(t.strong,{children:"EBS Tag Value"})," pair for volumes copied by Wiz."]}),"\n",(0,i.jsx)(t.li,{children:"Navigate to the 'Rules' table and the newly created Wiz integration should be present."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Wiz will copy each Volume individually, so each Volume will have a unique Investigation. The Cado platform will automatically create an Investigation for each Volume copied by Wiz."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},68373:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/integrations-wiz-95817883e174cb42820229057848a9e3.png"},17078:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/wiz-integration-1f4223ae9cb45dd9b2caa2285d07f2b0.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);