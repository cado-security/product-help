"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1150],{9499:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=s(4848),r=s(8453);const o={title:"Workers",hide_title:!0,sidebar_position:5},i="Workers",d={id:"cado/deploy/aws/aws-workers",title:"Workers",description:"The initial deployment runs everything on a single EC2 instance. In order to limit load on this instance and ensure the platform remains stable we limit types of imports that can be run to those based around Cado Host captures and small artefacts stored in S3. We also limit how many pieces of evidence can be processed at once.",source:"@site/docs/cado/deploy/aws/aws-workers.md",sourceDirName:"cado/deploy/aws",slug:"/cado/deploy/aws/aws-workers",permalink:"/cado/deploy/aws/aws-workers",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/aws-workers.md",tags:[],version:"current",lastUpdatedAt:1734696555,formattedLastUpdatedAt:"Dec 20, 2024",sidebarPosition:5,frontMatter:{title:"Workers",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to Tighten IAM Permissions for SSM in AWS",permalink:"/cado/deploy/aws/iam/ssm"},next:{title:"Add a load balancer and HTTPS",permalink:"/cado/deploy/aws/networking/aws-load-balancer"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"workers",children:"Workers"}),"\n",(0,t.jsx)(n.p,{children:"The initial deployment runs everything on a single EC2 instance. In order to limit load on this instance and ensure the platform remains stable we limit types of imports that can be run to those based around Cado Host captures and small artefacts stored in S3. We also limit how many pieces of evidence can be processed at once."}),"\n",(0,t.jsx)(n.p,{children:"To enable processing data from all sources or to process many items of evidence at once, Cado must be configured to allow it to run imports on additional EC2s."}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'vCPU capacity in your region: we recommend requesting 128 "Running On-Demand All Standard" instances.'}),"\n",(0,t.jsx)(n.li,{children:"Ability to update IAM role"}),"\n",(0,t.jsx)(n.li,{children:"Ability to update Security group"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Add the necessary permissions by adding the following Sid to your instance Role:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n {\n   "Sid": "RequiredForWorkers",\n   "Effect": "Allow",\n   "Action": [\n     "ec2:DeleteVolume",\n     "ec2:DeleteSnapshot",\n     "ec2:TerminateInstances",\n     "ec2:AttachVolume",\n     "ec2:DetachVolume",\n     "ec2:StopInstances",\n     "ec2:StartInstances",\n     "ec2:RunInstances",\n     "ec2:DescribeInstances",\n     "ec2:DescribeInstanceStatus",\n     "ec2:CreateTags",\n     "ec2:DescribeAddresses",\n     "ec2:AssociateAddress"\n   ],\n   "Resource": "*"\n },\n {\n   "Sid": "RequiredForWorkersAndUpdatesIAM",\n   "Effect": "Allow",\n   "Action": [\n     "iam:PassRole"\n   ],\n   "Resource": "arn:aws:iam::*:role/*CadoResponse*"\n }\n]\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Add the following  inbound Security Group rules"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Port"}),(0,t.jsx)(n.th,{children:"Source"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Custom TCP"}),(0,t.jsx)(n.td,{children:"5432"}),(0,t.jsx)(n.td,{children:"Custom"}),(0,t.jsx)(n.td,{children:"Your Cado security group - Data Storage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Custom TCP"}),(0,t.jsx)(n.td,{children:"9200"}),(0,t.jsx)(n.td,{children:"Custom"}),(0,t.jsx)(n.td,{children:"Your Cado security group - Data Storage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Custom TCP"}),(0,t.jsx)(n.td,{children:"6379"}),(0,t.jsx)(n.td,{children:"Custom"}),(0,t.jsx)(n.td,{children:"Your Cado security group - Data Storage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Custom TCP"}),(0,t.jsx)(n.td,{children:"24224"}),(0,t.jsx)(n.td,{children:"Custom"}),(0,t.jsx)(n.td,{children:"Your Cado security group - Log Handling"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"AWS Inbound Rules",src:s(652).A+"",width:"512",height:"219"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Enable in the UI: ",(0,t.jsx)(n.strong,{children:"Settings"})," > ",(0,t.jsx)(n.strong,{children:"Advanced"})," > ",(0,t.jsx)(n.strong,{children:"Processing"})," > Turn on Workers"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},652:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/aws-inbound-rules-5db0f7662633d56c5f63b9874291597f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(6540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);