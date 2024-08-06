"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5499],{546:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=s(5893),t=s(1151);const a={title:"AWS Organizations",hide_title:!0,sidebar_position:4},i="Enabling Cross-Account Access in AWS through AWS Organizations",c={id:"cado-response/deploy/aws/iam/aws-organizations",title:"AWS Organizations",description:'This feature is currently in beta. To enable, go to Settings - Experiments and enable "AWS Organizations Account Discovery"',source:"@site/docs/cado-response/deploy/aws/iam/aws-organizations.md",sourceDirName:"cado-response/deploy/aws/iam",slug:"/cado-response/deploy/aws/iam/aws-organizations",permalink:"/cado-response/deploy/aws/iam/aws-organizations",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/iam/aws-organizations.md",tags:[],version:"current",lastUpdatedAt:1722935768,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:4,frontMatter:{title:"AWS Organizations",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cross Account Creation",permalink:"/cado-response/deploy/aws/iam/cross-account-creation"},next:{title:"Adding Azure and GCP to AWS",permalink:"/cado-response/deploy/aws/iam/cross-cloud"}},r={},l=[{value:"ListAccounts Permission",id:"listaccounts-permission",level:2},{value:"Cross Account IAM Role",id:"cross-account-iam-role",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"enabling-cross-account-access-in-aws-through-aws-organizations",children:"Enabling Cross-Account Access in AWS through AWS Organizations"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["This feature is currently in beta. To enable, go to ",(0,o.jsx)(n.em,{children:"Settings - Experiments"}),' and enable "AWS Organizations Account Discovery"']})}),"\n",(0,o.jsxs)(n.p,{children:["An alternative way to enable ",(0,o.jsx)(n.a,{href:"/cado-response/deploy/aws/iam/cross-account-creation",children:"cross-account access"})," for the Cado Platform is to leverage AWS Organizations. This allows you to add and remove access to AWS accounts more easily in environments where accounts are managed by AWS Organizations"]}),"\n",(0,o.jsx)(n.h2,{id:"listaccounts-permission",children:"ListAccounts Permission"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html",children:"ListAccounts"})," operation lists all the accounts in the organisation. This operation can only be called from the organization's management account, therefore select the role that already has the ListAccounts permission on the management account from the 'List Accounts Role' dropdown. This can be accessed from ",(0,o.jsx)(n.em,{children:"Settings> Cloud Accounts"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"An example IAM Policy is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "ListAccounts",\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::xxx:root"\n      },\n      "Action": [\n        "organizations:ListAccounts",\n        "organizations:ListTagsForResource"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Select List Accounts Role",src:s(7560).Z+"",width:"1320",height:"1140"})}),"\n",(0,o.jsx)(n.h2,{id:"cross-account-iam-role",children:"Cross Account IAM Role"}),"\n",(0,o.jsxs)(n.p,{children:["Enter the name of the cross account IAM role e.g. ",(0,o.jsx)(n.code,{children:"CadoResponseRole"})," into 'Cross Account IAM Role Name' field."]}),"\n",(0,o.jsx)(n.p,{children:"Select 'Discover accounts' which will then trigger a pipeline to fetch all of the assumable roles across your AWS accounts where that role name matches the provided value."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"AWS Orgs Settings in Cado",src:s(9835).Z+"",width:"1324",height:"1136"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9835:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/aws-orgs-cross-account-iam-role-bd0ce766579f48e4ec657248a088b6b9.png"},7560:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/aws-orgs-list-accounts-role-cc57c94a4fa768d888dddbd88be7e030.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var o=s(7294);const t={},a=o.createContext(t);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);