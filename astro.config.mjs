// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  site: "https://kelas10sifp.my.id/",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true,
    },
  }),
});