---
title: SentinelOne
hide_title: true
sidebar_position: 3
---

# SentinelOne Integration
SentinelOne Singularity provides comprehensive visibility across your environment - giving you the breadth you need to detect malicious activity as soon as it occurs. Cado streamlines forensic analysis to quickly deliver essential historical context and depth to your investigation allowing you to quickly identify the root cause. Combined, the SentinelOne and Cado integration empowers organizations to detect, investigate, and remediate breaches with unmatched speed.

For more information, see the SentinelOne and Cado Security [Joint Solution Brief](https://assets.sentinelone.com/cado-jointsb).

:::tip
To leverage the integration between SentinelOne and Cado, you must have the SentinelOne Remote Script Orchestration feature (RSO) enabled in addition to access to the Cado platform. To get access to the Cado platform contact the Cado Security team **[here](http://offers.cadosecurity.com/cado-s1-integration-get-in-touch)**. 
:::

## Leveraging Cado & SentinelOne Integration

<iframe width="100%" height="628" src="https://www.youtube.com/embed/iIJjp28G6sk" title="Integrating SentinelOne with Cado Response" frameborder="0" allowfullscreen></iframe>

1. In the SentinelOne console, navigate to **Settings - Users - Service Users - Actions - Create New Service User**
2. Specify a name, expiration period, and specify the scope for which you want to enable integration
3. Copy or download the API Token
4. In the Cado platform, navigate to **Settings - Integrations - XDR** 
5. Specify the URL of the SentinelOne server and paste in the API key

![SentinelOne Integration](/img/s1-integration.png)

You can now import data into Cado using the [Import from XDR capability](/cado-response/discovery-import/import/intro.md#importing-from-xdr)