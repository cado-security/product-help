"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6424],{5154:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(5893),i=t(1151);const r={title:"Logging best practices",hide_title:!0,sidebar_position:2},o="What are AWS logging best practices?",l={id:"cado-response/deploy/aws/security/logging",title:"Logging best practices",description:"We recommend customers follow AWS best practices regarding logging which includes the following:",source:"@site/docs/cado-response/deploy/aws/security/logging.md",sourceDirName:"cado-response/deploy/aws/security",slug:"/cado-response/deploy/aws/security/logging",permalink:"/cado-response/deploy/aws/security/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/security/logging.md",tags:[],version:"current",lastUpdatedAt:1728482675,formattedLastUpdatedAt:"Oct 9, 2024",sidebarPosition:2,frontMatter:{title:"Logging best practices",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Remove internet routable addresses",permalink:"/cado-response/deploy/aws/networking/internet-routable-addresses"},next:{title:"Platform encryption in AWS",permalink:"/cado-response/deploy/aws/security/data-encryption-overview"}},a={},c=[];function d(e){const s={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"what-are-aws-logging-best-practices",children:"What are AWS logging best practices?"}),"\n",(0,n.jsxs)(s.p,{children:["We recommend customers follow ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/blogs/security/logging-strategies-for-security-incident-response/",children:"AWS best practices regarding logging"})," which includes the following:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Ensure CloudTrail is enabled in all regions"}),"\n",(0,n.jsx)(s.li,{children:"Ensure CloudTrail log file validation is enabled"}),"\n",(0,n.jsx)(s.li,{children:"Ensure the S3 bucket used to store CloudTrail logs is not publicly accessible"}),"\n",(0,n.jsx)(s.li,{children:"Ensure CloudTrail trails are integrated with CloudWatch Logs"}),"\n",(0,n.jsx)(s.li,{children:"Ensure AWS Config is enabled in all regions"}),"\n",(0,n.jsx)(s.li,{children:"Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket"}),"\n",(0,n.jsx)(s.li,{children:"Ensure CloudTrail logs are encrypted at rest using KMS CMKs"}),"\n",(0,n.jsx)(s.li,{children:"Ensure rotation for customer created CMKs is enabled"}),"\n",(0,n.jsx)(s.li,{children:"Ensure VPC flow logging is enabled in all VPCs"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For more see our blog on ",(0,n.jsx)(s.a,{href:"https://www.cadosecurity.com/how-to-be-ir-prepared-in-aws/",children:"How to be IR Prepared in AWS"})]})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>o});var n=t(7294);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);