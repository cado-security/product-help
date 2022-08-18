---
sidebar_position: 1
title: Getting Started
---


### Signing up for Cado Response Community Edition
The Cado Response Community Edition website page is https://www.cadosecurity.com/cado-community-edition/. Once signed up, a Cado representative will send you a license and link to our CloudFormation template.


### Deploying in your cloud environment
Please note that Cado Response Community Edition only supports CloudFormation deployment in AWS. Also, although there are many configurable deployment settings accepting the default values will work well for Cado Response Community Edition. You’ll need a key pair in case you want to access the SSH port of the system (however, for the Community Edition this probably won’t be necessary). Lastly, we recommend that you take advantage of the IP address restrictions available.

:::caution 
Please note that by deploying and running Cado Community Edition you will incur AWS charges. In order to keep charges to a minimum, you can shut down the main instance that serves the web interface when all processing is finished and you are no longer using it. You can also adjust the worker size under `Processing > Settings`. The `i3` series of worker instances (used by default) provide more disk space to enable processing of larger disks, however, the `t3` series operate at a lower cost. If you are concerned about cost, you may want to select e.g. a `t3.large` worker size in settings.
:::

**[Learn more about deploying in AWS >](../deploy-manage/azure/azure-deploy.md

### Processing Data
After deploying Cado Response Community Edition,  you can import data from the S3 bucket created by the CloudFormation template (you can find the identifier under CloudFormation - Stacks - *stack name* - Outputs - S3Bucket). Please note that all other options will be unavailable. Also, please note that Cado Response Community Edition will only analyze .dd, dd.gz, and .zip files

**[Learn how >](../discovery-import/import/import.md)**

### Analyzing Evidence
Data which is imported is automatically processed, analyzed and added to the platform.  Automatic detections, timeline of events and more are available for investigation.

**[Learn how >](../investigate/investigate.md)**

---------

## How does Cado Response Community Edition differ from the full Cado Response Platform?
The Cado Response Community Edition provides only a subset of the features that are available in the enterprise version of the Cado Response platform.
In addition to the features available in the Cado Response Community Edition, The enterprise version of the Cado Response Platform also supports:

- Automated capture and processing of data cloud based systems across AWS, Azure and Google Cloud Platform
- Analysis of container based, serverless and infrastructure as code artifacts
- Automated integration of threat feeds and YARA rules
- API and automated capture and processing of data
- Multiple concurrent users with role-based access

