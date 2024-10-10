---
title: Custom location for Cado Host
hide_title: true
sidebar_position: 5
---


# How to set a custom location to deploy Cado Host from

You can set a custom location from which Cado Host will be deployed from both the Import>Cado Host option, and the container acquisitions which utilize Cado Host.

This can be set under Settings > Advanced:
![Custom Cado Host Settings](/img/custom-cado-host.png)

This may be useful if you wish to deploy Cado Host from your own environment, allow a certain IP that hosts the binaries on your firewall, or perform your own static analysis of any binaries before they are deployed.

It is important that the Cado Host binary is the latest version for compatibility. 

For example, if the latest official URL for the Cado Host Linux binary is https://official-cado-bucket.s3-accelerate.amazonaws.com/cado-host/v1.5.4/linux/cado-host
and you are hosting the binaries under http://example.com/my-folder/ 
* Enter http://example.com/my-folder/ as the URL
* Ensure that http://example.com/my-folder/cado-host/v1.5.4/linux/cado-host exists

Please ensure that binaries are present for all operating systems to ensure collections can succeed in all environments:
* /linux/cado-host
* /windows/cado-host.exe
* /osx/cado-host
* /osx/cado-host-x86

The Cado Host binaries are typically updated 1-2 times per quarter. 

:::warning
For distribution compatibility the download operates over HTTPS and does not utilize AWS IAM, so a non-public S3 bucket cannot host the binaries. This will need to be accessible via a HTTPS download, for example: curl https://bucket/cado-host
:::

