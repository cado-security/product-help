"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8230],{33003:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(74848),n=s(28453);const r={title:"EBS Direct Acquisition",hide_title:!0,sidebar_position:11},c=void 0,o={id:"cado/discovery-import/aws/ebs-direct-acquisition",title:"EBS Direct Acquisition",description:"Why EBS Direct Acquisition",source:"@site/docs/cado/discovery-import/aws/ebs-direct-acquisition.md",sourceDirName:"cado/discovery-import/aws",slug:"/cado/discovery-import/aws/ebs-direct-acquisition",permalink:"/cado/discovery-import/aws/ebs-direct-acquisition",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/aws/ebs-direct-acquisition.md",tags:[],version:"current",lastUpdatedAt:1734964901,formattedLastUpdatedAt:"Dec 23, 2024",sidebarPosition:11,frontMatter:{title:"EBS Direct Acquisition",hide_title:!0,sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Import large EC2 instances",permalink:"/cado/discovery-import/aws/large-aws-imports"},next:{title:"Azure Compute",permalink:"/cado/discovery-import/azure/azure-compute"}},d={},l=[{value:"Why EBS Direct Acquisition",id:"why-ebs-direct-acquisition",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Enable EBS Direct Acquisition",id:"enable-ebs-direct-acquisition",level:3},{value:"Enable Deployed Workers",id:"enable-deployed-workers",level:3},{value:"Roles Required",id:"roles-required",level:3},{value:"Steps to Import using EBS Direct Acquisition",id:"steps-to-import-using-ebs-direct-acquisition",level:3}];function A(e){const i={h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h3,{id:"why-ebs-direct-acquisition",children:"Why EBS Direct Acquisition"}),"\n",(0,t.jsx)(i.p,{children:"The EBS direct acquisition feature significantly improves the capture speed of disks. This feature also requires less permissions for acquisition."}),"\n",(0,t.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(i.h3,{id:"enable-ebs-direct-acquisition",children:"Enable EBS Direct Acquisition"}),"\n",(0,t.jsx)(i.p,{children:"To enable EBS Direct Acquisition (Admin required):"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.strong,{children:"Settings"})," > ",(0,t.jsx)(i.strong,{children:"Experiments"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Enable ",(0,t.jsx)(i.strong,{children:"EBS Direct Acquisitions"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"EBS Direct Acquisition",src:s(42799).A+"",width:"563",height:"76"})}),"\n",(0,t.jsx)(i.h3,{id:"enable-deployed-workers",children:"Enable Deployed Workers"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Navigate to ",(0,t.jsx)(i.strong,{children:"Settings"})," > ",(0,t.jsx)(i.strong,{children:"Advanced"})," (Admin required)"]}),"\n",(0,t.jsxs)(i.li,{children:["Enable ",(0,t.jsx)(i.strong,{children:"Deployed Workers"})," (This is needed for full acquisition)"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"EBS Workers",src:s(70951).A+"",width:"1071",height:"181"})}),"\n",(0,t.jsx)(i.h3,{id:"roles-required",children:"Roles Required"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["ebs",":ListSnapshotBlocks"]}),"\n",(0,t.jsxs)(i.li,{children:["ebs",":ListChangedBlocks"]}),"\n",(0,t.jsxs)(i.li,{children:["ebs",":GetSnapshotBlock"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"steps-to-import-using-ebs-direct-acquisition",children:"Steps to Import using EBS Direct Acquisition"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["On your investigation click ",(0,t.jsx)(i.strong,{children:"import"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"cloud"})," from the list of providers"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"EBS Providers",src:s(98284).A+"",width:"1303",height:"297"})}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"AWS"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"EBS Cloud Account",src:s(70264).A+"",width:"241",height:"128"})}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsx)(i.li,{children:"Select Access method"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"EBS Access Method",src:s(89213).A+"",width:"264",height:"79"})}),"\n",(0,t.jsxs)(i.ol,{start:"5",children:["\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"EC2"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"EBS EC2",src:s(92248).A+"",width:"264",height:"251"})}),"\n",(0,t.jsxs)(i.ol,{start:"6",children:["\n",(0,t.jsx)(i.li,{children:"Select your region of choice"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"EBS Region",src:s(17876).A+"",width:"955",height:"155"})}),"\n",(0,t.jsxs)(i.ol,{start:"7",children:["\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"Full acquisition"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"EBS Full Acquisition",src:s(39580).A+"",width:"446",height:"112"})}),"\n",(0,t.jsxs)(i.ol,{start:"8",children:["\n",(0,t.jsx)(i.li,{children:"Review your options then click continue to finish"}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(A,{...e})}):A(e)}},89213:(e,i,s)=>{s.d(i,{A:()=>t});const t="data:image/png;base64,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"},39580:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/ebs-actype-526e66895f30d63445724914495af5ea.png"},70264:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/ebs-cloudaccount-61a0c8ecbb5833aeab4100ace830645a.png"},42799:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/ebs-directac-63d107af0d28657e88828daebd4c4bb9.png"},92248:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/ebs-ec2-02a63ce80706b27fd85f0b2fc98e8136.png"},98284:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/ebs-providers-eb60fa011dac9aba6b9f65e5525a472a.png"},17876:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/ebs-region-9d1014cc0bd7055cc73de48e1b63ffc2.png"},70951:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/ebs-workers-eafb309374befed993e98677ebdded68.png"},28453:(e,i,s)=>{s.d(i,{R:()=>c,x:()=>o});var t=s(96540);const n={},r=t.createContext(n);function c(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);