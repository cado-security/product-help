---
title: Add a load balancer and HTTPS
hide_title: true
sidebar_position: 1
---

# How to add a Load Balancer and/or HTTPS to Cado

## Adding a valid SSL Certificate
The simplest option for adding a valid SSL certificate to Cado is to use a service such as [Cloudflare](https://www.cloudflare.com/). This will provide a valid SSL certificate for your domain and allow you to access Cado over valid HTTPS.

Alternatively, you can use a load balancer in AWS to provide a valid SSL certificate. This is a more complex option but provides more control over the SSL certificate and can be used to add a Web Application Firewall.

## How to Add a Load Balancer in AWS
An Application Load Balancer can be placed in front of the Cado web server in order to provide a valid HTTPS connection and add a Web Application Firewall. This can be configured via the pre-built Terraform or Cloudformation deployment scripts that include a Load Balancer.

Please see the [AWS deployment overview](/cado-response/deploy/aws/cloudformation) for more information on how to deploy Cado with a Load Balancer, in a private subnet. Connections between the Load Balancer and the Cado server will be over TLS.

![AWS Load Balancer 1](/img/aws-lb-1.png)

### Get a SSL/TLS Certificate for your domain
In order to deploy with an ALB you will need to provide an ARN for an SSL/TLS certificate for a domain name you own. To do this you will need to visit the Amazon Certificate Manager. Click **Request** and follow the instructions.

### After Deploying the Load Balancer
Once the load balancer has been created, select the Load Balancer and open the domain name listed under DNS name e.g. `https://cado-alb-test.us-east-1.elb.amazonaws.com/`

If you are using your own domain name, you will then need to point your custom domain name to this DNS name. For example, this is a typical record to point a domain you own (example: `cado-alb.your-company.com`) to the `*.amazonaws.com` DNS name of your Load Balancer:
* Type: `CNAME`
* Name: `cado-alb`
* Target: `cado-alb-test.us-east-1.elb.amazonaws.com`

You should then be able to visit the domain in your browser and login to Cado.

### (Optional) Adding a Web Application Firewall to your Load Balancer
You can also add a WAF by:
* Selecting your Load Balancer, then **Integrated Services** then **Create Web ACL**.
* Under **Associated AWS resources** select your Load Balancer.
* Under **Add rules and rule groups** select the pre-built Firewall rules you want to enable.
* Click through to **Create Web ACL**

### Troubleshooting the Load Balancer
If your ALB shows a status as unhealthy, check that you have selected 443 (not 80) as the port and HTTPS (not HTTP) as the protocol in all instances.

If the Connection Times Out or you get the error “504 Gateway Timeout”, check that Security Group on both the load balancer and the Cado server allow traffic from Cado to the ALB to the User. Also select the Target Group, and check that under **Registered targets** the Instance is listed.

