"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4316],{2726:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=o(5893),i=o(1151);const s={title:"Tanium",hide_title:!0,sidebar_position:4},a="Processing Tanium Live Response Collections in Cado",r={id:"cado-response/manage/integrations/xdr/tanium",title:"Tanium",description:"The Cado platform can process Tanium Live Response collections, including the trace database.",source:"@site/docs/cado-response/manage/integrations/xdr/tanium.md",sourceDirName:"cado-response/manage/integrations/xdr",slug:"/cado-response/manage/integrations/xdr/tanium",permalink:"/cado-response/manage/integrations/xdr/tanium",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/integrations/xdr/tanium.md",tags:[],version:"current",lastUpdatedAt:1726620490,formattedLastUpdatedAt:"Sep 18, 2024",sidebarPosition:4,frontMatter:{title:"Tanium",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Microsoft Defender XDR",permalink:"/cado-response/manage/integrations/xdr/defender"},next:{title:"Worker Management",permalink:"/cado-response/manage/workers"}},c={},d=[{value:"Collecting a Live Response Package using Tanium",id:"collecting-a-live-response-package-using-tanium",level:2},{value:"Processing using Cado",id:"processing-using-cado",level:2},{value:"Overview",id:"overview",level:2},{value:"Getting the Cado Host Collection Script",id:"getting-the-cado-host-collection-script",level:2},{value:"Adding the Cado Host Collection Script to Tanium",id:"adding-the-cado-host-collection-script-to-tanium",level:2},{value:"Overview",id:"overview-1",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"processing-tanium-live-response-collections-in-cado",children:"Processing Tanium Live Response Collections in Cado"}),"\n",(0,n.jsx)(t.p,{children:"The Cado platform can process Tanium Live Response collections, including the trace database."}),"\n",(0,n.jsx)(t.h2,{id:"collecting-a-live-response-package-using-tanium",children:"Collecting a Live Response Package using Tanium"}),"\n",(0,n.jsxs)(t.p,{children:["Follow the ",(0,n.jsx)(t.a,{href:"https://help.tanium.com/bundle/ug_threat_response_cloud/page/threat_response/collect_data.html",children:"Tanium documentation"})," to collect a Live Response package from a system to either Azure Storage or AWS S3 Storage."]}),"\n",(0,n.jsx)(t.h2,{id:"processing-using-cado",children:"Processing using Cado"}),"\n",(0,n.jsxs)(t.p,{children:["To process the Tanium Live Response package, import to collected Live Response package into the Cado platform from S3 or Azure Storage.\nPlease see our ",(0,n.jsx)(t.a,{href:"https://www.cadosecurity.com/blog/investigating-tanium-live-response-collections-in-the-cado-platform",children:"blog"})," for more information on how the data is presented in the Cado platform."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["A high-level overview of the process is as follows:\n",(0,n.jsx)(t.img,{alt:"Tanium Cado",src:o(3559).Z+"",width:"1520",height:"694"})]}),"\n",(0,n.jsxs)(t.p,{children:["For more information, please see ",(0,n.jsx)(t.a,{href:"https://www.cadosecurity.com/blog/investigating-tanium-live-response-collections-in-the-cado-platform",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h1,{id:"collecting-cado-host-data-using-tanium",children:"Collecting Cado Host Data using Tanium"}),"\n",(0,n.jsxs)(t.p,{children:["Tanium can be used to deploy the Cado Host collection script to endpoints, as a ",(0,n.jsx)(t.a,{href:"https://help.tanium.com/bundle/ug_console_cloud/page/platform_user/authoring_packages.html",children:"Tanium Package"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"getting-the-cado-host-collection-script",children:"Getting the Cado Host Collection Script"}),"\n",(0,n.jsxs)(t.p,{children:["The Cado Host collection script can be downloaded from the Cado Response platform.  To do this, navigate to the ",(0,n.jsx)(t.code,{children:"Project > Import > Cado Host"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"By default, scripts are generated with a pre-signed url to upload the collected data to cloud storage. The pre-signed URL is valid for 12 hours, so the script should be run within that time frame."}),"\n",(0,n.jsxs)(t.p,{children:["If you are deployed in AWS, you can also use a long-term access key and secret to upload the data to S3 with the ",(0,n.jsx)(t.code,{children:"--access_key"})," and ",(0,n.jsx)(t.code,{children:"--secret-key"})," options. This avoids the need to use time-limited pre-signed URLs, but the access key and secret should be stored securely and limited to write-only access to the S3 bucket."]}),"\n",(0,n.jsx)(t.h2,{id:"adding-the-cado-host-collection-script-to-tanium",children:"Adding the Cado Host Collection Script to Tanium"}),"\n",(0,n.jsxs)(t.p,{children:["Please refer to ",(0,n.jsx)(t.a,{href:"https://help.tanium.com/bundle/ug_console_cloud/page/platform_user/authoring_packages.html",children:"Tanium documentation"})," on how to create packages."]}),"\n",(0,n.jsx)(t.h2,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["A high-level overview of the process is as follows:\n",(0,n.jsx)(t.img,{alt:"Tanium Cado Host",src:o(1943).Z+"",width:"1198",height:"718"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1943:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/tanium-cado-host-8646de4bb33941bd05738c818e215113.png"},3559:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/tanium-cado-08ff673ff37767bdde5714a48f467825.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>a});var n=o(7294);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);