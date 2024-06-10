"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3328],{904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(5893),o=t(1151);const r={title:"Microsoft Defender XDR",hide_title:!0,sidebar_position:4},s="Microsoft Defender XDR Integration (Beta)",a={id:"cado-response/manage/integrations/xdr/defender",title:"Microsoft Defender XDR",description:"Integrating with Microsoft Defender XDR allows you to select and kick off triage acquisition on hosts with the Defender agent installed using Live Response.",source:"@site/docs/cado-response/manage/integrations/xdr/defender.md",sourceDirName:"cado-response/manage/integrations/xdr",slug:"/cado-response/manage/integrations/xdr/defender",permalink:"/cado-response/manage/integrations/xdr/defender",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/integrations/xdr/defender.md",tags:[],version:"current",lastUpdatedAt:1718030593,formattedLastUpdatedAt:"Jun 10, 2024",sidebarPosition:4,frontMatter:{title:"Microsoft Defender XDR",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CrowdStrike",permalink:"/cado-response/manage/integrations/xdr/crowdstrike"},next:{title:"Tanium",permalink:"/cado-response/manage/integrations/xdr/tanium"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enabling the integration in the Cado Platform",id:"enabling-the-integration-in-the-cado-platform",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"microsoft-defender-xdr-integration-beta",children:"Microsoft Defender XDR Integration (Beta)"}),"\n",(0,i.jsx)(n.p,{children:"Integrating with Microsoft Defender XDR allows you to select and kick off triage acquisition on hosts with the Defender agent installed using Live Response."}),"\n",(0,i.jsxs)(n.p,{children:["Once you have kicked off the triage acquisition, Live Response will locate the endpoint running Defender agent\nand will run a ",(0,i.jsx)(n.a,{href:"/cado-host/intro",children:"Cado Host"})," command on the endpoint that performs collection of the triage package and uploads it to Cado for processing."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Make sure you have a "Microsoft Defender for Endpoint Plan 2" license'}),"\n",(0,i.jsxs)(n.li,{children:["Enable the following settings in the Defender Portal, by going to ",(0,i.jsx)(n.code,{children:"Settings > Endpoints > Advanced Features"}),"\n",(0,i.jsx)(n.img,{alt:"Defender Live Response Settings",src:t(9915).Z+"",width:"2132",height:"474"})]}),"\n",(0,i.jsxs)(n.li,{children:["Create an App Registration with the appropriate API access for Defender XDR, see the ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/defender-endpoint/api/exposed-apis-create-app-webapp",children:"Microsoft documentation"})," on how to create this in your Azure portal."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enabling-the-integration-in-the-cado-platform",children:"Enabling the integration in the Cado Platform"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Enable the beta feature by navigating to ",(0,i.jsx)(n.em,{children:"Settings > Experiments"}),'. Then toggle the "Microsoft Defender Xdr" feature.']}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.em,{children:"Settings > Integrations > XDR"})," and click \u201cAdd Connection\u201d."]}),"\n",(0,i.jsx)(n.li,{children:"Click \u201cAdd Connection\u201d and select Defender from the dropdown menu."}),"\n",(0,i.jsx)(n.li,{children:"Enter the Tenant, Client ID and Client Secret from the App Registration you created. The integration should then appear on the settings page."}),"\n",(0,i.jsxs)(n.li,{children:["In any project, click ",(0,i.jsx)(n.em,{children:"\u201cImport\u201d -> XDR -> Defender"})]}),"\n",(0,i.jsx)(n.li,{children:"If you have configured it correctly, then it should show a paginated list of all of the hosts with the Defender agent installed."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Microsoft Defender imposes a rate limit of 25 concurrent Live Response sessions"}),"\n",(0,i.jsx)(n.li,{children:"Live Response scripts will time out after 10 minutes"}),"\n",(0,i.jsx)(n.li,{children:"Only one Live Response session can be available per endpoint"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},9915:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/defender_settings-9f6b7b3d95a7d5e2201e86f53035e25f.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);