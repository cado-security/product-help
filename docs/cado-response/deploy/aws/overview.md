---
title: AWS Overview
hide_title: true
sidebar_position: 1
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


## Quick Start

Click [here](https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?templateURL=https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPublic.yaml) to deploy the Cado platform via AWS Cloudformation with default options.

Please reach out to sales@cadosecurity.com for a full license, or get a free limited community license [here](https://www.cadosecurity.com/cado-community-edition)

## AWS Deployment Overview



:::note
**Intended Audience and Operating Environment Requirements:**
This information is written for proficient AWS cloud administrators who are familiar with AWS technology and cloud operations. This manual assumes you already have an AWS account and are familiar with Amazon Web Services capabilities and terminology, including Cloudformation Templates, EC2s, Security Groups, VPCs, IAM roles and S3.
:::

Deployment of the Cado platform is performed within your AWS cloud environment either via a CloudFormation Template, a Terraform Script or via the AWS Marketplace. When the platform is deployed, it creates its own isolated VPC in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes.

By default AWS will limit the number of CPUs that can run in a region to 32. We recommend raising this limit to 128 CPU's to enable fast processing. You can do so by filling out [this form](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#vcpu-limits-request-increase) and requesting 128 vCPU for "Running On-Demand All Standard" instances.

Cado consists of a few key components that interact with each other in order to provide the capabilities within the platform.   
![AWS architecture](/img/aws-architecture.png)

This diagram is a simplified architecture.
We support private deployments with no internet and proxy inspection to support environments with strict security requirements such as those under PCI and HIPAA (below).



### Supported Regions
Cado makes AWS AMI's available for the regions below.  As a customer, if you require deployment to a region that isn't listed, we can deploy our release AMIs to additional regions.  You can deploy to all 20+ default AWS regions via our AWS marketplace listing. 
- us-east-1
- us-east-2
- us-west-1
- us-west-2
- eu-west-1
- eu-west-2
- eu-west-3
- ap-southeast-2
- eu-central-1
- ca-central-1
- ap-south-1

## AWS GovCloud
The Cado platform can be deployed in to AWS GovCloud using CloudFormation.
We support both us-gov-west-1 and us-gov-east-1 regions.
To deploy into GovCloud, please contact the Cado Sales team at sales@cadosecurity.com

 