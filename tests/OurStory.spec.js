import { test, expect } from '@playwright/test';
import PomManager from '../utils/playwrightUtils/PomManager.js';
import Urls from '../data/Urls.js';


test('OurStory',async ({page}) => {
  
  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage();
  
  await OurStoryPage.GoToOurStoryPage(Urls.LiveUrl+'en');
  await OurStoryPage.TextBody.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryBodyText')
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryBodyText');
  let UatShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot();

  await expect(UatShotBuffer).toMatchSnapshot(LiveShotName);


});