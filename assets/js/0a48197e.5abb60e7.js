"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2891],{9134:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=o(5893),n=o(1151);const r={title:"Private IP Addresses",hide_title:!0,sidebar_position:2},a="Removing Internet Routable Addresses",d={id:"cado-response/deploy/aws/networking/internet-routable-addresses",title:"Private IP Addresses",description:"By default, the Cado platform deploys into its own VPC with an allow-list of known good IP Addresses set by the user. Public IPv4 addresses are assigned to the main Cado platform to enable a user to connect with their web browser, and are also assigned to workers to allow them to connect to required AWS services e.g. s3.amazonaws.com.",source:"@site/docs/cado-response/deploy/aws/networking/internet-routable-addresses.md",sourceDirName:"cado-response/deploy/aws/networking",slug:"/cado-response/deploy/aws/networking/internet-routable-addresses",permalink:"/cado-response/deploy/aws/networking/internet-routable-addresses",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/networking/internet-routable-addresses.md",tags:[],version:"current",lastUpdatedAt:1709677142,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:2,frontMatter:{title:"Private IP Addresses",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Load Balancer",permalink:"/cado-response/deploy/aws/networking/aws-load-balancer"},next:{title:"Backups and Recovery",permalink:"/cado-response/deploy/aws/performance-resiliency/aws-backups"}},i={},l=[];function c(e){const t={a:"a",h1:"h1",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"removing-internet-routable-addresses",children:"Removing Internet Routable Addresses"}),"\n",(0,s.jsx)(t.p,{children:"By default, the Cado platform deploys into its own VPC with an allow-list of known good IP Addresses set by the user. Public IPv4 addresses are assigned to the main Cado platform to enable a user to connect with their web browser, and are also assigned to workers to allow them to connect to required AWS services e.g. s3.amazonaws.com."}),"\n",(0,s.jsxs)(t.p,{children:["You can remove the requirement for publicly routable IP addresses if you have set up ",(0,s.jsx)(t.a,{href:"https://tomgregory.com/when-to-use-an-aws-s3-vpc-endpoint/",children:"VPC Endpoints"})," to connect Cado to required AWS Services.\nYou can remove the Public IP addresses associated with Workers under Settings > Advanced.\nYou can edit the deployment to remove the Public Elastic IP address from the main Cado web server and set up an Application Load Balancer instead to handle traffic to the user over the internet. If you remove the Public Elastic IP address, the built-in Update service will be unable to function and you will need to update via Terraform instead."]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>a});var s=o(7294);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);