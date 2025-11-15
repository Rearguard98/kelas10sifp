// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { members } from './members.js';


// https://astro.build/config
export default defineConfig({
  site: "https://kelas10sifp.my.id/",

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true,
    },
  }),

  integrations: [sitemap({
    // This function generates sitemap entries from your members data.
    // It assumes you will create a page at `src/pages/anggota/[subdomain].astro`
    customPages: members.map(member => {
      return `https://kelas10sifp.my.id/anggota/${member.subdomain}`;
    }),
  })],
});