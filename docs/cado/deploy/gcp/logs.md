---
title: GCP Logging Best Practices
hide_title: true
sidebar_position: 12
---

# GCP Logging Best Practices

Google Cloud Platform (GCP) centralizes logs with [Cloud Logging](https://cloud.google.com/logging/). Properly enabling, storing, and analyzing logs helps secure your environment and streamline incident response (IR). Below are key practices:

## 1. Use Cloud Audit Logs
- **Admin Activity Logs** (always on) track configuration changes (e.g., creating or deleting resources).  
- **Data Access Logs** (disabled by default) capture data read/write operations—be sure to enable them.  
- **System Event Logs** (always on) note Google system-driven changes (e.g., maintenance events).  
- **Policy Denied Logs** (enabled by default) record security policy violations.

## 2. Configure Buckets and Retention
- **_Required Bucket**: Retains critical logs (Admin Activity, System Event) for 400 days (not adjustable).  
- **_Default Bucket**: Retains other logs (e.g., Data Access) for 30 days (can adjust).  
- **User-Defined Buckets**: Route logs here using sinks. Customize retention and apply **Bucket Lock** if needed.

## 3. Protect and Control Access
- **Customer-Managed Encryption Keys (CMEK)** for tighter encryption control.  
- **IAM Roles**: Use least privilege (e.g., `logging.viewer`, `logging.privateLogViewer`, `logging.admin`).  
- **Log Views** to segment access for different teams.  
- **Field-Level Access Controls** to redact sensitive data (incompatible with Log Analytics).

## 4. Monitor with Alerts
- **Log-Based Metrics** detect critical events (e.g., changes to audit configurations or firewall rules).  
- **Cloud Monitoring** generates alerts for suspicious logs.  
- **Security Command Center (SCC)** surfaces potential threats in near-real time.

## 5. VPC Flow Logs
- Enable [VPC Flow Logs](https://cloud.google.com/vpc/docs/using-flow-logs) for network visibility.  
- Adjust **aggregation interval** and **sample rate** to balance detail vs. cost.  
- Export to BigQuery or Cloud Storage if you need long-term retention.

## 6. Logging Highlights by Service
1. **Compute Engine (GCE)**  
   - Admin logs: creation, deletion, modification (on by default).  
   - Data logs: must be manually enabled for reads/lists.  
2. **Kubernetes Engine (GKE)**  
   - Admin logs: cannot be disabled.  
   - Control Plane logs: optionally enabled.  
   - Container logs: ephemeral by default—use the GKE logging agent.  
3. **Cloud Storage (GCS)**  
   - Admin logs: always on (e.g., bucket creation).  
   - Data logs: enable for object access/read/write.  
4. **Virtual Private Cloud (VPC)**  
   - Admin logs: track subnets, firewalls, routes.  
   - Data logs: enable for listing networks, subnets, etc.

### References
- [How to be IR Prepared in GCP](https://www.cadosecurity.com/blog/how-to-be-ir-prepared-in-google-cloud-platform-gcp)
- [Decoding GCP Logs](https://www.cadosecurity.com/blog/decoding-logs-in-the-cloud-gcp-admin-activity-logs)
- [Cloud Audit Logs Best Practices](https://cloud.google.com/logging/docs/audit/best-practices)  