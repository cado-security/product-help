"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2829],{38796:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=d(74848),t=d(28453);const i={title:"Manage users",hide_title:!0,sidebar_position:3},r="How to Manage Users and Authentication in Cado",c={id:"cado/manage/users-authentication/users",title:"Manage users",description:"In the Cado platform, you can control user access to both processed data and raw data stored in the cloud, ensuring users only access the data they need.",source:"@site/docs/cado/manage/users-authentication/users.md",sourceDirName:"cado/manage/users-authentication",slug:"/cado/manage/users-authentication/users",permalink:"/cado/manage/users-authentication/users",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/users-authentication/users.md",tags:[],version:"current",lastUpdatedAt:1740500850,formattedLastUpdatedAt:"Feb 25, 2025",sidebarPosition:3,frontMatter:{title:"Manage users",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Community edition",permalink:"/cado/community-intro"},next:{title:"Azure AD",permalink:"/cado/manage/users-authentication/sso/azure-ad"}},l={},h=[{value:"Cado Platform Roles",id:"cado-platform-roles",level:3},{value:"User Types",id:"user-types",level:4},{value:"Role Permissions Matrix",id:"role-permissions-matrix",level:4},{value:"Configuring Single Sign-On (SSO)",id:"configuring-single-sign-on-sso",level:3},{value:"Managing Accounts",id:"managing-accounts",level:3},{value:"Managing Groups",id:"managing-groups",level:3},{value:"Creating a New User",id:"creating-a-new-user",level:3},{value:"Granting Administrator Access",id:"granting-administrator-access",level:3},{value:"Granting Access to an Investigation",id:"granting-access-to-an-investigation",level:3},{value:"Password Policy",id:"password-policy",level:3}];function x(e){const s={a:"a",admonition:"admonition",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"how-to-manage-users-and-authentication-in-cado",children:"How to Manage Users and Authentication in Cado"}),"\n",(0,n.jsx)(s.p,{children:"In the Cado platform, you can control user access to both processed data and raw data stored in the cloud, ensuring users only access the data they need."}),"\n",(0,n.jsx)(s.h3,{id:"cado-platform-roles",children:"Cado Platform Roles"}),"\n",(0,n.jsx)(s.p,{children:"RBAC (Role Based Access) ensures only authorised individuals have access to specific features and data. This is based on permissions defined for the role they are assigned."}),"\n",(0,n.jsx)(s.h4,{id:"user-types",children:"User Types"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"User Role"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Administrator"}),(0,n.jsx)(s.td,{children:"Ability to access all functionality in the Cado platform"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Platform Administrator"}),(0,n.jsx)(s.td,{children:"A more restricted set of permissions than Administrator, with a focus on operational aspects of the platform including upgrades, account management, and troubleshooting."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Lead Analyst"}),(0,n.jsx)(s.td,{children:"A restricted set of permissions with a focus on managing investigations including user access and taking response actions"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Analyst"}),(0,n.jsx)(s.td,{children:"A more restricted permission set than the Lead Analyst role, with a focus on conducting investigations including acquiring and analysing evidence"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Read only Analyst"}),(0,n.jsx)(s.td,{children:"Most restricted role with read only access"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"role-permissions-matrix",children:"Role Permissions Matrix"}),"\n",(0,n.jsx)(s.p,{children:"The below table is a breakdown of permissions across each of the different roles and their levels of access."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Permission Group"}),(0,n.jsx)(s.th,{children:"Permission"}),(0,n.jsx)(s.th,{children:"Administrator"}),(0,n.jsx)(s.th,{children:"Platform Administrator"}),(0,n.jsx)(s.th,{children:"Lead Analyst"}),(0,n.jsx)(s.th,{children:"Analyst"}),(0,n.jsx)(s.th,{children:"Read Only Analyst"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Response Actions"})}),(0,n.jsx)(s.td,{children:"View response actions"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete/Update response actions"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Invoke response action"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Alarms"})}),(0,n.jsx)(s.td,{children:"View alarms"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete alarms"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Audit Log"})}),(0,n.jsx)(s.td,{children:"View and download audit log"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"View audit log history"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Authentication"})}),(0,n.jsx)(s.td,{children:"Authenticate to the platform"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"API Keys"})}),(0,n.jsx)(s.td,{children:"View API keys"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create API keys"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Delete API keys"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Cloud Accounts"})}),(0,n.jsx)(s.td,{children:"View cloud accounts"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete cloud accounts"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Detections"})}),(0,n.jsx)(s.td,{children:"View detections"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Export detections"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"View detection rules"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete/Update detection rules"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create investigation from detection"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Investigations"})}),(0,n.jsx)(s.td,{children:"View investigation and data associated with investigation"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete/Update data associated with investigation"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Delete all investigations"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create investigation"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Delete investigation"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Evidence"})}),(0,n.jsx)(s.td,{children:"Import evidence and data"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Download evidence"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"License"})}),(0,n.jsx)(s.td,{children:"View platform license"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Delete/Update platform license"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Metrics"})}),(0,n.jsx)(s.td,{children:"View platform metrics"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Notifications"})}),(0,n.jsx)(s.td,{children:"Delete all notifications"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"View platform notifications"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Delete specified notification"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Saved Scripts"})}),(0,n.jsx)(s.td,{children:"Invoke saved script and commands"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Settings"})}),(0,n.jsx)(s.td,{children:"View intelligence"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Delete/Update intelligence"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"View settings"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete/Update settings"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"View authentication settings"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Update authentication settings"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete/Update scripts"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"View scripts"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Saved Queries"})}),(0,n.jsx)(s.td,{children:"View saved queries"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete/Update saved queries"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Webhooks"})}),(0,n.jsx)(s.td,{children:"View webhooks"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete/Update webhooks"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"System"})}),(0,n.jsx)(s.td,{children:"Upgrade and reboot the platform"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"View and download system logs"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"View platform details and health status"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Platform Status"})}),(0,n.jsx)(s.td,{children:"View platform status"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Pipelines"})}),(0,n.jsx)(s.td,{children:"View pipeline details"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Cancel pipeline"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"View and download pipeline logs"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Rerun pipeline"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Cancel all pipelines"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Users"})}),(0,n.jsx)(s.td,{children:"View all users"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete/Update users"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"View user details"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Update user details"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"EULA"})}),(0,n.jsx)(s.td,{children:"Sign EULA"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Groups"})}),(0,n.jsx)(s.td,{children:"View user groups"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Create/Delete/Update user groups"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Workers"})}),(0,n.jsx)(s.td,{children:"View worker details"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Terminate worker"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.strong,{children:"Roles"})}),(0,n.jsx)(s.td,{children:"View roles"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u2705"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"\u274c"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Users-Groups-Roles",src:d(57296).A+"",width:"809",height:"262"})}),"\n",(0,n.jsx)(s.h3,{id:"configuring-single-sign-on-sso",children:"Configuring Single Sign-On (SSO)"}),"\n",(0,n.jsxs)(s.p,{children:["Cado supports SSO integration with ",(0,n.jsx)(s.a,{href:"/cado/manage/users-authentication/sso/azure-ad",children:"Azure AD"}),", Okta (",(0,n.jsx)(s.a,{href:"/cado/manage/users-authentication/sso/okta",children:"OAuth"})," or ",(0,n.jsx)(s.a,{href:"/cado/manage/users-authentication/sso/okta_saml",children:"SAML"}),"), and ",(0,n.jsx)(s.a,{href:"/cado/manage/users-authentication/sso/ping_saml",children:"PingID"}),". When SSO is configured, the Cado platform automatically creates the user at first login. By integrating SSO, you can enforce authentication mechanisms such as two-factor authentication supported by your SSO provider."]}),"\n",(0,n.jsx)(s.h3,{id:"managing-accounts",children:"Managing Accounts"}),"\n",(0,n.jsxs)(s.p,{children:["Accounts in Cado correspond to cloud accounts in AWS, Azure, or GCP that have the necessary permissions to access cloud resources. Only Administrators can manage accounts. These accounts are automatically populated when CSP credentials are added, following instructions for ",(0,n.jsx)(s.a,{href:"/cado/deploy/cross/cross-account-creation#adding-the-role-to-cado",children:"AWS"}),", ",(0,n.jsx)(s.a,{href:"/cado/deploy/cross/azure-cross-tenancy-subscriptions#registering-credentials-within-cado",children:"Azure"}),", and ",(0,n.jsx)(s.a,{href:"/cado/deploy/gcp/gcp-settings#en",children:"GCP"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["It\u2019s recommended to perform ",(0,n.jsx)(s.strong,{children:"Account Checks"})," periodically to ensure correct permissions are in place for successful data acquisitions. See ",(0,n.jsx)(s.a,{href:"/cado/manage/monitoring#account-check",children:"Account Check"})," for more details."]}),"\n",(0,n.jsx)(s.h3,{id:"managing-groups",children:"Managing Groups"}),"\n",(0,n.jsx)(s.p,{children:"Groups allow Administrators to manage user access to investigations and cloud resources. Only Administrators can create or manage groups."}),"\n",(0,n.jsx)(s.p,{children:"To create a new group:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Groups"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Add Group"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Enter the group name."}),"\n",(0,n.jsx)(s.li,{children:"Enter the corresponding SSO group name to auto-assign users who log in via SSO."}),"\n",(0,n.jsx)(s.li,{children:"Assign users and select the CSP Accounts the group should have access to."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Groups",src:d(1861).A+"",width:"713",height:"465"})}),"\n",(0,n.jsx)(s.h3,{id:"creating-a-new-user",children:"Creating a New User"}),"\n",(0,n.jsx)(s.p,{children:"Only Administrators can create new users. When a new user is created, a temporary password must be set, which the user will be required to change upon first login."}),"\n",(0,n.jsx)(s.p,{children:"To add a new user:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Teams"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Create User"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Assign the user a role from the dropdown"}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Add new user"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"granting-administrator-access",children:"Granting Administrator Access"}),"\n",(0,n.jsx)(s.p,{children:"To grant Administrator access to a user:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Teams"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Next to the user, click the Edit icon ",(0,n.jsx)(s.img,{alt:"Edit",src:d(37553).A+"",width:"21",height:"19"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Assign the user a role from the dropdown"}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Confirm"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsx)(s.p,{children:"Follow the principle of least privilege when creating users and assigning Administrator access."})}),"\n",(0,n.jsx)(s.h3,{id:"granting-access-to-an-investigation",children:"Granting Access to an Investigation"}),"\n",(0,n.jsx)(s.p,{children:"To grant a user or group access to an existing investigation:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Investigations"})," and select the investigation."]}),"\n",(0,n.jsxs)(s.li,{children:["Click the ",(0,n.jsx)(s.strong,{children:"Investigation Settings"})," button"]}),"\n",(0,n.jsxs)(s.li,{children:["Assign ",(0,n.jsx)(s.strong,{children:"Users"})," from the dropdown"]}),"\n",(0,n.jsxs)(s.li,{children:["Assign ",(0,n.jsx)(s.strong,{children:"Groups"})," from the dropdown"]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"password-policy",children:"Password Policy"}),"\n",(0,n.jsx)(s.p,{children:"Passwords must:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Allow special characters."}),"\n",(0,n.jsx)(s.li,{children:"Be at least 8 characters long, including 1 number and 1 uppercase letter."}),"\n",(0,n.jsx)(s.li,{children:"Avoid commonly used passwords."}),"\n"]})]})}function j(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},37553:(e,s,d)=>{d.d(s,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFYSURBVDhPY/wPBAxUBhQbuu/waYbXb98zmBlqMyjKS4PFKDIUZOD9h0+hPAYGJ1tTsMFwQ89dvM5w/vJNsCQ+ICkuwuDlasNw/tINBgF+XrDBMMDFxcEQGeTBwATlE2WgoAAfg5WZPsPRkxcYzgEN/fnrN9h1MCAuKgym4S6du2QDWCA5JgBM4wIgA2/cfgDlMTBYmxswsLOxMtx/9AxuAdylxAB0A0EAJPbh42cUFxNtKDYDQUBBTorBUE8DyoMAogw9ePQsVgNBMe1sZwblIQBBQ0Gxe+f+YygPAUAGInsZGeA1FD0dwgDIQCOgl7ftPgIVQQV4DQVFADqAuRBk4fOXb6CiqACvod++fYeyIADZy+8/fALT2ABeQ0GJm52djUEImOjxhSE6wGsoKCPEhHoxBPo4EW0gCGDkKFIBthwId6mhrjqURTzApYfi8hQbwBum5AEGBgCpB4w70q85UwAAAABJRU5ErkJggg=="},1861:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/groups-b8da3a2285c1b36a6aff417aad36948a.png"},57296:(e,s,d)=>{d.d(s,{A:()=>n});const n=d.p+"assets/images/users-groups-roles-d8a30a18b94f525420309d2128d0bfa1.png"},28453:(e,s,d)=>{d.d(s,{R:()=>r,x:()=>c});var n=d(96540);const t={},i=n.createContext(t);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);