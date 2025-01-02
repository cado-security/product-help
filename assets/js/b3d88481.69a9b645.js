"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8567],{91253:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=o(74848),n=o(28453);const r={title:"Reduce KMS permissions",hide_title:!0,sidebar_position:7},i="How to reduce KMS permissions in AWS",c={id:"cado/deploy/aws/iam/tighten-kms",title:"Reduce KMS permissions",description:"The Cado platform supports importing EC2 instances with encrypted volumes, provided the appropriate permissions are assigned to the CadoResponseRole. The default Cado IAM roles include the necessary permissions to decrypt AWS default KMS keys out of the box. Custom KMS keys are also supported.",source:"@site/docs/cado/deploy/aws/iam/tighten-kms.md",sourceDirName:"cado/deploy/aws/iam",slug:"/cado/deploy/aws/iam/tighten-kms",permalink:"/cado/deploy/aws/iam/tighten-kms",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/iam/tighten-kms.md",tags:[],version:"current",lastUpdatedAt:1735813116,formattedLastUpdatedAt:"Jan 2, 2025",sidebarPosition:7,frontMatter:{title:"Reduce KMS permissions",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"KMS support",permalink:"/cado/deploy/aws/iam/aws-kms"},next:{title:"How to Tighten IAM Permissions for SSM in AWS",permalink:"/cado/deploy/aws/iam/ssm"}},a={},d=[{value:"KMS Considerations for Custom Keys",id:"kms-considerations-for-custom-keys",level:2},{value:"Tightening KMS Permissions",id:"tightening-kms-permissions",level:2},{value:"KMS Considerations for Cross-Region and Cross-Account",id:"kms-considerations-for-cross-region-and-cross-account",level:2},{value:"Cross-Region",id:"cross-region",level:3},{value:"Cross-Account",id:"cross-account",level:3}];function l(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"how-to-reduce-kms-permissions-in-aws",children:"How to reduce KMS permissions in AWS"}),"\n",(0,t.jsxs)(s.p,{children:["The Cado platform supports importing EC2 instances with encrypted volumes, provided the appropriate permissions are assigned to the ",(0,t.jsx)(s.code,{children:"CadoResponseRole"}),". The default Cado IAM roles include the necessary permissions to decrypt AWS default KMS keys out of the box. Custom KMS keys are also supported."]}),"\n",(0,t.jsx)(s.h2,{id:"kms-considerations-for-custom-keys",children:"KMS Considerations for Custom Keys"}),"\n",(0,t.jsxs)(s.p,{children:["When using custom KMS keys, the following actions must be granted to the ",(0,t.jsx)(s.code,{children:"CadoResponseRole"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"kms:Encrypt",\n"kms:Decrypt",\n"kms:ReEncrypt*",\n"kms:GenerateDataKey*",\n"kms:CreateGrant"\n'})}),"\n",(0,t.jsx)(s.p,{children:"When Cado performs a cross-account import of KMS-encrypted EC2 instances, it re-encrypts the snapshot to a temporary key used for cross-account transfer. This key is scoped using an alias with a Cado prefix, and both the alias and key are scheduled for deletion after the import is complete."}),"\n",(0,t.jsx)(s.h2,{id:"tightening-kms-permissions",children:"Tightening KMS Permissions"}),"\n",(0,t.jsxs)(s.p,{children:["To further restrict KMS permissions, you can grant the necessary permissions to the ",(0,t.jsx)(s.code,{children:"CadoResponseRole"})," while withholding ",(0,t.jsx)(s.code,{children:"kms:CreateGrant"})," for specific resources:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Limit CreateGrant Permissions:"})," You may choose not to grant ",(0,t.jsx)(s.code,{children:"kms:CreateGrant"})," to the ",(0,t.jsx)(s.code,{children:"CadoResponseRole"})," itself."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Custom Policy:"})," Ensure your IAM policy allows the ",(0,t.jsx)(s.code,{children:"CadoResponseRole"})," to perform the required actions (",(0,t.jsx)(s.code,{children:"kms:Encrypt"}),", ",(0,t.jsx)(s.code,{children:"kms:Decrypt"}),", etc.) but excludes ",(0,t.jsx)(s.code,{children:"kms:CreateGrant"})," where unnecessary."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Tighten Resource Access:"})," Restrict ",(0,t.jsx)(s.code,{children:"kms:CreateGrant"})," to specific AWS resources only, rather than granting it globally."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"kms-considerations-for-cross-region-and-cross-account",children:"KMS Considerations for Cross-Region and Cross-Account"}),"\n",(0,t.jsx)(s.h3,{id:"cross-region",children:"Cross-Region"}),"\n",(0,t.jsx)(s.p,{children:"Ensure that your KMS policy statements apply to the region where your Cado platform is deployed. For example, verify that policy conditions do not block access to resources in the platform's region."}),"\n",(0,t.jsx)(s.h3,{id:"cross-account",children:"Cross-Account"}),"\n",(0,t.jsxs)(s.p,{children:["The simplest approach for cross-account operations is to grant ",(0,t.jsx)(s.code,{children:"kms:CreateGrant"})," permissions to the role being assumed in the ",(0,t.jsx)(s.strong,{children:"target account"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Alternatively, the same permissions outlined for custom keys can be applied, but both the primary and secondary account roles must be allowed principals for the required KMS actions (",(0,t.jsx)(s.code,{children:"kms:Encrypt"}),", ",(0,t.jsx)(s.code,{children:"kms:Decrypt"}),", ",(0,t.jsx)(s.code,{children:"kms:ReEncrypt*"}),", ",(0,t.jsx)(s.code,{children:"kms:GenerateDataKey*"}),")."]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>c});var t=o(96540);const n={},r=t.createContext(n);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);