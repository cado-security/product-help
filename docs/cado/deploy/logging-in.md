---
title: Log in
hide_title: true
sidebar_position: 6
---


# How to log in to the / Forensic Acquisition and Investigation platform

Depending on the cloud provider in which you deployed the platform, navigate to either your **[AWS Console]( https://console.aws.amazon.com)** or your **[Azure Portal](https://portal.azure.com)** and find the Public IPv4 address of your running / Forensic Acquisition and Investigation instance.  Open a browser and navigate to `https://<Cado_IP>` where `<Cado_IP>` is the IPv4 of the / Forensic Acquisition and Investigation instance.  You will now be able to log into the platform. 

:::tip 
You will see a browser notification stating that "Your connection is not private". / Forensic Acquisition and Investigation is unable to automatically generate SSL certificates. In AWS, if you require a valid SSL certificate, the easiest way to create one for the encrypted HTTPS connection is to **[create your own Elastic Load Balancer](../deploy/aws/networking/aws-load-balancer.md)**
:::

![Login Page](/img/login.png)

### Default Login
On first boot, the platform will take about 10 minutes to install, during which time, on the login URL page, you will see a message indicating that the system is "Installing / Forensic Acquisition and Investigation...".

After initial install, you can login with the username `admin`.

For AWS, the password is `i-xxx`, where `i-xxx` is the Instance ID of your / Forensic Acquisition and Investigation instance.

For Azure, the password is the very long resource ID that can be found by opening the VM in the Azure portal > Settings > Properties > Resource ID starting with  `/subscription/...` ending with `/subscription/.../VM NAME`  After initial login, you will be asked to accept the EULA and change your password.

For GCP, the password is the instance-id found in the Compute Engine console for your instance e.g. `87844815082567668776`

### Password Requirements
Current password requirements (for local / Forensic Acquisition and Investigation users) are as follows: at least 1 uppercase, 1 lowercase, 1 number and is at least 8 characters long. Also, passwords that match a common password list will not be allowed. 
