"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5650],{1395:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=o(5893),a=o(1151);const i={title:"Command Line Parameters",hide_title:!0,sidebar_position:7},s=void 0,l={id:"cado-host/cli",title:"Command Line Parameters",description:"Command Line Parameters",source:"@site/docs/cado-host/cli.md",sourceDirName:"cado-host",slug:"/cado-host/cli",permalink:"/cado-host/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/cli.md",tags:[],version:"current",lastUpdatedAt:1725958191,formattedLastUpdatedAt:"Sep 10, 2024",sidebarPosition:7,frontMatter:{title:"Command Line Parameters",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Credentials",permalink:"/cado-host/google-credentials"},next:{title:"Manual Uploads",permalink:"/cado-host/manual-upload"}},r={},d=[{value:"Command Line Parameters",id:"command-line-parameters",level:3},{value:"Example Command Line",id:"example-command-line",level:3}];function c(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"command-line-parameters",children:"Command Line Parameters"}),"\n",(0,t.jsx)(n.p,{children:"Below are the command line parameters supported by Cado Host."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"usage: cado-host.exe [-h] [--presigned_data PRESIGNED_DATA] [--presigned_url PRESIGNED_URL]\n               [--storage {aws,local,gcp,azure}] [--bucket BUCKET] [--access_key ACCESS_KEY]\n               [--secret_key SECRET_KEY] [--region REGION] [--sas SAS] [-l]\n               [-a ADDITIONAL_FILES [ADDITIONAL_FILES ...]] [-ap ADDITIONAL_FILES_PATH]\n               [--only_additional_files] [--single_file_unzipped SINGLE_FILE_UNZIPPED]\n               [--include_large_varc] [--skip_linux_memory] [--get_windows_memory] [-v]\n               [--verbose] [--verbose_network] [-dd DEFAULT_DRIVE] [-o OUTPUT_PATH]\n               [--no_cleanup] [--dev]\n\noptions:\n  -h, --help            show this help message and exit\n  --presigned_data PRESIGNED_DATA\n                        Encoded upload credentials generated by Cado Response.\n  --presigned_url PRESIGNED_URL\n                        Specify the presigned url you wish to upload files to.\n  --storage {aws,local,gcp,azure}\n  --bucket BUCKET       Bucket to upload files to.\n  --access_key ACCESS_KEY\n                        Access key of your AWS credentials.\n  --secret_key SECRET_KEY\n                        Secret Key of your AWS credentials.\n  --region REGION       AWS Region.\n  --sas SAS             Shared Access Signature that can be used to upload triage/full disk to\n                        an Azure container.\n  -l, --light_mode      Enable light_mode where we only retrieve files 10 MB in size or less.\n  -a ADDITIONAL_FILES [ADDITIONAL_FILES ...], --additional_files ADDITIONAL_FILES [ADDITIONAL_FILES ...]\n                        List multiple files/folders to collect with the space character between\n                        them.\n  -ap ADDITIONAL_FILES_PATH, --additional_files_path ADDITIONAL_FILES_PATH\n                        Path to a local file containing a list of files/folders to collect. One\n                        on each line.\n  --only_additional_files\n                        Only collect files and folders specified in --additional-files.\n  --single_file_unzipped SINGLE_FILE_UNZIPPED\n                        Directly upload a single file to storage and import. Useful as a\n                        command line option for uploading files to Cado Response.\n  --include_large_varc  Include open files and memory even if it exceeds 1MB in size (this can\n                        be slow).\n  --skip_linux_memory   Dont collect memory on Linux. Faster.\n  --get_windows_memory  Acquire Process Memory on Windows systems. Unlike Linux, this is\n                        disabled by default as its slower on Windows. Implicitly applies\n                        --include_large_varc.\n  -v, --version\n  --verbose\n  --verbose_network\n  -dd DEFAULT_DRIVE, --default_drive DEFAULT_DRIVE\n                        Specify the default drive for your system.\n  -o OUTPUT_PATH, --output_path OUTPUT_PATH\n                        Output path if running for local storage.\n  --no_cleanup          Disable cleanup after triage.\n  --dev                 Runs cado host in development mode.\n      \n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-command-line",children:"Example Command Line"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:'cado-host.exe --additional_files "C:\\tools\\secretfile.txt" "C:\\SuperSecretFolder"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Note that folders should NOT have trailing slashes.  Files and folder paths should be delimted by a space and be enclosed in double quotes."})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>s});var t=o(7294);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);