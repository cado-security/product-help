"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2742],{8630:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var s=o(5893),i=o(1151);const n={title:"Google Workspace Logs",hide_title:!0,sidebar_position:10},r="Google Workspace Logs",a={id:"cado-response/discovery-import/import/google-workspace-logs",title:"Google Workspace Logs",description:"Introduction",source:"@site/docs/cado-response/discovery-import/import/google-workspace-logs.md",sourceDirName:"cado-response/discovery-import/import",slug:"/cado-response/discovery-import/import/google-workspace-logs",permalink:"/cado-response/discovery-import/import/google-workspace-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/google-workspace-logs.md",tags:[],version:"current",lastUpdatedAt:1723453534,formattedLastUpdatedAt:"Aug 12, 2024",sidebarPosition:10,frontMatter:{title:"Google Workspace Logs",hide_title:!0,sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"XDR Integrations",permalink:"/cado-response/discovery-import/import/xdr"},next:{title:"Microsoft SaaS Logs",permalink:"/cado-response/discovery-import/import/m365-logs"}},c={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Log Acquisition",id:"log-acquisition",level:3}];function d(e){const t={a:"a",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"google-workspace-logs",children:"Google Workspace Logs"}),"\n",(0,s.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["The Cado platform supports acquisition and processing of Google Workspace logs. Activity logs can be captured from the various Google Workspace applications listed ",(0,s.jsx)(t.a,{href:"https://developers.google.com/admin-sdk/reports/reference/rest/v1/activities",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Note: the feature is currently in Beta, so the \u2018SaaS Imports\u2019 feature needs to be enabled in the /settings/experiments page."}),"\n",(0,s.jsx)(t.p,{children:"Before these logs can be acquired using the Cado platform, the following steps need to be taken:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Ensure Workspace API access for the Google Cloud project is enabled (admin SDK API access)"}),"\n",(0,s.jsx)(t.li,{children:"Enable internal OAuth consent screen (which will enable us to auth with a service account)"}),"\n",(0,s.jsx)(t.li,{children:"Create service account (in Google Cloud). Download the JSON file of the access key that is created against the service account"}),"\n",(0,s.jsx)(t.li,{children:"Take note of the email of a Google Workspace admin account for the Impersonation Email, which is entered into the Cado platform"}),"\n",(0,s.jsxs)(t.li,{children:["Provide permission for the service account to access the Workspace API (domain wide delegation is required, however access can be limited to the audit logs and only the ability to read, ",(0,s.jsx)(t.a,{href:"https://www.googleapis.com/auth/admin.reports.audit.readonly",children:"https://www.googleapis.com/auth/admin.reports.audit.readonly"}),")"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"log-acquisition",children:"Log Acquisition"}),"\n",(0,s.jsx)(t.p,{children:"Once the above steps have been completed, the service account credentials need to be added to the Cado platform. To do this, navigate to \u2018Settings\u2019 > \u2018Integrations\u2019 > \u2018Google Workspace\u2019 (/settings/integrations/google-workspace) and select \u2018Add Credentials\u2019. Enter the following details:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Name (give this any friendly name, for example \u2018Google Workspace\u2019)"}),"\n",(0,s.jsx)(t.li,{children:"Impersonation Email"}),"\n",(0,s.jsx)(t.li,{children:"Service Account Credentials"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Google Workspace - Add Creds",src:o(7999).Z+"",width:"3844",height:"1876"})}),"\n",(0,s.jsx)(t.p,{children:"We are now ready to acquire Google Workspace logs. Use the import wizard from within an investigation and select \u2018SaaS\u2019, then \u2018Google Workspace\u2019."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Google Workspace - Import",src:o(725).Z+"",width:"1910",height:"1164"})}),"\n",(0,s.jsx)(t.p,{children:"Next, select the credentials entered in the integrations page."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Google Workspace - Select credentials",src:o(9095).Z+"",width:"5098",height:"1120"})}),"\n",(0,s.jsx)(t.p,{children:"The user will be presented with various options to refine the acquisition. For example, the user is able to refine by timeframe, application and user."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Google Workspace - Import Configuration",src:o(3514).Z+"",width:"3132",height:"1240"})}),"\n",(0,s.jsx)(t.p,{children:"Finally, the user is requested to review their selections and proceed with the import."}),"\n",(0,s.jsx)(t.p,{children:"When the acquisition and processing is completed, the logs will be available to view and search in the main timeline page. To help users with their search and analysis, we have mapped the following fields to Cado fields:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Google Workspace field"}),(0,s.jsx)(t.th,{children:"Cado Field"}),(0,s.jsx)(t.th,{children:"Cado Facet Name"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ipAddress"}),(0,s.jsx)(t.td,{children:"source_hostname"}),(0,s.jsx)(t.td,{children:"Source Hostname"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"actor.email"}),(0,s.jsx)(t.td,{children:"user"}),(0,s.jsx)(t.td,{children:"Users"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id.applicationName"}),(0,s.jsx)(t.td,{children:"sourcetype"}),(0,s.jsx)(t.td,{children:"Datatype"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"For example, the user is able to filter the dataset by the \u2018Mobile' application by selecting this value in the \u2018Datatype\u2019 facet."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Google Workspace - Timeline Filtering",src:o(871).Z+"",width:"2906",height:"1588"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7999:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/gws-add-creds-6f7439102c83af59244f8c1db827e23e.png"},3514:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/gws-import-config-15d5f8e8effe51a8f9ce32f4edddbae3.png"},9095:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/gws-import-select-creds-cd592c792560fc2f7031dbfcaffd4b8c.png"},725:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/gws-import-bac5b586a56f4a34c72d557f0a996ed5.png"},871:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/gws-timeline-a8fec9b507463b43232ac69f42472009.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>r});var s=o(7294);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);