"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2157],{6629:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=n(5893),s=n(1151);const r={title:"Microsoft 365 and Entra ID",hide_title:!0,sidebar_position:10},a="How to Import Microsoft 365 and Entra ID Logs",o={id:"cado/discovery-import/m365-logs",title:"Microsoft 365 and Entra ID",description:"Introduction",source:"@site/docs/cado/discovery-import/m365-logs.md",sourceDirName:"cado/discovery-import",slug:"/cado/discovery-import/m365-logs",permalink:"/cado/discovery-import/m365-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/m365-logs.md",tags:[],version:"current",lastUpdatedAt:1730149193,formattedLastUpdatedAt:"Oct 28, 2024",sidebarPosition:10,frontMatter:{title:"Microsoft 365 and Entra ID",hide_title:!0,sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Google Workspace logs",permalink:"/cado/discovery-import/google-workspace-logs"},next:{title:"Third party disk images & triage",permalink:"/cado/discovery-import/third-party"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Service Principal Setup",id:"service-principal-setup",level:2},{value:"Register an Application with Microsoft Entra ID and Create a Service Principal",id:"register-an-application-with-microsoft-entra-id-and-create-a-service-principal",level:3},{value:"Entra ID Roles and Administrators",id:"entra-id-roles-and-administrators",level:3},{value:"Assign a Role to the Application",id:"assign-a-role-to-the-application",level:3},{value:"Sign In to the Application",id:"sign-in-to-the-application",level:3},{value:"Set Up Authentication",id:"set-up-authentication",level:3},{value:"Grant Tenant-Wide Admin Consent to an Application",id:"grant-tenant-wide-admin-consent-to-an-application",level:3},{value:"Log Acquisition",id:"log-acquisition",level:2},{value:"Log Field Mapping",id:"log-field-mapping",level:2},{value:"Microsoft 365 Unified Audit Log (UAL)",id:"microsoft-365-unified-audit-log-ual",level:3},{value:"Entra ID Audit Logs",id:"entra-id-audit-logs",level:3},{value:"Entra ID Sign-in Logs",id:"entra-id-sign-in-logs",level:3}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"how-to-import-microsoft-365-and-entra-id-logs",children:"How to Import Microsoft 365 and Entra ID Logs"}),"\n",(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(i.p,{children:"The Cado platform supports acquiring and processing the following logs from Microsoft 365 and Entra ID:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Microsoft 365 Unified Audit Log (UAL)"}),"\n",(0,t.jsx)(i.li,{children:"Entra ID Audit logs"}),"\n",(0,t.jsx)(i.li,{children:"Entra ID Sign-in logs"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Note: This feature is currently in Beta, so you need to enable the 'SaaS Imports' feature in the ",(0,t.jsx)(i.strong,{children:"/settings/experiments"})," page."]}),"\n",(0,t.jsxs)(i.p,{children:["Before acquiring these logs, a Microsoft Entra application and service principal must be set up and configured in the Azure portal. You can refer to the ",(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal",children:"Microsoft documentation"})," for more details."]}),"\n",(0,t.jsx)(i.h2,{id:"service-principal-setup",children:"Service Principal Setup"}),"\n",(0,t.jsx)(i.p,{children:"To support the acquisition of Microsoft 365 and Entra ID logs, follow these steps to set up a service principal:"}),"\n",(0,t.jsx)(i.h3,{id:"register-an-application-with-microsoft-entra-id-and-create-a-service-principal",children:(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#register-an-application-with-microsoft-entra-id-and-create-a-service-principal",children:"Register an Application with Microsoft Entra ID and Create a Service Principal"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"While setting up the service principal, using a redirect URL is optional."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"entra-id-roles-and-administrators",children:"Entra ID Roles and Administrators"}),"\n",(0,t.jsx)(i.p,{children:"To pull logs from Exchange, follow these steps:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open Entra ID."}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.strong,{children:"Roles and Administrators"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Roles and administrators",src:n(35).Z+"",width:"257",height:"427"})}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsxs)(i.li,{children:["Search for ",(0,t.jsx)(i.strong,{children:"Exchange Admin"}),' and select the "Exchange administrator" role.']}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Roles and administrators - Exchange Admin",src:n(5695).Z+"",width:"1213",height:"539"})}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.strong,{children:"Add Assignments"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"Type the name of the app registration assigned to the Exchange connector and add it."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Roles and administrators - Exchange Admin - Assignments",src:n(4010).Z+"",width:"753",height:"321"})}),"\n",(0,t.jsxs)(i.ol,{start:"6",children:["\n",(0,t.jsx)(i.li,{children:"Save the changes and try the connector again after a few minutes."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"assign-a-role-to-the-application",children:(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#assign-a-role-to-the-application",children:"Assign a Role to the Application"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Assign the application to one of your subscriptions."}),"\n",(0,t.jsxs)(i.li,{children:["Apply the ",(0,t.jsx)(i.strong,{children:"Security Reader"})," role to the application."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"sign-in-to-the-application",children:(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#sign-in-to-the-application",children:"Sign In to the Application"})}),"\n",(0,t.jsx)(i.h3,{id:"set-up-authentication",children:(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#option-3-create-a-new-client-secret",children:"Set Up Authentication"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Use ",(0,t.jsx)(i.strong,{children:"Option 3: Create a new client secret"}),"."]}),"\n",(0,t.jsx)(i.li,{children:'Avoid using "Key Vault" and securely store your secret keys elsewhere.'}),"\n",(0,t.jsx)(i.li,{children:"If any changes are made to the service principal, new secret keys must be generated and used."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"grant-tenant-wide-admin-consent-to-an-application",children:(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal",children:"Grant Tenant-Wide Admin Consent to an Application"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to the ",(0,t.jsx)(i.a,{href:"https://entra.microsoft.com/#home",children:"Microsoft Entra admin center"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Under ",(0,t.jsx)(i.strong,{children:"Applications > App Registrations"}),", find and select your newly created application."]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.strong,{children:"API Permissions"})," and select ",(0,t.jsx)(i.strong,{children:"Add a Permission"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["For Microsoft APIs, select ",(0,t.jsx)(i.strong,{children:"Microsoft Graph"})," and add the permission ",(0,t.jsx)(i.code,{children:"AuditLog.Read.All"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Request API Permissions - MS Graph",src:n(3225).Z+"",width:"844",height:"475"})}),"\n",(0,t.jsxs)(i.ol,{start:"5",children:["\n",(0,t.jsxs)(i.li,{children:["For Office 365 logs, add the ",(0,t.jsx)(i.code,{children:"ActivityFeed.Read"})," permission from ",(0,t.jsx)(i.strong,{children:"Office 365 Management APIs"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Request API Permissions - Office 365",src:n(7141).Z+"",width:"841",height:"524"})}),"\n",(0,t.jsxs)(i.ol,{start:"6",children:["\n",(0,t.jsxs)(i.li,{children:["For Office 365 Exchange Online, add the ",(0,t.jsx)(i.code,{children:"full_access_as_app"})," and ",(0,t.jsx)(i.code,{children:"Exchange.ManageAsApp"})," permissions."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Request API Permissions - Office 365 Exchange Online",src:n(6991).Z+"",width:"466",height:"370"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Request API Permissions - Office 365 Exchange Online",src:n(1371).Z+"",width:"841",height:"669"})}),"\n",(0,t.jsxs)(i.ol,{start:"7",children:["\n",(0,t.jsxs)(i.li,{children:["Once the permissions are added, grant admin consent under ",(0,t.jsx)(i.strong,{children:"Entra Admin Center > Enterprise Applications"}),". Refer to ",(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal#grant-tenant-wide-admin-consent-in-enterprise-apps-pane",children:"Grant Tenant-wide Admin Consent"})," for further instructions."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"log-acquisition",children:"Log Acquisition"}),"\n",(0,t.jsx)(i.p,{children:"Once the Microsoft Entra application and service principal are set up in the Azure portal, you can add the credentials to the Cado platform:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Navigate to ",(0,t.jsx)(i.strong,{children:"Settings > Integrations > Microsoft SaaS"})," (/settings/integrations/microsoft)."]}),"\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.strong,{children:"Add Credential"})," and enter the following details:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Name"}),': A friendly name, such as "MS SaaS."']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Tenant ID"}),": Found in the ",(0,t.jsx)(i.strong,{children:"Directory (tenant) ID"})," field in Azure app registration."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Client ID"}),": Found in the ",(0,t.jsx)(i.strong,{children:"Application (client) ID"})," field in Azure app registration."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Client Secret"}),": Found in the ",(0,t.jsx)(i.strong,{children:"Client credentials"})," field in Azure app registration."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Organization"}),": Organization value ending in ",(0,t.jsx)(i.strong,{children:".onmicrosoft.com"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"MS SaaS - Add Creds",src:n(4401).Z+"",width:"3852",height:"1808"})}),"\n",(0,t.jsxs)(i.p,{children:["To import logs, use the import wizard within an investigation and select ",(0,t.jsx)(i.strong,{children:"SaaS"}),". You will see options for:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Microsoft 365 Logs"}),"\n",(0,t.jsx)(i.li,{children:"Microsoft Entra ID"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"MS SaaS - Import",src:n(9693).Z+"",width:"1564",height:"1122"})}),"\n",(0,t.jsx)(i.p,{children:"After selecting a SaaS application, choose the credentials entered on the integrations page."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"MS SaaS - Import - Select Creds",src:n(9418).Z+"",width:"5092",height:"1116"})}),"\n",(0,t.jsx)(i.p,{children:"You will be presented with options to refine the acquisition based on the SaaS application. For example, for Microsoft 365 UAL acquisition, you can filter by timeframe, user, IP, or workload."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"MS SaaS - Import - Config",src:n(7980).Z+"",width:"3130",height:"1498"})}),"\n",(0,t.jsx)(i.p,{children:"After reviewing your selections, proceed with the import. Once completed, the logs will be available in the main timeline for viewing and searching."}),"\n",(0,t.jsx)(i.h2,{id:"log-field-mapping",children:"Log Field Mapping"}),"\n",(0,t.jsx)(i.h3,{id:"microsoft-365-unified-audit-log-ual",children:"Microsoft 365 Unified Audit Log (UAL)"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"UAL Field"}),(0,t.jsx)(i.th,{children:"Cado Field"}),(0,t.jsx)(i.th,{children:"Cado Facet Name"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ClientIP"}),(0,t.jsx)(i.td,{children:"source_hostname"}),(0,t.jsx)(i.td,{children:"Source Hostname"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"UserID"}),(0,t.jsx)(i.td,{children:"user"}),(0,t.jsx)(i.td,{children:"Users"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Workload"}),(0,t.jsx)(i.td,{children:"sourcetype"}),(0,t.jsx)(i.td,{children:"Datatype"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"entra-id-audit-logs",children:"Entra ID Audit Logs"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Audit Log Field"}),(0,t.jsx)(i.th,{children:"Cado Field"}),(0,t.jsx)(i.th,{children:"Cado Facet Name"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"InitiatedBy.User.IPAddress"}),(0,t.jsx)(i.td,{children:"source_hostname"}),(0,t.jsx)(i.td,{children:"Source Hostname"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"InitiatedBy.User.UserPrincipalName"}),(0,t.jsx)(i.td,{children:"user"}),(0,t.jsx)(i.td,{children:"Users"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"entra-id-sign-in-logs",children:"Entra ID Sign-in Logs"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Sign-in Log Field"}),(0,t.jsx)(i.th,{children:"Cado Field"}),(0,t.jsx)(i.th,{children:"Cado Facet Name"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"IPAddress"}),(0,t.jsx)(i.td,{children:"source_hostname"}),(0,t.jsx)(i.td,{children:"Source Hostname"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"UserPrincipalName"}),(0,t.jsx)(i.td,{children:"user"}),(0,t.jsx)(i.td,{children:"Users"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ResourceDisplayName"}),(0,t.jsx)(i.td,{children:"sourcetype"}),(0,t.jsx)(i.td,{children:"Datatype"})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:['For example, you can filter data by the "AzureActiveDirectory" workload by selecting it in the ',(0,t.jsx)(i.strong,{children:"Datatype"})," facet."]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3225:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-API-Permissions1-b690ff91c116bb18d10b9cc8e1f2cc7e.png"},7141:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-API-Permissions2-4ab86de8aa085cc452da2833c5a7e88a.png"},6991:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-API-Permissions3-62e396a22969073af8924d841c1f9ef3.png"},1371:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-API-Permissions4-21da59f7d85044f656658cf7f19b6d78.png"},4010:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-Roles-Exchange-Assignments-68efa616372baab716ec77428aac0f8a.png"},5695:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-Roles-Exchange-7062c04a4b32d72e18c2be6caa599900.png"},35:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-Roles-d5b08a7de5b8e3667b75fdf9172218ae.png"},4401:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Microsoft-SaaS-Add-Creds-66b136364d7423f6f287cd03a4537e7d.png"},7980:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Microsoft-SaaS-Import-Config-80234ed5c5835043fd3b46937bc1b674.png"},9418:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Microsoft-SaaS-Import-Select-Creds-edcd199d04c64452ecc10e1e821f2340.png"},9693:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Microsoft-SaaS-Import-4d21c2b0df74f905be84cd26499ba408.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>a});var t=n(7294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);