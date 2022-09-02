"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2376],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8109:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"Detections",hide_title:!0,sidebar_position:9},c=void 0,l={unversionedId:"cado-response/investigate/detections",id:"cado-response/investigate/detections",title:"Detections",description:"Setting Up Detections",source:"@site/docs/cado-response/investigate/detections.md",sourceDirName:"cado-response/investigate",slug:"/cado-response/investigate/detections",permalink:"/cado-response/investigate/detections",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/investigate/detections.md",tags:[],version:"current",lastUpdatedAt:1662134394,formattedLastUpdatedAt:"Sep 2, 2022",sidebarPosition:9,frontMatter:{title:"Detections",hide_title:!0,sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Files",permalink:"/cado-response/investigate/files"},next:{title:"Logging In",permalink:"/cado-response/manage/logging-in"}},p={},u=[{value:"Setting Up Detections",id:"setting-up-detections",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"setting-up-detections"},"Setting Up Detections"),(0,i.kt)("p",null,"Cado Response can integrate with a number of systems as well as incorporate custom Indicators of Compromise. These can be defined in ",(0,i.kt)("em",{parentName:"p"},"Settings - General Settings - Detection")," "),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"VirusTotal API Key")," is used to enhance the analysis of already detected files by checking their file-hash against the VirusTotal database. It is not used to detect files. "),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Yara Rules")," text-box allows you to run your own set of Yara rules against files. These are run in addition to a set built-in to Cado Response. Rules that match will trigger a ",(0,i.kt)("inlineCode",{parentName:"p"},"Malicious")," detection, unless the yara rule name starts with the keyword suspicious - in which case it will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Suspicious")," detection."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Indicators of Compromise")," are matched against the contents of files and events, for example connections from network logs. Enter one indicator on each line. You can enter any keyword such as a filename, IP address or Domain name. If you enter a SHA256 filehash, it will be matched against files too. You can optionally enter a title for an indicator, preceded by the ';' character. For example \"Domain.com;A bad domain\""))}f.isMDXComponent=!0}}]);