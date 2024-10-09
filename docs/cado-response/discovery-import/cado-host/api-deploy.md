---
title: Deploy via API
hide_title: true
sidebar_position: 3
---

# How to use the API to generate Cado Host collection scripts
If you want to deploy Cado Host via an integration you build yourself, you can use the Cado Response API to generate the Cado Host collection script. This may be required as by default the pre-signed URLs to upload data expire 12 hours after being generated.
This script can then be run on the target device to collect the triage artifacts and upload them to cloud storage.

An [example script](https://github.com/cado-security/cado-api-examples/blob/main/examples/cado_host.py) to generate a Cado Host collection script is available in the example API GitHub repository.

An overview of the workflow is below:
![API Workflow](/img/cado-host-api.png)