"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2485],{22468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=n(74848),i=n(28453);const c={title:"Bucket",hide_title:!0,sidebar_position:11},o="Bucket",r={id:"cado/deploy/gcp/gcp-bucket",title:"Bucket",description:"The Cado deployment requires a storage bucket for various functionality including evidence preservation, health checks and Cado host based acquisitions.",source:"@site/docs/cado/deploy/gcp/gcp-bucket.md",sourceDirName:"cado/deploy/gcp",slug:"/cado/deploy/gcp/gcp-bucket",permalink:"/cado/deploy/gcp/gcp-bucket",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/gcp/gcp-bucket.md",tags:[],version:"current",lastUpdatedAt:1735919079,formattedLastUpdatedAt:"Jan 3, 2025",sidebarPosition:11,frontMatter:{title:"Bucket",hide_title:!0,sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Secret Manager",permalink:"/cado/deploy/gcp/gcp-secret-manager"},next:{title:"Workers",permalink:"/cado/deploy/gcp/gcp-workers"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}];function l(e){const t={code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"bucket",children:"Bucket"}),"\n",(0,s.jsx)(t.p,{children:"The Cado deployment requires a storage bucket for various functionality including evidence preservation, health checks and Cado host based acquisitions."}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The IAM role used in the initial deployment, and permission to edit it"}),"\n",(0,s.jsx)(t.li,{children:"Permission to create a GCS bucket in the GCP console"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Add the necessary permissions by adding the following to your IAM role:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'   // Bucket Access\n   "storage.buckets.get",\n   "storage.buckets.list",\n   "storage.objects.create",\n   "storage.objects.delete",\n   "storage.objects.get",\n   "storage.objects.list",\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Create a GCS bucket in the GCP console"}),"\n",(0,s.jsx)(t.li,{children:"Enter the bucket name in the Setup Wizard - if the configured permissions are insufficient you will be notified and asked to correct before logging into the platform."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"GCP Bucket",src:n(14624).A+"",width:"512",height:"212"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},14624:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/gcp-bucket-f7b5c94fd7e66f9bc1789cba8ae162d0.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},c=s.createContext(i);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);