"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6787],{1304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(5893),r=n(1151);const i={title:"AWS Credentials",hide_title:!0,sidebar_position:3},a="Creating Secure Credentials for AWS",c={id:"cado-host/aws-credentials",title:"AWS Credentials",description:"We now recommend using the automatically created temporary credentials generated by Cado Response. See our documentation here for more details.",source:"@site/docs/cado-host/aws-credentials.md",sourceDirName:"cado-host",slug:"/cado-host/aws-credentials",permalink:"/cado-host/aws-credentials",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/aws-credentials.md",tags:[],version:"current",lastUpdatedAt:1710075333,formattedLastUpdatedAt:"Mar 10, 2024",sidebarPosition:3,frontMatter:{title:"AWS Credentials",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Collected Artifacts",permalink:"/cado-host/artifacts"},next:{title:"Azure Credentials",permalink:"/cado-host/azure-credentials"}},o={},l=[{value:"Creating an S3 Bucket",id:"creating-an-s3-bucket",level:2},{value:"Creating an AWS User with Limited Access",id:"creating-an-aws-user-with-limited-access",level:2},{value:"Creating The Policy",id:"creating-the-policy",level:2},{value:"Creating a User",id:"creating-a-user",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["We now recommend using the automatically created temporary credentials generated by Cado Response. See our documentation ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"deploy#deploy-through-cado-response-platform",children:"here"})})," for more details."]})}),"\n",(0,s.jsx)(t.h1,{id:"creating-secure-credentials-for-aws",children:"Creating Secure Credentials for AWS"}),"\n",(0,s.jsx)(t.p,{children:"Below we will create credentials with write-only access to AWS S3."}),"\n",(0,s.jsx)("iframe",{width:"100%",height:"628",src:"https://www.youtube.com/embed/OW6fwaUNVXU",title:"YouTube video player",frameborder:"0",allowfullscreen:!0}),"\n",(0,s.jsx)(t.h2,{id:"creating-an-s3-bucket",children:"Creating an S3 Bucket"}),"\n",(0,s.jsxs)(t.p,{children:["If you haven't already, ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/quickstarts/latest/s3backup/step-1-create-bucket.html",children:"Create a new S3 bucket"})}),". Make sure that you do not enable public access to the bucket."]}),"\n",(0,s.jsx)(t.h2,{id:"creating-an-aws-user-with-limited-access",children:"Creating an AWS User with Limited Access"}),"\n",(0,s.jsx)(t.p,{children:"First we need to create a policy with write-only access to the bucket"}),"\n",(0,s.jsx)(t.h2,{id:"creating-the-policy",children:"Creating The Policy"}),"\n",(0,s.jsx)(t.p,{children:"It is important to use a user that has limited access, so if an attacker steals the credentials you use with Cado Live Imager they cannot abuse them."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["First access the ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://console.aws.amazon.com/iam/home#/policies",children:"Access Management Policies"})})," page."]}),"\n",(0,s.jsx)(t.li,{children:"Click Create Policy."}),"\n",(0,s.jsx)(t.li,{children:"Select Service as S3 and Actions as Write->PutObject"}),"\n",(0,s.jsx)(t.li,{children:"Click Specific Resources then under bucket, click Add ARN"}),"\n",(0,s.jsx)(t.li,{children:"Enter the name of your bucket, then click Add"}),"\n",(0,s.jsx)(t.li,{children:"Then Click through to create the policy."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-user",children:"Creating a User"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["First access the ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://console.aws.amazon.com/iam/home#/users",children:"IAM User Page"})})," and select Add User."]}),"\n",(0,s.jsx)(t.li,{children:"Create a new user with Programmatic access."}),"\n",(0,s.jsx)(t.li,{children:"Next select the permissions policy you just created."}),"\n",(0,s.jsx)(t.li,{children:"Then Click through to Create the User and retrieve the Access Key and Secret Key."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In the end, you are ready to go when you have:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The Access Key"}),"\n",(0,s.jsx)(t.li,{children:"The Secret Key"}),"\n",(0,s.jsx)(t.li,{children:"The Bucket Name"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(7294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);