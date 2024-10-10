---
title: Set up proxy access
hide_title: true
sidebar_position: 9
---

# How to set up proxy access

Cado supports the use of proxies for communication between the Cado platform and services external to the environment in which you have deployed the Cado platform. This can include:

* Cross-cloud acquisitions
* XDR-based acquisitions
* Importing from a URL
* System updates
* Providing diagnostic information to Cado

Cado supports proxy authentication using basic HTTP and server certificate TLS authentication.

## Configure Proxy Access during installation
Please see the relevant deployment page, on how to configure proxy settings during installation by setting the proxy and proxy cert URL parameters.

## Configure Proxy Access after installation
To configure proxy access go to *Settings - Advanced*

Specify the URL of the proxy. If the proxy requires a user ID and password, include these as part of the URL in the format `http://user:password@hostname:port`

If the proxy uses TLS, specify URL from which you can download the server certificate URL in the *Proxy Cert URL* field. If the server does not user TLS, leave this field blank.

To test these settings, click the *Test proxy settings* button.

![Proxy Setting](/img/proxy-setting.png)

:::warning
Settings will only be applied after the next system upgrade
:::