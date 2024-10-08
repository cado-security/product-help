---
title: Ports and network encryption
hide_title: true
sidebar_position: 8
---
# What ports and network encryption does the Cado platform use?

The following ports are required to be open within the VPC or VNet in which the Cado platform is deployed.
Note that these ports are allowed by the default Cado Security Group or Network Security Group. 

 
| Port | Service | Description |
|------|---------|-------------|
| 443  | API and Frontend | TLSv1.2 TLSv1.3 via Nginx |
| 2049 | NFS | Cloud specific NFS, over TLS |
| 9200 | ElasticSearch | Over TLS |
| 6379 | Redis | TLS |
| 5432 | PostGres | TLS |
| 5000 | API | TLSv1.2 TLSv1.3 via Nginx |
| 22*  | Support | Debian SSH Service (*not required for normal operation) |

