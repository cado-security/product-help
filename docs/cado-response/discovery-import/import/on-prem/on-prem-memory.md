---
title: Memory
hide_title: true
sidebar_position: 4
---

# Memory from On-Premises Systems
The Cado platform uses [Cado Host](/cado-host/intro) to acquire memory from on-premises systems.

We collect memory from individual processes as .mem files, viewable under the "process_dumps" folder. We find this allows for more reliable analysis than our previous version which collected a single capture of memory, and utilises our open source tool [varc](https://github.com/cado-security/varc)

You can perform a memory acquisition of a Windows or Linux system using Cado Host by clicking `Import > Forensic Artifacts` and running the pre-generated script on the host device.
