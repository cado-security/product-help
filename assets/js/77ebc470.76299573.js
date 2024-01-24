"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4514],{7975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(5893),i=t(1151);const a={title:"Logging In",hide_title:!0,sidebar_position:1},s="Logging In",r={id:"cado-response/manage/logging-in",title:"Logging In",description:"Depending on the cloud provider in which you deployed the Cado platform, navigate to either your AWS Console or your Azure Portal and find the Public IPv4 address of your running Cado instance.  Open a browser and navigate to https:// where `` is the IPv4 of the Cado instance.  You will now be able to log into the platform.",source:"@site/docs/cado-response/manage/logging-in.md",sourceDirName:"cado-response/manage",slug:"/cado-response/manage/logging-in",permalink:"/cado-response/manage/logging-in",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/logging-in.md",tags:[],version:"current",lastUpdatedAt:1706098469,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:1,frontMatter:{title:"Logging In",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AI Investigator",permalink:"/cado-response/investigate/ai investigator"},next:{title:"Applying a License",permalink:"/cado-response/manage/licenses"}},d={},c=[{value:"Default Login",id:"default-login",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"logging-in",children:"Logging In"}),"\n",(0,o.jsxs)(n.p,{children:["Depending on the cloud provider in which you deployed the Cado platform, navigate to either your ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://console.aws.amazon.com",children:"AWS Console"})})," or your ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://portal.azure.com",children:"Azure Portal"})})," and find the Public IPv4 address of your running Cado instance.  Open a browser and navigate to ",(0,o.jsx)(n.code,{children:"https://<Cado_Response_IP>"})," where ",(0,o.jsx)(n.code,{children:"<Cado_Response_IP>"})," is the IPv4 of the Cado instance.  You will now be able to log into the platform."]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{}),(0,o.jsxs)(n.p,{children:['You will see a browser notification stating that "Your connection is not private". Cado is unable to automatically generate SSL certificates. In AWS, if you require a valid SSL certificate, the easiest way to create one for the encrypted HTTPS connection is to ',(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/cado-response/deploy/aws/networking/aws-load-balancer",children:"create your own ELB"})})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Login Page",src:t(9308).Z+"",width:"456",height:"528"})}),"\n",(0,o.jsx)(n.h3,{id:"default-login",children:"Default Login"}),"\n",(0,o.jsxs)(n.p,{children:['On first boot, the platform will take about 10 minutes to install, during which time, on the login URL page, you will see a message indicating that the system is "Installing Cado Response ...".  After initial install, you can login with the username ',(0,o.jsx)(n.code,{children:"admin"}),".  For AWS, the password is ",(0,o.jsx)(n.code,{children:"i-xxx"}),", where ",(0,o.jsx)(n.code,{children:"i-xxx"})," is the Instance ID of your Cado instance.  For Azure, the password is the very long instance id ",(0,o.jsx)(n.code,{children:"/subscription/.../cado-main-vm"})," where ",(0,o.jsx)(n.code,{children:"/subscription/.../cado-main-vm"})," is the full instance id.  After initial login, you will be asked to accept the EULA and change your password."]})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},9308:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/login-7194fb115da3e43cb1d8ca36b1ace509.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(7294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);