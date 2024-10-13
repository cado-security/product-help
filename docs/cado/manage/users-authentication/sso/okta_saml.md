---
title: Okta SAML
hide_title: true
sidebar_position: 3
---

# How to Set Up the Okta SAML Integration

:::warning
If you encounter issues, please contact support@cadosecurity.com with a detailed description of your configuration.
:::

You can enable the Okta SAML Integration beta in the Cado platform by navigating to `Settings > SSO > Okta SAML`.

### Setting up Okta SSO

1. Open the Okta admin dashboard and go to `Applications > Applications`.
2. Click **Create App Integration**.
3. Select **SAML 2.0** and click **Next**.
4. Name the Cado SAML app.
5. Add a Single Sign-On URL. This should be the URL you use to access Cado in the browser, appended with `/api/v2/auth/saml/okta` (e.g., https://my.cado.instance/api/v2/auth/saml/okta).
6. Add an Audience URI (SP Entity ID), typically the instance URL (e.g., https://my.cado.instance).
7. Add an Attribute Statement:
   - **Name**: `emailAttrStatement`
   - **Name format**: **Unspecified**
   - **Value**: **user.email**

   ![Okta Attribute Statement](/img/okta-attribute-statement.png)

8. Add a Group Attribute Statement:
   - **Name**: `groupAttrStatement`
   - **Name format**: **Unspecified**
   - **Filter**: Set to **Equals** and enter the name of your admin group (e.g., `CadoAdmin`).

   ![Okta Group Attribute Statement](/img/okta-group-attribute-statement.png)

9. Click **Next**, complete the feedback, and click **Finish**.
10. (Optional) Assign users to the app:
    - Go to the **Assignments** tab, select **Limit access to selected groups**, and add a user group.
    - If you create a group named `CadoAdmin`, users in that group will become Cado admin users.

    ![Okta Assignments](/img/okta-assignments.png)

:::tip
You can assign non-admin users by creating a group with a different name (e.g., `CadoNonAdmin`), and users in that group will be assigned as Normal Users in Cado.
:::

11. In the **Sign On** tab, under **SAML Setup**, click **View SAML setup instructions** and keep the page open for reference.
12. Go to `Customizations > Other > IFrame Embedding` and ensure this setting is enabled to allow access refresh.

    ![Okta IFrame Embedding](/img/okta-iframe-embedding.png)

13. Configure SSO in Cado:
    - Log in to your Cado instance as an admin.
    - Navigate to `Settings > SSO > Okta SAML` and click **Enabled**.
    - Populate the fields using the information from the SAML setup instructions:
        - **Okta SAML App IdP entity ID**: Enter the `Identity Provider Issuer`.
        - **Okta SAML App IdP SSO URL**: Enter the `Identity Provider Single Sign-On URL`.
        - **Okta SAML App x509 Cert**: Enter the `X.509 Certificate` (text between `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`).
        - **Okta SAML App SP entity ID**: Enter the URL from step 6.
        - **Okta SAML App SP ACS URL**: Enter the URL from step 5.
        - **Admin Group Name**: Enter the admin group name from step 8.

14. (Optional) Click **Test new settings** to verify the configuration.
15. Click **Update**.
16. Log out and log back in using Okta SAML.