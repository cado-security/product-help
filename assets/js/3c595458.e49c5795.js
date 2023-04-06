"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={title:"Ping SAML",hide_title:!0,sidebar_position:4},o="Ping SAML Integration",l={unversionedId:"cado-response/manage/users-authentication/sso/ping_saml",id:"cado-response/manage/users-authentication/sso/ping_saml",title:"Ping SAML",description:"Ping SAML integration is currently in beta.  If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/manage/users-authentication/sso/ping_saml.md",sourceDirName:"cado-response/manage/users-authentication/sso",slug:"/cado-response/manage/users-authentication/sso/ping_saml",permalink:"/cado-response/manage/users-authentication/sso/ping_saml",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/users-authentication/sso/ping_saml.md",tags:[],version:"current",lastUpdatedAt:1680788216,formattedLastUpdatedAt:"Apr 6, 2023",sidebarPosition:4,frontMatter:{title:"Ping SAML",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Okta SAML",permalink:"/cado-response/manage/users-authentication/sso/okta_saml"},next:{title:"Overview & API",permalink:"/cado-response/manage/integrations/api-overview"}},p={},s=[{value:"Setting up Ping SSO",id:"setting-up-ping-sso",level:3}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ping-saml-integration"},"Ping SAML Integration"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Ping SAML integration is currently in beta.  If you encounter issues, please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," describing your issue and providing as much detail about your configuration as possible.")),(0,i.kt)("p",null,"You can now enable the beta of Ping SAML Integration in the Cado platform by going to ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings > SSO > Ping SAML"),"."),(0,i.kt)("h3",{id:"setting-up-ping-sso"},"Setting up Ping SSO"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the Ping admin dashboard and navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"Connections > Applications")),(0,i.kt)("li",{parentName:"ol"},"Give your application a name and select ",(0,i.kt)("strong",{parentName:"li"},"SAML Application")," as your application type"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Configure Application")),(0,i.kt)("li",{parentName:"ol"},"Then click ",(0,i.kt)("strong",{parentName:"li"},"Manually Enter")),(0,i.kt)("li",{parentName:"ol"},"Add an ACS URL. This should be the URL you use to access cado in the web browser concatenated with the ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/v2/auth/saml/ping")," path. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://my.cado.instance/api/v2/auth/saml/ping")),(0,i.kt)("li",{parentName:"ol"},"Add an Entity ID. Typically this is the instance URI of your application. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://my.cado.instance")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save")),(0,i.kt)("li",{parentName:"ol"},"Optional: Choose who is granted access to the application",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Navigate over to ",(0,i.kt)("inlineCode",{parentName:"li"},"Identities > Groups")),(0,i.kt)("li",{parentName:"ul"},"Add a new group. In this example the group will be called ",(0,i.kt)("inlineCode",{parentName:"li"},"CadoAdmin")),(0,i.kt)("li",{parentName:"ul"},"This can also be done at a later stage"),(0,i.kt)("li",{parentName:"ul"},"If you name a group ",(0,i.kt)("inlineCode",{parentName:"li"},"CadoAdmin"),", then any users in that group will become admin users of Cado when logging in")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are looking to assign non-admin users within Cado, you can use a group name other than ",(0,i.kt)("inlineCode",{parentName:"p"},"CadoAdmin"),".  For example: adding a group ",(0,i.kt)("inlineCode",{parentName:"p"},"CadoNonAdmin")," and assigning users to it will result in those users being Normal Users within Cado.")),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate back over to the application you created earlier and click ",(0,i.kt)("strong",{parentName:"p"},"Attribute Mappings"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add an email attribute to the application:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Attributes")," field enter ",(0,i.kt)("inlineCode",{parentName:"li"},"emailAttrStatement")),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"PingOne Mappings")," field select ",(0,i.kt)("strong",{parentName:"li"},"Email Address")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a Group attribute to the application:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Attributes")," field enter ",(0,i.kt)("inlineCode",{parentName:"li"},"groupAttrStatement")),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"PingOne Mappings")," field select ",(0,i.kt)("strong",{parentName:"li"},"Group Names"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Ping Attribute Statement",src:n(9636).Z,width:"935",height:"279"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save")," after configuring the attributes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure SSO in cado:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open your cado instance and log in as an admin user"),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings > SSO > Ping SAML")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Enabled")),(0,i.kt)("li",{parentName:"ul"},"Populate the fields with the following:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enter the ",(0,i.kt)("inlineCode",{parentName:"li"},"Issuer ID")," value from the Ping application ",(0,i.kt)("strong",{parentName:"li"},"Configuration")," tab into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ping SAML App IdP entity ID")," field"),(0,i.kt)("li",{parentName:"ul"},"Enter the ",(0,i.kt)("inlineCode",{parentName:"li"},"Single Signon Service")," value from the Ping application ",(0,i.kt)("strong",{parentName:"li"},"Configuration")," tab into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ping SAML App IdP entity ID")," field"),(0,i.kt)("li",{parentName:"ul"},"Download the signing certificate and enter the value (text inbetween ",(0,i.kt)("inlineCode",{parentName:"li"},"-----BEGIN CERTIFICATE-----")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"-----END CERTIFICATE-----"),") into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ping SAML App x509 Cert")," field"),(0,i.kt)("li",{parentName:"ul"},"Enter the exact URL you provided in step 6 into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ping SAML App SP entity ID")," field"),(0,i.kt)("li",{parentName:"ul"},"Enter the exact URL you provided in step 5 into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ping SAML App SP ACS URL")," field"),(0,i.kt)("li",{parentName:"ul"},"Enter the exact name of your admin group you configured in step 8 into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Admin Group Name")," field"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Optional: You can confirm if this was configured correctly by clicking ",(0,i.kt)("strong",{parentName:"p"},"Test new settings"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Update"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log out with your existing user, and login with Ping SAML"))))}m.isMDXComponent=!0},9636:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ping-attribute-statement-62c7ddc0f711cb0904db75b7c9e94f75.png"}}]);