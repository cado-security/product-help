"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2391],{45443:(o,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=r(74848),n=r(28453);const a={title:"Forward logs to SIEMs",hide_title:!0,sidebar_position:3},s="How to Forward Cado System and Processing Logs to SIEMs",l={id:"troubleshooting/logs-cloudwatch",title:"Forward logs to SIEMs",description:"Log Location",source:"@site/docs/troubleshooting/logs-cloudwatch.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/logs-cloudwatch",permalink:"/troubleshooting/logs-cloudwatch",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/troubleshooting/logs-cloudwatch.md",tags:[],version:"current",lastUpdatedAt:1741200188,formattedLastUpdatedAt:"Mar 5, 2025",sidebarPosition:3,frontMatter:{title:"Forward logs to SIEMs",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to send logs to Cado",permalink:"/troubleshooting/send-logs"},next:{title:"Commercial EULA",permalink:"/troubleshooting/eula/commercial-eula"}},i={},d=[{value:"Log Location",id:"log-location",level:2},{value:"Support for Log Forwarders",id:"support-for-log-forwarders",level:2},{value:"CloudWatch in AWS",id:"cloudwatch-in-aws",level:2},{value:"Forwarding full Cado analysis",id:"forwarding-full-cado-analysis",level:2},{value:"Third party log forwarder resources",id:"third-party-log-forwarder-resources",level:2}];function c(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...o.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"how-to-forward-cado-system-and-processing-logs-to-siems",children:"How to Forward Cado System and Processing Logs to SIEMs"}),"\n",(0,t.jsx)(e.h2,{id:"log-location",children:"Log Location"}),"\n",(0,t.jsx)(e.p,{children:"Cado logs live under /var/logs/cado - A forwarding agent (e.g. Splunk Universal Forwarder) can be installed to forward logs from this location."}),"\n",(0,t.jsx)(e.h2,{id:"support-for-log-forwarders",children:"Support for Log Forwarders"}),"\n",(0,t.jsx)(e.p,{children:"As log forwarders are third party applications, Cado cannot provide support for e.g. Splunk Universal Forwader, AWS CloudWatch, Google Ops Agent or Azure Montior. Please contact the relevant vendor for supprt if you are having issues with the vendor log forwarding agent."}),"\n",(0,t.jsx)(e.h2,{id:"cloudwatch-in-aws",children:"CloudWatch in AWS"}),"\n",(0,t.jsx)(e.p,{children:"The CloudWatch agent is pre-installed in Cado releases.\nIf the platform has the necessary IAM and network permissions to send logs to CloudWatch, both application and operating system logs are forwarded to the following locations, specified in the cloudwatch agent configuration:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'  "file_path": "/var/log/*.log",\n  "log_group_name": "/var/logs/cado",\n  "log_stream_name": "cado-logs-all"\n'})}),"\n",(0,t.jsx)(e.h2,{id:"forwarding-full-cado-analysis",children:"Forwarding full Cado analysis"}),"\n",(0,t.jsx)(e.p,{children:"If SIEM forwarding is enabled (Settings > SIEM), all output is also recorded to /var/log/ and will be picked up by log forwarders along with other logs.\nForwarding to S3 is the reccomended solution for forwarding full Cado analysis as forwarding agents are not designed to forward log logs in this manner."}),"\n",(0,t.jsx)(e.h2,{id:"third-party-log-forwarder-resources",children:"Third party log forwarder resources"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://docs.splunk.com/Documentation/Forwarder/9.4.0/Forwarder/Configuretheuniversalforwarder",children:"Splunk Universal Log Forwarder Configuration"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/troubleshooting-CloudWatch-Agent.html",children:"Troubleshooting CloudWatch"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-rule-structure",children:"Log forwarding with Azure Monitor"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://cloud.google.com/logging/docs/agent/ops-agent/configuration",children:"Log forwarding with Google Ops Agent"})}),"\n"]})]})}function u(o={}){const{wrapper:e}={...(0,n.R)(),...o.components};return e?(0,t.jsx)(e,{...o,children:(0,t.jsx)(c,{...o})}):c(o)}},28453:(o,e,r)=>{r.d(e,{R:()=>s,x:()=>l});var t=r(96540);const n={},a=t.createContext(n);function s(o){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function l(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(n):o.components||n:s(o.components),t.createElement(a.Provider,{value:e},o.children)}}}]);