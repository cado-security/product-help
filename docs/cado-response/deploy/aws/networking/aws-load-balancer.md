---
title: Load Balancer
hide_title: true
sidebar_position: 1
---


# How to Add a Load Balancer in AWS
An Application Load Balancer can be placed in front of the Cado web server in order to provide a valid HTTPS connection and add a Web Application Firewall. This can be configured via the provided Terraform or Cloudformation deployment scripts. Cado currently doesn’t scale across multiple Availability Zones so this doesn’t provide redundancy- but this will be added in the future.

![AWS Load Balancer 1](/img/aws-lb-1.png)

## Get a SSL/TLS Certificate for your domain
In order to deploy with an ALB you will need to provide an ARN for an SSL/TLS certificate for a domain name you own. To do this you will need to visit the Amazon Certificate Manager. Click **Request** and follow the instructions.

## After Deploying the Load Balancer
Once the load balancer has been created, select the Load Balancer and open the domain name listed under DNS name e.g. `https://cado-alb-test.us-east-1.elb.amazonaws.com/`

If you are using your own domain name, you will then need to point your custom domain name to this DNS name. For example, this is a typical record to point a domain you own (example: `cado-alb.your-company.com`) to the `*.amazonaws.com` DNS name of your Load Balancer:
* Type: `CNAME`
* Name: `cado-alb`
* Target: `cado-alb-test.us-east-1.elb.amazonaws.com`

You should then be able to visit the domain in your browser and login to Cado.

## (Optional) Adding a Web Application Firewall to your Load Balancer
You can also add a WAF by:
* Selecting your Load Balancer, then **Integrated Services** then **Create Web ACL**.
* Under **Associated AWS resources** select your Load Balancer.
* Under **Add rules and rule groups** select the pre-built Firewall rules you want to enable.
* Click through to **Create Web ACL**

## Troubleshooting the Load Balancer
If your ALB shows a status as unhealthy, check that you have selected 443 (not 80) as the port and HTTPS (not HTTP) as the protocol in all instances.

If the Connection Times Out or you get the error “504 Gateway Timeout”, check that Security Group on both the load balancer and the Cado server allow traffic from Cado to the ALB to the User. Also select the Target Group, and check that under **Registered targets** the Instance is listed.

