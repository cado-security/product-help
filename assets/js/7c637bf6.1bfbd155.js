"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7839],{73481:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(74848),s=r(28453);const i={title:"NFS",hide_title:!0,sidebar_position:8},a="NFS",o={id:"cado/deploy/azure/azure-nfs",title:"NFS",description:"The initial minimal deployment deployment deploys without a Network File Share (NFS). Enabling an NFS allows Cado to keep a copy of every file processed on disk. This enables the re-running of analysis and the downloading of the original file in the UI for further analysis.",source:"@site/docs/cado/deploy/azure/azure-nfs.md",sourceDirName:"cado/deploy/azure",slug:"/cado/deploy/azure/azure-nfs",permalink:"/cado/deploy/azure/azure-nfs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/azure/azure-nfs.md",tags:[],version:"current",lastUpdatedAt:1743513009,formattedLastUpdatedAt:"Apr 1, 2025",sidebarPosition:8,frontMatter:{title:"NFS",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Workers",permalink:"/cado/deploy/azure/azure-workers"},next:{title:"Secret Manager",permalink:"/cado/deploy/azure/azure-secret-manager"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}];function c(e){const n={br:"br",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nfs",children:"NFS"}),"\n",(0,t.jsx)(n.p,{children:"The initial minimal deployment deployment deploys without a Network File Share (NFS). Enabling an NFS allows Cado to keep a copy of every file processed on disk. This enables the re-running of analysis and the downloading of the original file in the UI for further analysis."}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A storage account configured in the resource group (Can be the same as used to deploy)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A File Share created inside this storage account"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"There are no particular requirements on this fileshare, although we recommend a minimum size of 2 Terabytes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create an NFS"})}),"\n",(0,t.jsxs)(n.p,{children:["a. Navigate to your storage account in the UI.",(0,t.jsx)(n.br,{}),"\n","b. Open ",(0,t.jsx)(n.strong,{children:"Datastorage > File Shares"})," in the sidebar.",(0,t.jsx)(n.br,{}),"\n","c. Press ",(0,t.jsx)(n.strong,{children:"Create"}),".",(0,t.jsx)(n.br,{}),"\n","d. Configure the File Share, choosing a memorable name and sensible size."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Mount in the UI (",(0,t.jsx)(n.strong,{children:"Settings"})," > ",(0,t.jsx)(n.strong,{children:"Advanced"})," > ",(0,t.jsx)(n.strong,{children:"NFS"})," >) using the Storage account name and the File Share name."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Azure NFS",src:r(1408).A+"",width:"1600",height:"445"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1408:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/nfs-azure-f79eff0a1e3541e404f4af932b9db984.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);