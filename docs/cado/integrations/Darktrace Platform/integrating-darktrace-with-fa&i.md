---
title: Integrating Darktrace with FA&I
hide_title: true
sidebar_position: 2
---

# Integrating Darktrace with FA&I

1. To integrate the two platforms, please follow the previous document [Here](https://docs.cadosecurity.com/cado/integrations/Darktrace%20Platform/manualinvestigation) to log into the FA&I instance and create an API. Note for this integration please select `Darktrace` as the role
2. In Darktrace Threat Visualizer screen, navigate to /system-config#modules
3. Select `Modules`, `Workflow Integrations` then click on `Darktrace /Forensic Acquisition & Investigation`

![Modules](/img/IntegratingDarktrace1new.png)

4. Make sure the integration is `Enabled` and then click on `+ New`
5. Insert the URL for the FA&I SaaS instance and the Darktrace role API key that you have just created, then click `Save`

![Settings](/img/IntegratingDarktrace2.png)

6. Click on `Verify alert settings`

![Verify](/img/IntegratingDarktrace3.png)

> **_NOTE:_**  In later RC versions, the Forensic module will automatically be configured and enabled, ensure this switch is set to `on` after configuring the `Workflow Integration`.

7. To manually configure the `Forensics` module, close the `Workflow Integrations` screen and select `Forensics` module, then click on Darktrace /Forensic Acquisition & Investigation

![Manual](/img/IntegratingDarktrace4.png)
   
8. Select `Settings`, then use the same `URL` and `API Key` for the workflow integration in the form, then click on `Save`. At this time, don’t apply anything for `Groups`, `Users` or `JWT`

![Manual](/img/IntegratingDarktrace5.png)

9. Click on `Authorize`

![Manual](/img/IntegratingDarktrace6.png)
