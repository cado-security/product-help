---
title: Okta SAML
hide_title: true
sidebar_position: 3
---

# Okta SAML Integration

:::warning
Okta SAML integration is currently in beta.  If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.
:::

You can now enable the beta of Okta SAML Integration in Cado Response by going to `Settings > SSO > Okta SAML`.

### Setting up Okta SSO
1. Open the Okta admin dashboard and navigate to `Applications > Applications`
2. Click **Create App Integration**
3. Select
	- SAML 2.0
4. Click **Next**
5. Give the Cado SAML app a name
6. Add a single sign on URL. This should be the URL you use to access cado in the web browser concatenated with the `/api/v2/auth/saml/okta` path. E.g. https://my.cado.instance/api/v2/auth/saml/okta
7. Add an audience URI (SP Entity ID). Typically this is the instance URI of your application. E.g. https://my.cado.instance
8. Add an Attribute Statement to the application:
	- In the `Name` field enter `emailAttrStatement`
	- In the `Name format` field select **Unspecified**
    - In the `Value` field select **user.email**

	![Okta Attribute Statement](/img/okta-attribute-statement.png)

9. Add a Group Attribute Statement to the application:
	- In the `Name` field enter `groupAttrStatement`
	- In the `Name format` field select **Unspecified**
    - In the `Filter` set the drop down to **Equals** and set the field to `CadoAdmin`

	![Okta Group Attribute Statement](/img/okta-group-attribute-statement.png)

10. Click **Next**
11. Complete the Okta feedback and click **Finish**
12. Optional: Choose who is granted access to the application
	- Go to the  **Assignments** tab of the SAML application and select **Limit access to selected groups**
	- Add a user group
	- This can also be done at a later stage
	- If you name a group `CadoAdmin`, then any users in that group will become admin users of Cado Response when logging in

	![Okta Assignments](/img/okta-assignments.png)

:::tip
If you are looking to assign non-admin users within Cado Response, you can use a group name other than `CadoAdmin`.  For example: adding a group `CadoNonAdmin` and assigning users to it will result in those users being Normal Users within Cado Response.
:::

13. Go to the **Sign On** tab of the SAML application, navigate down to **SAML Setup** and click **View SAML setup instructions**. Keep this page to hand; you'll need it shortly
14. Go to `Customizations > Other > IFrame Embedding`, make sure that this setting is enabled. We use this to refresh access to the platform

	![Okta IFrame Embedding](/img/okta-iframe-embedding.png)

15. Configure SSO in cado:
	- Open your cado instance and log in as an admin user
	- Go to `Settings > SSO > Okta SAML`
	- Click **Enabled**
    - Populate the fields with the following:
        - Enter the `Identity Provider Issuer` value from the SAML setup instructions into the `Okta SAML App IdP entity ID` field
        - Enter the `Identity Provider Single Sign-On URL` value from the SAML setup instructions into the `Okta SAML App IdP SSO URL` field
        - Enter the `X.509 Certificate` value (text inbetween `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`) from the SAML setup instructions into the `Okta SAML App x509 Cert` field
        - Enter the exact URL you provided in step 7 into the `Okta SAML App SP entity ID` field
        - Enter the exact URL you provided in step 6 into the `Okta SAML App SP ACS URL` field
16. Optional: You can confirm if this was configured correctly by clicking **Test new settings**
17. Click **Update**
18. Log out with your existing user, and login with Okta SAML
