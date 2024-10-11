"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7836],{4211:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var s=n(5893),t=n(1151);const l={title:"Collected artifacts",hide_title:!0,sidebar_position:3},o="What artifacts are collected by Cado Host",r={id:"cado/discovery-import/cado-host/artifacts",title:"Collected artifacts",description:"Cado Host collects a number of artifacts by default, based on the operating system.  Note that you can configure additional files and folders to be collected by defining the --additionalfiles parameter when running Cado Host.  See the --additionalfiles Command Line Parameters for more details.",source:"@site/docs/cado/discovery-import/cado-host/artifacts.md",sourceDirName:"cado/discovery-import/cado-host",slug:"/cado/discovery-import/cado-host/artifacts",permalink:"/cado/discovery-import/cado-host/artifacts",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/cado-host/artifacts.md",tags:[],version:"current",lastUpdatedAt:1728665709,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:3,frontMatter:{title:"Collected artifacts",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploy via API",permalink:"/cado/discovery-import/cado-host/api-deploy"},next:{title:"AWS credentials",permalink:"/cado/discovery-import/cado-host/aws-credentials"}},c={},a=[{value:"Volatile Data",id:"volatile-data",level:3},{value:"Linux and OSX",id:"linux-and-osx",level:3},{value:"Windows",id:"windows",level:3}];function d(e){const i={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"what-artifacts-are-collected-by-cado-host",children:"What artifacts are collected by Cado Host"}),"\n",(0,s.jsxs)(i.p,{children:["Cado Host collects a number of artifacts by default, based on the operating system.  Note that you can configure additional files and folders to be collected by defining the --additional_files parameter when running Cado Host.  See the ",(0,s.jsx)(i.code,{children:"--additional_files"})," ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"cli",children:"Command Line Parameters"})})," for more details."]}),"\n",(0,s.jsx)(i.h3,{id:"volatile-data",children:"Volatile Data"}),"\n",(0,s.jsx)(i.p,{children:"Cado Host collects the following volatile data available at the time Cado Host is executed"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Data about running processes"}),"\n",(0,s.jsxs)(i.li,{children:["Memory of running processes on a per-process basis ",(0,s.jsxs)(i.em,{children:["(note - memory collection on Windows is disabled by default; ",(0,s.jsx)(i.a,{href:"cli",children:"see Command Line Parameters"})," )"]})]}),"\n",(0,s.jsx)(i.li,{children:"Netstat data of active connections"}),"\n",(0,s.jsx)(i.li,{children:"The contents of open files - for example running binaries"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"linux-and-osx",children:"Linux and OSX"}),"\n",(0,s.jsx)(i.p,{children:"Cado Host collects the following artifacts on Linux and OSX, when available:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:".bash_history"}),"\n",(0,s.jsx)(i.li,{children:".ssh/known_hosts"}),"\n",(0,s.jsx)(i.li,{children:"/.fseventsd"}),"\n",(0,s.jsx)(i.li,{children:"/Library/LaunchAgents"}),"\n",(0,s.jsx)(i.li,{children:"/Library/LaunchDaemons"}),"\n",(0,s.jsx)(i.li,{children:"/Library/Preferences/SystemConfiguration"}),"\n",(0,s.jsx)(i.li,{children:"/Library/Receipts/InstallHistory.plist"}),"\n",(0,s.jsx)(i.li,{children:"/Library/StartupItems"}),"\n",(0,s.jsx)(i.li,{children:"/System/Library/LaunchAgents"}),"\n",(0,s.jsx)(i.li,{children:"/System/Library/LaunchDaemons"}),"\n",(0,s.jsx)(i.li,{children:"/System/Library/StartupItems"}),"\n",(0,s.jsx)(i.li,{children:"/etc/group"}),"\n",(0,s.jsx)(i.li,{children:"/etc/hosts"}),"\n",(0,s.jsx)(i.li,{children:"/etc/hosts.allow"}),"\n",(0,s.jsx)(i.li,{children:"/etc/hosts.deny"}),"\n",(0,s.jsx)(i.li,{children:"/etc/httpd/logs/"}),"\n",(0,s.jsx)(i.li,{children:"/etc/passwd"}),"\n",(0,s.jsx)(i.li,{children:"/etc/rc.d"}),"\n",(0,s.jsx)(i.li,{children:"/etc/utmp"}),"\n",(0,s.jsx)(i.li,{children:"/private/var/log/"}),"\n",(0,s.jsx)(i.li,{children:"/root/.bash_history"}),"\n",(0,s.jsx)(i.li,{children:"/var/adm/wtmp"}),"\n",(0,s.jsx)(i.li,{children:"/var/db/application_usage.sqlite"}),"\n",(0,s.jsx)(i.li,{children:"/var/log"}),"\n",(0,s.jsx)(i.li,{children:"/var/run/utmp"}),"\n",(0,s.jsx)(i.li,{children:"/var/run/wtmp"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(i.p,{children:"Cado Host collects the following artifacts on Windows, when available:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Running Processes"}),"\n",(0,s.jsx)(i.li,{children:"Active Network Connections"}),"\n",(0,s.jsx)(i.li,{children:"$MFT"}),"\n",(0,s.jsx)(i.li,{children:"ALLUSERSPROFILE\\McAfee\\DesktopProtection\\AccessProtectionLog.txt"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\LocalLow\\Sun\\Java\\Deployment\\cache\\6.0"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\Apple Computer\\Safari\\Cookies\\Cookies.binarycookies"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\ConnectedDevicesPlatform"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\Google\\Chrome\\User Data\\Default\\Extensions"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\Google\\Chrome\\User Data\\Default\\History"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\Google\\Chrome\\User Data\\Default\\Web Data"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\Microsoft\\Windows\\Explorer"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\Microsoft\\Windows\\FileHistory\\Configuration"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\Microsoft\\Windows\\UsrClass.dat"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\Microsoft\\Windows\\UsrClass.dat.LOG1"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\Microsoft\\Windows\\UsrClass.dat.LOG2"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Local\\Microsoft\\Windows\\WebCache"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Roaming\\Microsoft\\Windows\\Recent"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Roaming\\Microsoft\\Windows\\Recent\\AutomaticDestinations\\"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Roaming\\Mozilla\\Firefox\\Profiles\\"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Roaming\\Opera\\Opera\\global_history.dat"}),"\n",(0,s.jsx)(i.li,{children:"APPDATA\\Roaming\\Opera\\Opera\\typed_history.xml"}),"\n",(0,s.jsx)(i.li,{children:"NTUSER.DAT"}),"\n",(0,s.jsx)(i.li,{children:"NTUSER.DAT.LOG1"}),"\n",(0,s.jsx)(i.li,{children:"NTUSER.DAT.LOG2"}),"\n",(0,s.jsx)(i.li,{children:"PROGRAMDATA\\McAfee\\DesktopProtection\\AccessProtectionLog.txt"}),"\n",(0,s.jsx)(i.li,{children:"PROGRAMDATA\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\AppCompat\\Programs\\AmCache.hve"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\Prefetch"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\SchedLgU.Txt"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\Config\\AppEvent.evt"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\Config\\SecEvent.evt"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\Config\\SysEvent.evt"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\LogFiles\\W3SVC1"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\Tasks"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SAM"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SAM.LOG1"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SAM.LOG2"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SECURITY"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SECURITY.LOG1"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SECURITY.LOG2"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SOFTWARE"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SOFTWARE.LOG1"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SOFTWARE.LOG2"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SYSTEM"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SYSTEM.LOG1"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\config\\SYSTEM.LOG2"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\drivers\\etc\\hosts"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\sru"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\System32\\winevt\\logs"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\Tasks"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\inf\\setupapi.dev.log"}),"\n",(0,s.jsx)(i.li,{children:"SYSTEMROOT\\inf\\setupapi.log"}),"\n",(0,s.jsx)(i.li,{children:"inetpub\\logs\\LogFiles"}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var s=n(7294);const t={},l=s.createContext(t);function o(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);