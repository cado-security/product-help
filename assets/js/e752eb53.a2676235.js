"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2391],{45443:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=e(74848),s=e(28453);const a={title:"Forward logs to SIEMs",hide_title:!0,sidebar_position:3},l="How to Forward Cado System and Processing Logs to SIEMs",r={id:"troubleshooting/logs-cloudwatch",title:"Forward logs to SIEMs",description:"Log Location",source:"@site/docs/troubleshooting/logs-cloudwatch.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/logs-cloudwatch",permalink:"/troubleshooting/logs-cloudwatch",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/troubleshooting/logs-cloudwatch.md",tags:[],version:"current",lastUpdatedAt:1739272832,formattedLastUpdatedAt:"Feb 11, 2025",sidebarPosition:3,frontMatter:{title:"Forward logs to SIEMs",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to send logs to Cado",permalink:"/troubleshooting/send-logs"},next:{title:"Commercial EULA",permalink:"/troubleshooting/eula/commercial-eula"}},i={},d=[{value:"Log Location",id:"log-location",level:2},{value:"CloudWatch in AWS",id:"cloudwatch-in-aws",level:2},{value:"Forwarding full Cado analysis output to Cloudwatch",id:"forwarding-full-cado-analysis-output-to-cloudwatch",level:2}];function c(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-forward-cado-system-and-processing-logs-to-siems",children:"How to Forward Cado System and Processing Logs to SIEMs"}),"\n",(0,n.jsx)(t.h2,{id:"log-location",children:"Log Location"}),"\n",(0,n.jsx)(t.p,{children:"Cado logs live under /var/logs/cado - A forwarding agent (e.g. Splunk Universal Forwarder) can be installed to forward logs from this location."}),"\n",(0,n.jsx)(t.h2,{id:"cloudwatch-in-aws",children:"CloudWatch in AWS"}),"\n",(0,n.jsx)(t.p,{children:"If the platform has the necessary IAM and network permissions to send logs to CloudWatch, both application and operating system logs are forwarded to the following locations:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'"log_group_name": "/var/logs/cado",\n"log_stream_name": "cado-logs-all"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"forwarding-full-cado-analysis-output-to-cloudwatch",children:"Forwarding full Cado analysis output to Cloudwatch"}),"\n",(0,n.jsxs)(t.p,{children:["If SIEM forwarding is enabled (Settings > SIEM), all output is also forwarded to CloudWatch so long as the agent ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/troubleshooting-CloudWatch-Agent.html",children:"has access"})," to CloudWatch."]})]})}function u(o={}){const{wrapper:t}={...(0,s.R)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(c,{...o})}):c(o)}},28453:(o,t,e)=>{e.d(t,{R:()=>l,x:()=>r});var n=e(96540);const s={},a=n.createContext(s);function l(o){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function r(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:l(o.components),n.createElement(a.Provider,{value:t},o.children)}}}]);