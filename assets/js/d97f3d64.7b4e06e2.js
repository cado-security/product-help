"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6222],{1788:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=i(4848),s=i(8453);const o={title:"Security",hide_title:!0,sidebar_position:8},n="Security Considerations for Cado Host",a={id:"cado/discovery-import/cado-host/security",title:"Security",description:"- Static Analysis: Cado Host releases undergo the same static analysis as the primary Cado platform in our release pipeline, ensuring thorough security checks.",source:"@site/docs/cado/discovery-import/cado-host/security.md",sourceDirName:"cado/discovery-import/cado-host",slug:"/cado/discovery-import/cado-host/security",permalink:"/cado/discovery-import/cado-host/security",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/cado-host/security.md",tags:[],version:"current",lastUpdatedAt:1734011942,formattedLastUpdatedAt:"Dec 12, 2024",sidebarPosition:8,frontMatter:{title:"Security",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Script operation",permalink:"/cado/discovery-import/cado-host/script-operation"},next:{title:"Oracle Cloud Virtual Machines",permalink:"/cado/discovery-import/virtual-machine"}},c={},d=[{value:"Privilege Requirements",id:"privilege-requirements",level:3}];function l(e){const t={h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"security-considerations-for-cado-host",children:"Security Considerations for Cado Host"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Static Analysis"}),": Cado Host releases undergo the same static analysis as the primary Cado platform in our release pipeline, ensuring thorough security checks."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Code Signing"}),": Cado Host Windows binaries are signed with an EV (Extended Validation) code signing certificate, ensuring authenticity and integrity."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Custom Storage Options"}),": Customers can configure their own storage bucket or web server to host the Cado Host binary. This allows for scanning the binary with their own security tools, though it requires maintaining the latest version."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Temporary Write-Only Credentials"}),": Cado Host uses limited-time, write-only credentials generated by the Cado platform for accessing cloud storage, minimizing security risks."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Encrypted Communication"}),": All communication between Cado Host and cloud storage is encrypted using TLS, ensuring data security during transfer."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"privilege-requirements",children:"Privilege Requirements"}),"\n",(0,r.jsxs)(t.p,{children:["Cado Host requires ",(0,r.jsx)(t.strong,{children:"elevated privileges"})," to access raw disk and memory for full forensic collection. Running without elevated privileges will limit its ability to access these resources, preventing a complete forensic investigation."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>a});var r=i(6540);const s={},o=r.createContext(s);function n(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);