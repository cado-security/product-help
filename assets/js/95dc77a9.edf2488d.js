"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5861],{1162:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>n,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var d=s(5893),r=s(1151);const t={title:"Timeline Search",hide_title:!0,sidebar_position:3},n="What is the Timeline Tab?",c={id:"cado/investigate/timeline-search",title:"Timeline Search",description:"The Timeline tab in the Cado platform provides an advanced search interface that supports complex queries to help you filter and analyze investigation data efficiently.",source:"@site/docs/cado/investigate/timeline-search.md",sourceDirName:"cado/investigate",slug:"/cado/investigate/timeline-search",permalink:"/cado/investigate/timeline-search",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/investigate/timeline-search.md",tags:[],version:"current",lastUpdatedAt:1731344277,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:3,frontMatter:{title:"Timeline Search",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview Tab",permalink:"/cado/investigate/overview"},next:{title:"Automated Investigation",permalink:"/cado/investigate/automated-investigation"}},l={},h=[{value:"Faceted Search",id:"faceted-search",level:3},{value:"Basic Searches",id:"basic-searches",level:3},{value:"Plain Search Terms",id:"plain-search-terms",level:4},{value:"Field-Specific Searches",id:"field-specific-searches",level:4},{value:"Ranges",id:"ranges",level:4},{value:"Building Complex Queries",id:"building-complex-queries",level:3},{value:"Searchable Fields",id:"searchable-fields",level:2},{value:"Notes on Search Behavior:",id:"notes-on-search-behavior",level:3}];function o(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.h1,{id:"what-is-the-timeline-tab",children:"What is the Timeline Tab?"}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.strong,{children:"Timeline"})," tab in the Cado platform provides an advanced search interface that supports complex queries to help you filter and analyze investigation data efficiently."]}),"\n",(0,d.jsx)(i.h3,{id:"faceted-search",children:"Faceted Search"}),"\n",(0,d.jsxs)(i.p,{children:["Cado enables you to filter search results using ",(0,d.jsx)(i.strong,{children:"facets"}),", such as event severity, associated usernames, files, or source/destination IP addresses."]}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.img,{alt:"Faceted Search",src:s(29).Z+"",width:"1851",height:"852"})}),"\n",(0,d.jsx)(i.p,{children:"For long lists of facets, you can easily search and sort through them."}),"\n",(0,d.jsx)(i.p,{children:(0,d.jsx)(i.img,{alt:"Faceted List",src:s(4472).Z+"",width:"1503",height:"752"})}),"\n",(0,d.jsx)(i.h3,{id:"basic-searches",children:"Basic Searches"}),"\n",(0,d.jsx)(i.p,{children:"You can also use the search bar to perform specific queries using search strings."}),"\n",(0,d.jsx)(i.h4,{id:"plain-search-terms",children:"Plain Search Terms"}),"\n",(0,d.jsxs)(i.p,{children:["A plain search term will search across all fields. For example: ",(0,d.jsx)(i.code,{children:"foo"})]}),"\n",(0,d.jsxs)(i.p,{children:["If the term contains spaces, enclose it in quotes: ",(0,d.jsx)(i.code,{children:'"foo bar"'})]}),"\n",(0,d.jsx)(i.h4,{id:"field-specific-searches",children:"Field-Specific Searches"}),"\n",(0,d.jsx)(i.p,{children:"To search within a specific field, prepend the field name to the search term. For example:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.code,{children:"user: Chris"})}),"\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.code,{children:'extra: "foo bar"'})}),"\n"]}),"\n",(0,d.jsx)(i.h4,{id:"ranges",children:"Ranges"}),"\n",(0,d.jsx)(i.p,{children:"You can search for a range of values within a field. For example:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:(0,d.jsx)(i.code,{children:"file_size: [1024 TO 8196]"})}),"\n"]}),"\n",(0,d.jsx)(i.h3,{id:"building-complex-queries",children:"Building Complex Queries"}),"\n",(0,d.jsxs)(i.p,{children:["You can combine search terms using ",(0,d.jsx)(i.code,{children:"AND"}),", ",(0,d.jsx)(i.code,{children:"OR"}),", and ",(0,d.jsx)(i.code,{children:"NOT"}),", and use parentheses to group them:"]}),"\n",(0,d.jsx)(i.p,{children:"Example:"}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{children:'alarm_severity: [0 TO 5] AND (user: "Chris" OR user: "James") AND NOT filename: "/foo/bar.txt"\n'})}),"\n",(0,d.jsxs)(i.admonition,{type:"info",children:[(0,d.jsxs)(i.p,{children:["Without parentheses, ",(0,d.jsx)(i.code,{children:"AND"})," operations are evaluated before ",(0,d.jsx)(i.code,{children:"OR"}),". For example:"]}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{children:'user: "Chris" AND user: "James" OR filename: "/foo/bar.txt"\n'})}),(0,d.jsx)(i.p,{children:"is treated as:"}),(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{children:'(user: "Chris" AND user: "James") OR filename: "/foo/bar.txt"\n'})})]}),"\n",(0,d.jsx)(i.h2,{id:"searchable-fields",children:"Searchable Fields"}),"\n",(0,d.jsx)(i.p,{children:"The following fields are searchable:"}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Field"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Description"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"macb"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsxs)(i.td,{children:["A 4-character string encoding MACB information (e.g., ",(0,d.jsx)(i.code,{children:"M..B"})," for Modified and Birth events)."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"source"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsxs)(i.td,{children:["The type of file or data producing this event (e.g., ",(0,d.jsx)(i.code,{children:"EVT"}),", ",(0,d.jsx)(i.code,{children:"CLOUDTRAIL"}),", ",(0,d.jsx)(i.code,{children:"FILE"}),")."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"sourcetype"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsxs)(i.td,{children:["More specific subtype of ",(0,d.jsx)(i.code,{children:"source"}),"."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"type"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsxs)(i.td,{children:["A ",(0,d.jsx)(i.code,{children:";"})," separated list of event types (e.g., ",(0,d.jsx)(i.code,{children:"Last Executed Time"}),", ",(0,d.jsx)(i.code,{children:"Updated Time"}),", ",(0,d.jsx)(i.code,{children:"Creation Time"}),")."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"user"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsx)(i.td,{children:"The user associated with the event."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"host"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsx)(i.td,{children:"The hostname linked to the event."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"filename"})}),(0,d.jsx)(i.td,{children:"special"}),(0,d.jsx)(i.td,{children:"The path of the file related to the event."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"full_filename"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsx)(i.td,{children:"The full path of the file, supports regex and must match the entire path."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"inode"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsx)(i.td,{children:"The inode number of the file."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"source_hostname"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsx)(i.td,{children:"The source hostname for network connections."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"destination_hostname"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsx)(i.td,{children:"The destination hostname for network connections."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"tag"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsxs)(i.td,{children:["Tag representing the event type (e.g., ",(0,d.jsx)(i.code,{children:"Network Logon"}),", ",(0,d.jsx)(i.code,{children:"File Access"}),", ",(0,d.jsx)(i.code,{children:"Execution"}),")."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"executed_process"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsx)(i.td,{children:"The path of an executed file, if detected."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"short"})}),(0,d.jsx)(i.td,{children:"text"}),(0,d.jsx)(i.td,{children:"Short text providing additional event details."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"extra"})}),(0,d.jsx)(i.td,{children:"text"}),(0,d.jsxs)(i.td,{children:["Additional data from the raw event, longer than ",(0,d.jsx)(i.code,{children:"short"}),"."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"alarm_severity"})}),(0,d.jsx)(i.td,{children:"int"}),(0,d.jsxs)(i.td,{children:["Severity of the event (Malicious: ",(0,d.jsx)(i.code,{children:"1"}),", Suspicious: ",(0,d.jsx)(i.code,{children:"3"}),", Other: ",(0,d.jsx)(i.code,{children:"10"}),")."]})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"isFolder"})}),(0,d.jsx)(i.td,{children:"boolean"}),(0,d.jsx)(i.td,{children:"Whether the event is related to a folder."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"evidence_id"})}),(0,d.jsx)(i.td,{children:"int"}),(0,d.jsx)(i.td,{children:"ID of the evidence item."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"timestamp"})}),(0,d.jsx)(i.td,{children:"int"}),(0,d.jsx)(i.td,{children:"Unix timestamp of the event."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"file_size"})}),(0,d.jsx)(i.td,{children:"int"}),(0,d.jsx)(i.td,{children:"The size of the file related to the event."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"sha256"})}),(0,d.jsx)(i.td,{children:"text"}),(0,d.jsx)(i.td,{children:"SHA-256 hash of the file related to the event."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"strings"})}),(0,d.jsx)(i.td,{children:"text"}),(0,d.jsx)(i.td,{children:"Extracted strings from the file related to the event."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"is_starred"})}),(0,d.jsx)(i.td,{children:"bool"}),(0,d.jsx)(i.td,{children:"Whether the event is starred."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"for_report"})}),(0,d.jsx)(i.td,{children:"bool"}),(0,d.jsx)(i.td,{children:"Whether the event is included in a report."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"alarm_description"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsx)(i.td,{children:"A short description explaining the reason for an alarm."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"alarm_attack"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsx)(i.td,{children:"MITRE ATT&CK tactic or technique code."})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"attribute_name"})}),(0,d.jsx)(i.td,{children:"keyword"}),(0,d.jsxs)(i.td,{children:["File attribute information (e.g., ",(0,d.jsx)(i.code,{children:"$STANDARD_INFORMATION"}),", ",(0,d.jsx)(i.code,{children:"$FILENAME"}),")."]})]})]})]}),"\n",(0,d.jsx)(i.h3,{id:"notes-on-search-behavior",children:"Notes on Search Behavior:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:["Fields of type ",(0,d.jsx)(i.code,{children:"int"})," or ",(0,d.jsx)(i.code,{children:"keyword"})," require exact matches."]}),"\n",(0,d.jsxs)(i.li,{children:["Wildcard characters (",(0,d.jsx)(i.code,{children:"*"})," for multiple, ",(0,d.jsx)(i.code,{children:"?"})," for single) can be used in ",(0,d.jsx)(i.code,{children:"keyword"})," fields."]}),"\n",(0,d.jsxs)(i.li,{children:["Fields of type ",(0,d.jsx)(i.code,{children:"text"})," support partial matches."]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"Example:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"user: chris"})," matches ",(0,d.jsx)(i.code,{children:"user"})," field with value ",(0,d.jsx)(i.code,{children:"chris"}),"."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"user: ch*"})," matches ",(0,d.jsx)(i.code,{children:"chris"})," or any string starting with ",(0,d.jsx)(i.code,{children:"ch"}),"."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"user: ch"})," does not match as it requires a full or wildcard match."]}),"\n"]}),"\n",(0,d.jsxs)(i.p,{children:["Searching ",(0,d.jsx)(i.code,{children:"strings: content"})," will return events with matching data, such as ",(0,d.jsx)(i.code,{children:'"This is some example content."'}),"."]})]})}function a(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},4472:(e,i,s)=>{s.d(i,{Z:()=>d});const d=s.p+"assets/images/facet-list-822105b27725dcc1e12938821d0f5fc8.png"},29:(e,i,s)=>{s.d(i,{Z:()=>d});const d=s.p+"assets/images/faceted-search-c8f6a6e06623cdfd84694866e8ed731b.png"},1151:(e,i,s)=>{s.d(i,{Z:()=>c,a:()=>n});var d=s(7294);const r={},t=d.createContext(r);function n(e){const i=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(t.Provider,{value:i},e.children)}}}]);