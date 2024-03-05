"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[354],{5791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(5893),o=t(1151);const r={title:"CrowdStrike",hide_title:!0,sidebar_position:4},s="CrowdStrike Integration (Beta)",a={id:"cado-response/manage/integrations/xdr/crowdstrike",title:"CrowdStrike",description:"Integrating with CrowdStrike Falcon allows you to select and kick off triage acquisition on hosts with the Falcon Sensor installed using CrowdStrike Real Time Response.",source:"@site/docs/cado-response/manage/integrations/xdr/crowdstrike.md",sourceDirName:"cado-response/manage/integrations/xdr",slug:"/cado-response/manage/integrations/xdr/crowdstrike",permalink:"/cado-response/manage/integrations/xdr/crowdstrike",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/integrations/xdr/crowdstrike.md",tags:[],version:"current",lastUpdatedAt:1709677142,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:4,frontMatter:{title:"CrowdStrike",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SentinelOne",permalink:"/cado-response/manage/integrations/xdr/sentinelone"},next:{title:"Worker Management",permalink:"/cado-response/manage/workers"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enabling integration in the Cado Platform",id:"enabling-integration-in-the-cado-platform",level:2}];function c(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"crowdstrike-integration-beta",children:"CrowdStrike Integration (Beta)"}),"\n",(0,i.jsx)(n.p,{children:"Integrating with CrowdStrike Falcon allows you to select and kick off triage acquisition on hosts with the Falcon Sensor installed using CrowdStrike Real Time Response."}),"\n",(0,i.jsx)(n.p,{children:"Once you have kicked off the triage acquisition CrowdStrike Falcon Real Time Response will locate the endpoint running CrowdStrike Falcon Sensor\nRun a Cado Host command on the endpoint that performs collection of the triage package and uploads it to Cado for processing"}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create an API Client with the permissions listed below. For more information on how to do this see this helpful ",(0,i.jsx)(n.a,{href:"https://www.crowdstrike.com/blog/tech-center/get-access-falcon-apis/",children:"blog article"}),". This API Client will need"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Real Time Response Admin"}),": Write"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hosts"}),": Read"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Real Time Response"}),": Read"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Real Time Response"}),": Write"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Copy and note down the Client ID,  Client Secret and Endpoint URL to enter into the Cado Platform"}),"\n",(0,i.jsx)(n.li,{children:"Enable Real Time Response in either the Default policies for each operating system, or your own that you can attach to a host group."}),"\n",(0,i.jsx)(n.li,{children:"Create Detections and Preventions Machine Learning exclusions with the following pattern to allow the Windows integration to function:"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"C:\\Windows\\Temp\\_MEI*\\**\\CadoHostRawGrabber.exe"'}),"\n",(0,i.jsx)(n.li,{children:'"C:\\Windows\\Temp\\cado-host-*\\cado-host.exe"'}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"CrowdStrike Falcon defines policies on a \u201cper platform basis\u201d, so you  will need a Windows Response Policy and a Linux Response Policy which allows RTR Admin."})}),"\n",(0,i.jsx)(n.h2,{id:"enabling-integration-in-the-cado-platform",children:"Enabling integration in the Cado Platform"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Enable beta CrowdStrike integration feature by navigating to ",(0,i.jsx)(n.em,{children:"Settings > Experiments"}),". Then toggle the \u201cCrowdstrike\u201d feature."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"beta crowstrike setting",src:t(1938).Z+"",width:"632",height:"190"}),"\n2. Navigate to ",(0,i.jsx)(n.em,{children:"Settings > Integrations > XDR"})," and click \u201cAdd Connection\u201d.\n3. Click \u201cAdd Connection\u201d and select CrowdStrike from the dropdown menu.\nEnter the URL, Client ID and Client Secret from the previous section. The integration should then appear on the settings page."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"crowdstrike dropdown",src:t(7681).Z+"",width:"792",height:"361"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["In any project, click ",(0,i.jsx)(n.em,{children:"\u201cImport\u201d -> XDR -> CrowdStrike"})]}),"\n",(0,i.jsx)(n.li,{children:"If you have configured it correctly, then it should show a paginated list of all the hosts the CrowdStrike Falcon sensor installed and are part of the correct Host Group."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1938:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/beta-settings-crowdstrike-1efbcfdae1f6f5209ff9825b74e112bc.png"},7681:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/crowdstrike-xdr-dropdown-3b9895e9d42554ee27186801136b6554.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);