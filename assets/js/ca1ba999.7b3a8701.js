"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6915],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=i,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={title:"Okta SAML",hide_title:!0,sidebar_position:3},o="Okta SAML Integration",l={unversionedId:"cado-response/manage/users-authentication/sso/okta_saml",id:"cado-response/manage/users-authentication/sso/okta_saml",title:"Okta SAML",description:"If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/manage/users-authentication/sso/okta_saml.md",sourceDirName:"cado-response/manage/users-authentication/sso",slug:"/cado-response/manage/users-authentication/sso/okta_saml",permalink:"/cado-response/manage/users-authentication/sso/okta_saml",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/users-authentication/sso/okta_saml.md",tags:[],version:"current",lastUpdatedAt:1684492820,formattedLastUpdatedAt:"May 19, 2023",sidebarPosition:3,frontMatter:{title:"Okta SAML",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Okta OAuth",permalink:"/cado-response/manage/users-authentication/sso/okta"},next:{title:"Ping SAML",permalink:"/cado-response/manage/users-authentication/sso/ping_saml"}},p={},s=[{value:"Setting up Okta SSO",id:"setting-up-okta-sso",level:3}],m={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"okta-saml-integration"},"Okta SAML Integration"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"If you encounter issues, please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," describing your issue and providing as much detail about your configuration as possible.")),(0,i.kt)("p",null,"You can now enable the beta of Okta SAML Integration in the Cado platform by going to ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings > SSO > Okta SAML"),"."),(0,i.kt)("h3",{id:"setting-up-okta-sso"},"Setting up Okta SSO"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the Okta admin dashboard and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Applications > Applications"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create App Integration"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SAML 2.0"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Give the Cado SAML app a name")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a single sign on URL. This should be the URL you use to access cado in the web browser concatenated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v2/auth/saml/okta")," path. E.g. ",(0,i.kt)("a",{parentName:"p",href:"https://my.cado.instance/api/v2/auth/saml/okta"},"https://my.cado.instance/api/v2/auth/saml/okta"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add an audience URI (SP Entity ID). Typically this is the instance URI of your application. E.g. ",(0,i.kt)("a",{parentName:"p",href:"https://my.cado.instance"},"https://my.cado.instance"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add an Attribute Statement to the application:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Name")," field enter ",(0,i.kt)("inlineCode",{parentName:"li"},"emailAttrStatement")),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Name format")," field select ",(0,i.kt)("strong",{parentName:"li"},"Unspecified")),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Value")," field select ",(0,i.kt)("strong",{parentName:"li"},"user.email"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Okta Attribute Statement",src:a(6070).Z,width:"857",height:"196"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a Group Attribute Statement to the application:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Name")," field enter ",(0,i.kt)("inlineCode",{parentName:"li"},"groupAttrStatement")),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Name format")," field select ",(0,i.kt)("strong",{parentName:"li"},"Unspecified")),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Filter")," set the drop down to ",(0,i.kt)("strong",{parentName:"li"},"Equals")," and set the field to the name of your admin group. In this example the admin group will be called ",(0,i.kt)("inlineCode",{parentName:"li"},"CadoAdmin"),".")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Okta Group Attribute Statement",src:a(6922).Z,width:"821",height:"194"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the Okta feedback and click ",(0,i.kt)("strong",{parentName:"p"},"Finish"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Optional: Choose who is granted access to the application"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to the  ",(0,i.kt)("strong",{parentName:"li"},"Assignments")," tab of the SAML application and select ",(0,i.kt)("strong",{parentName:"li"},"Limit access to selected groups")),(0,i.kt)("li",{parentName:"ul"},"Add a user group"),(0,i.kt)("li",{parentName:"ul"},"This can also be done at a later stage"),(0,i.kt)("li",{parentName:"ul"},"If you name a group ",(0,i.kt)("inlineCode",{parentName:"li"},"CadoAdmin"),", then any users in that group will become admin users of Cado when logging in")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Okta Assignments",src:a(7303).Z,width:"725",height:"242"})))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are looking to assign non-admin users within Cado, you can use a group name other than ",(0,i.kt)("inlineCode",{parentName:"p"},"CadoAdmin"),".  For example: adding a group ",(0,i.kt)("inlineCode",{parentName:"p"},"CadoNonAdmin")," and assigning users to it will result in those users being Normal Users within the Cado platform.")),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"Sign On")," tab of the SAML application, navigate down to ",(0,i.kt)("strong",{parentName:"p"},"SAML Setup")," and click ",(0,i.kt)("strong",{parentName:"p"},"View SAML setup instructions"),". Keep this page to hand; you'll need it shortly")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Customizations > Other > IFrame Embedding"),", make sure that this setting is enabled. We use this to refresh access to the platform"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Okta IFrame Embedding",src:a(6955).Z,width:"623",height:"264"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure SSO in cado:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open your cado instance and log in as an admin user"),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings > SSO > Okta SAML")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Enabled")),(0,i.kt)("li",{parentName:"ul"},"Populate the fields with the following:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enter the ",(0,i.kt)("inlineCode",{parentName:"li"},"Identity Provider Issuer")," value from the SAML setup instructions into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Okta SAML App IdP entity ID")," field"),(0,i.kt)("li",{parentName:"ul"},"Enter the ",(0,i.kt)("inlineCode",{parentName:"li"},"Identity Provider Single Sign-On URL")," value from the SAML setup instructions into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Okta SAML App IdP SSO URL")," field"),(0,i.kt)("li",{parentName:"ul"},"Enter the ",(0,i.kt)("inlineCode",{parentName:"li"},"X.509 Certificate")," value (text inbetween ",(0,i.kt)("inlineCode",{parentName:"li"},"-----BEGIN CERTIFICATE-----")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"-----END CERTIFICATE-----"),") from the SAML setup instructions into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Okta SAML App x509 Cert")," field"),(0,i.kt)("li",{parentName:"ul"},"Enter the exact URL you provided in step 7 into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Okta SAML App SP entity ID")," field"),(0,i.kt)("li",{parentName:"ul"},"Enter the exact URL you provided in step 6 into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Okta SAML App SP ACS URL")," field"),(0,i.kt)("li",{parentName:"ul"},"Enter the exact name of your admin group you configured in step 9 into the ",(0,i.kt)("inlineCode",{parentName:"li"},"Admin Group Name")," field"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Optional: You can confirm if this was configured correctly by clicking ",(0,i.kt)("strong",{parentName:"p"},"Test new settings"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Update"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log out with your existing user, and login with Okta SAML"))))}d.isMDXComponent=!0},7303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-assignments-3b23b5eb60b1a663656d167431a6126c.png"},6070:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-attribute-statement-b94778a6027d51a31bffd5111af2dfa3.png"},6922:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-group-attribute-statement-90ee5bcdc3598a382d66cc49f725c8bf.png"},6955:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-iframe-embedding-c8e51df1d9547460ddc880d65b3fef53.png"}}]);