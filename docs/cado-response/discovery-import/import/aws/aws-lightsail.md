---
title: Lightsail
hide_title: true
sidebar_position: 8
---


# AWS Lightsail

First create a snapshot of the Lightsail instance you want to import:
![Make Lightsail Snapshot](/img/make-lightsail-snapshot.png)

Then select “Export to Amazon EC2”:
![Export to EC2](/img/export-to-ec2.png)

You can then import the EC2 EBS Snapshot as usual in Cado Response, by going to Import > Snapshot.
If you need to import the Instance cross-account, please see the [tutorial](https://medium.com/@iggyblob/how-to-transfer-an-amazon-lightsail-instance-to-another-aws-account-56136c407f8a) here.


