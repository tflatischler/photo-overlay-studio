import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:8080',
    browserName: 'chromium',
    launchOptions: {
      args: ['--no-sandbox'],
    },
  },
  webServer: {
    command: 'python3 -m http.server 8080',
    port: 8080,
    reuseExistingServer: true,
  },
  projects: [
    {
      name: 'iphone-14',
      use: { viewport: { width: 393, height: 852 } },
    },
    {
      name: 'iphone-13-mini',
      use: { viewport: { width: 375, height: 812 } },
    },
    {
      name: 'iphone-se',
      use: { viewport: { width: 320, height: 568 } },
    },
    {
      name: 'iphone-14-landscape',
      use: { viewport: { width: 852, height: 393 } },
    },
  ],
});
