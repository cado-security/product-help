"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8252],{80998:(s,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var e=i(74848),a=i(28453);const o={title:"AMI, EBS Snapshot and Volume",hide_title:!0,sidebar_position:3},n="How to Import AWS AMIs, EBS Snapshots, and Volumes",r={id:"cado/discovery-import/aws/aws-ami",title:"AMI, EBS Snapshot and Volume",description:"The Cado platform allows you to acquire AWS AMIs, EBS Snapshots, or Volumes using either a cross-account role or by directly sharing the image or snapshot with the Cado AWS account.",source:"@site/docs/cado/discovery-import/aws/aws-ami.md",sourceDirName:"cado/discovery-import/aws",slug:"/cado/discovery-import/aws/aws-ami",permalink:"/cado/discovery-import/aws/aws-ami",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/aws/aws-ami.md",tags:[],version:"current",lastUpdatedAt:1741200188,formattedLastUpdatedAt:"Mar 5, 2025",sidebarPosition:3,frontMatter:{title:"AMI, EBS Snapshot and Volume",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"EC2 and EBS",permalink:"/cado/discovery-import/aws/aws-ec2"},next:{title:"S3",permalink:"/cado/discovery-import/aws/aws-s3"}},d={},c=[{value:"Sharing AMIs and Snapshots",id:"sharing-amis-and-snapshots",level:3},{value:"Steps to Import",id:"steps-to-import",level:3},{value:"Data Flow Diagrams",id:"data-flow-diagrams",level:2},{value:"Original Acquisition via EBS Snapshots",id:"original-acquisition-via-ebs-snapshots",level:3},{value:"Faster Acquisition via EBS Direct API",id:"faster-acquisition-via-ebs-direct-api",level:3}];function h(s){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h1,{id:"how-to-import-aws-amis-ebs-snapshots-and-volumes",children:"How to Import AWS AMIs, EBS Snapshots, and Volumes"}),"\n",(0,e.jsx)(t.p,{children:"The Cado platform allows you to acquire AWS AMIs, EBS Snapshots, or Volumes using either a cross-account role or by directly sharing the image or snapshot with the Cado AWS account."}),"\n",(0,e.jsx)(t.h3,{id:"sharing-amis-and-snapshots",children:"Sharing AMIs and Snapshots"}),"\n",(0,e.jsx)(t.p,{children:"If you're sharing an AMI, make sure to also share the underlying snapshots:"}),"\n",(0,e.jsxs)(t.ol,{children:["\n",(0,e.jsxs)(t.li,{children:["Navigate to ",(0,e.jsx)(t.strong,{children:"Edit AMI Permissions"}),"."]}),"\n",(0,e.jsxs)(t.li,{children:["Tick the option ",(0,e.jsx)(t.strong,{children:"Add 'Create volume' permission"}),"."]}),"\n"]}),"\n",(0,e.jsxs)(t.p,{children:["For detailed steps, refer to the official AWS guide: ",(0,e.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html",children:"Share an Amazon EBS Snapshot"}),"."]}),"\n",(0,e.jsx)(t.h3,{id:"steps-to-import",children:"Steps to Import"}),"\n",(0,e.jsxs)(t.ol,{children:["\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Select the Region"})," where your data is stored."]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"Specify the Identifier"})," for the AMI, Snapshot, or Volume you wish to import."]}),"\n",(0,e.jsxs)(t.li,{children:["Click ",(0,e.jsx)(t.strong,{children:"Continue"}),"."]}),"\n",(0,e.jsxs)(t.li,{children:["Review and confirm the details, then click ",(0,e.jsx)(t.strong,{children:"Start Import"}),"."]}),"\n"]}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"AWS AMI",src:i(20678).A+"",width:"1089",height:"365"})}),"\n",(0,e.jsx)(t.h2,{id:"data-flow-diagrams",children:"Data Flow Diagrams"}),"\n",(0,e.jsx)(t.h3,{id:"original-acquisition-via-ebs-snapshots",children:"Original Acquisition via EBS Snapshots"}),"\n",(0,e.jsx)(t.p,{children:"The diagram below outlines the traditional method of acquiring data using EBS Snapshots:"}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"EBS Snapshots",src:i(73409).A+"",width:"1958",height:"1024"})}),"\n",(0,e.jsx)(t.h3,{id:"faster-acquisition-via-ebs-direct-api",children:"Faster Acquisition via EBS Direct API"}),"\n",(0,e.jsxs)(t.p,{children:["Cado now supports a faster acquisition method using the ",(0,e.jsx)(t.strong,{children:"EBS Direct API"}),", which speeds up the data acquisition process:"]}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.img,{alt:"EBS Direct API",src:i(41330).A+"",width:"1782",height:"806"})})]})}function l(s={}){const{wrapper:t}={...(0,a.R)(),...s.components};return t?(0,e.jsx)(t,{...s,children:(0,e.jsx)(h,{...s})}):h(s)}},20678:(s,t,i)=>{i.d(t,{A:()=>e});const e=i.p+"assets/images/aws-ami-a25d0fb0ad4f22363a25b64acf09a1d3.png"},41330:(s,t,i)=>{i.d(t,{A:()=>e});const e=i.p+"assets/images/aws-snapshot-ebs-b53b07ba95129e304247f717a97f4383.png"},73409:(s,t,i)=>{i.d(t,{A:()=>e});const e=i.p+"assets/images/aws-snapshot-70ce8f8f136d2ea87a7093bf3d3c6fd1.png"},28453:(s,t,i)=>{i.d(t,{R:()=>n,x:()=>r});var e=i(96540);const a={},o=e.createContext(a);function n(s){const t=e.useContext(o);return e.useMemo((function(){return"function"==typeof s?s(t):{...t,...s}}),[t,s])}function r(s){let t;return t=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:n(s.components),e.createElement(o.Provider,{value:t},s.children)}}}]);