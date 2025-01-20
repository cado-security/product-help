"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8954],{6235:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=n(74848),i=n(28453);const a={title:"Log in",hide_title:!0,sidebar_position:6},s="How to log in to the Cado platform",r={id:"cado/deploy/logging-in",title:"Log in",description:"Depending on the cloud provider in which you deployed the Cado platform, navigate to either your AWS Console or your Azure Portal and find the Public IPv4 address of your running Cado instance.  Open a browser and navigate to https:// where `` is the IPv4 of the Cado instance.  You will now be able to log into the platform.",source:"@site/docs/cado/deploy/logging-in.md",sourceDirName:"cado/deploy",slug:"/cado/deploy/logging-in",permalink:"/cado/deploy/logging-in",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/logging-in.md",tags:[],version:"current",lastUpdatedAt:1737393447,formattedLastUpdatedAt:"Jan 20, 2025",sidebarPosition:6,frontMatter:{title:"Log in",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Cross-cloud vs individual deployments",permalink:"/cado/deploy/cross/cross_vs_individual"},next:{title:"Get and apply a license",permalink:"/cado/deploy/licenses"}},d={},l=[{value:"Default Login",id:"default-login",level:3}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"how-to-log-in-to-the-cado-platform",children:"How to log in to the Cado platform"}),"\n",(0,t.jsxs)(o.p,{children:["Depending on the cloud provider in which you deployed the Cado platform, navigate to either your ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://console.aws.amazon.com",children:"AWS Console"})})," or your ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"https://portal.azure.com",children:"Azure Portal"})})," and find the Public IPv4 address of your running Cado instance.  Open a browser and navigate to ",(0,t.jsx)(o.code,{children:"https://<Cado_IP>"})," where ",(0,t.jsx)(o.code,{children:"<Cado_IP>"})," is the IPv4 of the Cado instance.  You will now be able to log into the platform."]}),"\n",(0,t.jsxs)(o.admonition,{type:"tip",children:[(0,t.jsx)(o.mdxAdmonitionTitle,{}),(0,t.jsxs)(o.p,{children:['You will see a browser notification stating that "Your connection is not private". Cado is unable to automatically generate SSL certificates. In AWS, if you require a valid SSL certificate, the easiest way to create one for the encrypted HTTPS connection is to ',(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"/cado/deploy/aws/networking/aws-load-balancer",children:"create your own Elastic Load Balancer"})})]})]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Login Page",src:n(82422).A+"",width:"456",height:"528"})}),"\n",(0,t.jsx)(o.h3,{id:"default-login",children:"Default Login"}),"\n",(0,t.jsx)(o.p,{children:'On first boot, the platform will take about 10 minutes to install, during which time, on the login URL page, you will see a message indicating that the system is "Installing Cado...".'}),"\n",(0,t.jsxs)(o.p,{children:["After initial install, you can login with the username ",(0,t.jsx)(o.code,{children:"admin"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["For AWS, the password is ",(0,t.jsx)(o.code,{children:"i-xxx"}),", where ",(0,t.jsx)(o.code,{children:"i-xxx"})," is the Instance ID of your Cado instance."]}),"\n",(0,t.jsxs)(o.p,{children:["For Azure, the password is the very long instance id ",(0,t.jsx)(o.code,{children:"/subscription/.../cado-main-vm"})," where ",(0,t.jsx)(o.code,{children:"/subscription/.../cado-main-vm"})," is the full instance id.  After initial login, you will be asked to accept the EULA and change your password."]}),"\n",(0,t.jsxs)(o.p,{children:["For GCP, the password is the instance-id found in the Compute Engine console for your instance e.g. ",(0,t.jsx)(o.code,{children:"87844815082567668776"})]}),"\n",(0,t.jsxs)(o.p,{children:["For High Availability in AWS, the password is the name of the load balancer, for example if the full ARN of the load balancer is ",(0,t.jsx)(o.code,{children:"arn:aws:elasticloadbalancing:us-east-1:111:loadbalancer/app/my-load-balancer/abc"})," then the password will be ",(0,t.jsx)(o.code,{children:"my-load-balancer"})]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},82422:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/login-7194fb115da3e43cb1d8ca36b1ace509.png"},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>r});var t=n(96540);const i={},a=t.createContext(i);function s(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);