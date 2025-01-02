"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5754],{63837:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=s(74848),i=s(28453);const r={title:"Worker management",hide_title:!0,sidebar_position:6},o="What Are the Settings for Workers?",a={id:"cado/manage/workers",title:"Worker management",description:"This section explains the options available for managing workers that are spun up during processing jobs. You can access these settings under Settings > General Settings.",source:"@site/docs/cado/manage/workers.md",sourceDirName:"cado/manage",slug:"/cado/manage/workers",permalink:"/cado/manage/workers",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/workers.md",tags:[],version:"current",lastUpdatedAt:1735813116,formattedLastUpdatedAt:"Jan 2, 2025",sidebarPosition:6,frontMatter:{title:"Worker management",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Ping SAML",permalink:"/cado/manage/users-authentication/sso/ping_saml"},next:{title:"Manage data",permalink:"/cado/manage/data"}},c={},d=[{value:"Processing",id:"processing",level:2}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"what-are-the-settings-for-workers",children:"What Are the Settings for Workers?"}),"\n",(0,n.jsxs)(t.p,{children:["This section explains the options available for managing workers that are spun up during processing jobs. You can access these settings under ",(0,n.jsx)(t.strong,{children:"Settings > General Settings"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"processing",children:"Processing"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Maximum Workers"}),": This setting defines the maximum number of workers (AWS EC2 Instances) that the system can launch for processing. If this limit is reached, the platform will pause before starting additional workers. The default limit is 20. The platform will also pause if AWS VCPU limits in a region are exceeded."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Worker Instance Size"}),": This setting determines the size of the instance used for data processing. The default instance size in AWS (i3.4xlarge) provides 1.9 TB of disk space, which supports the processing of disks up to approximately 1.5 TB. In Azure, the default setting supports disks up to about 800 GB. If you need more working space, select a larger instance size based on your environment (AWS or Azure)."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For most AWS use cases, it is recommended to keep the ",(0,n.jsx)(t.strong,{children:"Worker Instance Size"})," set to a storage-optimized instance, such as ",(0,n.jsx)(t.code,{children:"i3.4xlarge"}),"."]})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Worker Shutdown Wait"}),": This setting defines how long (in seconds) a worker will remain active after completing a processing task before shutting down. The default value is 5 minutes (300 seconds) if no value is set."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);