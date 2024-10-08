"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5502],{4602:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(5893),n=t(1151);const i={title:"Reduce KMS permissions",hide_title:!0,sidebar_position:7},r=void 0,a={id:"cado-response/deploy/aws/iam/tighten-kms",title:"Reduce KMS permissions",description:"How to reduce KMS permissions in AWS",source:"@site/docs/cado-response/deploy/aws/iam/tighten-kms.md",sourceDirName:"cado-response/deploy/aws/iam",slug:"/cado-response/deploy/aws/iam/tighten-kms",permalink:"/cado-response/deploy/aws/iam/tighten-kms",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/iam/tighten-kms.md",tags:[],version:"current",lastUpdatedAt:1728398127,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:7,frontMatter:{title:"Reduce KMS permissions",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Tighten SSM IAM permissions",permalink:"/cado-response/deploy/aws/iam/ssm"},next:{title:"Add a load balancer and HTTPS",permalink:"/cado-response/deploy/aws/networking/aws-load-balancer"}},c={},d=[{value:"How to reduce KMS permissions in AWS",id:"how-to-reduce-kms-permissions-in-aws",level:2},{value:"KMS Consideration - Custom Keys",id:"kms-consideration---custom-keys",level:3},{value:"KMS Consideration - Tightening Permissions",id:"kms-consideration---tightening-permissions",level:3},{value:"KMS Considerations - Cross Region / Cross Account",id:"kms-considerations---cross-region--cross-account",level:3}];function l(e){const s={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"how-to-reduce-kms-permissions-in-aws",children:"How to reduce KMS permissions in AWS"}),"\n",(0,o.jsxs)(s.p,{children:["The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole.",(0,o.jsx)(s.br,{}),"\n","This is granted by the default Cado IAM roles.\nAWS provides default keys in each AWS account. The default Cado IAM permissions support decryption of these KMS keys out of the box.\nCado supports Custom KMS Keys as well."]}),"\n",(0,o.jsx)(s.h3,{id:"kms-consideration---custom-keys",children:"KMS Consideration - Custom Keys"}),"\n",(0,o.jsx)(s.p,{children:"When using custom keys the required actions to the CadoResponseRole are:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'"kms:Encrypt",\n"kms:Decrypt",\n"kms:ReEncrypt*",\n"kms:GenerateDataKey*",\n"kms:CreateGrant"\n'})}),"\n",(0,o.jsx)(s.p,{children:"When Cado performs a default KMS encrypted import across account, it will re-encrypt to a temporary key that is used to move snapshots cross-account.\nAn alias with a Cado prefix is used for scoping purposes, and the alias and key are scheduled for deletion after the import has finished."}),"\n",(0,o.jsx)(s.h3,{id:"kms-consideration---tightening-permissions",children:"KMS Consideration - Tightening Permissions"}),"\n",(0,o.jsx)(s.p,{children:"You can give required permissions to the CadoResponseRole directly and withhold CreateGrant for resources only"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["You may not wish to give kms",":CreateGrant"," permission to the CadoResponseRole itself"]}),"\n",(0,o.jsx)(s.li,{children:"Your policy must feature a statement which provides access to the CadoResponseRole with the above permissions (except CreateGrant)"}),"\n",(0,o.jsx)(s.li,{children:"You may then tighten the policy to only allow CreateGrant permission to only certain AWS resources"}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"kms-considerations---cross-region--cross-account",children:"KMS Considerations - Cross Region / Cross Account"}),"\n",(0,o.jsxs)(s.p,{children:["Ensure that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy Conditions don't preclude the platform's access).\nFor Cross Account, the simplest approach is to give kms",":CreateGrant",' permissions to the role being assumed in the target account.\nAlternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to "kms',":Encrypt",'", "kms',":Decrypt",'", "kms',":ReEncrypt",'*", kms',":GenerateDataKey",'*"']})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>r});var o=t(7294);const n={},i=o.createContext(n);function r(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);