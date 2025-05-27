import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['allure-playwright'],
    ['html', { open: 'never' }]
  ],
  use: {
    browserName: 'chromium',
    headless: false,
    baseURL: 'https://example.com', // Replace with your actual app URL
    viewport: null,
    actionTimeout: 10000,
    launchOptions: {
      args: ['--start-maximized'],
      slowMo: 1000 // 👈 Adds a 500ms delay between actions
    }
  }
});
