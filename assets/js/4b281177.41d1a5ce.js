"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[444],{402:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(5893),o=n(1151);const i={title:"Logging",hide_title:!0,sidebar_position:4},r="AWS Logging Best Practices",l={id:"cado-response/deploy/aws/logging",title:"Logging",description:"We recommend customers follow AWS best practices regarding logging (https",source:"@site/docs/cado-response/deploy/aws/logging.md",sourceDirName:"cado-response/deploy/aws",slug:"/cado-response/deploy/aws/logging",permalink:"/cado-response/deploy/aws/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/logging.md",tags:[],version:"current",lastUpdatedAt:1709677142,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:4,frontMatter:{title:"Logging",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"KMS Support",permalink:"/cado-response/deploy/aws/data-encryption/aws-kms"},next:{title:"Load Balancer",permalink:"/cado-response/deploy/aws/networking/aws-load-balancer"}},a={},c=[];function d(e){const s={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"aws-logging-best-practices",children:"AWS Logging Best Practices"}),"\n",(0,t.jsxs)(s.p,{children:["We recommend customers follow AWS best practices regarding logging (",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html",children:"https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html"}),") which includes the following:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Ensure CloudTrail is enabled in all regions"}),"\n",(0,t.jsx)(s.li,{children:"Ensure CloudTrail log file validation is enabled"}),"\n",(0,t.jsx)(s.li,{children:"Ensure the S3 bucket used to store CloudTrail logs is not publicly accessible"}),"\n",(0,t.jsx)(s.li,{children:"Ensure CloudTrail trails are integrated with CloudWatch Logs"}),"\n",(0,t.jsx)(s.li,{children:"Ensure AWS Config is enabled in all regions"}),"\n",(0,t.jsx)(s.li,{children:"Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket"}),"\n",(0,t.jsx)(s.li,{children:"Ensure CloudTrail logs are encrypted at rest using KMS CMKs"}),"\n",(0,t.jsx)(s.li,{children:"Ensure rotation for customer created CMKs is enabled"}),"\n",(0,t.jsx)(s.li,{children:"Ensure VPC flow logging is enabled in all VPCs"}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var t=n(7294);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);