---
title: Reduce KMS permissions
hide_title: true
sidebar_position: 7
---

## How to reduce KMS permissions in AWS

The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole.  
This is granted by the default Cado IAM roles.
AWS provides default keys in each AWS account. The default Cado IAM permissions support decryption of these KMS keys out of the box.
Cado supports Custom KMS Keys as well.

### KMS Consideration - Custom Keys

When using custom keys the required actions to the CadoResponseRole are:
```
"kms:Encrypt",
"kms:Decrypt",
"kms:ReEncrypt*",
"kms:GenerateDataKey*",
"kms:CreateGrant"
```

When Cado performs a default KMS encrypted import across account, it will re-encrypt to a temporary key that is used to move snapshots cross-account.
An alias with a Cado prefix is used for scoping purposes, and the alias and key are scheduled for deletion after the import has finished.

### KMS Consideration - Tightening Permissions
You can give required permissions to the CadoResponseRole directly and withhold CreateGrant for resources only
- You may not wish to give kms:CreateGrant permission to the CadoResponseRole itself
- Your policy must feature a statement which provides access to the CadoResponseRole with the above permissions (except CreateGrant)
- You may then tighten the policy to only allow CreateGrant permission to only certain AWS resources

### KMS Considerations - Cross Region / Cross Account
Ensure that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy Conditions don't preclude the platform's access).
For Cross Account, the simplest approach is to give kms:CreateGrant permissions to the role being assumed in the target account.
Alternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to "kms:Encrypt", "kms:Decrypt", "kms:ReEncrypt*", kms:GenerateDataKey*"
