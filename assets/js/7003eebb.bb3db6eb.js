"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3712],{1125:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=o(5893),s=o(1151);const a={title:"Adding detections",hide_title:!0,sidebar_position:9},n="How to add additional detections to the Cado platform",r={id:"cado/investigate/detections",title:"Adding detections",description:"The Cado platform can integrate with a number of systems as well as incorporate custom Indicators of Compromise. These can be defined in Settings - General Settings - Detection",source:"@site/docs/cado/investigate/detections.md",sourceDirName:"cado/investigate",slug:"/cado/investigate/detections",permalink:"/cado/investigate/detections",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/investigate/detections.md",tags:[],version:"current",lastUpdatedAt:1728552962,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:9,frontMatter:{title:"Adding detections",hide_title:!0,sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Response actions",permalink:"/cado/investigate/response-actions"},next:{title:"AI Investigator",permalink:"/cado/investigate/ai investigator"}},c={},d=[];function l(e){const t={code:"code",em:"em",h1:"h1",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-add-additional-detections-to-the-cado-platform",children:"How to add additional detections to the Cado platform"}),"\n",(0,i.jsxs)(t.p,{children:["The Cado platform can integrate with a number of systems as well as incorporate custom Indicators of Compromise. These can be defined in ",(0,i.jsx)(t.em,{children:"Settings - General Settings - Detection"})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"VirusTotal API Key"})," is used to enhance the analysis of already detected files by checking their file-hash against the VirusTotal database. It is not used to detect files, but is a supplement to existing Cado-native detections. Cado will use the VirusTotal API key to do a lookup for the hash of each file that already has a detection."]}),"\n",(0,i.jsx)(t.p,{children:"If the VirusTotal (VT) lookup fails for some reason, a retry of that same lookup will not occur. Cado also caches the API lookups, so if the same file is seen twice, only one lookup will occur. It's probable that Cado will only do a small amount of VT lookups for any system we're processing evidence for, however it is possible that a system could be overwhelmed with malicious files, which means the VT API Key could potentially hit its subscription lookup limits. Workarounds for the above include possibly creating specific VT API keys with limited API key lookups, creating a separate free VT API Key (outside of an Enterprise license) or not leveraging VT at all for alarms or detections. Yara and Indicators of Compromise can still be used (as previously described)."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Yara Rules"})," text-box allows you to run your own set of Yara rules against files. These are run in addition to a set built-in to Cado. Rules that match will trigger a ",(0,i.jsx)(t.code,{children:"Malicious"})," detection, unless the yara rule name starts with the keyword suspicious - in which case it will create a ",(0,i.jsx)(t.code,{children:"Suspicious"})," detection."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Indicators of Compromise"})," are matched against the contents of files and events, for example connections from network logs. Enter one indicator on each line. You can enter any keyword such as a filename, IP address or Domain name. If you enter a SHA256 filehash, it will be matched against files too. You can optionally enter a title for an indicator, preceded by the ';' character. For example \"Domain.com;A bad domain\". You can also upload a MISP formatted json file containing indicators."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>n});var i=o(7294);const s={},a=i.createContext(s);function n(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);