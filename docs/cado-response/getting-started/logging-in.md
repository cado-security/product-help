---
title: Logging In
hide_title: true
sidebar_position: 3
---


# Logging In

Depending on the cloud provider in which you deployed Cado Response, navigate to either your **[AWS Console]( https://console.aws.amazon.com)** or your **[Azure Portal](https://portal.azure.com)** and find the Public IPv4 address of your running Cado Response instance.  Open a browser and navigate to https://*<Cado_Response_IP>* where *<Cado_Response_IP>* is the IPv4 of the Cado Response instance. 

:::tip 
You will see a browser notification stating that "Your connection is not private". Cado is unable to automatically generate SSL certificates. In AWS, if you require a valid SSL certificate, the easiest way to create one for the encrypted HTTPS connection is to **[create your own ELB](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html)**
:::

When the installation is complete, you will see the login page.

![Login Page](/img/login.png)

You can now login with the username "admin" and the password "i-xxx", where "i-xxx" is the Instance ID of your Cado Response instance.

:::tip
On first boot, the platform will take about 10 minutes to install, during which time, you will see a messeage indicating that the system is "Installing Cado Response ..."
:::
