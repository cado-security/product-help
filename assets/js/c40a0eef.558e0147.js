"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[607],{66736:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(74848),o=s(28453);const i={title:"Required Role Scoping",hide_title:!0,sidebar_position:8},c="Required Role Scoping",r={id:"cado/deploy/aws/iam/required-role-scoping",title:"Required Role Scoping",description:"Upgrade Cado Instance",source:"@site/docs/cado/deploy/aws/iam/required-role-scoping.md",sourceDirName:"cado/deploy/aws/iam",slug:"/cado/deploy/aws/iam/required-role-scoping",permalink:"/cado/deploy/aws/iam/required-role-scoping",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/iam/required-role-scoping.md",tags:[],version:"current",lastUpdatedAt:1741600570,formattedLastUpdatedAt:"Mar 10, 2025",sidebarPosition:8,frontMatter:{title:"Required Role Scoping",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Reduce KMS permissions",permalink:"/cado/deploy/aws/iam/tighten-kms"},next:{title:"How to Tighten IAM Permissions for SSM in AWS",permalink:"/cado/deploy/aws/iam/ssm"}},a={},l=[{value:"Upgrade Cado Instance",id:"upgrade-cado-instance",level:2},{value:"Switch to Instance Roles",id:"switch-to-instance-roles",level:2},{value:"Enable EBS Direct Acquisition",id:"enable-ebs-direct-acquisition",level:2},{value:"Scope down Permissions",id:"scope-down-permissions",level:2},{value:"Account &amp; Platform Check",id:"account--platform-check",level:2},{value:"1. <strong>Account Health Check</strong>",id:"1-account-health-check",level:4},{value:"2. <strong>Platform Check</strong>",id:"2-platform-check",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"required-role-scoping",children:"Required Role Scoping"}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-cado-instance",children:"Upgrade Cado Instance"}),"\n",(0,t.jsx)(n.p,{children:"Upgrade your Cado instance to any version >= MIN_VERSION"}),"\n",(0,t.jsx)(n.h2,{id:"switch-to-instance-roles",children:"Switch to Instance Roles"}),"\n",(0,t.jsx)(n.p,{children:"Switch your platform to run using the instance role."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If you originally deployed with a version >=2.161.0 you will already be using the new instance role and can skip this step. If this is the case you won\u2019t have the \u2018Scoped Up Instance Role\u2019 settings section in step 2. If you aren\u2019t sure, please share a log bundle with the Cado team and we can confirm if you need this step or not."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Update your ",(0,t.jsx)(n.code,{children:"myCadoResponseInstanceRolePolicy"})," to match ",(0,t.jsx)(n.a,{href:"https://github.com/cado-security/Deployment-Templates/blob/main/new-roles/AWSInstanceRole.json",children:"https://github.com/cado-security/Deployment-Templates/blob/main/new-roles/AWSInstanceRole.json"})]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE:"})," Replace MY_CADO_BUCKET with the name of your Cado S3 bucket. Replace CADO_REGION with the region you deployed Cado in. Replace CADO_ACCOUNT_NUMBER with the account number where Cado is deployed."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["i. This adds the permissions required to run the Cado platform to the ",(0,t.jsx)(n.code,{children:"myCadoResponseInstanceRolePolicy"}),", which leads to some duplications with ",(0,t.jsx)(n.code,{children:"myCadoResponseRolePolicy"}),". The duplicate permissions will be removed in a later step."]}),"\n",(0,t.jsxs)(n.p,{children:["ii. If you are using Terraform, then our latest version (",(0,t.jsx)(n.a,{href:"https://github.com/cado-security/Deployment-Templates/tree/main/aws_v2",children:"https://github.com/cado-security/Deployment-Templates/tree/main/aws_v2"}),") already includes the required role."]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.strong,{children:"Settings > Advanced > Scoped Up Instance Role"}),": clicking ",(0,t.jsx)(n.code,{children:"Check Instance Role"})," will verify that your new role is set up correctly and if the check passes, swap your Cado instance to use it. This tells Cado to use ",(0,t.jsx)(n.code,{children:"myCadoResponseInstanceRole"})," for running the platform and ",(0,t.jsx)(n.code,{children:"myCadoResponseRole"})," for acquisition."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Scoped up Instance Role",src:s(15931).A+"",width:"512",height:"130"})}),"\n",(0,t.jsx)(n.h2,{id:"enable-ebs-direct-acquisition",children:"Enable EBS Direct Acquisition"}),"\n",(0,t.jsx)(n.p,{children:"Switch to using EBS direct access. This both reduces the permissions required, and significantly increases the speed of EC2 acquisitions. If you have already enabled the EBS direct access beta you can skip this step."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Update your ",(0,t.jsx)(n.code,{children:"myCadoResponesRole"})," role and cross account roles to the latest. The extra permissions you need are: ebs",":ListSnapshotBlocks",", ebs",":ListChangedBlocks",", ebs",":GetSnapshotBlock","."]}),"\n",(0,t.jsxs)(n.p,{children:["i. If you are using terraform the latest version of the Cado role (in ",(0,t.jsx)(n.a,{href:"https://github.com/cado-security/Deployment-Templates/tree/main/aws_v2",children:"https://github.com/cado-security/Deployment-Templates/tree/main/aws_v2"}),") and cross account roles (",(0,t.jsx)(n.a,{href:"https://github.com/cado-security/Deployment-Templates/tree/main/cross-account",children:"https://github.com/cado-security/Deployment-Templates/tree/main/cross-account"}),") include these already."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enable the EBS Direct Acquisitions flag in Settings > Experiments"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"EBS Direct Acquisition",src:s(78129).A+"",width:"563",height:"76"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Import an EC2 (full disk), ami, volume or snapshot"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"scope-down-permissions",children:"Scope down Permissions"}),"\n",(0,t.jsx)(n.p,{children:"Remove now unused permissions (Optional but suggested)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Update your ",(0,t.jsx)(n.code,{children:"myCadoResponseInstanceRole"})," to match ",(0,t.jsx)(n.a,{href:"https://github.com/cado-security/Deployment-Templates/blob/main/new-roles/AWSInstanceRole.yaml",children:"https://github.com/cado-security/Deployment-Templates/blob/main/new-roles/AWSInstanceRole.yaml"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Update your ",(0,t.jsx)(n.code,{children:"myCadoResponseRole"})," and all cross account roles to ",(0,t.jsx)(n.a,{href:"https://github.com/cado-security/Deployment-Templates/blob/main/new-roles/AcquisitionPolicy.yaml",children:"https://github.com/cado-security/Deployment-Templates/blob/main/new-roles/AcquisitionPolicy.yaml"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"account--platform-check",children:"Account & Platform Check"}),"\n",(0,t.jsx)(n.p,{children:"Run a health and platform check on your account to confirm everything is working as expected."}),"\n",(0,t.jsxs)(n.h4,{id:"1-account-health-check",children:["1. ",(0,t.jsx)(n.strong,{children:"Account Health Check"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Settings"})," on your Cado Platform."]}),"\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Accounts"})," and select the desired account."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Run Account Check"})," to perform the health check."]}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"2-platform-check",children:["2. ",(0,t.jsx)(n.strong,{children:"Platform Check"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On your Cado Platform, navigate to the ",(0,t.jsx)(n.strong,{children:"Platform"})," page."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Run a Platform Check"})," to initiate the check."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},78129:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ebs-direct-acquisition-63d107af0d28657e88828daebd4c4bb9.png"},15931:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/scoped-up-instance-ac582293c2df2a90434572ce98cab1dc.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(96540);const o={},i=t.createContext(o);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);