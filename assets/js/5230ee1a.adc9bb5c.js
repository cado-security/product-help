"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1134],{4737:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=o(5893),i=o(1151);const s={title:"Logging in",hide_title:!0,sidebar_position:8},r="Logging In",a={id:"cado-response/deploy/logging-in",title:"Logging in",description:"Depending on the cloud provider in which you deployed the Cado platform, navigate to either your AWS Console or your Azure Portal and find the Public IPv4 address of your running Cado instance.  Open a browser and navigate to https:// where `` is the IPv4 of the Cado instance.  You will now be able to log into the platform.",source:"@site/docs/cado-response/deploy/logging-in.md",sourceDirName:"cado-response/deploy",slug:"/cado-response/deploy/logging-in",permalink:"/cado-response/deploy/logging-in",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/logging-in.md",tags:[],version:"current",lastUpdatedAt:1728505186,formattedLastUpdatedAt:"Oct 9, 2024",sidebarPosition:8,frontMatter:{title:"Logging in",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Get and apply a license",permalink:"/cado-response/deploy/licenses"},next:{title:"Ports and network encryption",permalink:"/cado-response/deploy/ports"}},d={},l=[{value:"Default Login",id:"default-login",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"logging-in",children:"Logging In"}),"\n",(0,t.jsxs)(n.p,{children:["Depending on the cloud provider in which you deployed the Cado platform, navigate to either your ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://console.aws.amazon.com",children:"AWS Console"})})," or your ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://portal.azure.com",children:"Azure Portal"})})," and find the Public IPv4 address of your running Cado instance.  Open a browser and navigate to ",(0,t.jsx)(n.code,{children:"https://<Cado_Response_IP>"})," where ",(0,t.jsx)(n.code,{children:"<Cado_Response_IP>"})," is the IPv4 of the Cado instance.  You will now be able to log into the platform."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:['You will see a browser notification stating that "Your connection is not private". Cado is unable to automatically generate SSL certificates. In AWS, if you require a valid SSL certificate, the easiest way to create one for the encrypted HTTPS connection is to ',(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/cado-response/deploy/aws/networking/aws-load-balancer",children:"create your own ELB"})})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Login Page",src:o(9308).Z+"",width:"456",height:"528"})}),"\n",(0,t.jsx)(n.h3,{id:"default-login",children:"Default Login"}),"\n",(0,t.jsx)(n.p,{children:'On first boot, the platform will take about 10 minutes to install, during which time, on the login URL page, you will see a message indicating that the system is "Installing Cado Response ...".'}),"\n",(0,t.jsxs)(n.p,{children:["After initial install, you can login with the username ",(0,t.jsx)(n.code,{children:"admin"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For AWS, the password is ",(0,t.jsx)(n.code,{children:"i-xxx"}),", where ",(0,t.jsx)(n.code,{children:"i-xxx"})," is the Instance ID of your Cado instance."]}),"\n",(0,t.jsxs)(n.p,{children:["For Azure, the password is the very long instance id ",(0,t.jsx)(n.code,{children:"/subscription/.../cado-main-vm"})," where ",(0,t.jsx)(n.code,{children:"/subscription/.../cado-main-vm"})," is the full instance id.  After initial login, you will be asked to accept the EULA and change your password."]}),"\n",(0,t.jsxs)(n.p,{children:["For GCP, the password is the instance-id found in the Compute Engine console for your instance e.g. ",(0,t.jsx)(n.code,{children:"8784481508256766876"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9308:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/login-7194fb115da3e43cb1d8ca36b1ace509.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(7294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);