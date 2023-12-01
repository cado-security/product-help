"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9715],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1339:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={title:"Data Management",hide_title:!0,sidebar_position:8},i="Data Management",l={unversionedId:"cado-response/manage/data",id:"cado-response/manage/data",title:"Data Management",description:"There are several considerations for managing data from the Cado platform",source:"@site/docs/cado-response/manage/data.md",sourceDirName:"cado-response/manage",slug:"/cado-response/manage/data",permalink:"/cado-response/manage/data",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/data.md",tags:[],version:"current",lastUpdatedAt:1701461172,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:8,frontMatter:{title:"Data Management",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Worker Management",permalink:"/cado-response/manage/workers"},next:{title:"Updating",permalink:"/cado-response/manage/updating"}},s={},d=[{value:"Controlling the lifecycle of data stored by the Cado platform",id:"controlling-the-lifecycle-of-data-stored-by-the-cado-platform",level:2},{value:"Storing sensitive customer data",id:"storing-sensitive-customer-data",level:2},{value:"Expanding available data storage within the Cado platform in AWS",id:"expanding-available-data-storage-within-the-cado-platform-in-aws",level:2}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-management"},"Data Management"),(0,o.kt)("p",null,"There are several considerations for managing data from the Cado platform"),(0,o.kt)("h2",{id:"controlling-the-lifecycle-of-data-stored-by-the-cado-platform"},"Controlling the lifecycle of data stored by the Cado platform"),(0,o.kt)("p",null,"AWS supports this through ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html"},"Object Locks"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/console/s3/lifecyclerules"},"Lifecycle Rules"))," associated with your S3 bucket.  Please see the AWS documentation for more details."),(0,o.kt)("p",null,"Azure supports this through ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview"},"Life Cycle Management Policies"))," for your blob storage.  Please see the Azure documentation for more details."),(0,o.kt)("h2",{id:"storing-sensitive-customer-data"},"Storing sensitive customer data"),(0,o.kt)("p",null,"Whether sensitive customer data is stored within the Cado platform is completely dependent on what data sources and evidence is imported into the software.  In all cases, data is either stored within the database on the main Cado instance, within EFS, within a customers' S3 bucket or  Azure storage.  Since the Cado platform is deployed within the customers' cloud environment, the customer has control over the life cycle management of the data (example: using Life Cycle management policies) as well as who has access to potential sensitive data via VPC and Subnet rules."),(0,o.kt)("h2",{id:"expanding-available-data-storage-within-the-cado-platform-in-aws"},"Expanding available data storage within the Cado platform in AWS"),(0,o.kt)("p",null,"Below are the steps for expanding the Cado data storage volume after deployment.  This follows the steps as outline by AWS' documentation: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html"},"Extend a Linux file system after resizing a volume"))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Before continuing, create a snapshot of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CadoResponseDataVolume")," volume which has the device name ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/sdh"),".  This will ensure you have a backup of the data volume to restore, in case you encounter an issue. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Extend the ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/sdh")," storage volume via the AWS Console by: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Navigating to your Cado instance"),(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Storage")," tab"),(0,o.kt)("li",{parentName:"ul"},"Click on the volume instance ID for Device Name ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/sdh")),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"CadoResponseDataVolume")),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Actions")),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Modify Volume")),(0,o.kt)("li",{parentName:"ul"},"Enter the new volume size"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Modify")))),(0,o.kt)("li",{parentName:"ol"},"SSH into the Cado instance. example: ",(0,o.kt)("inlineCode",{parentName:"li"},'ssh -i "us-east-2.pem" admin@ec2-55-234-10-9.compute-1.amazonaws.com')),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"df -hT"),". Note the Avail space for the ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/nvme1n1")," filesystem mounted on ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/admin/data"),". This should display the old volume size."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"lsblk")," and note the ",(0,o.kt)("inlineCode",{parentName:"li"},"nvme1n1")," volume SIZE mounted on ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/admin/data"),". This should display the new volume size."),(0,o.kt)("li",{parentName:"ol"},"To extend the volume and make it available to the OS, run ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo xfs_growfs -d /home/admin/data")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"df -hT")," again and note the Avail space for the ",(0,o.kt)("inlineCode",{parentName:"li"},"/dev/nvme1n1")," filesystem mounted on ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/admin/data")," This should now display the new volume size.")))}p.isMDXComponent=!0}}]);