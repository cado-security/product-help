"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8891],{78886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(74848),r=n(28453);const i={title:"Updating",hide_title:!0,sidebar_position:9},o="How to Update the Cado Platform",d={id:"cado/manage/updating",title:"Updating",description:"You can check version details and initiate updates by selecting Updates from the Settings menu.",source:"@site/docs/cado/manage/updating.md",sourceDirName:"cado/manage",slug:"/cado/manage/updating",permalink:"/cado/manage/updating",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/updating.md",tags:[],version:"current",lastUpdatedAt:1734964901,formattedLastUpdatedAt:"Dec 23, 2024",sidebarPosition:9,frontMatter:{title:"Updating",hide_title:!0,sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Expand disk in AWS",permalink:"/cado/manage/expand-disk"},next:{title:"Cost estimates",permalink:"/cado/manage/cost-management"}},s={},c=[{value:"AWS",id:"aws",level:3},{value:"Azure",id:"azure",level:3},{value:"GCP",id:"gcp",level:3},{value:"Alternative Update Method",id:"alternative-update-method",level:3},{value:"Updating with Terraform",id:"updating-with-terraform",level:3},{value:"Update Details for Terraform and Custom Updates",id:"update-details-for-terraform-and-custom-updates",level:2},{value:"How does the Update Mechanism work?",id:"how-does-the-update-mechanism-work",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-update-the-cado-platform",children:"How to Update the Cado Platform"}),"\n",(0,a.jsxs)(t.p,{children:["You can check version details and initiate updates by selecting ",(0,a.jsx)(t.strong,{children:"Updates"})," from the ",(0,a.jsx)(t.strong,{children:"Settings"})," menu."]}),"\n",(0,a.jsx)(t.h3,{id:"aws",children:"AWS"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The default update method in AWS requires the Cado instance to have outbound connectivity to ",(0,a.jsx)(t.code,{children:"cado-public.s3.amazonaws.com"}),". It will then deploy a public AMI in the same region as the Cado platform."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"azure",children:"Azure"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"For Azure, the default update process requires outbound connectivity to a VHD URL. You can update via the UI, but to minimize Terraform state drift, it is recommended to follow the Terraform instructions for updates."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"gcp",children:"GCP"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Updates in GCP can be performed through the UI or using Terraform. Terraform users should specify the new image in the ",(0,a.jsx)(t.code,{children:"gcpVars.tfvars"})," file."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"alternative-update-method",children:"Alternative Update Method"}),"\n",(0,a.jsxs)(t.p,{children:["In AWS or Azure, you can manually specify an AMI ID or VHD URL, respectively, using the ",(0,a.jsx)(t.strong,{children:"Alternative Update Method"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Note that all updates are user-initiated; Cado will not trigger updates automatically."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Update",src:n(93164).A+"",width:"1470",height:"368"})}),"\n",(0,a.jsx)(t.h3,{id:"updating-with-terraform",children:"Updating with Terraform"}),"\n",(0,a.jsxs)(t.p,{children:["For users deploying with Terraform, update the AMI ID (AWS), VHD URL (Azure), or VMDK URL (GCP) and then run ",(0,a.jsx)(t.code,{children:"terraform apply"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"When upgrading via Terraform, it is recommended to gracefully stop your currently running instance through the console before starting the upgrade."})}),"\n",(0,a.jsx)(t.h2,{id:"update-details-for-terraform-and-custom-updates",children:"Update Details for Terraform and Custom Updates"}),"\n",(0,a.jsxs)(t.p,{children:["To retrieve the latest AMI IDs and URLs for updating your Cado platform, refer to our public ",(0,a.jsx)(t.a,{href:"https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json",children:"update JSON"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The latest release information is listed at the bottom of the JSON file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'{\n  "release_date": 1709694258, \n  "version": "2.119.0", \n  "required": false, \n  "ami_id": {\n    "us-east-1": "ami-xxx"\n  }, \n  "vhd_uri": "https://xxx", \n  "gcp_image": "https://xxx"\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"how-does-the-update-mechanism-work",children:"How does the Update Mechanism work?"}),"\n",(0,a.jsx)(t.p,{children:"The update mechanism works by deploying a new instance (via AMI in AWS, or via URL in Azure and GCP) and moving the attatched data-disk. In AWS HA environments, the ASG is updated to use the new AMI."}),"\n",(0,a.jsx)(t.p,{children:"If updating via the User Interface, before the update is performed, a number of checks are performed to ensure any IAM or Infrastructure requirements are met. A warning is issued in the UI if the AMI is not from an official Cado account."}),"\n",(0,a.jsx)(t.p,{children:"If updating manually by Terraform or CloudFormation, these checks cannot be run."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},93164:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/alt-update-8f22a0b2c04708e5bb7ae40e50f1668d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var a=n(96540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);