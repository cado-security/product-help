---
title: SentinelOne
hide_title: true
sidebar_position: 3
---

# How to Collect Data from SentinelOne

SentinelOne Singularity provides comprehensive visibility across your environment, allowing you to detect malicious activity as soon as it occurs. Cado enhances forensic analysis, quickly delivering historical context and depth to your investigation, helping you identify the root cause efficiently. Together, the SentinelOne and Cado integration enables organizations to detect, investigate, and remediate breaches with unparalleled speed.

For more information, see the SentinelOne and Cado Security [Joint Solution Brief](https://assets.sentinelone.com/cado-jointsb).

:::tip
To use the integration between SentinelOne and Cado, you need the SentinelOne Remote Script Orchestration (RSO) feature enabled, along with access to the Cado platform. To gain access to Cado, contact the Cado Security team **[here](http://offers.cadosecurity.com/cado-s1-integration-get-in-touch)**. Note that the RemoteOps feature must be enabled **for each site** in your SentinelOne management console.
:::

## Using the Cado & SentinelOne Integration

<iframe width="100%" height="628" src="https://www.youtube.com/embed/iIJjp28G6sk" title="Integrating SentinelOne with Cado" frameborder="0" allowfullscreen></iframe>

1. In the SentinelOne console, go to **Settings > Users > Service Users > Actions > Create New Service User**.
2. Ensure that your service user has **Global Account scope**, not **Site scope**.
3. Assign the following additional permissions to the service user:
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
4. Specify a name and the expiration period for the integration.
5. Copy or download the API Token.
6. In the Cado platform, go to **Settings > Integrations > XDR**.
7. Enter the URL of the SentinelOne server and paste the API key.

![SentinelOne Integration](/img/s1-integration.png)

You can now import data into Cado using the **Import from XDR** feature.

:::note
Currently, Windows and Linux operating systems are supported with the SentinelOne integration.
:::