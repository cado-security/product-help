---
title: Health Monitoring
hide_title: true
sidebar_position: 11
---

# Monitoring the Health and Proper Function of the Cado platform

Within the Cado platform, you can see the platform health and statistics by navigating to the "Platform" tab.

This lists Free Disk Space, Available Memory, Total Memory, CPU Usage and pipeline processing details.  In addition, roundtrip response latency for the API `/api/v2/system/status` endpoint should be less than or equal to 200ms.

Generally, maintaining maximum uptime of the Cado is encouraged. Frequently shutting down the Cado platform could create database issues (as with other products), so it is not recommended to do this. 
