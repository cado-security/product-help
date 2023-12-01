"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Managing Projects",hide_title:!0,sidebar_position:2},i="Managing Projects",l={unversionedId:"cado-response/discovery-import/projects",id:"cado-response/discovery-import/projects",title:"Managing Projects",description:"Cado groups evidence items into projects.",source:"@site/docs/cado-response/discovery-import/projects.md",sourceDirName:"cado-response/discovery-import",slug:"/cado-response/discovery-import/projects",permalink:"/cado-response/discovery-import/projects",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/projects.md",tags:[],version:"current",lastUpdatedAt:1701461172,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:2,frontMatter:{title:"Managing Projects",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cado-response/discovery-import/intro"},next:{title:"Automation Rules (Beta)",permalink:"/cado-response/discovery-import/automation"}},c={},s=[{value:"Creating a Project",id:"creating-a-project",level:3},{value:"Deleting a Project",id:"deleting-a-project",level:3},{value:"Updating a Project",id:"updating-a-project",level:3},{value:"Project Processing",id:"project-processing",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"managing-projects"},"Managing Projects"),(0,o.kt)("p",null,"Cado groups evidence items into projects."),(0,o.kt)("h3",{id:"creating-a-project"},"Creating a Project"),(0,o.kt)("p",null,"To create a new Project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Projects")),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create Project")),(0,o.kt)("li",{parentName:"ul"},"Give the Project a unique name "),(0,o.kt)("li",{parentName:"ul"},"Optionally, grant users access to the project and give it a description"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"))),(0,o.kt)("h3",{id:"deleting-a-project"},"Deleting a Project"),(0,o.kt)("p",null,"You may want to delete old projects to free up disk space.  To delete a Project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Projects")," and select the project you would like to delete"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Manage")," "),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Delete Project")),(0,o.kt)("li",{parentName:"ul"},"You will be asked to confirm that you would like the Project deleted"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Delete"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can view free disk space by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Platform")," menu button.")),(0,o.kt)("h3",{id:"updating-a-project"},"Updating a Project"),(0,o.kt)("p",null,"You can update a Project name and the description.  To update a Project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Projects")," and select the project you would like to update"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Manage")," "),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Details")),(0,o.kt)("li",{parentName:"ul"},"Make your updates and click ",(0,o.kt)("strong",{parentName:"li"},"Update"))),(0,o.kt)("h3",{id:"project-processing"},"Project Processing"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Processing")," page gives you a high level summary of the processing status of evidence items. Evidence items go through a number of different stages of analysis before they are complete. Some data, such as file listings, will be available before the processing is complete.\nTo view the Project Processing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Projects")," and select the project you would like to view"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Manage")," "),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Processing"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Processing",src:r(1726).Z,width:"1292",height:"364"})),(0,o.kt)("p",null,"Individual evidence items can be expanded to view their processing status."))}u.isMDXComponent=!0},1726:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/processing-4bd4cac04455083b6240d7bed5c2d07a.png"}}]);