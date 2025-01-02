"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8275],{62008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=n(74848),r=n(28453);const s={title:"Microsoft Defender XDR",hide_title:!0,sidebar_position:4},o="How to Integrate with Microsoft Defender XDR",d={id:"cado/integrations/xdr/defender",title:"Microsoft Defender XDR",description:"Integrating with Microsoft Defender XDR allows you to initiate triage acquisition on hosts with the Defender agent installed using Live Response.",source:"@site/docs/cado/integrations/xdr/defender.md",sourceDirName:"cado/integrations/xdr",slug:"/cado/integrations/xdr/defender",permalink:"/cado/integrations/xdr/defender",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/integrations/xdr/defender.md",tags:[],version:"current",lastUpdatedAt:1735813116,formattedLastUpdatedAt:"Jan 2, 2025",sidebarPosition:4,frontMatter:{title:"Microsoft Defender XDR",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CrowdStrike",permalink:"/cado/integrations/xdr/crowdstrike"},next:{title:"Tanium",permalink:"/cado/integrations/xdr/tanium"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enabling the Integration in the Cado Platform",id:"enabling-the-integration-in-the-cado-platform",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-integrate-with-microsoft-defender-xdr",children:"How to Integrate with Microsoft Defender XDR"}),"\n",(0,i.jsx)(t.p,{children:"Integrating with Microsoft Defender XDR allows you to initiate triage acquisition on hosts with the Defender agent installed using Live Response."}),"\n",(0,i.jsxs)(t.p,{children:["Once initiated, Live Response will locate the endpoint running the Defender agent and execute a ",(0,i.jsx)(t.a,{href:"/cado/discovery-import/cado-host/intro",children:"Cado Host"})," command to collect the triage package and upload it to Cado for processing."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Ensure you have a ",(0,i.jsx)(t.strong,{children:"Microsoft Defender for Endpoint Plan 2"})," license."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the Defender Portal, enable the following settings by navigating to ",(0,i.jsx)(t.strong,{children:"Settings > Endpoints > Advanced Features"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Defender Live Response Settings",src:n(4958).A+"",width:"2132",height:"474"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create an ",(0,i.jsx)(t.strong,{children:"App Registration"})," with the required API permissions for Defender XDR. Refer to ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/defender-endpoint/api/exposed-apis-create-app-webapp",children:"Microsoft documentation"})," for guidance on creating the App Registration in your Azure portal."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The following API permissions are required for Cado integration:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Permission"}),(0,i.jsx)(t.th,{children:"Reason"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Admin Consent Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Library.Manage"}),(0,i.jsx)(t.td,{children:"Allows Cado to upload Cado Host scripts to the Live Response library for credential refresh"}),(0,i.jsx)(t.td,{children:"Application"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Machine.LiveResponse"}),(0,i.jsx)(t.td,{children:"Allows Cado to run Cado Host against a machine"}),(0,i.jsx)(t.td,{children:"Application"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Machine.Read.All"}),(0,i.jsx)(t.td,{children:"Allows Cado to inspect a single machine on Defender and obtain its UUID"}),(0,i.jsx)(t.td,{children:"Application"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Machine.ReadWrite.All"}),(0,i.jsx)(t.td,{children:"Allows Cado to retrieve a list of all machines on Defender for display in the UI"}),(0,i.jsx)(t.td,{children:"Application"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Alert.Read.All"}),(0,i.jsx)(t.td,{children:"Allows Cado to monitor alerts from Defender as part of the Detection integration"}),(0,i.jsx)(t.td,{children:"Application"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Alert.ReadWrite.All"}),(0,i.jsx)(t.td,{children:"Allows Cado to manage alerts from Defender as part of the Detection integration"}),(0,i.jsx)(t.td,{children:"Application"}),(0,i.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"enabling-the-integration-in-the-cado-platform",children:"Enabling the Integration in the Cado Platform"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Settings > Accounts"})," and click ",(0,i.jsx)(t.strong,{children:"Create an account"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.strong,{children:"Defender"})," from the set of providers."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Defender Integration",src:n(21213).A+"",width:"3784",height:"1506"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Give the account a ",(0,i.jsx)(t.strong,{children:"Name"})," and enter the ",(0,i.jsx)(t.strong,{children:"Endpoint"}),", ",(0,i.jsx)(t.strong,{children:"Client ID"}),", ",(0,i.jsx)(t.strong,{children:"Client Secret"}),", and ",(0,i.jsx)(t.strong,{children:"Tenant"})," from the App Registration you created. Leave the 'Run account check after adding account' checkbox selected, which will validate the account has the correct permissions after selecting 'Continue'."]}),"\n",(0,i.jsx)(t.li,{children:"Navigate to the 'Accounts' table and the newly created Defender account should present. If configured correctly, you will see a green coloured health status."}),"\n",(0,i.jsxs)(t.li,{children:["An alternative way to check the account has been set up correctly is to browse to any investigation, and click ",(0,i.jsx)(t.strong,{children:"Import > XDR > Defender"}),". If configured correctly, a paginated list of hosts with the Defender agent installed will be displayed."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Microsoft Defender limits to 25 concurrent Live Response sessions."}),"\n",(0,i.jsx)(t.li,{children:"Live Response scripts will time out after 10 minutes."}),"\n",(0,i.jsx)(t.li,{children:"Only one Live Response session can be active per endpoint."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},21213:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Accounts-Defender-4e7d9dec51b2c229a6d069651f7b6192.png"},4958:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/defender_settings-4cd95e7472c65fc3515fca60d575a228.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);