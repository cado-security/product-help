"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9853],{7341:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(5893),t=o(1151);const r={title:"Load Balancer and SSL",hide_title:!0,sidebar_position:1},i="Adding a valid SSL Certificate",l={id:"cado-response/deploy/aws/networking/aws-load-balancer",title:"Load Balancer and SSL",description:"The simplest option for adding a valid SSL certificate to Cado is to use a service such as Cloudflare. This will provide a valid SSL certificate for your domain and allow you to access Cado over valid HTTPS.",source:"@site/docs/cado-response/deploy/aws/networking/aws-load-balancer.md",sourceDirName:"cado-response/deploy/aws/networking",slug:"/cado-response/deploy/aws/networking/aws-load-balancer",permalink:"/cado-response/deploy/aws/networking/aws-load-balancer",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/networking/aws-load-balancer.md",tags:[],version:"current",lastUpdatedAt:1718030593,formattedLastUpdatedAt:"Jun 10, 2024",sidebarPosition:1,frontMatter:{title:"Load Balancer and SSL",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/cado-response/deploy/aws/security/data-encryption-overview"},next:{title:"Private IP Addresses",permalink:"/cado-response/deploy/aws/networking/internet-routable-addresses"}},d={},s=[{value:"Get a SSL/TLS Certificate for your domain",id:"get-a-ssltls-certificate-for-your-domain",level:2},{value:"After Deploying the Load Balancer",id:"after-deploying-the-load-balancer",level:2},{value:"(Optional) Adding a Web Application Firewall to your Load Balancer",id:"optional-adding-a-web-application-firewall-to-your-load-balancer",level:2},{value:"Troubleshooting the Load Balancer",id:"troubleshooting-the-load-balancer",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"adding-a-valid-ssl-certificate",children:"Adding a valid SSL Certificate"}),"\n",(0,n.jsxs)(a.p,{children:["The simplest option for adding a valid SSL certificate to Cado is to use a service such as ",(0,n.jsx)(a.a,{href:"https://www.cloudflare.com/",children:"Cloudflare"}),". This will provide a valid SSL certificate for your domain and allow you to access Cado over valid HTTPS."]}),"\n",(0,n.jsx)(a.p,{children:"Alternatively, you can use a load balancer in AWS to provide a valid SSL certificate. This is a more complex option but provides more control over the SSL certificate and can be used to add a Web Application Firewall."}),"\n",(0,n.jsx)(a.h1,{id:"how-to-add-a-load-balancer-in-aws",children:"How to Add a Load Balancer in AWS"}),"\n",(0,n.jsx)(a.p,{children:"An Application Load Balancer can be placed in front of the Cado web server in order to provide a valid HTTPS connection and add a Web Application Firewall. This can be configured via the pre-built Terraform or Cloudformation deployment scripts that include a Load Balancer."}),"\n",(0,n.jsxs)(a.p,{children:["Please see the ",(0,n.jsx)(a.a,{href:"/cado-response/deploy/aws/overview",children:"AWS deployment overview"})," for more information on how to deploy Cado with a Load Balancer, in a private subnet."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"AWS Load Balancer 1",src:o(8460).Z+"",width:"1421",height:"767"})}),"\n",(0,n.jsx)(a.h2,{id:"get-a-ssltls-certificate-for-your-domain",children:"Get a SSL/TLS Certificate for your domain"}),"\n",(0,n.jsxs)(a.p,{children:["In order to deploy with an ALB you will need to provide an ARN for an SSL/TLS certificate for a domain name you own. To do this you will need to visit the Amazon Certificate Manager. Click ",(0,n.jsx)(a.strong,{children:"Request"})," and follow the instructions."]}),"\n",(0,n.jsx)(a.h2,{id:"after-deploying-the-load-balancer",children:"After Deploying the Load Balancer"}),"\n",(0,n.jsxs)(a.p,{children:["Once the load balancer has been created, select the Load Balancer and open the domain name listed under DNS name e.g. ",(0,n.jsx)(a.code,{children:"https://cado-alb-test.us-east-1.elb.amazonaws.com/"})]}),"\n",(0,n.jsxs)(a.p,{children:["If you are using your own domain name, you will then need to point your custom domain name to this DNS name. For example, this is a typical record to point a domain you own (example: ",(0,n.jsx)(a.code,{children:"cado-alb.your-company.com"}),") to the ",(0,n.jsx)(a.code,{children:"*.amazonaws.com"})," DNS name of your Load Balancer:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Type: ",(0,n.jsx)(a.code,{children:"CNAME"})]}),"\n",(0,n.jsxs)(a.li,{children:["Name: ",(0,n.jsx)(a.code,{children:"cado-alb"})]}),"\n",(0,n.jsxs)(a.li,{children:["Target: ",(0,n.jsx)(a.code,{children:"cado-alb-test.us-east-1.elb.amazonaws.com"})]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"You should then be able to visit the domain in your browser and login to Cado."}),"\n",(0,n.jsx)(a.h2,{id:"optional-adding-a-web-application-firewall-to-your-load-balancer",children:"(Optional) Adding a Web Application Firewall to your Load Balancer"}),"\n",(0,n.jsx)(a.p,{children:"You can also add a WAF by:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Selecting your Load Balancer, then ",(0,n.jsx)(a.strong,{children:"Integrated Services"})," then ",(0,n.jsx)(a.strong,{children:"Create Web ACL"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Under ",(0,n.jsx)(a.strong,{children:"Associated AWS resources"})," select your Load Balancer."]}),"\n",(0,n.jsxs)(a.li,{children:["Under ",(0,n.jsx)(a.strong,{children:"Add rules and rule groups"})," select the pre-built Firewall rules you want to enable."]}),"\n",(0,n.jsxs)(a.li,{children:["Click through to ",(0,n.jsx)(a.strong,{children:"Create Web ACL"})]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"troubleshooting-the-load-balancer",children:"Troubleshooting the Load Balancer"}),"\n",(0,n.jsx)(a.p,{children:"If your ALB shows a status as unhealthy, check that you have selected 443 (not 80) as the port and HTTPS (not HTTP) as the protocol in all instances."}),"\n",(0,n.jsxs)(a.p,{children:["If the Connection Times Out or you get the error \u201c504 Gateway Timeout\u201d, check that Security Group on both the load balancer and the Cado server allow traffic from Cado to the ALB to the User. Also select the Target Group, and check that under ",(0,n.jsx)(a.strong,{children:"Registered targets"})," the Instance is listed."]})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8460:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/aws-lb-1-cb787acc8f3821d5ce8f41527f37a4fa.png"},1151:(e,a,o)=>{o.d(a,{Z:()=>l,a:()=>i});var n=o(7294);const t={},r=n.createContext(t);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);