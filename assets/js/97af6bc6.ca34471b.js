"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8399],{5915:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(5893),r=t(1151);const o={title:"Worker Management",hide_title:!0,sidebar_position:6},i="What are the settings for Workers?",a={id:"cado-response/manage/workers",title:"Worker Management",description:"This section covers the options available for managing workers spun up during processing jobs. These settings can be accessed under Settings > General Settings",source:"@site/docs/cado-response/manage/workers.md",sourceDirName:"cado-response/manage",slug:"/cado-response/manage/workers",permalink:"/cado-response/manage/workers",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/workers.md",tags:[],version:"current",lastUpdatedAt:1728549726,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:6,frontMatter:{title:"Worker Management",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Ping SAML",permalink:"/cado-response/manage/users-authentication/sso/ping_saml"},next:{title:"Manage data",permalink:"/cado-response/manage/data"}},c={},d=[{value:"Processing",id:"processing",level:2}];function l(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"what-are-the-settings-for-workers",children:"What are the settings for Workers?"}),"\n",(0,n.jsxs)(s.p,{children:["This section covers the options available for managing workers spun up during processing jobs. These settings can be accessed under ",(0,n.jsx)(s.strong,{children:"Settings > General Settings"})]}),"\n",(0,n.jsx)(s.h2,{id:"processing",children:"Processing"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Maximum Workers"})," sets the maximum number of workers (AWS EC2 Instances) the system will start for processing. The platform will wait to launch new workers if this limit is exceeded. The default value is 20.  The platform will also back off and wait if the AWS limits for the maximum number of VCPUs in a region have been exceeded."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Worker Instance Size"})," limits the size of data that can be imported. The default setting in AWS (i3.4xlarge) has 1.9 TB of disk space, allowing the processing of disks up to approximately 1.5 TB in size. The default Azure setting allows the processing of disks up to approximately 800 GB in size. Please set a large instance size (see for AWS or Azure) to increase the working space."]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["In AWS, for most use cases, you should keep the Worker Instance Size set to a Storage Optimized instance, like an ",(0,n.jsx)(s.code,{children:"i3.4xlarge"})]})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Worker Shutdown Wait"})," is the number of seconds after a worker finishes processing a pipeline before it should shutdown. If nothing is set, the default is 5 minutes (300 seconds)."]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var n=t(7294);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);