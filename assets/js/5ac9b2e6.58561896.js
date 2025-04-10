"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1100],{32185:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(74848),i=n(28453);const r={title:"NFS",hide_title:!0,sidebar_position:4},d="NFS",o={id:"cado/deploy/aws/aws-nfs",title:"NFS",description:"The initial minimal deployment deploys without a Network File Share (NFS). Enabling an NFS allows Cado to keep a copy of every file processed on disk. This enables the re-running of analysis and the downloading of the original file in the UI for further analysis.",source:"@site/docs/cado/deploy/aws/aws-nfs.md",sourceDirName:"cado/deploy/aws",slug:"/cado/deploy/aws/aws-nfs",permalink:"/cado/deploy/aws/aws-nfs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/aws-nfs.md",tags:[],version:"current",lastUpdatedAt:1744284627,formattedLastUpdatedAt:"Apr 10, 2025",sidebarPosition:4,frontMatter:{title:"NFS",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bucket",permalink:"/cado/deploy/aws/aws-bucket"},next:{title:"Secret Manager",permalink:"/cado/deploy/aws/aws-secret-manager"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}];function c(e){const s={br:"br",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"nfs",children:"NFS"}),"\n",(0,t.jsx)(s.p,{children:"The initial minimal deployment deploys without a Network File Share (NFS). Enabling an NFS allows Cado to keep a copy of every file processed on disk. This enables the re-running of analysis and the downloading of the original file in the UI for further analysis."}),"\n",(0,t.jsx)(s.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The VPC and subnet you used in the initial deployment"}),"\n",(0,t.jsx)(s.li,{children:"The security group you used in the initial deployment, and permission to edit it"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Configure inbound Security Group rules. Use security group id as Custom Source"}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Port"}),(0,t.jsx)(s.th,{children:"Source"}),(0,t.jsx)(s.th,{children:"Reason"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Custom TCP"}),(0,t.jsx)(s.td,{children:"2049"}),(0,t.jsx)(s.td,{children:"Custom -  Your Cado security group"}),(0,t.jsx)(s.td,{children:"Communicating with NFS"})]})})]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Navigate to the EFS page in AWS Console"}),"\n",(0,t.jsxs)(s.li,{children:["Click \u201c",(0,t.jsx)(s.strong,{children:"Create file system"}),"\u201d"]}),"\n",(0,t.jsxs)(s.li,{children:["Select your VPC from step 1, then press \u201c",(0,t.jsx)(s.strong,{children:"Customize"}),"\u201d."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"AWS Create FS",src:n(46141).A+"",width:"1212",height:"826"})}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Leave defaults unchanged for General, Performance settings and Tags. Click Next."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"On the Network Access page"}),"\n",(0,t.jsx)(s.p,{children:"a. Under Virtual Private Cloud (VPC): Select the VPC where your instance is deployed."}),"\n",(0,t.jsx)(s.p,{children:"b. Under mount targets: Create a mount target using the subnet and security group your instance is deployed with"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"AWS Network Access",src:n(46364).A+"",width:"1600",height:"691"})}),"\n",(0,t.jsxs)(s.ol,{start:"7",children:["\n",(0,t.jsx)(s.li,{children:"Leave the File system policy settings unchanged. Click Next."}),"\n",(0,t.jsxs)(s.li,{children:['On the Review and Create page: click "',(0,t.jsx)(s.strong,{children:"Create"}),'"']}),"\n",(0,t.jsxs)(s.li,{children:["On the last page, confirm the settings are correct, then press \u201c",(0,t.jsx)(s.strong,{children:"Create"}),"\u201d."]}),"\n",(0,t.jsx)(s.li,{children:"Select the filesystem ID of the newly created filesystem and open the access points tab."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"AWS FS Overview",src:n(87330).A+"",width:"1600",height:"880"})}),"\n",(0,t.jsxs)(s.ol,{start:"11",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Create a new access point with the following settings:"}),"\n",(0,t.jsxs)(s.p,{children:["a. Under ",(0,t.jsx)(s.strong,{children:"Details"}),", set ",(0,t.jsx)(s.strong,{children:"Root directory path"})," to ",(0,t.jsx)(s.strong,{children:"/process"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"AWS Details",src:n(36651).A+"",width:"1600",height:"788"})}),"\n",(0,t.jsxs)(s.p,{children:["b. Under ",(0,t.jsx)(s.strong,{children:"POSIX user"}),":",(0,t.jsx)(s.br,{}),"\n","i. Set ",(0,t.jsx)(s.strong,{children:"User ID"})," to ",(0,t.jsx)(s.code,{children:"0"}),".",(0,t.jsx)(s.br,{}),"\n","ii. Set ",(0,t.jsx)(s.strong,{children:"Group ID"})," to ",(0,t.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"AWS POSIX",src:n(51840).A+"",width:"1600",height:"900"})}),"\n",(0,t.jsxs)(s.p,{children:["c. Under Root directory creation permissions:",(0,t.jsx)(s.br,{}),"\n","i. Set ",(0,t.jsx)(s.strong,{children:"Owner user ID"})," to ",(0,t.jsx)(s.code,{children:"0"}),".",(0,t.jsx)(s.br,{}),"\n","ii. Set ",(0,t.jsx)(s.strong,{children:"Owner group ID"})," to ",(0,t.jsx)(s.code,{children:"0"}),".",(0,t.jsx)(s.br,{}),"\n","iii. Set ",(0,t.jsx)(s.strong,{children:"Access point permissions"})," to ",(0,t.jsx)(s.code,{children:"0755"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"AWS Root Permission",src:n(46369).A+"",width:"1600",height:"898"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Click Create"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"For the file system go to the Network tab and make a note of the ip address for the availability zone your VM is in"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"AWS AZ",src:n(28728).A+"",width:"1600",height:"1416"})}),"\n",(0,t.jsxs)(s.ol,{start:"14",children:["\n",(0,t.jsxs)(s.li,{children:["Once the access point and mount target have finished creation, Mount in the UI (",(0,t.jsx)(s.strong,{children:"Settings"})," > ",(0,t.jsx)(s.strong,{children:"Advanced"})," > ",(0,t.jsx)(s.strong,{children:"NFS"})," > ",(0,t.jsx)(s.strong,{children:"Setup NFS"}),") using the ip address of the mount target:"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"AWS NFS",src:n(70750).A+"",width:"1600",height:"488"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28728:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/aws-az-ddbee811dcb1fb9ef4979dcd39ac7393.png"},46141:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/aws-create-fs-3420f1ff55e2d599df1b1bb9eaa0d098.png"},36651:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/aws-details-9fb91b7bd66a6291a04dd5a91f4ac94f.png"},87330:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/aws-fs-overview-9a3bacf59181a1999384c0e16e7f45a0.png"},46364:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/aws-network-access-3b43597b6e51384b679a865798b08d73.png"},70750:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/aws-nfs-c03dcd5b7f372709807eefe4160eab6f.png"},51840:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/aws-posix-cbfabd042a50a35dbbd1129c26d044af.png"},46369:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/aws-root-permission-b7e45f4fe4a276463ccfb37f37c0e6b4.png"},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>o});var t=n(96540);const i={},r=t.createContext(i);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);