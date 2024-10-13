---
title: Tanium
hide_title: true
sidebar_position: 4
---

# How to Process Tanium Live Response Collections

The Cado platform can process Tanium Live Response collections, including the trace database.

## Collecting a Live Response Package with Tanium
Follow the [Tanium documentation](https://help.tanium.com/bundle/ug_threat_response_cloud/page/threat_response/collect_data.html) to collect a Live Response package from a system and store it in either Azure Storage or AWS S3 Storage.

## Processing in Cado
To process the Tanium Live Response package, import the collected package into the Cado platform from S3 or Azure Storage. For more details on how the data is presented in Cado, refer to our [blog](https://www.cadosecurity.com/blog/investigating-tanium-live-response-collections-in-the-cado-platform).

## Overview
Here’s a high-level overview of the process:
![Tanium Cado](/img/tanium-cado.png)

For more information, visit [this page](https://www.cadosecurity.com/blog/investigating-tanium-live-response-collections-in-the-cado-platform).

# Collecting Cado Host Data with Tanium

Tanium can be used to deploy the Cado Host collection script to endpoints as a [Tanium Package](https://help.tanium.com/bundle/ug_console_cloud/page/platform_user/authoring_packages.html).

## Getting the Cado Host Collection Script
You can download the Cado Host collection script directly from the Cado platform by navigating to `Project > Import > Cado Host`.

By default, the script is generated with a pre-signed URL to upload the collected data to cloud storage. The pre-signed URL is valid for 12 hours, so the script must be run within that time.

For AWS deployments, you can use long-term access keys and secrets to upload data to S3 using the `--access_key` and `--secret-key` options. This eliminates the need for time-limited pre-signed URLs, but ensure that the keys are stored securely and have write-only access to the S3 bucket.

## Adding the Cado Host Collection Script to Tanium
For guidance on creating packages in Tanium, refer to the [Tanium documentation](https://help.tanium.com/bundle/ug_console_cloud/page/platform_user/authoring_packages.html).

## Overview
Here’s a high-level overview of the process:
![Tanium Cado Host](/img/tanium-cado-host.png)