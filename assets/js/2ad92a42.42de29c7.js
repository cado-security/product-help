"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9892],{18752:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var a=t(74848),c=t(28453);const n={title:"Manually add a cross-account role to Cado in AWS",hide_title:!0,sidebar_position:4},s="How to manually add a cross-account role to Cado",r={id:"cado/deploy/cross/add-cross-account-manual",title:"Manually add a cross-account role to Cado in AWS",description:"There are two main steps to set up cross-account acquisitions:",source:"@site/docs/cado/deploy/cross/add-cross-account-manual.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/add-cross-account-manual",permalink:"/cado/deploy/cross/add-cross-account-manual",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/add-cross-account-manual.md",tags:[],version:"current",lastUpdatedAt:1741600570,formattedLastUpdatedAt:"Mar 10, 2025",sidebarPosition:4,frontMatter:{title:"Manually add a cross-account role to Cado in AWS",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Automatically deploy a cross-account role with StackSets in AWS",permalink:"/cado/deploy/cross/cross-account-creation-auto"},next:{title:"Automatically add cross-account roles to Cado with AWS Organizations",permalink:"/cado/deploy/cross/aws-organizations"}},i={},d=[{value:"Step 2: Add the Target AWS Role ARN to the Cado Platform",id:"step-2-add-the-target-aws-role-arn-to-the-cado-platform",level:2}];function l(o){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...o.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-manually-add-a-cross-account-role-to-cado",children:"How to manually add a cross-account role to Cado"}),"\n",(0,a.jsx)(e.p,{children:"There are two main steps to set up cross-account acquisitions:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Create a Cross-Account IAM Policy and Role"})," in the target AWS account from which the Cado platform will acquire data. This allows Cado to assume the cross-account role for data acquisition."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Add the Cross-Account IAM Role ARN"})," to the Cado platform to enable access to that AWS account."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["This page describes step 2. For step 1, see ",(0,a.jsx)(e.a,{href:"/cado/deploy/cross/cross-account-creation",children:"Manually deploy a cross-account IAM role in AWS"}),"."]}),"\n",(0,a.jsxs)(e.admonition,{type:"info",children:[(0,a.jsx)(e.p,{children:"Throughout this guide:"}),(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["The ",(0,a.jsx)(e.strong,{children:"primary AWS account"})," is where Cado is deployed (referred to as account ",(0,a.jsx)(e.code,{children:"111111111111"}),")."]}),"\n",(0,a.jsxs)(e.li,{children:["The ",(0,a.jsx)(e.strong,{children:"target AWS account"})," is where cross-account access is being set up (referred to as account ",(0,a.jsx)(e.code,{children:"222222222222"}),")."]}),"\n"]})]}),"\n",(0,a.jsx)(e.h2,{id:"step-2-add-the-target-aws-role-arn-to-the-cado-platform",children:"Step 2: Add the Target AWS Role ARN to the Cado Platform"}),"\n",(0,a.jsxs)(e.p,{children:["Once the cross-account role is created in the target AWS account (",(0,a.jsx)(e.code,{children:"222222222222"}),"), add the Role ARN to the Cado platform:"]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Log into the Cado platform"})," and go to ",(0,a.jsx)(e.strong,{children:"Settings > Accounts"})," and click ",(0,a.jsx)(e.strong,{children:"Create an account"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Select ",(0,a.jsx)(e.strong,{children:"AWS"})," from the set of providers."]}),"\n",(0,a.jsxs)(e.li,{children:["The ",(0,a.jsx)(e.strong,{children:"AWS Role"})," option should already be selected."]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Add AWS Account",src:t(82529).A+"",width:"2691",height:"1065"})}),"\n",(0,a.jsxs)(e.ol,{start:"4",children:["\n",(0,a.jsxs)(e.li,{children:["Enter the IAM Role ARN created in Step 1, and provide an ",(0,a.jsx)(e.strong,{children:"Account Name"}),". The Account Name should include the AWS account number for clarity."]}),"\n",(0,a.jsx)(e.li,{children:"The Cado platform will validate the role to ensure it is assumable. Once validated, the account name will appear in the list of available AWS accounts."}),"\n",(0,a.jsxs)(e.li,{children:["By default, Cado will perform an ",(0,a.jsx)(e.strong,{children:"Account Check"}),' to confirm the required permissions are in place for successful acquisitions. You can skip this by unchecking the "Run account check after adding account" option. For more information, refer to the ',(0,a.jsx)(e.a,{href:"/cado/manage/monitoring#account-check",children:"Account Check guide"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Adding the cross-account ARN to Cado can also be automated using Cado\u2019s API. See ",(0,a.jsx)(e.a,{href:"#automating-cado-cross-account-creation",children:"Automating Cado Cross-Account Creation"}),"."]})]})}function u(o={}){const{wrapper:e}={...(0,c.R)(),...o.components};return e?(0,a.jsx)(e,{...o,children:(0,a.jsx)(l,{...o})}):l(o)}},82529:(o,e,t)=>{t.d(e,{A:()=>a});const a=t.p+"assets/images/Accounts-AWSRole-178a60c0f1875e368762de969a08b3f1.png"},28453:(o,e,t)=>{t.d(e,{R:()=>s,x:()=>r});var a=t(96540);const c={},n=a.createContext(c);function s(o){const e=a.useContext(n);return a.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function r(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(c):o.components||c:s(o.components),a.createElement(n.Provider,{value:e},o.children)}}}]);