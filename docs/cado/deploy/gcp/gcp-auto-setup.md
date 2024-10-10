---
title: Automated Setup of GCP for data collection
hide_title: true
sidebar_position: 3
---

# How to automatically set up GCP for data collection

To streamline the process of configuring your GCP environment ready for Cado, this page details how to use our GCP Setup Scripts.
:::note
The actions in these scripts can take a few minutes to take effect, as such, it's best not to run them in quick succession.
:::

### Uploading and Running the Scripts

To make use of these scripts, it's best to upload them using the gcloud terminal. To do this, navigate to the GCP console and click the 'Activate Cloud Shell' button in the top-right corner.

The scripts can be found in our Cado GCP Scripts github:
https://github.com/cado-security/gcp-setup 

<img src="/img/gcp-shell.png" alt="Cloud Shell" width="350"/>

Once they've been uploaded to your user area in the gcloud terminal, you can run them with bash.

<img src="/img/gcp-scripts.png" alt="Cloud Shell" width="800"/>

## Scripts
The first script in the series '**gcp_setup_1_role.sh**' will create a 'CadoGCPRole' role within the active project with scoped permissions for Cado to operate. If you want to create the role at the organization level for use across multiple projects, add the organization ID as a parameter.
When the script finishes you should see the role ID printed, we will use this role ID in other scripts so it's best to save it somewhere.
```bash
bash gcp_setup_1_role.sh <optional_organization_id>
Save this role ID to be used in the next script: organizations/0123456789/roles/CadoGCPRole
```
---

The second script '**gcp_setup_2_service_account.sh**' will create a 'CadoServiceAccount' service account within the active project, using the CadoGCPRole role's permissions. You need to specify the role ID from the previous script as a parameter when executing.
```bash
bash gcp_setup_2_service_account.sh <cado_role_id>
```
---

The third script '**gcp_setup_3_WIF.sh**' will create a 'cado-aws-pool' workload identity pool with a 'Cado-AWS-Provider' identity provider and will also connect the previously created 'CadoServiceAccount' service account. This script needs the AWS account ID you will be authenticating with passed as a parameter. Once executing finishes, you can navigate to the 'Connected Service Accounts' tab in the pool and download the credentials ready to use in the platform.
```bash
bash gcp_setup_3_WIF.sh <aws_account_id>
```
---

The last script '**gcp_setup_4_cross_project.sh**' is optional and will setup a target project ready for acquisition using the original 'CadoServiceAccount', meaning you won't need separate credentials to access assets in the target project. This script will only work if the original 'CadoGCPRole' was created at the organization level and will need that role ID along with the target project's ID passed as parameters.
```bash
bash gcp_setup_4_cross_project.sh <target_project_id> <cado_role_id>
```
