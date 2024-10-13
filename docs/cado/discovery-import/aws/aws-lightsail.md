---
title: Lightsail
hide_title: true
sidebar_position: 8
---

# How to Import AWS Lightsail

To import a Lightsail instance into the Cado platform, follow these steps:

1. **Create a Snapshot**  
   First, create a snapshot of the Lightsail instance you want to import.  
   ![Make Lightsail Snapshot](/img/make-lightsail-snapshot.png)

2. **Export to Amazon EC2**  
   After creating the snapshot, select the option to **Export to Amazon EC2**.  
   ![Export to EC2](/img/export-to-ec2.png)

3. **Import the EC2 EBS Snapshot**  
   Once the snapshot is exported to EC2, you can import it as an [EC2 EBS Snapshot](./aws-ami.md) using the usual method.


