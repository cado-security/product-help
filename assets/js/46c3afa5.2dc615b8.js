"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3810],{8760:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=s(5893),n=s(1151);const r={title:"Temporarily access an AWS account with STS",hide_title:!0,sidebar_position:6},a="How to temporarily access an AWS account with STS",c={id:"cado-response/deploy/cross/aws-sts",title:"Temporarily access an AWS account with STS",description:"In complex cloud environments, creating long term roles with access can be cumbersome and involve multiple teams to approve. To avoid this, you can create a temporary Security Token which allows access to a specific resource in AWS without having to create a permanent role.",source:"@site/docs/cado-response/deploy/cross/aws-sts.md",sourceDirName:"cado-response/deploy/cross",slug:"/cado-response/deploy/cross/aws-sts",permalink:"/cado-response/deploy/cross/aws-sts",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/cross/aws-sts.md",tags:[],version:"current",lastUpdatedAt:1728549029,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:6,frontMatter:{title:"Temporarily access an AWS account with STS",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Access an AWS account with keys",permalink:"/cado-response/deploy/cross/adding-keys"},next:{title:"Access an AWS account with via AMI Import",permalink:"/cado-response/deploy/cross/skip-role"}},i={},l=[];function d(e){const t={a:"a",h1:"h1",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"how-to-temporarily-access-an-aws-account-with-sts",children:"How to temporarily access an AWS account with STS"}),"\n",(0,o.jsx)(t.p,{children:"In complex cloud environments, creating long term roles with access can be cumbersome and involve multiple teams to approve. To avoid this, you can create a temporary Security Token which allows access to a specific resource in AWS without having to create a permanent role."}),"\n",(0,o.jsxs)(t.p,{children:["Under ",(0,o.jsx)(t.strong,{children:"Import"})," - select ",(0,o.jsx)(t.strong,{children:"AWS"}),", then ",(0,o.jsx)(t.strong,{children:"Security Token"}),":"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Security Token",src:s(2785).Z+"",width:"656",height:"486"})}),"\n",(0,o.jsxs)(t.p,{children:["Then enter the full ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html",children:"ARN"})," of the resource you wish to import:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"ARN",src:s(6556).Z+"",width:"1642",height:"352"})}),"\n",(0,o.jsx)(t.p,{children:"Then execute the AWS CLI command to grant temporary access to the resource, using the permissions that your local AWS CLI environment has. Alternatively, you can assume a pre-defined role temporarily:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Assume Role",src:s(8155).Z+"",width:"1999",height:"1081"})}),"\n",(0,o.jsxs)(t.p,{children:["The maximum session duration setting can ",(0,o.jsx)(t.a,{href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/assume-role.html",children:"have a value"})," from 1 hour to 12 hours. If you specify a value higher than this setting or the administrator setting (whichever is lower), the operation fails. For example, if you specify a session duration of 12 hours, but your administrator has set the maximum session duration to 6 hours, generating the STS token will fail."]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6556:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/arn-ef2e7953fd9c08fb89a865a2d393d764.png"},8155:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/assume-role-b87079ad63e2cb78cf4b88d46a777722.png"},2785:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/security-token-6531fc61c3cf6966c0c7846ab10f9e29.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>a});var o=s(7294);const n={},r=o.createContext(n);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);