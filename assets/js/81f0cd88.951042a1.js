"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9793],{17728:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(74848),s=i(28453);const o={title:"Ping SAML",hide_title:!0,sidebar_position:4},r="How to Set Up the Ping SAML Integration",c={id:"cado/manage/users-authentication/sso/ping_saml",title:"Ping SAML",description:"If you encounter issues, please contact support@cadosecurity.com with detailed information about your configuration.",source:"@site/docs/cado/manage/users-authentication/sso/ping_saml.md",sourceDirName:"cado/manage/users-authentication/sso",slug:"/cado/manage/users-authentication/sso/ping_saml",permalink:"/cado/manage/users-authentication/sso/ping_saml",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/users-authentication/sso/ping_saml.md",tags:[],version:"current",lastUpdatedAt:1738502359,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:4,frontMatter:{title:"Ping SAML",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Okta SAML",permalink:"/cado/manage/users-authentication/sso/okta_saml"},next:{title:"Worker management",permalink:"/cado/manage/workers"}},d={},l=[{value:"Setting up Ping SSO",id:"setting-up-ping-sso",level:3}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"how-to-set-up-the-ping-saml-integration",children:"How to Set Up the Ping SAML Integration"}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsxs)(e.p,{children:["If you encounter issues, please contact ",(0,t.jsx)(e.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," with detailed information about your configuration."]})}),"\n",(0,t.jsxs)(e.p,{children:["You can enable the Ping SAML Integration beta in the Cado platform by going to ",(0,t.jsx)(e.code,{children:"Settings > SSO > Ping SAML"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"setting-up-ping-sso",children:"Setting up Ping SSO"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Open the Ping admin dashboard and navigate to ",(0,t.jsx)(e.code,{children:"Connections > Applications"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Name your application and select ",(0,t.jsx)(e.strong,{children:"SAML Application"})," as the application type."]}),"\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.strong,{children:"Configure Application"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Then click ",(0,t.jsx)(e.strong,{children:"Manually Enter"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Add an ACS URL, which is the URL you use to access Cado in the browser, followed by ",(0,t.jsx)(e.code,{children:"/api/v2/auth/saml/ping"}),". For example: ",(0,t.jsx)(e.code,{children:"https://my.cado.instance/api/v2/auth/saml/ping"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Add an Entity ID, typically the instance URL of your application (e.g., ",(0,t.jsx)(e.code,{children:"https://my.cado.instance"}),")."]}),"\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.strong,{children:"Save"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["(Optional) Choose who has access to the application:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Go to ",(0,t.jsx)(e.code,{children:"Identities > Groups"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Add a new group (e.g., ",(0,t.jsx)(e.code,{children:"CadoAdmin"}),")."]}),"\n",(0,t.jsxs)(e.li,{children:["If you name a group ",(0,t.jsx)(e.code,{children:"CadoAdmin"}),", users in that group will be granted admin access in Cado."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["For non-admin users, create a group with a different name (e.g., ",(0,t.jsx)(e.code,{children:"CadoNonAdmin"}),"). Users in this group will have Normal User access in Cado."]})}),"\n",(0,t.jsxs)(e.ol,{start:"9",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Go back to the application you created and click ",(0,t.jsx)(e.strong,{children:"Attribute Mappings"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Add an email attribute:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["In the ",(0,t.jsx)(e.code,{children:"Attributes"})," field, enter ",(0,t.jsx)(e.code,{children:"emailAttrStatement"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["In the ",(0,t.jsx)(e.code,{children:"PingOne Mappings"})," field, select ",(0,t.jsx)(e.strong,{children:"Email Address"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Add a Group attribute:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["In the ",(0,t.jsx)(e.code,{children:"Attributes"})," field, enter ",(0,t.jsx)(e.code,{children:"groupAttrStatement"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["In the ",(0,t.jsx)(e.code,{children:"PingOne Mappings"})," field, select ",(0,t.jsx)(e.strong,{children:"Group Names"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Ping Attribute Statement",src:i(68374).A+"",width:"935",height:"279"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Save"})," after configuring the attributes."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Configure SSO in Cado:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Log in to your Cado instance as an admin."}),"\n",(0,t.jsxs)(e.li,{children:["Go to ",(0,t.jsx)(e.code,{children:"Settings > SSO > Ping SAML"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.strong,{children:"Enabled"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Fill in the fields as follows:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Enter the ",(0,t.jsx)(e.code,{children:"Issuer ID"})," from the Ping application ",(0,t.jsx)(e.strong,{children:"Configuration"})," tab into the ",(0,t.jsx)(e.code,{children:"Ping SAML App IdP entity ID"})," field."]}),"\n",(0,t.jsxs)(e.li,{children:["Enter the ",(0,t.jsx)(e.code,{children:"Single Signon Service"})," value from the ",(0,t.jsx)(e.strong,{children:"Configuration"})," tab into the ",(0,t.jsx)(e.code,{children:"Ping SAML App IdP SSO URL"})," field."]}),"\n",(0,t.jsxs)(e.li,{children:["Download the signing certificate and enter the text between ",(0,t.jsx)(e.code,{children:"-----BEGIN CERTIFICATE-----"})," and ",(0,t.jsx)(e.code,{children:"-----END CERTIFICATE-----"})," into the ",(0,t.jsx)(e.code,{children:"Ping SAML App x509 Cert"})," field."]}),"\n",(0,t.jsxs)(e.li,{children:["Enter the exact URL you provided in step 6 into the ",(0,t.jsx)(e.code,{children:"Ping SAML App SP entity ID"})," field."]}),"\n",(0,t.jsxs)(e.li,{children:["Enter the exact URL from step 5 into the ",(0,t.jsx)(e.code,{children:"Ping SAML App SP ACS URL"})," field."]}),"\n",(0,t.jsxs)(e.li,{children:["Enter the admin group name from step 8 into the ",(0,t.jsx)(e.code,{children:"Admin Group Name"})," field."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["(Optional) Test the configuration by clicking ",(0,t.jsx)(e.strong,{children:"Test new settings"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Update"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Log out and log back in using Ping SAML."}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},68374:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/ping-attribute-statement-62c7ddc0f711cb0904db75b7c9e94f75.png"},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var t=i(96540);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);