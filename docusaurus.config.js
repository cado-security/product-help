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
          
          // https://docs.cadosecurity.com/cado-response/getting-started/deploy/aws-deploy
          {
            to: '/cado-response/deploy/aws/overview',
            from: '/cado-response/getting-started/deploy/aws-deploy',
          },
          // https://docs.cadosecurity.com/cado-response/getting-started/deploy/azure-deploy
          {
            to: '/cado-response/deploy/azure/azure-deploy',
            from: '/cado-response/getting-started/deploy/azure-deploy',
          },
          // https://docs.cadosecurity.com/cado-response/importing-data/filetypes
          {
            to: '/cado-response/discovery-import/import/data-types/filetypes',
            from: '/cado-response/importing-data/filetypes',
          },
          // https://docs.cadosecurity.com/cado-response/integrations/tines
          {
            to: '/cado-response/manage/integrations/soar/tines',
            from: '/cado-response/integrations/tines',
          },
          // https://docs.cadosecurity.com/cado-response/integrations/cortex-xsoar
          {
            to: '/cado-response/manage/integrations/soar/cortex-xsoar',
            from: '/cado-response/integrations/cortex-xsoar',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;