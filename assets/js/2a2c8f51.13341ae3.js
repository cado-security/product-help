"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8981],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2452:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Azure AD Integration",hide_title:!0,sidebar_position:1},s="Azure AD OAuth Integration",p={unversionedId:"cado-response/sso/azure-ad",id:"cado-response/sso/azure-ad",title:"Azure AD Integration",description:"Azure AD OAuth integration is currently in beta.  If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/sso/azure-ad.md",sourceDirName:"cado-response/sso",slug:"/cado-response/sso/azure-ad",permalink:"/cado-response/sso/azure-ad",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/sso/azure-ad.md",tags:[],version:"current",lastUpdatedAt:1647548529,formattedLastUpdatedAt:"Mar 17, 2022",sidebarPosition:1,frontMatter:{title:"Azure AD Integration",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cortex XSOAR",permalink:"/cado-response/integrations/cortex-xsoar"},next:{title:"Okta Integration",permalink:"/cado-response/sso/okta"}},u={},c=[{value:"Setting up Azure AD SSO",id:"setting-up-azure-ad-sso",level:3}],m={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"azure-ad-oauth-integration"},"Azure AD OAuth Integration"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Azure AD OAuth integration is currently in beta.  If you encounter issues, please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," describing your issue and providing as much detail about your configuration as possible.")),(0,o.kt)("p",null,'You can now enable the beta of Azure AD OAuth Integration in Cado Response by going to "Settings > OAuth".'),(0,o.kt)("h3",{id:"setting-up-azure-ad-sso"},"Setting up Azure AD SSO"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Azure portal and navigate to ",(0,o.kt)("strong",{parentName:"li"},"Enterprise Applications")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"New Application")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create your own application"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Enter a name (e.g. Cado)"),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Integrate any other application you don't find in the gallery (Non-gallery)")))),(0,o.kt)("li",{parentName:"ol"},"Make a note of the Application ID")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Optional:")," Create a role to allow Azure AD users to be assigned admin privileges"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"From the home page, open ",(0,o.kt)("strong",{parentName:"li"},"Azure Active Directory")," and select the ",(0,o.kt)("strong",{parentName:"li"},"App Registrations")," blade"),(0,o.kt)("li",{parentName:"ol"},"Select your application (you may need to switch to the ",(0,o.kt)("strong",{parentName:"li"},"All Applications")," tab if you are not an owner)"),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"App roles")," then ",(0,o.kt)("strong",{parentName:"li"},"Create app role"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a role named ",(0,o.kt)("inlineCode",{parentName:"li"},"admin"),". ",(0,o.kt)("strong",{parentName:"li"},"*IMPORTANT: the value must be ",(0,o.kt)("inlineCode",{parentName:"strong"},"admin")),(0,o.kt)("img",{alt:"Azure AD Role",src:n(584).Z,width:"567",height:"501"})))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Configure Access Control",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("strong",{parentName:"li"},"Enterprise Applications")," and select the ",(0,o.kt)("strong",{parentName:"li"},"Properties")," blade and make sure ",(0,o.kt)("strong",{parentName:"li"},"User assignment required?")," is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes"),". This means only assigned users will be allowed to log into Cado Response\n",(0,o.kt)("img",{alt:"Azure Properties",src:n(6816).Z,width:"604",height:"497"})),(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("strong",{parentName:"li"},"Users and Groups")),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add User/Group")," and add any users you want to give access to the app. If you created an admin role, you can assign the new users the admin role to give them admin access within Cado Response."))),(0,o.kt)("li",{parentName:"ol"},"Create a secret to allow authentication with Cado Response",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"From the home page, open ",(0,o.kt)("strong",{parentName:"li"},"Azure Active Directory")," and select the ",(0,o.kt)("strong",{parentName:"li"},"App Registrations")," blade"),(0,o.kt)("li",{parentName:"ul"},"Select your application (you may need to switch to the ",(0,o.kt)("strong",{parentName:"li"},"All Applications")," tab if you are not an owner)"),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Clients & Secrets")," blade and click ",(0,o.kt)("strong",{parentName:"li"},"New Client Secret")),(0,o.kt)("li",{parentName:"ul"},"Make a note of the ",(0,o.kt)("strong",{parentName:"li"},"Value"),", you will need this in Cado Response."))),(0,o.kt)("li",{parentName:"ol"},"Collect other required information",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Overview")," blade and make a note of the following values:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Application Client ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Directory (Tenant) ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Client Secret")," (which you should already have from previous step)"))))),(0,o.kt)("li",{parentName:"ol"},"Whitelist the redirect URL",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Authentication")," blade\n",(0,o.kt)("img",{alt:"Azure Authentication",src:n(313).Z,width:"240",height:"274"})),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add a Platform")),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Web")," and input your redirect url. This should be the url you use to access Cado Response in the web browser, including the ",(0,o.kt)("inlineCode",{parentName:"li"},"/login")," path. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://my.cado.instance/login")))),(0,o.kt)("li",{parentName:"ol"},"Configure SSO in Cado Response",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open your Cado Response instance and log in as an admin user"),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Settings > OAuth")),(0,o.kt)("li",{parentName:"ul"},"Enter the Microsoft OAuth details you noted earlier and click ",(0,o.kt)("strong",{parentName:"li"},"Update"))))))}d.isMDXComponent=!0},313:function(e,t,n){t.Z=n.p+"assets/images/azure-authentication-f45196cbc1394bf9eda1aadd1e4e95d8.png"},584:function(e,t,n){t.Z=n.p+"assets/images/azure-create-role-a52699b7efa0b967fc0650cb134610f8.png"},6816:function(e,t,n){t.Z=n.p+"assets/images/azure-properties-57e0d66a92abcab515c9f71b4974011b.png"}}]);