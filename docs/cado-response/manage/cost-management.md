---
title: Cost Management
hide_title: true
sidebar_position: 11
---

# Estimating the costs for running the Cado platform in AWS
You can view the AWS Cost Calculator for a typical Cado installation at https://calculator.s3.amazonaws.com/index.html#r=IAD&key=files/calc-bca484373bcb2d07322fd6716a197d1cdc629534&v=ver20210903uJ

This includes: 
- A central platform server running permanently with 500 GB of space for hot data access
- 36.5 hours (5% of the time) worker usage to process data
- 500 GB of permanent S3 Storage used for forensic images
- 50 GB of Elastic File System Storage used for file transfer downloads