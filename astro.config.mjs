import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    favicon: '/favicon.ico',
    title: 'Docs | Prossa',
    customCss: ['./src/styles/custom.css'],
    social: {
      github: 'https://github.com/Fosberg-codex/prossa'
    },
    sidebar: [{
      label: 'Introduction',
      autogenerate: {
        directory: 'introduction'
      }
    }, {
      label: 'Guide',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Installation',
        slug: 'user-guide/installation'
      }, {
        label: 'Get started',
        slug: 'user-guide/gettingstarted'
      }, {
        label: 'Techniques',
        // slug: 'user-guide/methods'
        items: [{
          label: 'Outlier',
          slug: 'user-guide/methods/outliers'
        }, {
          label: 'Missing Values',
          slug: 'user-guide/methods/missingvalues'
        }, {
          label: 'Scaling and Encoding',
          slug: 'user-guide/methods/scalingencoding'
        }, {
          label: 'All methods',
          slug: 'user-guide/methods/allmethods'
        }]
      }, {
        label: 'Example',
        slug: 'user-guide/example'
      }]
    }, {
      label: 'References',
      autogenerate: {
        directory: 'reference'
      }
    }]
  })],
  output: "server",
  adapter: vercel()
});