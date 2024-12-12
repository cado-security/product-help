"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3325],{9823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(4848),o=t(8453);const s={title:"SentinelOne",hide_title:!0,sidebar_position:3},r="How to Collect Data from SentinelOne",a={id:"cado/integrations/xdr/sentinelone",title:"SentinelOne",description:"SentinelOne Singularity provides comprehensive visibility across your environment, allowing you to detect malicious activity as soon as it occurs. Cado enhances forensic analysis, quickly delivering historical context and depth to your investigation, helping you identify the root cause efficiently. Together, the SentinelOne and Cado integration enables organizations to detect, investigate, and remediate breaches with unparalleled speed.",source:"@site/docs/cado/integrations/xdr/sentinelone.md",sourceDirName:"cado/integrations/xdr",slug:"/cado/integrations/xdr/sentinelone",permalink:"/cado/integrations/xdr/sentinelone",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/integrations/xdr/sentinelone.md",tags:[],version:"current",lastUpdatedAt:1734011942,formattedLastUpdatedAt:"Dec 12, 2024",sidebarPosition:3,frontMatter:{title:"SentinelOne",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Wiz",permalink:"/cado/integrations/cnapp/wiz"},next:{title:"CrowdStrike",permalink:"/cado/integrations/xdr/crowdstrike"}},c={},l=[{value:"Using the Cado &amp; SentinelOne Integration",id:"using-the-cado--sentinelone-integration",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-collect-data-from-sentinelone",children:"How to Collect Data from SentinelOne"}),"\n",(0,i.jsx)(n.p,{children:"SentinelOne Singularity provides comprehensive visibility across your environment, allowing you to detect malicious activity as soon as it occurs. Cado enhances forensic analysis, quickly delivering historical context and depth to your investigation, helping you identify the root cause efficiently. Together, the SentinelOne and Cado integration enables organizations to detect, investigate, and remediate breaches with unparalleled speed."}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see the SentinelOne and Cado Security ",(0,i.jsx)(n.a,{href:"https://assets.sentinelone.com/cado-jointsb",children:"Joint Solution Brief"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To use the integration between SentinelOne and Cado, you need the SentinelOne Remote Script Orchestration (RSO) feature enabled, along with access to the Cado platform. To gain access to Cado, contact the Cado Security team ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"http://offers.cadosecurity.com/cado-s1-integration-get-in-touch",children:"here"})}),". Note that the RemoteOps feature must be enabled ",(0,i.jsx)(n.strong,{children:"for each site"})," in your SentinelOne management console."]})}),"\n",(0,i.jsx)(n.h2,{id:"using-the-cado--sentinelone-integration",children:"Using the Cado & SentinelOne Integration"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"628",src:"https://www.youtube.com/embed/iIJjp28G6sk",title:"Integrating SentinelOne with Cado",frameborder:"0",allowfullscreen:!0}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the SentinelOne console, go to ",(0,i.jsx)(n.strong,{children:"Settings > Users > Service Users > Actions > Create New Service User"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure that your service user has ",(0,i.jsx)(n.strong,{children:"Global Account scope"}),", not ",(0,i.jsx)(n.strong,{children:"Site scope"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Assign the following additional permissions to the service user:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"RemoteOps > View"}),"\n",(0,i.jsx)(n.li,{children:"RemoteOps > View Output"}),"\n",(0,i.jsx)(n.li,{children:"RemoteOps > Upload"}),"\n",(0,i.jsx)(n.li,{children:"RemoteOps > Run Scripts > Run Data Collection Script"}),"\n",(0,i.jsx)(n.li,{children:"RemoteOps > Run Scripts > Run Artifact Collection Script"}),"\n",(0,i.jsx)(n.li,{children:"RemoteOps > Run Scripts > Run Action Script"}),"\n",(0,i.jsx)(n.li,{children:"RemoteOps > Delete"}),"\n",(0,i.jsx)(n.li,{children:"RemoteOps > Cancel Scripts > Cancel Data Collection Script"}),"\n",(0,i.jsx)(n.li,{children:"RemoteOps > Cancel Scripts > Cancel Artifact Collection Script"}),"\n",(0,i.jsx)(n.li,{children:"RemoteOps > Cancel Scripts > Cancel Action Script"}),"\n",(0,i.jsx)(n.li,{children:"Task Management > View"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Specify a name and the expiration period for the integration."}),"\n",(0,i.jsx)(n.li,{children:"Copy or download the API Token."}),"\n",(0,i.jsxs)(n.li,{children:["In the Cado platform, Navigate to ",(0,i.jsx)(n.strong,{children:"Settings > Accounts"})," and click ",(0,i.jsx)(n.strong,{children:"Create an account"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"SentinelOne"})," from the set of providers."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SentinelOne Integration",src:t(6654).A+"",width:"3866",height:"1486"})}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsxs)(n.li,{children:["Give the account a ",(0,i.jsx)(n.strong,{children:"Name"})," and enter the ",(0,i.jsx)(n.strong,{children:"Endpoint"})," and ",(0,i.jsx)(n.strong,{children:"Token"}),". Leave the 'Run account check after adding account' checkbox selected, which will validate the account has the correct permissions after selecting 'Continue'."]}),"\n",(0,i.jsx)(n.li,{children:"Navigate to the 'Accounts' table and the newly created SentinelOne account should present. If configured correctly, you will see a green coloured health status."}),"\n",(0,i.jsxs)(n.li,{children:["An alternative way to check the account has been set up correctly is to browse to any investigation, and click ",(0,i.jsx)(n.strong,{children:"Import > XDR > SentinelOne"}),". If configured correctly, a paginated list of hosts with the SentinelOne agent installed will appear."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Currently, Windows and Linux operating systems are supported with the SentinelOne integration."})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6654:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Accounts-SentinelOne-394bb3f09ef08c2117970147ab1e9ac7.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);