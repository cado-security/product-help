"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7839],{73481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(74848),s=t(28453);const i={title:"NFS",hide_title:!0,sidebar_position:8},o="NFS",a={id:"cado/deploy/azure/azure-nfs",title:"NFS",description:"The initial deployment deployment deploys without a Network File Share (NFS). Enabling an NFS allows Cado to keep a copy of every file processed on disk. This enables the re-running of analysis and the downloading of the original file in the UI for further analysis.",source:"@site/docs/cado/deploy/azure/azure-nfs.md",sourceDirName:"cado/deploy/azure",slug:"/cado/deploy/azure/azure-nfs",permalink:"/cado/deploy/azure/azure-nfs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/azure/azure-nfs.md",tags:[],version:"current",lastUpdatedAt:1734964901,formattedLastUpdatedAt:"Dec 23, 2024",sidebarPosition:8,frontMatter:{title:"NFS",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Workers",permalink:"/cado/deploy/azure/azure-workers"},next:{title:"Secret Manager",permalink:"/cado/deploy/azure/azure-secret-manager"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}];function c(e){const n={br:"br",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nfs",children:"NFS"}),"\n",(0,r.jsx)(n.p,{children:"The initial deployment deployment deploys without a Network File Share (NFS). Enabling an NFS allows Cado to keep a copy of every file processed on disk. This enables the re-running of analysis and the downloading of the original file in the UI for further analysis."}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A storage account configured in the resource group (Can be the same as used to deploy)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A File Share created inside this storage account"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"There are no particular requirements on this fileshare, although we recommend a minimum size of 2 Terabytes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Create an NFS"})}),"\n",(0,r.jsxs)(n.p,{children:["a. Navigate to your storage account in the UI.",(0,r.jsx)(n.br,{}),"\n","b. Open ",(0,r.jsx)(n.strong,{children:"Datastorage > File Shares"})," in the sidebar.",(0,r.jsx)(n.br,{}),"\n","c. Press ",(0,r.jsx)(n.strong,{children:"Create"}),".",(0,r.jsx)(n.br,{}),"\n","d. Configure the File Share, choosing a memorable name and sensible size."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Mount in the UI (",(0,r.jsx)(n.strong,{children:"Settings"})," > ",(0,r.jsx)(n.strong,{children:"Advanced"})," > ",(0,r.jsx)(n.strong,{children:"NFS"})," >) using the Storage account name and the File Share name."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Azure NFS",src:t(1408).A+"",width:"1600",height:"445"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1408:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/nfs-azure-f79eff0a1e3541e404f4af932b9db984.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);