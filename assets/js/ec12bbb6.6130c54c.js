"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3710],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return o?r.createElement(g,a(a({ref:t},c),{},{components:o})):r.createElement(g,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2128:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const i={title:"Overview",hide_title:!0,sidebar_position:1},a="Importing Data",s={unversionedId:"cado-response/discovery-import/import/intro",id:"cado-response/discovery-import/import/intro",title:"Overview",description:"There are a number of options for importing data into the Cado platform. Once you select the data you would like to import, the Cado platform begins processing the data based on the platforms Processing Settings.  Check out our help section on Processing Settings for more details.",source:"@site/docs/cado-response/discovery-import/import/intro.md",sourceDirName:"cado-response/discovery-import/import",slug:"/cado-response/discovery-import/import/intro",permalink:"/cado-response/discovery-import/import/intro",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/intro.md",tags:[],version:"current",lastUpdatedAt:1684492820,formattedLastUpdatedAt:"May 19, 2023",sidebarPosition:1,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Managing Projects",permalink:"/cado-response/discovery-import/projects"},next:{title:"File Types",permalink:"/cado-response/discovery-import/import/data-types/filetypes"}},p={},l=[{value:"Evidence Types",id:"evidence-types",level:3},{value:"Importing from Cloud Storage",id:"importing-from-cloud-storage",level:3},{value:"Import Cloud Instance",id:"import-cloud-instance",level:3}],c={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"importing-data"},"Importing Data"),(0,n.kt)("p",null,"There are a number of options for importing data into the Cado platform. Once you select the data you would like to import, the Cado platform begins processing the data based on the platforms Processing Settings.  Check out our help section on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/manage/workers#processing"},"Processing Settings"))," for more details."),(0,n.kt)("h3",{id:"evidence-types"},"Evidence Types"),(0,n.kt)("p",null,"Cado supports a wide range of ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/discovery-import/import/data-types/filetypes"},"File Types"))," which can be imported.  To begin importing data, you simply select a Project and click the ",(0,n.kt)("strong",{parentName:"p"},"Import")," button "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Import Button",src:o(6848).Z,width:"351",height:"138"})),(0,n.kt)("p",null,"Based on the evidence you would like to import, follow the on-screen instructions and select your source."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Import Data",src:o(263).Z,width:"1059",height:"726"})),(0,n.kt)("h3",{id:"importing-from-cloud-storage"},"Importing from Cloud Storage"),(0,n.kt)("p",null,"You can import evidence from cloud storage such as Amazon S3 and Azure Storage.\nThis is useful if you have captured evidence to cloud storage, or have transferred on-premises evidence into cloud storage.\nYou can upload evidence to cloud storage via:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The AWS/Azure Console"),(0,n.kt)("li",{parentName:"ul"},"A Desktop tool such as CyberDuck"),(0,n.kt)("li",{parentName:"ul"},"Cado Host with the --single_file_unzipped parameter")),(0,n.kt)("p",null,"To import evidence stored within cloud storage, log in and perform the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Choose an existing ",(0,n.kt)("strong",{parentName:"li"},"Project")," or create a new project."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Import")),(0,n.kt)("li",{parentName:"ul"},"Depending on where you deployed Cado, click ",(0,n.kt)("strong",{parentName:"li"},"AWS")," or ",(0,n.kt)("strong",{parentName:"li"},"Azure")),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"S3 Buckets")," or ",(0,n.kt)("strong",{parentName:"li"},"Azure storage"))),(0,n.kt)("h3",{id:"import-cloud-instance"},"Import Cloud Instance"),(0,n.kt)("p",null,"Cado provides a way to forensically collect copies of cloud computing instances such as AWS EC2 or AMIs. A log of the acquisition is stored in cloud storage, along with a copy of the disk. The acquisition will also include screenshots and console logs if the instance is running.  This allows you to capture a forensic copy of a running (or stopped) cloud instance without agents and without impacting production systems."),(0,n.kt)("p",null,"To import from a cloud instance, log in and perform the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Choose an existing ",(0,n.kt)("strong",{parentName:"li"},"Project")," or create a new project."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Import")),(0,n.kt)("li",{parentName:"ul"},"Depending on where you deployed Cado, click ",(0,n.kt)("strong",{parentName:"li"},"AWS")," or ",(0,n.kt)("strong",{parentName:"li"},"Azure")),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"EC2 Instance")," or ",(0,n.kt)("strong",{parentName:"li"},"Azure VM")),(0,n.kt)("li",{parentName:"ul"},"Follow the on-screen prompts to select the instance to import.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"During the EC2 Import process, an i3.4xlarge worker instance is deployed to allow for proper disk acquisition. During the Azure Instance Import process, a Standard_D8ds_v4 worker instance is deployed to allow for proper disk acquisition. You can configure the size of the worker instance in the Cado platform under ",(0,n.kt)("strong",{parentName:"p"},"Settings/Processing"),". This worker is spun down once the target disk is acquired.")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"By default when processing archive files Cado processes two layers of recursion and twenty folder branches. This provides faster processing but there is a slight risk that some malicious files or activites may be missed."),(0,n.kt)("p",{parentName:"admonition"},"You can configure this at ",(0,n.kt)("strong",{parentName:"p"},"Settings/Processing Speed")," but increasing these numbers will increase the time taken to process disk images with archives."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Processing Speed",src:o(9247).Z,width:"1256",height:"547"}))))}d.isMDXComponent=!0},6848:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/import-button-798e13611cef2958b7fd5bbfc5c3ff91.png"},263:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/import-9f5b10aa0afc6890d56788315308e01b.png"},9247:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/settings-processing-speed-b108aef674310ab3f0119abaf88f8c92.png"}}]);