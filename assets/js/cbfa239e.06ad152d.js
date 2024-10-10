"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3569],{7984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var a=t(5893),s=t(1151);const o={title:"Expand disk in AWS",hide_title:!0,sidebar_position:8},i="How to expand available data storage within the Cado platform in AWS",d={id:"cado/manage/expand-disk",title:"Expand disk in AWS",description:"Below are the steps for expanding the Cado data storage volume after deployment.  This follows the steps as outline by AWS' documentation: Extend a Linux file system after resizing a volume",source:"@site/docs/cado/manage/expand-disk.md",sourceDirName:"cado/manage",slug:"/cado/manage/expand-disk",permalink:"/cado/manage/expand-disk",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/expand-disk.md",tags:[],version:"current",lastUpdatedAt:1728552962,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:8,frontMatter:{title:"Expand disk in AWS",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Manage data",permalink:"/cado/manage/data"},next:{title:"Updating",permalink:"/cado/manage/updating"}},l={},r=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-expand-available-data-storage-within-the-cado-platform-in-aws",children:"How to expand available data storage within the Cado platform in AWS"}),"\n",(0,a.jsxs)(n.p,{children:["Below are the steps for expanding the Cado data storage volume after deployment.  This follows the steps as outline by AWS' documentation: ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html",children:"Extend a Linux file system after resizing a volume"})})]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Before continuing, create a snapshot of the ",(0,a.jsx)(n.code,{children:"CadoResponseDataVolume"})," volume which has the device name ",(0,a.jsx)(n.code,{children:"/dev/sdh"}),".  This will ensure you have a backup of the data volume to restore, in case you encounter an issue. ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html",children:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html"})]})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Extend the ",(0,a.jsx)(n.code,{children:"/dev/sdh"})," storage volume via the AWS Console by:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Navigating to your Cado instance"}),"\n",(0,a.jsxs)(n.li,{children:["Click the ",(0,a.jsx)(n.strong,{children:"Storage"})," tab"]}),"\n",(0,a.jsxs)(n.li,{children:["Click on the volume instance ID for Device Name ",(0,a.jsx)(n.code,{children:"/dev/sdh"})]}),"\n",(0,a.jsxs)(n.li,{children:["Select the ",(0,a.jsx)(n.code,{children:"CadoResponseDataVolume"})]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Actions"})]}),"\n",(0,a.jsxs)(n.li,{children:["Select ",(0,a.jsx)(n.strong,{children:"Modify Volume"})]}),"\n",(0,a.jsx)(n.li,{children:"Enter the new volume size"}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Modify"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["SSH into the Cado instance. example: ",(0,a.jsx)(n.code,{children:'ssh -i "us-east-2.pem" admin@ec2-55-234-10-9.compute-1.amazonaws.com'})]}),"\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:"df -hT"}),". Note the Avail space for the ",(0,a.jsx)(n.code,{children:"/dev/nvme1n1"})," filesystem mounted on ",(0,a.jsx)(n.code,{children:"/home/admin/data"}),". This should display the old volume size."]}),"\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:"lsblk"})," and note the ",(0,a.jsx)(n.code,{children:"nvme1n1"})," volume SIZE mounted on ",(0,a.jsx)(n.code,{children:"/home/admin/data"}),". This should display the new volume size."]}),"\n",(0,a.jsxs)(n.li,{children:["To extend the volume and make it available to the OS, run ",(0,a.jsx)(n.code,{children:"sudo xfs_growfs -d /home/admin/data"})]}),"\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:"df -hT"})," again and note the Avail space for the ",(0,a.jsx)(n.code,{children:"/dev/nvme1n1"})," filesystem mounted on ",(0,a.jsx)(n.code,{children:"/home/admin/data"})," This should now display the new volume size."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var a=t(7294);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);