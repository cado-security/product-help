---
title: XSOAR
hide_title: true
sidebar_position: 2
---

# XSOAR

Cortex XSOAR is a powerful Security Orchestration, Automation, and Response (SOAR) system. XSOAR allows SoC teams to organise cases, incidents and automate investigation rapidly using a central War Room for collaboration. By integrating Cado Response with XSOAR, you're going to increase efficiency and productive by automating Cado Response's powerful data acquisition and processing.

:::tip
If you're confused by the terminology mentioned here, or have never used XSOAR before, please consider checking out the [XSOAR documentation](https://docs.paloaltonetworks.com/cortex/cortex-xsoar/6-2/cortex-xsoar-tutorials.html).
:::

## Getting Started with XSOAR

Before properly getting started please see the following for general instructions on setting up the Cado Response platform for integrating with third-party tools:

**[Integrations Overview >](api-overview)**

### Contents

1. **[Downloading from Marketplace](#downloading-from-marketplace)**
2. **[Setup](#setup)**
3. **[Testing your Settings](#testing-your-settings)**

### Downloading from Marketplace

In your Cortex XSOAR instance, click on the **Marketplace** section in the left-hand sidebar and search for `Cado Response` in the search bar.

![Cado Response in the XSOAR marketplace](/img/xsoar-market.png)

### Setup

When configuring the Cado Response integration (which should open up when you install the application), you'll see the following screen to configure the XSOAR application:

![Cado Response XSOAR Setup Wizard](/img/xsoar-wizard.png)

In this screen, you'll need to setup the following:

- **Application Instance Name**:
  
  This will be the name of the Application as it shows in XSOAR. If you're unsure, it's best to leave as default.

- **The URL of your Cado Response instance**:

  This will the URL of your deployed Cado Response instance, if you're unsure, please see **[Integrations Overview >](api-overview)**

- **The API key you retrieved from your platform**:

  This will the generated private API key you retrieved earlier, if you're unsure, please see **[Integrations Overview >](api-overview)**

- **The default Project ID**

  Provides a fallback Project ID from Cado Response if you forget to add an ID to a command. If you're not sure, don't change! _Defaults to 1_.

- **The default AWS Region**

  Provides a default AWS region to fallback on if you forget to add it to a command. _Defaults to us-east-1_.

- **The default AWS S3 bucket**

  Provides a default AWS bucket to fallback on if you forget to add it to a command. _Defaults to cado-default-bucket_.

### Testing your Settings

To test your settings, click the `Test` button in the setup screen. Ensure the result of the test is green and says `result ok`.

## List of Commands

### Contents

1. **[List EC2 Instances](#list-ec2-instances)**
2. **[List S3 Buckets](#list-s3-buckets)**
3. **[List Projects](#list-projects)**
4. **[List Project Pipelines](#list-project-pipelines)**
5. **[Create a Project](#create-a-project)**
6. **[Retrieve a Pipeline](#retrieve-a-pipeline)**
7. **[Acquire a Disk Image From EC2](#acquire-a-disk-image-from-ec2)**
8. **[Acquire a Disk Image From S3](#acquire-a-disk-image-from-s3)**


### List EC2 Instances

- Command: `cado-list-ec2`
- Description: This action will allow you to list all the EC2 instances in an AWS region.

#### Arguments

| Argument Name | Description | Default Value |
| -------- | -------- | ---- | ----------- |
| `project_id` | The ID of the project you wish to attach the acquisition to. This is a required parameter. | The value of the pre-configured default. |

### List S3 Buckets


### List Projects


### List Project Pipelines


### Create a Project


### Retrieve a Pipeline


### Acquire a Disk Image From EC2


### Acquire a Disk Image From S3

