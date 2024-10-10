---
sidebar_position: 7
id: community-intro
title: Community edition
---

# What is Cado community edition
The [Cado platform](/cado/intro) platform leverages the scale, speed and automation of the cloud to expedite investigation and response. Cado Community Edition is a free version of the Cado platform that lets you analyze:

- Disk images captured in DD format
- Exports of triaged items from open source forensics tools like [KAPE](https://www.kroll.com/en/insights/publications/cyber/kroll-artifact-parser-extractor-kape) and [Velociraptor](https://www.rapid7.com/products/velociraptor/).
- Sample data - e.g data published by Cado that illustrates different types of issues incident responders might encounter across server-based, container-based and serverless systems in the cloud.
With Cado Community Edition, users can:
Navigate files and folders 
View a  timeline of activities performed on the system
Analyze captured artifacts for threats and indicators of compromise
Easily pivot and search across artifacts 


### Benefits
Cado Community Edition gives you:
- **Cloud Scale and Speed** - Adding the speed of cloud-native analysis to their existing data capture processes
- **Automated Analysis** - Performing automated analysis of systems using built-in detections provided by experts in the Cado Labs team 
- **Easier Sharing** - Easier sharing of artifacts and findings using a cloud-based system
---------

## Getting Started
Interested in getting started?  Here are some of the most frequently accessed help topics. 

### Signing up for Cado Community Edition
Visit the [Cado Community Edition website](https://www.cadosecurity.com/cado-community-edition/#get-access) page to sign up. Once signed up, a Cado representative will send you a license and link to our CloudFormation template.


### Deploying in your cloud environment
How to deploy Cado Community Edition in your cloud environment in AWS. Please note that Cado Community Edition only supports CloudFormation deployment in AWS. Also, although there are many configurable deployment settings accepting the default values will work well for Cado Community Edition. You’ll need a key pair in case you want to access the SSH port of the system (however, for the Community Edition this probably won’t be necessary). Lastly, we recommend that you take advantage of the IP address restrictions available.

:::caution 
Please note that by deploying and running Cado Community Edition you will incur AWS charges. In order to keep charges to a minimum, you can shut down the main instance that serves the web interface when all processing is finished and you are no longer using it. You can also adjust the worker size under `Processing > Settings`. The `i3` series of worker instances (used by default) provide more disk space to enable processing of larger disks, however, the `t3` series operate at a lower cost. If you are concerned about cost, you may want to select e.g. a `t3.large` worker size in settings.
:::


### Processing Data
After deploying Cado Community Edition,  you can import data from the S3 bucket created by the CloudFormation template (you can find the identifier under CloudFormation - Stacks - *stack name* - Outputs - S3Bucket). Please note that all other options will be unavailable. Also, please note that Cado Community Edition will only analyze .dd, dd.gz, and .zip files

### Analyzing Evidence
Data which is imported is automatically processed, analyzed and added to the platform.  Automatic detections, timeline of events and more are available for investigation.


---------

## How does Cado Community Edition differ from the full Cado platform?
The Cado Community Edition provides only a subset of the features that are available in the enterprise version of the Cado platform.
In addition to the features available in the Cado Community Edition, The enterprise version of the Cado Platform also supports:

- Automated capture and processing of data cloud based systems across AWS, Azure and Google Cloud Platform
- Analysis of container based, serverless and infrastructure as code artifacts
- Automated integration of threat feeds and YARA rules
- API and automated capture and processing of data
- Multiple concurrent users with role-based access

