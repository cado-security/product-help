---
title: Managing Users
hide_title: true
sidebar_position: 3
---

# Managing Users
There are two roles in the Cado platform. 

| Name | Description |
| ---- | ----------- |
| Administrator | Can edit users and access all projects. |
| Normal User | Can only access projects which they have created or another user has granted them access to. |

### Creating a New User
Only Administrators can create new users.  When an Administrator creates a new user, a temporary password must be created by the Administrator.  The new user will be asked to change their password when they first login.
To add a new user:
- Click **Users** 
- Click the **Add Users** button

### Configuring Single Sign On (SSO)
Cado also supports authentication via [Azure AD](sso/azure-ad.md), Okta ([OAuth](sso/okta.md) or [SAML](sso/okta_saml.md)) and [PingID](sso/ping_saml.md). When you configure SSO access, the Cado platform will automatically create the user at first login.

### Granting Administrator Access
To elevate privileges and grant Administrator access to a normal user, do the following:
- Click **Users**
- Next to the appropriate user, click the Edit icon ![Edit](/img/edit.png)
- Select the **This user has administrator access** checkbox
- Click **Update**

:::caution
It is strongly recommended to follow the principles of least privilege when creating new users and granting Administrator access.
:::

### Granting Access to a Project
To grant existing users to a Project, you can add them when you create the Project, or you can follow the below instructions to add users to an existing Project:
- Click **Projects** and select the project to which you would like to add users
- Click the **Access** button 
- Click the **Add Users** button
- Select the user to add and Click **Add**
