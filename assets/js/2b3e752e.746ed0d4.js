"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6612],{69687:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(74848),i=t(28453);const o={title:"Okta OAuth",hide_title:!0,sidebar_position:2},a="How to Set Up the Okta OAuth Integration",r={id:"cado/manage/users-authentication/sso/okta",title:"Okta OAuth",description:"If you encounter issues, please contact support@cadosecurity.com and provide detailed information about your configuration.",source:"@site/docs/cado/manage/users-authentication/sso/okta.md",sourceDirName:"cado/manage/users-authentication/sso",slug:"/cado/manage/users-authentication/sso/okta",permalink:"/cado/manage/users-authentication/sso/okta",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/users-authentication/sso/okta.md",tags:[],version:"current",lastUpdatedAt:1744284627,formattedLastUpdatedAt:"Apr 10, 2025",sidebarPosition:2,frontMatter:{title:"Okta OAuth",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Azure AD",permalink:"/cado/manage/users-authentication/sso/azure-ad"},next:{title:"Okta SAML",permalink:"/cado/manage/users-authentication/sso/okta_saml"}},c={},d=[{value:"Setting up Okta SSO",id:"setting-up-okta-sso",level:3}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"how-to-set-up-the-okta-oauth-integration",children:"How to Set Up the Okta OAuth Integration"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.p,{children:["If you encounter issues, please contact ",(0,s.jsx)(e.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," and provide detailed information about your configuration."]})}),"\n",(0,s.jsxs)(e.p,{children:["You can enable the Okta OAuth Integration beta in the Cado platform by navigating to ",(0,s.jsx)(e.code,{children:"Settings > SSO > Okta OAuth"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"setting-up-okta-sso",children:"Setting up Okta SSO"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Open the Okta admin dashboard and go to ",(0,s.jsx)(e.code,{children:"Applications > Applications"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Create App Integration"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Select:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"OIDC - OpenID Connect"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"Web Application"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Name the Cado OAuth app."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Add a ",(0,s.jsx)(e.strong,{children:"Sign-in Redirect URI"}),". This should be the URL you use to access Cado, followed by ",(0,s.jsx)(e.code,{children:"/login"})," (e.g., ",(0,s.jsx)(e.a,{href:"https://my.cado.instance/login",children:"https://my.cado.instance/login"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Select who will have access to the application:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["In ",(0,s.jsx)(e.strong,{children:"Assignments"}),", choose ",(0,s.jsx)(e.strong,{children:"Limit access to selected groups"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Add a user group. You can assign users later if needed."}),"\n",(0,s.jsxs)(e.li,{children:["In this example, the admin group is named ",(0,s.jsx)(e.code,{children:"CadoAdmin"}),", but you can use any name. Keep note of it for later steps."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Okta Assignments",src:t(66247).A+"",width:"725",height:"242"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["To assign non-admin users within Cado, create a group with a different name (e.g., ",(0,s.jsx)(e.code,{children:"CadoNonAdmin"}),"), and users in that group will be Normal Users in the Cado platform."]})}),"\n",(0,s.jsxs)(e.ol,{start:"8",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["To adjust access control later, go to the ",(0,s.jsx)(e.strong,{children:"Assignments"})," tab of the OAuth application, where you can add individuals or groups. Only users in the ",(0,s.jsx)(e.code,{children:"CadoAdmin"})," group will have admin status in Cado."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Add a ",(0,s.jsx)(e.strong,{children:"Groups Claim"})," for the application:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Go to the ",(0,s.jsx)(e.strong,{children:"Sign On"})," tab of the OAuth application."]}),"\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.strong,{children:"Edit"})," in the ",(0,s.jsx)(e.strong,{children:"OpenID Connect ID Token"})," section."]}),"\n",(0,s.jsxs)(e.li,{children:["In the ",(0,s.jsx)(e.strong,{children:"Issuer"})," field, specify the ",(0,s.jsx)(e.strong,{children:"Okta URL"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["For ",(0,s.jsx)(e.strong,{children:"Groups claim type"}),", select ",(0,s.jsx)(e.strong,{children:"Filter"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Set ",(0,s.jsx)(e.strong,{children:"Groups claim filter"})," to ",(0,s.jsx)(e.strong,{children:"groups"})," and enter ",(0,s.jsx)(e.strong,{children:"Matches regex"})," ",(0,s.jsx)(e.code,{children:".*"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Click ",(0,s.jsx)(e.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Okta Groups Claim",src:t(79862).A+"",width:"696",height:"91"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the ",(0,s.jsx)(e.strong,{children:"General Settings"})," tab of the OAuth application, note down the ",(0,s.jsx)(e.code,{children:"Client ID"}),", ",(0,s.jsx)(e.code,{children:"Client Secret"}),", and ",(0,s.jsx)(e.code,{children:"Okta Domain"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Configure SSO in Cado:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Log in to your Cado instance as an admin."}),"\n",(0,s.jsxs)(e.li,{children:["Go to ",(0,s.jsx)(e.code,{children:"Settings > SSO > Okta OAuth"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Enter the details from the previous step and click ",(0,s.jsx)(e.strong,{children:"Update"}),". For the domain, add ",(0,s.jsx)(e.code,{children:"https://"})," at the beginning and ",(0,s.jsx)(e.code,{children:"/oauth2"})," at the end. The complete domain should look like this: ",(0,s.jsx)(e.code,{children:"https://<Your Okta Domain>/oauth2"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Enter the ",(0,s.jsx)(e.code,{children:"Admin Group Name"})," value from step 7."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Log out and log in using Okta OAuth."}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},66247:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/okta-assignments-3b23b5eb60b1a663656d167431a6126c.png"},79862:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/okta-groups-claim-0a2dfcb9c5c3f572132da5cdcc4ffe63.png"},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);