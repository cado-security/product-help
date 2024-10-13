---
title: Deploy via API
hide_title: true
sidebar_position: 3
---

# How to Use the API to Generate Cado Host Collection Scripts

If you want to deploy **Cado Host** via a custom integration, you can use the Cado API to generate the Cado Host collection script. This can be useful, especially since the pre-signed URLs used to upload data expire 12 hours after being generated.

The script generated through the API can be executed on the target device to collect triage artifacts and upload them to cloud storage.

You can find an [example script](https://github.com/cado-security/cado-api-examples/blob/main/examples/cado_host.py) in the Cado API GitHub repository, which demonstrates how to generate a Cado Host collection script.

### Workflow Overview

The general workflow for generating and using a Cado Host collection script is illustrated below:

![API Workflow](/img/cado-host-api.png) 

This diagram provides an overview of how the API interacts with Cado Host to facilitate the collection and uploading of forensic data.