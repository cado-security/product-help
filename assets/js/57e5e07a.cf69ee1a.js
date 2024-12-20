"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2614],{3124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(4848),s=n(8453);const a={title:"Secret Manager",hide_title:!0,sidebar_position:4},o="Secret Manager",i={id:"cado/deploy/aws/aws-secret-manager",title:"Secret Manager",description:"The initial deployment stores the key used to encrypt secrets in Cado locally on the machine. Enabling a Secret Manager allows Cado to instead store the key in AWS Secrets Manager.",source:"@site/docs/cado/deploy/aws/aws-secret-manager.md",sourceDirName:"cado/deploy/aws",slug:"/cado/deploy/aws/aws-secret-manager",permalink:"/cado/deploy/aws/aws-secret-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/aws-secret-manager.md",tags:[],version:"current",lastUpdatedAt:1734696741,formattedLastUpdatedAt:"Dec 20, 2024",sidebarPosition:4,frontMatter:{title:"Secret Manager",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Supported regions and GovCloud",permalink:"/cado/deploy/aws/regions"},next:{title:"Workers",permalink:"/cado/deploy/aws/aws-workers"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}];function d(e){const t={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"secret-manager",children:"Secret Manager"}),"\n",(0,r.jsx)(t.p,{children:"The initial deployment stores the key used to encrypt secrets in Cado locally on the machine. Enabling a Secret Manager allows Cado to instead store the key in AWS Secrets Manager."}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Ability to update IAM role"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Add the necessary permissions by adding the following Sid to your IAM Role:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n "Sid": "RequiredForSecretsManagement",\n "Effect": "Allow",\n "Action": [\n   "secretsmanager:PutSecretValue",\n   "secretsmanager:CreateSecret",\n   "secretsmanager:GetSecretValue",\n   "secretsmanager:TagResource"\n ],\n "Resource": "*",\n "Condition": {\n   "StringLike": {\n     "aws:ResourceTag/Name": "CadoResponse*"\n   }\n }\n}\n'})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Enable in the UI: ",(0,r.jsx)(t.strong,{children:"Settings"})," > ",(0,r.jsx)(t.strong,{children:"Advanced"})," > ",(0,r.jsx)(t.strong,{children:"Secret Management"})," > Turn on Secrets Manager"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);