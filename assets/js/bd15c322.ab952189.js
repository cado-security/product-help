"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8805],{12730:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>t});var i=n(74848),o=n(28453);const l={title:"Command line parameters",hide_title:!0,sidebar_position:7},r="Cado Host CLI Documentation",c={id:"cado/discovery-import/cado-host/cli",title:"Command line parameters",description:"Usage",source:"@site/docs/cado/discovery-import/cado-host/cli.md",sourceDirName:"cado/discovery-import/cado-host",slug:"/cado/discovery-import/cado-host/cli",permalink:"/cado/discovery-import/cado-host/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/cado-host/cli.md",tags:[],version:"current",lastUpdatedAt:1744284627,formattedLastUpdatedAt:"Apr 10, 2025",sidebarPosition:7,frontMatter:{title:"Command line parameters",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Custom location for Cado Host",permalink:"/cado/discovery-import/cado-host/custom-locations"},next:{title:"Upload single file",permalink:"/cado/discovery-import/cado-host/manual-upload"}},d={},t=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3},{value:"Commands",id:"commands",level:2},{value:"<code>version</code>",id:"version",level:3},{value:"<code>capture</code>",id:"capture",level:3},{value:"Options",id:"options-1",level:4},{value:"Kubernetes Specific Options",id:"kubernetes-specific-options",level:4},{value:"Windows Specific Options",id:"windows-specific-options",level:4},{value:"Linux Specific Options",id:"linux-specific-options",level:4},{value:"<code>upload</code>",id:"upload",level:3},{value:"Options",id:"options-2",level:4}];function a(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"cado-host-cli-documentation",children:"Cado Host CLI Documentation"}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"cado-host [-h] [--verbose] [--verbose_network] {version,capture,upload} ...\n"})}),"\n",(0,i.jsx)(s.h3,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-h, --help"}),(0,i.jsx)(s.br,{}),"\n","Show the help message and exits."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--verbose"}),(0,i.jsx)(s.br,{}),"\n","Enable verbose output."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--verbose_network"}),(0,i.jsx)(s.br,{}),"\n","Enable verbose network logging."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"commands",children:"Commands"}),"\n",(0,i.jsx)(s.h3,{id:"version",children:(0,i.jsx)(s.code,{children:"version"})}),"\n",(0,i.jsx)(s.p,{children:"Returns the current version of Cado Host."}),"\n",(0,i.jsx)(s.h3,{id:"capture",children:(0,i.jsx)(s.code,{children:"capture"})}),"\n",(0,i.jsx)(s.p,{children:"Capture and triage files based on chosen configuration."}),"\n",(0,i.jsx)(s.h4,{id:"options-1",children:"Options"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"-c {default,light,max}, --collection_mode {default,light,max}"}),(0,i.jsx)(s.br,{}),"\n","Selects the collection mode which changes how Cado Host will search for files:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"default"}),(0,i.jsx)(s.br,{}),"\n","Searches and collects the default set files of files as outlined ",(0,i.jsx)(s.a,{href:"/cado/discovery-import/cado-host/artifacts",children:"here"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"light"}),(0,i.jsx)(s.br,{}),"\n","Searches and collects files smaller than 10MB."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"max"}),(0,i.jsx)(s.br,{}),"\n","Searches and collects a larger set of files regardless of size. This will slow capture down significantly."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"-a [ADDITIONAL_FILES ...], --additional_files [ADDITIONAL_FILES ...]"}),(0,i.jsx)(s.br,{}),"\n","List multiple files or folders to collect, separated by spaces."]}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," Folders should NOT have trailing slashes. File and folder paths must be separated by spaces and enclosed in double quotes. For example:"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-console",children:'cado-host.exe capture --additional_files "C:\\tools\\secretfile.txt" "C:\\SuperSecretFolder"\n'})})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"-ap ADDITIONAL_FILES_PATH, --additional_files_path ADDITIONAL_FILES_PATH"}),(0,i.jsx)(s.br,{}),"\n","Path to a local file containing a list of files or folders to collect, one per line."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--only_additional_files"}),(0,i.jsx)(s.br,{}),"\n","Only collect files and folders specified in ",(0,i.jsx)(s.code,{children:"--additional_files"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--groups [GROUPS ...]"}),(0,i.jsx)(s.br,{}),"\n","Collect a specific group of files. Use ",(0,i.jsx)(s.code,{children:"--list_groups"})," to see available groups. If no groups are specified, all groups will be collected."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--list_groups"}),(0,i.jsx)(s.br,{}),"\n","List all available groups of files that can be collected."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"-o OUTPUT_PATH, --output_path OUTPUT_PATH"}),(0,i.jsx)(s.br,{}),"\n","Path where Cado Host will save the collection."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"kubernetes-specific-options",children:"Kubernetes Specific Options"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--target_container TARGET_CONTAINER"}),(0,i.jsx)(s.br,{}),"\n","Selects a target container in a Kubernetes cluster."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--skip_root_check"}),(0,i.jsx)(s.br,{}),"\n","Skips the root permissions check when collecting a Kubernetes container."]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," This should only be used when you are sure that the ",(0,i.jsx)(s.code,{children:"sysadmin"})," profile is available. See the ",(0,i.jsx)(s.a,{href:"/cado/discovery-import/kubernetes#root-access",children:"Kubernetes docs"})," for more information."]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"windows-specific-options",children:"Windows Specific Options"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--dd DRIVE, --default_drive DRIVE"}),(0,i.jsx)(s.br,{}),"\n","Specifies the default drive on a Windows system."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--include_memory"}),(0,i.jsx)(s.br,{}),"\n","Acquires process memory, this can be slow on Windows systems as it will acquire process memory regardless of size."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"linux-specific-options",children:"Linux Specific Options"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--skip_memory"}),(0,i.jsx)(s.br,{}),"\n","Skips memory collection for a faster capture."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--include_large_memory"}),(0,i.jsx)(s.br,{}),"\n","Includes open files and memory even if it exceeds 1MB in size. This will slow capture down significantly."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"upload",children:(0,i.jsx)(s.code,{children:"upload"})}),"\n",(0,i.jsxs)(s.p,{children:["Upload an existing Cado Host capture file, or other files. ",(0,i.jsx)(s.strong,{children:"This will clean up the uploaded resource locally by default."})]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["When using ",(0,i.jsx)(s.code,{children:"cado-host upload"})," to upload single files to the Cado platform, please use ",(0,i.jsx)(s.code,{children:"--no_cleanup"})," to ensure Cado Host doesn't delete the file after upload."]})}),"\n",(0,i.jsx)(s.h4,{id:"options-2",children:"Options"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--presigned_data PRESIGNED_DATA"}),(0,i.jsx)(s.br,{}),"\n","Encoded upload credentials generated by the Cado platform."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--capture_path CAPTURE_PATH"}),(0,i.jsx)(s.br,{}),"\n","Path of the file to upload and import into the Cado Platform."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--no_cleanup"}),(0,i.jsx)(s.br,{}),"\n","Disable self-cleanup after triage upload."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"--skip_ssl_verify"}),(0,i.jsx)(s.br,{}),"\n","Explicitly allow Cado Host to skip SSL verification when uploading to cloud storage. ",(0,i.jsx)(s.strong,{children:"This is insecure."})]}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," This should only be used as a last resort, useful when proxies in enterprise deployments require the use of a custom self-signed certificate."]})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var i=n(96540);const o={},l=i.createContext(o);function r(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);