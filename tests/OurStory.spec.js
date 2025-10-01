import { test, expect } from '@playwright/test';
import PomManager from '../utils/playwrightUtils/PomManager.js';
import Urls from '../data/Urls.js';


test('Verify Our story page main menu',async ({page}) => {

  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage(); 
  await OurStoryPage.GoToOurStoryPage(Urls.UatUrl+'en');
  await OurStoryPage.MainMenu.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryMainMenu', OurStoryPage.MainMenu);
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryMainMenu');
  let UatShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot(OurStoryPage.MainMenu);
  await expect(UatShotBuffer).toMatchSnapshot(LiveShotName);
});


test('Verify Our story page banner',async ({page}) => {

  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage();
  await OurStoryPage.GoToOurStoryPage(Urls.UatUrl+'en');
  await OurStoryPage.Banner.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryBanner', OurStoryPage.Banner);
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryBanner');
  let UatShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot(OurStoryPage.Banner);
  await expect(UatShotBuffer).toMatchSnapshot(LiveShotName);

});


test('Verify Our story page breadcrumb',async ({page}) => {

  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage(); 
  await OurStoryPage.GoToOurStoryPage(Urls.UatUrl+'en');
  await OurStoryPage.BreadCrumb.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryBreadCrumb', OurStoryPage.BreadCrumb);
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryBreadCrumb');
  let UatShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot(OurStoryPage.BreadCrumb);
  await expect(UatShotBuffer).toMatchSnapshot(LiveShotName);
});


test('Verify Our story page body',async ({page}) => {
  
  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage(); 
  await OurStoryPage.GoToOurStoryPage(Urls.UatUrl+'en');
  await OurStoryPage.TextBody.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryBodyText', OurStoryPage.TextBody);
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryBodyText');
  let UatShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot(OurStoryPage.TextBody);
  await expect(UatShotBuffer).toMatchSnapshot(LiveShotName);

});


test('Verify Our story page footer',async ({page}) => {

  const POMManager = new PomManager(page);
  const OurStoryPage = POMManager.CallOurStoryPage(); 
  await OurStoryPage.GoToOurStoryPage(Urls.UatUrl+'en');
  await OurStoryPage.footer.waitFor();
  await OurStoryPage.OurStoryElementBaseSnapshot('OurStoryFooter', OurStoryPage.footer);
  let LiveShotName = await OurStoryPage.OurStoryElementBaseSnapshotName('OurStoryFooter');
  let UatShotBuffer = await OurStoryPage.OurStoryElementTestSnapshot(OurStoryPage.footer);
  await expect(UatShotBuffer).toMatchSnapshot(LiveShotName);
});






