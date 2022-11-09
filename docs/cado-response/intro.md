---
sidebar_position: 1
id: intro
title: Summary
---

# Cado Platform
Data is moving to the cloud. Cyber attackers are moving to the cloud. Yet when security teams need to investigate a threat in a modern environment, it’s incredibly complex and time consuming. The Cado platform leverages the scale, speed and automation of the cloud to expedite investigation and response.

### Core Features
- **Automated data capture** - Cado enables automated data capture across multi-cloud and ephemeral container environments, while also supporting investigations across on-premises systems.

- **Parallel processing** - Cado is powered by a patent-pending cloud-native architecture that automatically scales up and down to provide rapid parallel data processing. 

- **Powerful analytics** - The Cado analytics engine is powered by threat intelligence, machine learning, and built-in YARA rules to automatically flag malicious activity and potential risks.

- **Single pane of glass** - Cado presents hundreds of data sources across cloud-provider logs, disk, memory, and more in a single timeline so security teams can quickly determine scope and impact.


### Benefits 
- **Cloud Scale** - Automate data capture across complex and multi-cloud environments. No agents required.  

- **Cloud Speed** - Take advantage of rapid, parallel processing to normalize massive amounts of disparate data in minutes, not days.

- **Cloud Visibility** - Investigate hundreds of data sources across cloud-provider logs, disk, memory, and more, in a single pane of glass.


---------

## Getting Started with Cado Community Edition
Interested in getting started?  Cado Community Edition is a free, limited version of the Cado platform that lets you analyze:

- Disk images captured in DD format
- Exports of triaged items from open source forensics tools like KAPE and Velociraptor
- Sample data - e.g data published by Cado that illustrates different types of issues incident responders might encounter across server-based, container-based and serverless systems in the cloud.
With Cado Community Edition, users can:
Navigate files and folders 
View a  timeline of activities performed on the system
Analyze captured artifacts for threats and indicators of compromise
Easily pivot and search across artifacts

## Deploy and Manage Cado in your cloud environment
You can deploy and manage Cado in either your AWS or Azure environment

**[Learn how in AWS >](deploy/aws/overview.md)**

**[Learn how in Azure >](deploy/azure/azure-deploy.md)**

### Processing Data
After deploying Cado, data can be automatically acquired from the cloud or imported from a number of supported sources. 

**[Learn how >](discovery-import/import/intro.md)**

### Analyzing Evidence
Data which is imported is automatically processed, analyzed and added to the platform.  Automatic detections, timeline of events and more are available for investigation.

**[Learn how >](investigate/intro.md)**

