---
title: How to Add a Load Balancer in AWS
hide_title: true
sidebar_position: 1
---


# How to Add a Load Balancer in AWS

An Application Load Balancer can be placed in front of the Cado Response web server in order to provide a valid HTTPS connection and add a Web Application Firewall. Cado Response currently doesn’t scale across multiple Availability Zones so this doesn’t provide redundancy- but this will be added in the future.

![AWS Load Balancer 1](/img/aws-lb-1.png)

## Get a SSL/TLS Certificate for your domain
If you want to have a valid SSL/TLS certificate for a domain name you own to connect to Cado Response, e.g. https://cado-response.your-company.com, you will need to request a certificate for a domain you own from the Amazon Certificate Manager. Click “Request” and follow the instructions.

## Create the Target Group
First we need to create a “Target Group” which will tell our Load Balancer how to connect to the Cado Response server.
Open Target Groups in EC2, and click “Create Target Group”:
* Select “Instances” as the target type
* Select Port 443 and HTTPS Protocol
* Select HTTP and the Cado Response VPC
* Select HTTPS as the health check protocol and / as the url
Then select the Cado Response instance as the target and click “Include as Pending”.
Click “Create Target Group”.

Depending on your settings, the Target Group should look something like this:
![AWS Load Balancer 1](/img/aws-lb-2.png)

## Create the Load Balancer
Open the Load Balancer wizard and select “Application Load Balancer”:
* Select “Internet Facing” as Scheme (this may change depending on your desired architecture)
* Select IP Address Type: IPv4
* Select The Cado Response VPC as the VPC
* Under mappings select both Subnets. Older deployments of Cado Response prior to v1.4.0 only had a single subnet - if you only see a single subnet please contact support for advice on adding a second subnet.
* Under Listeners and Routing, select HTTPS and port 443. Select the ACM certificate if you chose to create one above.
* Click “Create Load Balancer”

Once created, you should see something like this:
![AWS Load Balancer 1](/img/aws-lb-3.png)

Once the load balancer has been created, select the Load Balancer and open the domain name listed under DNS name e.g. “https://cado-alb-test.us-east-1.elb.amazonaws.com/”

If you are using your own domain name, you will then need to point your custom domain name to this DNS name. For example, this is a typical record to point a domain you own (cado-alb.your-company.com) to the *.amazonaws.com DNS name of your Load Balancer:
* Type: CNAME
* Name: cado-alb
* Target: cado-alb-test.us-east-1.elb.amazonaws.com

You should then be able to visit the domain in your browser and login to Cado Response.

## (Optional) Adding a Web Application Firewall to your Load Balancer
You can also add a WAF by:
* Selecting your Load Balancer, then "Integrated Services" then "Create Web ACL".
* Under “Associated AWS resources” select your Load Balancer.
* Under “Add rules and rule groups” select the pre-built Firewall rules you want to enable.
* Click through to “Create Web ACL”

## You will need to Update the Load Balancer When You Update Cado Response
The Application Load Balancer is tied to a specific EC2 Instance ID (or local 10.x IP Address if you select this instead). Both the Instance ID and Local IP Address update when the platform is updated. You will need to update the target in the Target Group to the new Instance ID or IP Address after the platform has updated. We are working on removing this requirement.

If you are deploying Cado Response and your Load Balancer by Terraform, this can be updated automatically.

## Troubleshooting the Load Balancer
If your ALB shows a status as unhealthy, check that you have selected 443 (not 80) as the port and HTTPS (not HTTP) as the protocol in all instances.

If the Connection Times Out or you get the error “504 Gateway Timeout”, check that Security Group on both the load balancer and the Cado Response server allow traffic from Cado Response to the ALB to the User. Also select the Target Group, and check that under “Registered targets” the Instance is listed.






#### Scheduling Automated Backups of the Data Volume
Amazon EBS Snapshots are stored by AWS in Amazon S3, where it is stored redundantly in multiple Availability Zones.

You can create an **[EventBridge](https://us-west-2.console.aws.amazon.com/events/home)** rule that regularly (e.g. daily) backs up the CadoResponse EC2 instance:



![AWS Backup 2](/img/aws-backup-2.png)

For more, see **[this tutorial](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-scheduled-snapshot.html)** from AWS.

