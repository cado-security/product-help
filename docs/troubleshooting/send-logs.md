---
title: How to send logs to Cado
hide_title: true
sidebar_position: 2
---

# How to Send Logs to Cado

There are several methods for sending logs to Cado, listed in order of ease:

1. **Automatically through the UI**: Navigate to the Help screen in the Cado platform and click on `Send Logs to Cado`. This will automatically package the logs and send them securely to Cado over HTTPS.
  
2. **Download and upload manually**: If automatic sending fails, click on `Download Logs` in the UI. Then, upload the downloaded zip file to the Customer Portal.

3. **Via SSH**: If you cannot access the platform via the UI, open an SSH session to the Cado platform using the key from deployment. Run the following command:
   ```
   sudo tar -cvzf /var/log/cado_logs.tar.gz /var/log
   ```
   Then, upload the generated zip file to the Customer Portal.

## Downloading Logs for a single processing pipeline
Logs for an individual pipeline can be downloaded by selecting "Platform" on the left menu, then clicking "Download pipeline" on the pipeline you are interested in. This will download a zip file containing the logs just for that pipeline.

## Data Privacy
Secure settings in logs are redacted before sending to Cado.

For example, the following log line:
```
Got setting CLOUD_CRED_AWS_Default Acquisition: *****
```