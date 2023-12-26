"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2616],{489:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>h,contentTitle:()=>n,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=d(5893),t=d(1151);const r={title:"Timeline Search",hide_title:!0,sidebar_position:3},n="Timeline Search",c={id:"cado-response/investigate/timeline-search",title:"Timeline Search",description:"The Cado platform includes an advanced search interface which supports complex queries.",source:"@site/docs/cado-response/investigate/timeline-search.md",sourceDirName:"cado-response/investigate",slug:"/cado-response/investigate/timeline-search",permalink:"/cado-response/investigate/timeline-search",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/investigate/timeline-search.md",tags:[],version:"current",lastUpdatedAt:1703623587,formattedLastUpdatedAt:"Dec 26, 2023",sidebarPosition:3,frontMatter:{title:"Timeline Search",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Evidence",permalink:"/cado-response/investigate/evidence"},next:{title:"Automated Investigation",permalink:"/cado-response/investigate/automated-investigation"}},h={},l=[{value:"Faceted Search",id:"faceted-search",level:3},{value:"Basic Searches",id:"basic-searches",level:3},{value:"Plain search terms",id:"plain-search-terms",level:4},{value:"Fields",id:"fields",level:4},{value:"Ranges",id:"ranges",level:4},{value:"Building complex queries",id:"building-complex-queries",level:3},{value:"Fields",id:"fields-1",level:2}];function o(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"timeline-search",children:"Timeline Search"}),"\n",(0,i.jsx)(s.p,{children:"The Cado platform includes an advanced search interface which supports complex queries."}),"\n",(0,i.jsx)(s.h3,{id:"faceted-search",children:"Faceted Search"}),"\n",(0,i.jsx)(s.p,{children:"Cado allows you to filter your search based upon 'facets', like event severity, or associated user name, file, source/destination IP address"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Faceted Search",src:d(29).Z+"",width:"1851",height:"852"})}),"\n",(0,i.jsx)(s.p,{children:"For long lists of facets, you can search and sort the list of facets"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Faceted List",src:d(4472).Z+"",width:"1503",height:"752"})}),"\n",(0,i.jsx)(s.h3,{id:"basic-searches",children:"Basic Searches"}),"\n",(0,i.jsx)(s.p,{children:"You can also use the search bar to craft specific searches using search strings"}),"\n",(0,i.jsx)(s.h4,{id:"plain-search-terms",children:"Plain search terms"}),"\n",(0,i.jsxs)(s.p,{children:["Providing plain search terms will search across all fields, for example: ",(0,i.jsx)(s.code,{children:"foo"})]}),"\n",(0,i.jsxs)(s.p,{children:["You can quote terms containing spaces: ",(0,i.jsx)(s.code,{children:'"foo bar"'})]}),"\n",(0,i.jsx)(s.h4,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(s.p,{children:["You can search a specific field by prepending it to the search term: ",(0,i.jsx)(s.code,{children:"user: Chris"})," OR  ",(0,i.jsx)(s.code,{children:'extra: "foo bar"'})]}),"\n",(0,i.jsx)(s.h4,{id:"ranges",children:"Ranges"}),"\n",(0,i.jsxs)(s.p,{children:["You can restrict a field to a range of values: ",(0,i.jsx)(s.code,{children:"file_size: [1024 TO 8196]"})]}),"\n",(0,i.jsx)(s.h3,{id:"building-complex-queries",children:"Building complex queries"}),"\n",(0,i.jsxs)(s.p,{children:["You can build complex queries using ",(0,i.jsx)(s.code,{children:"AND"}),", ",(0,i.jsx)(s.code,{children:"OR"})," and ",(0,i.jsx)(s.code,{children:"NOT"})," to combine terms, and brackets to group ",(0,i.jsx)(s.code,{children:"()"}),":"]}),"\n",(0,i.jsxs)(s.p,{children:["For example: ",(0,i.jsx)(s.code,{children:'alarm_severity: [0 TO 5] AND (user: "Chris" OR user: "James") AND NOT filename: "/foo/bar.txt"'})]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["Note that without brackets, ANDs will bind before ORs. This means that ",(0,i.jsx)(s.code,{children:'user: "Chris" AND user: "James" OR filename: "/foo/bar.txt"'})," is searched as ",(0,i.jsx)(s.code,{children:'(user: "Chris" AND user: "James") OR filename: "/foo/bar.txt"'}),"."]})}),"\n",(0,i.jsx)(s.h2,{id:"fields-1",children:"Fields"}),"\n",(0,i.jsx)(s.p,{children:"Searchable fields"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Field"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"macb"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsxs)(s.td,{children:["4 character string which encoding MACB information for this event. An ",(0,i.jsx)(s.code,{children:"M"})," in position 0 indicates this is a Modified event and a ",(0,i.jsx)(s.code,{children:"."})," represents a non-modified event. e.g. ",(0,i.jsx)(s.code,{children:"M..B"})," indicates modified and birth."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"source"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsxs)(s.td,{children:["The type of the file or data that produced this event e.g. ",(0,i.jsx)(s.code,{children:"EVT"}),",  ",(0,i.jsx)(s.code,{children:"CLOUDTRAIL"}),", ",(0,i.jsx)(s.code,{children:"FILE"}),", ",(0,i.jsx)(s.code,{children:"JAVA_IDX"}),", ",(0,i.jsx)(s.code,{children:"LOG"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"sourcetype"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsxs)(s.td,{children:["More specific subtype of ",(0,i.jsx)(s.code,{children:"source"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"type"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:";"})," separated list of event types, e.g. ",(0,i.jsx)(s.code,{children:"Last Executed Time"}),", ",(0,i.jsx)(s.code,{children:"Updated Time"}),", ",(0,i.jsx)(s.code,{children:"Content Modification Time"}),", ",(0,i.jsx)(s.code,{children:"Creation Time"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"user"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsx)(s.td,{children:"User associated with the event"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"host"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsx)(s.td,{children:"Host name associated with the event"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"filename"})}),(0,i.jsx)(s.td,{children:"special"}),(0,i.jsx)(s.td,{children:"The path of the file associated with this event"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"full_filename"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsx)(s.td,{children:"The full path of the file associated with this event, supports regex and must match entire path"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"inode"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsx)(s.td,{children:"The inode number of the file associated with this event"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"source_hostname"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsx)(s.td,{children:"For network connections, the hostname that it originated from"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"destination_hostname"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsx)(s.td,{children:"For network connections, the destination hostname"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"tag"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsxs)(s.td,{children:["Tag representing type of event e.g. ",(0,i.jsx)(s.code,{children:"Network Logon"}),", ",(0,i.jsx)(s.code,{children:"File Access"}),", ",(0,i.jsx)(s.code,{children:"Execution"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"executed_process"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsx)(s.td,{children:"Where we detect a process execution, the path of the executed file"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"short"})}),(0,i.jsx)(s.td,{children:"text"}),(0,i.jsx)(s.td,{children:"Short text providing additional data from raw event"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"extra"})}),(0,i.jsx)(s.td,{children:"text"}),(0,i.jsxs)(s.td,{children:["Longer text, providing more raw data than ",(0,i.jsx)(s.code,{children:"short"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"alarm_severity"})}),(0,i.jsx)(s.td,{children:"int"}),(0,i.jsxs)(s.td,{children:["Severity of event based on detections. Malicious ",(0,i.jsx)(s.code,{children:"1"}),", Suspcious ",(0,i.jsx)(s.code,{children:"3"}),", Other ",(0,i.jsx)(s.code,{children:"10"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"isFolder"})}),(0,i.jsx)(s.td,{children:"boolean"}),(0,i.jsx)(s.td,{children:"Whether an event is a folder."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"evidence_id"})}),(0,i.jsx)(s.td,{children:"int"}),(0,i.jsx)(s.td,{children:"ID of evidence item"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"timestamp"})}),(0,i.jsx)(s.td,{children:"int"}),(0,i.jsx)(s.td,{children:"Unix timestamp of event"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"evidence_id"})}),(0,i.jsx)(s.td,{children:"int"}),(0,i.jsx)(s.td,{children:"the id of a specific evidence to search within"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"file_size"})}),(0,i.jsx)(s.td,{children:"int"}),(0,i.jsx)(s.td,{children:"size of file associated with this event"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"sha256"})}),(0,i.jsx)(s.td,{children:"text"}),(0,i.jsx)(s.td,{children:"sha256 of the file associated with this event"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"strings"})}),(0,i.jsx)(s.td,{children:"text"}),(0,i.jsx)(s.td,{children:"Strings extracted from file associated with this event"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"is_starred"})}),(0,i.jsx)(s.td,{children:"bool"}),(0,i.jsx)(s.td,{children:"Whether an event is starred"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"for_report"})}),(0,i.jsx)(s.td,{children:"bool"}),(0,i.jsx)(s.td,{children:"Whether an event is included in the report"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"alarm_description"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsx)(s.td,{children:"Short description explaining the reason for an alarm"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"alarm_attack"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsx)(s.td,{children:"Mitre attack code"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"attribute_name"})}),(0,i.jsx)(s.td,{children:"keyword"}),(0,i.jsx)(s.td,{children:"$STANDARD_INFORMATION / $FILENAME / null"})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Fields of type ",(0,i.jsx)(s.code,{children:"int"})," or ",(0,i.jsx)(s.code,{children:"keyword"})," require the search term to match exactly in order to return a result. For example, for an event with ",(0,i.jsx)(s.code,{children:"user"})," equal to ",(0,i.jsx)(s.code,{children:"chris"}),", the search term:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"user: chris"})," matches"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"user: ch*"})," matches"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"user: ch"})," does not match"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Fields of type ",(0,i.jsx)(s.code,{children:"keyword"})," support wildcard characters. Use ",(0,i.jsx)(s.code,{children:"?"})," as a single-character wildcard and ",(0,i.jsx)(s.code,{children:"*"})," for any number of characters."]}),"\n",(0,i.jsxs)(s.p,{children:["Fields of type ",(0,i.jsx)(s.code,{children:"text"})," do not require a full match. E.g. searching for ",(0,i.jsx)(s.code,{children:"strings: content"})," will return the event with the following strings data: ",(0,i.jsx)(s.code,{children:"This is some example content"}),"."]})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},4472:(e,s,d)=>{d.d(s,{Z:()=>i});const i=d.p+"assets/images/facet-list-822105b27725dcc1e12938821d0f5fc8.png"},29:(e,s,d)=>{d.d(s,{Z:()=>i});const i=d.p+"assets/images/faceted-search-c8f6a6e06623cdfd84694866e8ed731b.png"},1151:(e,s,d)=>{d.d(s,{Z:()=>c,a:()=>n});var i=d(7294);const t={},r=i.createContext(t);function n(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);