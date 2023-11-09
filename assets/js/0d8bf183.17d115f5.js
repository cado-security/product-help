"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={title:"CrowdStrike",hide_title:!0,sidebar_position:4},a="CrowdStrike Integration (Beta)",s={unversionedId:"cado-response/manage/integrations/xdr/crowdstrike",id:"cado-response/manage/integrations/xdr/crowdstrike",title:"CrowdStrike",description:"Integrating with CrowdStrike Falcon allows you to select and kick off triage acquisition on hosts with the Falcon Sensor installed using CrowdStrike Real Time Response.",source:"@site/docs/cado-response/manage/integrations/xdr/crowdstrike.md",sourceDirName:"cado-response/manage/integrations/xdr",slug:"/cado-response/manage/integrations/xdr/crowdstrike",permalink:"/cado-response/manage/integrations/xdr/crowdstrike",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/integrations/xdr/crowdstrike.md",tags:[],version:"current",lastUpdatedAt:1699527990,formattedLastUpdatedAt:"Nov 9, 2023",sidebarPosition:4,frontMatter:{title:"CrowdStrike",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SentinelOne",permalink:"/cado-response/manage/integrations/xdr/sentinelone"},next:{title:"Worker Management",permalink:"/cado-response/manage/workers"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enabling integration in the Cado Platform",id:"enabling-integration-in-the-cado-platform",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crowdstrike-integration-beta"},"CrowdStrike Integration (Beta)"),(0,o.kt)("p",null,"Integrating with CrowdStrike Falcon allows you to select and kick off triage acquisition on hosts with the Falcon Sensor installed using CrowdStrike Real Time Response."),(0,o.kt)("p",null,"Once you have kicked off the triage acquisition CrowdStrike Falcon Real Time Response will locate the endpoint running CrowdStrike Falcon Sensor\nRun a Cado Host command on the endpoint that performs collection of the triage package and uploads it to Cado for processing"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an API Client with the permissions listed below. For more information on how to do this see this helpful ",(0,o.kt)("a",{parentName:"li",href:"https://www.crowdstrike.com/blog/tech-center/get-access-falcon-apis/"},"blog article"),". This API Client will need ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Real Time Response Admin"),": Write"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hosts"),": Read"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Real Time Response"),": Read"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Real Time Response"),": Write")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Copy and note down the Client ID,  Client Secret and Endpoint URL to enter into the Cado Platform"),(0,o.kt)("li",{parentName:"ol"},"Enable Real Time Response in either the Default policies for each operating system, or your own that you can attach to a host group."),(0,o.kt)("li",{parentName:"ol"},"Create Detections and Preventions Machine Learning exclusions with the following pattern to allow the Windows integration to function:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"C:\\Windows\\Temp',"\\","_MEI*","\\",'**\\CadoHostRawGrabber.exe"'),(0,o.kt)("li",{parentName:"ul"},'"C:\\Windows\\Temp\\cado-host-*\\cado-host.exe"')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"}," CrowdStrike Falcon defines policies on a \u201cper platform basis\u201d, so you  will need a Windows Response Policy and a Linux Response Policy which allows RTR Admin.")),(0,o.kt)("h2",{id:"enabling-integration-in-the-cado-platform"},"Enabling integration in the Cado Platform"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable beta CrowdStrike integration feature by navigating to ",(0,o.kt)("em",{parentName:"li"},"Settings > Experiments"),". Then toggle the \u201cCrowdstrike\u201d feature.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"beta crowstrike setting",src:n(1938).Z,width:"632",height:"190"}),"\n2. Navigate to ",(0,o.kt)("em",{parentName:"p"},"Settings > Integrations > XDR")," and click \u201cAdd Connection\u201d.\n3. Click \u201cAdd Connection\u201d and select CrowdStrike from the dropdown menu.\nEnter the URL, Client ID and Client Secret from the previous section. The integration should then appear on the settings page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"crowdstrike dropdown",src:n(7681).Z,width:"792",height:"361"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In any project, click ",(0,o.kt)("em",{parentName:"li"},"\u201cImport\u201d -> XDR -> CrowdStrike")),(0,o.kt)("li",{parentName:"ol"},"If you have configured it correctly, then it should show a paginated list of all the hosts the CrowdStrike Falcon sensor installed and are part of the correct Host Group.")))}p.isMDXComponent=!0},1938:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/beta-settings-crowdstrike-1efbcfdae1f6f5209ff9825b74e112bc.png"},7681:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/crowdstrike-xdr-dropdown-3b9895e9d42554ee27186801136b6554.png"}}]);