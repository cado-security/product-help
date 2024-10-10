"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4858],{4913:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(5893),t=s(1151);const r={title:"Azure AD",hide_title:!0,sidebar_position:1},o="Azure AD OAuth Integration",a={id:"cado-response/manage/users-authentication/sso/azure-ad",title:"Azure AD",description:"If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/manage/users-authentication/sso/azure-ad.md",sourceDirName:"cado-response/manage/users-authentication/sso",slug:"/cado-response/manage/users-authentication/sso/azure-ad",permalink:"/cado-response/manage/users-authentication/sso/azure-ad",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/users-authentication/sso/azure-ad.md",tags:[],version:"current",lastUpdatedAt:1728549029,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:1,frontMatter:{title:"Azure AD",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Managing Users",permalink:"/cado-response/manage/users-authentication/users"},next:{title:"Okta OAuth",permalink:"/cado-response/manage/users-authentication/sso/okta"}},l={},c=[{value:"Setting up Azure AD SSO",id:"setting-up-azure-ad-sso",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"azure-ad-oauth-integration",children:"Azure AD OAuth Integration"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["If you encounter issues, please contact ",(0,i.jsx)(n.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," describing your issue and providing as much detail about your configuration as possible."]})}),"\n",(0,i.jsx)(n.p,{children:'You can now enable the beta of Azure AD OAuth Integration in the Cado platform by going to "Settings > SSO > Microsoft OAuth".'}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-azure-ad-sso",children:"Setting up Azure AD SSO"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open Azure portal and navigate to ",(0,i.jsx)(n.strong,{children:"Enterprise Applications"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"New Application"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create your own application"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enter a name (e.g. Cado)"}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.code,{children:"Integrate any other application you don't find in the gallery (Non-gallery)"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Make a note of the Application ID"}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Optional:"})," Create a role to allow Azure AD users to be assigned admin privileges"]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["From the home page, open ",(0,i.jsx)(n.strong,{children:"Azure Active Directory"})," and select the ",(0,i.jsx)(n.strong,{children:"App Registrations"})," blade"]}),"\n",(0,i.jsxs)(n.li,{children:["Select your application (you may need to switch to the ",(0,i.jsx)(n.strong,{children:"All Applications"})," tab if you are not an owner)"]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"App roles"})," then ",(0,i.jsx)(n.strong,{children:"Create app role"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the role value, in this example it will be called, ",(0,i.jsx)(n.code,{children:"admin"}),", but you can name this as you like. Just make note of what you call this; you'll need it later\n",(0,i.jsx)(n.img,{alt:"Azure AD Role",src:s(981).Z+"",width:"567",height:"501"})]}),"\n"]})]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Configure Access Control","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Enterprise Applications"})," and select the ",(0,i.jsx)(n.strong,{children:"Properties"})," blade and make sure ",(0,i.jsx)(n.strong,{children:"User assignment required?"})," is set to ",(0,i.jsx)(n.code,{children:"Yes"}),". This means only assigned users will be allowed to log into Cado\n",(0,i.jsx)(n.img,{alt:"Azure Properties",src:s(4073).Z+"",width:"604",height:"497"})]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Users and Groups"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add User/Group"})," and add any users you want to give access to the app. If you created an admin role, you can assign the new users the admin role to give them admin access within Cado."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Create a secret to allow authentication with Cado","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["From the home page, open ",(0,i.jsx)(n.strong,{children:"Azure Active Directory"})," and select the ",(0,i.jsx)(n.strong,{children:"App Registrations"})," blade"]}),"\n",(0,i.jsxs)(n.li,{children:["Select your application (you may need to switch to the ",(0,i.jsx)(n.strong,{children:"All Applications"})," tab if you are not an owner)"]}),"\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Clients & Secrets"})," blade and click ",(0,i.jsx)(n.strong,{children:"New Client Secret"})]}),"\n",(0,i.jsxs)(n.li,{children:["Make a note of the ",(0,i.jsx)(n.strong,{children:"Value"}),", you will need this in Cado."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Collect other required information","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Overview"})," blade and make a note of the following values:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Application Client ID"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Directory (Tenant) ID"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Client Secret"})," (which you should already have from previous step)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Whitelist the redirect URL","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Authentication"})," blade\n",(0,i.jsx)(n.img,{alt:"Azure Authentication",src:s(9357).Z+"",width:"240",height:"274"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add a Platform"})]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Web"})," and input your redirect url. This should be the url you use to access Cado in the web browser, including the ",(0,i.jsx)(n.code,{children:"/login"})," path. Example: ",(0,i.jsx)(n.code,{children:"https://my.cado.instance/login"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Add the API Permissions","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"API Permissions Blade"}),"\n",(0,i.jsx)(n.img,{alt:"Azure API Permissions page",src:s(7283).Z+"",width:"2760",height:"1246"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add a permission"})]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Microsoft Graph"})]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Delegated Permissions"})]}),"\n",(0,i.jsxs)(n.li,{children:["Tick ",(0,i.jsx)(n.strong,{children:"email"})," and ",(0,i.jsx)(n.strong,{children:"openid"})," under ",(0,i.jsx)(n.strong,{children:"OpenId permissions"}),"\n",(0,i.jsx)(n.img,{alt:"Azure API Permissions",src:s(8704).Z+"",width:"1708",height:"2556"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add permissions"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Configure SSO in the Cado platform","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open your Cado instance and log in as an admin user"}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Settings > SSO > Microsoft OAuth"})]}),"\n",(0,i.jsx)(n.li,{children:"Enter the Microsoft OAuth details you noted earlier"}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.code,{children:"Admin Group Name"})," enter in the value you configured in step 4"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Update"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7283:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/azure-api-permissions-1-34874989214360057f5c6f975964bdcc.png"},8704:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/azure-api-permissions-2-b3e39e8da9ba3c50b402418e15b59e18.png"},9357:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/azure-authentication-f45196cbc1394bf9eda1aadd1e4e95d8.png"},981:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/azure-create-role-a52699b7efa0b967fc0650cb134610f8.png"},4073:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/azure-properties-57e0d66a92abcab515c9f71b4974011b.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(7294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);