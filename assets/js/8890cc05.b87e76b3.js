"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[851],{4999:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var s=o(5893),a=o(1151);const i={title:"S3",hide_title:!0,sidebar_position:2},r="How to import data from S3",n={id:"cado/discovery-import/aws/aws-s3",title:"S3",description:"The Cado platform supports acquisition of data from AWS S3 buckets. The two main use cases for this are:",source:"@site/docs/cado/discovery-import/aws/aws-s3.md",sourceDirName:"cado/discovery-import/aws",slug:"/cado/discovery-import/aws/aws-s3",permalink:"/cado/discovery-import/aws/aws-s3",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/aws/aws-s3.md",tags:[],version:"current",lastUpdatedAt:1728665709,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:2,frontMatter:{title:"S3",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"EC2 and EBS",permalink:"/cado/discovery-import/aws/aws-ec2"},next:{title:"AMI, EBS Snapshot and Volume",permalink:"/cado/discovery-import/aws/aws-ami"}},c={},d=[{value:"Uploading On-Premise evidence to S3 for Import",id:"uploading-on-premise-evidence-to-s3-for-import",level:2},{value:"Data Flow Diagram",id:"data-flow-diagram",level:3}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"how-to-import-data-from-s3",children:"How to import data from S3"}),"\n",(0,s.jsx)(t.p,{children:"The Cado platform supports acquisition of data from AWS S3 buckets. The two main use cases for this are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Analyzing disk images or zip files that have been uploaded to an S3 bucket as part of an investigation (e.g. as part of using Cado Community Edition)"}),"\n",(0,s.jsx)(t.li,{children:"Analyzing the contents of an S3 bucket for any uploaded content that could be part of an incident"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Select or search for the bucket you require. Navigate and select the objects you need, and click the 'Import n objects' button. Confirm the details and click 'Start Import'."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Import S3 Bucket",src:o(1321).Z+"",width:"1792",height:"717"})}),"\n",(0,s.jsx)(t.h2,{id:"uploading-on-premise-evidence-to-s3-for-import",children:"Uploading On-Premise evidence to S3 for Import"}),"\n",(0,s.jsxs)(t.p,{children:["You can use the ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/",children:"AWS Console"})," to upload data from your web browser if you have access to it."]}),"\n",(0,s.jsxs)(t.p,{children:["Alternatively, you can create an ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:"AWS Access and Secret Key"})," then use a Desktop GUI tool such as ",(0,s.jsx)(t.a,{href:"https://cyberduck.io/",children:"Cyberduck"})," to easily upload files from your desktop, with support for functionality such as resuming failed uploads."]}),"\n",(0,s.jsx)(t.p,{children:"If you create an Access/Secret for uploading data to S3, we recommend you scope the access by:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Giving the associated role ",(0,s.jsx)(t.a,{href:"https://stackoverflow.com/questions/15076645/amazon-s3-write-only-access",children:"write-only"})," access to a single s3 bucket"]}),"\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.a,{href:"https://docs.cyberduck.io/protocols/s3/",children:"temporary credentials"})," if possible"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can also use Cado Host with the --single_file_unzipped parameter - this may be a good option if you do not have direct access to Azure as Cado will generate the credentials at Import > Cado Host."}),"\n",(0,s.jsx)(t.h3,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,s.jsx)(t.p,{children:"For a diagram of how our S3 acquisitions operate, please see below:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"S3 Data Flow",src:o(5288).Z+"",width:"990",height:"918"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1321:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/aws-s3-c3bf146f7f2bb323a692f608e9adb13b.png"},5288:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/s3-imports-1c26d86c49e1614c158b365ba386b5ba.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>n,a:()=>r});var s=o(7294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);