
import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: 'snapshots/{testFilePath}/{arg}{ext}',

  fullyParallel: true,
  reporter: 'html',
  timeout: 40000,
  expect : {
    timeout: 40000, 
  },
  



  use: {  
    browserName: 'chromium',
    headless: true,
  },


});

