---
title: Ping SAML
hide_title: true
sidebar_position: 4
---

# Ping SAML Integration

:::warning
Ping SAML integration is currently in beta.  If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.
:::

You can now enable the beta of Ping SAML Integration in Cado Response by going to `Settings > SSO > Ping SAML`.

### Setting up Ping SSO
1. Open the Ping admin dashboard and navigate to `Connections > Applications`
2. Give your application a name and select **SAML Application** as your application type
3. Click **Configure Application**
4. Then click **Manually Enter**
5. Add an ACS URL. This should be the URL you use to access cado in the web browser concatenated with the `/api/v2/auth/saml/ping` path. E.g. `https://my.cado.instance/api/v2/auth/saml/ping`
6. Add an Entity ID. Typically this is the instance URI of your application. E.g. `https://my.cado.instance`
7. Click **Save**
8. Optional: Choose who is granted access to the application
	- Navigate over to `Identities > Groups`
	- Add a new group called `CadoAdmin`
	- This can also be done at a later stage
	- If you name a group `CadoAdmin`, then any users in that group will become admin users of Cado Response when logging in

:::tip
If you are looking to assign non-admin users within Cado Response, you can use a group name other than `CadoAdmin`.  For example: adding a group `CadoNonAdmin` and assigning users to it will result in those users being Normal Users within Cado Response.
:::

9. Navigate back over to the application you created earlier and click **Attribute Mappings**
10. Add an email attribute to the application:
	- In the `Attributes` field enter `emailAttrStatement`
    - In the `PingOne Mappings` field select **Email Address**

11. Add a Group attribute to the application:
	- In the `Attributes` field enter `groupAttrStatement`
    - In the `PingOne Mappings` field select **Group Names**

	![Ping Attribute Statement](/img/ping-attribute-statement.png)

12. Click **Save** after configuring the attributes
13. Configure SSO in cado:
	- Open your cado instance and log in as an admin user
	- Go to `Settings > SSO > Ping SAML`
	- Click **Enabled**
    - Populate the fields with the following:
        - Enter the `Issuer ID` value from the Ping application **Configuration** tab into the `Ping SAML App IdP entity ID` field
        - Enter the `Single Signon Service` value from the Ping application **Configuration** tab into the `Ping SAML App IdP entity ID` field
        - Download the signing certificate and enter the value (text inbetween `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`) into the `Ping SAML App x509 Cert` field
        - Enter the exact URL you provided in step 6 into the `Ping SAML App SP entity ID` field
        - Enter the exact URL you provided in step 5 into the `Ping SAML App SP ACS URL` field
14. Optional: You can confirm if this was configured correctly by clicking **Test new settings**
15. Click **Update**
16. Log out with your existing user, and login with Ping SAML
