// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cado Security',
  tagline: 'Cado Security',
  url: 'https://docs.cadosecurity.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cado-security', // Usually your GitHub org/user name.
  projectName: 'product-help', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/cado-security/product-help/tree/master/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // adding search
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
      indexDocs: true,
      indexDocSidebarParentCategories: 0,
      indexBlog: false,
      indexPages: true,
      language: "en",
      },
    ],
    [
      // redirect from old urls to new url formats
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // community edition
          {
            to: '/cado-response/community-edition/community-intro',
            from: '/community-edition',
          },
          // () - > /cado-response/intro (STAYS THE SAME)
          // (/cado-response/manage/integrations/webhooks) <-  /cado-response/integrations/webhooks
          {
            to: '/cado-response/manage/integrations/webhooks',
            from: '/cado-response/integrations/webhooks',
          },
          // (/cado-response/manage/integrations/siem) <- /cado-response/integrations/siem
          {
            to: '/cado-response/manage/integrations/siem',
            from: '/cado-response/integrations/siem',
          },
          // (/cado-response/investigate/timeline-search) <- /cado-response/investigating/search
          {
            to: '/cado-response/investigate/timeline-search',
            from: '/cado-response/investigating/search',
          },

          // (/cado-response/deploy/aws/iam/cross-account-creation) <- /cado-response/guides/cross-account-creation
          {
            to: '/cado-response/deploy/aws/iam/cross-account-creation',
            from: '/cado-response/guides/cross-account-creation',
          },
          // () - > /cado-host/intro (SATYS THE SAME)

        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        metadata: [{name: 'google-site-verification', content: 'j1fUKfw-LfBrYqXusMAoBbmCW8nSNobe8nOyfDl6xAY'}],
        navbar: {
        title: ' ',
        logo: {
          alt: 'Cado Logo',
          src: 'img/cado.png',
          srcDark: 'img/cado-dark.png',
        },
      },
      footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/cadosecurity',
              external: true,
            },
            {
              label: 'Github',
              href: 'https://github.com/cado-security',
              external: true,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} | Cado Security`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;