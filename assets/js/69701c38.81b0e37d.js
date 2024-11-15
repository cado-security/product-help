"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6858],{1105:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=o(5893),n=o(1151);const a={title:"Tanium",hide_title:!0,sidebar_position:4},s="How to Process Tanium Live Response Collections",c={id:"cado/integrations/xdr/tanium",title:"Tanium",description:"The Cado platform can process Tanium Live Response collections, including the trace database.",source:"@site/docs/cado/integrations/xdr/tanium.md",sourceDirName:"cado/integrations/xdr",slug:"/cado/integrations/xdr/tanium",permalink:"/cado/integrations/xdr/tanium",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/integrations/xdr/tanium.md",tags:[],version:"current",lastUpdatedAt:1731676720,formattedLastUpdatedAt:"Nov 15, 2024",sidebarPosition:4,frontMatter:{title:"Tanium",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Microsoft Defender XDR",permalink:"/cado/integrations/xdr/defender"},next:{title:"Getting started example",permalink:"/cado/investigate/ctf-tutorial"}},r={},d=[{value:"Collecting a Live Response Package with Tanium",id:"collecting-a-live-response-package-with-tanium",level:2},{value:"Processing in Cado",id:"processing-in-cado",level:2},{value:"Overview",id:"overview",level:2},{value:"Getting the Cado Host Collection Script",id:"getting-the-cado-host-collection-script",level:2},{value:"Adding the Cado Host Collection Script to Tanium",id:"adding-the-cado-host-collection-script-to-tanium",level:2},{value:"Overview",id:"overview-1",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-process-tanium-live-response-collections",children:"How to Process Tanium Live Response Collections"}),"\n",(0,i.jsx)(t.p,{children:"The Cado platform can process Tanium Live Response collections, including the trace database."}),"\n",(0,i.jsx)(t.h2,{id:"collecting-a-live-response-package-with-tanium",children:"Collecting a Live Response Package with Tanium"}),"\n",(0,i.jsxs)(t.p,{children:["Follow the ",(0,i.jsx)(t.a,{href:"https://help.tanium.com/bundle/ug_threat_response_cloud/page/threat_response/collect_data.html",children:"Tanium documentation"})," to collect a Live Response package from a system and store it in either Azure Storage or AWS S3 Storage."]}),"\n",(0,i.jsx)(t.h2,{id:"processing-in-cado",children:"Processing in Cado"}),"\n",(0,i.jsxs)(t.p,{children:["To process the Tanium Live Response package, import the collected package into the Cado platform from S3 or Azure Storage. For more details on how the data is presented in Cado, refer to our ",(0,i.jsx)(t.a,{href:"https://www.cadosecurity.com/blog/investigating-tanium-live-response-collections-in-the-cado-platform",children:"blog"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["Here\u2019s a high-level overview of the process:\n",(0,i.jsx)(t.img,{alt:"Tanium Cado",src:o(3559).Z+"",width:"1520",height:"694"})]}),"\n",(0,i.jsxs)(t.p,{children:["For more information, visit ",(0,i.jsx)(t.a,{href:"https://www.cadosecurity.com/blog/investigating-tanium-live-response-collections-in-the-cado-platform",children:"this page"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"collecting-cado-host-data-with-tanium",children:"Collecting Cado Host Data with Tanium"}),"\n",(0,i.jsxs)(t.p,{children:["Tanium can be used to deploy the Cado Host collection script to endpoints as a ",(0,i.jsx)(t.a,{href:"https://help.tanium.com/bundle/ug_console_cloud/page/platform_user/authoring_packages.html",children:"Tanium Package"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-the-cado-host-collection-script",children:"Getting the Cado Host Collection Script"}),"\n",(0,i.jsxs)(t.p,{children:["You can download the Cado Host collection script directly from the Cado platform by navigating to ",(0,i.jsx)(t.code,{children:"Project > Import > Cado Host"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"By default, the script is generated with a pre-signed URL to upload the collected data to cloud storage. The pre-signed URL is valid for 12 hours, so the script must be run within that time."}),"\n",(0,i.jsxs)(t.p,{children:["For AWS deployments, you can use long-term access keys and secrets to upload data to S3 using the ",(0,i.jsx)(t.code,{children:"--access_key"})," and ",(0,i.jsx)(t.code,{children:"--secret-key"})," options. This eliminates the need for time-limited pre-signed URLs, but ensure that the keys are stored securely and have write-only access to the S3 bucket."]}),"\n",(0,i.jsx)(t.h2,{id:"adding-the-cado-host-collection-script-to-tanium",children:"Adding the Cado Host Collection Script to Tanium"}),"\n",(0,i.jsxs)(t.p,{children:["For guidance on creating packages in Tanium, refer to the ",(0,i.jsx)(t.a,{href:"https://help.tanium.com/bundle/ug_console_cloud/page/platform_user/authoring_packages.html",children:"Tanium documentation"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["Here\u2019s a high-level overview of the process:\n",(0,i.jsx)(t.img,{alt:"Tanium Cado Host",src:o(1943).Z+"",width:"1198",height:"718"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1943:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/tanium-cado-host-8646de4bb33941bd05738c818e215113.png"},3559:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/tanium-cado-08ff673ff37767bdde5714a48f467825.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>s});var i=o(7294);const n={},a=i.createContext(n);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);