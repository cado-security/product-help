"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4514],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4177:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"Logging In",hide_title:!0,sidebar_position:1},l="Logging In",c={unversionedId:"cado-response/manage/logging-in",id:"cado-response/manage/logging-in",title:"Logging In",description:"Depending on the cloud provider in which you deployed the Cado platform, navigate to either your AWS Console or your Azure Portal and find the Public IPv4 address of your running Cado instance.  Open a browser and navigate to https:// where `` is the IPv4 of the Cado instance.  You will now be able to log into the platform.",source:"@site/docs/cado-response/manage/logging-in.md",sourceDirName:"cado-response/manage",slug:"/cado-response/manage/logging-in",permalink:"/cado-response/manage/logging-in",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/logging-in.md",tags:[],version:"current",lastUpdatedAt:1667941408,formattedLastUpdatedAt:"Nov 8, 2022",sidebarPosition:1,frontMatter:{title:"Logging In",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Detections",permalink:"/cado-response/investigate/detections"},next:{title:"Applying a License",permalink:"/cado-response/manage/licenses"}},p={},u=[{value:"Default Login",id:"default-login",level:3}],d={toc:u};function g(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logging-in"},"Logging In"),(0,a.kt)("p",null,"Depending on the cloud provider in which you deployed the Cado platform, navigate to either your ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://console.aws.amazon.com"},"AWS Console"))," or your ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://portal.azure.com"},"Azure Portal"))," and find the Public IPv4 address of your running Cado instance.  Open a browser and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<Cado_Response_IP>")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"<Cado_Response_IP>")," is the IPv4 of the Cado instance.  You will now be able to log into the platform. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'You will see a browser notification stating that "Your connection is not private". Cado is unable to automatically generate SSL certificates. In AWS, if you require a valid SSL certificate, the easiest way to create one for the encrypted HTTPS connection is to ',(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/cado-response/deploy/aws/networking/aws-load-balancer"},"create your own ELB")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Login Page",src:n(9879).Z,width:"456",height:"528"})),(0,a.kt)("h3",{id:"default-login"},"Default Login"),(0,a.kt)("p",null,'On first boot, the platform will take about 10 minutes to install, during which time, on the login URL page, you will see a message indicating that the system is "Installing Cado Response ...".  After initial install, you can login with the username ',(0,a.kt)("inlineCode",{parentName:"p"},"admin"),".  For AWS, the password is ",(0,a.kt)("inlineCode",{parentName:"p"},"i-xxx"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"i-xxx")," is the Instance ID of your Cado instance.  For Azure, the password is the very long instance id ",(0,a.kt)("inlineCode",{parentName:"p"},"/subscription/.../cado-main-vm")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"/subscription/.../cado-main-vm")," is the full instance id.  After initial login, you will be asked to accept the EULA and change your password."))}g.isMDXComponent=!0},9879:function(e,t,n){t.Z=n.p+"assets/images/login-7194fb115da3e43cb1d8ca36b1ace509.png"}}]);