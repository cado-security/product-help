"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8644],{48437:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=s(74848),t=s(28453);const r={title:"Azure AD",hide_title:!0,sidebar_position:1},o="How to Set Up the Azure AD OAuth Integration",l={id:"cado/manage/users-authentication/sso/azure-ad",title:"Azure AD",description:"If you encounter any issues during the setup process, please contact support at support@cadosecurity.com and provide detailed information about your configuration.",source:"@site/docs/cado/manage/users-authentication/sso/azure-ad.md",sourceDirName:"cado/manage/users-authentication/sso",slug:"/cado/manage/users-authentication/sso/azure-ad",permalink:"/cado/manage/users-authentication/sso/azure-ad",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/users-authentication/sso/azure-ad.md",tags:[],version:"current",lastUpdatedAt:1736765008,formattedLastUpdatedAt:"Jan 13, 2025",sidebarPosition:1,frontMatter:{title:"Azure AD",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Manage users",permalink:"/cado/manage/users-authentication/users"},next:{title:"Okta OAuth",permalink:"/cado/manage/users-authentication/sso/okta"}},a={},c=[{value:"Setting Up Azure AD SSO",id:"setting-up-azure-ad-sso",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-set-up-the-azure-ad-oauth-integration",children:"How to Set Up the Azure AD OAuth Integration"}),"\n",(0,i.jsxs)(n.p,{children:["If you encounter any issues during the setup process, please contact support at ",(0,i.jsx)(n.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," and provide detailed information about your configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["You can enable the beta version of Azure AD OAuth Integration in Cado by navigating to ",(0,i.jsx)(n.strong,{children:"Settings > SSO > Microsoft OAuth"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-azure-ad-sso",children:"Setting Up Azure AD SSO"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.strong,{children:"Azure portal"})," and go to ",(0,i.jsx)(n.strong,{children:"Enterprise Applications"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"New Application"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Create your own application"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enter a name (e.g., Cado)."}),"\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.strong,{children:"Integrate any other application you don't find in the gallery (Non-gallery)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Make a note of the ",(0,i.jsx)(n.strong,{children:"Application ID"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Optional:"})," Create a role to allow Azure AD users to be assigned admin privileges:"]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From the home page, go to ",(0,i.jsx)(n.strong,{children:"Azure Active Directory"})," and select the ",(0,i.jsx)(n.strong,{children:"App Registrations"})," blade."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select your application (you may need to switch to the ",(0,i.jsx)(n.strong,{children:"All Applications"})," tab if you're not the owner)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.strong,{children:"App roles"})," and click ",(0,i.jsx)(n.strong,{children:"Create app role"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Define a role value (e.g., ",(0,i.jsx)(n.code,{children:"admin"}),"), but you can name this role as you prefer. Make a note of the role name for later use."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Azure AD Role",src:s(630).A+"",width:"567",height:"501"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configure Access Control"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Enterprise Applications"})," and open the ",(0,i.jsx)(n.strong,{children:"Properties"})," blade. Ensure that ",(0,i.jsx)(n.strong,{children:"User assignment required?"})," is set to ",(0,i.jsx)(n.code,{children:"Yes"}),", meaning only assigned users can log in to Cado.\n",(0,i.jsx)(n.img,{alt:"Azure Properties",src:s(43380).A+"",width:"604",height:"497"})]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Users and Groups"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add User/Group"})," to assign users who will have access to the application. If you created an admin role, you can assign users to this role to give them admin access within Cado."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create a Client Secret"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["From the home page, go to ",(0,i.jsx)(n.strong,{children:"Azure Active Directory"})," and select the ",(0,i.jsx)(n.strong,{children:"App Registrations"})," blade."]}),"\n",(0,i.jsxs)(n.li,{children:["Select your application (you may need to switch to the ",(0,i.jsx)(n.strong,{children:"All Applications"})," tab if you're not the owner)."]}),"\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"Certificates & Secrets"})," blade and click ",(0,i.jsx)(n.strong,{children:"New Client Secret"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Make a note of the ",(0,i.jsx)(n.strong,{children:"Value"}),"; you will need this in Cado."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Collect Required Information"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Overview"})," blade, note down the following values:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Application (Client) ID"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Directory (Tenant) ID"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Client Secret"})," (from the previous step)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Whitelist the Redirect URL"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"Authentication"})," blade.\n",(0,i.jsx)(n.img,{alt:"Azure Authentication",src:s(73591).A+"",width:"240",height:"274"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add a Platform"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Web"})," and input your redirect URL. This should be the URL you use to access Cado in your browser, including the ",(0,i.jsx)(n.code,{children:"/login"})," path. Example: ",(0,i.jsx)(n.code,{children:"https://my.cado.instance/login"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Add API Permissions"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.strong,{children:"API Permissions"})," blade.\n",(0,i.jsx)(n.img,{alt:"Azure API Permissions page",src:s(34094).A+"",width:"1932",height:"872"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add a permission"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Microsoft Graph"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.strong,{children:"Delegated Permissions"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"OpenId permissions"}),", select ",(0,i.jsx)(n.strong,{children:"email"})," and ",(0,i.jsx)(n.strong,{children:"openid"}),".\n",(0,i.jsx)(n.img,{alt:"Azure API Permissions",src:s(52869).A+"",width:"718",height:"1073"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add permissions"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configure SSO in the Cado Platform"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Log in to your Cado instance as an admin user."}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Settings > SSO > Microsoft OAuth"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Enter the Microsoft OAuth details you noted earlier."}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.code,{children:"Admin Group Name"})," field, enter the value you configured in Step 4."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Update"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},34094:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure-api-permissions-1-c6773e7a506559b1d5400ea1181b3e02.png"},52869:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure-api-permissions-2-4e4a436bf78a84c08496a24f6636db77.png"},73591:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure-authentication-f45196cbc1394bf9eda1aadd1e4e95d8.png"},630:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure-create-role-a52699b7efa0b967fc0650cb134610f8.png"},43380:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure-properties-57e0d66a92abcab515c9f71b4974011b.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);