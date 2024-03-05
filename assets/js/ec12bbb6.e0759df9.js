"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3710],{583:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>n,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(5893),s=t(1151);const i={title:"Overview",hide_title:!0,sidebar_position:1},n="Importing Data",a={id:"cado-response/discovery-import/import/intro",title:"Overview",description:"There are a number of options for importing data into the Cado platform. Once you select the data you would like to import, the Cado platform begins processing the data based on the platforms Processing Settings.  Check out our help section on Processing Settings for more details.",source:"@site/docs/cado-response/discovery-import/import/intro.md",sourceDirName:"cado-response/discovery-import/import",slug:"/cado-response/discovery-import/import/intro",permalink:"/cado-response/discovery-import/import/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/intro.md",tags:[],version:"current",lastUpdatedAt:1709677142,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Readiness (Beta)",permalink:"/cado-response/discovery-import/readiness"},next:{title:"Import from Cloud",permalink:"/cado-response/discovery-import/import/import-from-cloud"}},c={},d=[{value:"Importing from Cloud Services",id:"importing-from-cloud-services",level:3},{value:"Importing from XDR",id:"importing-from-xdr",level:3},{value:"Importing from Cado Host",id:"importing-from-cado-host",level:3},{value:"Importing from URL",id:"importing-from-url",level:3}];function p(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"importing-data",children:"Importing Data"}),"\n",(0,r.jsxs)(o.p,{children:["There are a number of options for importing data into the Cado platform. Once you select the data you would like to import, the Cado platform begins processing the data based on the platforms Processing Settings.  Check out our help section on ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"/cado-response/manage/workers#processing",children:"Processing Settings"})})," for more details."]}),"\n",(0,r.jsxs)(o.p,{children:["Cado supports a wide range of ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"/cado-response/discovery-import/import/data-types/filetypes",children:"file types"})})," across a number of  ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"/cado-response/discovery-import/import/data-types/import-types",children:"cloud services"})})," which can be imported.  To begin importing data, you simply select a Project and click the ",(0,r.jsx)(o.strong,{children:"Import"})," button"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Import Button",src:t(6848).Z+"",width:"351",height:"138"})}),"\n",(0,r.jsx)(o.p,{children:"Based on the evidence you would like to import, follow the on-screen instructions and select your source."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Import Data",src:t(263).Z+"",width:"842",height:"242"})}),"\n",(0,r.jsx)(o.h3,{id:"importing-from-cloud-services",children:"Importing from Cloud Services"}),"\n",(0,r.jsxs)(o.p,{children:["You can import evidence from cloud services across AWS, Azure and GCP, provided you have the correct credentials entered into the system, and your role has been assigned access to those credentials. ",(0,r.jsx)(o.strong,{children:(0,r.jsx)(o.a,{href:"/cado-response/discovery-import/import/import-from-cloud",children:"Learn more"})})]}),"\n",(0,r.jsx)(o.h3,{id:"importing-from-xdr",children:"Importing from XDR"}),"\n",(0,r.jsxs)(o.p,{children:["You can import data into the Cado platform via an eXtended Detection and Response (XDR) system. Currently Cado supports importing from SentinelOne. For more infomation about setting up this integration see the ",(0,r.jsx)(o.a,{href:"/cado-response/manage/integrations/xdr/sentinelone",children:"SentinelOne Integration Setup page"})]}),"\n",(0,r.jsxs)(o.p,{children:["Once the integration is set up, from within a project click ",(0,r.jsx)(o.strong,{children:"Import from XDR"})]}),"\n",(0,r.jsxs)(o.p,{children:["Then choose the XDR Platform you have set up, and click ",(0,r.jsx)(o.em,{children:"Continue"})]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Choose XDR Platform",src:t(8061).Z+"",width:"957",height:"197"})}),"\n",(0,r.jsxs)(o.p,{children:["Then search for or select the endpoint from which you want to collect, and click ",(0,r.jsx)(o.em,{children:"Continue"})]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Import XDR Endpoints",src:t(953).Z+"",width:"1847",height:"408"})}),"\n",(0,r.jsxs)(o.p,{children:["Finally, confirm your selections and click ",(0,r.jsx)(o.em,{children:"Start Import"})]}),"\n",(0,r.jsx)(o.h3,{id:"importing-from-cado-host",children:"Importing from Cado Host"}),"\n",(0,r.jsx)(o.p,{children:"The Cado platform can use Cado Host to acquire forensic artifacts from on-premises system for analysis in the cloud.\nIt can also generate credentials for Cado Host to upload evidence, such as a previously collected disk image."}),"\n",(0,r.jsxs)(o.p,{children:["For more information see the ",(0,r.jsx)(o.a,{href:"/cado-host/intro",children:"Cado Host Documentation"})]}),"\n",(0,r.jsx)(o.h3,{id:"importing-from-url",children:"Importing from URL"}),"\n",(0,r.jsxs)(o.p,{children:["You can import supported ",(0,r.jsx)(o.a,{href:"/cado-response/discovery-import/import/data-types/filetypes",children:"file types"})," from a URL where you are storing forensic artifacts collected from on-premises systems."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"On-Premises URL",src:t(8731).Z+"",width:"953",height:"181"})}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsxs)(o.p,{children:["During the EC2 Import process, an i3.4xlarge worker instance is deployed to allow for proper disk acquisition. During the Azure Instance Import process, a Standard_D8ds_v4 worker instance is deployed to allow for proper disk acquisition. You can configure the size of the worker instance in the Cado platform under ",(0,r.jsx)(o.strong,{children:"Settings/Processing"}),". This worker is spun down once the target disk is acquired."]})}),"\n",(0,r.jsxs)(o.admonition,{type:"warning",children:[(0,r.jsx)(o.p,{children:"By default when processing archive files Cado processes two layers of recursion and twenty folder branches. This provides faster processing but there is a slight risk that some malicious files or activites may be missed."}),(0,r.jsxs)(o.p,{children:["You can configure this at ",(0,r.jsx)(o.strong,{children:"Settings/Processing Speed"})," but increasing these numbers will increase the time taken to process disk images with archives."]}),(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Processing Speed",src:t(9247).Z+"",width:"1256",height:"547"})})]})]})}function l(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},6848:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/import-button-798e13611cef2958b7fd5bbfc5c3ff91.png"},263:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"},8731:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/on-premises-url-5f43b688a1a7f0eb65001e51adb5744c.png"},9247:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/settings-processing-speed-b108aef674310ab3f0119abaf88f8c92.png"},8061:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/xdr-import-2-5b5410836dbf05bb46ef55a7674385a2.png"},953:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/xdr-import-3-94a70eb2c01cb4fad976f534c453edb3.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>n});var r=t(7294);const s={},i=r.createContext(s);function n(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);