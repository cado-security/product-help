---
title: Integrating Darktrace with FA&I
hide_title: true
sidebar_position: 2
---

# Integrating Darktrace with FA&I

## Integrating Darktrace with FA&I to perform forensic investigations

1. To integrate the two platforms, please follow the previous document [here](https://docs.cadosecurity.com/cado/integrations/Darktrace%20Platform/manualinvestigation) to log into the FA&I instance and create an API key. Select `Darktrace` as the role.
2. In Darktrace Threat Visualizer screen, navigate to System Config > Modules (/system-config#modules)
3. Select `Modules`, `Workflow Integrations` then click on `Darktrace /Forensic Acquisition & Investigation`

![Modules](/img/IntegratingDarktrace1new.png)

4. Make sure the **Integration** is `Enabled` then click on `+ New`
5. Ensure 'Send Alerts' is enabled, and insert the URL for the FA&I SaaS instance and the Darktrace role API key that you have just created

![Settings](/img/IntegratingDarktrace2.png)

6. You can configure the alerts sent at a more granular level using the advanced options. Ensure `Send Cyber AI Analyst Alerts` and `Send Model Alerts` is enabled at a minimum.

![Advanced](/img/advanceddtintergration.png)
   
7. Click `Save`
8. Click on `Verify alert settings`


## Manual Investigations

> **_NOTE:_**  In later Darktrace versions, the Forensic module can be automatically configured by enabling the 'Allow auto-configuration' setting. If this is not available to you, follow these steps:

1. To manually configure the `Forensics` module, close the `Workflow Integrations` screen and select `Forensics` module, then click on Darktrace /Forensic Acquisition & Investigation

![Manual](/img/IntegratingDarktrace4.png)
   
2. Select `Settings`, then use the same `URL` and `API Key` for the workflow integration in the form, then click on `Save`. Leave Groups, Users, and JWT fields blank.

![Manual](/img/IntegratingDarktrace5.png)

3. Click on `Authorize`

![Manual](/img/IntegratingDarktrace6.png)
