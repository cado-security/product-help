---
sidebar_position: 7
id: community-intro
title: Community edition
---


# What is Cado Community Edition?

The [Cado platform](/cado/intro) leverages the cloud's scale, speed, and automation to accelerate investigations and incident response. **Cado Community Edition** is a free version of the Cado platform that allows you to analyze:

- Disk images in DD format
- Exports of triaged items from open-source forensics tools such as [KAPE](https://www.kroll.com/en/insights/publications/cyber/kroll-artifact-parser-extractor-kape) and [Velociraptor](https://www.rapid7.com/products/velociraptor/)
- Sample data published by Cado to demonstrate different incident scenarios in server-based, container-based, and serverless systems in the cloud.

With Cado Community Edition, you can:
- Navigate files and folders
- View a timeline of system activities
- Analyze captured artifacts for threats and indicators of compromise
- Easily pivot and search across artifacts

### Benefits

Cado Community Edition provides:

- **Cloud Scale and Speed**: Adds the speed and scalability of cloud-native analysis to your existing data capture processes.
- **Automated Analysis**: Conducts automated system analysis using built-in detections from Cado Labs experts.
- **Easier Sharing**: Facilitates sharing of artifacts and findings using a cloud-based platform.

---------

## Getting Started

Interested in using Cado Community Edition? Here are key steps to get started:

### Signing Up for Cado Community Edition

Visit the [Cado Community Edition website](https://www.cadosecurity.com/cado-community-edition/#get-access) to sign up. After signing up, a Cado representative will send you a license and a link to the CloudFormation template.

### Deploying in Your Cloud Environment

You can deploy Cado Community Edition in AWS using CloudFormation. Although many settings can be configured, the default values work well for most cases. You will need a key pair if you plan to access the system via SSH, although it’s usually unnecessary for the Community Edition. We recommend using IP address restrictions to enhance security.

:::caution
Using Cado Community Edition will incur AWS charges. To minimize costs, shut down the main instance once processing is complete and you no longer need access. You can also adjust worker size in `Processing > Settings`. The default `i3` series workers offer more disk space for larger disks, but the `t3` series offers lower costs. If cost is a concern, consider using a `t3.large` worker size.
:::

### Processing Data

After deploying Cado Community Edition, you can import data from the S3 bucket created by the CloudFormation template. You can find the S3 bucket identifier under **CloudFormation > Stacks > [stack name] > Outputs > S3Bucket**. Please note that Cado Community Edition only supports .dd, dd.gz, and .zip files.

### Analyzing Evidence

Imported data is automatically processed, analyzed, and added to the platform. You will have access to automatic detections, a timeline of events, and more for investigation.

---------

## How Does Cado Community Edition Differ From the Full Cado Platform?

Cado Community Edition offers a subset of features compared to the enterprise version of the Cado platform. In addition to the Community Edition features, the enterprise version also includes:

- Automated capture and processing of cloud-based data across AWS, Azure, and Google Cloud Platform
- Analysis of container-based, serverless, and infrastructure-as-code artifacts
- Integration of threat feeds and YARA rules for automated analysis
- API support for automated data capture and processing
- Support for multiple concurrent users with role-based access control