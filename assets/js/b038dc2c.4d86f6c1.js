"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),k=p(n),u=r,c=k["".concat(o,".").concat(u)]||k[u]||s[u]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Timeline Search",hide_title:!0,sidebar_position:3},l="Timeline Search",d={unversionedId:"cado-response/investigate/timeline-search",id:"cado-response/investigate/timeline-search",title:"Timeline Search",description:"The Cado platform includes an advanced search interface which supports complex queries.",source:"@site/docs/cado-response/investigate/timeline-search.md",sourceDirName:"cado-response/investigate",slug:"/cado-response/investigate/timeline-search",permalink:"/cado-response/investigate/timeline-search",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/investigate/timeline-search.md",tags:[],version:"current",lastUpdatedAt:1685972463,formattedLastUpdatedAt:"Jun 5, 2023",sidebarPosition:3,frontMatter:{title:"Timeline Search",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Project Overview",permalink:"/cado-response/investigate/project-overview"},next:{title:"Automated Investigation",permalink:"/cado-response/investigate/automated-investigation"}},o={},p=[{value:"Basic Searches",id:"basic-searches",level:3},{value:"Plain search terms",id:"plain-search-terms",level:4},{value:"Fields",id:"fields",level:4},{value:"Ranges",id:"ranges",level:4},{value:"Building complex queries",id:"building-complex-queries",level:3},{value:"Fields",id:"fields-1",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"timeline-search"},"Timeline Search"),(0,r.kt)("p",null,"The Cado platform includes an advanced search interface which supports complex queries."),(0,r.kt)("h3",{id:"basic-searches"},"Basic Searches"),(0,r.kt)("h4",{id:"plain-search-terms"},"Plain search terms"),(0,r.kt)("p",null,"Providing plain search term will search across all fields, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")),(0,r.kt)("p",null,"You can quote terms containing spaces: ",(0,r.kt)("inlineCode",{parentName:"p"},'"foo bar"')),(0,r.kt)("h4",{id:"fields"},"Fields"),(0,r.kt)("p",null,"You can search a specific field by prepending it to the search term: ",(0,r.kt)("inlineCode",{parentName:"p"},"user: Chris")," OR  ",(0,r.kt)("inlineCode",{parentName:"p"},'extra: "foo bar"')),(0,r.kt)("h4",{id:"ranges"},"Ranges"),(0,r.kt)("p",null,"You can restrict a field to a range of values: ",(0,r.kt)("inlineCode",{parentName:"p"},"file_size: [1024 TO 8196]")),(0,r.kt)("h3",{id:"building-complex-queries"},"Building complex queries"),(0,r.kt)("p",null,"You can build complex queries using ",(0,r.kt)("inlineCode",{parentName:"p"},"AND"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NOT")," to combine terms, and brackets to group ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),":"),(0,r.kt)("p",null,"For example: ",(0,r.kt)("inlineCode",{parentName:"p"},'alarm_severity: [0 TO 5] AND (user: "Chris" OR user: "James") AND NOT filename: "/foo/bar.txt"')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that without brackets, ANDs will bind before ORs. This means that ",(0,r.kt)("inlineCode",{parentName:"p"},'user: "Chris" AND user: "James" OR filename: "/foo/bar.txt"')," is searched as ",(0,r.kt)("inlineCode",{parentName:"p"},'(user: "Chris" AND user: "James") OR filename: "/foo/bar.txt"'),".")),(0,r.kt)("h2",{id:"fields-1"},"Fields"),(0,r.kt)("p",null,"Searchable fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"macb")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"4 character string which encoding MACB information for this event. An ",(0,r.kt)("inlineCode",{parentName:"td"},"M")," in position 0 indicates this is a Modified event and a ",(0,r.kt)("inlineCode",{parentName:"td"},".")," represents a non-modified event. e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"M..B")," indicates modified and birth.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the file or data that produced this event e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"EVT"),",  ",(0,r.kt)("inlineCode",{parentName:"td"},"CLOUDTRAIL"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"FILE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"JAVA_IDX"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LOG"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sourcetype")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"More specific subtype of ",(0,r.kt)("inlineCode",{parentName:"td"},"source"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},";")," separated list of event types, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Last Executed Time"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Updated Time"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Content Modification Time"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Creation Time"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"User associated with the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"Host name associated with the event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filename")),(0,r.kt)("td",{parentName:"tr",align:null},"special"),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the file associated with this event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"full_filename")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"The full path of the file associated with this event, supports regex and must match entire path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inode")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"The inode number of the file associated with this event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"source_hostname")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"For network connections, the hostname that it originated from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"destination_hostname")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"For network connections, the destination hostname")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tag")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag representing type of event e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Network Logon"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"File Access"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Execution"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"executed_process")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"Where we detect a process execution, the path of the executed file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"short")),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"Short text providing additional data from raw event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extra")),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"Longer text, providing more raw data than ",(0,r.kt)("inlineCode",{parentName:"td"},"short"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alarm_severity")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Severity of event based on detections. Malicious ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", Suspcious ",(0,r.kt)("inlineCode",{parentName:"td"},"3"),", Other ",(0,r.kt)("inlineCode",{parentName:"td"},"10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isFolder")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether an event is a folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evidence_id")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of evidence item")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Unix timestamp of event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"evidence_id")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of a specific evidence to search within")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"file_size")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"size of file associated with this event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sha256")),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"sha256 of the file associated with this event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strings")),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"Strings extracted from file associated with this event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_starred")),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether an event is starred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"for_report")),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether an event is included in the report")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alarm_description")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"Short description explaining the reason for an alarm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alarm_attack")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"Mitre attack code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attribute_name")),(0,r.kt)("td",{parentName:"tr",align:null},"keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"$STANDARD_INFORMATION / $FILENAME / null")))),(0,r.kt)("p",null,"Fields of type ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"keyword")," require the search term to match exactly in order to return a result. For example, for an event with ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"chris"),", the search term:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user: chris")," matches"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user: ch*")," matches"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user: ch")," does not match")),(0,r.kt)("p",null,"Fields of type ",(0,r.kt)("inlineCode",{parentName:"p"},"keyword")," support wildcard characters. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," as a single-character wildcard and ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," for any number of characters."),(0,r.kt)("p",null,"Fields of type ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," do not require a full match. E.g. searching for ",(0,r.kt)("inlineCode",{parentName:"p"},"strings: content")," will return the event with the following strings data: ",(0,r.kt)("inlineCode",{parentName:"p"},"This is some example content"),"."))}s.isMDXComponent=!0}}]);