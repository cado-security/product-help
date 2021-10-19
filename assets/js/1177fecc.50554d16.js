"use strict";(self.webpackChunkcado_test=self.webpackChunkcado_test||[]).push([[314],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return u}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(o),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return o?n.createElement(g,i(i({ref:t},c),{},{components:o})):n.createElement(g,i({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1287:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={title:"Importing Data",hide_title:!0,sidebar_position:1},l="Importing Data",p={unversionedId:"cado-response/importing-data/importing-data",id:"cado-response/importing-data/importing-data",isDocsHomePage:!1,title:"Importing Data",description:"There are a number of options for importing data into Cado Response. Once you select the data you would like to import, the Cado Response platform begins processing the data based on the platforms Processing Settings.  Check out our help section on Processing Settings for more details.",source:"@site/docs/cado-response/importing-data/importing-data.md",sourceDirName:"cado-response/importing-data",slug:"/cado-response/importing-data/importing-data",permalink:"/docs/cado-response/importing-data/importing-data",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/importing-data/importing-data.md",tags:[],version:"current",lastUpdatedAt:1629479189,formattedLastUpdatedAt:"8/20/2021",sidebarPosition:1,frontMatter:{title:"Importing Data",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Managing Users",permalink:"/docs/cado-response/projects-and-users/users"},next:{title:"File Types",permalink:"/docs/cado-response/importing-data/filetypes"}},c=[{value:"Evidence Types",id:"evidence-types",children:[],level:3},{value:"Importing Local Evidence",id:"importing-local-evidence",children:[],level:3},{value:"Importing from Cloud Storage",id:"importing-from-cloud-storage",children:[],level:3},{value:"Import Cloud Instance",id:"import-cloud-instance",children:[],level:3}],d={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"importing-data"},"Importing Data"),(0,a.kt)("p",null,"There are a number of options for importing data into Cado Response. Once you select the data you would like to import, the Cado Response platform begins processing the data based on the platforms Processing Settings.  Check out our help section on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/cado-response/settings/general-settings#processing-settings"},"Processing Settings"))," for more details."),(0,a.kt)("h3",{id:"evidence-types"},"Evidence Types"),(0,a.kt)("p",null,"Cado Response supports a wide range of ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/cado-response/importing-data/filetypes"},"File Types"))," which can be imported.  To begin importing data, you simply select a Project and click the ",(0,a.kt)("strong",{parentName:"p"},"Import")," button "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Import Button",src:o(6657).Z})),(0,a.kt)("p",null,"Based on the evidence you would like to import, follow the on-screen instructions and select your source."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Import Data",src:o(5528).Z})),(0,a.kt)("h3",{id:"importing-local-evidence"},"Importing Local Evidence"),(0,a.kt)("p",null,"The preferred method to import evidence is from Cloud Storage such as S3; however, you can also import evidence that is stored locally on the Cado Response server (under the local ",(0,a.kt)("inlineCode",{parentName:"p"},"/process/uploads")," folder). This is useful if you have transferred files to the server, for example over SFTP."),(0,a.kt)("p",null,"To import evidence stored locally on the Cado Response server, log in and perform the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose an existing ",(0,a.kt)("strong",{parentName:"li"},"Project")," or create a new project."),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Import")," then ",(0,a.kt)("strong",{parentName:"li"},"Local Evidence"),"."),(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Filename")," column to browse to the correct file or folder."),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Import File")," or ",(0,a.kt)("strong",{parentName:"li"},"Import Folder Contents")," to add evidence to your project.")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This import is locked to files under the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"/process/uploads")))),(0,a.kt)("h3",{id:"importing-from-cloud-storage"},"Importing from Cloud Storage"),(0,a.kt)("p",null,"You can import evidence from cloud storage such as Amazon S3. This is useful if you have captured evidence to cloud storage, or have transferred on-premises evidence into cloud storage using a tool such as CyberDuck or the S3 Console."),(0,a.kt)("p",null,"To import evidence stored within cloud storage, log in and perform the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose an existing ",(0,a.kt)("strong",{parentName:"li"},"Project")," or create a new project."),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Import")),(0,a.kt)("li",{parentName:"ul"},"Depending on where you deployed Cado Response, click ",(0,a.kt)("strong",{parentName:"li"},"AWS")," or ",(0,a.kt)("strong",{parentName:"li"},"Azure")),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"S3 Buckets")," or Azure storage")),(0,a.kt)("h3",{id:"import-cloud-instance"},"Import Cloud Instance"),(0,a.kt)("p",null,"Cado Response provides a way to forensically collect copies of cloud computing instances such as AWS EC2 or AMIs. A log of the acquisition is stored in cloud storage, along with a copy of the disk. The acquisition will also include screenshots and console logs if the instance is running.  This allows you to capture a forensic copy of a running (or stopped) cloud instance without agents and without impacting production systems."),(0,a.kt)("p",null,"To import from a cloud instance, log in and perform the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose an existing ",(0,a.kt)("strong",{parentName:"li"},"Project")," or create a new project."),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Import")),(0,a.kt)("li",{parentName:"ul"},"Depending on where you deployed Cado Response, click ",(0,a.kt)("strong",{parentName:"li"},"AWS")," or ",(0,a.kt)("strong",{parentName:"li"},"Azure")),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"EC2 Instance")," or ",(0,a.kt)("strong",{parentName:"li"},"Azure Instance")),(0,a.kt)("li",{parentName:"ul"},"Follow the on-screen prompts to select the instance to import.")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"During the EC2 Import process, a worker EC2 instance of the same size as the target EC2 is deployed to allow for proper disk acquisition.  This worker is spun down once the target disk is acquired."))))}m.isMDXComponent=!0},6657:function(e,t,o){t.Z=o.p+"assets/images/import-button-ca780a2da6ac900fc471ad1baade93d9.png"},5528:function(e,t,o){t.Z=o.p+"assets/images/import-bcdc3d8570e6673a76e8bfb2cff1f154.png"}}]);