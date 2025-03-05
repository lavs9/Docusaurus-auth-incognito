import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import type { ScalarOptions } from '@scalar/docusaurus';


const config: Config = {
    title: 'Documentation Portal',
    tagline: 'Comprehensive product and API documentation',
    favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',

  organizationName: 'Synapsewave Innovations Pvt Ltd',
  projectName: 'docusaurus',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    format: 'detect',},

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
            label: 'Products',
            position: 'left',
            items: [
              {
                label: 'ARMS',
                to: '/docs/arms/intro',
                docId: 'arms',
              },
              {
                label: 'OMEX',
                to: '/docs/omex/intro',
                docId: 'omex',
              },
              {
                label: 'Wave',
                to: '/docs/wave/guide',
                docId: 'wave',
              },
              {
                label: 'Breeze',
                to: '/docs/breeze/intro',
                docId: 'breeze',
              },
              {
                label: 'Broadcast',
                to: '/docs/broadcast/intro',
                docId: 'broadcast',
              },
            ],
          },
          {
            label: 'API',
            position: 'left',
            items: [
              {
                label: 'ARMS API',
                to: '/api/arms',
              },
              {
                label: 'OMEX API',
                to: '/api/omex',
              },
              {
                label: 'Broadcast API',
                to: '/api/broadcast',
              },
            ],
          },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  plugins: [
    [
      "docusaurus-plugin-dotenv",
      {
        path: process.env.ENV !== 'localhost' ? "./.env.local" : undefined,
        systemvars: true,
      },
    ],
    [
        '@docusaurus/plugin-content-docs',
        {
          id: 'arms',
          path: 'docs/arms',
          routeBasePath: 'docs/arms',
          sidebarPath: require.resolve('./sidebars/arms.ts'),
          includeCurrentVersion: true,
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'wave',
          path: 'docs/wave',
          routeBasePath: 'docs/wave',
          sidebarPath: require.resolve('./sidebars/wave.ts'),
          includeCurrentVersion: true,
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'breeze',
          path: 'docs/breeze',
          routeBasePath: 'docs/breeze',
          sidebarPath: require.resolve('./sidebars/breeze.ts'),
          includeCurrentVersion: true,
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'omex',
          path: 'docs/omex',
          routeBasePath: 'docs/omex',
          sidebarPath: require.resolve('./sidebars/omex.ts'),
          includeCurrentVersion: true,
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'broadcast',
          path: 'docs/broadcast',
          routeBasePath: 'docs/broadcast',
          sidebarPath: require.resolve('./sidebars/wave.ts'),
          includeCurrentVersion: true,
        },
      ],
      [
        '@scalar/docusaurus',
        {
          id: 'broadcast',
          label: 'Broadcast API',
          route: '/api/broadcast',
          showNavLink: false,
          configuration: {
            spec: {
              url: '/api-specs/broadcast-openapi.yaml',
            },
            theme: {
              colors: {
                primary: {
                  main: '#1890ff',
                },
              },
            },
          },
        } satisfies ScalarOptions,
      ],
      [
        '@scalar/docusaurus',
        {
          id: 'omex',
          label: 'Omex API',
          route: '/api/omex',
          showNavLink: false,
          configuration: {
            spec: {
              url: '/api-specs/multicode.yaml',
            },
            theme: {
              colors: {
                primary: {
                  main: '#1890ff',
                },
              },
            },
          },
        } satisfies ScalarOptions,
      ],
  ],
};

export default config; 