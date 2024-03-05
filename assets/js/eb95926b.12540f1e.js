"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5191],{2514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(5893),o=n(1151);const a={title:"Overview & API",hide_title:!0,sidebar_position:1},s="Overview & API",r={id:"cado-response/manage/integrations/api-overview",title:"Overview & API",description:"The Cado API enables third party tools and automation scripts to integrate with the Cado platform.",source:"@site/docs/cado-response/manage/integrations/api-overview.md",sourceDirName:"cado-response/manage/integrations",slug:"/cado-response/manage/integrations/api-overview",permalink:"/cado-response/manage/integrations/api-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/integrations/api-overview.md",tags:[],version:"current",lastUpdatedAt:1709677142,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{title:"Overview & API",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ping SAML",permalink:"/cado-response/manage/users-authentication/sso/ping_saml"},next:{title:"GuardDuty via Lambda",permalink:"/cado-response/manage/integrations/aws-lambda"}},c={},d=[{value:"Creating and Storing an API Access Key",id:"creating-and-storing-an-api-access-key",level:3},{value:"Platform Base URL",id:"platform-base-url",level:3},{value:"Full API Documentation",id:"full-api-documentation",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"overview--api",children:"Overview & API"}),"\n",(0,i.jsx)(t.p,{children:"The Cado API enables third party tools and automation scripts to integrate with the Cado platform."}),"\n",(0,i.jsx)(t.p,{children:"You can use the API and the pre-made out-of-the-box integrations to trigger operations in the platform (e.g. acquire instances from your cloud environments), retrieve data that our system captured (e.g. suspicious events), manage and control investigation projects, and more."}),"\n",(0,i.jsx)(t.p,{children:"This section provides a quick onboarding flow that is required for every integration followed in this section."}),"\n",(0,i.jsx)(t.h3,{id:"creating-and-storing-an-api-access-key",children:"Creating and Storing an API Access Key"}),"\n",(0,i.jsx)(t.p,{children:"Before diving into any of the integrations we have with the Cado platform - we first need to understand the correct way to authenticate and access the Cado API."}),"\n",(0,i.jsx)(t.p,{children:"To be able to access the different resources of the API, any request must be provided with a valid API Key generated by our authentication server."}),"\n",(0,i.jsx)(t.p,{children:"To generate that key you can do the following inside Cado Repsonse:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.strong,{children:"Settings"})," in the bottom left and click the ",(0,i.jsx)(t.strong,{children:"API"})," tab."]}),"\n",(0,i.jsxs)(t.li,{children:["Under ",(0,i.jsx)(t.strong,{children:"Access Tokens"})," click the ",(0,i.jsx)(t.strong,{children:"Create New Key"})," button."]}),"\n",(0,i.jsxs)(t.li,{children:["Take note of the ",(0,i.jsx)(t.strong,{children:"Public Key"}),", this is the identifier that we can use for revoking the key later on if needed."]}),"\n",(0,i.jsxs)(t.li,{children:["Take note of the ",(0,i.jsx)(t.strong,{children:"Secret Key"}),", you'll need to save this somewhere private (like a password manager), as you won't be able to see it again after you close the dialog. This is the key we need to provide to the third-party integration providers."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Get API Key",src:n(9436).Z+"",width:"833",height:"655"})}),"\n",(0,i.jsx)(t.p,{children:"The Secret Key is used as the Access Token."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"The API Secret Key will only be shown once, so it is recommended to save it to a secure place, like password manager."})}),"\n",(0,i.jsx)(t.h3,{id:"platform-base-url",children:"Platform Base URL"}),"\n",(0,i.jsx)(t.p,{children:'Often you\'ll see in the following tutorials that we are referring to "Platform Base URL" - which is the IP or Domain of where the platform was deployed, for example:'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://ec2example.compute.amazonaws.com\n"})}),"\n",(0,i.jsx)(t.h3,{id:"full-api-documentation",children:"Full API Documentation"}),"\n",(0,i.jsxs)(t.p,{children:["From version 2.8.0 onwards you can view the Swagger docs for the API at /apidocs\nYou can view examples at ",(0,i.jsx)(t.a,{href:"https://github.com/cado-security/cado-api-examples",children:"https://github.com/cado-security/cado-api-examples"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9436:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/api-e5f87fa2f8d4399e9b134c464dbf1ca2.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(7294);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);