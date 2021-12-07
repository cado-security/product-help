"use strict";(self.webpackChunkcado_test=self.webpackChunkcado_test||[]).push([[762],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},380:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],p={title:"Okta Integration (beta)",hide_title:!0,sidebar_position:2},s="Okta OAuth Integration",l={unversionedId:"cado-response/sso/okta",id:"cado-response/sso/okta",isDocsHomePage:!1,title:"Okta Integration (beta)",description:"Okta OAuth integration is currently in beta.  If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/sso/okta.md",sourceDirName:"cado-response/sso",slug:"/cado-response/sso/okta",permalink:"/docs/cado-response/sso/okta",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/sso/okta.md",tags:[],version:"current",lastUpdatedAt:1638898685,formattedLastUpdatedAt:"12/7/2021",sidebarPosition:2,frontMatter:{title:"Okta Integration (beta)",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Azure AD Integration (beta)",permalink:"/docs/cado-response/sso/azure-ad"},next:{title:"Cross Account Creation",permalink:"/docs/cado-response/guides/cross-account-creation"}},c=[{value:"Setting up Okta SSO",id:"setting-up-okta-sso",children:[],level:3}],u={toc:c};function m(e){var t=e.components,p=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"okta-oauth-integration"},"Okta OAuth Integration"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Okta OAuth integration is currently in beta.  If you encounter issues, please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," describing your issue and providing as much detail about your configuration as possible."))),(0,o.kt)("p",null,"You can now enable the beta of Okta OAuth Integration in Cado Response by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings > OAuth"),"."),(0,o.kt)("h3",{id:"setting-up-okta-sso"},"Setting up Okta SSO"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the Okta admin dashboard and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Applications > Applications"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create App Integration"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"OIDC - OpenID Connect"),(0,o.kt)("li",{parentName:"ul"},"Web Application"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Give the Cado OAuth app a name")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a Sign-in redirect URI. This should be the url you use to access cado in the web browser, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"/login")," path. E.g. ",(0,o.kt)("a",{parentName:"p",href:"https://my.cado.instance/login"},"https://my.cado.instance/login"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optional: Choose who is granted access to the application"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In Assignments select ",(0,o.kt)("strong",{parentName:"li"},"Limit access to selected groups")),(0,o.kt)("li",{parentName:"ul"},"Add a user group"),(0,o.kt)("li",{parentName:"ul"},"This can also be done at a later stage"),(0,o.kt)("li",{parentName:"ul"},"If you name a group ",(0,o.kt)("inlineCode",{parentName:"li"},"CadoAdmin"),", then any users in that group will become admin users of Cado Response when logging in")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Okta Assignments",src:n(4249).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you wish to edit access control at a later time then you can do so in the ",(0,o.kt)("strong",{parentName:"p"},"Assignments")," tab of the OAuth application where you can add individual people or groups. Only users in a group named ",(0,o.kt)("inlineCode",{parentName:"p"},"CadoAdmin")," will be granted admin user status inside Cado Response.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a groups claim for the application:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Sign On")," tab of the OAuth application"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Edit")," in the OpenID Connect ID Token section"),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Groups claim type")," field select ",(0,o.kt)("strong",{parentName:"li"},"Filter")),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Groups claim filter")," leave its name ",(0,o.kt)("strong",{parentName:"li"},"groups")," and enter ",(0,o.kt)("strong",{parentName:"li"},"Matches regex")," ",(0,o.kt)("inlineCode",{parentName:"li"},".*")),(0,o.kt)("li",{parentName:"ul"},"Then click ",(0,o.kt)("strong",{parentName:"li"},"Save"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Okta Groups Claim",src:n(2393).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("strong",{parentName:"p"},"General settings")," tab of the OAuth application and note down the ",(0,o.kt)("inlineCode",{parentName:"p"},"Client ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Client Secret")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Okta Domain")," settings.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure SSO in cado:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open your cado instance and log in as an admin user"),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings > OAuth")),(0,o.kt)("li",{parentName:"ul"},"Enter the details from step before and click update. For the domain field please add ",(0,o.kt)("inlineCode",{parentName:"li"},"https://")," to the beginning and ",(0,o.kt)("inlineCode",{parentName:"li"},"/oauth2")," to the end of the Okta domain setting. The complete Domain should be of this format: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<Your Okta Domain>/oauth2")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log out with your existing user, and login with Okta OAuth"))))}m.isMDXComponent=!0},4249:function(e,t,n){t.Z=n.p+"assets/images/okta-assignments-3b23b5eb60b1a663656d167431a6126c.png"},2393:function(e,t,n){t.Z=n.p+"assets/images/okta-groups-claim-0a2dfcb9c5c3f572132da5cdcc4ffe63.png"}}]);