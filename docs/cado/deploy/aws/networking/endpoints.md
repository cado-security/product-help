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


If you have opted to use regional endpoints, you will need to ensure there is access to the regional endpoints for any regions you use. For example ec2._us-east-1_.amazonaws.com to access the EC2 service in us-east-1.

## Cado Update Definitions

Cado requires access to cado-public.s3.amazonaws.com in order to perform a GET (read only) request to confirm the latest version that is available.