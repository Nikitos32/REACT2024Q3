import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: './jest.setup.ts',
      environment: 'jsdom',
      reporters: ['json', 'default'],
      outputFile: './test-output.json',
    },
  })
);
