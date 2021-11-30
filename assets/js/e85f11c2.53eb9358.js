"use strict";(self.webpackChunkcado_test=self.webpackChunkcado_test||[]).push([[542],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),g=r,c=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8951:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"SIEM",hide_title:!0,sidebar_position:2},s="SIEM Integration",d={unversionedId:"cado-response/integrations/siem",id:"cado-response/integrations/siem",isDocsHomePage:!1,title:"SIEM",description:"SIEM (Security Information and Event Management) is a tool that provides real-time analysis of security events generated by applications and network hardware - an essential capability for SecOps teams to correlate events and logs from different systems and manage risks more wisely. The integration with the Cado Response platform leverages the power of SIEM systems with Cado\u2019s unique forensics value in the cloud.",source:"@site/docs/cado-response/integrations/siem.md",sourceDirName:"cado-response/integrations",slug:"/cado-response/integrations/siem",permalink:"/docs/cado-response/integrations/siem",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/integrations/siem.md",tags:[],version:"current",lastUpdatedAt:1638203062,formattedLastUpdatedAt:"11/29/2021",sidebarPosition:2,frontMatter:{title:"SIEM",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/cado-response/integrations/api-overview"},next:{title:"SentinelOne",permalink:"/docs/cado-response/integrations/sentinelone"}},p=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Extensions",id:"extensions",children:[],level:2}],m={toc:p};function u(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"siem-integration"},"SIEM Integration"),(0,l.kt)("p",null,"SIEM (Security Information and Event Management) is a tool that provides real-time analysis of security events generated by applications and network hardware - an essential capability for SecOps teams to correlate events and logs from different systems and manage risks more wisely. The integration with the Cado Response platform leverages the power of SIEM systems with Cado\u2019s unique forensics value in the cloud."),(0,l.kt)("p",null,"The processed timeline from Cado Response will be converted to a standard format (CEF) so it can be universally read by SIEM systems. The CEF file will then be uploaded to your AWS S3 bucket and folder of choice. You can configure your SIEM system to automatically check for new files in the S3 bucket and to add them to your SIEM system automatically."),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"Before you can export the timeline you need to enable SIEM integration found under ",(0,l.kt)("strong",{parentName:"p"},"Settings -> Platform Settings -> Integrations -> SIEM"),". After it is enabled you can select what type of events you wish to be exported such as ",(0,l.kt)("strong",{parentName:"p"},"key events")," (malicious and suspicious events), ",(0,l.kt)("strong",{parentName:"p"},"executed processes"),", ",(0,l.kt)("strong",{parentName:"p"},"network logons")," and ",(0,l.kt)("strong",{parentName:"p"},"files accessed"),". Ensure that at least on type of event is included to continue. You also need to set the S3 bucket and S3 folder you wish for the timeline to be exported to."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"SIEM Settings in Cado Response",src:n(9844).Z})),(0,l.kt)("p",null,"When enabled whenever you import an evidence item, the timeline will be automatically converted and uploaded to S3. You then need to configure your SIEM system to watch the folder for any new files uploaded so they can be automatically added to your SIEM."),(0,l.kt)("h1",{id:"cado-response-cef-standard"},"Cado Response CEF Standard"),(0,l.kt)("p",null,"This is a sample CEF log that can be generated by Cado Response:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CEF:0|CadoSecurity|CadoResponse|1.0.2|0|Content Modification Time|10|alarm=True evidence_id=2 evidence_name=aws_compromise.zip macb=M... source=FILE eventTime=1595194940 filePath=/tmp/file.txt eventId=Q5FBqHwBX9dvp1T5IsHT msg=Malicious File Detected: cryptomining_malware_wannamine")),(0,l.kt)("p",null,"The log follows the below standard:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CEF:0|CadoSecurity|CadoResponse|Version|Signature ID|Name|Severity|Extension")),(0,l.kt)("p",null,"The extension part of the message is a placeholder for additional fields that are represented by key-value pairs. The keys are part of a predefined set and are outlined below."),(0,l.kt)("h2",{id:"extensions"},"Extensions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"EXTENSION FIELD"),(0,l.kt)("th",{parentName:"tr",align:null},"EXAMPLE VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"FIELD DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventTime"),(0,l.kt)("td",{parentName:"tr",align:null},"890430600"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Unix timestamp of event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"REG"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"More specific subtype of source.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sourcetype"),(0,l.kt)("td",{parentName:"tr",align:null},"LOG"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the file or data that produced this event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Last Time Executed"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"; separated list of event types, e.g. Last Executed Time, Updated Time, Content Modification Time, Creation Time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filePath"),(0,l.kt)("td",{parentName:"tr",align:null},"/Users/nromanoff/NTUSER.DAT"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The path of the file associated with this event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"short"),(0,l.kt)("td",{parentName:"tr",align:null},"Executable in suspicious location"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Short text providing additional data from raw event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"evidence_id"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of evidence item in Response.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alarm_severity"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Severity of event based on detections. Malicious 1, Suspicious 3, Other 10.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},"/Users/nromanoff"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The path of the file associated with this event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"macb"),(0,l.kt)("td",{parentName:"tr",align:null},".A.."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"MACB (Modification, Access, Change, Birth) group representation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"suser"),(0,l.kt)("td",{parentName:"tr",align:null},"nromanoff"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"User associated with the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"EC2AMAZ-T80EJE1"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Host name associated with the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Field in log2timeline CSV.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filename_stripped"),(0,l.kt)("td",{parentName:"tr",align:null},"Users nromanoff NTUSER.DAT"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the file associated with this event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inode"),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'The "inode" attribute if present in the event data, otherwise derived from the file system identifier (such as inode, MFT entry) in the path specification.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"notes"),(0,l.kt)("td",{parentName:"tr",align:null},"This is something that should be further investigated."),(0,l.kt)("td",{parentName:"tr",align:null},"Union[str, List[Dict","[str, Any]","]]"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of notes the user has added to his event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"winreg/userassist"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extra"),(0,l.kt)("td",{parentName:"tr",align:null},"file_size: 5760; file_system_type: OS; is_allocated: True"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Longer text, providing more raw data than short.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isFolder"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If this event relates to a folder.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain"),(0,l.kt)("td",{parentName:"tr",align:null},"SHIELDBASE"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Domain associated with the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source_hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"203.78.103.109"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"For network connections, the hostname that it originated from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destination_hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"194.61.24.102"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"For network connections, the destination hostname.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tag"),(0,l.kt)("td",{parentName:"tr",align:null},"Execution"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Tag representing type of event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alarm_description"),(0,l.kt)("td",{parentName:"tr",align:null},"Executable in suspicious location"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the alarm in the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alarm"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If this event has an alarm associated with it.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"executed_process"),(0,l.kt)("td",{parentName:"tr",align:null},"C:/Users/Tdungan/AppData/Local/Temp/ install_reader10_en_air_gtbd_aih.exe"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Where we detect a process execution, the path of the executed file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file_access"),(0,l.kt)("td",{parentName:"tr",align:null},"Windows Explorer.lnk"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"How the file was accessed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"super_short"),(0,l.kt)("td",{parentName:"tr",align:null},"A Process Was Executed"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Super short text providing summary of event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"process_cwd"),(0,l.kt)("td",{parentName:"tr",align:null},"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"For memory evidence items, current working directory of event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"process_arguments"),(0,l.kt)("td",{parentName:"tr",align:null},"/sbin/dhclient -q -lf /var/lib/dhclient/dhclient--eth0.lease -pf /var/run/dhclient-eth0.pid eth0"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"For memory evidence items, command line arguments from event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source_port"),(0,l.kt)("td",{parentName:"tr",align:null},"443"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"For memory evidence items, port of the source address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destination_port"),(0,l.kt)("td",{parentName:"tr",align:null},"443"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"For memory evidence items, port of the destination address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eventId"),(0,l.kt)("td",{parentName:"tr",align:null},"nEqI5nwBOI5t76pr_Z6g"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"ID relating to the event generated in Cado Response.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"evidence_name"),(0,l.kt)("td",{parentName:"tr",align:null},"import_test.dd"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the evidence item imported into Cado Response.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query_suggestions"),(0,l.kt)("td",{parentName:"tr",align:null},"[{'str_detected': 'install_reader10_en_air_gtbd_aih.exe', 'url': '?query\\=install_reader10_en_air_gtbd_aih.exe'}]"),(0,l.kt)("td",{parentName:"tr",align:null},"List[Dict","[str, Any]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"List of suggestions as to what to query next.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alarm_help_text"),(0,l.kt)("td",{parentName:"tr",align:null},"Review the malware analysis playbook for advice on how to identify and respond to the malware."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Information to help the user undertstand what the alarm is about and how to respond.")))))}u.isMDXComponent=!0},9844:function(t,e,n){e.Z=n.p+"assets/images/siem-settings-ee4ec6b68571a51acac62e2b22a9879b.png"}}]);