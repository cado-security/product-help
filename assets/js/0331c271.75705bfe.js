"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6363],{3429:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var c=t(5893),n=t(1151);const s={title:"Manually deploy a cross-account role in AWS",hide_title:!0,sidebar_position:2},a="How to manually deploy a cross-account IAM role in AWS",r={id:"cado/deploy/cross/cross-account-creation",title:"Manually deploy a cross-account role in AWS",description:"The Cado platform can be configured to access resources across multiple AWS accounts. For example, if you manage multiple AWS accounts, you can deploy Cado in a single AWS account and grant access to the other accounts, enabling the platform to acquire, process, and analyze evidence seamlessly.",source:"@site/docs/cado/deploy/cross/cross-account-creation.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/cross-account-creation",permalink:"/cado/deploy/cross/cross-account-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/cross-account-creation.md",tags:[],version:"current",lastUpdatedAt:1730149193,formattedLastUpdatedAt:"Oct 28, 2024",sidebarPosition:2,frontMatter:{title:"Manually deploy a cross-account role in AWS",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cross cloud",permalink:"/cado/deploy/cross/intro"},next:{title:"Automatically deploy a cross-account role with StackSets in AWS",permalink:"/cado/deploy/cross/cross-account-creation-auto"}},i={},l=[{value:"Overview",id:"overview",level:2},{value:"Step 1: Create an IAM Policy and Role in the Target AWS Account",id:"step-1-create-an-iam-policy-and-role-in-the-target-aws-account",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.h1,{id:"how-to-manually-deploy-a-cross-account-iam-role-in-aws",children:"How to manually deploy a cross-account IAM role in AWS"}),"\n",(0,c.jsx)(o.p,{children:"The Cado platform can be configured to access resources across multiple AWS accounts. For example, if you manage multiple AWS accounts, you can deploy Cado in a single AWS account and grant access to the other accounts, enabling the platform to acquire, process, and analyze evidence seamlessly."}),"\n",(0,c.jsxs)(o.p,{children:["Alternatively, you can automatically deploy the IAM role via ",(0,c.jsx)(o.a,{href:"/cado/deploy/cross/cross-account-creation-auto",children:"Stacksets"}),", then add the roles to the Cado platform using ",(0,c.jsx)(o.a,{href:"/cado/deploy/cross/aws-organizations",children:"AWS Organizations"}),"."]}),"\n",(0,c.jsx)(o.h2,{id:"overview",children:"Overview"}),"\n",(0,c.jsx)(o.p,{children:"The process below outlines how to grant the Cado platform access to a target AWS account (other than the one where Cado is deployed). This process can be repeated for every AWS account you want to provide access to."}),"\n",(0,c.jsx)(o.p,{children:"There are two main steps to set up cross-account acquisitions:"}),"\n",(0,c.jsxs)(o.ol,{children:["\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.strong,{children:"Create a Cross-Account IAM Policy and Role"})," in the target AWS account from which the Cado platform will acquire data. This allows Cado to assume the cross-account role for data acquisition."]}),"\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.strong,{children:"Add the Cross-Account IAM Role ARN"})," to the Cado platform to enable access to that AWS account."]}),"\n"]}),"\n",(0,c.jsxs)(o.p,{children:["This page describes step 1. For step 2, see ",(0,c.jsx)(o.a,{href:"/cado/deploy/cross/add-cross-account-manual",children:"Manually add a cross-account role to Cado"}),"."]}),"\n",(0,c.jsxs)(o.admonition,{type:"info",children:[(0,c.jsx)(o.p,{children:"Throughout this guide:"}),(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:["The ",(0,c.jsx)(o.strong,{children:"primary AWS account"})," is where Cado is deployed (referred to as account ",(0,c.jsx)(o.code,{children:"111111111111"}),")."]}),"\n",(0,c.jsxs)(o.li,{children:["The ",(0,c.jsx)(o.strong,{children:"target AWS account"})," is where cross-account access is being set up (referred to as account ",(0,c.jsx)(o.code,{children:"222222222222"}),")."]}),"\n"]})]}),"\n",(0,c.jsx)(o.h2,{id:"step-1-create-an-iam-policy-and-role-in-the-target-aws-account",children:"Step 1: Create an IAM Policy and Role in the Target AWS Account"}),"\n",(0,c.jsxs)(o.ol,{children:["\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.strong,{children:"Create the IAM Policy:"})}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:["In the target AWS account (",(0,c.jsx)(o.code,{children:"222222222222"}),"), go to ",(0,c.jsx)(o.strong,{children:"IAM > Policies"})," and click ",(0,c.jsx)(o.strong,{children:"Create Policy"}),"."]}),"\n",(0,c.jsxs)(o.li,{children:["Use the Cado Cross-Account Policy ",(0,c.jsx)(o.a,{href:"https://raw.githubusercontent.com/cado-security/Deployment-Templates/main/cross-account/CrossAccountPolicy.yaml",children:"found here"}),"."]}),"\n",(0,c.jsxs)(o.li,{children:["Give the policy a name, such as ",(0,c.jsx)(o.code,{children:"CadoResponseCrossAccountPolicy"}),", and create the policy."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(o.li,{children:["\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.strong,{children:"Create the IAM Role:"})}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:["Navigate to ",(0,c.jsx)(o.strong,{children:"IAM > Roles"})," and click ",(0,c.jsx)(o.strong,{children:"Create Role"}),"."]}),"\n",(0,c.jsxs)(o.li,{children:["Select ",(0,c.jsx)(o.strong,{children:"Another AWS Account"})," and enter the account ID of your primary AWS account (",(0,c.jsx)(o.code,{children:"111111111111"}),")."]}),"\n"]}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"Create Role",src:t(7358).Z+"",width:"761",height:"323"})}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsx)(o.li,{children:"Attach the policy created in the previous step and proceed to name the role."}),"\n",(0,c.jsxs)(o.li,{children:["The role name ",(0,c.jsx)(o.strong,{children:"must include"})," the text ",(0,c.jsx)(o.code,{children:"CadoResponse"})," (e.g., ",(0,c.jsx)(o.code,{children:"CadoResponseCrossAccountRole"}),"). This is required for cross-account acquisition to function properly."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(o.p,{children:["Deploying the Cross-Account IAM Policy and Role can be automated using AWS StackSets or other methods. See ",(0,c.jsx)(o.a,{href:"#automating-aws-iam-role-and-policy-deployment",children:"Automating AWS IAM Role and Policy Deployment"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},7358:(e,o,t)=>{t.d(o,{Z:()=>c});const c=t.p+"assets/images/create-role-fa83b0fb86d9d71fcea59dc0f7103a94.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>r,a:()=>a});var c=t(7294);const n={},s=c.createContext(n);function a(e){const o=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),c.createElement(s.Provider,{value:o},e.children)}}}]);