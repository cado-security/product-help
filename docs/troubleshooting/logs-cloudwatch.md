---
title: Forward logs to SIEMs
hide_title: true
sidebar_position: 3
---

# How to Forward Cado System and Processing Logs to SIEMs

## Log Location
Cado logs live under /var/logs/cado - A forwarding agent (e.g. Splunk Universal Forwarder) can be installed to forward logs from this location.

## CloudWatch in AWS

If the platform has the necessary IAM and network permissions to send logs to CloudWatch, both application and operating system logs are forwarded to the following locations:

```
"log_group_name": "/var/logs/cado",
"log_stream_name": "cado-logs-all"
```

## Forwarding full Cado analysis output to Cloudwatch
If SIEM forwarding is enabled (Settings > SIEM), all output is also forwarded to CloudWatch so long as the agent [has access](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/troubleshooting-CloudWatch-Agent.html) to CloudWatch.