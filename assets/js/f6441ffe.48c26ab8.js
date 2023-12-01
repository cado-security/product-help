"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8754],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(k,r(r({ref:t},u),{},{components:a})):n.createElement(k,r({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={title:"Okta OAuth",hide_title:!0,sidebar_position:2},r="Okta OAuth Integration",s={unversionedId:"cado-response/manage/users-authentication/sso/okta",id:"cado-response/manage/users-authentication/sso/okta",title:"Okta OAuth",description:"If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/manage/users-authentication/sso/okta.md",sourceDirName:"cado-response/manage/users-authentication/sso",slug:"/cado-response/manage/users-authentication/sso/okta",permalink:"/cado-response/manage/users-authentication/sso/okta",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/users-authentication/sso/okta.md",tags:[],version:"current",lastUpdatedAt:1701461172,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:2,frontMatter:{title:"Okta OAuth",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Azure AD",permalink:"/cado-response/manage/users-authentication/sso/azure-ad"},next:{title:"Okta SAML",permalink:"/cado-response/manage/users-authentication/sso/okta_saml"}},l={},p=[{value:"Setting up Okta SSO",id:"setting-up-okta-sso",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"okta-oauth-integration"},"Okta OAuth Integration"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"If you encounter issues, please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," describing your issue and providing as much detail about your configuration as possible.")),(0,i.kt)("p",null,"You can now enable the beta of Okta OAuth Integration in the Cado platform by going to ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings > SSO > Okta OAuth"),"."),(0,i.kt)("h3",{id:"setting-up-okta-sso"},"Setting up Okta SSO"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the Okta admin dashboard and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Applications > Applications"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create App Integration"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OIDC - OpenID Connect"),(0,i.kt)("li",{parentName:"ul"},"Web Application"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Give the Cado OAuth app a name")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a Sign-in redirect URI. This should be the url you use to access cado in the web browser, with the ",(0,i.kt)("inlineCode",{parentName:"p"},"/login")," path. E.g. ",(0,i.kt)("a",{parentName:"p",href:"https://my.cado.instance/login"},"https://my.cado.instance/login"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose who is granted access to the application"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In Assignments select ",(0,i.kt)("strong",{parentName:"li"},"Limit access to selected groups")),(0,i.kt)("li",{parentName:"ul"},"Add a user group"),(0,i.kt)("li",{parentName:"ul"},"This can also be done at a later stage"),(0,i.kt)("li",{parentName:"ul"},"In this example the admin group will be called ",(0,i.kt)("inlineCode",{parentName:"li"},"CadoAdmin"),", but you can name this as you like. Just make note of what you call this; you'll need it later")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Okta Assignments",src:a(7303).Z,width:"725",height:"242"})))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are looking to assign non-admin users within Cado, you can use a group name other than ",(0,i.kt)("inlineCode",{parentName:"p"},"CadoAdmin"),".  For example: adding a group ",(0,i.kt)("inlineCode",{parentName:"p"},"CadoNonAdmin")," and assigning users to it will result in those users being Normal Users within Cado.")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you wish to edit access control at a later time then you can do so in the ",(0,i.kt)("strong",{parentName:"p"},"Assignments")," tab of the OAuth application where you can add individual people or groups. Only users in a group named ",(0,i.kt)("inlineCode",{parentName:"p"},"CadoAdmin")," will be granted admin user status inside the Cado platform.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a groups claim for the application:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Sign On")," tab of the OAuth application"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Edit")," in the OpenID Connect ID Token section"),(0,i.kt)("li",{parentName:"ul"},"For the Issuer field specify \u201cOkta URL\u201d"),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Groups claim type")," field select ",(0,i.kt)("strong",{parentName:"li"},"Filter")),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Groups claim filter")," leave its name ",(0,i.kt)("strong",{parentName:"li"},"groups")," and enter ",(0,i.kt)("strong",{parentName:"li"},"Matches regex")," ",(0,i.kt)("inlineCode",{parentName:"li"},".*")),(0,i.kt)("li",{parentName:"ul"},"Then click ",(0,i.kt)("strong",{parentName:"li"},"Save"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Okta Groups Claim",src:a(8769).Z,width:"696",height:"91"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"General settings")," tab of the OAuth application and note down the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Client Secret")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Okta Domain")," settings.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure SSO in cado:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open your cado instance and log in as an admin user"),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings > SSO > Okta OAuth")),(0,i.kt)("li",{parentName:"ul"},"Enter the details from step before and click update. For the domain field please add ",(0,i.kt)("inlineCode",{parentName:"li"},"https://")," to the beginning and ",(0,i.kt)("inlineCode",{parentName:"li"},"/oauth2")," to the end of the Okta domain setting. The complete Domain should be of this format: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<Your Okta Domain>/oauth2")),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Admin Group Name")," enter in the value you configured in step 7"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log out with your existing user, and login with Okta OAuth"))))}c.isMDXComponent=!0},7303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-assignments-3b23b5eb60b1a663656d167431a6126c.png"},8769:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/okta-groups-claim-0a2dfcb9c5c3f572132da5cdcc4ffe63.png"}}]);