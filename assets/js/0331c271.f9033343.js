"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3815],{48229:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=n(74848),c=n(28453);const s={title:"Manually deploy a cross-account role in AWS",hide_title:!0,sidebar_position:2},a="How to manually deploy a cross-account IAM role in AWS",r={id:"cado/deploy/cross/cross-account-creation",title:"Manually deploy a cross-account role in AWS",description:"The Cado platform can be configured to access resources across multiple AWS accounts. For example, if you manage multiple AWS accounts, you can deploy Cado in a single AWS account and grant access to the other accounts, enabling the platform to acquire, process, and analyze evidence seamlessly.",source:"@site/docs/cado/deploy/cross/cross-account-creation.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/cross-account-creation",permalink:"/cado/deploy/cross/cross-account-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/cross-account-creation.md",tags:[],version:"current",lastUpdatedAt:1735813116,formattedLastUpdatedAt:"Jan 2, 2025",sidebarPosition:2,frontMatter:{title:"Manually deploy a cross-account role in AWS",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cross cloud",permalink:"/cado/deploy/cross/intro"},next:{title:"Automatically deploy a cross-account role with StackSets in AWS",permalink:"/cado/deploy/cross/cross-account-creation-auto"}},i={},l=[{value:"Overview",id:"overview",level:2},{value:"Step 1: Create an IAM Policy and Role in the Target AWS Account",id:"step-1-create-an-iam-policy-and-role-in-the-target-aws-account",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"how-to-manually-deploy-a-cross-account-iam-role-in-aws",children:"How to manually deploy a cross-account IAM role in AWS"}),"\n",(0,t.jsx)(o.p,{children:"The Cado platform can be configured to access resources across multiple AWS accounts. For example, if you manage multiple AWS accounts, you can deploy Cado in a single AWS account and grant access to the other accounts, enabling the platform to acquire, process, and analyze evidence seamlessly."}),"\n",(0,t.jsxs)(o.p,{children:["Alternatively, you can automatically deploy the IAM role via ",(0,t.jsx)(o.a,{href:"/cado/deploy/cross/cross-account-creation-auto",children:"Stacksets"}),", then add the roles to the Cado platform using ",(0,t.jsx)(o.a,{href:"/cado/deploy/cross/aws-organizations",children:"AWS Organizations"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(o.p,{children:"The process below outlines how to grant the Cado platform access to a target AWS account (other than the one where Cado is deployed). This process can be repeated for every AWS account you want to provide access to."}),"\n",(0,t.jsx)(o.p,{children:"There are two main steps to set up cross-account acquisitions:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Create a Cross-Account IAM Policy and Role"})," in the target AWS account from which the Cado platform will acquire data. This allows Cado to assume the cross-account role for data acquisition."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Add the Cross-Account IAM Role ARN"})," to the Cado platform to enable access to that AWS account."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["This page describes step 1. For step 2, see ",(0,t.jsx)(o.a,{href:"/cado/deploy/cross/add-cross-account-manual",children:"Manually add a cross-account role to Cado"}),"."]}),"\n",(0,t.jsxs)(o.admonition,{type:"info",children:[(0,t.jsx)(o.p,{children:"Throughout this guide:"}),(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["The ",(0,t.jsx)(o.strong,{children:"primary AWS account"})," is where Cado is deployed (referred to as account ",(0,t.jsx)(o.code,{children:"111111111111"}),")."]}),"\n",(0,t.jsxs)(o.li,{children:["The ",(0,t.jsx)(o.strong,{children:"target AWS account"})," is where cross-account access is being set up (referred to as account ",(0,t.jsx)(o.code,{children:"222222222222"}),")."]}),"\n"]})]}),"\n",(0,t.jsx)(o.h2,{id:"step-1-create-an-iam-policy-and-role-in-the-target-aws-account",children:"Step 1: Create an IAM Policy and Role in the Target AWS Account"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Create the IAM Policy:"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["In the target AWS account (",(0,t.jsx)(o.code,{children:"222222222222"}),"), go to ",(0,t.jsx)(o.strong,{children:"IAM > Policies"})," and click ",(0,t.jsx)(o.strong,{children:"Create Policy"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["Use the Cado Cross-Account Policy ",(0,t.jsx)(o.a,{href:"https://raw.githubusercontent.com/cado-security/Deployment-Templates/main/cross-account/CrossAccountPolicy.yaml",children:"found here"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["Give the policy a name, such as ",(0,t.jsx)(o.code,{children:"CadoResponseCrossAccountPolicy"}),", and create the policy."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Create the IAM Role:"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Navigate to ",(0,t.jsx)(o.strong,{children:"IAM > Roles"})," and click ",(0,t.jsx)(o.strong,{children:"Create Role"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["Select ",(0,t.jsx)(o.strong,{children:"Another AWS Account"})," and enter the account ID of your primary AWS account (",(0,t.jsx)(o.code,{children:"111111111111"}),")."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Create Role",src:n(34268).A+"",width:"761",height:"323"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Attach the policy created in the previous step and proceed to name the role."}),"\n",(0,t.jsxs)(o.li,{children:["The role name ",(0,t.jsx)(o.strong,{children:"must include"})," the text ",(0,t.jsx)(o.code,{children:"CadoResponse"})," (e.g., ",(0,t.jsx)(o.code,{children:"CadoResponseCrossAccountRole"}),"). This is required for cross-account acquisition to function properly."]}),"\n",(0,t.jsxs)(o.li,{children:["The role needs a ",(0,t.jsx)(o.a,{href:"/cado/deploy/aws/iam/iam-description#using-an-existing-iam-role",children:"trust relationship"})," with the Cado role in 111111111111"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Deploying the Cross-Account IAM Policy and Role can be automated using AWS StackSets or other methods. See ",(0,t.jsx)(o.a,{href:"#automating-aws-iam-role-and-policy-deployment",children:"Automating AWS IAM Role and Policy Deployment"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},34268:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/create-role-fa83b0fb86d9d71fcea59dc0f7103a94.png"},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>r});var t=n(96540);const c={},s=t.createContext(c);function a(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);