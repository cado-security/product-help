---
title: Reduce KMS permissions
hide_title: true
sidebar_position: 7
---

# How to reduce KMS permissions in AWS

The / Forensic Acquisition and Investigation platform supports importing EC2 instances with encrypted volumes, provided the appropriate permissions are assigned to the `CadoResponseRole`. The default IAM roles include the necessary permissions to decrypt AWS default KMS keys out of the box. Custom KMS keys are also supported.

## KMS Considerations for Custom Keys

When using custom KMS keys, the following actions must be granted to the `CadoResponseRole`:

```json
"kms:Encrypt",
"kms:Decrypt",
"kms:ReEncrypt*",
"kms:GenerateDataKey*",
"kms:CreateGrant"
```

When / Forensic Acquisition and Investigation performs a cross-account import of KMS-encrypted EC2 instances, it re-encrypts the snapshot to a temporary key used for cross-account transfer. This key is scoped using an alias with a / Forensic Acquisition and Investigation prefix, and both the alias and key are scheduled for deletion after the import is complete.

## Tightening KMS Permissions

To further restrict KMS permissions, you can grant the necessary permissions to the `CadoResponseRole` while withholding `kms:CreateGrant` for specific resources:

- **Limit CreateGrant Permissions:** You may choose not to grant `kms:CreateGrant` to the `CadoResponseRole` itself.
- **Custom Policy:** Ensure your IAM policy allows the `CadoResponseRole` to perform the required actions (`kms:Encrypt`, `kms:Decrypt`, etc.) but excludes `kms:CreateGrant` where unnecessary.
- **Tighten Resource Access:** Restrict `kms:CreateGrant` to specific AWS resources only, rather than granting it globally.

## KMS Considerations for Cross-Region and Cross-Account

### Cross-Region
Ensure that your KMS policy statements apply to the region where your platform is deployed. For example, verify that policy conditions do not block access to resources in the platform's region.

### Cross-Account
The simplest approach for cross-account operations is to grant `kms:CreateGrant` permissions to the role being assumed in the **target account**. 

Alternatively, the same permissions outlined for custom keys can be applied, but both the primary and secondary account roles must be allowed principals for the required KMS actions (`kms:Encrypt`, `kms:Decrypt`, `kms:ReEncrypt*`, `kms:GenerateDataKey*`).
