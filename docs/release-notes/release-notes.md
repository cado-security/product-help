---
title: Release Notes
hide_title: true
sidebar_position: 1
---

# Cado Release Notes
## Latest release notes

## v.2.37.0
`Released 2023-03-16`
- Manage Azure resources from tenant root or management group levels
- Improved Audit logs UI
- Bug fixes and performance improvements

## v.2.35.0
`Released 2023-03-10`
- Improved support of KMS encrpyted volumes (NOTE: requires add "iam:CreateServiceLinkedRole" role permission)
- Bug fixes and performance improvements

## v.2.34.0
`Released 2023-02-23`
- Ability to set customer AWS EBS snapshot tag and prefix to monitor and automatically import
- Improved import page
- Improved tabluar view of timeline events (beta)
- More detail around context of imported evidence
- Bug fixes and performance improvements

## v.2.33.0
`Released 2023-02-17`
- Legacy memory acquisition capability deprecated
- Added project ID and evidence ID to audit log table
- Asset metadata available for all acquired EC2 instances (NOTE: requires additional "iam:GetInstanceProfile" role permission)
- Bug fixes and performance improvements


## v.2.32.0
`Released 2023-02-09`
- Support for acquiring AWS volumes encrypted using default key (NOTE: requires additional  "ReplicateKey" role permission)
- Bug fixed and perfomance improvements


## v.2.31.0
`Released 2023-02-08`
- Bug fixes and performance improvements

## v.2.29.0
`Released 2023-02-06`
- Additional file attributes in file browser view
- Display more AWS tags/metadata for cloud native acquisitions
- Bug fixes and performance improvements

## v.2.28.0
`Released 2023-02-03`
- Improved import navigation for newly created projects
- Improved search for MITRE ATT&ACK IDs
- Improved reporting on MACB timestamps
- Bug fixes and performance improvements

## v.2.26.0
`Released 2023-01-27`
- New Audit Logs, visible under "Help"
- New Date and Time selection for Search
- Improved display of Cado Host and Container analysis
- Matching content for file detections is now displayed
- You can now set a custom Okta SAML Admin Group
- Fixed issue where an expired login session can lead to "oops" error. If you can encounter this - Login in Incognito mode or Clear local storage, then Upgrade.

## v.2.25.0
`Released 2023-01-19`
- Support for importing containers from GKE environment
- Bug fixes and performance improvements

## v.2.24.0
`Released 2023-01-18`
- Ability to identify potentially compromised roles that can be isolated as part of Auto-Investigation
- Bug fixes and performance improvements

## v.2.22.0
`Released 2023-01-14`
- Improved support for large uploads and memory collections from Cado Host
- Added support for ECR Based Lambda functions. Requires adding "ecr:GetAuthorizationToken", "ecr:GetDownloadURLForLayer", "ecr:BatchGetImage" to the "RequiredForLambdaImport" section of the Cado role.
- Faster processing of the MFT file on Windows systems
- More detailed error reporting in the UI
- Acquisition logs are now included in the log bundle

## v.2.21.0
`Released 2023-01-04`
- Bug fixes and performance improvements

## v.2.20.0
`Released 2022-12-30`
- Bug fixes and performance improvements

## v.2.19.0
`Released 2022-12-23`
- Bug fixes and performance improvements

## v.2.18.0
`Released 2022-12-22`
- Bug fixes and performance improvements

## v.2.17.0
`Released 2022-12-20`
- Bug fixes and performance improvements


## v.2.16.0
`Released 2022-12-15`
- Support for automatically monitoring for AWS GuardDuty alerts - *Settings - Advanced*
- Bug fixes and performance improvements

## v.2.15.0
`Released 2022-12-12`
- Significant front end performance improvement
- Other bug fixes and performance improvements

## v.2.14.0
`Released 2022-11-30`
- Bug fixes and performance improvements


## v.2.12.0
`Released 2022-11-28`
- Bug fixes and performance improvements


## v.2.11.0
`Released 2022-11-21`
- Support for acquiring and processing Azure activity logs
- Bug fixes and performance improvements


## v.2.9.0
`Released 2022-11-14`
- Increases the timeout when importing from Azure

## v.2.8.0
`Released 2022-11-11`
- Display MITRE ATT&CK categories on Auto-investigate tab.
- Add a button to cycle through the next and previous alarm events.
- Bug fix to processing systems that were upgraded from v1.x series. Generating Alarms attached to a system could cause processing to exit.
- Better stability when downloading large sets of logs.


## v2.7.0
`Released 2022-11-04`
- Native integration with XDR solutions
- Ability to view metadata about acquired AWS EC2 instances collected via *Alternate Triage Acquisition*
- Ability to take action against compromised AWS EC2 instances collected via *Alternate Triage Acquistion*
- Cado host SSM improvements 
- Allow Cado Host to collect only specified files
- Fix bug where successful authentication raises an error
- Various other bug fixes and improvements
- *Note: In order to use `Use Alternate Triage Acquisition` in EC2 acquisition or take actions against a compromised asset role update will be required*

## v.2.6.0
`Released 2022-10-11`
- Ability to re-run IoCs and Yara rules on existing evidence item
- Better display of zipped e0X files
- Fix bug where old/bad task defs could stop workers from starting

## v.2.5.0
`Released 2022-10-07`
- Ability to perform triage collection EC2 instances using Cado Host 

## v.2.4.0
`Released  2022-10-06`
- Fixes to allow for AWS Role requirements changes
- Cado Host now includes volatile data, presenting the collected process.json file as a graph of running processes
- New icons and clearer presentation of the project and evidence graph
- Improved auto-investigate algorithm, which better filters to only the most relevant events
- *Note: This release requires an updated IAM role*

## v.2.2.0
`Released  2022-09-16`
- Improvements to identify date and timestamp on events, reducing the number of events with unknown timestamp

## v.2.1.1
`Released  2022-09-12`
- Hotfix for single sign on
- Improved navigation and filtering for key events. Automated Investigation tab now shows 50 most relevant events. To recreate deprecated Key Events tab use search term `alarm_severity: [1 TO 3]`

## v2.1
`Released 2022-09-06`
- Multiple performance improvements and bugfixes

## v2.0.2
`Released: 2022-08-16`
- Hotfix for processing and deletion speed improvements and bugfix.

## v2.0.1
`Released: 2022-08-09`
- Speed and worker management improvements

## v2.0.0
`Released: 2022-08-09`
- Cross cloud-data import and analysis
- Collecting data from Google Cloud environments
- Interconnected event analysis
- Data performance and footprint improvements
- Cloud asset landscape
- New storage architecture

## v1.6.5
`Released: 2022-07-28`
- Bug fixes to Cado Host

## v1.6.4
`Released: 2022-07-26`
- Bug fix in Cado Host which could error out on some files.
- Additional notifications on Okta misconfigurations.

## v1.6.3
`Released: 2022-07-06`
- Faster processing engine, backported from an upcoming 2.0 release.
- When uploading memory, Cado Response will now attempt to grant the kms:Decrypt for certain S3 configurations.
- Fix to large log exports.

## v1.6.2
`Released: 2022-06-30`
- When acquiring memory, Cado Response will now attempt to grant the kms:GenerateDataKey permission to enable saving memory to more KMS encrypted S3 configurations.

## v1.6.1
`Released: 2022-06-28`
- Speed and stability improvements to importing large AWS Disks

## v1.6.0
`Released: 2022-06-28`
- Pre-Release of GCP Imports

## Older Release Notes
Please contact support@cadosecurity.com for a copy of release notes prior to v1.6.0.
