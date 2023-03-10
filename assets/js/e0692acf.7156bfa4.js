"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,y=d["".concat(c,".").concat(u)]||d[u]||l[u]||i;return r?o.createElement(y,a(a({ref:t},m),{},{components:r})):o.createElement(y,a({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const i={title:"Memory Analysis",hide_title:!0,sidebar_position:3},a="Memory Analysis",s={unversionedId:"cado-response/discovery-import/import/data-types/memory",id:"cado-response/discovery-import/import/data-types/memory",title:"Memory Analysis",description:"You can perform a memory acquisition of a Windows or Linux system using Cado Host by clicking Import > Forensic Artifacts and running the pre-generated script on the host device.",source:"@site/docs/cado-response/discovery-import/import/data-types/memory.md",sourceDirName:"cado-response/discovery-import/import/data-types",slug:"/cado-response/discovery-import/import/data-types/memory",permalink:"/cado-response/discovery-import/import/data-types/memory",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/data-types/memory.md",tags:[],version:"current",lastUpdatedAt:1673875505,formattedLastUpdatedAt:"Jan 16, 2023",sidebarPosition:3,frontMatter:{title:"Memory Analysis",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Log Types",permalink:"/cado-response/discovery-import/import/data-types/logs"},next:{title:"EC2 and EBS",permalink:"/cado-response/discovery-import/import/aws/aws-ec2"}},c={},p=[],m={toc:p};function l(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"memory-analysis"},"Memory Analysis"),(0,n.kt)("p",null,"You can perform a memory acquisition of a Windows or Linux system using Cado Host by clicking ",(0,n.kt)("inlineCode",{parentName:"p"},"Import > Forensic Artifacts")," and running the pre-generated script on the host device."),(0,n.kt)("p",null,'We collect memory from individual processes as .mem files, viewable under the "process_dumps" folder. We find this allows for more reliable analysis than our previous version which collected a single capture of memory, and utilises our open source tool ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/cado-security/varc"},"varc")),(0,n.kt)("p",null,"For importing externally acquired memory, ensure the memory dump is named with a ",(0,n.kt)("inlineCode",{parentName:"p"},".mem")," file extension so it is recognized as a memory file and upload the memory file to an S3 bucket to which Cado has access.  Then click ",(0,n.kt)("inlineCode",{parentName:"p"},"Import > AWS S3 Bucket")," within Cado, navigate to the S3 bucket where the .mem file resides, and import it.    "),(0,n.kt)("p",null,'You can acquire memory of Linux systems in EC2 by using the "Alternate Acquisition" option under Import > EC2:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS Memory",src:r(3200).Z,width:"1477",height:"511"})),(0,n.kt)("p",null,"This requires the AWS SSM agent to be running on the EC2 and registered within the AWS Systems Manager. If it is not, you can acquire memory by connecting to the machine over SSH or RDP and executing Cado Host from Import > Forensic Artifacts. You can also use this method to acquire from Windows systems."),(0,n.kt)("p",null,"Any acquisition from a container (e.g. ECS/EKS/AKS) will attempt to collect memory by default."),(0,n.kt)("p",null,"Once processed, you will be able to browse the file system including the contents of files (if they were in memory at the time) and view information from running processes and network connections."))}l.isMDXComponent=!0},3200:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/alternate-ec2-96a497c073c2f176b1901e7699ef94fb.png"}}]);