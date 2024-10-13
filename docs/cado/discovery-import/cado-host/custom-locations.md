---
title: Custom location for Cado Host
hide_title: true
sidebar_position: 5
---

# How to Set a Custom Location to Deploy Cado Host From

You can configure a custom location for deploying Cado Host, whether using the **Import > Cado Host** option or during container acquisitions that utilize Cado Host.

This configuration can be set under **Settings > Advanced**:

![Custom Cado Host Settings](/img/custom-cado-host.png)

This feature is helpful if you want to:
- Deploy Cado Host from your own environment.
- Allow a specific IP that hosts the binaries through your firewall.
- Perform static analysis of the binaries before they are deployed.

### Important Notes:
- Ensure that the Cado Host binary is the latest version to maintain compatibility with the platform.

For example:
If the latest official URL for the Cado Host Linux binary is:
```
https://official-cado-bucket.s3-accelerate.amazonaws.com/cado-host/v1.5.4/linux/cado-host
```
And you are hosting the binaries at:
```
http://example.com/my-folder/
```
Then:
- Enter `http://example.com/my-folder/` as the custom URL.
- Ensure the following structure exists: `http://example.com/my-folder/cado-host/v1.5.4/linux/cado-host`.

### Ensure Binary Availability:
To ensure collections succeed across all environments, binaries for all operating systems must be available:
- `/linux/cado-host`
- `/windows/cado-host.exe`
- `/osx/cado-host`
- `/osx/cado-host-x86`

Cado Host binaries are typically updated 1-2 times per quarter.

:::warning
For compatibility, the download uses **HTTPS** and does not leverage AWS IAM. Therefore, non-public S3 buckets cannot be used to host the binaries. The binaries must be accessible via an HTTPS download link, such as: 
```
curl https://bucket/cado-host
```
:::