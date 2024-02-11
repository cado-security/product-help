"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1390],{2935:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=n(5893),r=n(1151);const a={title:"Managing Users",hide_title:!0,sidebar_position:3},o="Managing Cado Users",i={id:"cado-response/manage/users-authentication/users",title:"Managing Users",description:"In the Cado platform you can grant access only to the data to which they need access - to both processed data within the platform, and resources or raw data residing in the cloud.",source:"@site/docs/cado-response/manage/users-authentication/users.md",sourceDirName:"cado-response/manage/users-authentication",slug:"/cado-response/manage/users-authentication/users",permalink:"/cado-response/manage/users-authentication/users",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/users-authentication/users.md",tags:[],version:"current",lastUpdatedAt:1707618697,formattedLastUpdatedAt:"Feb 11, 2024",sidebarPosition:3,frontMatter:{title:"Managing Users",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Applying a License",permalink:"/cado-response/manage/licenses"},next:{title:"Azure AD",permalink:"/cado-response/manage/users-authentication/sso/azure-ad"}},c={},d=[{value:"User Types",id:"user-types",level:3},{value:"Configuring Single Sign On (SSO)",id:"configuring-single-sign-on-sso",level:3},{value:"Managing Roles",id:"managing-roles",level:3},{value:"Managing Groups",id:"managing-groups",level:3},{value:"Creating a New User",id:"creating-a-new-user",level:3},{value:"Granting Administrator Access",id:"granting-administrator-access",level:3},{value:"Granting Access to a Project",id:"granting-access-to-a-project",level:3}];function l(e){const s={a:"a",admonition:"admonition",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"managing-cado-users",children:"Managing Cado Users"}),"\n",(0,t.jsx)(s.p,{children:"In the Cado platform you can grant access only to the data to which they need access - to both processed data within the platform, and resources or raw data residing in the cloud."}),"\n",(0,t.jsx)(s.h3,{id:"user-types",children:"User Types"}),"\n",(0,t.jsx)(s.p,{children:"There are two roles in the Cado platform."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Administrator"}),(0,t.jsx)(s.td,{children:"Can edit users and access all projects and configured cloud resources."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Normal User"}),(0,t.jsx)(s.td,{children:"Users with restricted access to a subset of projects and cloud resources."})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"In order to get access to projects and data a Normal User needs to be added to a project, or a group that has access to that project. In order to acquire cloud data for a project, the user needs to be given access to a CSP Role that has access to that cloud data or resource, or added to a group that has access to that CSP Role"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Users-Groups-Roles",src:n(1011).Z+"",width:"809",height:"262"})}),"\n",(0,t.jsx)(s.h3,{id:"configuring-single-sign-on-sso",children:"Configuring Single Sign On (SSO)"}),"\n",(0,t.jsxs)(s.p,{children:["Cado also supports authentication via ",(0,t.jsx)(s.a,{href:"/cado-response/manage/users-authentication/sso/azure-ad",children:"Azure AD"}),", Okta (",(0,t.jsx)(s.a,{href:"/cado-response/manage/users-authentication/sso/okta",children:"OAuth"})," or ",(0,t.jsx)(s.a,{href:"/cado-response/manage/users-authentication/sso/okta_saml",children:"SAML"}),") and ",(0,t.jsx)(s.a,{href:"/cado-response/manage/users-authentication/sso/ping_saml",children:"PingID"}),". When you configure SSO access, the Cado platform will automatically create the user at first login. By integrating Cado with your SSO platform you can enforce any authentication mechanism supported by the SSO platform, including two factor authentication."]}),"\n",(0,t.jsx)(s.h3,{id:"managing-roles",children:"Managing Roles"}),"\n",(0,t.jsxs)(s.p,{children:["Roles in Cado correspond to CSP roles in AWS, Azure or GCP that have appropriate levels of access to cloud resources. Only Administrators can manage roles. This list is autopopulated when administrators add CSP credentials to the platform following the instructions for ",(0,t.jsx)(s.a,{href:"/cado-response/deploy/aws/iam/cross-account-creation#adding-the-role-to-cado",children:"AWS"}),", ",(0,t.jsx)(s.a,{href:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions#registering-credentials-within-cado",children:"Azure"}),", and ",(0,t.jsx)(s.a,{href:"/cado-response/deploy/gcp/gcp-settings#entering-settings",children:"GCP"})," respectively."]}),"\n",(0,t.jsx)(s.h3,{id:"managing-groups",children:"Managing Groups"}),"\n",(0,t.jsx)(s.p,{children:"Groups in Cado allow you to define groups of users that you can use to assign or revoke access to projects and/or cloud resources. Only Administrators can manage groups."}),"\n",(0,t.jsx)(s.p,{children:"To create a new group:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Groups"})]}),"\n",(0,t.jsxs)(s.li,{children:["Click the ",(0,t.jsx)(s.strong,{children:"Add Group"})," button"]}),"\n",(0,t.jsx)(s.li,{children:"Enter the name of the group"}),"\n",(0,t.jsx)(s.li,{children:"Enter the name of a group in your SSO platform that corresponds to this group. When selected, any members of your SSO group that log into the Cado Platform will automatically be joined to this group"}),"\n",(0,t.jsx)(s.li,{children:"Select any users that need to assigned to this group"}),"\n",(0,t.jsx)(s.li,{children:"Select any CSP Roles that users in this group need access to"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Groups",src:n(4903).Z+"",width:"713",height:"465"})}),"\n",(0,t.jsx)(s.h3,{id:"creating-a-new-user",children:"Creating a New User"}),"\n",(0,t.jsx)(s.p,{children:"Only Administrators can create new users.  When an Administrator creates a new user, a temporary password must be created by the Administrator.  The new user will be asked to change their password when they first login.\nTo add a new user:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Users"})]}),"\n",(0,t.jsxs)(s.li,{children:["Click the ",(0,t.jsx)(s.strong,{children:"Add Users"})," button"]}),"\n",(0,t.jsx)(s.li,{children:"Select any groups the user needs to be assigned"}),"\n",(0,t.jsx)(s.li,{children:"Select any CSP Roles the user need to be assigned"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"granting-administrator-access",children:"Granting Administrator Access"}),"\n",(0,t.jsx)(s.p,{children:"To elevate privileges and grant Administrator access to a normal user, do the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Users"})]}),"\n",(0,t.jsxs)(s.li,{children:["Next to the appropriate user, click the Edit icon ",(0,t.jsx)(s.img,{alt:"Edit",src:n(4647).Z+"",width:"21",height:"19"})]}),"\n",(0,t.jsxs)(s.li,{children:["Select the ",(0,t.jsx)(s.strong,{children:"This user has administrator access"})," checkbox"]}),"\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Update"})]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"It is strongly recommended to follow the principles of least privilege when creating new users and granting Administrator access."})}),"\n",(0,t.jsx)(s.h3,{id:"granting-access-to-a-project",children:"Granting Access to a Project"}),"\n",(0,t.jsx)(s.p,{children:"To grant existing users or groups to a Project, you can add them when you create the Project, or you can follow the below instructions to add users to an existing Project:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Projects"})," and select the project to which you would like to add users"]}),"\n",(0,t.jsxs)(s.li,{children:["Click the ",(0,t.jsx)(s.strong,{children:"Access"})," button"]}),"\n",(0,t.jsxs)(s.li,{children:["Click the ",(0,t.jsx)(s.strong,{children:"Add Users"})," button"]}),"\n",(0,t.jsxs)(s.li,{children:["Select the user and/or group to add and Click ",(0,t.jsx)(s.strong,{children:"Add"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4647:(e,s,n)=>{n.d(s,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFYSURBVDhPY/wPBAxUBhQbuu/waYbXb98zmBlqMyjKS4PFKDIUZOD9h0+hPAYGJ1tTsMFwQ89dvM5w/vJNsCQ+ICkuwuDlasNw/tINBgF+XrDBMMDFxcEQGeTBwATlE2WgoAAfg5WZPsPRkxcYzgEN/fnrN9h1MCAuKgym4S6du2QDWCA5JgBM4wIgA2/cfgDlMTBYmxswsLOxMtx/9AxuAdylxAB0A0EAJPbh42cUFxNtKDYDQUBBTorBUE8DyoMAogw9ePQsVgNBMe1sZwblIQBBQ0Gxe+f+YygPAUAGInsZGeA1FD0dwgDIQCOgl7ftPgIVQQV4DQVFADqAuRBk4fOXb6CiqACvod++fYeyIADZy+8/fALT2ABeQ0GJm52djUEImOjxhSE6wGsoKCPEhHoxBPo4EW0gCGDkKFIBthwId6mhrjqURTzApYfi8hQbwBum5AEGBgCpB4w70q85UwAAAABJRU5ErkJggg=="},4903:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/groups-b8da3a2285c1b36a6aff417aad36948a.png"},1011:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/users-groups-roles-d8a30a18b94f525420309d2128d0bfa1.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>o});var t=n(7294);const r={},a=t.createContext(r);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);