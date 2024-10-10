// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

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
            to: '/cado/manage/integrations/api-overview',
            from: '/cado-response/manage/integrations/api-overview',
          },
          {
            to: '/cado/deploy/gcp/gcp-settings',
            from: '/cado-response/deploy/gcp/gcp-settings',
          },
          {
            to: '/eula/commercial-eula',
            from: '/eula/commercial-eula',
          },
          {
            to: '/cado-host/deploy',
            from: '/cado-host/deploy',
          },
          {
            to: '/cado/deploy/aws/iam/aws-organizations',
            from: '/cado-response/deploy/aws/iam/aws-organizations',
          },
          {
            to: '/cado/manage/integrations/xdr/crowdstrike',
            from: '/cado-response/manage/integrations/xdr/crowdstrike',
          },
          {
            to: '/cado/manage/integrations/xdr/defender',
            from: '/cado-response/manage/integrations/xdr/defender',
          },
          {
            to: '/cado/deploy/intro',
            from: '/cado-response/deploy/intro',
          },
          {
            to: '/cado/deploy/aws/overview',
            from: '/cado-response/deploy/aws/overview',
          },
          {
            to: '/cado/manage/updating',
            from: '/cado-response/manage/updating',
          },
          {
            to: '/cado-host/intro',
            from: '/cado-host/intro',
          },
          {
            to: '/cado/deploy/kubernetes',
            from: '/cado-response/deploy/kubernetes',
          },
          {
            to: '/cado/discovery-import/automation',
            from: '/cado-response/discovery-import/automation',
          },
          {
            to: '/cado/discovery-import/import/aws/aws-ami',
            from: '/cado-response/discovery-import/import/aws/aws-ami',
          },
          {
            to: '/cado/discovery-import/import/aws/aws-ec2',
            from: '/cado-response/discovery-import/import/aws/aws-ec2',
          },
          {
            to: '/cado/discovery-import/import/aws/aws-ecs',
            from: '/cado-response/discovery-import/import/aws/aws-ecs',
          },
          {
            to: '/cado/discovery-import/import/aws/aws-eks',
            from: '/cado-response/discovery-import/import/aws/aws-eks',
          },
          {
            to: '/cado/discovery-import/import/aws/aws-lambda',
            from: '/cado-response/discovery-import/import/aws/aws-lambda',
          },
          {
            to: '/cado/discovery-import/import/aws/aws-s3',
            from: '/cado-response/discovery-import/import/aws/aws-s3',
          },
          {
            to: '/cado/discovery-import/import/azure/azure-compute',
            from: '/cado-response/discovery-import/import/azure/azure-compute',
          },
          {
            to: '/cado/discovery-import/import/azure/azure-storage',
            from: '/cado-response/discovery-import/import/azure/azure-storage',
          },
          {
            to: '/cado/discovery-import/import/azure/kubernetes-engine',
            from: '/cado-response/discovery-import/import/azure/kubernetes-engine',
          },
          {
            to: '/cado/discovery-import/import/data-types/filetypes',
            from: '/cado-response/discovery-import/import/data-types/filetypes',
          },
          {
            to: '/cado/discovery-import/import/data-types/import-types',
            from: '/cado-response/discovery-import/import/data-types/import-types',
          },
          {
            to: '/cado/discovery-import/import/gcp/engine-instance',
            from: '/cado-response/discovery-import/import/gcp/engine-instance',
          },
          {
            to: '/cado/discovery-import/import/gcp/kubernetes-engine',
            from: '/cado-response/discovery-import/import/gcp/kubernetes-engine',
          },
          {
            to: '/cado/discovery-import/import/gcp/storage',
            from: '/cado-response/discovery-import/import/gcp/storage',
          },
          {
            to: '/cado/discovery-import/import/google-workspace-logs',
            from: '/cado-response/discovery-import/import/google-workspace-logs',
          },
          {
            to: '/cado/discovery-import/import/intro',
            from: '/cado-response/discovery-import/import/intro',
          },
          {
            to: '/cado/discovery-import/import/m365-logs',
            from: '/cado-response/discovery-import/import/m365-logs',
          },
          {
            to: '/cado/discovery-import/import/on-prem/import-from-url',
            from: '/cado-response/discovery-import/import/on-prem/import-from-url',
          },
          {
            to: '/cado/discovery-import/import/on-prem/xdr-import',
            from: '/cado-response/discovery-import/import/on-prem/xdr-import',
          },
          {
            to: '/cado/guides/updating',
            from: '/cado-response/guides/updating',
          },
          {
            to: '/cado/guides/updating',
            from: '/cado-response/guides/updating',
          },
          {
            to: '/cado/intro',
            from: '/cado-response/intro',
          },
          {
            to: '/cado/investigate/automated-investigation',
            from: '/cado-response/investigate/automated-investigation',
          },
          {
            to: '/cado/investigate/detections',
            from: '/cado-response/investigate/detections',
          },
          {
            to: '/cado/investigate/timeline-search',
            from: '/cado-response/investigate/timeline-search',
          },
          {
            to: '/cado/manage/integrations/siem',
            from: '/cado-response/manage/integrations/siem',
          },
          {
            to: '/cado/manage/integrations/webhooks',
            from: '/cado-response/manage/integrations/webhooks',
          },
          {
            to: '/release-notes',
            from: '/release-notes',
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
