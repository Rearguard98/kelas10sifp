// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import cloudflare from '@astrojs/cloudflare';
import opengraphImages, { presets } from "astro-opengraph-images";
import * as fs from "fs";
import { customOgMediaLayout } from "./src/customRenderer";

// https://astro.build/config
export default defineConfig({
  site: "https://kelas10sifp.my.id/",
  integrations: [
    opengraphImages({
      options: {
        fonts: [
          {
            name: "Roboto",
            weight: 400,
            style: "normal",
            data: fs.readFileSync("node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff"),
          },
        ],
      },
      render: customOgMediaLayout,
    }),
  ],
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