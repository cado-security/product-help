"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8918],{9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(5893),o=n(1151);const i={title:"Updating",hide_title:!0,sidebar_position:9},r="Updating Your Cado Instance",s={id:"cado-response/manage/updating",title:"Updating",description:"You can view version information and trigger updates by clicking Updates from the Settings menu.",source:"@site/docs/cado-response/manage/updating.md",sourceDirName:"cado-response/manage",slug:"/cado-response/manage/updating",permalink:"/cado-response/manage/updating",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/updating.md",tags:[],version:"current",lastUpdatedAt:1707509698,formattedLastUpdatedAt:"Feb 9, 2024",sidebarPosition:9,frontMatter:{title:"Updating",hide_title:!0,sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Data Management",permalink:"/cado-response/manage/data"},next:{title:"Health Monitoring",permalink:"/cado-response/manage/monitoring"}},d={},c=[];function u(e){const t={code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"updating-your-cado-instance",children:"Updating Your Cado Instance"}),"\n",(0,a.jsxs)(t.p,{children:["You can view version information and trigger updates by clicking ",(0,a.jsx)(t.strong,{children:"Updates"})," from the ",(0,a.jsx)(t.strong,{children:"Settings"})," menu."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"For AWS, the default update mechanism requires the ability for the Cado instance to connect outbound to a URL hosted at cado-public.s3.amazonaws.com and then deploy a public AMI in the same region in which the Cado platform is deployed."}),"\n",(0,a.jsx)(t.li,{children:"For Azure, the default update mechanism requires the ability to connect outbound to a VHD URL. You can upgrade via the UI, however if you wish to reduce Terraform state drift, it's recommended that you upgrade using the Terraform instructions below."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, you can specify an AMI ID in AWS or a VHD URL in Azure using the Alternative Update Method.  In all cases, upgrades to the Cado platform are user-initiated and will not be initiated automatically by Cado."}),"\n",(0,a.jsxs)(t.p,{children:["If you have deployed with Terraform, update the AMI ID (AWS) or VHD URL (Azure) and run ",(0,a.jsx)(t.code,{children:"terraform apply"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var a=n(7294);const o={},i=a.createContext(o);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);