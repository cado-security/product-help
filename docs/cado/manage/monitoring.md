---
title: Monitor platform health
hide_title: true
sidebar_position: 11
---

:::info
This section is not relevant to SaaS deployments.
:::

# How to Monitor the Platform Health

/ Forensic Acquisition and Investigation provides two types of checks to help users monitor the platform's health and proper functioning: [Platform Check](/cado/manage/monitoring#platform-check) and [Account Check](/cado/manage/monitoring#account-check).

Additionally, you can view the overall platform health and statistics by navigating to the **Platform** tab. This section displays information such as Free Disk Space, Available Memory, Total Memory, CPU Usage, and pipeline processing details. The roundtrip response time for the API `/api/v2/system/status` should be less than or equal to 200ms for optimal performance.

For best results, maintaining maximum uptime of the / Forensic Acquisition and Investigation platform is recommended. Frequently shutting down the platform can cause database issues, so avoid doing this whenever possible.

## Platform Check

For a more in-depth assessment, you can run a Platform Check by navigating to **/platform** and clicking the **Run a Platform Check** button. This initiates a health check pipeline, which performs several tasks, including:

- Testing outbound connectivity.
- Validating the Host download location.
- Verifying worker spin-up and shutdown.

![Platform Check](/img/manage-platform-check.png)

You can expand the pipeline to view the status of each task, allowing you to diagnose any issues. For example, if the Policy Simulation check task fails, you can expand it to view detailed error messages.

![Platform Check Result](/img/manage-platform-check-result.png)

## Account Check

To verify account-based settings, navigate to **/settings/cloud**, select an account, and click the **Run Account Check** button. This will perform a permissions and policy simulation check, ensuring that the correct permissions are in place for successful data acquisition. Account Checks can be run on both the account where / Forensic Acquisition and Investigation is deployed and any cross-accounts. For cloud accounts, the account check feature is supported for AWS, Azure, and GCP.

![Account Check](/img/manage-account-check.png)

Like the Platform Check, the Account Check will create a pipeline where tasks can be inspected to diagnose any issues that arise during the process.

### Account Check Permissions

These require:
```json
{
			"Effect": "Allow",
			"Resource": "*",
			"Action": [
			"iam:ListRolePolicies",
			"iam:GetPolicy",
			"iam:GetRolePolicy",
			"iam:GetPolicyVersion",
			"iam:SimulatePrincipalPolicy"
			],
			"Sid": "RequiredToCheckPolicy"
}
```

Or in Yaml format:
```yaml
- Effect: Allow
  Resource: "*"
  Action:
    - iam:ListRolePolicies
    - iam:GetPolicy
    - iam:GetRolePolicy
    - iam:GetPolicyVersion
    - iam:SimulatePrincipalPolicy
  Sid: RequiredToCheckPolicy
```

The permissions are required to run the Account Check. The permissions are used as follows:
* iam:ListRolePolicies is used to get all the policies associated with your cross-account role.
* iam:GetRolePolicy is used to get the permissions associated with the policies retrieved above.  These permissions are used for a permission check that determines if the policies required by / Forensic Acquisition and Investigation Response match those specified in our template.  We check against the permissions that are specified in our cross-account template.
* iam:SimulatePrincipalPolicy is used to run an AWS policy simulation against your role, for the permissions required by / Forensic Acquisition and Investigation Response.  These are run against the permissions specified in our cross account template.

If the above permissions aren’t added to your Cross-Account role, the Cross-Account checks, if run - will fail. 

Adding these permissions, however, it is optional - if you do not intend to run Cross-Account checks, this will not impact your / Forensic Acquisition and Investigation instance.   

If you decide to run the checks without updating the permissions, then they will fail, but this should not affect the platform functionality.
