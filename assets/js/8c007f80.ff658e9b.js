"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4897],{4704:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=o(5893),i=o(1151);const n={title:"Security",hide_title:!0,sidebar_position:8},r="Security Considerations for Cado Host",a={id:"cado-host/security",title:"Security",description:"- Cado Host releases are scanned with the same static analysis tools that we use for the primary Cado platform in our release pipeline.",source:"@site/docs/cado-host/security.md",sourceDirName:"cado-host",slug:"/cado-host/security",permalink:"/cado-host/security",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/security.md",tags:[],version:"current",lastUpdatedAt:1720952854,formattedLastUpdatedAt:"Jul 14, 2024",sidebarPosition:8,frontMatter:{title:"Security",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Manual Uploads",permalink:"/cado-host/manual-upload"},next:{title:"FAQs",permalink:"/troubleshooting/faq"}},d={},c=[];function l(e){const t={h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"security-considerations-for-cado-host",children:"Security Considerations for Cado Host"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Cado Host releases are scanned with the same static analysis tools that we use for the primary Cado platform in our release pipeline."}),"\n",(0,s.jsx)(t.li,{children:"Cado Host Windows binaries are signed with an EV (Extended Validation) code signing certificate."}),"\n",(0,s.jsx)(t.li,{children:"An upcoming release will add support for customer hosted S3 buckets to deploy Cado Host from, enabling customers to scan any binaries deployed in their environments."}),"\n",(0,s.jsx)(t.li,{children:"Cado Host uses limited time, write-only credentials generated by the Cado platform to access cloud storage."}),"\n",(0,s.jsx)(t.li,{children:"Communication between Cado Host and the cloud storage is encrypted using TLS."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Cado Host requires running with elevated privileges to access the raw disk and memory. Whilst it can be run without elevated privileges, it will not be able to access the raw disk and memory and will not be able to perform a full forensic collection."})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>r});var s=o(7294);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);