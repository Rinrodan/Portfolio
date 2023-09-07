import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.rinrodan.github.io',
    base: '/portfolio',
    output: 'static',
    outDir: './dist',
    build: {
      assets: 'astro'
    }

});
