"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9609],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2368:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],c={title:"Summary",hide_title:!0,sidebar_position:1},s="Cado Host",l={unversionedId:"cado-host/intro",id:"cado-host/intro",title:"Summary",description:"Cado Host is a solution to acquire forensic artifacts from systems and place them into cloud storage, enabling you to perform a quick triage investigation of a target system.",source:"@site/docs/cado-host/intro.md",sourceDirName:"cado-host",slug:"/cado-host/intro",permalink:"/cado-host/intro",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/intro.md",tags:[],version:"current",lastUpdatedAt:1643310717,formattedLastUpdatedAt:"Jan 27, 2022",sidebarPosition:1,frontMatter:{title:"Summary",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Summary",permalink:"/cado-response/community-edition/community-intro"},next:{title:"Deploying",permalink:"/cado-host/deploy"}},u={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cado-host"},"Cado Host"),(0,a.kt)("p",null,"Cado Host is a solution to acquire forensic artifacts from systems and place them into cloud storage, enabling you to perform a quick triage investigation of a target system.\nData is collected and stored in a zip file that can be automatically uploaded to Amazon AWS, Microsoft Azure or Google Cloud Storage. It also supports storing captured files locally.\nOnce collected, these artifacts can be imported, processed and analysed in the Cado Response platform."),(0,a.kt)("p",null,"Cado Host binaries are available for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft Windows: 7, 8.1, 10 (1607+) and Microsoft Windows Server Server 2012 R2+"),(0,a.kt)("li",{parentName:"ul"},"Linux: Debian: 9+, Ubuntu: 16.04+, Fedora: 29+, CentOS: 7+, RHEL: 6+, openSUSE: 15+, SUSE Enterprise (SLES): 12 SP2+, Alpine: 3.10+"),(0,a.kt)("li",{parentName:"ul"},"MacOS (Intel based only): 10.13+")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We now recommend using the automatically created temporary credentials generated by Cado Response. See our documentation ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"deploy#deploy-through-cado-response-platform"},"here"))," for more details.")))}m.isMDXComponent=!0}}]);