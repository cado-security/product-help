---
title: How to send logs to Cado
hide_title: true
sidebar_position: 2
---

# How to send logs to Cado

The following methods for getting Logs to Cado are available, in order of ease:

1. Try sending logs to Cado automatically through the UI by navigating to the Help screen. Click on `Send Logs to Cado` and this will automatically package up a bundle of logs and send them directly to Cado over HTTPS 
2. If that fails, click on `Download Logs` and upload the zip file to the Customer Portal
3. If 1 and 2 fail, or you cannot log into the platform then open an SSH session to the Cado Platform (you'll need the key you used during deployment) and execute the command `sudo tar -cvzf /var/log/cado_logs.tar.gz /var/log` then upload the zip file to the Customer Portal.