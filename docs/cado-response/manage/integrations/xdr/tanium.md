---
title: Tanium
hide_title: true
sidebar_position: 4
---


# Processing Tanium Live Response Collections in Cado
The Cado platform can process Tanium Live Response collections, including the trace database.

## Collecting a Live Response Package using Tanium
Follow the [Tanium documentation](https://help.tanium.com/bundle/ug_threat_response_cloud/page/threat_response/collect_data.html) to collect a Live Response package from a system to either Azure Storage or AWS S3 Storage.

## Processing using Cado
To process the Tanium Live Response package, import to collected Live Response package into the Cado platform from S3 or Azure Storage.
Please see our [blog](https://www.cadosecurity.com/blog/investigating-tanium-live-response-collections-in-the-cado-platform) for more information on how the data is presented in the Cado platform.

## Overview
A high-level overview of the process is as follows:
![Tanium Cado](/img/tanium-cado.png)

For more information, please see [here](https://www.cadosecurity.com/blog/investigating-tanium-live-response-collections-in-the-cado-platform).

# Collecting Cado Host Data using Tanium
Tanium can be used to deploy the Cado Host collection script to endpoints, as a [Tanium Package](https://help.tanium.com/bundle/ug_console_cloud/page/platform_user/authoring_packages.html).

## Getting the Cado Host Collection Script
The Cado Host collection script can be downloaded from the Cado Response platform.  To do this, navigate to the `Project > Import > Cado Host`.

By default, scripts are generated with a pre-signed url to upload the collected data to cloud storage. The pre-signed URL is valid for 12 hours, so the script should be run within that time frame.

If you are deployed in AWS, you can also use a long-term access key and secret to upload the data to S3 with the `--access_key` and `--secret-key` options. This avoids the need to use time-limited pre-signed URLs, but the access key and secret should be stored securely and limited to write-only access to the S3 bucket.

## Adding the Cado Host Collection Script to Tanium
Please refer to [Tanium documentation](https://help.tanium.com/bundle/ug_console_cloud/page/platform_user/authoring_packages.html) on how to create packages.

## Overview
A high-level overview of the process is as follows:
![Tanium Cado Host](/img/tanium-cado-host.png)