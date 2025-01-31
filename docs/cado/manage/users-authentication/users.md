---
title: Manage users
hide_title: true
sidebar_position: 3
---


# How to Manage Users and Authentication in Cado

In the Cado platform, you can control user access to both processed data and raw data stored in the cloud, ensuring users only access the data they need.

### User Types

There are two user roles in the Cado platform:

| Name           | Description                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------- |
| Administrator  | Can manage users and has access to all investigations and cloud resources.                    |
| Analyst    | Has restricted access to specific investigations and cloud resources.                             |

An **Analyst** must be added to an investigation or a group with access to that investigation to gain access. To acquire cloud data, the user needs access to a CSP Role that has permissions to the cloud resource or be part of a group with access to that CSP Role.

![Users-Groups-Roles](/img/users-groups-roles.png)

### Configuring Single Sign-On (SSO)

Cado supports SSO integration with [Azure AD](sso/azure-ad.md), Okta ([OAuth](sso/okta.md) or [SAML](sso/okta_saml.md)), and [PingID](sso/ping_saml.md). When SSO is configured, the Cado platform automatically creates the user at first login. By integrating SSO, you can enforce authentication mechanisms such as two-factor authentication supported by your SSO provider.

### Managing Accounts

Accounts in Cado correspond to cloud accounts in AWS, Azure, or GCP that have the necessary permissions to access cloud resources. Only Administrators can manage accounts. These accounts are automatically populated when CSP credentials are added, following instructions for [AWS](/cado/deploy/cross/cross-account-creation#adding-the-role-to-cado), [Azure](/cado/deploy/cross/azure-cross-tenancy-subscriptions#registering-credentials-within-cado), and [GCP](/cado/deploy/gcp/gcp-settings#en).

It’s recommended to perform **Account Checks** periodically to ensure correct permissions are in place for successful data acquisitions. See [Account Check](/cado/manage/monitoring#account-check) for more details.

### Managing Groups

Groups allow Administrators to manage user access to investigations and cloud resources. Only Administrators can create or manage groups.

To create a new group:
- Go to **Groups**.
- Click **Add Group**.
- Enter the group name.
- Enter the corresponding SSO group name to auto-assign users who log in via SSO.
- Assign users and select the CSP Accounts the group should have access to.

![Groups](/img/groups.png)

### Creating a New User

Only Administrators can create new users. When a new user is created, a temporary password must be set, which the user will be required to change upon first login.

To add a new user:
- Go to **Teams**.
- Click **Create User**.
- Assign the user a role from the dropdown
- Click **Add new user**

### Granting Administrator Access

To grant Administrator access to a user:
- Go to **Teams**.
- Next to the user, click the Edit icon ![Edit](/img/edit.png).
- Assign the user a role from the dropdown
- Click **Confirm**.

:::caution
Follow the principle of least privilege when creating users and assigning Administrator access.
:::

### Granting Access to an Investigation

To grant a user or group access to an existing investigation:
- Go to **Investigations** and select the investigation.
- Click the **Investigation Settings** button
- Assign **Users** from the dropdown
- Assign **Groups** from the dropdown
- Click **Save Changes**

### Password Policy

Passwords must:
- Allow special characters.
- Be at least 8 characters long, including 1 number and 1 uppercase letter.
- Avoid commonly used passwords.
