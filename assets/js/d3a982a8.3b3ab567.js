"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9075],{95792:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=e(74848),i=e(28453);const s={title:"Custom location for Cado Host",hide_title:!0,sidebar_position:5},r="How to Set a Custom Location to Deploy Cado Host From",a={id:"cado/discovery-import/cado-host/custom-locations",title:"Custom location for Cado Host",description:"You can configure a custom location for deploying Cado Host, whether using the Import > Cado Host option or during container acquisitions that utilize Cado Host.",source:"@site/docs/cado/discovery-import/cado-host/custom-locations.md",sourceDirName:"cado/discovery-import/cado-host",slug:"/cado/discovery-import/cado-host/custom-locations",permalink:"/cado/discovery-import/cado-host/custom-locations",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/cado-host/custom-locations.md",tags:[],version:"current",lastUpdatedAt:1735813116,formattedLastUpdatedAt:"Jan 2, 2025",sidebarPosition:5,frontMatter:{title:"Custom location for Cado Host",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Azure credentials",permalink:"/cado/discovery-import/cado-host/azure-credentials"},next:{title:"Command line parameters",permalink:"/cado/discovery-import/cado-host/cli"}},c={},d=[{value:"Important Notes:",id:"important-notes",level:3},{value:"Ensure Binary Availability:",id:"ensure-binary-availability",level:3}];function l(o){const t={admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-set-a-custom-location-to-deploy-cado-host-from",children:"How to Set a Custom Location to Deploy Cado Host From"}),"\n",(0,n.jsxs)(t.p,{children:["You can configure a custom location for deploying Cado Host, whether using the ",(0,n.jsx)(t.strong,{children:"Import > Cado Host"})," option or during container acquisitions that utilize Cado Host."]}),"\n",(0,n.jsxs)(t.p,{children:["This configuration can be set under ",(0,n.jsx)(t.strong,{children:"Settings > Advanced"}),":"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Custom Cado Host Settings",src:e(52109).A+"",width:"1999",height:"462"})}),"\n",(0,n.jsx)(t.p,{children:"This feature is helpful if you want to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Deploy Cado Host from your own environment."}),"\n",(0,n.jsx)(t.li,{children:"Allow a specific IP that hosts the binaries through your firewall."}),"\n",(0,n.jsx)(t.li,{children:"Perform static analysis of the binaries before they are deployed."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"important-notes",children:"Important Notes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ensure that the Cado Host binary is the latest version to maintain compatibility with the platform."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For example:\nIf the latest official URL for the Cado Host Linux binary is:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://official-cado-bucket.s3-accelerate.amazonaws.com/cado-host/v1.5.4/linux/cado-host\n"})}),"\n",(0,n.jsx)(t.p,{children:"And you are hosting the binaries at:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"http://example.com/my-folder/\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Enter ",(0,n.jsx)(t.code,{children:"http://example.com/my-folder/"})," as the custom URL."]}),"\n",(0,n.jsxs)(t.li,{children:["Ensure the following structure exists: ",(0,n.jsx)(t.code,{children:"http://example.com/my-folder/cado-host/v1.5.4/linux/cado-host"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ensure-binary-availability",children:"Ensure Binary Availability:"}),"\n",(0,n.jsx)(t.p,{children:"To ensure collections succeed across all environments, binaries for all operating systems must be available:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"/linux/cado-host"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"/windows/cado-host.exe"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"/osx/cado-host"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"/osx/cado-host-x86"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Cado Host binaries are typically updated 1-2 times per quarter."}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.p,{children:["For compatibility, the download uses ",(0,n.jsx)(t.strong,{children:"HTTPS"})," and does not leverage AWS IAM. Therefore, non-public S3 buckets cannot be used to host the binaries. The binaries must be accessible via an HTTPS download link, such as:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"curl https://bucket/cado-host\n"})})]})]})}function h(o={}){const{wrapper:t}={...(0,i.R)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(l,{...o})}):l(o)}},52109:(o,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/custom-cado-host-95f4e7809ff05bb85ddfa4595474383c.png"},28453:(o,t,e)=>{e.d(t,{R:()=>r,x:()=>a});var n=e(96540);const i={},s=n.createContext(i);function r(o){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function a(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:r(o.components),n.createElement(s.Provider,{value:t},o.children)}}}]);