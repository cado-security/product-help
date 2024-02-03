"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[968],{1930:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=o(5893),s=o(1151);const i={title:"Memory Analysis",hide_title:!0,sidebar_position:3},n="Memory Analysis",a={id:"cado-response/discovery-import/import/data-types/memory",title:"Memory Analysis",description:"You can perform a memory acquisition of a Windows or Linux system using Cado Host by clicking Import > Forensic Artifacts and running the pre-generated script on the host device. Process memory collection is not currently supported on OSX.",source:"@site/docs/cado-response/discovery-import/import/data-types/memory.md",sourceDirName:"cado-response/discovery-import/import/data-types",slug:"/cado-response/discovery-import/import/data-types/memory",permalink:"/cado-response/discovery-import/import/data-types/memory",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/data-types/memory.md",tags:[],version:"current",lastUpdatedAt:1706971022,formattedLastUpdatedAt:"Feb 3, 2024",sidebarPosition:3,frontMatter:{title:"Memory Analysis",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Log Types",permalink:"/cado-response/discovery-import/import/data-types/logs"},next:{title:"Supported Import Types",permalink:"/cado-response/discovery-import/import/data-types/import-types"}},c={},d=[];function m(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"memory-analysis",children:"Memory Analysis"}),"\n",(0,r.jsxs)(t.p,{children:["You can perform a memory acquisition of a Windows or Linux system using Cado Host by clicking ",(0,r.jsx)(t.code,{children:"Import > Forensic Artifacts"})," and running the pre-generated script on the host device. Process memory collection is not currently supported on OSX."]}),"\n",(0,r.jsxs)(t.p,{children:['We collect memory from individual processes as .mem files, viewable under the "process_dumps" folder. We find this allows for more reliable analysis than our previous version which collected a single capture of memory, and utilises our open source tool ',(0,r.jsx)(t.a,{href:"https://github.com/cado-security/varc",children:"varc"})]}),"\n",(0,r.jsxs)(t.p,{children:["For importing externally acquired memory, ensure the memory dump is named with a ",(0,r.jsx)(t.code,{children:".mem"})," file extension so it is recognized as a memory file and upload the memory file to an S3 bucket (or Azure Storage) to which Cado has access.  Then click ",(0,r.jsx)(t.code,{children:"Import > AWS S3 Bucket"})," within Cado, navigate to the S3 bucket where the .mem file resides, and import it."]}),"\n",(0,r.jsx)(t.p,{children:'You can acquire memory of Linux systems in EC2 by using the "Alternate Acquisition" option under Import > EC2:'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"AWS Memory",src:o(877).Z+"",width:"1648",height:"284"})}),"\n",(0,r.jsx)(t.p,{children:"This requires the AWS SSM agent to be running on the EC2 and registered within the AWS Systems Manager. If it is not, you can acquire memory by connecting to the machine over SSH or RDP and executing Cado Host from Import > Forensic Artifacts. You can also use this method to acquire from Windows systems."}),"\n",(0,r.jsx)(t.p,{children:"Any acquisition from a container (e.g. ECS/EKS/AKS) will attempt to collect memory by default."}),"\n",(0,r.jsx)(t.p,{children:"Once processed, you will be able to browse the file system including the contents of files (if they were in memory at the time) and view information from running processes and network connections."})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},877:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/alternate-ec2-1d44379783163049a09c15fbf9a92565.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>n});var r=o(7294);const s={},i=r.createContext(s);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);