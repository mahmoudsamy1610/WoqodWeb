import { test, expect } from '@playwright/test';
import PomManager from '../utils/playwrightUtils/PomManager.js';
import Urls from '../data/Urls.js';



test('Verify Our story page main menu', async ({ page, baseURL }) => {
  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage();

  await OurStoryPage.GoToOurStoryPage(Urls.LiveUrl);
  await OurStoryPage.MainMenu.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryMainMenu', OurStoryPage.MainMenu);
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryMainMenu');

  await OurStoryPage.GoToOurStoryPage(baseURL);
  await OurStoryPage.MainMenu.waitFor();
  let TestShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot(OurStoryPage.MainMenu);

  await expect(TestShotBuffer).toMatchSnapshot(LiveShotName);
});


test('Verify Our story page banner',async ({page , baseURL}) => {

  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage();

  await OurStoryPage.GoToOurStoryPage(Urls.LiveUrl);
  await OurStoryPage.Banner.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryBanner', OurStoryPage.Banner);
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryBanner');

  await OurStoryPage.GoToOurStoryPage(baseURL);
  await OurStoryPage.Banner.waitFor();
  let TestShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot(OurStoryPage.Banner); 
  
  await expect(TestShotBuffer).toMatchSnapshot(LiveShotName);


});


test('Verify Our story page breadcrumb', async ({ page, baseURL }) => {
  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage();

  await OurStoryPage.GoToOurStoryPage(Urls.LiveUrl);
  await OurStoryPage.BreadCrumb.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryBreadCrumb', OurStoryPage.BreadCrumb);
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryBreadCrumb');

  await OurStoryPage.GoToOurStoryPage(baseURL);
  await OurStoryPage.BreadCrumb.waitFor();
  let TestShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot(OurStoryPage.BreadCrumb);

  await expect(TestShotBuffer).toMatchSnapshot(LiveShotName);
});


test('Verify Our story page body', async ({ page, baseURL }) => {
  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage();

  await OurStoryPage.GoToOurStoryPage(Urls.LiveUrl);
  await OurStoryPage.TextBody.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryBodyText', OurStoryPage.TextBody);
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryBodyText');

  await OurStoryPage.GoToOurStoryPage(baseURL);
  await OurStoryPage.TextBody.waitFor();
  let TestShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot(OurStoryPage.TextBody);

  await expect(TestShotBuffer).toMatchSnapshot(LiveShotName);
});


test('Verify Our story page footer', async ({ page, baseURL }) => {
  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage();

  await OurStoryPage.GoToOurStoryPage(Urls.LiveUrl);
  await OurStoryPage.Footer.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryFooter', OurStoryPage.Footer);
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryFooter');

  await OurStoryPage.GoToOurStoryPage(baseURL);
  await OurStoryPage.Footer.waitFor();
  let TestShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot(OurStoryPage.Footer);

  await expect(TestShotBuffer).toMatchSnapshot(LiveShotName);
});






