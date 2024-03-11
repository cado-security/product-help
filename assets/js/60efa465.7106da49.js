"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[745],{956:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=o(5893),n=o(1151);const a={title:"Overview",hide_title:!0,sidebar_position:1},i="Deployment IAM Considerations",c={id:"cado-response/deploy/aws/iam/deployment-iam-considerations",title:"Overview",description:"There are several AWS Identity & Access Management best practices to consider when deploying the Cado platform",source:"@site/docs/cado-response/deploy/aws/iam/deployment-iam-considerations.md",sourceDirName:"cado-response/deploy/aws/iam",slug:"/cado-response/deploy/aws/iam/deployment-iam-considerations",permalink:"/cado-response/deploy/aws/iam/deployment-iam-considerations",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/iam/deployment-iam-considerations.md",tags:[],version:"current",lastUpdatedAt:1710151385,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:1,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cado-response/deploy/aws/overview"},next:{title:"KMS Support",permalink:"/cado-response/deploy/aws/iam/aws-kms"}},r={},d=[{value:"Dedicated Forensics Account",id:"dedicated-forensics-account",level:2},{value:"Cross-Account Access without the Cross-Account Role",id:"cross-account-access-without-the-cross-account-role",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"deployment-iam-considerations",children:"Deployment IAM Considerations"}),"\n",(0,s.jsx)(t.p,{children:"There are several AWS Identity & Access Management best practices to consider when deploying the Cado platform"}),"\n",(0,s.jsx)(t.h2,{id:"dedicated-forensics-account",children:"Dedicated Forensics Account"}),"\n",(0,s.jsxs)(t.p,{children:["You may choose to deploy into an AWS account dedicated to storing forensics data securely. You can then use cross-account roles to bring data into the forensics account. Cado copies data back into the forensics account, and performs processing there.\nFor more on this best practice, see the AWS blog on ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/blogs/security/forensic-investigation-environment-strategies-in-the-aws-cloud/",children:"Forensic investigation environment strategies in the AWS Cloud\n"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"cross-account-access-without-the-cross-account-role",children:"Cross-Account Access without the Cross-Account Role"}),"\n",(0,s.jsxs)(t.p,{children:["By default, we recommend creating a role in each account that you want Cado to access.\nThis enables one click acquisition of data.\nHowever, if you cannot create roles in other accounts you can still use the AMI import functionality to import EC2 resources from other accounts without the need to create any cross-account roles\nThis requires you to create the AMI of any instance you want to import yourself and share it with the AWS account that Cado resides in.\nFor more, see the AWS documentation on ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/tkv-create-ami-from-instance.html",children:"creating an EC2 AMI snapshot"})," and ",(0,s.jsx)(t.a,{href:"../../../discovery-import/import/aws/aws-ami",children:"AMI Imports"})]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>i});var s=o(7294);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);