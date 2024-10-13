---
title: Monitor platform health
hide_title: true
sidebar_position: 11
---

# How to Monitor the Platform Health

Cado provides two types of checks to help users monitor the platform's health and proper functioning: [Platform Check](/cado/manage/monitoring#platform-check) and [Account Check](/cado/manage/monitoring#account-check).

Additionally, you can view the overall platform health and statistics by navigating to the **Platform** tab. This section displays information such as Free Disk Space, Available Memory, Total Memory, CPU Usage, and pipeline processing details. The roundtrip response time for the API `/api/v2/system/status` should be less than or equal to 200ms for optimal performance.

For best results, maintaining maximum uptime of the Cado platform is recommended. Frequently shutting down the platform can cause database issues, so avoid doing this whenever possible.

## Platform Check

For a more in-depth assessment, you can run a Platform Check by navigating to **/platform** and clicking the **Run a Platform Check** button. This initiates a health check pipeline, which performs several tasks, including:

- Testing outbound connectivity.
- Validating the Cado Host download location.
- Verifying worker spin-up and shutdown.

![Platform Check](/img/manage-platform-check.png)

You can expand the pipeline to view the status of each task, allowing you to diagnose any issues. For example, if the Policy Simulation check task fails, you can expand it to view detailed error messages.

![Platform Check Result](/img/manage-platform-check-result.png)

## Account Check

To verify account-based settings, navigate to **/settings/cloud**, select an account, and click the **Run Account Check** button. This will perform a permissions and policy simulation check, ensuring that the correct permissions are in place for successful data acquisition. Account Checks can be run on both the account where Cado is deployed and any cross-accounts.

![Account Check](/img/manage-account-check.png)

Like the Platform Check, the Account Check will create a pipeline where tasks can be inspected to diagnose any issues that arise during the process.