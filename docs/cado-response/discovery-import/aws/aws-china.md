---
title: AWS China
hide_title: true
sidebar_position: 10
---

# How to import from AWS China

The Cado platform does not currently support native deployment into AWS China regions. The following advice should only be taken  subject to your policies and local regulations on copying data cross-border.

Cado Host acquisitions can be used to collect data from inside any system with an outgoing internet connection, into your primary Cado instance in an AWS global region.

To manually acquire data from AWS China regions, you can use the AWS CLI to copy the data to a region that is supported by Cado. AWS Support can provide guidance on how to copy data between partitions. 

AWS and community tools are available to help sync data, but are not supported or endorsed by Cado Security. For example:
- https://github.com/issacg/s3sync
- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html