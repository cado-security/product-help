"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Automation Rules (Beta)",hide_title:!0,sidebar_position:3},o="Configuring Automation Rules",s={unversionedId:"cado-response/discovery-import/automation",id:"cado-response/discovery-import/automation",title:"Automation Rules (Beta)",description:"This feature is currently in beta - to enable this feature go to Settings > Experiments",source:"@site/docs/cado-response/discovery-import/automation.md",sourceDirName:"cado-response/discovery-import",slug:"/cado-response/discovery-import/automation",permalink:"/cado-response/discovery-import/automation",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/automation.md",tags:[],version:"current",lastUpdatedAt:1702323671,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:3,frontMatter:{title:"Automation Rules (Beta)",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Managing Projects",permalink:"/cado-response/discovery-import/projects"},next:{title:"Readiness (Beta)",permalink:"/cado-response/discovery-import/readiness"}},l={},c=[{value:"Creating a Scope",id:"creating-a-scope",level:2},{value:"Creating an Environment",id:"creating-an-environment",level:2},{value:"Creating a Rule",id:"creating-a-rule",level:2},{value:"Permissions Required",id:"permissions-required",level:3},{value:"Managing Rules",id:"managing-rules",level:2},{value:"Example Scenario",id:"example-scenario",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-automation-rules"},"Configuring Automation Rules"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This feature is currently in beta - to enable this feature go to Settings > Experiments")),(0,i.kt)("p",null,"The Cado platform allows you to define automation rules to better prepare for incidents in cloud environments. These automation rules allow you to define in advance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What data you want to collect"),(0,i.kt)("li",{parentName:"ul"},"The alert triggers that will trigger a response"),(0,i.kt)("li",{parentName:"ul"},"Against which cloud resources, and"),(0,i.kt)("li",{parentName:"ul"},"What response actions you want to take")),(0,i.kt)("p",null,"Automation in Cado is based upon three main concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scopes")," - Scopes are sets of cloud resources within a single cloud provider (currently only AWS supported). These cloud resources may be defined by the region and/or account in which they reside, the service (e.g. EC2, S3), and any tags applied to those resources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Environments")," - Environments are sets of one or more scopes that you want to treat similarly - for example an application that spans multiple services across multiple cloud environments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rules")," - Rules are sets of actions that will automatically take place in the event that an alert gets triggered")),(0,i.kt)("p",null,"to give an example of how the rules work lets take the following. A GuardDuty Alert has been raised with a severirty level of 5, the alert is for an EC2 that has been compromised, we then check the automation rules to determine if ther is a rule set up for GuardDuty alerts for EC2  in region & accouint the EC2 reside in. If a rule matches we then prform the investigation based on the Investigation type defined in the rule i.e full investigation. After the import is complete we can check the click the automated investigation tab to see if all malicous and suspispious activity in relation to the compromised EC2. You can then select the piece of evidence and view the cloud resource there a panel will open with the metadata and actions tab. the metadata tab is just metadata about the resource and the actions tab is the remediationactions that can be preformed on the compromised resource. To autmate the remediation actions you can enable this in the settings -> advanced which will do the above until the full investiagation is complete and will automatically invoke the actions defined in the automation rules for malicious or suspicious activity "),(0,i.kt)("h2",{id:"creating-a-scope"},"Creating a Scope"),(0,i.kt)("p",null,'To create a scope, navigate to the Scopes tab and hit "Create Scope" button. Enter the name of the scope, the regions, the accounts, the services covered and any tags that identify your services. If you specify multiple tags, resources tagged with any one of those tags will be included.'),(0,i.kt)("p",null,"Hit 'Save' to create the scope"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Scope",src:n(9486).Z,width:"1061",height:"812"})),(0,i.kt)("h2",{id:"creating-an-environment"},"Creating an Environment"),(0,i.kt)("p",null,'To create an Environment, navigate to the Environments tab and hit "Create Environment" button. Enter the name of the environment, and choose the scopes to add to the environment from the bottom of the screen. Click "Add scope" and these will add to the list of selected scopes.'),(0,i.kt)("p",null,"Hit 'Save' to create the environment"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Environments",src:n(1024).Z,width:"1632",height:"811"})),(0,i.kt)("h2",{id:"creating-a-rule"},"Creating a Rule"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE: You can create rules without necessarily creating scopes or environments")),(0,i.kt)("p",null,'To create an rule, navigate to the Rules tab and hit "Create Rule" button.'),(0,i.kt)("p",null,"Enter the name of the rule and a description. Specify"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Environments (optional)"))," - the environments specifying the assets against which the rule will run. If this is left blank, this rule will trigger against any alert identifying an affected workloads",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Monitoring Enabled")," - if monitoring is checked then GuardDuty Monitoring will be enabled on all regions in the cloud accounts specified within a particular Environment(s), this will run every 5 minutes to check for new alerts that contain a minimum severity of 5"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Alert Type")),"  - the type of alert that will trigger the rule (e.g. GuardDuty)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Asset Type"))," - the type of cloud resource to which the rule will apply (e.g. EC2)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Investigation Type"))," - the type of invesigation to perform. This currently has three options",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Default")," - Performs triage collection from any workload specified in the alert"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Triage")," - Performs triage collection from any workload specified in the alert"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Full")," - Performs full disk collection from any workload specified in the alert"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Response Actions (optional)"))," - the actions to take against machines upon which malicious activities have been detected, and machines upon which suspicous activities have been detected. Cado currently supports shutting down EC2 instances, isolating the IAM roles of that the EC2 instance assumes and isolate security group attached to the EC2.")),(0,i.kt)("p",null,"Hit 'Save' to create the rule"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Rule",src:n(476).Z,width:"2170",height:"1614"})),(0,i.kt)("h3",{id:"permissions-required"},"Permissions Required"),(0,i.kt)("p",null,"Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add these permissions to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required Permissions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Stop Instance"),(0,i.kt)("td",{parentName:"tr",align:null},"Stops an EC2 instance using the AWS API"),(0,i.kt)("td",{parentName:"tr",align:null},"ec2:StopInstances")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Isolate Role"),(0,i.kt)("td",{parentName:"tr",align:null},"Isolates the IAM role attached to an EC2 instance. Isolated by adding a deny all inline policy to the given IAM role."),(0,i.kt)("td",{parentName:"tr",align:null},"iam:GetInstanceProfile iam:PutRolePolicy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Isolate Security Group"),(0,i.kt)("td",{parentName:"tr",align:null},"Isolates the security group attached to and EC2 instance. Isolated by creating a security group, blanking it and replacing it on the EC2."),(0,i.kt)("td",{parentName:"tr",align:null},"ec2:CreateSecurityGroup ec2:RevokeSecurityGroupEgress ec2:ModifyInstanceAttribute")))),(0,i.kt)("h2",{id:"managing-rules"},"Managing Rules"),(0,i.kt)("p",null,"You can configure multiple response rules. In the event that a resource is covered by multiple rules, the first rule in the list applies"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Manage Rules",src:n(7228).Z,width:"1667",height:"282"})),(0,i.kt)("h2",{id:"example-scenario"},"Example Scenario"),(0,i.kt)("p",null,"A GuardDuty Alert has been raised with a severity level of 5. The alert is for an EC2 that has been compromised. An investigation will be triggered, but before this, we check the Automation Rules defined - if there is a rule set up for GuardDuty alerts for EC2  in the Region & Account the compromised EC2 resides in.\nIf a rule matches, we then perform the investigation based on the Investigation type defined in the rule (i.e full investigation)."),(0,i.kt)("p",null,"After the import is complete we can check the automated investigation tab to view all malicious and suspicious activity in relation to the compromised EC2.\nYou can then select the cloud resource and view the cloud resource. A panel will open with the metadata and actions tab. The metadata tab contains metadata about the resource and the Actions tab contains actions which can be performed on the compromised resource."),(0,i.kt)("p",null,"To automate the remediation actions on the compromised resource, you can enable this under the Settings -> Advanced tab, this would avoid you having to manually invoke the actions via the cloud resource panel. This will automatically invoke the actions defined in the Automation Rule for malicious or suspicious activity after the investigation is complete."))}p.isMDXComponent=!0},1024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/environments-72cb069d871104cc1b13d33bdfb68916.png"},7228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rules-list-079383494a28c8acafa4ad624d3e6231.png"},476:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rules-7cbd5b97c7cefd78bd295d0cfec3194d.png"},9486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scopes-50355401cc62813c6ace8390e10b75bb.png"}}]);