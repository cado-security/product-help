"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2829],{38796:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=n(74848),i=n(28453);const a={title:"Manage users",hide_title:!0,sidebar_position:3},r="How to Manage Users and Authentication in Cado",o={id:"cado/manage/users-authentication/users",title:"Manage users",description:"In the Cado platform, you can control user access to both processed data and raw data stored in the cloud, ensuring users only access the data they need.",source:"@site/docs/cado/manage/users-authentication/users.md",sourceDirName:"cado/manage/users-authentication",slug:"/cado/manage/users-authentication/users",permalink:"/cado/manage/users-authentication/users",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/users-authentication/users.md",tags:[],version:"current",lastUpdatedAt:1738502359,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:3,frontMatter:{title:"Manage users",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Community edition",permalink:"/cado/community-intro"},next:{title:"Azure AD",permalink:"/cado/manage/users-authentication/sso/azure-ad"}},c={},d=[{value:"User Types",id:"user-types",level:3},{value:"Configuring Single Sign-On (SSO)",id:"configuring-single-sign-on-sso",level:3},{value:"Managing Accounts",id:"managing-accounts",level:3},{value:"Managing Groups",id:"managing-groups",level:3},{value:"Creating a New User",id:"creating-a-new-user",level:3},{value:"Granting Administrator Access",id:"granting-administrator-access",level:3},{value:"Granting Access to an Investigation",id:"granting-access-to-an-investigation",level:3},{value:"Password Policy",id:"password-policy",level:3}];function l(e){const s={a:"a",admonition:"admonition",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"how-to-manage-users-and-authentication-in-cado",children:"How to Manage Users and Authentication in Cado"}),"\n",(0,t.jsx)(s.p,{children:"In the Cado platform, you can control user access to both processed data and raw data stored in the cloud, ensuring users only access the data they need."}),"\n",(0,t.jsx)(s.h3,{id:"user-types",children:"User Types"}),"\n",(0,t.jsx)(s.p,{children:"There are two user roles in the Cado platform:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Administrator"}),(0,t.jsx)(s.td,{children:"Can manage users and has access to all investigations and cloud resources."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Analyst"}),(0,t.jsx)(s.td,{children:"Has restricted access to specific investigations and cloud resources."})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["An ",(0,t.jsx)(s.strong,{children:"Analyst"})," must be added to an investigation or a group with access to that investigation to gain access. To acquire cloud data, the user needs access to a CSP Role that has permissions to the cloud resource or be part of a group with access to that CSP Role."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Users-Groups-Roles",src:n(57296).A+"",width:"809",height:"262"})}),"\n",(0,t.jsx)(s.h3,{id:"configuring-single-sign-on-sso",children:"Configuring Single Sign-On (SSO)"}),"\n",(0,t.jsxs)(s.p,{children:["Cado supports SSO integration with ",(0,t.jsx)(s.a,{href:"/cado/manage/users-authentication/sso/azure-ad",children:"Azure AD"}),", Okta (",(0,t.jsx)(s.a,{href:"/cado/manage/users-authentication/sso/okta",children:"OAuth"})," or ",(0,t.jsx)(s.a,{href:"/cado/manage/users-authentication/sso/okta_saml",children:"SAML"}),"), and ",(0,t.jsx)(s.a,{href:"/cado/manage/users-authentication/sso/ping_saml",children:"PingID"}),". When SSO is configured, the Cado platform automatically creates the user at first login. By integrating SSO, you can enforce authentication mechanisms such as two-factor authentication supported by your SSO provider."]}),"\n",(0,t.jsx)(s.h3,{id:"managing-accounts",children:"Managing Accounts"}),"\n",(0,t.jsxs)(s.p,{children:["Accounts in Cado correspond to cloud accounts in AWS, Azure, or GCP that have the necessary permissions to access cloud resources. Only Administrators can manage accounts. These accounts are automatically populated when CSP credentials are added, following instructions for ",(0,t.jsx)(s.a,{href:"/cado/deploy/cross/cross-account-creation#adding-the-role-to-cado",children:"AWS"}),", ",(0,t.jsx)(s.a,{href:"/cado/deploy/cross/azure-cross-tenancy-subscriptions#registering-credentials-within-cado",children:"Azure"}),", and ",(0,t.jsx)(s.a,{href:"/cado/deploy/gcp/gcp-settings#en",children:"GCP"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["It\u2019s recommended to perform ",(0,t.jsx)(s.strong,{children:"Account Checks"})," periodically to ensure correct permissions are in place for successful data acquisitions. See ",(0,t.jsx)(s.a,{href:"/cado/manage/monitoring#account-check",children:"Account Check"})," for more details."]}),"\n",(0,t.jsx)(s.h3,{id:"managing-groups",children:"Managing Groups"}),"\n",(0,t.jsx)(s.p,{children:"Groups allow Administrators to manage user access to investigations and cloud resources. Only Administrators can create or manage groups."}),"\n",(0,t.jsx)(s.p,{children:"To create a new group:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Go to ",(0,t.jsx)(s.strong,{children:"Groups"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Add Group"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Enter the group name."}),"\n",(0,t.jsx)(s.li,{children:"Enter the corresponding SSO group name to auto-assign users who log in via SSO."}),"\n",(0,t.jsx)(s.li,{children:"Assign users and select the CSP Accounts the group should have access to."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Groups",src:n(1861).A+"",width:"713",height:"465"})}),"\n",(0,t.jsx)(s.h3,{id:"creating-a-new-user",children:"Creating a New User"}),"\n",(0,t.jsx)(s.p,{children:"Only Administrators can create new users. When a new user is created, a temporary password must be set, which the user will be required to change upon first login."}),"\n",(0,t.jsx)(s.p,{children:"To add a new user:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Go to ",(0,t.jsx)(s.strong,{children:"Teams"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Create User"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Assign the user a role from the dropdown"}),"\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Add new user"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"granting-administrator-access",children:"Granting Administrator Access"}),"\n",(0,t.jsx)(s.p,{children:"To grant Administrator access to a user:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Go to ",(0,t.jsx)(s.strong,{children:"Teams"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Next to the user, click the Edit icon ",(0,t.jsx)(s.img,{alt:"Edit",src:n(37553).A+"",width:"21",height:"19"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Assign the user a role from the dropdown"}),"\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Confirm"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"Follow the principle of least privilege when creating users and assigning Administrator access."})}),"\n",(0,t.jsx)(s.h3,{id:"granting-access-to-an-investigation",children:"Granting Access to an Investigation"}),"\n",(0,t.jsx)(s.p,{children:"To grant a user or group access to an existing investigation:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Go to ",(0,t.jsx)(s.strong,{children:"Investigations"})," and select the investigation."]}),"\n",(0,t.jsxs)(s.li,{children:["Click the ",(0,t.jsx)(s.strong,{children:"Investigation Settings"})," button"]}),"\n",(0,t.jsxs)(s.li,{children:["Assign ",(0,t.jsx)(s.strong,{children:"Users"})," from the dropdown"]}),"\n",(0,t.jsxs)(s.li,{children:["Assign ",(0,t.jsx)(s.strong,{children:"Groups"})," from the dropdown"]}),"\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"password-policy",children:"Password Policy"}),"\n",(0,t.jsx)(s.p,{children:"Passwords must:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Allow special characters."}),"\n",(0,t.jsx)(s.li,{children:"Be at least 8 characters long, including 1 number and 1 uppercase letter."}),"\n",(0,t.jsx)(s.li,{children:"Avoid commonly used passwords."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},37553:(e,s,n)=>{n.d(s,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFYSURBVDhPY/wPBAxUBhQbuu/waYbXb98zmBlqMyjKS4PFKDIUZOD9h0+hPAYGJ1tTsMFwQ89dvM5w/vJNsCQ+ICkuwuDlasNw/tINBgF+XrDBMMDFxcEQGeTBwATlE2WgoAAfg5WZPsPRkxcYzgEN/fnrN9h1MCAuKgym4S6du2QDWCA5JgBM4wIgA2/cfgDlMTBYmxswsLOxMtx/9AxuAdylxAB0A0EAJPbh42cUFxNtKDYDQUBBTorBUE8DyoMAogw9ePQsVgNBMe1sZwblIQBBQ0Gxe+f+YygPAUAGInsZGeA1FD0dwgDIQCOgl7ftPgIVQQV4DQVFADqAuRBk4fOXb6CiqACvod++fYeyIADZy+8/fALT2ABeQ0GJm52djUEImOjxhSE6wGsoKCPEhHoxBPo4EW0gCGDkKFIBthwId6mhrjqURTzApYfi8hQbwBum5AEGBgCpB4w70q85UwAAAABJRU5ErkJggg=="},1861:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/groups-b8da3a2285c1b36a6aff417aad36948a.png"},57296:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/users-groups-roles-d8a30a18b94f525420309d2128d0bfa1.png"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var t=n(96540);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);