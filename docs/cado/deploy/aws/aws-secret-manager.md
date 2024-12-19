---
title: Secret Manager
hide_title: true
sidebar_position: 4
---

# Secret Manager

The initial deployment stores the key used to encrypt secrets in Cado locally on the machine. Enabling a Secret Manager allows Cado to instead store the key in AWS Secrets Manager.

### Prerequisites

  - Ability to update IAM role

### Steps

1. Add the necessary permissions by adding the following Sid to your IAM Role:

```json
{
 "Sid": "RequiredForSecretsManagement",
 "Effect": "Allow",
 "Action": [
   "secretsmanager:PutSecretValue",
   "secretsmanager:CreateSecret",
   "secretsmanager:GetSecretValue",
   "secretsmanager:TagResource"
 ],
 "Resource": "*",
 "Condition": {
   "StringLike": {
     "aws:ResourceTag/Name": "CadoResponse*"
   }
 }
}
```
2. Enable in the UI: **Settings** > **Advanced** > **Secret Management** > Turn on Secrets Manager
