---
title: Health Monitoring
hide_title: true
sidebar_position: 11
---

# Monitoring the Health and Proper Function of the Cado platform

Cado has two types of checks to enable users to monitor the health and proper function of the platform - a [Platform Check](/cado-response/manage/monitoring#platform-check) and an [Account Check](/cado-response/manage/monitoring#account-check).

As well as this, you can see the high level platform health and statistics by navigating to the 'Platform' tab. This lists Free Disk Space, Available Memory, Total Memory, CPU Usage and pipeline processing details.  In addition, roundtrip response latency for the API `/api/v2/system/status` endpoint should be less than or equal to 200ms.

Generally, maintaining maximum uptime of the Cado is encouraged. Frequently shutting down the Cado platform could create database issues (as with other products), so it is not recommended to do this. 

## Platform Check

For a more comprehensive check, users can run a Platform Check by navigating to /platform and clicking the 'Run a Platform Check' button. This will start a new Healtheck pipeline and execute a series of tasks such as testing outbound connectivity, validating the Cado Host download location, and validating worker spin up and shut down.

![Platform Check](/img/manage-platform-check.png)

The pipeline can be expanded to see the state of each task, allowing any issues to be diagnosed. In the example below, the Policy Simulation check task has failed - this can can be further expanded to see detailed error messages. 

![Platform Check Result](/img/manage-platform-check-result.png)

## Account Check

Account based checks can be performed by navigating to /settings/cloud, selecting an account of choice and then clicking the 'Run Account Check' button. This will perform a permissions and policy simulation check to ensure the correct permissions are in place for this account to successfully perform data acqusition. Account Checks can be performed on both the account Cado has been deployed into as well as cross account.

![Platform Check](/img/manage-account-check.png)

Similarly to a Platform Check, once the check has been started, a new pipeline will be created where tasks can be inspected to diagnose any issues. 
