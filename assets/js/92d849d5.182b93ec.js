"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[70],{42399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(74848),o=n(28453);const s={title:"Set up proxy access",hide_title:!0,sidebar_position:9},r="How to set up proxy access",a={id:"cado/deploy/networking-proxy",title:"Set up proxy access",description:"Cado supports the use of proxies for communication between the Cado platform and services external to the environment in which you have deployed the Cado platform. This can include:",source:"@site/docs/cado/deploy/networking-proxy.md",sourceDirName:"cado/deploy",slug:"/cado/deploy/networking-proxy",permalink:"/cado/deploy/networking-proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/networking-proxy.md",tags:[],version:"current",lastUpdatedAt:1739185771,formattedLastUpdatedAt:"Feb 10, 2025",sidebarPosition:9,frontMatter:{title:"Set up proxy access",hide_title:!0,sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Ports and network encryption",permalink:"/cado/deploy/ports"},next:{title:"Tagging Cado resources",permalink:"/cado/deploy/tag"}},c={},d=[{value:"Configure Proxy Access during installation",id:"configure-proxy-access-during-installation",level:2},{value:"Configure Proxy Access after installation",id:"configure-proxy-access-after-installation",level:2},{value:"Skipping SSL Verification in Cado Host Uploads",id:"skipping-ssl-verification-in-cado-host-uploads",level:2}];function l(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-set-up-proxy-access",children:"How to set up proxy access"}),"\n",(0,i.jsx)(t.p,{children:"Cado supports the use of proxies for communication between the Cado platform and services external to the environment in which you have deployed the Cado platform. This can include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Cross-cloud acquisitions"}),"\n",(0,i.jsx)(t.li,{children:"XDR-based acquisitions"}),"\n",(0,i.jsx)(t.li,{children:"Importing from a URL"}),"\n",(0,i.jsx)(t.li,{children:"System updates"}),"\n",(0,i.jsx)(t.li,{children:"Providing diagnostic information to Cado"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Cado supports proxy authentication using basic HTTP and server certificate TLS authentication."}),"\n",(0,i.jsx)(t.h2,{id:"configure-proxy-access-during-installation",children:"Configure Proxy Access during installation"}),"\n",(0,i.jsx)(t.p,{children:"Please see the relevant deployment page, on how to configure proxy settings during installation by setting the proxy and proxy cert URL parameters."}),"\n",(0,i.jsx)(t.h2,{id:"configure-proxy-access-after-installation",children:"Configure Proxy Access after installation"}),"\n",(0,i.jsxs)(t.p,{children:["To configure proxy access go to ",(0,i.jsx)(t.em,{children:"Settings - Advanced"})]}),"\n",(0,i.jsxs)(t.p,{children:["Specify the URL of the proxy. If the proxy requires a user ID and password, include these as part of the URL in the format ",(0,i.jsx)(t.code,{children:"http://user:password@hostname:port"})]}),"\n",(0,i.jsxs)(t.p,{children:["If the proxy uses TLS, specify URL from which you can download the server certificate URL in the ",(0,i.jsx)(t.em,{children:"Proxy Cert URL"})," field. If the server does not user TLS, leave this field blank."]}),"\n",(0,i.jsxs)(t.p,{children:["To test these settings, click the ",(0,i.jsx)(t.em,{children:"Test proxy settings"})," button."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Proxy Setting",src:n(33158).A+"",width:"1211",height:"373"})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Settings will only be applied after the next system upgrade"})}),"\n",(0,i.jsx)(t.h2,{id:"skipping-ssl-verification-in-cado-host-uploads",children:"Skipping SSL Verification in Cado Host Uploads"}),"\n",(0,i.jsx)(t.p,{children:"Some MITM Proxies will present an invalid certificate, and prevent Cado Host (and other import methods which utilise Cado Host such as XDR integrations and Kubernetes acquisitions) from uploading data to cloud storage."}),"\n",(0,i.jsxs)(t.p,{children:["To skip SSL verification in Cado Host uploads, check the box under Settings > Advanced > Cado Host (Skip SSL Verification):\n",(0,i.jsx)(t.img,{alt:"Proxy Setting",src:n(22695).A+"",width:"1932",height:"220"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},33158:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/proxy-setting-45149c60293a39341b878cdab8b68b6e.png"},22695:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/skip_ssl-a2804fdc68acea08ec7faa7a9bc1cc6c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);