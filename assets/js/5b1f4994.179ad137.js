"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2056],{2882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=n(5893),s=n(1151);const o={title:"How to export to SIEM",hide_title:!0,sidebar_position:3},r="How to Export to SIEM",d={id:"cado/integrations/siem",title:"How to export to SIEM",description:"Security Information and Event Management (SIEM) tools provide real-time analysis of security events from applications and network devices. SIEM systems are essential for SecOps teams to correlate events, analyze logs across different systems, and manage security risks efficiently. By integrating the Cado platform with SIEM, you can leverage the power of both SIEM and Cado\u2019s unique cloud-based forensic capabilities.",source:"@site/docs/cado/integrations/siem.md",sourceDirName:"cado/integrations",slug:"/cado/integrations/siem",permalink:"/cado/integrations/siem",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/integrations/siem.md",tags:[],version:"current",lastUpdatedAt:1731344277,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:3,frontMatter:{title:"How to export to SIEM",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Export to on-premise forensic tools",permalink:"/cado/integrations/forensic-tools"},next:{title:"Webhooks",permalink:"/cado/integrations/webhooks"}},a={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Cado CEF Standard",id:"cado-cef-standard",level:2},{value:"CEF Extensions",id:"cef-extensions",level:3},{value:"CadoJson Format",id:"cadojson-format",level:2},{value:"Log Analysis Considerations between SIEM &amp; Cado",id:"log-analysis-considerations-between-siem--cado",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-export-to-siem",children:"How to Export to SIEM"}),"\n",(0,i.jsx)(t.p,{children:"Security Information and Event Management (SIEM) tools provide real-time analysis of security events from applications and network devices. SIEM systems are essential for SecOps teams to correlate events, analyze logs across different systems, and manage security risks efficiently. By integrating the Cado platform with SIEM, you can leverage the power of both SIEM and Cado\u2019s unique cloud-based forensic capabilities."}),"\n",(0,i.jsx)(t.p,{children:"Cado converts the processed timeline into two formats:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"CEF (Common Event Format)"}),": A widely recognized format for SIEM systems"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"CadoJson"}),": A custom JSON format optimized for certain SIEM systems like Splunk and Sentinel"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Both formats are uploaded to the AWS S3 bucket and folder of your choice, and you can configure your SIEM system to automatically import these files."}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.p,{children:"To begin exporting timelines to your SIEM:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Enable the SIEM integration by navigating to ",(0,i.jsx)(t.strong,{children:"Settings -> Platform Settings -> Integrations -> SIEM"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Set the desired S3 bucket and folder where the timeline files will be exported."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SIEM Settings in Cado",src:n(5681).Z+"",width:"1221",height:"967"})}),"\n",(0,i.jsx)(t.p,{children:"Once enabled, whenever you import evidence into Cado, the timeline will automatically be converted and uploaded to the specified S3 location. You will need to configure your SIEM to monitor this folder for new files and import them automatically."}),"\n",(0,i.jsx)(t.h2,{id:"cado-cef-standard",children:"Cado CEF Standard"}),"\n",(0,i.jsx)(t.p,{children:"Below is an example of a CEF log generated by Cado:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"CEF:0|CadoSecurity|CadoResponse|1.0.2|0|Content Modification Time|10|alarm=True evidence_id=2 evidence_name=aws_compromise.zip macb=M... source=FILE eventTime=1595194940 filePath=/tmp/file.txt eventId=Q5FBqHwBX9dvp1T5IsHT msg=Malicious File Detected: cryptomining_malware_wannamine\n"})}),"\n",(0,i.jsx)(t.p,{children:"The CEF log follows this standard format:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"CEF:0|CadoSecurity|CadoResponse|Version|Signature ID|Name|Severity|Extension"})}),"\n",(0,i.jsx)(t.p,{children:'The "Extension" part contains key-value pairs with additional fields, as detailed below.'}),"\n",(0,i.jsx)(t.h3,{id:"cef-extensions",children:"CEF Extensions"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"EXTENSION FIELD"}),(0,i.jsx)(t.th,{children:"EXAMPLE VALUE"}),(0,i.jsx)(t.th,{children:"TYPE"}),(0,i.jsx)(t.th,{children:"DESCRIPTION"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"eventTime"}),(0,i.jsx)(t.td,{children:"890430600"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Unix timestamp of the event."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"source"}),(0,i.jsx)(t.td,{children:"REG"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Subtype of the event source."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sourcetype"}),(0,i.jsx)(t.td,{children:"LOG"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Type of file or data producing the event."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"type"}),(0,i.jsx)(t.td,{children:"Content Modification Time"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Event type (e.g., Last Executed Time, Content Modification Time)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"filePath"}),(0,i.jsx)(t.td,{children:"/Users/nromanoff/NTUSER.DAT"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Path of the file linked to this event."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"short"}),(0,i.jsx)(t.td,{children:"Executable in suspicious location"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Summary of the event."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"evidence_id"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"ID of the evidence item in Cado."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"alarm_severity"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Event severity (Malicious: 1, Suspicious: 3, Other: 10)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"macb"}),(0,i.jsx)(t.td,{children:".A.."}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"MACB (Modification, Access, Change, Birth) representation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"host"}),(0,i.jsx)(t.td,{children:"EC2AMAZ-T80EJE1"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Hostname linked to the event."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"inode"}),(0,i.jsx)(t.td,{children:"123"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Inode or file system identifier."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"alarm"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Whether this event has an associated alarm."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sha256"}),(0,i.jsx)(t.td,{children:"9473976..."}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"SHA-256 hash of the related file."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"cadojson-format",children:"CadoJson Format"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"CadoJson"})," format contains the same fields as CEF, represented in JSON structure. Here is an example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n\t"macb": "M...",\n\t"source": "REG",\n\t"sourcetype": "Registry Key",\n\t"type": "Content Modification Time",\n\t"host": "-",\n\t"short": "[HKEY_CURRENT_USER/AppEvents/Schemes/Apps/.Default/Notification.Proximity] (empty)",\n\t"inode": "-",\n\t"sha256": "9473976b2769337ca9a7243bf1ceddb3335f9551e113240ebb0c53ae789878d5",\n\t"eventTime": 1610559005,\n\t"filePath": "/NTUSER.DAT"\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"log-analysis-considerations-between-siem--cado",children:"Log Analysis Considerations between SIEM & Cado"}),"\n",(0,i.jsxs)(t.p,{children:["For more information about how SIEM logs compare to Cado's forensic capabilities, refer to ",(0,i.jsx)(t.a,{href:"/cado/discovery-import/data-types/logs#log-analysis-considerations",children:"this guide"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5681:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/siem-settings-72e698a1df218c4294f1588602513965.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var i=n(7294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);