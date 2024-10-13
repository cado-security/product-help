---
title: Forward logs to Cloudwatch
hide_title: true
sidebar_position: 3
---

# How to Forward Cado System and Processing Logs to CloudWatch

If the platform has the necessary IAM and network permissions to send logs to CloudWatch, both application and operating system logs are forwarded to the following locations:

```
"log_group_name": "/var/logs/cado",
"log_stream_name": "cado-logs-all"
```