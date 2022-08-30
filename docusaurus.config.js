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
      '@docusaurus/plugin-client-redirects',
      {
        //fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        //toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/cado-response/community-edition/community-intro',
            from: '/community-edition',
          },
          // Redirect from multiple old paths to the new path
          /*{
            to: '/docs/newDoc2',
            from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          },*/
        ],
        /*createRedirects(existingPath) {
          if (existingPath.includes('/community')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/community', '/docs/team'),
              existingPath.replace('/community', '/docs/support'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },*/
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