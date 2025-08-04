---
title: Endpoint access
hide_title: true
sidebar_position: 3
---

# What AWS endpoints does the Cado platform require access to?
The Cado platform requires access to the following AWS API endpoints, including regional addresses for regions that are accessed (e.g. us-east-2.ec2.amazonaws.com). If the VPC, in which Cado is deployed, will not be able to access these endpoints over the public internet, then a [VPC Endpoint](https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html#create-interface-endpoint-aws)  may be required.


| Core Platform | KMS encrypted EC2s | Memory Forensics | Lambda Functions | ECS/EKS Containers |
| ------------- | ------------------- | ---------------- | ---------------- | ------------------ |
| ec2.amazonaws.com | kms.amazonaws.com | ssm.amazonaws.com | lambda.amazonaws.com | ecs.amazonaws.com |
| secretsmanager.amazonaws.com | | | cloudwatch.amazonaws.com | ecs-tasks.amazonaws.com |
| s3.amazonaws.com | | | | eks.amazonaws.com |
| sts.amazonaws.com | | | | |
| iam.amazonaws.com | | | | |
| cloudtrail.amazonaws.com | | | | |	 	 	 

# Regional Endpoints
If you have opted to use regional endpoints, you will need to ensure there is access to the regional endpoints for any regions you use. For example ec2._us-east-1_.amazonaws.com to access the EC2 service in us-east-1.

## How Cado uses regional endpoints
In general, Cado attempts to automatically fallback to an available endpoint if possible.

Cado automatically sets the environment variable AWS_DEFAULT_REGION to the appropriate partition:
 - `us-gov-west-1` for GovCloud
 - `cn-north-1` for China
- The region Cado is deployed in - if the global endpoints are not available but the regional endpoints are.

In addition, Cado enables regional STS endpoints to avoid token validation issues, by setting the environment variable AWS_STS_REGIONAL_ENDPOINTS to "regional".

For more information, please see [AWS documentation](https://aws.amazon.com/blogs/security/how-to-use-regional-aws-sts-endpoints/).

# Cado Update Definitions

Cado requires access to cado-public.s3.amazonaws.com in order to perform a GET (read only) request to confirm the latest version that is available.
