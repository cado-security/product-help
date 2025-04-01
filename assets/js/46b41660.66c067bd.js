"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6740],{14636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(74848),o=n(28453);const s={title:"API overview",hide_title:!0,sidebar_position:1},a="How to Use the Cado API",r={id:"cado/integrations/api-overview",title:"API overview",description:"The Cado API allows third-party tools and automation scripts to interact seamlessly with the Cado platform. You can use the API, along with pre-built integrations, to perform tasks like:",source:"@site/docs/cado/integrations/api-overview.md",sourceDirName:"cado/integrations",slug:"/cado/integrations/api-overview",permalink:"/cado/integrations/api-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/integrations/api-overview.md",tags:[],version:"current",lastUpdatedAt:1743513009,formattedLastUpdatedAt:"Apr 1, 2025",sidebarPosition:1,frontMatter:{title:"API overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Managing investigations",permalink:"/cado/discovery-import/investigations"},next:{title:"Export to on-premise forensic tools",permalink:"/cado/integrations/forensic-tools"}},l={},c=[{value:"Creating and Storing an API Access Key",id:"creating-and-storing-an-api-access-key",level:3},{value:"Platform Base URL",id:"platform-base-url",level:3},{value:"Full API Documentation",id:"full-api-documentation",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-use-the-cado-api",children:"How to Use the Cado API"}),"\n",(0,i.jsx)(t.p,{children:"The Cado API allows third-party tools and automation scripts to interact seamlessly with the Cado platform. You can use the API, along with pre-built integrations, to perform tasks like:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Triggering platform operations (e.g., acquiring instances from your cloud environments)"}),"\n",(0,i.jsx)(t.li,{children:"Retrieving captured data (e.g., suspicious events)"}),"\n",(0,i.jsx)(t.li,{children:"Managing and controlling investigations"}),"\n",(0,i.jsx)(t.li,{children:"And more"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This guide will walk you through the essential steps to onboard and integrate with the Cado API."}),"\n",(0,i.jsx)(t.h3,{id:"creating-and-storing-an-api-access-key",children:"Creating and Storing an API Access Key"}),"\n",(0,i.jsx)(t.p,{children:"To access the Cado API, you\u2019ll need to authenticate with a valid API Key. Follow these steps to generate an API Key within the Cado platform:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Settings"})," in the bottom-left corner, then click on the ",(0,i.jsx)(t.strong,{children:"API"})," tab."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"API Settings Page",src:n(62201).A+"",width:"2524",height:"1328"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Under the ",(0,i.jsx)(t.strong,{children:"API Keys"})," section, click the ",(0,i.jsx)(t.strong,{children:"Create API key"})," button."]}),"\n",(0,i.jsx)(t.li,{children:"Enter an optional key name"}),"\n",(0,i.jsxs)(t.li,{children:["Select a role from the dropdown and click ",(0,i.jsx)(t.strong,{children:"Create"})]}),"\n",(0,i.jsxs)(t.li,{children:["Copy the ",(0,i.jsx)(t.strong,{children:"Public Key"}),". This key serves as the identifier for the API Key, which can be used later to revoke access if needed."]}),"\n",(0,i.jsxs)(t.li,{children:["Copy the ",(0,i.jsx)(t.strong,{children:"Secret Key"})," and store it in a secure location (e.g., a password manager). You will not be able to view the Secret Key again after closing the dialog. This key is required when integrating with third-party providers."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Get API Key",src:n(65043).A+"",width:"1779",height:"1025"})}),"\n",(0,i.jsx)(t.p,{children:"The Secret Key functions as the Access Token for authenticating your requests."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"The Secret Key is shown only once. Be sure to save it securely, such as in a password manager."})}),"\n",(0,i.jsx)(t.h3,{id:"platform-base-url",children:"Platform Base URL"}),"\n",(0,i.jsx)(t.p,{children:'In the following tutorials, the term "Platform Base URL" refers to the IP address or domain name where your Cado platform is deployed. For example:'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://ec2example.compute.amazonaws.com\n"})}),"\n",(0,i.jsx)(t.h3,{id:"full-api-documentation",children:"Full API Documentation"}),"\n",(0,i.jsxs)(t.p,{children:["You can find detailed API references and examples for versions V2 and V3 in the ",(0,i.jsx)(t.strong,{children:"API"})," settings page. Additional API examples are available on GitHub: ",(0,i.jsx)(t.a,{href:"https://github.com/cado-security/cado-api-examples",children:"https://github.com/cado-security/cado-api-examples"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65043:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/api-key-aacf4201d6deb4f8502e39a6d075ed2d.png"},62201:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/api-faab75b4b26c2d4632e297c0b70deef7.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);