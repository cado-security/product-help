"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8670],{12652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(74848),i=n(28453);const o={title:"Bucket",hide_title:!0,sidebar_position:10},s="Bucket",a={id:"cado/deploy/azure/azure-bucket",title:"Bucket",description:"The Cado deployment requires a storage bucket for various functionality including evidence preservation, health checks and Cado host based acquisitions.",source:"@site/docs/cado/deploy/azure/azure-bucket.md",sourceDirName:"cado/deploy/azure",slug:"/cado/deploy/azure/azure-bucket",permalink:"/cado/deploy/azure/azure-bucket",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/azure/azure-bucket.md",tags:[],version:"current",lastUpdatedAt:1744284627,formattedLastUpdatedAt:"Apr 10, 2025",sidebarPosition:10,frontMatter:{title:"Bucket",hide_title:!0,sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Secret Manager",permalink:"/cado/deploy/azure/azure-secret-manager"},next:{title:"GCP Full Terraform deployment",permalink:"/cado/deploy/gcp/gcp-deploy"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}];function l(e){const t={h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"bucket",children:"Bucket"}),"\n",(0,r.jsx)(t.p,{children:"The Cado deployment requires a storage bucket for various functionality including evidence preservation, health checks and Cado host based acquisitions."}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The Managed Identity used in the initial deployment and permission to edit it"}),"\n",(0,r.jsx)(t.li,{children:"Permission to create a Storage Account and Blob Storage container in the Azure console"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add the necessary permissions by adding the following to your Cado managed identity:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Storage Account Contributor scoped to your resource group"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a Storage Account in your Cado resource group"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a Blob container in the Storage Account above"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Enter the Storage Account and Container name in the Setup Wizard - if the configured permissions are insufficient you will be notified and asked to correct before logging into the platform."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Azure Bucket",src:n(56849).A+"",width:"512",height:"256"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},56849:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/azure-bucket-e823c57060037255b3832cae5174ab3b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);