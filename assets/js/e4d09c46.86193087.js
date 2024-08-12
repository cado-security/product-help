"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8918],{9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(5893),r=n(1151);const o={title:"Updating",hide_title:!0,sidebar_position:9},i="Updating Your Cado Instance",s={id:"cado-response/manage/updating",title:"Updating",description:"You can view version information and trigger updates by clicking Updates from the Settings menu.",source:"@site/docs/cado-response/manage/updating.md",sourceDirName:"cado-response/manage",slug:"/cado-response/manage/updating",permalink:"/cado-response/manage/updating",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/updating.md",tags:[],version:"current",lastUpdatedAt:1723453534,formattedLastUpdatedAt:"Aug 12, 2024",sidebarPosition:9,frontMatter:{title:"Updating",hide_title:!0,sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Networking and Proxies",permalink:"/cado-response/manage/networking-proxy"},next:{title:"Cost Management",permalink:"/cado-response/manage/cost-management"}},d={},c=[];function u(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"updating-your-cado-instance",children:"Updating Your Cado Instance"}),"\n",(0,a.jsxs)(t.p,{children:["You can view version information and trigger updates by clicking ",(0,a.jsx)(t.strong,{children:"Updates"})," from the ",(0,a.jsx)(t.strong,{children:"Settings"})," menu."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"For AWS, the default update mechanism requires the ability for the Cado instance to connect outbound to a URL hosted at cado-public.s3.amazonaws.com and then deploy a public AMI in the same region in which the Cado platform is deployed."}),"\n",(0,a.jsx)(t.li,{children:"For Azure, the default update mechanism requires the ability to connect outbound to a VHD URL. You can upgrade via the UI, however if you wish to reduce Terraform state drift, it's recommended that you upgrade using the Terraform instructions below."}),"\n",(0,a.jsxs)(t.li,{children:["For GCP, updates can be initiated through the user interface or Terraform. Terraform users can specify the new image in the ",(0,a.jsx)(t.code,{children:"gcpVars.tfvars"})," file."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, you can specify an AMI ID in AWS or a VHD URL in Azure using the Alternative Update Method.\nIn all cases, upgrades to the Cado platform are user-initiated and will not be initiated automatically by Cado."}),"\n",(0,a.jsxs)(t.p,{children:["If you have deployed with Terraform, update the AMI ID (AWS) or VHD URL (Azure) or VMDK URL (GCP) and run ",(0,a.jsx)(t.code,{children:"terraform apply"}),"."]}),"\n",(0,a.jsx)(t.h1,{id:"update-details-for-terraform-and-custom-updates",children:"Update Details for Terraform and Custom Updates"}),"\n",(0,a.jsxs)(t.p,{children:["Please view our ",(0,a.jsx)(t.a,{href:"https://cadosecurity.zendesk.com/hc/en-gb/articles/23253323591569-How-can-I-see-the-latest-Update-AMIs-and-URLs-for-updating-AWS-Azure-and-GCP",children:"knowledge base article"})," for where to retrieve the latest AMI IDs and URLs for updating your Cado platform, and more details on how the Update Mechanism operates."]}),"\n",(0,a.jsx)(t.p,{children:"This URL contains the information, with the latest release at the bottom of the JSON file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'{\n      "release_date": 1709694258, \n      "version": "2.119.0", \n      "required": false, \n      "ami_id": {\n        "us-east-1": "ami-xxx"\n      }, \n      "vhd_uri": "https://xxx", \n      "gcp_image": "https://xxx"\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(7294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);