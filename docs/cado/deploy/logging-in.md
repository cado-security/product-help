---
title: Log in
hide_title: true
sidebar_position: 6
---


# How to log in to the Cado platform

Depending on the cloud provider in which you deployed the Cado platform, navigate to either your **[AWS Console]( https://console.aws.amazon.com)** or your **[Azure Portal](https://portal.azure.com)** and find the Public IPv4 address of your running Cado instance.  Open a browser and navigate to `https://<Cado_IP>` where `<Cado_IP>` is the IPv4 of the Cado instance.  You will now be able to log into the platform. 

:::tip 
You will see a browser notification stating that "Your connection is not private". Cado is unable to automatically generate SSL certificates. In AWS, if you require a valid SSL certificate, the easiest way to create one for the encrypted HTTPS connection is to **[create your own Elastic Load Balancer](../deploy/aws/networking/aws-load-balancer.md)**
:::

![Login Page](/img/login.png)

### Default Login
On first boot, the platform will take about 10 minutes to install, during which time, on the login URL page, you will see a message indicating that the system is "Installing Cado...".

After initial install, you can login with the username `admin`.

For AWS, the password is `i-xxx`, where `i-xxx` is the Instance ID of your Cado instance.

For Azure, the password is the very long instance id `/subscription/.../cado-main-vm` where `/subscription/.../cado-main-vm` is the full instance id.  After initial login, you will be asked to accept the EULA and change your password.

For GCP, the password is the instance-id found in the Compute Engine console for your instance e.g. `8784481508256766876`
