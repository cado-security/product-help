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

1. Navigate to the **Detections > Integrations** and select **Wiz** from the set of source providers.

![Wiz Integration](/img/integrations-wiz.png)

2. Give the rule a **Name** and **Description** and select **Continue**.
3. Add the **EBS Tag Key** and **EBS Tag Value** pair for volumes copied by Wiz.
4. Navigate to the 'Rules' table and the newly created Wiz integration should be present.

Wiz will copy each Volume individually, so each Volume will have a unique Investigation. The Cado platform will automatically create an Investigation for each Volume copied by Wiz.
