"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5025],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(y,n(n({ref:t},u),{},{components:r})):a.createElement(y,n({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,n=new Array(l);n[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var p=2;p<l;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const l={title:"Log Types",hide_title:!0,sidebar_position:1},n="Log Types",i={unversionedId:"cado-response/discovery-import/import/data-types/logs",id:"cado-response/discovery-import/import/data-types/logs",title:"Log Types",description:"Cado Response supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform.",source:"@site/docs/cado-response/discovery-import/import/data-types/logs.md",sourceDirName:"cado-response/discovery-import/import/data-types",slug:"/cado-response/discovery-import/import/data-types/logs",permalink:"/cado-response/discovery-import/import/data-types/logs",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/data-types/logs.md",tags:[],version:"current",lastUpdatedAt:1686592326,formattedLastUpdatedAt:"Jun 12, 2023",sidebarPosition:1,frontMatter:{title:"Log Types",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"File Types",permalink:"/cado-response/discovery-import/import/data-types/filetypes"},next:{title:"Memory Analysis",permalink:"/cado-response/discovery-import/import/data-types/memory"}},s={},p=[{value:"AWS Log Formats",id:"aws-log-formats",level:3},{value:"Azure Log Formats",id:"azure-log-formats",level:3},{value:"System Log Formats",id:"system-log-formats",level:3}],u={toc:p};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log-types"},"Log Types"),(0,o.kt)("p",null,"Cado Response supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform."),(0,o.kt)("h3",{id:"aws-log-formats"},"AWS Log Formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cloud Trail logs"),(0,o.kt)("li",{parentName:"ul"},"Guard Duty logs"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes logs"),(0,o.kt)("li",{parentName:"ul"},"VPC Flow logs"),(0,o.kt)("li",{parentName:"ul"},"SSM logs")),(0,o.kt)("h3",{id:"azure-log-formats"},"Azure Log Formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Activity logs")),(0,o.kt)("h3",{id:"system-log-formats"},"System Log Formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AppleSystemLog (ASL)"),(0,o.kt)("li",{parentName:"ul"},"Androidusage-history (appusage)"),(0,o.kt)("li",{parentName:"ul"},"BasicSecurityModule (BSM)"),(0,o.kt)("li",{parentName:"ul"},"Bencodefiles"),(0,o.kt)("li",{parentName:"ul"},"Chrome Disk Cache Format"),(0,o.kt)("li",{parentName:"ul"},"Chrome preferences"),(0,o.kt)("li",{parentName:"ul"},"CUPS IPP"),(0,o.kt)("li",{parentName:"ul"},"ExtensibleStorageEngine (ESE) DatabaseFile (EDB)"),(0,o.kt)("li",{parentName:"ul"},"Firefox Cache"),(0,o.kt)("li",{parentName:"ul"},"JavaWeb Start IDX"),(0,o.kt)("li",{parentName:"ul"},"JumpLists.customDestinations-msfiles"),(0,o.kt)("li",{parentName:"ul"},"MacOS Application firewall"),(0,o.kt)("li",{parentName:"ul"},"MacOS Keychain"),(0,o.kt)("li",{parentName:"ul"},"MacOS Securityd"),(0,o.kt)("li",{parentName:"ul"},"MacOS Wifi"),(0,o.kt)("li",{parentName:"ul"},"mactimelogs"),(0,o.kt)("li",{parentName:"ul"},"McAfee Anti-Virus Logs"),(0,o.kt)("li",{parentName:"ul"},"Microsoft InternetExplorer History File Format (also known as MSIE4-9 Cache Files or index.dat)"),(0,o.kt)("li",{parentName:"ul"},"Microsoft IIS log files"),(0,o.kt)("li",{parentName:"ul"},"NTFS $MFT and $UsnJrnl:$J"),(0,o.kt)("li",{parentName:"ul"},"OLE Compound File"),(0,o.kt)("li",{parentName:"ul"},"Opera Browser history"),(0,o.kt)("li",{parentName:"ul"},"OpenXML"),(0,o.kt)("li",{parentName:"ul"},"Pcap files"),(0,o.kt)("li",{parentName:"ul"},"Portable Executable (PE) "),(0,o.kt)("li",{parentName:"ul"},"PLSQL cache file (PL-SQL developer recall files)"),(0,o.kt)("li",{parentName:"ul"},"Popularity Contest log"),(0,o.kt)("li",{parentName:"ul"},"Propertylist (plist)"),(0,o.kt)("li",{parentName:"ul"},"RestorePointlogs (rp.log)"),(0,o.kt)("li",{parentName:"ul"},"Safari Binary Cookies"),(0,o.kt)("li",{parentName:"ul"},"SCCM client logs"),(0,o.kt)("li",{parentName:"ul"},"SELinux audit logs"),(0,o.kt)("li",{parentName:"ul"},"SkyDrive log and error log files"),(0,o.kt)("li",{parentName:"ul"},"SQLite database format using SQLite"),(0,o.kt)("li",{parentName:"ul"},"Symantec AV Corporate Edition and Endpoint Protection log"),(0,o.kt)("li",{parentName:"ul"},"Syslog"),(0,o.kt)("li",{parentName:"ul"},"utmp,utmpx"),(0,o.kt)("li",{parentName:"ul"},"Windows EventLog (EVT)"),(0,o.kt)("li",{parentName:"ul"},"Windows Firewall"),(0,o.kt)("li",{parentName:"ul"},'Windows Job files (also known as "atjobs")'),(0,o.kt)("li",{parentName:"ul"},"Windows Prefetch files"),(0,o.kt)("li",{parentName:"ul"},"Windows Recyclebin (INFO2and$I/$R)"),(0,o.kt)("li",{parentName:"ul"},"Windows NTRegistry File"),(0,o.kt)("li",{parentName:"ul"},"Windows ShortcutFile (LNK)"),(0,o.kt)("li",{parentName:"ul"},"WindowsXML EventLog (EVTX)"),(0,o.kt)("li",{parentName:"ul"},"Xchat and Xchat scroll back files"),(0,o.kt)("li",{parentName:"ul"},"Zsh history files")),(0,o.kt)("p",null,"Cado can also import a number of other log formats that are not listed here; however, these evidence types and file formats are not officially supported.  If you have a log format that you would like to see supported, please reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," and let us know."),(0,o.kt)("h1",{id:"adding-your-own-events"},"Adding Your Own Events"),(0,o.kt)("p",null,"During an investigation, you may want to add our own non-computer generated events to the timeline.\nFor example, it is common to keep a Spreadsheet of key events in a large incident.\nThe simplest way to add these events into a Project timeline is to import an ISO Format Log event of the format:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"YYYY-MM-DD HH:MM:SS Log Event Message")),(0,o.kt)("p",null,'For example you can save the following text into a file named "custom_events.log" then import into the platform:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2021-01-01 01:01:01 User phoned help desk and reported ransomware\n2021-01-01 01:01:02 Three more phone calls to help desk\n")),(0,o.kt)("p",null,"Which will result in events such as the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom logs imported into Cado",src:r(2319).Z,width:"433",height:"255"})))}m.isMDXComponent=!0},2319:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/custom_log-c23723dfac762109a84bbbdd4a04d760.png"}}]);