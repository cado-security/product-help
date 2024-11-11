"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5954],{3400:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var n=t(5893),s=t(1151);const r={title:"How to send logs to Cado",hide_title:!0,sidebar_position:2},l="How to Send Logs to Cado",d={id:"troubleshooting/send-logs",title:"How to send logs to Cado",description:"There are several methods for sending logs to Cado, listed in order of ease:",source:"@site/docs/troubleshooting/send-logs.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/send-logs",permalink:"/troubleshooting/send-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/troubleshooting/send-logs.md",tags:[],version:"current",lastUpdatedAt:1731344277,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:2,frontMatter:{title:"How to send logs to Cado",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to get support",permalink:"/troubleshooting/get-support"},next:{title:"Forward logs to Cloudwatch",permalink:"/troubleshooting/logs-cloudwatch"}},i={},a=[];function c(o){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"how-to-send-logs-to-cado",children:"How to Send Logs to Cado"}),"\n",(0,n.jsx)(e.p,{children:"There are several methods for sending logs to Cado, listed in order of ease:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Automatically through the UI"}),": Navigate to the Help screen in the Cado platform and click on ",(0,n.jsx)(e.code,{children:"Send Logs to Cado"}),". This will automatically package the logs and send them securely to Cado over HTTPS."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Download and upload manually"}),": If automatic sending fails, click on ",(0,n.jsx)(e.code,{children:"Download Logs"})," in the UI. Then, upload the downloaded zip file to the Customer Portal."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Via SSH"}),": If you cannot access the platform via the UI, open an SSH session to the Cado platform using the key from deployment. Run the following command:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"sudo tar -cvzf /var/log/cado_logs.tar.gz /var/log\n"})}),"\n",(0,n.jsx)(e.p,{children:"Then, upload the generated zip file to the Customer Portal."}),"\n"]}),"\n"]})]})}function h(o={}){const{wrapper:e}={...(0,s.a)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(c,{...o})}):c(o)}},1151:(o,e,t)=>{t.d(e,{Z:()=>d,a:()=>l});var n=t(7294);const s={},r=n.createContext(s);function l(o){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function d(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:l(o.components),n.createElement(r.Provider,{value:e},o.children)}}}]);