import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['allure-playwright'],
    ['html', { open: 'never' }]
  ], // open: 'on', 'never', or 'always'
  use: {
    browserName: 'chromium',
    headless: false,
    baseURL: 'https://example.com', // Replace with your app URL
    viewport: null, // 👈 disables default viewport
    launchOptions: {
      args: ['--start-maximized'] // 👈 opens the window maximized
    },
    actionTimeout: 10000
  },
});
