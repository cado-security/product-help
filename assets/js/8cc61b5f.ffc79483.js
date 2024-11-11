"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5625],{3543:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(5893),i=t(1151);const r={title:"Okta SAML",hide_title:!0,sidebar_position:3},a="How to Set Up the Okta SAML Integration",o={id:"cado/manage/users-authentication/sso/okta_saml",title:"Okta SAML",description:"If you encounter issues, please contact support@cadosecurity.com with a detailed description of your configuration.",source:"@site/docs/cado/manage/users-authentication/sso/okta_saml.md",sourceDirName:"cado/manage/users-authentication/sso",slug:"/cado/manage/users-authentication/sso/okta_saml",permalink:"/cado/manage/users-authentication/sso/okta_saml",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/users-authentication/sso/okta_saml.md",tags:[],version:"current",lastUpdatedAt:1731344277,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:3,frontMatter:{title:"Okta SAML",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Okta OAuth",permalink:"/cado/manage/users-authentication/sso/okta"},next:{title:"Ping SAML",permalink:"/cado/manage/users-authentication/sso/ping_saml"}},d={},c=[{value:"Setting up Okta SSO",id:"setting-up-okta-sso",level:3}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"how-to-set-up-the-okta-saml-integration",children:"How to Set Up the Okta SAML Integration"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.p,{children:["If you encounter issues, please contact ",(0,s.jsx)(e.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," with a detailed description of your configuration."]})}),"\n",(0,s.jsxs)(e.p,{children:["You can enable the Okta SAML Integration beta in the Cado platform by navigating to ",(0,s.jsx)(e.code,{children:"Settings > SSO > Okta SAML"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"setting-up-okta-sso",children:"Setting up Okta SSO"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Open the Okta admin dashboard and go to ",(0,s.jsx)(e.code,{children:"Applications > Applications"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Create App Integration"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Select ",(0,s.jsx)(e.strong,{children:"SAML 2.0"})," and click ",(0,s.jsx)(e.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Name the Cado SAML app."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Add a Single Sign-On URL. This should be the URL you use to access Cado in the browser, appended with ",(0,s.jsx)(e.code,{children:"/api/v2/auth/saml/okta"})," (e.g., ",(0,s.jsx)(e.a,{href:"https://my.cado.instance/api/v2/auth/saml/okta",children:"https://my.cado.instance/api/v2/auth/saml/okta"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Add an Audience URI (SP Entity ID), typically the instance URL (e.g., ",(0,s.jsx)(e.a,{href:"https://my.cado.instance",children:"https://my.cado.instance"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Add an Attribute Statement:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Name"}),": ",(0,s.jsx)(e.code,{children:"emailAttrStatement"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Name format"}),": ",(0,s.jsx)(e.strong,{children:"Unspecified"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Value"}),": ",(0,s.jsx)(e.strong,{children:"user.email"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Okta Attribute Statement",src:t(6070).Z+"",width:"857",height:"196"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Add a Group Attribute Statement:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Name"}),": ",(0,s.jsx)(e.code,{children:"groupAttrStatement"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Name format"}),": ",(0,s.jsx)(e.strong,{children:"Unspecified"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Filter"}),": Set to ",(0,s.jsx)(e.strong,{children:"Equals"})," and enter the name of your admin group (e.g., ",(0,s.jsx)(e.code,{children:"CadoAdmin"}),")."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Okta Group Attribute Statement",src:t(6922).Z+"",width:"821",height:"194"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Next"}),", complete the feedback, and click ",(0,s.jsx)(e.strong,{children:"Finish"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"(Optional) Assign users to the app:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Go to the ",(0,s.jsx)(e.strong,{children:"Assignments"})," tab, select ",(0,s.jsx)(e.strong,{children:"Limit access to selected groups"}),", and add a user group."]}),"\n",(0,s.jsxs)(e.li,{children:["If you create a group named ",(0,s.jsx)(e.code,{children:"CadoAdmin"}),", users in that group will become Cado admin users."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Okta Assignments",src:t(7303).Z+"",width:"725",height:"242"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["You can assign non-admin users by creating a group with a different name (e.g., ",(0,s.jsx)(e.code,{children:"CadoNonAdmin"}),"), and users in that group will be assigned as Normal Users in Cado."]})}),"\n",(0,s.jsxs)(e.ol,{start:"11",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In the ",(0,s.jsx)(e.strong,{children:"Sign On"})," tab, under ",(0,s.jsx)(e.strong,{children:"SAML Setup"}),", click ",(0,s.jsx)(e.strong,{children:"View SAML setup instructions"})," and keep the page open for reference."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Go to ",(0,s.jsx)(e.code,{children:"Customizations > Other > IFrame Embedding"})," and ensure this setting is enabled to allow access refresh."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Okta IFrame Embedding",src:t(6955).Z+"",width:"623",height:"264"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Configure SSO in Cado:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Log in to your Cado instance as an admin."}),"\n",(0,s.jsxs)(e.li,{children:["Navigate to ",(0,s.jsx)(e.code,{children:"Settings > SSO > Okta SAML"})," and click ",(0,s.jsx)(e.strong,{children:"Enabled"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Populate the fields using the information from the SAML setup instructions:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Okta SAML App IdP entity ID"}),": Enter the ",(0,s.jsx)(e.code,{children:"Identity Provider Issuer"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Okta SAML App IdP SSO URL"}),": Enter the ",(0,s.jsx)(e.code,{children:"Identity Provider Single Sign-On URL"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Okta SAML App x509 Cert"}),": Enter the ",(0,s.jsx)(e.code,{children:"X.509 Certificate"})," (text between ",(0,s.jsx)(e.code,{children:"-----BEGIN CERTIFICATE-----"})," and ",(0,s.jsx)(e.code,{children:"-----END CERTIFICATE-----"}),")."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Okta SAML App SP entity ID"}),": Enter the URL from step 6."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Okta SAML App SP ACS URL"}),": Enter the URL from step 5."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Admin Group Name"}),": Enter the admin group name from step 8."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["(Optional) Click ",(0,s.jsx)(e.strong,{children:"Test new settings"})," to verify the configuration."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Click ",(0,s.jsx)(e.strong,{children:"Update"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Log out and log back in using Okta SAML."}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},7303:(n,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/okta-assignments-3b23b5eb60b1a663656d167431a6126c.png"},6070:(n,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/okta-attribute-statement-b94778a6027d51a31bffd5111af2dfa3.png"},6922:(n,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/okta-group-attribute-statement-90ee5bcdc3598a382d66cc49f725c8bf.png"},6955:(n,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/okta-iframe-embedding-c8e51df1d9547460ddc880d65b3fef53.png"},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);