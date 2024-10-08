---
title: Deploy with Terraform
hide_title: true
sidebar_position: 2
---

# How to deploy with Terraform

1. Clone the repo from [GitHub](https://github.com/cado-security/Deployment-Templates/tree/main).
2. Navigate to the root **aws_v2** folder.
3. Adjust the provided `awsVars.tfvars` file, with your deployment configuration.
4. Run `terraform init`
5. Confirm configuration and view deployment plan run `terraform plan -var-file="awsVars.tfvars"`
4. To deploy run `terraform apply -var-file="awsVars.tfvars"`
    1. PowerShell on Windows cannot correctly pass literal quotes to external programs, so we do not recommend using Terraform with PowerShell when you are on Windows. Use Windows Command Prompt instead.

## Parameters

  | Parameter Name | Value | Description |
  | -------------- | ----- | ----------- |
  | region | *(choose AWS region)* | AWS Region to deploy the Cado platform in, e.g. `us-east-1` |
  | key_name | *(choose your keypair)* | This key pair is used to enable SSH access to the Cado instance. This is not needed for normal operation, but is helpful should Cado Support ask for additional logs. |
  | ami_id | *(see below)* | Please contact your Cado Sales team for the appropriate AMI ID. When contacting Sales, please provide your AWS Account Number and your AWS region where you will be deploying Cado. |
  | public_deployment | *(IP vs ALB url)* | False by default. Set True if you want the instance to have a public IP address. False hides the Instance behind an ALB with a DNS record to connect to. |
  | certificate_arn | *(HTTPS certificate ARN)* | *Only* needed if `public_deployment` is False. The ARN of the certificate to use on the ALB. |
  | tags | *(Tag resources)* | Map of strings. Tag all deployed resources with information to make them easily identifiable. |
  | vm_size | *(choose vm size)* | m5.4xlarge by default. |
  | vol_size | *(choose disk size)* | 100 GB by default. |
  | ssh_location | *(enter ip range)* | Enter details of your IP address/ IP address ranges that will be used to connect to SSH services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing SSH access |
  | http_location | *(enter ip range)* | Enter details of your IP address/ IP address ranges that will be used to connect to HTTPS services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing HTTPS access |
  | custom_networking | *(optional custom networking)* | If you want to deploy into already provisioned networking configuration. Cado will not deploy. For *Public* deployments `vpc_id` and `public_subnet_id` must be supplied. For *Private* deployments `vpc_id`, `public_subnet_id`, `public_subnet_b_id` and `private_subnet_id` must be provided. |
  | proxy | *(URL)* | Proxy URL to use for outbound connections in format / User Pass - https://user:pass@1.2.3.4:1234 | IP Auth - https://1.2.3.4:1234 |
  | proxy_cert_url | *(URL)* | URL to download proxy certificate from, leave blank to use proxy without a cert. |

5. After the infrastructure is built out, there is a one-time initialization that is performed.  In total, the deploy and initialization process should take about 10-15 minutes with Terraform.
6. You can then **[Log into Cado](../../manage/logging-in.md)**. Note that the initial username is admin and the password is the instance id for the Cado platform.  You'll be asked to change your password after first login.
7. Lastly, you will need to import a license JSON file.

## Identifying the AMI ID
You can view the AMIs for the latest release [here](https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json).
 