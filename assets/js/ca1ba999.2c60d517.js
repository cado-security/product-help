"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6915],{2194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(5893),i=t(1151);const o={title:"Okta SAML",hide_title:!0,sidebar_position:3},a="How to set-up the Okta SAML Integration",r={id:"cado-response/manage/users-authentication/sso/okta_saml",title:"Okta SAML",description:"If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/manage/users-authentication/sso/okta_saml.md",sourceDirName:"cado-response/manage/users-authentication/sso",slug:"/cado-response/manage/users-authentication/sso/okta_saml",permalink:"/cado-response/manage/users-authentication/sso/okta_saml",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/users-authentication/sso/okta_saml.md",tags:[],version:"current",lastUpdatedAt:1728549726,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:3,frontMatter:{title:"Okta SAML",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Okta OAuth",permalink:"/cado-response/manage/users-authentication/sso/okta"},next:{title:"Ping SAML",permalink:"/cado-response/manage/users-authentication/sso/ping_saml"}},d={},c=[{value:"Setting up Okta SSO",id:"setting-up-okta-sso",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-set-up-the-okta-saml-integration",children:"How to set-up the Okta SAML Integration"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["If you encounter issues, please contact ",(0,s.jsx)(n.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," describing your issue and providing as much detail about your configuration as possible."]})}),"\n",(0,s.jsxs)(n.p,{children:["You can now enable the beta of Okta SAML Integration in the Cado platform by going to ",(0,s.jsx)(n.code,{children:"Settings > SSO > Okta SAML"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"setting-up-okta-sso",children:"Setting up Okta SSO"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the Okta admin dashboard and navigate to ",(0,s.jsx)(n.code,{children:"Applications > Applications"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Create App Integration"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SAML 2.0"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Next"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Give the Cado SAML app a name"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add a single sign on URL. This should be the URL you use to access cado in the web browser concatenated with the ",(0,s.jsx)(n.code,{children:"/api/v2/auth/saml/okta"})," path. E.g. ",(0,s.jsx)(n.a,{href:"https://my.cado.instance/api/v2/auth/saml/okta",children:"https://my.cado.instance/api/v2/auth/saml/okta"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add an audience URI (SP Entity ID). Typically this is the instance URI of your application. E.g. ",(0,s.jsx)(n.a,{href:"https://my.cado.instance",children:"https://my.cado.instance"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add an Attribute Statement to the application:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.code,{children:"Name"})," field enter ",(0,s.jsx)(n.code,{children:"emailAttrStatement"})]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.code,{children:"Name format"})," field select ",(0,s.jsx)(n.strong,{children:"Unspecified"})]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.code,{children:"Value"})," field select ",(0,s.jsx)(n.strong,{children:"user.email"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Okta Attribute Statement",src:t(6070).Z+"",width:"857",height:"196"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add a Group Attribute Statement to the application:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.code,{children:"Name"})," field enter ",(0,s.jsx)(n.code,{children:"groupAttrStatement"})]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.code,{children:"Name format"})," field select ",(0,s.jsx)(n.strong,{children:"Unspecified"})]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.code,{children:"Filter"})," set the drop down to ",(0,s.jsx)(n.strong,{children:"Equals"})," and set the field to the name of your admin group. In this example the admin group will be called ",(0,s.jsx)(n.code,{children:"CadoAdmin"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Okta Group Attribute Statement",src:t(6922).Z+"",width:"821",height:"194"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Next"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Complete the Okta feedback and click ",(0,s.jsx)(n.strong,{children:"Finish"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Optional: Choose who is granted access to the application"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to the  ",(0,s.jsx)(n.strong,{children:"Assignments"})," tab of the SAML application and select ",(0,s.jsx)(n.strong,{children:"Limit access to selected groups"})]}),"\n",(0,s.jsx)(n.li,{children:"Add a user group"}),"\n",(0,s.jsx)(n.li,{children:"This can also be done at a later stage"}),"\n",(0,s.jsxs)(n.li,{children:["If you name a group ",(0,s.jsx)(n.code,{children:"CadoAdmin"}),", then any users in that group will become admin users of Cado when logging in"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Okta Assignments",src:t(7303).Z+"",width:"725",height:"242"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you are looking to assign non-admin users within Cado, you can use a group name other than ",(0,s.jsx)(n.code,{children:"CadoAdmin"}),".  For example: adding a group ",(0,s.jsx)(n.code,{children:"CadoNonAdmin"})," and assigning users to it will result in those users being Normal Users within the Cado platform."]})}),"\n",(0,s.jsxs)(n.ol,{start:"13",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.strong,{children:"Sign On"})," tab of the SAML application, navigate down to ",(0,s.jsx)(n.strong,{children:"SAML Setup"})," and click ",(0,s.jsx)(n.strong,{children:"View SAML setup instructions"}),". Keep this page to hand; you'll need it shortly"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.code,{children:"Customizations > Other > IFrame Embedding"}),", make sure that this setting is enabled. We use this to refresh access to the platform"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Okta IFrame Embedding",src:t(6955).Z+"",width:"623",height:"264"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure SSO in cado:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open your cado instance and log in as an admin user"}),"\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.code,{children:"Settings > SSO > Okta SAML"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Enabled"})]}),"\n",(0,s.jsxs)(n.li,{children:["Populate the fields with the following:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Enter the ",(0,s.jsx)(n.code,{children:"Identity Provider Issuer"})," value from the SAML setup instructions into the ",(0,s.jsx)(n.code,{children:"Okta SAML App IdP entity ID"})," field"]}),"\n",(0,s.jsxs)(n.li,{children:["Enter the ",(0,s.jsx)(n.code,{children:"Identity Provider Single Sign-On URL"})," value from the SAML setup instructions into the ",(0,s.jsx)(n.code,{children:"Okta SAML App IdP SSO URL"})," field"]}),"\n",(0,s.jsxs)(n.li,{children:["Enter the ",(0,s.jsx)(n.code,{children:"X.509 Certificate"})," value (text between ",(0,s.jsx)(n.code,{children:"-----BEGIN CERTIFICATE-----"})," and ",(0,s.jsx)(n.code,{children:"-----END CERTIFICATE-----"}),") from the SAML setup instructions into the ",(0,s.jsx)(n.code,{children:"Okta SAML App x509 Cert"})," field"]}),"\n",(0,s.jsxs)(n.li,{children:["Enter the exact URL you provided in step 7 into the ",(0,s.jsx)(n.code,{children:"Okta SAML App SP entity ID"})," field"]}),"\n",(0,s.jsxs)(n.li,{children:["Enter the exact URL you provided in step 6 into the ",(0,s.jsx)(n.code,{children:"Okta SAML App SP ACS URL"})," field"]}),"\n",(0,s.jsxs)(n.li,{children:["Enter the exact name of your admin group you configured in step 9 into the ",(0,s.jsx)(n.code,{children:"Admin Group Name"})," field"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Optional: You can confirm if this was configured correctly by clicking ",(0,s.jsx)(n.strong,{children:"Test new settings"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Update"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Log out with your existing user, and login with Okta SAML"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7303:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/okta-assignments-3b23b5eb60b1a663656d167431a6126c.png"},6070:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/okta-attribute-statement-b94778a6027d51a31bffd5111af2dfa3.png"},6922:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/okta-group-attribute-statement-90ee5bcdc3598a382d66cc49f725c8bf.png"},6955:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/okta-iframe-embedding-c8e51df1d9547460ddc880d65b3fef53.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(7294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);