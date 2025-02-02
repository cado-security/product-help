"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1580],{36349:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=n(74848),t=n(28453);const i={title:"Script operation",hide_title:!0,sidebar_position:8},r="How does the Cado Host deployment script operate?",c={id:"cado/discovery-import/cado-host/script-operation",title:"Script operation",description:"The Cado Host script is used to download, execute, and clean up the Cado Host binary from a system.",source:"@site/docs/cado/discovery-import/cado-host/script-operation.md",sourceDirName:"cado/discovery-import/cado-host",slug:"/cado/discovery-import/cado-host/script-operation",permalink:"/cado/discovery-import/cado-host/script-operation",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/cado-host/script-operation.md",tags:[],version:"current",lastUpdatedAt:1738502359,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:8,frontMatter:{title:"Script operation",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Upload single file",permalink:"/cado/discovery-import/cado-host/manual-upload"},next:{title:"Security",permalink:"/cado/discovery-import/cado-host/security"}},d={},a=[{value:"Summary of Key Steps:",id:"summary-of-key-steps",level:3},{value:"Script Breakdown",id:"script-breakdown",level:3},{value:"Description of the Encoded JSON Object:",id:"description-of-the-encoded-json-object",level:3}];function l(e){const s={br:"br",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"how-does-the-cado-host-deployment-script-operate",children:"How does the Cado Host deployment script operate?"}),"\n",(0,o.jsx)(s.p,{children:"The Cado Host script is used to download, execute, and clean up the Cado Host binary from a system.\nBelow is a breakdown of how the script works for Linux - the script is similiar in function for Windows and MacOS."}),"\n",(0,o.jsx)(s.h3,{id:"summary-of-key-steps",children:"Summary of Key Steps:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Directory creation"}),": A temporary directory is created for storing the Cado Host binary."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Download handling"}),": The script checks if either ",(0,o.jsx)(s.code,{children:"curl"})," or ",(0,o.jsx)(s.code,{children:"wget"})," is installed and uses one to download the Cado Host binary."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Download verification"}),": After downloading, the script verifies that the binary exists."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Execution of Cado Host"}),": The binary is given executable permissions and run with specific options."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Clean-up"}),": After running, the script removes the temporary directory to clean up."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"script-breakdown",children:"Script Breakdown"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"mkdir -p /tmp/cado-host-67c03a16\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Creates a temporary directory"}),":",(0,o.jsx)(s.br,{}),"\n","The script starts by creating a directory named ",(0,o.jsx)(s.code,{children:"/tmp/cado-host-67c03a16"}),". This directory is used to store the downloaded Cado Host binary. The ",(0,o.jsx)(s.code,{children:"-p"})," option ensures no error is thrown if the directory already exists.\nThe end of the directory is a random identifier to avoid conflicts."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"if command -v curl > /dev/null\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsxs)(s.strong,{children:["Checks for ",(0,o.jsx)(s.code,{children:"curl"})," availability"]}),":",(0,o.jsx)(s.br,{}),"\n","The script checks whether the ",(0,o.jsx)(s.code,{children:"curl"})," command is available on the system by verifying if it can return a version without error. This is done by checking if the command exists (",(0,o.jsx)(s.code,{children:"command -v curl"}),"), and if it does, the script proceeds to use ",(0,o.jsx)(s.code,{children:"curl"})," for downloading."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"then sudo curl -s https://cado-public.s3-accelerate.amazonaws.com/cado-host/$version/linux/cado-host --output /tmp/cado-host-67c03a16/cado-host\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsxs)(s.strong,{children:["Downloads Cado Host using ",(0,o.jsx)(s.code,{children:"curl"})]}),":",(0,o.jsx)(s.br,{}),"\n","If ",(0,o.jsx)(s.code,{children:"curl"})," is available, it silently (",(0,o.jsx)(s.code,{children:"-s"}),") downloads the Cado Host binary from the provided URL and stores it in the newly created directory. The file is saved as ",(0,o.jsx)(s.code,{children:"/tmp/cado-host-67c03a16/cado-host"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"elif command -v wget > /dev/null\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsxs)(s.strong,{children:["Checks for ",(0,o.jsx)(s.code,{children:"wget"})," availability"]}),":",(0,o.jsx)(s.br,{}),"\n","If ",(0,o.jsx)(s.code,{children:"curl"})," is not found, the script checks if ",(0,o.jsx)(s.code,{children:"wget"})," is installed on the system."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"then sudo wget -q --output-document /tmp/cado-host-67c03a16/cado-host https://cado-public.s3-accelerate.amazonaws.com/cado-host/$version/linux/cado-host\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsxs)(s.strong,{children:["Downloads Cado Host using ",(0,o.jsx)(s.code,{children:"wget"})]}),":",(0,o.jsx)(s.br,{}),"\n","If ",(0,o.jsx)(s.code,{children:"wget"})," is available, it silently (",(0,o.jsx)(s.code,{children:"-q"}),") downloads the Cado Host binary from the same URL, storing it in the ",(0,o.jsx)(s.code,{children:"/tmp/cado-host-67c03a16/"})," directory."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:'else echo "Cado Host requires curl or wget for unattended mode."; exit 1;\n'})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsxs)(s.strong,{children:["Handles missing ",(0,o.jsx)(s.code,{children:"curl"})," and ",(0,o.jsx)(s.code,{children:"wget"})]}),":",(0,o.jsx)(s.br,{}),"\n","If neither ",(0,o.jsx)(s.code,{children:"curl"})," nor ",(0,o.jsx)(s.code,{children:"wget"})," is available on the system, the script outputs an error message, and the script exits with a status code of ",(0,o.jsx)(s.code,{children:"1"}),", indicating failure."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"fi\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"End of conditional block"}),":",(0,o.jsx)(s.br,{}),"\n","This marks the end of the block that checks for ",(0,o.jsx)(s.code,{children:"curl"})," or ",(0,o.jsx)(s.code,{children:"wget"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:'if [ ! -f /tmp/cado-host-67c03a16/cado-host ]; then\n  echo "Cado Host failed to download, check if the machine has an active network connection."; exit 1;\nfi\n'})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Validates the download"}),":",(0,o.jsx)(s.br,{}),"\n","This step checks if the Cado Host binary was successfully downloaded. If the binary is not found in the ",(0,o.jsx)(s.code,{children:"/tmp/cado-host-67c03a16/"})," directory, the script prints an error message about network issues and exits."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd /tmp/cado-host-67c03a16/\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Changes the working directory"}),":",(0,o.jsx)(s.br,{}),"\n","The script changes the current working directory to ",(0,o.jsx)(s.code,{children:"/tmp/cado-host-67c03a16/"}),", where the downloaded binary resides."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"sudo chmod +x ./cado-host\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Makes the binary executable"}),":",(0,o.jsx)(s.br,{}),"\n","The script changes the permissions of the ",(0,o.jsx)(s.code,{children:"cado-host"})," binary to make it executable using the ",(0,o.jsx)(s.code,{children:"chmod +x"})," command."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:'sudo ./cado-host --presigned_data $pre-signed-data --skip_linux_memory || echo "Cado Host has failed. For troubleshooting steps, pass the --verbose and --no_cleanup flags, or visit https://docs.cadosecurity.com/cado-host/deploy#considerations, or contact support@cadosecurity.com."\n'})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Runs the Cado Host binary and removes the collected archive"}),":",(0,o.jsx)(s.br,{}),"\n","The script executes the ",(0,o.jsx)(s.code,{children:"cado-host"})," binary with two options: ",(0,o.jsx)(s.code,{children:"--presigned_data"})," and ",(0,o.jsx)(s.code,{children:"--skip_linux_memory"}),", which skips memory data collection on Linux.",(0,o.jsx)(s.br,{}),"\n","If the execution fails, it displays an error message with troubleshooting instructions."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Note the --no_cleanup flag is not passed, so the script will clean up after the binary has run by deleting the collected archive.\nIf this flag is passed, or pre-signed data is not given to Cado Host, the script will not delete the collected archive."}),"\n",(0,o.jsx)(s.p,{children:"The pre-signed data is a JSON object that contains information required to upload data to a cloud storage provider. An example of this JSON object is as follows:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n  "url": "https://s3.us-west-2.amazonaws.com/my-cado-bucket",\n  "fields": {\n    "key": "cado-collector/project-401/cado-host/2024/10/11/${filename}",\n    "x-amz-algorithm": "AWS4-HMAC-SHA256",\n    "x-amz-credential": "AAA/us-west-2/s3/aws4_request",\n    "x-amz-date": "20241011T163440Z",\n    "x-amz-security-token": "AAA"\n  },\n  "policy": "AAA"\n  },\n  "bucket": "my-cado-bucket",\n  "folder": "cado-collector/project-401/cado-host/2024/10/11",\n  "provider": "aws"\n}\n'})}),"\n",(0,o.jsx)(s.h3,{id:"description-of-the-encoded-json-object",children:"Description of the Encoded JSON Object:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"URL"}),": This points to an Amazon S3 URL where data might be uploaded or stored."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Fields"}),":","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"key"}),": Represents the path or key where the file will be stored, with a placeholder for ",(0,o.jsx)(s.code,{children:"${filename}"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"x-amz-algorithm"}),": Specifies the AWS signature algorithm being used, ",(0,o.jsx)(s.code,{children:"AWS4-HMAC-SHA256"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"x-amz-credential"}),": Contains the AWS credential used to sign the request, including the access key and date information."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"x-amz-date"}),": The timestamp of when the request was made, formatted as ",(0,o.jsx)(s.code,{children:"20241011T163440Z"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"x-amz-security-token"}),": This is a temporary security token used for authentication."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Policy"}),": The ",(0,o.jsx)(s.code,{children:"policy"})," field contains a base64-encoded policy document such as this, to securely scope the upload operation:"]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'{"expiration": "2024-10-12T16:34:40Z", "conditions": [["starts-with", "$key", "cado-collector/project-401/cado-host/2024/10/11"], {"bucket": "my-cado-bucket"}, ["starts-with", "$key", "cado-collector/project-401/cado-host/2024/10/11/"], {"x-amz-algorithm": "AWS4-HMAC-SHA256"}, {"x-amz-credential": "AAA"}, {"x-amz-date": "20241011T163440Z"}, {"x-amz-security-token": "AAA"}]}\n'})}),"\n",(0,o.jsxs)(s.ol,{start:"4",children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Bucket"}),": Specifies the S3 bucket name, ",(0,o.jsx)(s.code,{children:"my-cado-bucket"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Folder"}),": The folder path within the bucket where the file is being stored."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Provider"}),": The cloud provider for this storage operation, which is ",(0,o.jsx)(s.code,{children:"AWS"})," in this case."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"This JSON is part of a typical AWS S3 presigned URL setup, often used to allow file uploads to S3 with specified credentials and conditions."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"sudo rm -r /tmp/cado-host-67c03a16\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Cleans up temporary files"}),":",(0,o.jsx)(s.br,{}),"\n","Once the binary has run, the script removes the temporary directory ",(0,o.jsx)(s.code,{children:"/tmp/cado-host-67c03a16"})," and its contents to clean up any residual files."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"exit 0\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Exits the script"}),":",(0,o.jsx)(s.br,{}),"\n","Finally, the script exits with a status code of ",(0,o.jsx)(s.code,{children:"0"}),", indicating successful completion."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var o=n(96540);const t={},i=o.createContext(t);function r(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);