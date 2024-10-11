---
title: Cado architecture in AWS
hide_title: true
sidebar_position: 3
---

# What is the Cado architecture in AWS?

The Cado platform is deployed directly into your AWS environment using either a CloudFormation Template, a Terraform script, or via the AWS Marketplace. Once deployed, the platform creates an isolated VPC (Virtual Private Cloud) where you can control access and permissions. This allows for secure and customized deployment within your AWS infrastructure. The entire process typically takes less than 25 minutes from start to finish.

## CPU Limits and Recommendations

By default, AWS limits the number of vCPUs you can run in a region to 32. For optimal performance, we recommend increasing this limit to 128 vCPUs, especially for faster processing. You can request this increase by filling out [this form](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#vcpu-limits-request-increase) and asking for 128 vCPUs under "Running On-Demand All Standard Instances."

## Cado Platform Components

The Cado platform consists of several key components that work together to deliver its capabilities. The platform is designed to be flexible and secure, supporting both internet-connected and private deployments. For environments with strict security requirements, the platform supports private deployments with no internet access and proxy inspection.

![Cado AWS Architecture](/img/aws-architecture.png)

> Note: The diagram above provides a simplified overview of the Cado architecture in AWS.

## Security Features

Cado’s architecture supports environments with stringent security needs, offering private deployments with no internet access and the ability to utilize proxy inspection, ensuring compliance with security policies.

