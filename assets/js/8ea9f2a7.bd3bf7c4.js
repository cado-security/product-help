"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6480],{746:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=o(4848),t=o(8453);const r={title:"Add a load balancer and HTTPS",hide_title:!0,sidebar_position:1},d="How to add a Load Balancer and/or HTTPS to Cado",i={id:"cado/deploy/aws/networking/aws-load-balancer",title:"Add a load balancer and HTTPS",description:"Adding a valid SSL Certificate",source:"@site/docs/cado/deploy/aws/networking/aws-load-balancer.md",sourceDirName:"cado/deploy/aws/networking",slug:"/cado/deploy/aws/networking/aws-load-balancer",permalink:"/cado/deploy/aws/networking/aws-load-balancer",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/networking/aws-load-balancer.md",tags:[],version:"current",lastUpdatedAt:1734696555,formattedLastUpdatedAt:"Dec 20, 2024",sidebarPosition:1,frontMatter:{title:"Add a load balancer and HTTPS",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Workers",permalink:"/cado/deploy/aws/aws-workers"},next:{title:"Remove internet routable addresses",permalink:"/cado/deploy/aws/networking/internet-routable-addresses"}},l={},s=[{value:"Adding a valid SSL Certificate",id:"adding-a-valid-ssl-certificate",level:2},{value:"How to Add a Load Balancer in AWS",id:"how-to-add-a-load-balancer-in-aws",level:2},{value:"Get a SSL/TLS Certificate for your domain",id:"get-a-ssltls-certificate-for-your-domain",level:3},{value:"After Deploying the Load Balancer",id:"after-deploying-the-load-balancer",level:3},{value:"(Optional) Adding a Web Application Firewall to your Load Balancer",id:"optional-adding-a-web-application-firewall-to-your-load-balancer",level:3},{value:"Troubleshooting the Load Balancer",id:"troubleshooting-the-load-balancer",level:3}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"how-to-add-a-load-balancer-andor-https-to-cado",children:"How to add a Load Balancer and/or HTTPS to Cado"}),"\n",(0,n.jsx)(a.h2,{id:"adding-a-valid-ssl-certificate",children:"Adding a valid SSL Certificate"}),"\n",(0,n.jsxs)(a.p,{children:["The simplest option for adding a valid SSL certificate to Cado is to use a service such as ",(0,n.jsx)(a.a,{href:"https://www.cloudflare.com/",children:"Cloudflare"}),". This will provide a valid SSL certificate for your domain and allow you to access Cado over valid HTTPS."]}),"\n",(0,n.jsx)(a.p,{children:"Alternatively, you can use a load balancer in AWS to provide a valid SSL certificate. This is a more complex option but provides more control over the SSL certificate and can be used to add a Web Application Firewall."}),"\n",(0,n.jsx)(a.h2,{id:"how-to-add-a-load-balancer-in-aws",children:"How to Add a Load Balancer in AWS"}),"\n",(0,n.jsx)(a.p,{children:"An Application Load Balancer can be placed in front of the Cado web server in order to provide a valid HTTPS connection and add a Web Application Firewall. This can be configured via the pre-built Terraform or Cloudformation deployment scripts that include a Load Balancer."}),"\n",(0,n.jsxs)(a.p,{children:["Please see the ",(0,n.jsx)(a.a,{href:"/cado/deploy/aws/cloudformation",children:"AWS deployment overview"})," for more information on how to deploy Cado with a Load Balancer, in a private subnet. Connections between the Load Balancer and the Cado server will be over TLS."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"AWS Load Balancer 1",src:o(3797).A+"",width:"960",height:"540"})}),"\n",(0,n.jsx)(a.h3,{id:"get-a-ssltls-certificate-for-your-domain",children:"Get a SSL/TLS Certificate for your domain"}),"\n",(0,n.jsxs)(a.p,{children:["In order to deploy with an ALB you will need to provide an ARN for an SSL/TLS certificate for a domain name you own. To do this you will need to visit the Amazon Certificate Manager. Click ",(0,n.jsx)(a.strong,{children:"Request"})," and follow the instructions."]}),"\n",(0,n.jsx)(a.h3,{id:"after-deploying-the-load-balancer",children:"After Deploying the Load Balancer"}),"\n",(0,n.jsxs)(a.p,{children:["Once the load balancer has been created, select the Load Balancer and open the domain name listed under DNS name e.g. ",(0,n.jsx)(a.code,{children:"https://cado-alb-test.us-east-1.elb.amazonaws.com/"})]}),"\n",(0,n.jsxs)(a.p,{children:["If you are using your own domain name, you will then need to point your custom domain name to this DNS name. For example, this is a typical record to point a domain you own (example: ",(0,n.jsx)(a.code,{children:"cado-alb.your-company.com"}),") to the ",(0,n.jsx)(a.code,{children:"*.amazonaws.com"})," DNS name of your Load Balancer:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Type: ",(0,n.jsx)(a.code,{children:"CNAME"})]}),"\n",(0,n.jsxs)(a.li,{children:["Name: ",(0,n.jsx)(a.code,{children:"cado-alb"})]}),"\n",(0,n.jsxs)(a.li,{children:["Target: ",(0,n.jsx)(a.code,{children:"cado-alb-test.us-east-1.elb.amazonaws.com"})]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"You should then be able to visit the domain in your browser and login to Cado."}),"\n",(0,n.jsx)(a.h3,{id:"optional-adding-a-web-application-firewall-to-your-load-balancer",children:"(Optional) Adding a Web Application Firewall to your Load Balancer"}),"\n",(0,n.jsx)(a.p,{children:"You can also add a WAF by:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Selecting your Load Balancer, then ",(0,n.jsx)(a.strong,{children:"Integrated Services"})," then ",(0,n.jsx)(a.strong,{children:"Create Web ACL"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Under ",(0,n.jsx)(a.strong,{children:"Associated AWS resources"})," select your Load Balancer."]}),"\n",(0,n.jsxs)(a.li,{children:["Under ",(0,n.jsx)(a.strong,{children:"Add rules and rule groups"})," select the pre-built Firewall rules you want to enable."]}),"\n",(0,n.jsxs)(a.li,{children:["Click through to ",(0,n.jsx)(a.strong,{children:"Create Web ACL"})]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"troubleshooting-the-load-balancer",children:"Troubleshooting the Load Balancer"}),"\n",(0,n.jsx)(a.p,{children:"If your ALB shows a status as unhealthy, check that you have selected 443 (not 80) as the port and HTTPS (not HTTP) as the protocol in all instances."}),"\n",(0,n.jsxs)(a.p,{children:["If the Connection Times Out or you get the error \u201c504 Gateway Timeout\u201d, check that Security Group on both the load balancer and the Cado server allow traffic from Cado to the ALB to the User. Also select the Target Group, and check that under ",(0,n.jsx)(a.strong,{children:"Registered targets"})," the Instance is listed."]})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},3797:(e,a,o)=>{o.d(a,{A:()=>n});const n=o.p+"assets/images/aws-lb-1-a20e311eeab85a2a6b7d6395065eadde.png"},8453:(e,a,o)=>{o.d(a,{R:()=>d,x:()=>i});var n=o(6540);const t={},r=n.createContext(t);function d(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);