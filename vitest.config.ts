import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      reporters: ['json', 'default'],
      outputFile: './test-output.json',
      setupFiles: ['./setupTests.js'],
      coverage: {
        include: ['src/**/*.{js,jsx,ts,tsx}'],
      },
    },
  })
);
