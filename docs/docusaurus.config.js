// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Athro',
  tagline: 'Algorithms & data structures with interactive visualizations',
  url: 'https://athro-docs.vercel.app',
  baseUrl: '/',
  organizationName: 'arneesh',
  projectName: 'athro',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          editUrl: 'https://github.com/arneesh/athro/tree/master/docs',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/visualizers.css')],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Athro',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'athroSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/arneesh/athro',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.npmjs.com/package/athro',
            label: 'npm',
            position: 'right',
            className: 'navbar-npm-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Introduction', to: '/' },
              { label: 'Getting Started', to: '/Getting%20Started' },
              { label: 'Sorting', to: '/category/sorting' },
              { label: 'Graphs', to: '/category/graphs' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'npm', href: 'https://www.npmjs.com/package/athro' },
              { label: 'GitHub', href: 'https://github.com/arneesh/athro' },
              { label: 'Twitter', href: 'https://twitter.com/getathro' },
            ],
          },
        ],
        copyright: `MIT © ${new Date().getFullYear()} Arneesh Aima`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'tsx', 'typescript'],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
