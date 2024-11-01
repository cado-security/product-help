"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[62],{5865:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var s=o(5893),c=o(1151);const n={title:"Access an AWS account with via AMI Import",hide_title:!0,sidebar_position:6},r="How to access an AWS account cross-account within AWS without a cross-account role via AMI Import",a={id:"cado/deploy/cross/skip-role",title:"Access an AWS account with via AMI Import",description:"While we recommend creating a cross-account role in each AWS account you want Cado to access for seamless, one-click data acquisition, there is an alternative if creating roles is not possible. You can use the AMI Import feature to import EC2 resources from other accounts without needing a cross-account role.",source:"@site/docs/cado/deploy/cross/skip-role.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/skip-role",permalink:"/cado/deploy/cross/skip-role",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/skip-role.md",tags:[],version:"current",lastUpdatedAt:1730460513,formattedLastUpdatedAt:"Nov 1, 2024",sidebarPosition:6,frontMatter:{title:"Access an AWS account with via AMI Import",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Temporarily access an AWS account with STS",permalink:"/cado/deploy/cross/aws-sts"},next:{title:"Adding Azure subscriptions to Azure/AWS/GCP",permalink:"/cado/deploy/cross/adding-azure"}},i={},l=[{value:"Steps to Import EC2 Resources via AMI Import",id:"steps-to-import-ec2-resources-via-ami-import",level:3}];function u(t){const e={a:"a",br:"br",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,c.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"how-to-access-an-aws-account-cross-account-within-aws-without-a-cross-account-role-via-ami-import",children:"How to access an AWS account cross-account within AWS without a cross-account role via AMI Import"}),"\n",(0,s.jsxs)(e.p,{children:["While we recommend creating a cross-account role in each AWS account you want Cado to access for seamless, one-click data acquisition, there is an alternative if creating roles is not possible. You can use the ",(0,s.jsx)(e.strong,{children:"AMI Import"})," feature to import EC2 resources from other accounts without needing a cross-account role."]}),"\n",(0,s.jsx)(e.h3,{id:"steps-to-import-ec2-resources-via-ami-import",children:"Steps to Import EC2 Resources via AMI Import"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Create an AMI"}),(0,s.jsx)(e.br,{}),"\n","In the AWS account containing the EC2 instance you want to import, manually create an AMI (Amazon Machine Image) of the instance. For instructions on creating an AMI, refer to the ",(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/tkv-create-ami-from-instance.html",children:"AWS documentation"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Share the AMI with the Cado AWS Account"}),(0,s.jsx)(e.br,{}),"\n","Once the AMI is created, share it with the AWS account where Cado resides."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"By following these steps, you can import EC2 instances from other AWS accounts without needing to create cross-account roles."})]})}function d(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},1151:(t,e,o)=>{o.d(e,{Z:()=>a,a:()=>r});var s=o(7294);const c={},n=s.createContext(c);function r(t){const e=s.useContext(n);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:r(t.components),s.createElement(n.Provider,{value:e},t.children)}}}]);