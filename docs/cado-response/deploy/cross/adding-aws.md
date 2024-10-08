---
title: Adding AWS accounts to Azure/AWS/GCP
hide_title: true
sidebar_position: 2
---

# How to add AWS accounts to Azure/AWS/GCP
* Cross-cloud and account access of AWS is performed by setting up an IAM role in the target AWS account. The following steps should be performed in each AWS account you would like Cado to collect data from. Note: you will need permission to create IAM roles.
* Log into target AWS account
* Follow these AWS instructions to create an [IAM group](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_create.html)
* Create a new IAM role with a new policy containing the [permissions listed here](https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml)
* Guides for creating new roles and policies can be found [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html) and [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html)
* Add your new IAM user to the [group](https://docs.aws.amazon.com/singlesignon/latest/userguide/adduserstogroups.html)
* Generate access keys for the [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). These keys provide access to the account and should be kept secret.
* In Cado Response, add the keys to the platform by going to Settings -> Cloud -> Create Role -> Choose AWS tab -> Add a name for the role and enter the access token and secret
* In Cado Response, confirm that you can see resources for import by going into an investigation and selecting Import -> Cloud -> Choose your new AWS role -> confirm you can see resources.

## Adding to the Cado UI
AWS accounts can be imported into Cado Response from Azure or GCP deployments.
To do so, add the AWS account under Settings > Cloud Accounts:
![Add Role](/img/add-role.png)

Currently AWS EC2's can only be imported cross-cloud through SSM Triage Acquisition or through EBS Direct Acquisition (Settings>Experiments>EBS Direct API), due to how the data is collected.
