"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[921],{7863:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var n=t(5893),o=t(1151);const s={title:"M365 Unified Audit Logs",hide_title:!0,sidebar_position:10},r="M365 Unified Audit Logs",d={id:"cado-response/discovery-import/import/m365-logs",title:"M365 Unified Audit Logs",description:"Cado has the capability to acquire, process and analyze M365 Unified Audit Logs (UAL). This can aid in the investigation of Business Email Compromise and insider threats.",source:"@site/docs/cado-response/discovery-import/import/m365-logs.md",sourceDirName:"cado-response/discovery-import/import",slug:"/cado-response/discovery-import/import/m365-logs",permalink:"/cado-response/discovery-import/import/m365-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/m365-logs.md",tags:[],version:"current",lastUpdatedAt:1710521959,formattedLastUpdatedAt:"Mar 15, 2024",sidebarPosition:10,frontMatter:{title:"M365 Unified Audit Logs",hide_title:!0,sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"XDR Integrations",permalink:"/cado-response/discovery-import/import/xdr"},next:{title:"Exporting Data",permalink:"/cado-response/export/intro"}},l={},a=[{value:"Setting up the View-only Audit logs role",id:"setting-up-the-view-only-audit-logs-role",level:2},{value:"Exchange Admin Centre",id:"exchange-admin-centre",level:3},{value:"Microsoft Purview",id:"microsoft-purview",level:3},{value:"UAL acquisition",id:"ual-acquisition",level:2},{value:"Mapped fields",id:"mapped-fields",level:3},{value:"Video Tutorial",id:"video-tutorial",level:2}];function c(e){const i={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"m365-unified-audit-logs",children:"M365 Unified Audit Logs"}),"\n",(0,n.jsx)(i.p,{children:"Cado has the capability to acquire, process and analyze M365 Unified Audit Logs (UAL). This can aid in the investigation of Business Email Compromise and insider threats."}),"\n",(0,n.jsx)(i.h2,{id:"setting-up-the-view-only-audit-logs-role",children:"Setting up the View-only Audit logs role"}),"\n",(0,n.jsx)(i.p,{children:"To acquire the M365 Unified Audit Log (UAL), the \u2018View-only Audit Logs\u2019 role you need to grant the \u2018View-only Audit Logs\u2019 to the Microsoft account of the user who is performing the acquisition."}),"\n",(0,n.jsx)(i.p,{children:"You will need to grant this role in both the Exchange Admin Centre and Microsoft Purview."}),"\n",(0,n.jsx)(i.h3,{id:"exchange-admin-centre",children:"Exchange Admin Centre"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Navigate to the ",(0,n.jsx)(i.a,{href:"https://admin.exchange.microsoft.com/",children:"Exchange Admin Centre"})," and login."]}),"\n",(0,n.jsx)(i.li,{children:"In the left side panel under \u2018Roles\u2019, click on \u2018Admin roles\u2019."}),"\n",(0,n.jsx)(i.li,{children:"You will be presented with a list of roles and their descriptions. At the top of the page click on \u2018Add role group\u2019."}),"\n",(0,n.jsx)(i.li,{children:"Give your role a name and description, then click next."}),"\n",(0,n.jsx)(i.li,{children:"On the permissions page, search for \u2018View-Only Audit Logs\u2019 and tick the box, then click next."}),"\n",(0,n.jsx)(i.li,{children:"On the \u2018Admins\u2019 page, add the users who require this role, then click next. On the next page, review your role group and finish the setup."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"microsoft-purview",children:"Microsoft Purview"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Navigate to ",(0,n.jsx)(i.a,{href:"https://compliance.microsoft.com/homepage",children:"Microsoft Purview"})," and login."]}),"\n",(0,n.jsx)(i.li,{children:"In the left side panel under \u2018Roles & scopes\u2019, click on \u2018Permissions\u2019."}),"\n",(0,n.jsx)(i.li,{children:"On the \u2018Permissions\u2019 page under \u2018Microsoft Purview Solutions\u2019, click on \u2018Roles\u2019."}),"\n",(0,n.jsx)(i.li,{children:"On the Role Groups page click on \u2018Create Role Group\u2019."}),"\n",(0,n.jsx)(i.li,{children:"Give your role a name and description, then click next."}),"\n",(0,n.jsx)(i.li,{children:"On the roles page, click on \u2018Choose Roles\u2019 and search for \u2018View-Only Audit Logs\u2019. Tick the box for this role, click select then next."}),"\n",(0,n.jsx)(i.li,{children:"On the \u2018Members\u2019 page, add the users who require this role. You can do this by selecting individual users or a group, click select then next."}),"\n",(0,n.jsx)(i.li,{children:"On the \u2018Review and finish\u2019 page, review your role group, then click \u2018Create\u2019 to finish the setup."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"ual-acquisition",children:"UAL acquisition"}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["The feature is currently in Beta. To enable, navigate to ",(0,n.jsx)(i.em,{children:"Settings - Experiments"})," and enable the \u2018SaaS Imports\u2019 button."]})}),"\n",(0,n.jsx)(i.p,{children:"Once you have granted the role to the user\u2019s Microsoft account, you can acquire the the UAL through the Cado platform"}),"\n",(0,n.jsxs)(i.p,{children:["To do this, click the ",(0,n.jsx)(i.em,{children:"Import"})," button from within an investigation. Select \u2018SaaS\u2019 > \u2018Microsoft 365 Logs\u2019 > \u2018Unified Audit Log\u2019."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Import M365 UAL Logs",src:t(618).Z+"",width:"1332",height:"502"})}),"\n",(0,n.jsx)(i.p,{children:"At step 3 in the import process, you can refine the acquisition by timeframe, user, IP, or workload. For example:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"From date to date"}),"\n",(0,n.jsx)(i.li,{children:"Specific to the \u2018Exchange\u2019 workload"}),"\n",(0,n.jsxs)(i.li,{children:["Specific to the user \u2018",(0,n.jsx)(i.a,{href:"mailto:user1@cadosecurity.com",children:"user1@cadosecurity.com"}),"\u2019"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Refine M365 Log Import Filter",src:t(9024).Z+"",width:"1145",height:"733"})}),"\n",(0,n.jsx)(i.p,{children:"On the last page of the import wizard, you will see instructions to navigate to the pipelines page, where you can authenticate to M365 using your Microsoft account using the access code provided."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Instructions to finish import",src:t(7620).Z+"",width:"1907",height:"696"}),"\n",(0,n.jsx)(i.img,{alt:"Pipeline link",src:t(6505).Z+"",width:"1910",height:"432"})]}),"\n",(0,n.jsx)(i.p,{children:"Finally, when the acquisition and processing is completed, the logs will be available to view and search in the main timeline page. To help users with their search and analysis, Cado maps the following UAL fields."}),"\n",(0,n.jsx)(i.h3,{id:"mapped-fields",children:"Mapped fields"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"UAL Field"}),(0,n.jsx)(i.th,{children:"Cado Field"}),(0,n.jsx)(i.th,{children:"CADO Facet Name"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"ClientIP"}),(0,n.jsx)(i.td,{children:"source_hostname"}),(0,n.jsx)(i.td,{children:"Source Hostname"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"UserID"}),(0,n.jsx)(i.td,{children:"user"}),(0,n.jsx)(i.td,{children:"Users"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Workload"}),(0,n.jsx)(i.td,{children:"sourcetype"}),(0,n.jsx)(i.td,{children:"Datatype"})]})]})]}),"\n",(0,n.jsx)(i.p,{children:"For example, the user is able to filter the dataset by the \u2018AzureActiveDirectory\u2019 workload by selecting this value in the \u2018Datatype\u2019 facet."}),"\n",(0,n.jsx)(i.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,n.jsxs)(i.p,{children:["For a video tutorial on how to import Microsoft 365 Unified Audit Logs, please see ",(0,n.jsx)(i.a,{href:"https://www.youtube.com/watch?v=rbmk0jE_smg",children:"this video"})]})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},618:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/import-m365-ual-1-3efc76cf953ccaff1a831298703b1db2.png"},9024:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/import-m365-ual-2-1d685d09aab55b00058591dc52fb8af5.png"},7620:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/import-m365-ual-3-3128a2d3c374a1b945b8a4108f3acc32.png"},6505:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/import-m365-ual-4-845f6f44043b355a991b7dddef1f6b21.png"},1151:(e,i,t)=>{t.d(i,{Z:()=>d,a:()=>r});var n=t(7294);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);