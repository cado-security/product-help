"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9634],{8455:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(5893),i=t(1151);const r={title:"Add cross-account roles in AWS to Cado with the API",hide_title:!0,sidebar_position:5},n="How to add cross-account roles in AWS to Cado with the API",a={id:"cado/deploy/cross/cross-account-creation-api",title:"Add cross-account roles in AWS to Cado with the API",description:"This Python script automates the process of adding AWS roles to the Cado platform. Roles are added via the Cado API, and the script reads the roles from a CSV file, saving them with an alias in the platform. This is useful for managing AWS access credentials across multiple roles in your AWS environment.",source:"@site/docs/cado/deploy/cross/cross-account-creation-api.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/cross-account-creation-api",permalink:"/cado/deploy/cross/cross-account-creation-api",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/cross-account-creation-api.md",tags:[],version:"current",lastUpdatedAt:1731344277,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:5,frontMatter:{title:"Add cross-account roles in AWS to Cado with the API",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Automatically add cross-account roles to Cado with AWS Organizations",permalink:"/cado/deploy/cross/aws-organizations"},next:{title:"Adding AWS accounts to Azure/AWS/GCP via Keys",permalink:"/cado/deploy/cross/adding-aws"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps to Use the Script",id:"steps-to-use-the-script",level:2},{value:"1. Configure API URL and Secret Key",id:"1-configure-api-url-and-secret-key",level:3},{value:"2. Prepare the CSV File",id:"2-prepare-the-csv-file",level:3},{value:"3. Run the Script",id:"3-run-the-script",level:3},{value:"4. Example Script Output",id:"4-example-script-output",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"how-to-add-cross-account-roles-in-aws-to-cado-with-the-api",children:"How to add cross-account roles in AWS to Cado with the API"}),"\n",(0,o.jsx)(s.p,{children:"This Python script automates the process of adding AWS roles to the Cado platform. Roles are added via the Cado API, and the script reads the roles from a CSV file, saving them with an alias in the platform. This is useful for managing AWS access credentials across multiple roles in your AWS environment."}),"\n",(0,o.jsxs)(s.p,{children:["Alternatively you can use ",(0,o.jsx)(s.a,{href:"/cado/deploy/cross/aws-organizations",children:"AWS Organizations"})," to automatically add cross-account roles to Cado."]}),"\n",(0,o.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Python 3.x"}),": Make sure you have Python 3.x installed on your system."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Cado Platform API Access"}),": You will need an API key and the platform URL to interact with the Cado API."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"CSV File of Roles"}),": The roles you wish to add should be stored in a CSV file (explained below)."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Clone the Cado API Examples Repository"}),": Clone the ",(0,o.jsx)(s.a,{href:"https://github.com/cado-security/cado-api-examples/tree/main",children:"Cado API Examples repository"})," to access the script examples/saving_credentials.py ."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"steps-to-use-the-script",children:"Steps to Use the Script"}),"\n",(0,o.jsx)(s.h3,{id:"1-configure-api-url-and-secret-key",children:"1. Configure API URL and Secret Key"}),"\n",(0,o.jsxs)(s.p,{children:["First, you need to set the ",(0,o.jsx)(s.code,{children:"API_URL"})," and ",(0,o.jsx)(s.code,{children:"API_KEY"})," in the ",(0,o.jsx)(s.code,{children:"config.py"})," file. Create this file if it doesn't already exist and ensure it includes the following variables:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-python",children:'# config.py\nAPI_URL = "https://<your-cado-instance-url>"  # Replace with your Cado platform URL\nAPI_KEY = "<your-api-key>"  # Replace with your Cado platform API key\n'})}),"\n",(0,o.jsxs)(s.p,{children:["See the ",(0,o.jsx)(s.a,{href:"/cado/integrations/api-overview#creating-and-storing-an-api-access-key",children:"Cado API documentation"})," for more information on how to obtain your API key."]}),"\n",(0,o.jsx)(s.h3,{id:"2-prepare-the-csv-file",children:"2. Prepare the CSV File"}),"\n",(0,o.jsxs)(s.p,{children:["The script reads AWS roles from a CSV file named ",(0,o.jsx)(s.code,{children:"roles.csv"}),". This file should be formatted as follows:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"arn:aws:iam::000000000001:role/CadoResponseRole1,MyRoleAlias1\narn:aws:iam::000000000002:role/CadoResponseRole2,MyRoleAlias2\n"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Role"}),": This should be the full ARN of the AWS role."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Alias"}),": This is the name that will appear in the Cado UI to represent the role."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Ensure your CSV file is in the same directory as the script."}),"\n",(0,o.jsx)(s.h3,{id:"3-run-the-script",children:"3. Run the Script"}),"\n",(0,o.jsx)(s.p,{children:"To add AWS roles to the Cado platform:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"Navigate to the directory where the script is saved."}),"\n",(0,o.jsx)(s.li,{children:"Run the script from your terminal using the following command:"}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"python saving_credentials.py\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The script will read the ",(0,o.jsx)(s.code,{children:"roles.csv"})," file and add each role to the platform."]}),"\n",(0,o.jsx)(s.h3,{id:"4-example-script-output",children:"4. Example Script Output"}),"\n",(0,o.jsx)(s.p,{children:"As the script runs, it will output the status of each role being added, including the HTTP status code and the API response. Example output:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'Add Role: [arn:aws:iam::000000000001:role/CadoResponseRole1] with Alias [MyRoleAlias1], Status: 200, Response: {"message": "Role added successfully"}\nAdd Role: [arn:aws:iam::000000000002:role/CadoResponseRole2] with Alias [MyRoleAlias2], Status: 200, Response: {"message": "Role added successfully"}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>n});var o=t(7294);const i={},r=o.createContext(i);function n(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);