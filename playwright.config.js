// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',          // folder where your Playwright test(s) live
  timeout: 30000,            // default timeout for each test
  use: {
    baseURL: 'http://localhost:5173',  // app runs locally via `npm run dev`
    headless: true,         // run in headless mode for CI
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  retries: 0,                // set to >0 if you want auto-retries on failure
  reporter: [['list'], ['html', { open: 'never' }]],
});
