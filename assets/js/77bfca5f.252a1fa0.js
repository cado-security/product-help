"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9992],{85122:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(74848),n=s(28453);const i={title:"AWS credentials",hide_title:!0,sidebar_position:3},o="How to Create Secure Credentials for AWS",c={id:"cado/discovery-import/cado-host/aws-credentials",title:"AWS credentials",description:"We now recommend using the automatically created temporary credentials generated by Cado. For more details, see our documentation here.",source:"@site/docs/cado/discovery-import/cado-host/aws-credentials.md",sourceDirName:"cado/discovery-import/cado-host",slug:"/cado/discovery-import/cado-host/aws-credentials",permalink:"/cado/discovery-import/cado-host/aws-credentials",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/cado-host/aws-credentials.md",tags:[],version:"current",lastUpdatedAt:1741200188,formattedLastUpdatedAt:"Mar 5, 2025",sidebarPosition:3,frontMatter:{title:"AWS credentials",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Collected artifacts",permalink:"/cado/discovery-import/cado-host/artifacts"},next:{title:"Google Cloud credentials",permalink:"/cado/discovery-import/cado-host/google-credentials"}},a={},l=[{value:"Step 1: Create an S3 Bucket",id:"step-1-create-an-s3-bucket",level:2},{value:"Step 2: Create an AWS User with Limited Access",id:"step-2-create-an-aws-user-with-limited-access",level:2},{value:"Creating the Policy",id:"creating-the-policy",level:3},{value:"Creating the User",id:"creating-the-user",level:3},{value:"Ready to Go",id:"ready-to-go",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["We now recommend using the automatically created temporary credentials generated by Cado. For more details, see our documentation ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"deploy#deploy-through-cado-response-platform",children:"here"})}),"."]})}),"\n",(0,r.jsx)(t.h1,{id:"how-to-create-secure-credentials-for-aws",children:"How to Create Secure Credentials for AWS"}),"\n",(0,r.jsx)(t.p,{children:"Below are the steps to create AWS credentials with write-only access to an S3 bucket."}),"\n",(0,r.jsx)("iframe",{width:"100%",height:"628",src:"https://www.youtube.com/embed/OW6fwaUNVXU",title:"YouTube video player",frameborder:"0",allowfullscreen:!0}),"\n",(0,r.jsx)(t.h2,{id:"step-1-create-an-s3-bucket",children:"Step 1: Create an S3 Bucket"}),"\n",(0,r.jsxs)(t.p,{children:["If you haven't created an S3 bucket yet, follow the instructions to ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/quickstarts/latest/s3backup/step-1-create-bucket.html",children:"Create a new S3 bucket"})}),". Ensure that ",(0,r.jsx)(t.strong,{children:"public access is not enabled"})," to maintain security."]}),"\n",(0,r.jsx)(t.h2,{id:"step-2-create-an-aws-user-with-limited-access",children:"Step 2: Create an AWS User with Limited Access"}),"\n",(0,r.jsx)(t.p,{children:"Next, we'll create a policy with write-only access to the S3 bucket. This ensures that even if an attacker compromises the credentials, they won't have full access."}),"\n",(0,r.jsx)(t.h3,{id:"creating-the-policy",children:"Creating the Policy"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Go to the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://console.aws.amazon.com/iam/home#/policies",children:"Access Management Policies"})})," page."]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Create Policy"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Under ",(0,r.jsx)(t.strong,{children:"Service"}),", select ",(0,r.jsx)(t.strong,{children:"S3"})," and under ",(0,r.jsx)(t.strong,{children:"Actions"}),", choose ",(0,r.jsx)(t.strong,{children:"Write -> PutObject"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Specific Resources"}),", then under ",(0,r.jsx)(t.strong,{children:"Bucket"}),", click ",(0,r.jsx)(t.strong,{children:"Add ARN"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Enter the name of your S3 bucket and click ",(0,r.jsx)(t.strong,{children:"Add"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Follow the prompts to create the policy."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"creating-the-user",children:"Creating the User"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Go to the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://console.aws.amazon.com/iam/home#/users",children:"IAM User Page"})})," and click ",(0,r.jsx)(t.strong,{children:"Add User"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Create a new user with ",(0,r.jsx)(t.strong,{children:"Programmatic access"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Assign the write-only policy you just created to the user."}),"\n",(0,r.jsxs)(t.li,{children:["Follow the steps to create the user and retrieve the ",(0,r.jsx)(t.strong,{children:"Access Key"})," and ",(0,r.jsx)(t.strong,{children:"Secret Key"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"ready-to-go",children:"Ready to Go"}),"\n",(0,r.jsx)(t.p,{children:"Once completed, you will have:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"Access Key"})]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"Secret Key"})]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"S3 Bucket Name"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"With these credentials, you'll be ready to securely upload data to your AWS S3 bucket."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var r=s(96540);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);