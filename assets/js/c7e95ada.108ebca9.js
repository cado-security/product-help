"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Automation Rules (Beta)",hide_title:!0,sidebar_position:2},i="Configuring Automation Rules",l={unversionedId:"cado-response/discovery-import/automation",id:"cado-response/discovery-import/automation",title:"Automation Rules (Beta)",description:"This feature is currently in beta - to enable this feature go to Settings > Experiments",source:"@site/docs/cado-response/discovery-import/automation.md",sourceDirName:"cado-response/discovery-import",slug:"/cado-response/discovery-import/automation",permalink:"/cado-response/discovery-import/automation",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/automation.md",tags:[],version:"current",lastUpdatedAt:1686741700,formattedLastUpdatedAt:"Jun 14, 2023",sidebarPosition:2,frontMatter:{title:"Automation Rules (Beta)",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Automated Setup",permalink:"/cado-response/deploy/gcp/gcp-auto-setup"},next:{title:"Overview",permalink:"/cado-response/discovery-import/intro"}},s={},c=[{value:"Creating a Scope",id:"creating-a-scope",level:2},{value:"Creating an Environment",id:"creating-an-environment",level:2},{value:"Creating a Rule",id:"creating-a-rule",level:2},{value:"Permissions Required",id:"permissions-required",level:3},{value:"Managing Rules",id:"managing-rules",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-automation-rules"},"Configuring Automation Rules"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This feature is currently in beta - to enable this feature go to Settings > Experiments")),(0,r.kt)("p",null,"The Cado platform allows you to define automation rules to better prepare for incidents in cloud environments. These automation rules allow you to define in advance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What data you want to collect"),(0,r.kt)("li",{parentName:"ul"},"The alert triggers taht will trigger a response"),(0,r.kt)("li",{parentName:"ul"},"Against which cloud resources, and"),(0,r.kt)("li",{parentName:"ul"},"What response actions you want to take")),(0,r.kt)("p",null,"Automation in Cado is based upon three main concepts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scopes")," - Scopes are sets of cloud resources within a single cloud provider (currently only AWS supported). These cloud resources may be defined by the region and/or account in which they reside, the service (e.g. EC2, S3), and any tags applied to those resources"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Environments")," - Environments are sets of one or more scopes that you want to treat similarly - for example an application that spans multiple services across multiple cloud environments"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rules")," - Rules are sets of actions that will automatically take place in the event that an alert gets triggered")),(0,r.kt)("h2",{id:"creating-a-scope"},"Creating a Scope"),(0,r.kt)("p",null,'To create a scope, navigate to the Scopes tab and hit "Create Scope" button. Enter the name of the scope, the regions, the accounts, the services covered and any tags that identify your services. If you specify multiple tags, resources tagged with any one of those tags will be included.'),(0,r.kt)("p",null,"Hit 'Save' to create the scope"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Scope",src:n(9486).Z,width:"1061",height:"812"})),(0,r.kt)("h2",{id:"creating-an-environment"},"Creating an Environment"),(0,r.kt)("p",null,'To create an Environment, navigate to the Environments tab and hit "Create Environment" button. Enter the name of the environment, and choose the scopes to add to the environment from the bottom of the screen. Click "Add scope" and these will add to the list of selected scopes.'),(0,r.kt)("p",null,"Hit 'Save' to create the environment"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Environments",src:n(1024).Z,width:"1632",height:"811"})),(0,r.kt)("h2",{id:"creating-a-rule"},"Creating a Rule"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"NOTE: You can create rules without necessarily creating scopes or environments")),(0,r.kt)("p",null,'To create an rule, navigate to the Rules tab and hit "Create Rule" button.'),(0,r.kt)("p",null,"Enter the name of the rule and a description. Specify"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Environments (optional)"))," - the environments specifying the assets against which the rule will run. If this is left blank, this rule will trigger against any alert identifying an affected workloads"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Alert Type")),"  - the type of alert that will trigger the rule (e.g. GuardDuty)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Asset Type"))," - the type of cloud resource to which the rule will apply (e.g. EC2)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Investigation Type"))," - the type of invesigation to perform. This currently has three options",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Default")," - Performs triage collection from any workload specified in the alert"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Triage")," - Performs triage collection from any workload specified in the alert"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Full")," - Performs full disk collection from any workload specified in the alert"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Response Actions (optional)"))," - the actions to take against machines upon which malicious activities have been detected, and machines upon which suspicous activities have been detected. Cado currently supports shutting down EC2 instances, and isolating the IAM roles that the EC2  instance assumes.")),(0,r.kt)("p",null,"Hit 'Save' to create the rule"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Rule",src:n(476).Z,width:"1001",height:"802"})),(0,r.kt)("h3",{id:"permissions-required"},"Permissions Required"),(0,r.kt)("p",null,"Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add these permissions to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required Permissions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stop Instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Stops an EC2 instance using the AWS API"),(0,r.kt)("td",{parentName:"tr",align:null},"ec2:StopInstances")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Isolate Role"),(0,r.kt)("td",{parentName:"tr",align:null},"Isolates the IAM role attached to an EC2 instance. Isolated by adding a deny all inline policy to the given IAM role."),(0,r.kt)("td",{parentName:"tr",align:null},"iam:GetInstanceProfile iam:PutRolePolicy")))),(0,r.kt)("h2",{id:"managing-rules"},"Managing Rules"),(0,r.kt)("p",null,"You can configure multiple response rules. In the event that a resource is covered by multiple rules, the first rule in the list applies"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Manage Rules",src:n(7228).Z,width:"1667",height:"282"})))}u.isMDXComponent=!0},1024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/environments-72cb069d871104cc1b13d33bdfb68916.png"},7228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rules-list-079383494a28c8acafa4ad624d3e6231.png"},476:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rules-e3256df448b165983b24b7391f0463a9.png"},9486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scopes-50355401cc62813c6ace8390e10b75bb.png"}}]);