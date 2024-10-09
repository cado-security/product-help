"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2891],{9134:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=o(5893),s=o(1151);const r={title:"Remove internet routable addresses",hide_title:!0,sidebar_position:2},a="How to remove internet routable addresses",d={id:"cado-response/deploy/aws/networking/internet-routable-addresses",title:"Remove internet routable addresses",description:"By default, the Cado platform deploys into its own VPC with an allow-list of known good IP Addresses set by the user.",source:"@site/docs/cado-response/deploy/aws/networking/internet-routable-addresses.md",sourceDirName:"cado-response/deploy/aws/networking",slug:"/cado-response/deploy/aws/networking/internet-routable-addresses",permalink:"/cado-response/deploy/aws/networking/internet-routable-addresses",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/networking/internet-routable-addresses.md",tags:[],version:"current",lastUpdatedAt:1728489638,formattedLastUpdatedAt:"Oct 9, 2024",sidebarPosition:2,frontMatter:{title:"Remove internet routable addresses",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Add a load balancer and HTTPS",permalink:"/cado-response/deploy/aws/networking/aws-load-balancer"},next:{title:"Endpoint access",permalink:"/cado-response/deploy/aws/networking/endpoints"}},i={},c=[{value:"Self Managing Network Access with Custom VPCs",id:"self-managing-network-access-with-custom-vpcs",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-remove-internet-routable-addresses",children:"How to remove internet routable addresses"}),"\n",(0,n.jsx)(t.p,{children:"By default, the Cado platform deploys into its own VPC with an allow-list of known good IP Addresses set by the user."}),"\n",(0,n.jsx)(t.p,{children:"Public IPv4 addresses are assigned to the main Cado platform to enable a user to connect with their web browser, and are also assigned to workers to allow them to connect to required AWS services e.g. s3.amazonaws.com."}),"\n",(0,n.jsx)(t.p,{children:"We highly recommend using our default CloudFormation template without changes: DeployCloudFormationPrivate.yaml which creates a VPC with the required access."}),"\n",(0,n.jsx)(t.p,{children:"You can remove the Public IP addresses associated with Workers under Settings > Advanced."}),"\n",(0,n.jsx)(t.p,{children:"You can choose a deployment that does not include the Public Elastic IP address on the main Cado web server and set up an Application Load Balancer instead to handle traffic from the user to the platform."}),"\n",(0,n.jsxs)(t.p,{children:["Please see the ",(0,n.jsx)(t.a,{href:"/cado-response/deploy/aws/cloudformation",children:"AWS deployment overview"})," for more information on how to deploy Cado in a private subnet."]}),"\n",(0,n.jsx)(t.h2,{id:"self-managing-network-access-with-custom-vpcs",children:"Self Managing Network Access with Custom VPCs"}),"\n",(0,n.jsxs)(t.p,{children:["You can remove the requirement for publicly routable IP addresses if you have set up ",(0,n.jsx)(t.a,{href:"https://tomgregory.com/when-to-use-an-aws-s3-vpc-endpoint/",children:"VPC Endpoints"})," or another method such as a Proxy to connect Cado to required AWS Services."]}),"\n",(0,n.jsx)(t.p,{children:"We highly recommend using the Cado default Cloudformation templates without changes, as we cannot support the creation and management of networks inside customer environments."})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>a});var n=o(7294);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);