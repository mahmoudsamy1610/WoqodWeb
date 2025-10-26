import { test, expect } from '@playwright/test';
import PomManager from '../utils/playwrightUtils/PomManager.js';
import TestDataFilesUrls from '../data/TestDataFilesUrls.js';
import DataFaker from '../utils/jsUtils/DataFaker.js';



test('Submit Contact us form',async ({page , baseURL}) => {

  const POMManager = new PomManager(page);  
  const ContactUsLanding = POMManager.CallContactUsLandingPage();

  await ContactUsLanding.GotoContactUsLandingPage(baseURL);
  await ContactUsLanding.SubmitValidContactUsForm(
    DataFaker.FakeName(), DataFaker.FakeEmail() , DataFaker.FakeMobileNumber() , TestDataFilesUrls.SampleImageUrl,
    DataFaker.FakeCompanyName() , DataFaker.FakeComment());

  await expect(ContactUsLanding.SuccessMessage).toHaveText('Thank you for your feedback!');
   
  


 });

