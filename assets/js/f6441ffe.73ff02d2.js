"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8754],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8132:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=["components"],s={title:"Okta OAuth",hide_title:!0,sidebar_position:2},p="Okta OAuth Integration",l={unversionedId:"cado-response/manage/users-authentication/sso/okta",id:"cado-response/manage/users-authentication/sso/okta",title:"Okta OAuth",description:"Okta OAuth integration is currently in beta.  If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/manage/users-authentication/sso/okta.md",sourceDirName:"cado-response/manage/users-authentication/sso",slug:"/cado-response/manage/users-authentication/sso/okta",permalink:"/cado-response/manage/users-authentication/sso/okta",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/users-authentication/sso/okta.md",tags:[],version:"current",lastUpdatedAt:1662134394,formattedLastUpdatedAt:"Sep 2, 2022",sidebarPosition:2,frontMatter:{title:"Okta OAuth",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Azure AD",permalink:"/cado-response/manage/users-authentication/sso/azure-ad"},next:{title:"Okta SAML",permalink:"/cado-response/manage/users-authentication/sso/okta_saml"}},u={},c=[{value:"Setting up Okta SSO",id:"setting-up-okta-sso",level:3}],m={toc:c};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"okta-oauth-integration"},"Okta OAuth Integration"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Okta OAuth integration is currently in beta.  If you encounter issues, please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," describing your issue and providing as much detail about your configuration as possible.")),(0,o.kt)("p",null,"You can now enable the beta of Okta OAuth Integration in Cado Response by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings > SSO > Okta OAuth"),"."),(0,o.kt)("h3",{id:"setting-up-okta-sso"},"Setting up Okta SSO"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the Okta admin dashboard and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Applications > Applications"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create App Integration"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"OIDC - OpenID Connect"),(0,o.kt)("li",{parentName:"ul"},"Web Application"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Give the Cado OAuth app a name")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a Sign-in redirect URI. This should be the url you use to access cado in the web browser, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"/login")," path. E.g. ",(0,o.kt)("a",{parentName:"p",href:"https://my.cado.instance/login"},"https://my.cado.instance/login"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose who is granted access to the application"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In Assignments select ",(0,o.kt)("strong",{parentName:"li"},"Limit access to selected groups")),(0,o.kt)("li",{parentName:"ul"},"Add a user group"),(0,o.kt)("li",{parentName:"ul"},"This can also be done at a later stage"),(0,o.kt)("li",{parentName:"ul"},"In this exampled the admin group will be called ",(0,o.kt)("inlineCode",{parentName:"li"},"CadoAdmin"),", but you can name this as you like. Just make note of what you call this; you'll need it later")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Okta Assignments",src:n(5234).Z,width:"725",height:"242"})))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are looking to assign non-admin users within Cado Response, you can use a group name other than ",(0,o.kt)("inlineCode",{parentName:"p"},"CadoAdmin"),".  For example: adding a group ",(0,o.kt)("inlineCode",{parentName:"p"},"CadoNonAdmin")," and assigning users to it will result in those users being Normal Users within Cado Response.")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you wish to edit access control at a later time then you can do so in the ",(0,o.kt)("strong",{parentName:"p"},"Assignments")," tab of the OAuth application where you can add individual people or groups. Only users in a group named ",(0,o.kt)("inlineCode",{parentName:"p"},"CadoAdmin")," will be granted admin user status inside Cado Response.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a groups claim for the application:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Sign On")," tab of the OAuth application"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Edit")," in the OpenID Connect ID Token section"),(0,o.kt)("li",{parentName:"ul"},"For the Issuer field specify \u201cOkta URL\u201d"),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Groups claim type")," field select ",(0,o.kt)("strong",{parentName:"li"},"Filter")),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Groups claim filter")," leave its name ",(0,o.kt)("strong",{parentName:"li"},"groups")," and enter ",(0,o.kt)("strong",{parentName:"li"},"Matches regex")," ",(0,o.kt)("inlineCode",{parentName:"li"},".*")),(0,o.kt)("li",{parentName:"ul"},"Then click ",(0,o.kt)("strong",{parentName:"li"},"Save"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Okta Groups Claim",src:n(6330).Z,width:"696",height:"91"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("strong",{parentName:"p"},"General settings")," tab of the OAuth application and note down the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Client Secret")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Okta Domain")," settings.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure SSO in cado:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open your cado instance and log in as an admin user"),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings > SSO > Okta OAuth")),(0,o.kt)("li",{parentName:"ul"},"Enter the details from step before and click update. For the domain field please add ",(0,o.kt)("inlineCode",{parentName:"li"},"https://")," to the beginning and ",(0,o.kt)("inlineCode",{parentName:"li"},"/oauth2")," to the end of the Okta domain setting. The complete Domain should be of this format: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<Your Okta Domain>/oauth2")),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Admin Group Name")," enter in the value you configured in step 7"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log out with your existing user, and login with Okta OAuth"))))}d.isMDXComponent=!0},5234:function(e,t,n){t.Z=n.p+"assets/images/okta-assignments-3b23b5eb60b1a663656d167431a6126c.png"},6330:function(e,t,n){t.Z=n.p+"assets/images/okta-groups-claim-0a2dfcb9c5c3f572132da5cdcc4ffe63.png"}}]);