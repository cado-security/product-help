"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[745],{956:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var n=o(5893),s=o(1151);const c={title:"Overview",hide_title:!0,sidebar_position:1},i="Deployment IAM Considerations",a={id:"cado-response/deploy/aws/iam/deployment-iam-considerations",title:"Overview",description:"There are several AWS Identity & Access Management best practices to consider when deploying the Cado platform",source:"@site/docs/cado-response/deploy/aws/iam/deployment-iam-considerations.md",sourceDirName:"cado-response/deploy/aws/iam",slug:"/cado-response/deploy/aws/iam/deployment-iam-considerations",permalink:"/cado-response/deploy/aws/iam/deployment-iam-considerations",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/iam/deployment-iam-considerations.md",tags:[],version:"current",lastUpdatedAt:1707618697,formattedLastUpdatedAt:"Feb 11, 2024",sidebarPosition:1,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cado-response/deploy/aws/overview"},next:{title:"Removing and Tightening IAM Permissions",permalink:"/cado-response/deploy/aws/iam/tightening-iam"}},r={},d=[{value:"Dedicated Forensics Account",id:"dedicated-forensics-account",level:2},{value:"Cross-Account Access without the Cross-Account Role",id:"cross-account-access-without-the-cross-account-role",level:2}];function l(e){const t={h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deployment-iam-considerations",children:"Deployment IAM Considerations"}),"\n",(0,n.jsx)(t.p,{children:"There are several AWS Identity & Access Management best practices to consider when deploying the Cado platform"}),"\n",(0,n.jsx)(t.h2,{id:"dedicated-forensics-account",children:"Dedicated Forensics Account"}),"\n",(0,n.jsx)(t.p,{children:"You may choose to deploy into an AWS account dedicated to storing forensics data securely. You can then use cross-account roles to bring data into the forensics account. Cado copies data back into the forensics account, and performs processing there."}),"\n",(0,n.jsx)(t.h2,{id:"cross-account-access-without-the-cross-account-role",children:"Cross-Account Access without the Cross-Account Role"}),"\n",(0,n.jsx)(t.p,{children:"By default, we recommend creating a role in each account that you want Cado to access. This enables one click acquisition of data.\nHowever, if you cannot create roles in other accounts you can still use the AMI import functionality to import EC2 resources from other accounts without the need to create any cross-account roles. This requires you to create the AMI of any instance you want to import yourself and share it with the AWS account that Cado resides in."})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var n=o(7294);const s={},c=n.createContext(s);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);