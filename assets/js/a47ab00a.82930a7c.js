"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[572],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={title:"Backups and Recovery",hide_title:!0,sidebar_position:1},s="AWS Backups and Recovery",c={unversionedId:"cado-response/deploy/aws/performance-resiliency/aws-backups",id:"cado-response/deploy/aws/performance-resiliency/aws-backups",title:"Backups and Recovery",description:"Backup and Recovery",source:"@site/docs/cado-response/deploy/aws/performance-resiliency/aws-backups.md",sourceDirName:"cado-response/deploy/aws/performance-resiliency",slug:"/cado-response/deploy/aws/performance-resiliency/aws-backups",permalink:"/cado-response/deploy/aws/performance-resiliency/aws-backups",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/performance-resiliency/aws-backups.md",tags:[],version:"current",lastUpdatedAt:1691504374,formattedLastUpdatedAt:"Aug 8, 2023",sidebarPosition:1,frontMatter:{title:"Backups and Recovery",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Private IP Addresses",permalink:"/cado-response/deploy/aws/networking/internet-routable-addresses"},next:{title:"Large EC2 Imports",permalink:"/cado-response/deploy/aws/performance-resiliency/large-aws-imports"}},i={},l=[{value:"Backup and Recovery",id:"backup-and-recovery",level:3},{value:"Scheduling Automated Backups of the Data Volume",id:"scheduling-automated-backups-of-the-data-volume",level:4},{value:"Restoring the Data Volume",id:"restoring-the-data-volume",level:4}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aws-backups-and-recovery"},"AWS Backups and Recovery"),(0,n.kt)("h3",{id:"backup-and-recovery"},"Backup and Recovery"),(0,n.kt)("p",null,"This section explains how to recover or migrate the Cado platform to a new instance."),(0,n.kt)("p",null,"Cado also backs up any imports to S3 which can then be re-imported later to a fresh instance, but you will need to restore the data volume if you want to recover user settings such as user logins."),(0,n.kt)("p",null,"If a Cado instance fails, you will need to recover and attach the data volume to a new instance. The data volume contains previously imported data as well as user settings."),(0,n.kt)("p",null,"You can also use this approach to migrate Cado to a new availability zone or region."),(0,n.kt)("h4",{id:"scheduling-automated-backups-of-the-data-volume"},"Scheduling Automated Backups of the Data Volume"),(0,n.kt)("p",null,"Amazon EBS Snapshots are stored by AWS in Amazon S3, where it is stored redundantly in multiple Availability Zones."),(0,n.kt)("p",null,"You can create an ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://us-west-2.console.aws.amazon.com/events/home"},"EventBridge"))," rule that regularly (e.g. daily) backs up the CadoResponse EC2 instance:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Backup 1",src:a(6476).Z,width:"551",height:"560"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Backup 2",src:a(1209).Z,width:"571",height:"408"})),(0,n.kt)("p",null,"For more, see ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-scheduled-snapshot.html"},"this tutorial"))," from AWS."),(0,n.kt)("h4",{id:"restoring-the-data-volume"},"Restoring the Data Volume"),(0,n.kt)("p",null,"To perform a migration or restoration to a new instance, deploy a Cado installation and Stop the Cado EC2 Installation."),(0,n.kt)("p",null,"The operating system volume will be smaller (typically 10 GB). Detach the larger Data Volume (",(0,n.kt)("inlineCode",{parentName:"p"},"/dev/sdh")," seen below):"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Backup 3",src:a(79).Z,width:"606",height:"104"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Backup 4",src:a(7921).Z,width:"247",height:"270"})),(0,n.kt)("p",null,"Next, ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/restore.html"},"restore"))," the Snapshot backup of your old Cado installation to a Volume in the same availability zone as your new Cado EC2 Instance."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Backup 5",src:a(8031).Z,width:"254",height:"64"})),(0,n.kt)("p",null,"Then, simply ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html"},"attach"))," the restored Data Volume to your new Cado EC2 Instance and start it."))}u.isMDXComponent=!0},6476:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aws-backup-1-b629b9478cc5046d96fdc7973d8fc07d.png"},1209:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aws-backup-2-5704a0f85c843e2bac5efef40f42d14b.png"},79:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aws-backup-3-aa9c09491fe25218da52c4c56e163e32.png"},7921:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aws-backup-4-5504cf261e4c5a3680ed3e026c7928a8.png"},8031:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);