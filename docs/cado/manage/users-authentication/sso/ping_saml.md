---
title: Ping SAML
hide_title: true
sidebar_position: 4
---

# How to Set Up the Ping SAML Integration

:::warning
If you encounter issues, please contact support@cadosecurity.com with detailed information about your configuration.
:::

You can enable the Ping SAML Integration beta in the Cado platform by going to `Settings > SSO > Ping SAML`.

### Setting up Ping SSO

1. Open the Ping admin dashboard and navigate to `Connections > Applications`.
2. Name your application and select **SAML Application** as the application type.
3. Click **Configure Application**.
4. Then click **Manually Enter**.
5. Add an ACS URL, which is the URL you use to access Cado in the browser, followed by `/api/v2/auth/saml/ping`. For example: `https://my.cado.instance/api/v2/auth/saml/ping`.
6. Add an Entity ID, typically the instance URL of your application (e.g., `https://my.cado.instance`).
7. Click **Save**.
8. (Optional) Choose who has access to the application:
   - Go to `Identities > Groups`.
   - Add a new group (e.g., `CadoAdmin`).
   - If you name a group `CadoAdmin`, users in that group will be granted admin access in Cado.

:::tip
For non-admin users, create a group with a different name (e.g., `CadoNonAdmin`). Users in this group will have Normal User access in Cado.
:::

9. Go back to the application you created and click **Attribute Mappings**.
10. Add an email attribute:
    - In the `Attributes` field, enter `emailAttrStatement`.
    - In the `PingOne Mappings` field, select **Email Address**.
11. Add a Group attribute:
    - In the `Attributes` field, enter `groupAttrStatement`.
    - In the `PingOne Mappings` field, select **Group Names**.

    ![Ping Attribute Statement](/img/ping-attribute-statement.png)

12. Click **Save** after configuring the attributes.
13. Configure SSO in Cado:
    - Log in to your Cado instance as an admin.
    - Go to `Settings > SSO > Ping SAML`.
    - Click **Enabled**.
    - Fill in the fields as follows:
      - Enter the `Issuer ID` from the Ping application **Configuration** tab into the `Ping SAML App IdP entity ID` field.
      - Enter the `Single Signon Service` value from the **Configuration** tab into the `Ping SAML App IdP SSO URL` field.
      - Download the signing certificate and enter the text between `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` into the `Ping SAML App x509 Cert` field.
      - Enter the exact URL you provided in step 6 into the `Ping SAML App SP entity ID` field.
      - Enter the exact URL from step 5 into the `Ping SAML App SP ACS URL` field.
      - Enter the admin group name from step 8 into the `Admin Group Name` field.
:::caution
Use `Admin Group Name` to configure the role (Administrator or Analyst) for first login only. Any changes to a users roles from then onwards should be managed in the platform.
:::
14. (Optional) Test the configuration by clicking **Test new settings**.
15. Click **Update**.
16. Log out and log back in using Ping SAML.
