"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1880],{78197:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=s(74848),o=s(28453);const a={title:"Endpoint access",hide_title:!0,sidebar_position:3},d="What AWS endpoints does the Cado platform require access to?",i={id:"cado/deploy/aws/networking/endpoints",title:"Endpoint access",description:"The Cado platform requires access to the following AWS API endpoints, including regional addresses for regions that are accessed (e.g. us-east-2.ec2.amazonaws.com). If the VPC, in which Cado is deployed, will not be able to access these endpoints over the public internet, then a VPC Endpoint  may be required.",source:"@site/docs/cado/deploy/aws/networking/endpoints.md",sourceDirName:"cado/deploy/aws/networking",slug:"/cado/deploy/aws/networking/endpoints",permalink:"/cado/deploy/aws/networking/endpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/networking/endpoints.md",tags:[],version:"current",lastUpdatedAt:1738502359,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:3,frontMatter:{title:"Endpoint access",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Remove internet routable addresses",permalink:"/cado/deploy/aws/networking/internet-routable-addresses"},next:{title:"Logging best practices",permalink:"/cado/deploy/aws/security/logging"}},r={},c=[{value:"Cado Update Definitions",id:"cado-update-definitions",level:2}];function l(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"what-aws-endpoints-does-the-cado-platform-require-access-to",children:"What AWS endpoints does the Cado platform require access to?"}),"\n",(0,n.jsxs)(t.p,{children:["The Cado platform requires access to the following AWS API endpoints, including regional addresses for regions that are accessed (e.g. us-east-2.ec2.amazonaws.com). If the VPC, in which Cado is deployed, will not be able to access these endpoints over the public internet, then a ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html#create-interface-endpoint-aws",children:"VPC Endpoint"}),"  may be required."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Core Platform"}),(0,n.jsx)(t.th,{children:"KMS encrypted EC2s"}),(0,n.jsx)(t.th,{children:"Memory Forensics"}),(0,n.jsx)(t.th,{children:"Lambda Functions"}),(0,n.jsx)(t.th,{children:"ECS/EKS Containers"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ec2.amazonaws.com"}),(0,n.jsx)(t.td,{children:"kms.amazonaws.com"}),(0,n.jsx)(t.td,{children:"ssm.amazonaws.com"}),(0,n.jsx)(t.td,{children:"lambda.amazonaws.com"}),(0,n.jsx)(t.td,{children:"ecs.amazonaws.com"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"secretsmanager.amazonaws.com"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"cloudwatch.amazonaws.com"}),(0,n.jsx)(t.td,{children:"ecs-tasks.amazonaws.com"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"s3.amazonaws.com"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"eks.amazonaws.com"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sts.amazonaws.com"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"iam.amazonaws.com"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cloudtrail.amazonaws.com"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["If you have opted to use regional endpoints, you will need to ensure there is access to the regional endpoints for any regions you use. For example ec2.",(0,n.jsx)(t.em,{children:"us-east-1"}),".amazonaws.com to access the EC2 service in us-east-1."]}),"\n",(0,n.jsx)(t.h2,{id:"cado-update-definitions",children:"Cado Update Definitions"}),"\n",(0,n.jsx)(t.p,{children:"Cado requires access to cado-public.s3.amazonaws.com in order to perform a GET (read only) request to confirm the latest version that is available."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>i});var n=s(96540);const o={},a=n.createContext(o);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);