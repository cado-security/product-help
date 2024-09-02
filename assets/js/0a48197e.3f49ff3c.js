"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2891],{9134:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=s(5893),n=s(1151);const r={title:"Private IP Addresses",hide_title:!0,sidebar_position:2},a="Removing Internet Routable Addresses",d={id:"cado-response/deploy/aws/networking/internet-routable-addresses",title:"Private IP Addresses",description:"By default, the Cado platform deploys into its own VPC with an allow-list of known good IP Addresses set by the user.",source:"@site/docs/cado-response/deploy/aws/networking/internet-routable-addresses.md",sourceDirName:"cado-response/deploy/aws/networking",slug:"/cado-response/deploy/aws/networking/internet-routable-addresses",permalink:"/cado-response/deploy/aws/networking/internet-routable-addresses",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/networking/internet-routable-addresses.md",tags:[],version:"current",lastUpdatedAt:1725281983,formattedLastUpdatedAt:"Sep 2, 2024",sidebarPosition:2,frontMatter:{title:"Private IP Addresses",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Load Balancer and SSL",permalink:"/cado-response/deploy/aws/networking/aws-load-balancer"},next:{title:"Backups and Recovery",permalink:"/cado-response/deploy/aws/performance-resiliency/aws-backups"}},i={},c=[];function l(e){const t={a:"a",h1:"h1",p:"p",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"removing-internet-routable-addresses",children:"Removing Internet Routable Addresses"}),"\n",(0,o.jsx)(t.p,{children:"By default, the Cado platform deploys into its own VPC with an allow-list of known good IP Addresses set by the user."}),"\n",(0,o.jsx)(t.p,{children:"Public IPv4 addresses are assigned to the main Cado platform to enable a user to connect with their web browser, and are also assigned to workers to allow them to connect to required AWS services e.g. s3.amazonaws.com."}),"\n",(0,o.jsx)(t.p,{children:"We highly recommend using our default CloudFormation template without changes: DeployCloudFormationPrivate.yaml which creates a VPC with the required access."}),"\n",(0,o.jsx)(t.p,{children:"You can remove the Public IP addresses associated with Workers under Settings > Advanced."}),"\n",(0,o.jsx)(t.p,{children:"You can choose a deployment that does not include the Public Elastic IP address on the main Cado web server and set up an Application Load Balancer instead to handle traffic from the user to the platform."}),"\n",(0,o.jsxs)(t.p,{children:["Please see the ",(0,o.jsx)(t.a,{href:"/cado-response/deploy/aws/overview",children:"AWS deployment overview"})," for more information on how to deploy Cado in a private subnet."]}),"\n",(0,o.jsx)(t.h1,{id:"self-managing-network-access-with-custom-vpcs",children:"Self Managing Network Access with Custom VPCs"}),"\n",(0,o.jsxs)(t.p,{children:["You can remove the requirement for publicly routable IP addresses if you have set up ",(0,o.jsx)(t.a,{href:"https://tomgregory.com/when-to-use-an-aws-s3-vpc-endpoint/",children:"VPC Endpoints"})," or another method such as a Proxy to connect Cado to required AWS Services."]}),"\n",(0,o.jsx)(t.p,{children:"We highly recommend using the Cado default Cloudformation templates without changes, as we cannot support the creation and management of networks inside customer environments."}),"\n",(0,o.jsxs)(t.p,{children:["For details on endpoints that the Cado platform requires, please see the ",(0,o.jsx)(t.a,{href:"https://cadosecurity.zendesk.com/hc/en-gb/articles/23260537866385-What-AWS-endpoints-does-the-platform-require-access-to",children:"KB article"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>a});var o=s(7294);const n={},r=o.createContext(n);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);