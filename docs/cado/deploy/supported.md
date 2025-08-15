---
title: Supported Deployment Configurations
hide_title: true
sidebar_position: 10
---

# Supported Deployment Configurations

In order to be able to support your deployment fully, you will need to ensure the following requirements are met:

1. **IAM and Networking**  
   * Modifying IAM, network, or deployment configurations beyond the below supported setups may cause import failures.  
   * Use **supported IAM configurations** and **network setups** as defined in deployment templates (CloudFormation/Terraform).  
   * Recommended IAM deployment:  
     1. **AWS**: via AWS Organizations or automated CloudFormation Stack from the UI  
     2. **Azure**: via Application Registration  
     3. **GCP**: via Service Account  
   * Deploy from **root account/tenant/project** to sub-accounts/tenants/projects.  
2. **Account Checks**  
   * Perform and resolve any failed Account Checks to ensure proper permissions for data acquisition.  
3. **Platform Maintenance (Customer-Hosted)**  
   * Keep the platform updated to the latest or prior version.  
   * Regularly perform Health Checks to validate IAM and network configurations.
