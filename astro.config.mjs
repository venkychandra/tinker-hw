import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://venkychandra.github.io',
  base: '/tinker-hw',
  vite: {
    plugins: [tailwindcss()],
  },
});
