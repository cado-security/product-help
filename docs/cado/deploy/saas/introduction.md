---
title: SaaS Deployment Overview
hide_title: true
sidebar_position: 0
---

# SaaS Deployment Overview


## Logging In

Please login via the ActiveAI Security Platform at [https://activeai.darktrace.com/](https://activeai.darktrace.com/).

Select the Forensic Acquisition & Investigation tile to login:  
![AAISP Login](/img/aaisp_login.pngg)


## Adding users via ActiveAI Security Platform
Users can be added to your platform by going to: Admin > User Management.  
Roles for users can be assigned under Admin > SSO Configuration.

## Adding Cloud Accounts
Connecting Azure and GCP resources follows the same process as non-SaaS deployments.  
Please see:

- [How to connect GCP projects](https://docs.cadosecurity.com/cado/deploy/cross/adding-gcp)  
- [How to connect Azure subscriptions](https://docs.cadosecurity.com/cado/deploy/cross/adding-azure)

AWS accounts can be added by following the process at Settings > Accounts > AWS to deploy a Cloudformation template with the required access:  
![SaaS Stackset](/img/saas_aws_stackset.png)



