"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7194],{94548:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(74848),n=t(28453);const i={title:"Google Workspace logs",hide_title:!0,sidebar_position:10},r="How to Import Google Workspace Logs",c={id:"cado/discovery-import/google-workspace-logs",title:"Google Workspace logs",description:"Introduction",source:"@site/docs/cado/discovery-import/google-workspace-logs.md",sourceDirName:"cado/discovery-import",slug:"/cado/discovery-import/google-workspace-logs",permalink:"/cado/discovery-import/google-workspace-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/google-workspace-logs.md",tags:[],version:"current",lastUpdatedAt:1734964901,formattedLastUpdatedAt:"Dec 23, 2024",sidebarPosition:10,frontMatter:{title:"Google Workspace logs",hide_title:!0,sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/cado/discovery-import/kubernetes"},next:{title:"Microsoft 365 and Entra ID",permalink:"/cado/discovery-import/m365-logs"}},a={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Log Acquisition",id:"log-acquisition",level:3},{value:"Log Field Mapping",id:"log-field-mapping",level:3}];function d(e){const o={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"how-to-import-google-workspace-logs",children:"How to Import Google Workspace Logs"}),"\n",(0,s.jsx)(o.h3,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(o.p,{children:["The Cado platform supports the acquisition and processing of Google Workspace logs. Activity logs from various Google Workspace applications can be captured, as listed ",(0,s.jsx)(o.a,{href:"https://developers.google.com/admin-sdk/reports/reference/rest/v1/activities",children:"here"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:['Note: This feature is currently in Beta. To use it, enable the "SaaS Imports" feature on the ',(0,s.jsx)(o.strong,{children:"/settings/experiments"})," page."]}),"\n",(0,s.jsx)(o.p,{children:"Before importing Google Workspace logs into Cado, follow these steps:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Ensure that ",(0,s.jsx)(o.strong,{children:"Workspace API access"})," for your Google Cloud project is enabled (Admin SDK API access)."]}),"\n"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Open the ",(0,s.jsx)(o.a,{href:"https://console.cloud.google.com/workspace-api/products",children:"product library in Google Cloud"})]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.img,{alt:"SDK 1",src:t(40714).A+"",width:"1916",height:"1190"}),"\n",(0,s.jsx)(o.img,{alt:"SDK 1",src:t(89697).A+"",width:"2632",height:"1078"})]}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsxs)(o.li,{children:["Enable the ",(0,s.jsx)(o.a,{href:"https://developers.google.com/workspace/guides/configure-oauth-consent",children:"Internal OAuth Consent Screen"})," to allow authentication with a service account."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"OAuth Consent Screen",src:t(58223).A+"",width:"1292",height:"1534"})}),"\n",(0,s.jsxs)(o.ol,{start:"3",children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"https://developers.google.com/identity/protocols/oauth2/service-account",children:"Create a service account"})," in Google Cloud, and download the JSON file of the access key created for the service account."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Note the email address of a ",(0,s.jsx)(o.strong,{children:"Google Workspace admin account"})," for the Impersonation Email field, which will be entered into the Cado platform."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Grant the service account permission to access the Workspace API via ",(0,s.jsx)(o.strong,{children:"domain-wide delegation"}),", with read-only access to audit logs:",(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.code,{children:"https://www.googleapis.com/auth/admin.reports.audit.readonly"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"log-acquisition",children:"Log Acquisition"}),"\n",(0,s.jsxs)(o.p,{children:["After completing the setup, you can add the service account credentials to the Cado platform by navigating to ",(0,s.jsx)(o.strong,{children:"Settings > Accounts"})," and selecting ",(0,s.jsx)(o.strong,{children:"Create an account"}),". Select ",(0,s.jsx)(o.strong,{children:"Google Workspace"})," from the set of providers. Provide the following details:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Name"}),": A friendly name for your credentials, such as \u201cGoogle Workspace.\u201d"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Impersonation Email"}),": The Google Workspace admin email."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Service Account Credentials"}),": Upload the JSON file for the service account."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Leave the 'Run account check after adding account' checkbox selected, which will validate the account has the correct permissions after selecting 'Continue'. Navigate to the 'Accounts' table and the newly created Google Workspace account should present. If configured correctly, you will see a green coloured health status."}),"\n",(0,s.jsxs)(o.p,{children:["Once the credentials are set, you can acquire Google Workspace logs. In an investigation, use the import wizard and select ",(0,s.jsx)(o.strong,{children:"SaaS"}),", then choose ",(0,s.jsx)(o.strong,{children:"Google Workspace"}),"."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Google Workspace - Import",src:t(37080).A+"",width:"1910",height:"1164"})}),"\n",(0,s.jsx)(o.p,{children:"Next, select the credentials you entered in the integrations page."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Google Workspace - Select credentials",src:t(13231).A+"",width:"5098",height:"1120"})}),"\n",(0,s.jsx)(o.p,{children:"You will then have the option to refine the acquisition by timeframe, application, or user."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Google Workspace - Import Configuration",src:t(87109).A+"",width:"3132",height:"1240"})}),"\n",(0,s.jsx)(o.p,{children:"Review your selections and proceed with the import. Once the acquisition and processing are complete, the logs will be available for viewing and searching on the main timeline page."}),"\n",(0,s.jsx)(o.h3,{id:"log-field-mapping",children:"Log Field Mapping"}),"\n",(0,s.jsx)(o.p,{children:"To help with analysis, certain Google Workspace fields are mapped to Cado fields:"}),"\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Google Workspace Field"}),(0,s.jsx)(o.th,{children:"Cado Field"}),(0,s.jsx)(o.th,{children:"Cado Facet Name"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"ipAddress"})}),(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"source_hostname"})}),(0,s.jsx)(o.td,{children:"Source Hostname"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"actor.email"})}),(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"user"})}),(0,s.jsx)(o.td,{children:"Users"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"id.applicationName"})}),(0,s.jsx)(o.td,{children:(0,s.jsx)(o.code,{children:"sourcetype"})}),(0,s.jsx)(o.td,{children:"Datatype"})]})]})]}),"\n",(0,s.jsx)(o.p,{children:"For example, you can filter the dataset by the 'Mobile' application by selecting it under the \"Datatype\" facet."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Google Workspace - Timeline Filtering",src:t(90582).A+"",width:"1220",height:"667"})})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},87109:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/gws-import-config-0bd91b68e7637090aa49a35b6a67f8a4.png"},13231:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/gws-import-select-creds-4ef08d6ac74736145fd2332e3d69f582.png"},37080:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/gws-import-00ec980218ac5393140899cfef741900.png"},90582:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/gws-timeline-a83039851137ee397b07c2445faf5549.png"},58223:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/oauth_consent-1359432c28ee523ed987d70de51cbefa.png"},40714:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/workspace_sdk1-f47b33b6981c60ea38750293b80ea803.png"},89697:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/workspace_sdk2-a4854ed809e6105cbd04764a29adbc96.png"},28453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>c});var s=t(96540);const n={},i=s.createContext(n);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);