
import { defineConfig, devices } from '@playwright/test';
import AllureReporter from 'allure-playwright';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: 'snapshots/{testFilePath}/{arg}{ext}',

  fullyParallel: true,
  reporter: [    ['allure-playwright'],  ],
  timeout: 50000,
  expect : {
    timeout: 50000, 
  },
  



  use: {  
    browserName: 'chromium',
    viewport: null,
    launchOptions: { args: ['--start-maximized'],},
    headless: false,
    screenshot: "on",
    trace:'on' ,
  },


});

