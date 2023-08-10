"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1186],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(n),g=r,k=u["".concat(d,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6397:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"SIEM",hide_title:!0,sidebar_position:3},i="SIEM Integration",o={unversionedId:"cado-response/manage/integrations/siem",id:"cado-response/manage/integrations/siem",title:"SIEM",description:"SIEM (Security Information and Event Management) is a tool that provides real-time analysis of security events generated by applications and network hardware - an essential capability for SecOps teams to correlate events and logs from different systems and manage risks more wisely. The integration with the Cado platform leverages the power of SIEM systems with Cado\u2019s unique forensics value in the cloud.",source:"@site/docs/cado-response/manage/integrations/siem.md",sourceDirName:"cado-response/manage/integrations",slug:"/cado-response/manage/integrations/siem",permalink:"/cado-response/manage/integrations/siem",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/integrations/siem.md",tags:[],version:"current",lastUpdatedAt:1691672950,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:3,frontMatter:{title:"SIEM",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"GuardDuty via Lambda",permalink:"/cado-response/manage/integrations/aws-lambda"},next:{title:"Tines",permalink:"/cado-response/manage/integrations/soar/tines"}},d={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Extensions",id:"extensions",level:2}],p={toc:s};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"siem-integration"},"SIEM Integration"),(0,r.kt)("p",null,"SIEM (Security Information and Event Management) is a tool that provides real-time analysis of security events generated by applications and network hardware - an essential capability for SecOps teams to correlate events and logs from different systems and manage risks more wisely. The integration with the Cado platform leverages the power of SIEM systems with Cado\u2019s unique forensics value in the cloud."),(0,r.kt)("p",null,"The processed timeline from Cado will be converted to a standard format (CEF) so it can be universally read by SIEM systems. It will also be exported in Cado's custom Json format (CadoJson) which is better parsed by some SIEMs such as Splunk and Sentinel."),(0,r.kt)("p",null,"The CEF and JSON file will then be uploaded to your AWS S3 bucket and folder of choice."),(0,r.kt)("p",null,"You can configure your SIEM system to automatically check for new files in the S3 bucket and to add them to your SIEM system automatically."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Before you can export the timeline you need to enable SIEM integration found under ",(0,r.kt)("strong",{parentName:"p"},"Settings -> Platform Settings -> Integrations -> SIEM"),". After it is enabled you will be asked to set the S3 bucket and S3 folder you wish for the timeline to be exported to."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SIEM Settings in Cado",src:n(5681).Z,width:"1221",height:"967"})),(0,r.kt)("p",null,"When enabled whenever you import an evidence item, the timeline will be automatically converted and uploaded to S3.\nYou then need to configure your SIEM system to watch the folder for any new files uploaded so they can be automatically added to your SIEM."),(0,r.kt)("h1",{id:"cado-cef-standard"},"Cado CEF Standard"),(0,r.kt)("p",null,"This is a sample CEF log that can be generated by Cado:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CEF:0|CadoSecurity|CadoResponse|1.0.2|0|Content Modification Time|10|alarm=True evidence_id=2 evidence_name=aws_compromise.zip macb=M... source=FILE eventTime=1595194940 filePath=/tmp/file.txt eventId=Q5FBqHwBX9dvp1T5IsHT msg=Malicious File Detected: cryptomining_malware_wannamine")),(0,r.kt)("p",null,"The log follows the below standard:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CEF:0|CadoSecurity|CadoResponse|Version|Signature ID|Name|Severity|Extension")),(0,r.kt)("p",null,"The extension part of the message is a placeholder for additional fields that are represented by key-value pairs. The keys are part of a predefined set and are outlined below."),(0,r.kt)("h2",{id:"extensions"},"Extensions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"EXTENSION FIELD"),(0,r.kt)("th",{parentName:"tr",align:null},"EXAMPLE VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"FIELD DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventTime"),(0,r.kt)("td",{parentName:"tr",align:null},"890430600"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Unix timestamp of event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"REG"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"More specific subtype of source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourcetype"),(0,r.kt)("td",{parentName:"tr",align:null},"LOG"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the file or data that produced this event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Last Time Executed"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"; separated list of event types, e.g. Last Executed Time, Updated Time, Content Modification Time, Creation Time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filePath"),(0,r.kt)("td",{parentName:"tr",align:null},"/Users/nromanoff/NTUSER.DAT"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the file associated with this event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short"),(0,r.kt)("td",{parentName:"tr",align:null},"Executable in suspicious location"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Short text providing additional data from raw event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"evidence_id"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of evidence item in Response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alarm_severity"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Severity of event based on detections. Malicious 1, Suspicious 3, Other 10.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parent"),(0,r.kt)("td",{parentName:"tr",align:null},"/Users/nromanoff"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the file associated with this event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"macb"),(0,r.kt)("td",{parentName:"tr",align:null},".A.."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"MACB (Modification, Access, Change, Birth) group representation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"suser"),(0,r.kt)("td",{parentName:"tr",align:null},"nromanoff"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"User associated with the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"EC2AMAZ-T80EJE1"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Host name associated with the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Field in log2timeline CSV.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filename_stripped"),(0,r.kt)("td",{parentName:"tr",align:null},"Users nromanoff NTUSER.DAT"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the file associated with this event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inode"),(0,r.kt)("td",{parentName:"tr",align:null},"123"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'The "inode" attribute if present in the event data, otherwise derived from the file system identifier (such as inode, MFT entry) in the path specification.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notes"),(0,r.kt)("td",{parentName:"tr",align:null},"This is something that should be further investigated."),(0,r.kt)("td",{parentName:"tr",align:null},"Union[str, List[Dict","[str, Any]","]]"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of notes the user has added to his event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},"winreg/userassist"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extra"),(0,r.kt)("td",{parentName:"tr",align:null},"file_size: 5760; file_system_type: OS; is_allocated: True"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Longer text, providing more raw data than short.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isFolder"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If this event relates to a folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain"),(0,r.kt)("td",{parentName:"tr",align:null},"SHIELDBASE"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Domain associated with the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source_hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"203.78.103.109"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"For network connections, the hostname that it originated from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"destination_hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"194.61.24.102"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"For network connections, the destination hostname.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Execution"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag representing type of event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alarm_description"),(0,r.kt)("td",{parentName:"tr",align:null},"Executable in suspicious location"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the alarm in the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alarm"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If this event has an alarm associated with it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executed_process"),(0,r.kt)("td",{parentName:"tr",align:null},"C:/Users/Tdungan/AppData/Local/Temp/ install_reader10_en_air_gtbd_aih.exe"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Where we detect a process execution, the path of the executed file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_access"),(0,r.kt)("td",{parentName:"tr",align:null},"Windows Explorer.lnk"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"How the file was accessed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"super_short"),(0,r.kt)("td",{parentName:"tr",align:null},"A Process Was Executed"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Super short text providing summary of event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"process_cwd"),(0,r.kt)("td",{parentName:"tr",align:null},"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"For memory evidence items, current working directory of event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"process_arguments"),(0,r.kt)("td",{parentName:"tr",align:null},"/sbin/dhclient -q -lf /var/lib/dhclient/dhclient--eth0.lease -pf /var/run/dhclient-eth0.pid eth0"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"For memory evidence items, command line arguments from event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source_port"),(0,r.kt)("td",{parentName:"tr",align:null},"443"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"For memory evidence items, port of the source address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"destination_port"),(0,r.kt)("td",{parentName:"tr",align:null},"443"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"For memory evidence items, port of the destination address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventId"),(0,r.kt)("td",{parentName:"tr",align:null},"nEqI5nwBOI5t76pr_Z6g"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"ID relating to the event generated in Cado Response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"evidence_name"),(0,r.kt)("td",{parentName:"tr",align:null},"import_test.dd"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the evidence item imported into Cado Response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query_suggestions"),(0,r.kt)("td",{parentName:"tr",align:null},"[{'str_detected': 'install_reader10_en_air_gtbd_aih.exe', 'url': '?query\\=install_reader10_en_air_gtbd_aih.exe'}]"),(0,r.kt)("td",{parentName:"tr",align:null},"List[Dict","[str, Any]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of suggestions as to what to query next.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alarm_help_text"),(0,r.kt)("td",{parentName:"tr",align:null},"Review the malware analysis playbook for advice on how to identify and respond to the malware."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Information to help the user undertstand what the alarm is about and how to respond.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sha256"),(0,r.kt)("td",{parentName:"tr",align:null},"9473976b2769337ca9a7243bf1ceddb3335f9551e113240ebb0c53ae789878d5"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The hash of the file originating the event.")))),(0,r.kt)("h1",{id:"cadojson-format"},"CadoJson Format"),(0,r.kt)("p",null,"The CadoJson format represents the same fields that Cado Response uses internally.\nThe fields are the same as described above for CEF."),(0,r.kt)("p",null,"An example is provided below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "macb": "M...",\n    "source": "REG",\n    "sourcetype": "Registry Key",\n    "type": "Content Modification Time",\n    "user": null,\n    "host": "-",\n    "short": "[HKEY_CURRENT_USER/AppEvents/Schemes/Apps/.Default/Notification.Proximity] (empty)",\n    "inode": "-",\n    "notes": "-",\n    "format": "winreg/winreg_default",\n    "extra": "",\n    "sha256": "9473976b2769337ca9a7243bf1ceddb3335f9551e113240ebb0c53ae789878d5",\n    "tag": null,\n    "eventTime": 1610559005,\n    "filePath": "/NTUSER.DAT"\n}\n')))}m.isMDXComponent=!0},5681:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/siem-settings-72e698a1df218c4294f1588602513965.png"}}]);