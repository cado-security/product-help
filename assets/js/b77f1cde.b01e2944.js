"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[921],{7863:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(5893),s=n(1151);const r={title:"Microsoft SaaS Logs",hide_title:!0,sidebar_position:10},a="Microsoft 365 and Entra ID Logs",o={id:"cado-response/discovery-import/import/m365-logs",title:"Microsoft SaaS Logs",description:"Introduction",source:"@site/docs/cado-response/discovery-import/import/m365-logs.md",sourceDirName:"cado-response/discovery-import/import",slug:"/cado-response/discovery-import/import/m365-logs",permalink:"/cado-response/discovery-import/import/m365-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/m365-logs.md",tags:[],version:"current",lastUpdatedAt:1726134465,formattedLastUpdatedAt:"Sep 12, 2024",sidebarPosition:10,frontMatter:{title:"Microsoft SaaS Logs",hide_title:!0,sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Google Workspace Logs",permalink:"/cado-response/discovery-import/import/google-workspace-logs"},next:{title:"Third Party Tools",permalink:"/cado-response/discovery-import/import/third-party"}},c={},d=[{value:"Introduction",id:"introduction",level:3},{value:"Service Principal Set-up",id:"service-principal-set-up",level:3},{value:"Register an application with Microsoft Entra ID and create a service principal",id:"register-an-application-with-microsoft-entra-id-and-create-a-service-principal",level:4},{value:"Entra ID Roles and administrators",id:"entra-id-roles-and-administrators",level:4},{value:"Assign a role to the application",id:"assign-a-role-to-the-application",level:4},{value:"Sign in to the application",id:"sign-in-to-the-application",level:4},{value:"Set up Authentication",id:"set-up-authentication",level:4},{value:"Grant tenant-wide admin consent to an application",id:"grant-tenant-wide-admin-consent-to-an-application",level:4},{value:"Log Acquisition",id:"log-acquisition",level:3},{value:"M365 UAL",id:"m365-ual",level:4},{value:"Entra ID Audit Logs",id:"entra-id-audit-logs",level:4},{value:"Entra ID Sign-in Logs",id:"entra-id-sign-in-logs",level:4}];function l(e){const i={a:"a",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"microsoft-365-and-entra-id-logs",children:"Microsoft 365 and Entra ID Logs"}),"\n",(0,t.jsx)(i.h3,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(i.p,{children:"The Cado platform supports acquisition and processing of the following Microsoft 365 and Entra ID logs:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Microsoft 365 Unified Audit Log (UAL)"}),"\n",(0,t.jsx)(i.li,{children:"Entra ID Audit logs"}),"\n",(0,t.jsx)(i.li,{children:"Entra ID Sign-in logs"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Note: the feature is currently in Beta, so the \u2018SaaS Imports\u2019 feature needs to be enabled in the /settings/experiments page."}),"\n",(0,t.jsxs)(i.p,{children:["Before these logs can be acquired using the Cado platform, a Microsoft Entra application and service principal needs to be set-up and configured in the Azure portal, which is explained in the following section. For more information, please refer to ",(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal",children:"Microsoft documentation"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"service-principal-set-up",children:"Service Principal Set-up"}),"\n",(0,t.jsxs)(i.p,{children:["To support the acquisition of Microsoft 365 and Entra ID logs, a service principal needs to be set-up/configured. Instructions can be found here: ",(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#set-up-authentication",children:"Create a Microsoft Entra application and service principal that can access resources"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"For each section linked below please follow the Microsoft instructions. We have added additional configuration information for each section to help with the setup."}),"\n",(0,t.jsx)(i.h4,{id:"register-an-application-with-microsoft-entra-id-and-create-a-service-principal",children:(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#register-an-application-with-microsoft-entra-id-and-create-a-service-principal",children:"Register an application with Microsoft Entra ID and create a service principal"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"In our testing, we did not use a redirect URL while setting up the service principal. This is optional."}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"entra-id-roles-and-administrators",children:"Entra ID Roles and administrators"}),"\n",(0,t.jsx)(i.p,{children:"These steps are required to pull logs from Exchange:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open Entra ID."}),"\n",(0,t.jsx)(i.li,{children:"Click on the Roles and administrators"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Roles and administrators",src:n(35).Z+"",width:"257",height:"427"})}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsx)(i.li,{children:"In the search bar, type Exchange admin. Now click on the \u201cExchange administrator\u201d role."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Roles and administrators - Exchange Admin",src:n(5695).Z+"",width:"1213",height:"539"})}),"\n",(0,t.jsxs)(i.ol,{start:"4",children:["\n",(0,t.jsx)(i.li,{children:"Choose the Add Assignments button."}),"\n",(0,t.jsx)(i.li,{children:"In the window that appears, type in the name of the app registration that is assigned to the Exchange connector.  When there are multiple connectors, add the name of each app registration that is assigned to each Exchange connector."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Roles and administrators - Exchange Admin - Assignments",src:n(4010).Z+"",width:"753",height:"321"})}),"\n",(0,t.jsxs)(i.ol,{start:"6",children:["\n",(0,t.jsx)(i.li,{children:"Save the change."}),"\n",(0,t.jsx)(i.li,{children:"Allow this to take effect and try the connector again within a few minutes."}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"assign-a-role-to-the-application",children:(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#assign-a-role-to-the-application",children:"Assign a role to the application"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"In our testing, we assigned the application to one of our subscriptions"}),"\n",(0,t.jsx)(i.li,{children:"We applied the \u201cSecurity Reader\u201d role assignment to our application."}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"sign-in-to-the-application",children:(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#sign-in-to-the-application",children:"Sign in to the application"})}),"\n",(0,t.jsx)(i.h4,{id:"set-up-authentication",children:(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal#option-3-create-a-new-client-secret",children:"Set up Authentication"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"In our testing, we used option 3 \u201cCreate a new client secret\u201d"}),"\n",(0,t.jsx)(i.li,{children:"We did not use \u201ckey vault\u201d. We stored our secret keys securely elsewhere."}),"\n",(0,t.jsx)(i.li,{children:"Please note: If any changes are made to the service principal a new set of secrets need to be created/used"}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"grant-tenant-wide-admin-consent-to-an-application",children:(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal",children:"Grant tenant-wide admin consent to an application"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Navigate to to the ",(0,t.jsx)(i.a,{href:"https://entra.microsoft.com/#home",children:"Microsoft Entra admin centre"})]}),"\n",(0,t.jsx)(i.li,{children:"In the left hand panel select \u201cApplications\u201d then \u201cApp registrations\u201d"}),"\n",(0,t.jsx)(i.li,{children:"Under \u201cAll applications\u201d search for your newly created application (Service principal) and click on it."}),"\n",(0,t.jsx)(i.li,{children:"Click \u201cAPI permissions\u201d from the sidebar, then click \u201cAdd a permission\u201d"}),"\n",(0,t.jsx)(i.li,{children:"On the pop up screen under \u201cMicrosoft APIs\u201d select \u201cMicrosoft Graph\u201d, then select \u201cApplication permissions\u201d. Select and add the Audit log permission \u201cAuditLog.Read.All\u201d."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Request API Permissions - MS Graph",src:n(3225).Z+"",width:"844",height:"475"})}),"\n",(0,t.jsxs)(i.ol,{start:"6",children:["\n",(0,t.jsx)(i.li,{children:"To add permissions for Office 365  Click \u201cAdd a permission\u201d\nunder \u201cMicrosoft APIs\u201d, select \u201cOffice 365 Management APIs\u201d, then select \u201cApplication permissions\u201d. Select and add the \u201dActivityFeed.Read\u201d permission."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Request API Permissions - Office 365",src:n(7141).Z+"",width:"841",height:"524"})}),"\n",(0,t.jsxs)(i.ol,{start:"7",children:["\n",(0,t.jsx)(i.li,{children:"To add permissions for Office 365 Exchange Online. Click \u201cAdd a permission\u201d\nunder \u201cAPIs my organisation uses\u201d search for \u201cOffice 365 Exchange Online\u201d, then select \u201cApplication permissions\u201d. Select and add the following permissions: \u201dfull_access_as_app\u201d & \u201cExchange.ManageAsApp\u201d."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Request API Permissions - Office 365 Exchange Online",src:n(6991).Z+"",width:"466",height:"370"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Request API Permissions - Office 365 Exchange Online",src:n(1371).Z+"",width:"841",height:"669"})}),"\n",(0,t.jsxs)(i.ol,{start:"8",children:["\n",(0,t.jsx)(i.li,{children:"How your permissions should look once added:"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Request API Permissions - Configured Permissions",src:n(9474).Z+"",width:"1036",height:"422"})}),"\n",(0,t.jsxs)(i.ol,{start:"9",children:["\n",(0,t.jsxs)(i.li,{children:["Once permissions are added you will need to \u201cGrant Admin Consent\u201d. This is done under Entra Admin Center > Enterprise Applications. For further instructions see: ",(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal#grant-tenant-wide-admin-consent-in-enterprise-apps-pane",children:"Grant Tenant-wide Admin Consent"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"log-acquisition",children:"Log Acquisition"}),"\n",(0,t.jsx)(i.p,{children:"Once the Microsoft Entra application and service principal has been set-up and configured in the Azure portal, these credentials need to be added to the Cado platform. To do this, navigate to \u2018Settings\u2019 > \u2018Integrations\u2019 > \u2018Microsoft SaaS\u2019 (/settings/integrations/microsoft) and select \u2018Add Credential\u2019. Enter the following details:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Name (give this any friendly name, for example \u2018MS SaaS\u2019)"}),"\n",(0,t.jsx)(i.li,{children:"Tenant ID (this can be found in the \u2018Directory (tenant) ID\u2019 field in Azure app registration)"}),"\n",(0,t.jsx)(i.li,{children:"Client ID (this can be found in the \u2018Application (client) ID\u2019 field in Azure app registration)"}),"\n",(0,t.jsx)(i.li,{children:"Client Secret (this can be found in the \u2018Client credentials\u2019 field in Azure app registration)"}),"\n",(0,t.jsx)(i.li,{children:"Organization (organization value ending in .onmicrosoft.com)"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"MS SaaS - Add Creds",src:n(4401).Z+"",width:"3852",height:"1808"})}),"\n",(0,t.jsx)(i.p,{children:"We are now ready to acquire Microsoft 365 and Entra ID logs. Use the import wizard from within an investigation and select \u2018SaaS\u2019. The user will be presented with two options:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Microsoft 365 Logs"}),"\n",(0,t.jsx)(i.li,{children:"Microsoft Entra ID"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"MS SaaS - Import",src:n(446).Z+"",width:"1564",height:"1122"})}),"\n",(0,t.jsx)(i.p,{children:"Once a SaaS application is selected, the user will be required to select the credentials entered in the integrations page."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"MS SaaS - Import - Select Creds",src:n(9418).Z+"",width:"5092",height:"1116"})}),"\n",(0,t.jsx)(i.p,{children:"Depending on the SaaS applications selected, the user will be presented with various options to refine the acquisition. For example, for M365 UAL acquisition, the user is able to refine by timeframe, user, IP, or workload."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"MS SaaS - Import - Config",src:n(7980).Z+"",width:"3130",height:"1498"})}),"\n",(0,t.jsx)(i.p,{children:"Finally, the user is requested to review their selections and proceed with the import."}),"\n",(0,t.jsx)(i.p,{children:"When the acquisition and processing is completed, the logs will be available to view and search in the main timeline page. To help users with their search and analysis, we have mapped the following fields to Cado fields:"}),"\n",(0,t.jsx)(i.h4,{id:"m365-ual",children:"M365 UAL"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"UAL Field"}),(0,t.jsx)(i.th,{children:"Cado Field"}),(0,t.jsx)(i.th,{children:"Cado Facet Name"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ClientIP"}),(0,t.jsx)(i.td,{children:"source_hostname"}),(0,t.jsx)(i.td,{children:"Source Hostname"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"UserID"}),(0,t.jsx)(i.td,{children:"user"}),(0,t.jsx)(i.td,{children:"Users"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Workload"}),(0,t.jsx)(i.td,{children:"sourcetype"}),(0,t.jsx)(i.td,{children:"Datatype"})]})]})]}),"\n",(0,t.jsx)(i.h4,{id:"entra-id-audit-logs",children:"Entra ID Audit Logs"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Audit log field"}),(0,t.jsx)(i.th,{children:"Cado Field"}),(0,t.jsx)(i.th,{children:"Cado Facet Name"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"InitiatedBy.User.IPAddress"}),(0,t.jsx)(i.td,{children:"source_hostname"}),(0,t.jsx)(i.td,{children:"Source Hostname"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"InitiatedBy.User.UserPrincipalName"}),(0,t.jsx)(i.td,{children:"user"}),(0,t.jsx)(i.td,{children:"Users"})]})]})]}),"\n",(0,t.jsx)(i.h4,{id:"entra-id-sign-in-logs",children:"Entra ID Sign-in Logs"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Sign-in log field"}),(0,t.jsx)(i.th,{children:"Cado Field"}),(0,t.jsx)(i.th,{children:"Cado Facet Name"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"IPAddress"}),(0,t.jsx)(i.td,{children:"source_hostname"}),(0,t.jsx)(i.td,{children:"Source Hostname"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"UserPrincipalName"}),(0,t.jsx)(i.td,{children:"user"}),(0,t.jsx)(i.td,{children:"Users"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ResourceDisplayName"}),(0,t.jsx)(i.td,{children:"sourcetype"}),(0,t.jsx)(i.td,{children:"Datatype"})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"For example, the user is able to filter the dataset by the \u2018AzureActiveDirectory\u2019 workload by selecting this value in the \u2018Datatype\u2019 facet."})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9474:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-API-Configured-Permissions-76daf989812225a9dcf0de759037f3e4.png"},3225:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-API-Permissions1-b690ff91c116bb18d10b9cc8e1f2cc7e.png"},7141:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-API-Permissions2-4ab86de8aa085cc452da2833c5a7e88a.png"},6991:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-API-Permissions3-62e396a22969073af8924d841c1f9ef3.png"},1371:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-API-Permissions4-21da59f7d85044f656658cf7f19b6d78.png"},4010:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-Roles-Exchange-Assignments-68efa616372baab716ec77428aac0f8a.png"},5695:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-Roles-Exchange-7062c04a4b32d72e18c2be6caa599900.png"},35:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Entra-Roles-d5b08a7de5b8e3667b75fdf9172218ae.png"},4401:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Microsoft-SaaS-Add-Creds-66b136364d7423f6f287cd03a4537e7d.png"},7980:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Microsoft-SaaS-Import-Config-80234ed5c5835043fd3b46937bc1b674.png"},9418:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Microsoft-SaaS-Import-Select-Creds-edcd199d04c64452ecc10e1e821f2340.png"},446:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Microsoft-SaaS-Import-4d21c2b0df74f905be84cd26499ba408.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>a});var t=n(7294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);