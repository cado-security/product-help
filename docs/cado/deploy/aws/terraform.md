---
title: Deploy with Terraform
hide_title: true
sidebar_position: 2
---

# How to deploy with Terraform

Follow the steps below to deploy the Cado platform using Terraform.

## Step-by-Step Guide

1. **Clone the Repository:**  
   Clone the Cado Security Deployment Templates from GitHub:  
   [GitHub Repo](https://github.com/cado-security/Deployment-Templates/tree/main)
   
2. **Navigate to the Deployment Directory:**  
   Go to the root **aws_v2** folder within the cloned repository.

3. **Configure Deployment Settings:**  
   Modify the `awsVars.tfvars` file to match your deployment needs. This file contains key variables for your deployment configuration.

4. **Initialize Terraform:**  
   Run the following command to initialize the Terraform working directory:  
   ```
   terraform init
   ```

5. **Preview the Deployment Plan:**  
   To review the configuration and ensure everything is set up correctly, run:  
   ```
   terraform plan -var-file="awsVars.tfvars"
   ```

6. **Deploy the Infrastructure:**  
   When ready to deploy, run:  
   ```
   terraform apply -var-file="awsVars.tfvars"
   ```

   > **Note:** If you're using Windows, avoid running this command in PowerShell as it may not handle quotes properly. Use the Command Prompt instead.

## Key Parameters

| Parameter Name       | Value                        | Description                                                                                          |
| -------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| `region`             | *(AWS region)*               | AWS region for deploying Cado, e.g., `us-east-1`.                                                     |
| `key_name`           | *(key pair name)*            | SSH key pair for accessing the Cado instance (optional, but useful for troubleshooting).               |
| `ami_id`             | *(AMI ID)*                   | Contact Cado Sales to get the appropriate AMI ID for your region. Provide your AWS Account Number.     |
| `public_deployment`  | `True` or `False`            | Set to `True` for public IP access. Set to `False` to deploy behind an ALB with a DNS URL.             |
| `certificate_arn`    | *(ARN)*                      | ARN of the certificate to assign to the ALB (required if `public_deployment` is `False`).              |
| `tags`               | *(key-value map)*            | Tags for organizing and identifying your AWS resources.                                                |
| `vm_size`            | `m5.4xlarge`                 | Choose your instance type (default: `m5.4xlarge`).                                                     |
| `vol_size`           | *(disk size in GB)*          | The disk size for the instance (default: 100 GB).                                                      |
| `ssh_location`       | *(CIDR range)*               | IP address or range allowed for SSH access (recommended to restrict to specific IPs).                  |
| `http_location`      | *(CIDR range)*               | IP address or range allowed for HTTPS access (recommended to restrict to specific IPs).                |
| `custom_networking`  | *(optional)*                 | For custom VPC deployments. Specify VPC and subnet IDs if deploying in an existing network setup.      |
| `proxy`              | *(proxy URL)*                | Optional: URL of the proxy server to use for outbound connections.                                     |
| `proxy_cert_url`     | *(certificate URL)*          | Optional: URL to download the proxy certificate, if needed.                                            |

## Deploying into Custom Networking

For custom networking configurations:

- For **Public deployments**, supply `vpc_id` and `public_subnet_id`.
- For **Private deployments**, supply `vpc_id`, `public_subnet_id`, `public_subnet_b_id`, and `private_subnet_id`.

## Final Steps

7. **Initialize the Platform:**  
   Once the infrastructure is deployed, a one-time initialization process will begin. The entire deployment and initialization process typically takes 10-15 minutes.

8. **Log into Cado:**  
   After deployment, log into the Cado platform. The initial username is `admin`, and the password is the instance ID of your deployed Cado platform. You’ll be prompted to change your password upon first login.  
   **[Log into Cado](/cado/deploy/logging-in)**

9. **Import a License:**  
   You will also need to import a license file (in JSON format) after logging in.

## Identifying the AMI ID

To find the latest AMI ID for the Cado platform, visit the following link:  
[View Latest AMIs](https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json)