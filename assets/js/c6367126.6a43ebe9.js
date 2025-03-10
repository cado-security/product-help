"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1455],{4554:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(74848),s=i(28453);const r={title:"Microsoft 365 and Entra ID",hide_title:!0,sidebar_position:10},a="How to Import Microsoft 365 and Entra ID Logs",o={id:"cado/discovery-import/m365-logs",title:"Microsoft 365 and Entra ID",description:"Introduction",source:"@site/docs/cado/discovery-import/m365-logs.md",sourceDirName:"cado/discovery-import",slug:"/cado/discovery-import/m365-logs",permalink:"/cado/discovery-import/m365-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/m365-logs.md",tags:[],version:"current",lastUpdatedAt:1741600570,formattedLastUpdatedAt:"Mar 10, 2025",sidebarPosition:10,frontMatter:{title:"Microsoft 365 and Entra ID",hide_title:!0,sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Google Workspace logs",permalink:"/cado/discovery-import/google-workspace-logs"},next:{title:"Third party disk images & triage",permalink:"/cado/discovery-import/third-party"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Service Principal Setup",id:"service-principal-setup",level:2},{value:"Register an Application with Microsoft Entra ID and Create a Service Principal",id:"register-an-application-with-microsoft-entra-id-and-create-a-service-principal",level:3},{value:"Entra ID Roles and Administrators",id:"entra-id-roles-and-administrators",level:3},{value:"Assign a Role to the Application",id:"assign-a-role-to-the-application",level:3},{value:"Sign In to the Application",id:"sign-in-to-the-application",level:3},{value:"Set Up Authentication",id:"set-up-authentication",level:3},{value:"Grant Tenant-Wide Admin Consent to an Application",id:"grant-tenant-wide-admin-consent-to-an-application",level:3},{value:"Log Acquisition",id:"log-acquisition",level:2},{value:"Log Field Mapping",id:"log-field-mapping",level:2},{value:"Microsoft 365 Unified Audit Log (UAL)",id:"microsoft-365-unified-audit-log-ual",level:3},{value:"Entra ID Audit Logs",id:"entra-id-audit-logs",level:3},{value:"Entra ID Sign-in Logs",id:"entra-id-sign-in-logs",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-import-microsoft-365-and-entra-id-logs",children:"How to Import Microsoft 365 and Entra ID Logs"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The Cado platform supports acquiring and processing the following logs from Microsoft 365 and Entra ID:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Microsoft 365 Unified Audit Log (UAL)"}),"\n",(0,t.jsx)(n.li,{children:"Entra ID Audit logs"}),"\n",(0,t.jsx)(n.li,{children:"Entra ID Sign-in logs"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Note: This feature is currently in Beta, so you need to enable the 'SaaS Imports' feature in the ",(0,t.jsx)(n.strong,{children:"/settings/experiments"})," page."]}),"\n",(0,t.jsxs)(n.p,{children:["Before acquiring these logs, a Microsoft Entra application and service principal must be set up and configured in the Azure portal. You can refer to the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal",children:"Microsoft documentation"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"service-principal-setup",children:"Service Principal Setup"}),"\n",(0,t.jsx)(n.p,{children:"To support the acquisition of Microsoft 365 and Entra ID logs, follow these steps to set up a service principal:"}),"\n",(0,t.jsx)(n.h3,{id:"register-an-application-with-microsoft-entra-id-and-create-a-service-principal",children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#register-an-application-with-microsoft-entra-id-and-create-a-service-principal",children:"Register an Application with Microsoft Entra ID and Create a Service Principal"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"While setting up the service principal, using a redirect URL is optional."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"entra-id-roles-and-administrators",children:"Entra ID Roles and Administrators"}),"\n",(0,t.jsx)(n.p,{children:"To pull logs from Exchange, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open Entra ID."}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Roles and Administrators"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Roles and administrators",src:i(27921).A+"",width:"257",height:"427"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Search for ",(0,t.jsx)(n.strong,{children:"Exchange Admin"}),' and select the "Exchange administrator" role.']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Roles and administrators - Exchange Admin",src:i(17855).A+"",width:"1213",height:"539"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Add Assignments"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Type the name of the app registration assigned to the Exchange connector and add it."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Roles and administrators - Exchange Admin - Assignments",src:i(20874).A+"",width:"753",height:"321"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Save the changes and try the connector again after a few minutes."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"assign-a-role-to-the-application",children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#assign-a-role-to-the-application",children:"Assign a Role to the Application"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Assign the application to one of your subscriptions."}),"\n",(0,t.jsxs)(n.li,{children:["Apply the ",(0,t.jsx)(n.strong,{children:"Security Reader"})," role to the application."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sign-in-to-the-application",children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#sign-in-to-the-application",children:"Sign In to the Application"})}),"\n",(0,t.jsx)(n.h3,{id:"set-up-authentication",children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#option-3-create-a-new-client-secret",children:"Set Up Authentication"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.strong,{children:"Option 3: Create a new client secret"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'Avoid using "Key Vault" and securely store your secret keys elsewhere.'}),"\n",(0,t.jsx)(n.li,{children:"If any changes are made to the service principal, new secret keys must be generated and used."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"grant-tenant-wide-admin-consent-to-an-application",children:(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal",children:"Grant Tenant-Wide Admin Consent to an Application"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://entra.microsoft.com/#home",children:"Microsoft Entra admin center"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Applications > App Registrations"}),", find and select your newly created application."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"API Permissions"})," and select ",(0,t.jsx)(n.strong,{children:"Add a Permission"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For Microsoft APIs, select ",(0,t.jsx)(n.strong,{children:"Microsoft Graph"})," and add the permission ",(0,t.jsx)(n.code,{children:"AuditLog.Read.All"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Request API Permissions - MS Graph",src:i(78100).A+"",width:"844",height:"475"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["For Office 365 logs, add the ",(0,t.jsx)(n.code,{children:"ActivityFeed.Read"})," permission from ",(0,t.jsx)(n.strong,{children:"Office 365 Management APIs"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Request API Permissions - Office 365",src:i(559).A+"",width:"841",height:"524"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["For Office 365 Exchange Online, add the ",(0,t.jsx)(n.code,{children:"full_access_as_app"})," and ",(0,t.jsx)(n.code,{children:"Exchange.ManageAsApp"})," permissions."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Request API Permissions - Office 365 Exchange Online",src:i(15462).A+"",width:"466",height:"370"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Request API Permissions - Office 365 Exchange Online",src:i(20441).A+"",width:"841",height:"669"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["Once the permissions are added, grant admin consent under ",(0,t.jsx)(n.strong,{children:"Entra Admin Center > Enterprise Applications"}),". Refer to ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal#grant-tenant-wide-admin-consent-in-enterprise-apps-pane",children:"Grant Tenant-wide Admin Consent"})," for further instructions."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"log-acquisition",children:"Log Acquisition"}),"\n",(0,t.jsx)(n.p,{children:"Once the Microsoft Entra application and service principal are set up in the Azure portal, you can add the credentials to the Cado platform:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.strong,{children:"Settings > Accounts"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Create an account"}),", then ",(0,t.jsx)(n.strong,{children:"Microsoft SaaS"})," from the set of providers and enter the following details:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),': A friendly name, such as "MS SaaS."']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tenant ID"}),": Found in the ",(0,t.jsx)(n.strong,{children:"Directory (tenant) ID"})," field in Azure app registration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Client ID"}),": Found in the ",(0,t.jsx)(n.strong,{children:"Application (client) ID"})," field in Azure app registration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Client Secret"}),": Found in the ",(0,t.jsx)(n.strong,{children:"Client credentials"})," field in Azure app registration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Organization"}),": Organization value ending in ",(0,t.jsx)(n.strong,{children:".onmicrosoft.com"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Leave the 'Run account check after adding account' checkbox selected, which will validate the account has the correct permissions after selecting 'Continue'. Navigate to the 'Accounts' table and the newly created Microsoft SaaS account should present. If configured correctly, you will see a green coloured health status."}),"\n",(0,t.jsx)(n.p,{children:"Once the credentials are set, you can acquire Microsoft SaaS logs."}),"\n",(0,t.jsxs)(n.p,{children:["To import logs, use the import wizard within an investigation and select ",(0,t.jsx)(n.strong,{children:"SaaS"}),". You will see options for:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Microsoft 365 Logs"}),"\n",(0,t.jsx)(n.li,{children:"Microsoft Entra ID"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MS SaaS - Import",src:i(18824).A+"",width:"1564",height:"1122"})}),"\n",(0,t.jsx)(n.p,{children:"After selecting a SaaS application, choose the credentials entered on the integrations page."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MS SaaS - Import - Select Creds",src:i(96031).A+"",width:"5092",height:"1116"})}),"\n",(0,t.jsx)(n.p,{children:"You will be presented with options to refine the acquisition based on the SaaS application. For example, for Microsoft 365 UAL acquisition, you can filter by timeframe, user, IP, or workload."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MS SaaS - Import - Config",src:i(69781).A+"",width:"3130",height:"1498"})}),"\n",(0,t.jsx)(n.p,{children:"After reviewing your selections, proceed with the import. Once completed, the logs will be available in the main timeline for viewing and searching."}),"\n",(0,t.jsx)(n.h2,{id:"log-field-mapping",children:"Log Field Mapping"}),"\n",(0,t.jsx)(n.h3,{id:"microsoft-365-unified-audit-log-ual",children:"Microsoft 365 Unified Audit Log (UAL)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"UAL Field"}),(0,t.jsx)(n.th,{children:"Cado Field"}),(0,t.jsx)(n.th,{children:"Cado Facet Name"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ClientIP"}),(0,t.jsx)(n.td,{children:"source_hostname"}),(0,t.jsx)(n.td,{children:"Source Hostname"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"UserID"}),(0,t.jsx)(n.td,{children:"user"}),(0,t.jsx)(n.td,{children:"Users"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Workload"}),(0,t.jsx)(n.td,{children:"sourcetype"}),(0,t.jsx)(n.td,{children:"Datatype"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"entra-id-audit-logs",children:"Entra ID Audit Logs"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Audit Log Field"}),(0,t.jsx)(n.th,{children:"Cado Field"}),(0,t.jsx)(n.th,{children:"Cado Facet Name"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"InitiatedBy.User.IPAddress"}),(0,t.jsx)(n.td,{children:"source_hostname"}),(0,t.jsx)(n.td,{children:"Source Hostname"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"InitiatedBy.User.UserPrincipalName"}),(0,t.jsx)(n.td,{children:"user"}),(0,t.jsx)(n.td,{children:"Users"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"entra-id-sign-in-logs",children:"Entra ID Sign-in Logs"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Sign-in Log Field"}),(0,t.jsx)(n.th,{children:"Cado Field"}),(0,t.jsx)(n.th,{children:"Cado Facet Name"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"IPAddress"}),(0,t.jsx)(n.td,{children:"source_hostname"}),(0,t.jsx)(n.td,{children:"Source Hostname"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"UserPrincipalName"}),(0,t.jsx)(n.td,{children:"user"}),(0,t.jsx)(n.td,{children:"Users"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ResourceDisplayName"}),(0,t.jsx)(n.td,{children:"sourcetype"}),(0,t.jsx)(n.td,{children:"Datatype"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:['For example, you can filter data by the "AzureActiveDirectory" workload by selecting it in the ',(0,t.jsx)(n.strong,{children:"Datatype"})," facet."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},78100:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Entra-API-Permissions1-b690ff91c116bb18d10b9cc8e1f2cc7e.png"},559:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Entra-API-Permissions2-4ab86de8aa085cc452da2833c5a7e88a.png"},15462:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Entra-API-Permissions3-62e396a22969073af8924d841c1f9ef3.png"},20441:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Entra-API-Permissions4-21da59f7d85044f656658cf7f19b6d78.png"},20874:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Entra-Roles-Exchange-Assignments-68efa616372baab716ec77428aac0f8a.png"},17855:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Entra-Roles-Exchange-5ceeb6a4ef96c8c10d5d84c44ee1b6b4.png"},27921:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Entra-Roles-d5b08a7de5b8e3667b75fdf9172218ae.png"},69781:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Microsoft-SaaS-Import-Config-a2c3825125a6cdee8f03ee081435349a.png"},96031:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Microsoft-SaaS-Import-Select-Creds-5a80f8c9c3482216d129f61a0d1df90f.png"},18824:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Microsoft-SaaS-Import-8af8aab5ffd9884f43d468ca1966af5e.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);