---
title: Wiz
hide_title: true
sidebar_position: 1
---

# How to Integrate Wiz with Cado

The Cado platform automates the processing and analysis of AWS EC2 EBS volumes acquired through the Wiz platform. By integrating Wiz with Cado, you can seamlessly automate the collection, processing, and analysis of AWS EC2 virtual machines without granting Cado direct access to the environment where the EC2 instances are located.

![Wiz](/img/wiz-integration.png)

### Setup

To integrate Wiz with Cado, follow these steps:

1. Navigate to the **Settings > Advanced** page in the Cado platform.
2. Add the **Tag Key** and **Value** pair for volumes copied by Wiz.

![Setup](/img/wiz-settings.png)

Wiz will copy each Volume individually, so each Volume will have a unique Investigation. The Cado platform will automatically create an Investigation for each Volume copied by Wiz.
