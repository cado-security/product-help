---
title: How to forward Cado system and processing logs to Cloudwatch
hide_title: true
sidebar_position: 3
---

# How to forward Cado system and processing logs to Cloudwatch

Provided the platform has IAM and network permissions to send logs to Cloudwatch, application and operating system logs are sent to:
```
                        "log_group_name": "/var/logs/cado",
                        "log_stream_name": "cado-logs-all"
```