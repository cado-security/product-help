"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1390],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),g=n,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1929:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"Managing Users",hide_title:!0,sidebar_position:3},s="Managing Cado Users",i={unversionedId:"cado-response/manage/users-authentication/users",id:"cado-response/manage/users-authentication/users",title:"Managing Users",description:"In the Cado platform you can grant access only to the data to which they need access - to both processed data within the platform, and resources or raw data residing in the cloud.",source:"@site/docs/cado-response/manage/users-authentication/users.md",sourceDirName:"cado-response/manage/users-authentication",slug:"/cado-response/manage/users-authentication/users",permalink:"/cado-response/manage/users-authentication/users",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/users-authentication/users.md",tags:[],version:"current",lastUpdatedAt:1702323671,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:3,frontMatter:{title:"Managing Users",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Applying a License",permalink:"/cado-response/manage/licenses"},next:{title:"Azure AD",permalink:"/cado-response/manage/users-authentication/sso/azure-ad"}},l={},c=[{value:"User Types",id:"user-types",level:3},{value:"Configuring Single Sign On (SSO)",id:"configuring-single-sign-on-sso",level:3},{value:"Managing Roles",id:"managing-roles",level:3},{value:"Managing Groups",id:"managing-groups",level:3},{value:"Creating a New User",id:"creating-a-new-user",level:3},{value:"Granting Administrator Access",id:"granting-administrator-access",level:3},{value:"Granting Access to a Project",id:"granting-access-to-a-project",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"managing-cado-users"},"Managing Cado Users"),(0,n.kt)("p",null,"In the Cado platform you can grant access only to the data to which they need access - to both processed data within the platform, and resources or raw data residing in the cloud. "),(0,n.kt)("h3",{id:"user-types"},"User Types"),(0,n.kt)("p",null,"There are two roles in the Cado platform. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Administrator"),(0,n.kt)("td",{parentName:"tr",align:null},"Can edit users and access all projects and configured cloud resources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Normal User"),(0,n.kt)("td",{parentName:"tr",align:null},"Users with restricted access to a subset of projects and cloud resources.")))),(0,n.kt)("p",null,"In order to get access to projects and data a Normal User needs to be added to a project, or a group that has access to that project. In order to acquire cloud data for a project, the user needs to be given access to a CSP Role that has access to that cloud data or resource, or added to a group that has access to that CSP Role"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Users-Groups-Roles",src:a(1011).Z,width:"809",height:"262"})),(0,n.kt)("h3",{id:"configuring-single-sign-on-sso"},"Configuring Single Sign On (SSO)"),(0,n.kt)("p",null,"Cado also supports authentication via ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/manage/users-authentication/sso/azure-ad"},"Azure AD"),", Okta (",(0,n.kt)("a",{parentName:"p",href:"/cado-response/manage/users-authentication/sso/okta"},"OAuth")," or ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/manage/users-authentication/sso/okta_saml"},"SAML"),") and ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/manage/users-authentication/sso/ping_saml"},"PingID"),". When you configure SSO access, the Cado platform will automatically create the user at first login. By integrating Cado with your SSO platform you can enforce any authentication mechanism supported by the SSO platform, including two factor authentication."),(0,n.kt)("h3",{id:"managing-roles"},"Managing Roles"),(0,n.kt)("p",null,"Roles in Cado correspond to CSP roles in AWS, Azure or GCP that have appropriate levels of access to cloud resources. Only Administrators can manage roles. This list is autopopulated when administrators add CSP credentials to the platform following the instructions for ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/deploy/aws/iam/cross-account-creation#adding-the-role-to-cado"},"AWS"),", ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions#registering-credentials-within-cado"},"Azure"),", and ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/deploy/gcp/gcp-settings#entering-settings"},"GCP")," respectively."),(0,n.kt)("h3",{id:"managing-groups"},"Managing Groups"),(0,n.kt)("p",null,"Groups in Cado allow you to define groups of users that you can use to assign or revoke access to projects and/or cloud resources. Only Administrators can manage groups. "),(0,n.kt)("p",null,"To create a new group:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Groups")),(0,n.kt)("li",{parentName:"ul"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Add Group")," button"),(0,n.kt)("li",{parentName:"ul"},"Enter the name of the group"),(0,n.kt)("li",{parentName:"ul"},"Enter the name of a group in your SSO platform that corresponds to this group. When selected, any members of your SSO group that log into the Cado Platform will automatically be joined to this group"),(0,n.kt)("li",{parentName:"ul"},"Select any users that need to assigned to this group"),(0,n.kt)("li",{parentName:"ul"},"Select any CSP Roles that users in this group need access to")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Groups",src:a(4903).Z,width:"713",height:"465"})),(0,n.kt)("h3",{id:"creating-a-new-user"},"Creating a New User"),(0,n.kt)("p",null,"Only Administrators can create new users.  When an Administrator creates a new user, a temporary password must be created by the Administrator.  The new user will be asked to change their password when they first login.\nTo add a new user:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Users")," "),(0,n.kt)("li",{parentName:"ul"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Add Users")," button"),(0,n.kt)("li",{parentName:"ul"},"Select any groups the user needs to be assigned"),(0,n.kt)("li",{parentName:"ul"},"Select any CSP Roles the user need to be assigned")),(0,n.kt)("h3",{id:"granting-administrator-access"},"Granting Administrator Access"),(0,n.kt)("p",null,"To elevate privileges and grant Administrator access to a normal user, do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Users")),(0,n.kt)("li",{parentName:"ul"},"Next to the appropriate user, click the Edit icon ",(0,n.kt)("img",{alt:"Edit",src:a(4647).Z,width:"21",height:"19"})),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"This user has administrator access")," checkbox"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Update"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"It is strongly recommended to follow the principles of least privilege when creating new users and granting Administrator access.")),(0,n.kt)("h3",{id:"granting-access-to-a-project"},"Granting Access to a Project"),(0,n.kt)("p",null,"To grant existing users or groups to a Project, you can add them when you create the Project, or you can follow the below instructions to add users to an existing Project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Projects")," and select the project to which you would like to add users"),(0,n.kt)("li",{parentName:"ul"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Access")," button "),(0,n.kt)("li",{parentName:"ul"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Add Users")," button"),(0,n.kt)("li",{parentName:"ul"},"Select the user and/or group to add and Click ",(0,n.kt)("strong",{parentName:"li"},"Add"))))}p.isMDXComponent=!0},4647:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFYSURBVDhPY/wPBAxUBhQbuu/waYbXb98zmBlqMyjKS4PFKDIUZOD9h0+hPAYGJ1tTsMFwQ89dvM5w/vJNsCQ+ICkuwuDlasNw/tINBgF+XrDBMMDFxcEQGeTBwATlE2WgoAAfg5WZPsPRkxcYzgEN/fnrN9h1MCAuKgym4S6du2QDWCA5JgBM4wIgA2/cfgDlMTBYmxswsLOxMtx/9AxuAdylxAB0A0EAJPbh42cUFxNtKDYDQUBBTorBUE8DyoMAogw9ePQsVgNBMe1sZwblIQBBQ0Gxe+f+YygPAUAGInsZGeA1FD0dwgDIQCOgl7ftPgIVQQV4DQVFADqAuRBk4fOXb6CiqACvod++fYeyIADZy+8/fALT2ABeQ0GJm52djUEImOjxhSE6wGsoKCPEhHoxBPo4EW0gCGDkKFIBthwId6mhrjqURTzApYfi8hQbwBum5AEGBgCpB4w70q85UwAAAABJRU5ErkJggg=="},4903:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/groups-b8da3a2285c1b36a6aff417aad36948a.png"},1011:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/users-groups-roles-d8a30a18b94f525420309d2128d0bfa1.png"}}]);