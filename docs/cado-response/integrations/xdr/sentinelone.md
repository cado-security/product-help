---
title: SentinelOne
hide_title: true
sidebar_position: 3
---

# How to collect data from SentinelOne
SentinelOne Singularity provides comprehensive visibility across your environment - giving you the breadth you need to detect malicious activity as soon as it occurs. Cado streamlines forensic analysis to quickly deliver essential historical context and depth to your investigation allowing you to quickly identify the root cause. Combined, the SentinelOne and Cado integration empowers organizations to detect, investigate, and remediate breaches with unmatched speed.

For more information, see the SentinelOne and Cado Security [Joint Solution Brief](https://assets.sentinelone.com/cado-jointsb).

:::tip
To leverage the integration between SentinelOne and Cado, you must have the SentinelOne Remote Script Orchestration feature (RSO) enabled in addition to access to the Cado platform. To get access to the Cado platform contact the Cado Security team **[here](http://offers.cadosecurity.com/cado-s1-integration-get-in-touch)**. The RemoteOps feature needs to be enabled **for every site** you have in your SentinelOne management console. 
:::

## Leveraging Cado & SentinelOne Integration

<iframe width="100%" height="628" src="https://www.youtube.com/embed/iIJjp28G6sk" title="Integrating SentinelOne with Cado Response" frameborder="0" allowfullscreen></iframe>

1. In the SentinelOne console, navigate to **Settings - Users - Service Users - Actions - Create New Service User**
2. Your service user **must** be in Global Account scope, not a Site scope.
3. The service user requires the following extra permissions:
- RemoteOps > View
- RemoteOps > View Output
- RemoteOps > Upload
- RemoteOps > Run Scripts > Run Data Collection Script
- RemoteOps > Run Scripts > Run Artifact Collection Script
- RemoteOps > Run Scripts > Run Action Script
- RemoteOps > Delete
- RemoteOps > Cancel Scripts > Cancel Data Collection Script
- RemoteOps > Cancel Scripts > Cancel Artifact Collection Script
- RemoteOps > Cancel Scripts > Cancel Action Script
- Task Management > View 
3. Specify a name and expiration period for which you want to enable integration
4. Copy or download the API Token
5. In the Cado platform, navigate to **Settings - Integrations - XDR** 
6. Specify the URL of the SentinelOne server and paste in the API key

![SentinelOne Integration](/img/s1-integration.png)

You can now import data into Cado using the import from XDR capability.

:::note
 Windows and Linux Operating Systems are currently supported with the SentinelOne integration. 
:::
