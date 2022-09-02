"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7688],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8569:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Investigate",hide_title:!0,sidebar_position:1},l="Investigating a Project",c={unversionedId:"cado-response/investigate/intro",id:"cado-response/investigate/intro",title:"Investigate",description:"Evidence is processed into Projects and investigation starts by analyzing the project evidence.  The project view provides an overview of the key information for all evidence items in a given project.",source:"@site/docs/cado-response/investigate/intro.md",sourceDirName:"cado-response/investigate",slug:"/cado-response/investigate/intro",permalink:"/cado-response/investigate/intro",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/investigate/intro.md",tags:[],version:"current",lastUpdatedAt:1662151646,formattedLastUpdatedAt:"Sep 2, 2022",sidebarPosition:1,frontMatter:{title:"Investigate",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/cado-response/discovery-import/import/on-prem/on-prem-memory"},next:{title:"Evidence",permalink:"/cado-response/investigate/evidence"}},p={},d=[{value:"System View",id:"system-view",level:3},{value:"Browsing Files",id:"browsing-files",level:3},{value:"Searching",id:"searching",level:3},{value:"Indicators / Detections",id:"indicators--detections",level:3},{value:"Usernames",id:"usernames",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"investigating-a-project"},"Investigating a Project"),(0,i.kt)("p",null,"Evidence is processed into Projects and investigation starts by analyzing the project evidence.  The project view provides an overview of the key information for all evidence items in a given project."),(0,i.kt)("p",null,"The tabs available on the Project Overview page are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tab Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/cado-response/investigate/project-overview"},"Overview")),(0,i.kt)("td",{parentName:"tr",align:null},"Shows all the evidence items, and an interactive timeline of key events.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/cado-response/investigate/timeline-search"},"Timeline")),(0,i.kt)("td",{parentName:"tr",align:null},"A timeline of key events.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/cado-response/investigate/key-events"},"Alarms")),(0,i.kt)("td",{parentName:"tr",align:null},"Malicious events.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/cado-response/investigate/key-events"},"Suspicious")),(0,i.kt)("td",{parentName:"tr",align:null},"Possibly malicious events.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/cado-response/investigate/users"},"Users")),(0,i.kt)("td",{parentName:"tr",align:null},"A unique list of users on the system.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/cado-response/investigate/processes"},"Processes")),(0,i.kt)("td",{parentName:"tr",align:null},"Processes execution.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/cado-response/investigate/network"},"Network")),(0,i.kt)("td",{parentName:"tr",align:null},"Network connections.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/cado-response/investigate/files"},"Files")),(0,i.kt)("td",{parentName:"tr",align:null},"File Access.")))),(0,i.kt)("h3",{id:"system-view"},"System View"),(0,i.kt)("p",null,"By clicking on an individual Evidence item, you bring up the System View.  The System View provides the same details as the Project View, but limited to a single evidence item."),(0,i.kt)("h3",{id:"browsing-files"},"Browsing Files"),(0,i.kt)("p",null,"You can browse the filesystem of certain evidence items. When browsing a ",(0,i.kt)("strong",{parentName:"p"},"Disk")," folders with a red dot  indicate the presence of a known malicious file.  You can browse the folder structure of a disk by clicking on individual folders."),(0,i.kt)("h3",{id:"searching"},"Searching"),(0,i.kt)("p",null,"The search interface allows you to search both file and event contents."),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Investigate")," then ",(0,i.kt)("strong",{parentName:"p"},"Search")," to open the search interface. Cado Response uses specialized indexing to provide fast searches across files and events. Due to the way this indexing works, you may get fewer results than if you performed a traditional slow byte by byte search of each file."),(0,i.kt)("h3",{id:"indicators--detections"},"Indicators / Detections"),(0,i.kt)("p",null,"The Indicators or Detections page provides a summary of indicators of compromise detected within a project, and which systems they matched."),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Investigate")," then ",(0,i.kt)("strong",{parentName:"p"},"Indicators"),"."),(0,i.kt)("h3",{id:"usernames"},"Usernames"),(0,i.kt)("p",null,"The Usernames page provides a summary of usernames identified in the project."),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Investigate")," then ",(0,i.kt)("strong",{parentName:"p"},"Usernames"),"."))}m.isMDXComponent=!0}}]);