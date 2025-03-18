---
title: Log in
hide_title: true
sidebar_position: 6
---

# Setup Wizard

The setup wizard will walk you through the setup of your Cado Platform.

## How to log in to the Cado platform

Depending on the cloud provider in which you deployed the Cado platform, navigate to either your **[AWS Console]( https://console.aws.amazon.com)** or your **[Azure Portal](https://portal.azure.com)** and find the Public IPv4 address of your running Cado instance.  Open a browser and navigate to `https://<Cado_IP>` where `<Cado_IP>` is the IPv4 of the Cado instance.  You will now be able to log into the platform. 

:::tip 
You will see a browser notification stating that "Your connection is not private". Cado is unable to automatically generate SSL certificates. In AWS, if you require a valid SSL certificate, the easiest way to create one for the encrypted HTTPS connection is to **[create your own Elastic Load Balancer](../deploy/aws/networking/aws-load-balancer.md)**
:::


### Steps

**1.** On first boot, the platform will take approximately **10 minutes** to install. During this time, the login URL page will display a message indicating that the system is **"Installing Cado..."**.

![Login Page](/img/login.png)

   i. For all cloud providers the default username will be **"admin"**
   
   ii. Your cloud provider will determine what your default password will be.


<details>
  <summary><strong>AWS</strong></summary>

- **Password:** `i-xxx`  
  - Where `i-xxx` is the **Instance ID** of your Cado instance.

</details>

<details>
  <summary><strong>Azure</strong></summary>

- **Password:** The **resource ID** of the VM.  
  - To locate it:
    1. Open the VM in the **Azure portal**.
    2. Navigate to **Settings > Properties**.
    3. Find the **Resource ID** (starting with `/subscription/...` and ending with `/VM NAME`).

</details>

<details>
  <summary><strong>GCP</strong></summary>

- **Password:** The **instance ID** found in the Compute Engine console.  
  - Example: `87844815082567668776`

</details>

<details>
  <summary><strong>AWS High Availability (HA)</strong></summary>

- For High Availability in AWS, the password is the name of the load balancer.  
  - Example: If the full ARN of the load balancer is:  
    ```
    arn:aws:elasticloadbalancing:us-east-1:111:loadbalancer/app/my-load-balancer/abc
    ```
    then the password will be:  
    ```
    my-load-balancer
    ```

</details>


**2.** Agree to Cado’s terms and conditions of use.

![EULA](/img/EULA.png)

**3.** You will now be prompted to change your password.

When changing your password, ensure it meets the required complexity standards.  

### Minimum Password Requirements:  
- At least **1 uppercase** letter  
- At least **1 lowercase** letter  
- At least **1 number**  
- Minimum **8 characters** in length  
- **Cannot reuse** a previously used password  

![Change Password](/img/Change-Password.png)

**4.** Upload your license provided by the Cado sales team. Contact support@cadosecurity.com if you haven’t received this.

![Upload License](/img/Upload-License.png)

**5.** The Cado deployment requires a storage bucket for various functionality including evidence preservation, health checks and Cado host based acquisitions.

Select your cloud provider below for the relevant document:

- AWS - [AWS Bucket Document](https://docs.cadosecurity.com/cado/deploy/aws/aws-bucket)

- Azure - [Azure Bucket Document](https://docs.cadosecurity.com/cado/deploy/azure/azure-bucket)
  
- GCP - [GCP Bucket Document](https://docs.cadosecurity.com/cado/deploy/gcp/gcp-bucket)
