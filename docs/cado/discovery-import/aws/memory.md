---
title: EC2 Triage Analysis
hide_title: true
sidebar_position: 7
---

# How to Perform a Triage Acqusition of an EC2

To acquire live process data from Linux systems running in EC2, use the **Triage Acquisition** option under **Import > EC2**:

![AWS Memory](/img/alternate-ec2.png)

This method requires the AWS Systems Manager (SSM) agent to be installed and running on the EC2 instance. The instance must also be registered with AWS Systems Manager. If the SSM agent is not available, you can still acquire a trigate capture by connecting to the machine via SSH (for Linux) or RDP (for Windows) and running **Cado Host** from **Import > Forensic Artifacts**.


### Data Flow Diagram

The following diagram illustrates how EC2 Triage SSM acquisitions work:

![EC2 SSM Data Flow](/img/ec2-ssm.png)

### Memory
Unfortunately the SSM agent can interfere with memory collection, so is disabled. If you require collecting memory, please use the Cado Host import option instead.
