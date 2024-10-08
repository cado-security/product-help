// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cado Documentation',
  tagline: 'Cado Documentation',
  url: 'https://docs.cadosecurity.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cado-security', // Usually your GitHub org/user name.
  projectName: 'product-help', // Usually your repo name.
  trailingSlash: false,

    // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
        gtag: {
          trackingID: 'G-9BVXSKWB6Z',
          anonymizeIP: false,
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
          // handle redirects to the new URL format (for a short period of time only)
          {
            to: '/cado-response/community-edition/community-intro',
            from: '/community-edition',
          },
          {
            to: '/cado-response/manage/integrations/webhooks',
            from: '/cado-response/integrations/webhooks',
          },
          {
            to: '/cado-response/manage/integrations/siem',
            from: '/cado-response/integrations/siem',
          },
          {
            to: '/cado-response/investigate/timeline-search',
            from: '/cado-response/investigating/search',
          },
          {
            to: '/cado-response/deploy/aws/iam/cross-account-creation',
            from: '/cado-response/guides/cross-account-creation',
          },
          {
            to: '/cado-response/deploy/aws/overview',
            from: '/cado-response/getting-started/deploy/aws-deploy',
          },
          {
            to: '/cado-response/deploy/azure/azure-deploy',
            from: '/cado-response/getting-started/deploy/azure-deploy',
          },
          {
            to: '/cado-response/discovery-import/import/data-types/filetypes',
            from: '/cado-response/importing-data/filetypes',
          },
          {
            to: '/cado-response/manage/integrations/soar/tines',
            from: '/cado-response/integrations/tines',
          },
          {
            to: '/cado-response/manage/integrations/soar/cortex-xsoar',
            from: '/cado-response/integrations/cortex-xsoar',
          },
          {
            to: '/cado-response/deploy/azure/azure-cross-tenancy-subscriptions',
            from: '/cado-response/guides/azure-cross-tenancy-subscriptions',
          },
          {
            to: '/cado-response/manage/updating',
            from: '/cado-response/guides/updating',
          },
          {
            to: '/cado-response/manage/logging-in',
            from: '/cado-response/getting-started/logging-in',
          },
          {
            to: '/cado-host/intro',
            from: '/docs/cado-host/intro',
          },
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
