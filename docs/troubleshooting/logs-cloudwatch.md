---
title: Forward logs to SIEMs
hide_title: true
sidebar_position: 3
---

# How to Forward Cado System and Processing Logs to SIEMs

## Log Location
Cado logs live under /var/logs/cado - A forwarding agent (e.g. Splunk Universal Forwarder) can be installed to forward logs from this location.

## Support for Log Forwarders
As log forwarders are third party applications, Cado cannot provide support for e.g. Splunk Universal Forwader, AWS CloudWatch, Google Ops Agent or Azure Montior. Please contact the relevant vendor for supprt if you are having issues with the vendor log forwarding agent.

## CloudWatch in AWS
The CloudWatch agent is pre-installed in Cado releases.
If the platform has the necessary IAM and network permissions to send logs to CloudWatch, both application and operating system logs are forwarded to the following locations, specified in the cloudwatch agent configuration:

```
  "file_path": "/var/log/*.log",
  "log_group_name": "/var/logs/cado",
  "log_stream_name": "cado-logs-all"
```

## Forwarding full Cado analysis
If SIEM forwarding is enabled (Settings > SIEM), all output is also recorded to /var/log/ and will be picked up by log forwarders along with other logs.
Forwarding to S3 is the reccomended solution for forwarding full Cado analysis as forwarding agents are not designed to forward log logs in this manner.

## Third party log forwarder resources
* [Splunk Universal Log Forwarder Configuration](https://docs.splunk.com/Documentation/Forwarder/9.4.0/Forwarder/Configuretheuniversalforwarder)
* [Troubleshooting CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/troubleshooting-CloudWatch-Agent.html)
* [Log forwarding with Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-rule-structure)
* [Log forwarding with Google Ops Agent](https://cloud.google.com/logging/docs/agent/ops-agent/configuration)
