
import { defineConfig, devices } from '@playwright/test';
import AllureReporter from 'allure-playwright';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: 'snapshots/{testFilePath}/{arg}{ext}',
  workers: 2,
  fullyParallel: true,
  reporter: [    ['allure-playwright'],  ],
  timeout: 50000,
  expect : {
    timeout: 50000, 
  },
  
  
 projects: [
    {name: 'QA',
      use: {
        baseURL: 'https://mdqa.woqod.com/web/en/',
      },
    },
    {name: 'UAT',
      use: {
        baseURL: 'https://maw1.woqod.com/web1/en/',
      },
    },
    {name: 'Live',
      use: {
        baseURL: 'https://www.woqod.com/website/en/',
      },
    },
  ], 


  use: {  
    browserName: 'chromium',
    viewport: null,
    launchOptions: { args: ['--start-maximized'],},
    headless: true,
    screenshot: "on",
    trace:'on' ,
  },


});

