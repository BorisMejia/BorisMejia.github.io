// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
site: 'https://BorisMejia.github.io/BorisMejia.github.io',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['@fontsource-variable/onest'],
    },
  },
});