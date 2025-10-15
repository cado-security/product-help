---
title: Remove internet routable addresses
hide_title: true
sidebar_position: 2
---

# How to remove internet routable addresses
By default, the / Forensic Acquisition and Investigation platform deploys into its own VPC with an allow-list of known good IP Addresses set by the user.

Public IPv4 addresses are assigned to the main platform to enable a user to connect with their web browser, and are also assigned to workers to allow them to connect to required AWS services e.g. s3.amazonaws.com.

We highly recommend using our default CloudFormation template without changes: DeployCloudFormationPrivate.yaml which creates a VPC with the required access.

You can remove the Public IP addresses associated with Workers under Settings > Advanced.

You can choose a deployment that does not include the Public Elastic IP address on the main / Forensic Acquisition and Investigation web server and set up an Application Load Balancer instead to handle traffic from the user to the platform.

Please see the [AWS deployment overview](/cado/deploy/aws/cloudformation) for more information on how to deploy / Forensic Acquisition and Investigation in a private subnet.

## Self Managing Network Access with Custom VPCs
You can remove the requirement for publicly routable IP addresses if you have set up [VPC Endpoints](https://tomgregory.com/when-to-use-an-aws-s3-vpc-endpoint/) or another method such as a Proxy to connect / Forensic Acquisition and Investigation to required AWS Services.

We highly recommend using the / Forensic Acquisition and Investigation default Cloudformation templates without changes, as we cannot support the creation and management of networks inside customer environments.
