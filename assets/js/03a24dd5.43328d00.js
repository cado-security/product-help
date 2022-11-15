"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6683],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={title:"Automated Investigation",hide_title:!0,sidebar_position:4},l="Automated Investigations",c={unversionedId:"cado-response/investigate/automated-investigation",id:"cado-response/investigate/automated-investigation",title:"Automated Investigation",description:"The Automated Investigation tab provides a summary of what Cado has determined during its investigation.",source:"@site/docs/cado-response/investigate/automated-investigation.md",sourceDirName:"cado-response/investigate",slug:"/cado-response/investigate/automated-investigation",permalink:"/cado-response/investigate/automated-investigation",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/investigate/automated-investigation.md",tags:[],version:"current",lastUpdatedAt:1668419843,formattedLastUpdatedAt:"Nov 14, 2022",sidebarPosition:4,frontMatter:{title:"Automated Investigation",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Timeline Search",permalink:"/cado-response/investigate/timeline-search"},next:{title:"Browse Disk",permalink:"/cado-response/investigate/browse-disk"}},d={},p=[{value:"View Asset",id:"view-asset",level:2},{value:"Response Actions",id:"response-actions",level:2},{value:"Permissions Required",id:"permissions-required",level:3}],u={toc:p};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"automated-investigations"},"Automated Investigations"),(0,r.kt)("p",null,"The Automated Investigation tab provides a summary of what Cado has determined during its investigation."),(0,r.kt)("p",null,"The Automated Investigation includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A description of how the investgation was triggered"),(0,r.kt)("li",{parentName:"ul"},"The verdict - a one line description of what Cado determined has happened"),(0,r.kt)("li",{parentName:"ul"},"A set of suspected compromised assets")),(0,r.kt)("p",null,"The timeline displays up to 50 events. Events are more likely to be included if they are malicious, tagged by a user, happened in rapid succession, etc."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Automated Investigation",src:n(7045).Z,width:"1328",height:"953"})),(0,r.kt)("h2",{id:"view-asset"},"View Asset"),(0,r.kt)("p",null,'Clicking "view" on a suspected compromised asset opens up a sidebar containing metadata about the asset.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Metadata Sidebar",src:n(9190).Z,width:"340",height:"345"})),(0,r.kt)("h2",{id:"response-actions"},"Response Actions"),(0,r.kt)("p",null,"Response Actions make it possible to perform remediation actions in response to malicious activity being identified on a virtual machine."),(0,r.kt)("p",null,"Currently, Response Actions only supports ",(0,r.kt)("a",{parentName:"p",href:"/cado-response/discovery-import/import/aws/aws-ec2#triage-capture"},"AWS EC2 instances acquired as a triage collection"),'. To invoke an action, select the instance id from the "Suspected Compromised Assets" table'),(0,r.kt)("p",null,'Using the panel on the right - select the "Actions" tab, then the desired action and click "Invoke"\n',(0,r.kt)("img",{alt:"Actions",src:n(598).Z,width:"842",height:"418"})),(0,r.kt)("h3",{id:"permissions-required"},"Permissions Required"),(0,r.kt)("p",null,"Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add these permissions to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required Permissions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stop Instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Stops an EC2 instance using the AWS API"),(0,r.kt)("td",{parentName:"tr",align:null},"ec2:StopInstances")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Isolate Role"),(0,r.kt)("td",{parentName:"tr",align:null},"Isolates the IAM role attached to an EC2 instance. Isolated by adding a deny all inline policy to the given IAM role."),(0,r.kt)("td",{parentName:"tr",align:null},"iam:GetInstanceProfile iam:PutRolePolicy")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"NOTE: In order to perform an action on an asset in a different AWS account, you must have ",(0,r.kt)("a",{parentName:"em",href:"/cado-response/deploy/aws/iam/cross-account-creation"},"Cross Account roles")," configured and have added the relevant permission to the role in the different account")))}m.isMDXComponent=!0},598:function(e,t,n){t.Z=n.p+"assets/images/actions-tab-5585992eb81a41af00c49a1f502ff8e2.png"},7045:function(e,t,n){t.Z=n.p+"assets/images/automated-investigation-0c9554bfb8acbaa7067b6347935ce144.png"},9190:function(e,t,n){t.Z=n.p+"assets/images/metadata-sidebar-d1263f81bf454d9ead1789d55d65fa88.png"}}]);