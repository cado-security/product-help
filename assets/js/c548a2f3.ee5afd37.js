"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5025],{9610:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=s(5893),t=s(1151);const n={title:"Log & Artifact Types",hide_title:!0,sidebar_position:1},r="Log & Artifact Types",l={id:"cado-response/discovery-import/import/data-types/logs",title:"Log & Artifact Types",description:"Cado Response supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform.",source:"@site/docs/cado-response/discovery-import/import/data-types/logs.md",sourceDirName:"cado-response/discovery-import/import/data-types",slug:"/cado-response/discovery-import/import/data-types/logs",permalink:"/cado-response/discovery-import/import/data-types/logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/data-types/logs.md",tags:[],version:"current",lastUpdatedAt:1723453534,formattedLastUpdatedAt:"Aug 12, 2024",sidebarPosition:1,frontMatter:{title:"Log & Artifact Types",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"File Types",permalink:"/cado-response/discovery-import/import/data-types/filetypes"},next:{title:"Memory Analysis",permalink:"/cado-response/discovery-import/import/data-types/memory"}},a={},d=[{value:"What cloud logs can Cado import from cloud Storage?",id:"what-cloud-logs-can-cado-import-from-cloud-storage",level:2},{value:"AWS Log Formats",id:"aws-log-formats",level:3},{value:"Azure Log Formats",id:"azure-log-formats",level:3},{value:"What logs does Cado capture via APIs?",id:"what-logs-does-cado-capture-via-apis",level:2},{value:"Operating System Log and Artifact Formats",id:"operating-system-log-and-artifact-formats",level:2},{value:"Log Analysis Considerations",id:"log-analysis-considerations",level:2}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"log--artifact-types",children:"Log & Artifact Types"}),"\n",(0,i.jsx)(o.p,{children:"Cado Response supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform."}),"\n",(0,i.jsx)(o.h2,{id:"what-cloud-logs-can-cado-import-from-cloud-storage",children:"What cloud logs can Cado import from cloud Storage?"}),"\n",(0,i.jsx)(o.p,{children:"Cado can import most cloud log types from cloud storage, including:"}),"\n",(0,i.jsx)(o.h3,{id:"aws-log-formats",children:"AWS Log Formats"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Cloud Trail logs"}),"\n",(0,i.jsx)(o.li,{children:"Guard Duty logs"}),"\n",(0,i.jsx)(o.li,{children:"Kubernetes logs"}),"\n",(0,i.jsx)(o.li,{children:"VPC Flow logs"}),"\n",(0,i.jsx)(o.li,{children:"SSM logs"}),"\n",(0,i.jsx)(o.li,{children:"S3 Access Logs"}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"azure-log-formats",children:"Azure Log Formats"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Activity logs"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"We can process additional log types through our generic extractors, so this list is not exhaustive."}),"\n",(0,i.jsx)(o.h2,{id:"what-logs-does-cado-capture-via-apis",children:"What logs does Cado capture via APIs?"}),"\n",(0,i.jsx)(o.p,{children:"Cado can capture logs from the following cloud services via their APIs:"}),"\n",(0,i.jsxs)(o.p,{children:["When acquiring an EC2 system, Cado accesses the CloudTrail API to retrieve ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/working-with-flow-logs.html#create-flow-log",children:"VPC flow logs"})," and ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-getting-started.html",children:"CloudTrail logs"})," associated with the instance id, if enabled."]}),"\n",(0,i.jsxs)(o.p,{children:["When acquiring a Lambda function, Cado accesses the CloudWatch API to retrieve ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html",children:"logs associated with the function"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["When acquiring Azure compute, Cado retrieves ",(0,i.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/azure-monitor/platform/activity-log",children:"activity logs associated with the VM"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"If logs are stored in a central account, at this point Cado does not have the capability to traverse accounts and pull logs from a different account. Instead, you would need to collect them in cloud storage and import from there."}),"\n",(0,i.jsx)(o.h2,{id:"operating-system-log-and-artifact-formats",children:"Operating System Log and Artifact Formats"}),"\n",(0,i.jsx)(o.p,{children:"A non-exhaustive list of the forenic artifacts that Cado can process is provided below:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Common AWS, Azure and GCP Logs"}),"\n",(0,i.jsx)(o.li,{children:"AppleSystemLog (ASL)"}),"\n",(0,i.jsx)(o.li,{children:"Androidusage-history (appusage)"}),"\n",(0,i.jsx)(o.li,{children:"BasicSecurityModule (BSM)"}),"\n",(0,i.jsx)(o.li,{children:"Bencodefiles"}),"\n",(0,i.jsx)(o.li,{children:"Chrome Disk Cache Format"}),"\n",(0,i.jsx)(o.li,{children:"Chrome preferences"}),"\n",(0,i.jsx)(o.li,{children:"CUPS IPP"}),"\n",(0,i.jsx)(o.li,{children:"ExtensibleStorageEngine (ESE) DatabaseFile (EDB)"}),"\n",(0,i.jsx)(o.li,{children:"Firefox Cache"}),"\n",(0,i.jsx)(o.li,{children:"JavaWeb Start IDX"}),"\n",(0,i.jsx)(o.li,{children:"JumpLists.customDestinations-msfiles"}),"\n",(0,i.jsx)(o.li,{children:"MacOS Application firewall"}),"\n",(0,i.jsx)(o.li,{children:"MacOS Keychain"}),"\n",(0,i.jsx)(o.li,{children:"MacOS Securityd"}),"\n",(0,i.jsx)(o.li,{children:"MacOS Wifi"}),"\n",(0,i.jsx)(o.li,{children:"mactimelogs"}),"\n",(0,i.jsx)(o.li,{children:"McAfee Anti-Virus Logs"}),"\n",(0,i.jsx)(o.li,{children:"Microsoft InternetExplorer History File Format (also known as MSIE4-9 Cache Files or index.dat)"}),"\n",(0,i.jsx)(o.li,{children:"Microsoft IIS log files"}),"\n",(0,i.jsx)(o.li,{children:"NTFS $MFT and $UsnJrnl:$J"}),"\n",(0,i.jsx)(o.li,{children:"OLE Compound File"}),"\n",(0,i.jsx)(o.li,{children:"Opera Browser history"}),"\n",(0,i.jsx)(o.li,{children:"OpenXML"}),"\n",(0,i.jsx)(o.li,{children:"Portable Executable (PE)"}),"\n",(0,i.jsx)(o.li,{children:"PLSQL cache file (PL-SQL developer recall files)"}),"\n",(0,i.jsx)(o.li,{children:"Popularity Contest log"}),"\n",(0,i.jsx)(o.li,{children:"Propertylist (plist)"}),"\n",(0,i.jsx)(o.li,{children:"RestorePointlogs (rp.log)"}),"\n",(0,i.jsx)(o.li,{children:"Safari Binary Cookies"}),"\n",(0,i.jsx)(o.li,{children:"SCCM client logs"}),"\n",(0,i.jsx)(o.li,{children:"SELinux audit logs"}),"\n",(0,i.jsx)(o.li,{children:"SkyDrive log and error log files"}),"\n",(0,i.jsx)(o.li,{children:"SQLite database format using SQLite"}),"\n",(0,i.jsx)(o.li,{children:"Symantec AV Corporate Edition and Endpoint Protection log"}),"\n",(0,i.jsx)(o.li,{children:"Syslog"}),"\n",(0,i.jsx)(o.li,{children:"utmp,utmpx"}),"\n",(0,i.jsx)(o.li,{children:"Windows EventLog (EVT)"}),"\n",(0,i.jsx)(o.li,{children:"Windows Firewall"}),"\n",(0,i.jsx)(o.li,{children:'Windows Job files (also known as "atjobs")'}),"\n",(0,i.jsx)(o.li,{children:"Windows Prefetch files"}),"\n",(0,i.jsx)(o.li,{children:"Windows Recyclebin (INFO2and$I/$R)"}),"\n",(0,i.jsx)(o.li,{children:"Windows NTRegistry File"}),"\n",(0,i.jsx)(o.li,{children:"Windows ShortcutFile (LNK)"}),"\n",(0,i.jsx)(o.li,{children:"WindowsXML EventLog (EVTX)"}),"\n",(0,i.jsx)(o.li,{children:"Xchat and Xchat scroll back files"}),"\n",(0,i.jsx)(o.li,{children:"Zsh history files"}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Cado can also import a number of other log formats that are not listed here; however, these evidence types and file formats are not officially supported.\nIf you have a log format that you would like to see supported, please reach out to ",(0,i.jsx)(o.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," and let us know."]}),"\n",(0,i.jsx)(o.h1,{id:"adding-your-own-events",children:"Adding Your Own Events"}),"\n",(0,i.jsx)(o.p,{children:"During an investigation, you may want to add our own non-computer generated events to the timeline.\nFor example, it is common to keep a Spreadsheet of key events in a large incident.\nThe simplest way to add these events into a Project timeline is to import an ISO Format Log event of the format:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["YYYY-MM-DD HH:MM",":SS"," Log Event Message"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:'For example you can save the following text into a file named "custom_events.log" then import into the platform:'}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"2021-01-01 01:01:01 User phoned help desk and reported ransomware\n2021-01-01 01:01:02 Three more phone calls to help desk\n"})}),"\n",(0,i.jsx)(o.p,{children:"Which will result in events such as the following:"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Custom logs imported into Cado",src:s(2319).Z+"",width:"433",height:"255"})}),"\n",(0,i.jsx)(o.h2,{id:"log-analysis-considerations",children:"Log Analysis Considerations"}),"\n",(0,i.jsxs)(o.p,{children:["For exposing or uncovering suspicious behavior within large sets of logs (typically anything over ~1 million events), we encourage leveraging traditional SIEM solutions and/or open-source tools, like Cado's cloudgrep: ",(0,i.jsx)(o.a,{href:"https://github.com/cado-security/cloudgrep",children:"https://github.com/cado-security/cloudgrep"}),".\nCado's emphasis is to capture more than just logs from Cloud Service Providers or other log sources. See ",(0,i.jsx)(o.a,{href:"cado-response/intro",children:"here"})," for more details on Cado's capabilities."]})]})}function h(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2319:(e,o,s)=>{s.d(o,{Z:()=>i});const i=s.p+"assets/images/custom_log-c23723dfac762109a84bbbdd4a04d760.png"},1151:(e,o,s)=>{s.d(o,{Z:()=>l,a:()=>r});var i=s(7294);const t={},n=i.createContext(t);function r(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);