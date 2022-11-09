---
title: Private IP Addresses
hide_title: true
sidebar_position: 2
---

# Removing Internet Routable Addresses
By default, the Cado platform deploys into its own VPC with an allow-list of known good IP Addresses set by the user. Public IPv4 addresses are assigned to the main Cado platform to enable a user to connect with their web browser, and are also assigned to workers to allow them to connect to required AWS services e.g. s3.amazonaws.com.

You can remove the requirement for publicly routable IP addresses if you have set up [VPC Endpoints](https://tomgregory.com/when-to-use-an-aws-s3-vpc-endpoint/) to connect Cado to required AWS Services.
You can remove the Public IP addresses associated with Workers under Settings > Advanced.
You can edit the deployment to remove the Public Elastic IP address from the main Cado web server and set up an Application Load Balancer instead to handle traffic to the user over the internet. If you remove the Public Elastic IP address, the built-in Update service will be unable to function and you will need to update via Terraform instead.