"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1413],{1456:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=i(5893),s=i(1151);const o={title:"Logging best practices",hide_title:!0,sidebar_position:2},r="What are AWS logging best practices?",l={id:"cado/deploy/aws/security/logging",title:"Logging best practices",description:"We recommend customers follow AWS best practices regarding logging which includes the following:",source:"@site/docs/cado/deploy/aws/security/logging.md",sourceDirName:"cado/deploy/aws/security",slug:"/cado/deploy/aws/security/logging",permalink:"/cado/deploy/aws/security/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/security/logging.md",tags:[],version:"current",lastUpdatedAt:1728552962,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:2,frontMatter:{title:"Logging best practices",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Endpoint access",permalink:"/cado/deploy/aws/networking/endpoints"},next:{title:"Platform encryption in AWS",permalink:"/cado/deploy/aws/security/data-encryption-overview"}},c={},a=[];function d(e){const t={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"what-are-aws-logging-best-practices",children:"What are AWS logging best practices?"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend customers follow ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/blogs/security/logging-strategies-for-security-incident-response/",children:"AWS best practices regarding logging"})," which includes the following:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ensure CloudTrail is enabled in all regions"}),"\n",(0,n.jsx)(t.li,{children:"Ensure CloudTrail log file validation is enabled"}),"\n",(0,n.jsx)(t.li,{children:"Ensure the S3 bucket used to store CloudTrail logs is not publicly accessible"}),"\n",(0,n.jsx)(t.li,{children:"Ensure CloudTrail trails are integrated with CloudWatch Logs"}),"\n",(0,n.jsx)(t.li,{children:"Ensure AWS Config is enabled in all regions"}),"\n",(0,n.jsx)(t.li,{children:"Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket"}),"\n",(0,n.jsx)(t.li,{children:"Ensure CloudTrail logs are encrypted at rest using KMS CMKs"}),"\n",(0,n.jsx)(t.li,{children:"Ensure rotation for customer created CMKs is enabled"}),"\n",(0,n.jsx)(t.li,{children:"Ensure VPC flow logging is enabled in all VPCs"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For more see our blog on ",(0,n.jsx)(t.a,{href:"https://www.cadosecurity.com/how-to-be-ir-prepared-in-aws/",children:"How to be IR Prepared in AWS"})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>r});var n=i(7294);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);