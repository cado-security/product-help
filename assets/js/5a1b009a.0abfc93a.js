"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8320],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={title:"Collected Artifacts",hide_title:!0,sidebar_position:3},o="Collected Artifacts",i={unversionedId:"cado-host/artifacts",id:"cado-host/artifacts",title:"Collected Artifacts",description:"Cado Host collects a number of artifacts by default, based on the operating system.  Note that you can configure additonal files and folders to be collected by defining the --additionalfiles parameter when running Cado Host.  See the --additionalfiles Command Line Parameters for more details.",source:"@site/docs/cado-host/artifacts.md",sourceDirName:"cado-host",slug:"/cado-host/artifacts",permalink:"/cado-host/artifacts",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/artifacts.md",tags:[],version:"current",lastUpdatedAt:1680788216,formattedLastUpdatedAt:"Apr 6, 2023",sidebarPosition:3,frontMatter:{title:"Collected Artifacts",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploying",permalink:"/cado-host/deploy"},next:{title:"AWS Credentials",permalink:"/cado-host/aws-credentials"}},s={},c=[{value:"Volatile Data",id:"volatile-data",level:3},{value:"Linux and OSX",id:"linux-and-osx",level:3},{value:"Windows",id:"windows",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"collected-artifacts"},"Collected Artifacts"),(0,n.kt)("p",null,"Cado Host collects a number of artifacts by default, based on the operating system.  Note that you can configure additonal files and folders to be collected by defining the --additional_files parameter when running Cado Host.  See the ",(0,n.kt)("inlineCode",{parentName:"p"},"--additional_files")," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"deploy#command-line-parameters"},"Command Line Parameters"))," for more details."),(0,n.kt)("h3",{id:"volatile-data"},"Volatile Data"),(0,n.kt)("p",null,"Cado Host collects the following volatile data available at the time Cado Host is executed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data about running processes"),(0,n.kt)("li",{parentName:"ul"},"Memory of running proccesses on a per-process basis ",(0,n.kt)("em",{parentName:"li"},"(note - memory collection on Windows is disabled by default; ",(0,n.kt)("a",{parentName:"em",href:"deploy#command-line-parameters"},"see Command Line Parameters")," )")),(0,n.kt)("li",{parentName:"ul"},"Netstat data of active connections"),(0,n.kt)("li",{parentName:"ul"},"The contents of open files - for example running binaries")),(0,n.kt)("h3",{id:"linux-and-osx"},"Linux and OSX"),(0,n.kt)("p",null,"Cado Host collects the following artifacts on Linux and OSX, when available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},".bash_history"),(0,n.kt)("li",{parentName:"ul"},".ssh/known_hosts"),(0,n.kt)("li",{parentName:"ul"},"/.fseventsd"),(0,n.kt)("li",{parentName:"ul"},"/Library/LaunchAgents"),(0,n.kt)("li",{parentName:"ul"},"/Library/LaunchDaemons"),(0,n.kt)("li",{parentName:"ul"},"/Library/Preferences/SystemConfiguration"),(0,n.kt)("li",{parentName:"ul"},"/Library/Receipts/InstallHistory.plist"),(0,n.kt)("li",{parentName:"ul"},"/Library/StartupItems"),(0,n.kt)("li",{parentName:"ul"},"/System/Library/LaunchAgents"),(0,n.kt)("li",{parentName:"ul"},"/System/Library/LaunchDaemons"),(0,n.kt)("li",{parentName:"ul"},"/System/Library/StartupItems"),(0,n.kt)("li",{parentName:"ul"},"/etc/group"),(0,n.kt)("li",{parentName:"ul"},"/etc/hosts"),(0,n.kt)("li",{parentName:"ul"},"/etc/hosts.allow"),(0,n.kt)("li",{parentName:"ul"},"/etc/hosts.deny"),(0,n.kt)("li",{parentName:"ul"},"/etc/httpd/logs/"),(0,n.kt)("li",{parentName:"ul"},"/etc/passwd"),(0,n.kt)("li",{parentName:"ul"},"/etc/rc.d"),(0,n.kt)("li",{parentName:"ul"},"/etc/utmp"),(0,n.kt)("li",{parentName:"ul"},"/private/var/log/"),(0,n.kt)("li",{parentName:"ul"},"/root/.bash_history"),(0,n.kt)("li",{parentName:"ul"},"/var/adm/wtmp"),(0,n.kt)("li",{parentName:"ul"},"/var/db/application_usage.sqlite"),(0,n.kt)("li",{parentName:"ul"},"/var/log"),(0,n.kt)("li",{parentName:"ul"},"/var/run/utmp"),(0,n.kt)("li",{parentName:"ul"},"/var/run/wtmp")),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("p",null,"Cado Host collects the following artifacts on Windows, when available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Running Processes"),(0,n.kt)("li",{parentName:"ul"},"Active Network Connections"),(0,n.kt)("li",{parentName:"ul"},"$MFT"),(0,n.kt)("li",{parentName:"ul"},"ALLUSERSPROFILE\\McAfee\\DesktopProtection\\AccessProtectionLog.txt"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\LocalLow\\Sun\\Java\\Deployment\\cache\\6.0"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\Apple Computer\\Safari\\Cookies\\Cookies.binarycookies"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\ConnectedDevicesPlatform"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\Google\\Chrome\\User Data\\Default\\Extensions"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\Google\\Chrome\\User Data\\Default\\History"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\Google\\Chrome\\User Data\\Default\\Web Data"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\Microsoft\\Windows\\Explorer"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\Microsoft\\Windows\\FileHistory\\Configuration"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\Microsoft\\Windows\\UsrClass.dat"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\Microsoft\\Windows\\UsrClass.dat.LOG1"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\Microsoft\\Windows\\UsrClass.dat.LOG2"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Local\\Microsoft\\Windows\\WebCache"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Roaming\\Microsoft\\Windows\\Recent"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Roaming\\Microsoft\\Windows\\Recent\\AutomaticDestinations\\"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Roaming\\Mozilla\\Firefox\\Profiles\\"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Roaming\\Opera\\Opera\\global_history.dat"),(0,n.kt)("li",{parentName:"ul"},"APPDATA\\Roaming\\Opera\\Opera\\typed_history.xml"),(0,n.kt)("li",{parentName:"ul"},"NTUSER.DAT"),(0,n.kt)("li",{parentName:"ul"},"NTUSER.DAT.LOG1"),(0,n.kt)("li",{parentName:"ul"},"NTUSER.DAT.LOG2"),(0,n.kt)("li",{parentName:"ul"},"PROGRAMDATA\\McAfee\\DesktopProtection\\AccessProtectionLog.txt"),(0,n.kt)("li",{parentName:"ul"},"PROGRAMDATA\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\AppCompat\\Programs\\AmCache.hve"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\Prefetch"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\SchedLgU.Txt"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\Config\\AppEvent.evt"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\Config\\SecEvent.evt"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\Config\\SysEvent.evt"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\LogFiles\\W3SVC1"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\Tasks"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SAM"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SAM.LOG1"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SAM.LOG2"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SECURITY"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SECURITY.LOG1"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SECURITY.LOG2"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SOFTWARE"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SOFTWARE.LOG1"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SOFTWARE.LOG2"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SYSTEM"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SYSTEM.LOG1"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\config\\SYSTEM.LOG2"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\drivers\\etc\\hosts"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\sru"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\System32\\winevt\\logs"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\Tasks"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\inf\\setupapi.dev.log"),(0,n.kt)("li",{parentName:"ul"},"SYSTEMROOT\\inf\\setupapi.log"),(0,n.kt)("li",{parentName:"ul"},"inetpub\\logs\\LogFiles")))}m.isMDXComponent=!0}}]);