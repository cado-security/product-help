"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2801],{1868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(4848),r=n(8453);const o={title:"CrowdStrike",hide_title:!0,sidebar_position:4},s="How to Integrate with CrowdStrike",a={id:"cado/integrations/xdr/crowdstrike",title:"CrowdStrike",description:"Integrating CrowdStrike Falcon with Cado allows you to initiate triage acquisition on hosts running the Falcon Sensor via CrowdStrike Real Time Response.",source:"@site/docs/cado/integrations/xdr/crowdstrike.md",sourceDirName:"cado/integrations/xdr",slug:"/cado/integrations/xdr/crowdstrike",permalink:"/cado/integrations/xdr/crowdstrike",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/integrations/xdr/crowdstrike.md",tags:[],version:"current",lastUpdatedAt:1734011942,formattedLastUpdatedAt:"Dec 12, 2024",sidebarPosition:4,frontMatter:{title:"CrowdStrike",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SentinelOne",permalink:"/cado/integrations/xdr/sentinelone"},next:{title:"Microsoft Defender XDR",permalink:"/cado/integrations/xdr/defender"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enabling the Integration in Cado Platform",id:"enabling-the-integration-in-cado-platform",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-integrate-with-crowdstrike",children:"How to Integrate with CrowdStrike"}),"\n",(0,i.jsx)(t.p,{children:"Integrating CrowdStrike Falcon with Cado allows you to initiate triage acquisition on hosts running the Falcon Sensor via CrowdStrike Real Time Response."}),"\n",(0,i.jsxs)(t.p,{children:["Once initiated, CrowdStrike Falcon Real Time Response will locate the endpoint with the Falcon Sensor, execute a ",(0,i.jsx)(t.a,{href:"/cado/discovery-import/cado-host/intro",children:"Cado Host"})," command to collect the triage package, and upload it to Cado for processing."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information, see the ",(0,i.jsx)(t.a,{href:"https://offers.cadosecurity.com/cado-security-and-crowdstrike-integration",children:"CrowdStrike and Cado Security Joint Solution Brief"})," and the ",(0,i.jsx)(t.a,{href:"https://marketplace.crowdstrike.com/listings/the-cado-platform",children:"CrowdStrike Marketplace listing"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Create an API Client"})," with the following permissions. Refer to this ",(0,i.jsx)(t.a,{href:"https://www.crowdstrike.com/blog/tech-center/get-access-falcon-apis/",children:"blog article"})," for instructions:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Real Time Response Admin"}),": Write"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Hosts"}),": Read"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Real Time Response"}),": Read"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Real Time Response"}),": Write"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Alerts"}),": Read"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Detections"}),": Read"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Note the ",(0,i.jsx)(t.strong,{children:"Client ID"}),", ",(0,i.jsx)(t.strong,{children:"Client Secret"}),", and ",(0,i.jsx)(t.strong,{children:"Endpoint URL"})," for entry into the Cado Platform."]}),"\n",(0,i.jsxs)(t.li,{children:["Enable ",(0,i.jsx)(t.strong,{children:"Real Time Response"})," in the Default policies for each OS or in custom policies attached to host groups."]}),"\n",(0,i.jsxs)(t.li,{children:["Create ",(0,i.jsx)(t.strong,{children:"Detections and Preventions Machine Learning exclusions"})," with the following patterns to enable Windows integration:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Windows\\Temp\\_MEI*\\**\\CadoHostRawGrabber.exe"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Windows\\Temp\\cado-host-*\\cado-host.exe"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["(Optional) To prevent endpoint detection alerts for ",(0,i.jsx)(t.code,{children:"CadoHostRawGrabber.exe"})," related to ",(0,i.jsx)(t.code,{children:"HiveCredTheft"}),", ",(0,i.jsx)(t.code,{children:"RawReadOnSAMHive"}),", and ",(0,i.jsx)(t.code,{children:"RawReadOnSecurityHive"}),", create IOA exclusions with the following patterns:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Image Filename"}),": ",(0,i.jsx)(t.code,{children:".*\\\\Windows\\\\Temp\\\\_MEI.*\\\\.*\\\\CadoHostRawGrabber\\.exe"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Command Line"}),": ",(0,i.jsx)(t.code,{children:".*\\\\Windows\\\\TEMP\\\\_MEI.*\\\\binaries\\\\CadoHostRawGrabber\\.exe\\s+--inputPath\\s+.*\\s+--outputPath\\s+.*\\\\Windows\\\\TEMP\\\\.*"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Exclusions are not required for Linux and macOS."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"CrowdStrike Falcon defines policies by platform, so you will need separate Windows and Linux Response Policies that allow RTR Admin. macOS is not currently supported."})}),"\n",(0,i.jsx)(t.h2,{id:"enabling-the-integration-in-cado-platform",children:"Enabling the Integration in Cado Platform"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Settings > Accounts"})," and click ",(0,i.jsx)(t.strong,{children:"Create an account"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.strong,{children:"CrowdStrike"})," from the set of providers."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"CrowdStrike Integration",src:n(8311).A+"",width:"3800",height:"1486"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Give the account a ",(0,i.jsx)(t.strong,{children:"Name"})," and enter the ",(0,i.jsx)(t.strong,{children:"Endpoint"}),", ",(0,i.jsx)(t.strong,{children:"Client ID"}),", and ",(0,i.jsx)(t.strong,{children:"Client Secret"}),". Leave the 'Run account check after adding account' checkbox selected, which will validate the account has the correct permissions after selecting 'Continue'."]}),"\n",(0,i.jsx)(t.li,{children:"Navigate to the 'Accounts' table and the newly created CrowdStrike account should present. If configured correctly, you will see a green coloured health status."}),"\n",(0,i.jsxs)(t.li,{children:["An alternative way to check the account has been set up correctly is to browse to any investigation, and click ",(0,i.jsx)(t.strong,{children:"Import > XDR > CrowdStrike"}),". If configured correctly, a paginated list of hosts with the CrowdStrike Falcon Sensor installed will appear, showing those within the appropriate Host Group."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8311:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Accounts-CrowdStrike-e73332fc998ed3ea7436a417b3d214c3.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);