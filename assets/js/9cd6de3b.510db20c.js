"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7],{17091:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=o(74848),n=o(28453);const t={title:"Log & artifact types",hide_title:!0,sidebar_position:1},l="What Log and Artifact Types Can Cado Process?",r={id:"cado/discovery-import/data-types/logs",title:"Log & artifact types",description:"Cado supports the processing of a wide range of evidence types, which may vary slightly depending on your cloud platform.",source:"@site/docs/cado/discovery-import/data-types/logs.md",sourceDirName:"cado/discovery-import/data-types",slug:"/cado/discovery-import/data-types/logs",permalink:"/cado/discovery-import/data-types/logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/data-types/logs.md",tags:[],version:"current",lastUpdatedAt:1738502359,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:1,frontMatter:{title:"Log & artifact types",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"File Types",permalink:"/cado/discovery-import/data-types/filetypes"},next:{title:"Memory analysis",permalink:"/cado/discovery-import/data-types/memory"}},a={},d=[{value:"What Cloud Logs Can Cado Import from Cloud Storage?",id:"what-cloud-logs-can-cado-import-from-cloud-storage",level:2},{value:"AWS Log Formats",id:"aws-log-formats",level:3},{value:"Azure Log Formats",id:"azure-log-formats",level:3},{value:"GCP Log Formats",id:"gcp-log-formats",level:3},{value:"What Logs Does Cado Capture via APIs?",id:"what-logs-does-cado-capture-via-apis",level:2},{value:"Operating System Log and Artifact Formats",id:"operating-system-log-and-artifact-formats",level:2},{value:"Adding Your Own Events",id:"adding-your-own-events",level:2},{value:"Log Analysis Considerations",id:"log-analysis-considerations",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"what-log-and-artifact-types-can-cado-process",children:"What Log and Artifact Types Can Cado Process?"}),"\n",(0,i.jsx)(s.p,{children:"Cado supports the processing of a wide range of evidence types, which may vary slightly depending on your cloud platform."}),"\n",(0,i.jsx)(s.h2,{id:"what-cloud-logs-can-cado-import-from-cloud-storage",children:"What Cloud Logs Can Cado Import from Cloud Storage?"}),"\n",(0,i.jsx)(s.p,{children:"Cado can import various cloud log types from cloud storage, including:"}),"\n",(0,i.jsx)(s.h3,{id:"aws-log-formats",children:"AWS Log Formats"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"CloudTrail logs"}),"\n",(0,i.jsx)(s.li,{children:"GuardDuty logs"}),"\n",(0,i.jsx)(s.li,{children:"Kubernetes logs"}),"\n",(0,i.jsx)(s.li,{children:"VPC Flow logs"}),"\n",(0,i.jsx)(s.li,{children:"SSM logs"}),"\n",(0,i.jsx)(s.li,{children:"S3 Access Logs"}),"\n",(0,i.jsx)(s.li,{children:"Route 53 (DNS) logs"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"azure-log-formats",children:"Azure Log Formats"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Activity logs"}),"\n",(0,i.jsx)(s.li,{children:"Storage logs"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"gcp-log-formats",children:"GCP Log Formats"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"VPC Flow logs"}),"\n",(0,i.jsx)(s.li,{children:"IAM logs"}),"\n",(0,i.jsx)(s.li,{children:"Admin Activity logs"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Cado also processes additional log types using generic extractors, so this list is not exhaustive."}),"\n",(0,i.jsx)(s.h2,{id:"what-logs-does-cado-capture-via-apis",children:"What Logs Does Cado Capture via APIs?"}),"\n",(0,i.jsx)(s.p,{children:"Cado can capture logs from the following cloud services via their APIs:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"AWS EC2"}),": When acquiring an EC2 system, Cado accesses the CloudTrail API to retrieve ",(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/working-with-flow-logs.html#create-flow-log",children:"VPC flow logs"})," and ",(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-getting-started.html",children:"CloudTrail logs"})," associated with the instance ID, if enabled."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"AWS Lambda"}),": Cado accesses the CloudWatch API to retrieve ",(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html",children:"logs associated with the Lambda function"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Azure Compute"}),": Cado retrieves ",(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/azure-monitor/platform/activity-log",children:"activity logs associated with the virtual machine"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"If logs are stored in a central account, Cado currently cannot traverse accounts to pull logs from different accounts. In such cases, logs must be collected in cloud storage and imported from there."}),"\n",(0,i.jsx)(s.h2,{id:"operating-system-log-and-artifact-formats",children:"Operating System Log and Artifact Formats"}),"\n",(0,i.jsx)(s.p,{children:"Here is a non-exhaustive list of the forensic artifacts Cado can process:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Common AWS, Azure, and GCP logs"}),"\n",(0,i.jsx)(s.li,{children:"Apple System Log (ASL)"}),"\n",(0,i.jsx)(s.li,{children:"Android usage history (app usage)"}),"\n",(0,i.jsx)(s.li,{children:"Basic Security Module (BSM)"}),"\n",(0,i.jsx)(s.li,{children:"Bencode files"}),"\n",(0,i.jsx)(s.li,{children:"Chrome Disk Cache and Preferences"}),"\n",(0,i.jsx)(s.li,{children:"CUPS IPP logs"}),"\n",(0,i.jsx)(s.li,{children:"Extensible Storage Engine (ESE) Database (EDB)"}),"\n",(0,i.jsx)(s.li,{children:"Firefox Cache"}),"\n",(0,i.jsx)(s.li,{children:"Java Web Start IDX"}),"\n",(0,i.jsxs)(s.li,{children:["JumpLists (",(0,i.jsx)(s.code,{children:"customDestinations-ms"})," files)"]}),"\n",(0,i.jsx)(s.li,{children:"MacOS Application Firewall, Keychain, Securityd, and Wifi logs"}),"\n",(0,i.jsx)(s.li,{children:"McAfee Anti-Virus logs"}),"\n",(0,i.jsxs)(s.li,{children:["Microsoft Internet Explorer History (MSIE4-9 Cache Files or ",(0,i.jsx)(s.code,{children:"index.dat"}),")"]}),"\n",(0,i.jsx)(s.li,{children:"Microsoft IIS logs"}),"\n",(0,i.jsxs)(s.li,{children:["NTFS ",(0,i.jsx)(s.code,{children:"$MFT"})," and ",(0,i.jsx)(s.code,{children:"$UsnJrnl:$J"})]}),"\n",(0,i.jsx)(s.li,{children:"OLE Compound Files"}),"\n",(0,i.jsx)(s.li,{children:"Opera Browser History"}),"\n",(0,i.jsx)(s.li,{children:"OpenXML"}),"\n",(0,i.jsx)(s.li,{children:"Portable Executable (PE) files"}),"\n",(0,i.jsx)(s.li,{children:"PLSQL cache files (PL-SQL developer recall files)"}),"\n",(0,i.jsx)(s.li,{children:"Popularity Contest logs"}),"\n",(0,i.jsx)(s.li,{children:"Property List (plist)"}),"\n",(0,i.jsxs)(s.li,{children:["Restore Point logs (",(0,i.jsx)(s.code,{children:"rp.log"}),")"]}),"\n",(0,i.jsx)(s.li,{children:"Safari Binary Cookies"}),"\n",(0,i.jsx)(s.li,{children:"SCCM Client logs"}),"\n",(0,i.jsx)(s.li,{children:"SELinux audit logs"}),"\n",(0,i.jsx)(s.li,{children:"SkyDrive log and error logs"}),"\n",(0,i.jsx)(s.li,{children:"SQLite databases"}),"\n",(0,i.jsx)(s.li,{children:"Symantec AV Corporate Edition and Endpoint Protection logs"}),"\n",(0,i.jsx)(s.li,{children:"Syslog"}),"\n",(0,i.jsx)(s.li,{children:"Utmp, Utmpx"}),"\n",(0,i.jsx)(s.li,{children:"Windows Event Logs (EVT, EVTX)"}),"\n",(0,i.jsx)(s.li,{children:"Windows Firewall logs"}),"\n",(0,i.jsx)(s.li,{children:"Windows Job files (atjobs)"}),"\n",(0,i.jsx)(s.li,{children:"Windows Prefetch files"}),"\n",(0,i.jsxs)(s.li,{children:["Windows Recycle Bin (",(0,i.jsx)(s.code,{children:"INFO2"})," and ",(0,i.jsx)(s.code,{children:"$I/$R"}),")"]}),"\n",(0,i.jsx)(s.li,{children:"Windows NT Registry Files"}),"\n",(0,i.jsx)(s.li,{children:"Windows Shortcut Files (LNK)"}),"\n",(0,i.jsx)(s.li,{children:"Xchat and Xchat scrollback files"}),"\n",(0,i.jsx)(s.li,{children:"Zsh history files"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Cado can also process many other log formats not listed here. If you have a log format you'd like to see supported, please contact us at ",(0,i.jsx)(s.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"adding-your-own-events",children:"Adding Your Own Events"}),"\n",(0,i.jsx)(s.p,{children:"During an investigation, you may want to add custom events to the timeline, such as key events tracked in a spreadsheet. The simplest way to add custom events is to import an ISO format log event with the following format:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"YYYY-MM-DD HH:MM:SS Log Event Message\n"})}),"\n",(0,i.jsxs)(s.p,{children:["For example, saving this text in a file named ",(0,i.jsx)(s.code,{children:"custom_events.log"})," and importing it into the platform:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"2021-01-01 01:01:01 User phoned help desk and reported ransomware\n2021-01-01 01:01:02 Three more phone calls to help desk\n"})}),"\n",(0,i.jsx)(s.p,{children:"Will result in events such as the following:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Custom logs imported into Cado",src:o(23979).A+"",width:"433",height:"255"})}),"\n",(0,i.jsx)(s.h2,{id:"log-analysis-considerations",children:"Log Analysis Considerations"}),"\n",(0,i.jsxs)(s.p,{children:["For analyzing large sets of logs (typically over 1 million events) and uncovering suspicious behavior, we recommend using traditional SIEM solutions or open-source tools like Cado's ",(0,i.jsx)(s.a,{href:"https://github.com/cado-security/cloudgrep",children:"cloudgrep"}),". Cado's primary focus is on capturing more than just logs from cloud service providers and other log sources. See ",(0,i.jsx)(s.a,{href:"/cado/intro",children:"here"})," for more details on Cado's capabilities."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},23979:(e,s,o)=>{o.d(s,{A:()=>i});const i=o.p+"assets/images/custom_log-c23723dfac762109a84bbbdd4a04d760.png"},28453:(e,s,o)=>{o.d(s,{R:()=>l,x:()=>r});var i=o(96540);const n={},t=i.createContext(n);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);