---
title: Monitoring and Onboarding Cloud accounts using the Darktrace / CLOUD wizard
hide_title: true
sidebar_position: 1
---

# Monitoring and Onboarding Cloud accounts using the Darktrace / CLOUD wizard

The Darktrace / CLOUD setup wizard can be used to monitor AWS accounts and Azure Subscriptions (for example by collecting flow logs, audit logs, and enabling autonomous response), as well as provision the necessary IAM role and policy to allow Darktrace /Forensic Acquisition and Investigation to acquire forensic data from supported workloads.

To being you will need to create an API key from within the FA&I platform that has `Darktrace` Role:

1. Log into the FA&I instance using [AAISP](https://activeai.darktrace.com/) then in the settings menu, select the `API` tab
2. Click on `+ Create API key`

![Create API Key](/img/cloudwizard1.png)
   
3. Give an appropriate Key name, leaving the Key role as `Darktrace`
4. Click `Create`

![Key](/img/cloudwizard2new.png)

5. In the next window be sure to copy the `Secret key` and store the key in a secure location
6. In Darktrace Cloud console, select configuration menu then `Cloud Account Setup`

![Accountsetup](/img/cloudwizard3new.png)

7. Select the Platform type that’s being integrated with FA&I, then select `Confirm Platform`
8. Select the setup type and click `Begin Setup`, this guide will use `Azure` however the process should be similar for `AWS`

![platformtype](/img/cloudwizard4.png)

9. Add FA&I URL as the `Host Address` then add the recently created `API Key` and click **Confirm Settings**
10. Click on `Deploy with Cloud Shell Script`

![Cloudshellscript](/img/deploywithcloudshellscript.png)

    
11. On the next screen wait for the script to be created then select `Copy` or `Download`
12. Provide the script to the user to run within their Cloud Shell
13. Once you have confirmation that the script completed correctly, tick box at stage 4 to confirm it completed then click **Deploy**

![Deploy](/img/dtdeploynew.png)
   
14. Once the deployment is verified, click on `Start Cloud Monitoring`

![startcloudmonitoring](/img/cloudwizard5.png)

