"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4741],{16093:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(74848),n=t(28453);const r={title:"Temporarily access an AWS account with STS",hide_title:!0,sidebar_position:6},i="How to temporarily access an AWS account with STS",a={id:"cado/deploy/cross/aws-sts",title:"Temporarily access an AWS account with STS",description:"In complex cloud environments, setting up long-term roles with access often requires approvals from multiple teams, which can be time-consuming. To simplify this process, you can use a temporary Security Token (STS) to gain access to specific AWS resources without needing to create a permanent role.",source:"@site/docs/cado/deploy/cross/aws-sts.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/aws-sts",permalink:"/cado/deploy/cross/aws-sts",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/aws-sts.md",tags:[],version:"current",lastUpdatedAt:1736765008,formattedLastUpdatedAt:"Jan 13, 2025",sidebarPosition:6,frontMatter:{title:"Temporarily access an AWS account with STS",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Access an AWS account with keys",permalink:"/cado/deploy/cross/adding-keys"},next:{title:"Access an AWS account with via AMI Import",permalink:"/cado/deploy/cross/skip-role"}},c={},l=[{value:"Steps to Access AWS with a Temporary Security Token",id:"steps-to-access-aws-with-a-temporary-security-token",level:3},{value:"Setting the Session Duration",id:"setting-the-session-duration",level:3}];function d(e){const s={a:"a",br:"br",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"how-to-temporarily-access-an-aws-account-with-sts",children:"How to temporarily access an AWS account with STS"}),"\n",(0,o.jsx)(s.p,{children:"In complex cloud environments, setting up long-term roles with access often requires approvals from multiple teams, which can be time-consuming. To simplify this process, you can use a temporary Security Token (STS) to gain access to specific AWS resources without needing to create a permanent role."}),"\n",(0,o.jsx)(s.h3,{id:"steps-to-access-aws-with-a-temporary-security-token",children:"Steps to Access AWS with a Temporary Security Token"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Select AWS Security Token"}),(0,o.jsx)(s.br,{}),"\n","In the Cado platform, go to ",(0,o.jsx)(s.strong,{children:"Import"})," > ",(0,o.jsx)(s.strong,{children:"AWS"})," > ",(0,o.jsx)(s.strong,{children:"Security Token"}),"."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Security Token",src:t(75123).A+"",width:"656",height:"486"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Enter the Resource ARN"}),(0,o.jsx)(s.br,{}),"\n","Provide the full ",(0,o.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html",children:"Amazon Resource Name (ARN)"})," of the AWS resource you want to import."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"ARN",src:t(53004).A+"",width:"1642",height:"352"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Grant Temporary Access via AWS CLI"}),(0,o.jsx)(s.br,{}),"\n","Use the AWS CLI to generate the STS token for temporary access. This action uses the permissions available in your local AWS CLI environment. Alternatively, you can temporarily assume a predefined role:"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Assume Role",src:t(7790).A+"",width:"1399",height:"757"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"setting-the-session-duration",children:"Setting the Session Duration"}),"\n",(0,o.jsx)(s.p,{children:"The maximum session duration for an STS token can be set between 1 hour and 12 hours. However, if you request a session longer than the maximum allowed by your administrator, the operation will fail. For example, if you request a 12-hour session but the administrator's limit is 6 hours, the token generation will not succeed."}),"\n",(0,o.jsxs)(s.p,{children:["More details on session duration limits can be found in the ",(0,o.jsx)(s.a,{href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/assume-role.html",children:"AWS documentation"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},53004:(e,s,t)=>{t.d(s,{A:()=>o});const o=t.p+"assets/images/arn-8818b88db740cb8522868b3dabf079e6.png"},7790:(e,s,t)=>{t.d(s,{A:()=>o});const o=t.p+"assets/images/assume-role-f0bb78ade5e1e5a485a0d46d53e17e82.png"},75123:(e,s,t)=>{t.d(s,{A:()=>o});const o=t.p+"assets/images/security-token-ab2cc932ae0b9e1b5f1578ee117529a1.png"},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var o=t(96540);const n={},r=o.createContext(n);function i(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);