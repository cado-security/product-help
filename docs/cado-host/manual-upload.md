---
title: Manual Uploads
hide_title: true
sidebar_position: 7
---


You can also use Cado Host with the --single_file_unzipped parameter to upload a single file, such as a disk image or a previously collected Cado Host zip file.
This is useful if you do not have direct access to AWS/Azure/GCP as Cado Response will generate the credentials at Import > Cado Host.

To do so:
1. Generate the credentials for upload using Import > Forensic Artifacts 

2. Copy from --presigned_data to end of script to clipboard.
On the investigator system, execute:
```
cado-host.exe --single_file_unzipped <file> <paste clipboard presigned_data>
```
3. Cado Host will upload <file> and Cado Response will automatically start the import and processing of <file>
