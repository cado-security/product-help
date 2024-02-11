"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7605],{1525:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=i(5893),s=i(1151);const o={title:"Ping SAML",hide_title:!0,sidebar_position:4},r="Ping SAML Integration",a={id:"cado-response/manage/users-authentication/sso/ping_saml",title:"Ping SAML",description:"If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/manage/users-authentication/sso/ping_saml.md",sourceDirName:"cado-response/manage/users-authentication/sso",slug:"/cado-response/manage/users-authentication/sso/ping_saml",permalink:"/cado-response/manage/users-authentication/sso/ping_saml",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/users-authentication/sso/ping_saml.md",tags:[],version:"current",lastUpdatedAt:1707618697,formattedLastUpdatedAt:"Feb 11, 2024",sidebarPosition:4,frontMatter:{title:"Ping SAML",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Okta SAML",permalink:"/cado-response/manage/users-authentication/sso/okta_saml"},next:{title:"Overview & API",permalink:"/cado-response/manage/integrations/api-overview"}},c={},l=[{value:"Setting up Ping SSO",id:"setting-up-ping-sso",level:3}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"ping-saml-integration",children:"Ping SAML Integration"}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsxs)(e.p,{children:["If you encounter issues, please contact ",(0,t.jsx)(e.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," describing your issue and providing as much detail about your configuration as possible."]})}),"\n",(0,t.jsxs)(e.p,{children:["You can now enable the beta of Ping SAML Integration in the Cado platform by going to ",(0,t.jsx)(e.code,{children:"Settings > SSO > Ping SAML"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"setting-up-ping-sso",children:"Setting up Ping SSO"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Open the Ping admin dashboard and navigate to ",(0,t.jsx)(e.code,{children:"Connections > Applications"})]}),"\n",(0,t.jsxs)(e.li,{children:["Give your application a name and select ",(0,t.jsx)(e.strong,{children:"SAML Application"})," as your application type"]}),"\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.strong,{children:"Configure Application"})]}),"\n",(0,t.jsxs)(e.li,{children:["Then click ",(0,t.jsx)(e.strong,{children:"Manually Enter"})]}),"\n",(0,t.jsxs)(e.li,{children:["Add an ACS URL. This should be the URL you use to access cado in the web browser concatenated with the ",(0,t.jsx)(e.code,{children:"/api/v2/auth/saml/ping"})," path. E.g. ",(0,t.jsx)(e.code,{children:"https://my.cado.instance/api/v2/auth/saml/ping"})]}),"\n",(0,t.jsxs)(e.li,{children:["Add an Entity ID. Typically this is the instance URI of your application. E.g. ",(0,t.jsx)(e.code,{children:"https://my.cado.instance"})]}),"\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.strong,{children:"Save"})]}),"\n",(0,t.jsxs)(e.li,{children:["Optional: Choose who is granted access to the application","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Navigate over to ",(0,t.jsx)(e.code,{children:"Identities > Groups"})]}),"\n",(0,t.jsxs)(e.li,{children:["Add a new group. In this example the group will be called ",(0,t.jsx)(e.code,{children:"CadoAdmin"})]}),"\n",(0,t.jsx)(e.li,{children:"This can also be done at a later stage"}),"\n",(0,t.jsxs)(e.li,{children:["If you name a group ",(0,t.jsx)(e.code,{children:"CadoAdmin"}),", then any users in that group will become admin users of Cado when logging in"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["If you are looking to assign non-admin users within Cado, you can use a group name other than ",(0,t.jsx)(e.code,{children:"CadoAdmin"}),".  For example: adding a group ",(0,t.jsx)(e.code,{children:"CadoNonAdmin"})," and assigning users to it will result in those users being Normal Users within Cado."]})}),"\n",(0,t.jsxs)(e.ol,{start:"9",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Navigate back over to the application you created earlier and click ",(0,t.jsx)(e.strong,{children:"Attribute Mappings"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Add an email attribute to the application:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["In the ",(0,t.jsx)(e.code,{children:"Attributes"})," field enter ",(0,t.jsx)(e.code,{children:"emailAttrStatement"})]}),"\n",(0,t.jsxs)(e.li,{children:["In the ",(0,t.jsx)(e.code,{children:"PingOne Mappings"})," field select ",(0,t.jsx)(e.strong,{children:"Email Address"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Add a Group attribute to the application:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["In the ",(0,t.jsx)(e.code,{children:"Attributes"})," field enter ",(0,t.jsx)(e.code,{children:"groupAttrStatement"})]}),"\n",(0,t.jsxs)(e.li,{children:["In the ",(0,t.jsx)(e.code,{children:"PingOne Mappings"})," field select ",(0,t.jsx)(e.strong,{children:"Group Names"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Ping Attribute Statement",src:i(9636).Z+"",width:"935",height:"279"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Save"})," after configuring the attributes"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Configure SSO in cado:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Open your cado instance and log in as an admin user"}),"\n",(0,t.jsxs)(e.li,{children:["Go to ",(0,t.jsx)(e.code,{children:"Settings > SSO > Ping SAML"})]}),"\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.strong,{children:"Enabled"})]}),"\n",(0,t.jsxs)(e.li,{children:["Populate the fields with the following:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Enter the ",(0,t.jsx)(e.code,{children:"Issuer ID"})," value from the Ping application ",(0,t.jsx)(e.strong,{children:"Configuration"})," tab into the ",(0,t.jsx)(e.code,{children:"Ping SAML App IdP entity ID"})," field"]}),"\n",(0,t.jsxs)(e.li,{children:["Enter the ",(0,t.jsx)(e.code,{children:"Single Signon Service"})," value from the Ping application ",(0,t.jsx)(e.strong,{children:"Configuration"})," tab into the ",(0,t.jsx)(e.code,{children:"Ping SAML App IdP entity ID"})," field"]}),"\n",(0,t.jsxs)(e.li,{children:["Download the signing certificate and enter the value (text inbetween ",(0,t.jsx)(e.code,{children:"-----BEGIN CERTIFICATE-----"})," and ",(0,t.jsx)(e.code,{children:"-----END CERTIFICATE-----"}),") into the ",(0,t.jsx)(e.code,{children:"Ping SAML App x509 Cert"})," field"]}),"\n",(0,t.jsxs)(e.li,{children:["Enter the exact URL you provided in step 6 into the ",(0,t.jsx)(e.code,{children:"Ping SAML App SP entity ID"})," field"]}),"\n",(0,t.jsxs)(e.li,{children:["Enter the exact URL you provided in step 5 into the ",(0,t.jsx)(e.code,{children:"Ping SAML App SP ACS URL"})," field"]}),"\n",(0,t.jsxs)(e.li,{children:["Enter the exact name of your admin group you configured in step 8 into the ",(0,t.jsx)(e.code,{children:"Admin Group Name"})," field"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Optional: You can confirm if this was configured correctly by clicking ",(0,t.jsx)(e.strong,{children:"Test new settings"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Update"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Log out with your existing user, and login with Ping SAML"}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},9636:(n,e,i)=>{i.d(e,{Z:()=>t});const t=i.p+"assets/images/ping-attribute-statement-62c7ddc0f711cb0904db75b7c9e94f75.png"},1151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);