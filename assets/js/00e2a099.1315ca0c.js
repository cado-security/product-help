"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6337],{2317:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=o(5893),n=o(1151);const r={title:"Manage data",hide_title:!0,sidebar_position:8},s="How to Manage Data in the Cado Platform",i={id:"cado/manage/data",title:"Manage data",description:"There are several important considerations when managing data in the Cado platform.",source:"@site/docs/cado/manage/data.md",sourceDirName:"cado/manage",slug:"/cado/manage/data",permalink:"/cado/manage/data",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/data.md",tags:[],version:"current",lastUpdatedAt:1731676720,formattedLastUpdatedAt:"Nov 15, 2024",sidebarPosition:8,frontMatter:{title:"Manage data",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Worker management",permalink:"/cado/manage/workers"},next:{title:"Expand disk in AWS",permalink:"/cado/manage/expand-disk"}},c={},l=[{value:"Controlling the Lifecycle of Data Stored by the Cado Platform",id:"controlling-the-lifecycle-of-data-stored-by-the-cado-platform",level:2},{value:"Storing Sensitive Customer Data",id:"storing-sensitive-customer-data",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-manage-data-in-the-cado-platform",children:"How to Manage Data in the Cado Platform"}),"\n",(0,a.jsx)(t.p,{children:"There are several important considerations when managing data in the Cado platform."}),"\n",(0,a.jsx)(t.h2,{id:"controlling-the-lifecycle-of-data-stored-by-the-cado-platform",children:"Controlling the Lifecycle of Data Stored by the Cado Platform"}),"\n",(0,a.jsx)(t.p,{children:"Each cloud provider offers tools to help manage the lifecycle of data stored in their environments. The Cado platform supports these tools based on the cloud provider you use:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"AWS"}),": You can use ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",children:"Object Locks"})})," and ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/console/s3/lifecyclerules",children:"Lifecycle Rules"})})," in your S3 bucket to control data retention and deletion. For more details, refer to the AWS documentation."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Azure"}),": Manage data lifecycle through ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview",children:"Life Cycle Management Policies"})})," for Azure Blob Storage. For more information, refer to the Azure documentation."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Google Cloud"}),": Use ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://cloud.google.com/storage/docs/lifecycle",children:"Object Lifecycle Management"})})," for Google Cloud Storage buckets to control data lifecycle. See the Google Cloud documentation for further details."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"storing-sensitive-customer-data",children:"Storing Sensitive Customer Data"}),"\n",(0,a.jsx)(t.p,{children:"The storage of sensitive customer data in the Cado platform depends on the types of data sources and evidence imported into the software. Data can be stored in several locations, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The database on the main Cado instance."}),"\n",(0,a.jsx)(t.li,{children:"EFS (Elastic File System)."}),"\n",(0,a.jsx)(t.li,{children:"The customer's S3 bucket (AWS) or Azure storage."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Because the Cado platform is deployed within the customer's cloud environment, the customer has full control over data lifecycle management (e.g., using Lifecycle Management policies) and access controls, such as VPC and subnet rules, to secure sensitive data."})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>s});var a=o(7294);const n={},r=a.createContext(n);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);