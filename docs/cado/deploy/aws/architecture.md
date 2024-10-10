---
title: Cado architecture in AWS
hide_title: true
sidebar_position: 3
---

# What is the Cado architecture in AWS?

Deployment of the Cado platform is performed within your AWS cloud environment either via a CloudFormation Template, a Terraform Script or via the AWS Marketplace. When the platform is deployed, it creates its own isolated VPC in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes.

By default AWS will limit the number of CPUs that can run in a region to 32. We recommend raising this limit to 128 CPU's to enable fast processing. You can do so by filling out [this form](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#vcpu-limits-request-increase) and requesting 128 vCPU for "Running On-Demand All Standard" instances.

Cado consists of a few key components that interact with each other in order to provide the capabilities within the platform.   
![AWS architecture](/img/aws-architecture.png)

This diagram is a simplified architecture.
We support private deployments with no internet and proxy inspection to support environments with strict security requirements such as those under PCI and HIPAA (below).