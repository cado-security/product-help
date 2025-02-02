"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7519],{46439:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var t=n(74848),s=n(28453);const i={title:"How to send logs to Cado",hide_title:!0,sidebar_position:2},l="How to Send Logs to Cado",r={id:"troubleshooting/send-logs",title:"How to send logs to Cado",description:"There are several methods for sending logs to Cado, listed in order of ease:",source:"@site/docs/troubleshooting/send-logs.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/send-logs",permalink:"/troubleshooting/send-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/troubleshooting/send-logs.md",tags:[],version:"current",lastUpdatedAt:1738502359,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:2,frontMatter:{title:"How to send logs to Cado",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to get support",permalink:"/troubleshooting/get-support"},next:{title:"Forward logs to SIEMs",permalink:"/troubleshooting/logs-cloudwatch"}},d={},a=[{value:"Downloading Logs for a single processing pipeline",id:"downloading-logs-for-a-single-processing-pipeline",level:2},{value:"Data Privacy",id:"data-privacy",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"how-to-send-logs-to-cado",children:"How to Send Logs to Cado"}),"\n",(0,t.jsx)(o.p,{children:"There are several methods for sending logs to Cado, listed in order of ease:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Automatically through the UI"}),": Navigate to the Help screen in the Cado platform and click on ",(0,t.jsx)(o.code,{children:"Send Logs to Cado"}),". This will automatically package the logs and send them securely to Cado over HTTPS."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Download and upload manually"}),": If automatic sending fails, click on ",(0,t.jsx)(o.code,{children:"Download Logs"})," in the UI. Then, upload the downloaded zip file to the Customer Portal."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Via SSH"}),": If you cannot access the platform via the UI, open an SSH session to the Cado platform using the key from deployment. Run the following command:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"sudo tar -cvzf /var/log/cado_logs.tar.gz /var/log\n"})}),"\n",(0,t.jsx)(o.p,{children:"Then, upload the generated zip file to the Customer Portal."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"downloading-logs-for-a-single-processing-pipeline",children:"Downloading Logs for a single processing pipeline"}),"\n",(0,t.jsx)(o.p,{children:'Logs for an individual pipeline can be downloaded by selecting "Platform" on the left menu, then clicking "Download pipeline" on the pipeline you are interested in. This will download a zip file containing the logs just for that pipeline.'}),"\n",(0,t.jsx)(o.h2,{id:"data-privacy",children:"Data Privacy"}),"\n",(0,t.jsx)(o.p,{children:"Secure settings in logs are redacted before sending to Cado."}),"\n",(0,t.jsx)(o.p,{children:"For example, the following log line:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"Got setting CLOUD_CRED_AWS_Default Acquisition: *****\n"})})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>r});var t=n(96540);const s={},i=t.createContext(s);function l(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);