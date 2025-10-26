import { test, expect } from '@playwright/test';
import PomManager from '../../utils/playwrightUtils/PomManager.js';


  test.beforeEach(async ({ page, baseURL }) => {
    const POMManager = new PomManager(page);
    const NewsList = POMManager.CallNewsListPage();
    await NewsList.GoToNewsListPage(baseURL);
  });

  test('Verify news of 2025 is not empty', async ({ page }) => {
      const POMManager = new PomManager(page);
      const NewsList = POMManager.CallNewsListPage();

      await NewsList.Open2025News();
      const newsCard2025 = await NewsList.GetNewsCardItem();
      expect(newsCard2025).toBeVisible();
        
 });


 test('Verify news of 2024 is not empty', async ({ page }) => {
   const POMManager = new PomManager(page);
   const NewsList = POMManager.CallNewsListPage();

   await NewsList.Open2024News();
   const newsCard2024 = await NewsList.GetNewsCardItem();
   expect(newsCard2024).toBeVisible(); 
});


    test('Verify news of 2023 is not empty', async ({ page }) => {
    const POMManager = new PomManager(page);
    const NewsList = POMManager.CallNewsListPage();

    await NewsList.Open2023News();
    const newsCard2023 = await NewsList.GetNewsCardItem();
    expect(newsCard2023).toBeVisible(); 
});



  test('Verify event cards data', async ({ page }) => {
      const POMManager = new PomManager(page);
      const NewsList = POMManager.CallNewsListPage();

      const image = await NewsList.GetNewsCardImage();
      const title = await NewsList.GetNewsCardTitle();
      const description = await NewsList.GetNewsCardDescription();

      expect(image).toBeVisible();
      expect(title).toBeVisible();
      expect(description).toBeVisible();
  });


  test('Verify opening news details from news list', async ({ page }) => {
    const POMManager = new PomManager(page);
    const NewsList = POMManager.CallNewsListPage();
    const NewsDetails = POMManager.CallNewsDetailsPage();

    const FirstNewsCardTitle = await NewsList.GetNewsCardTitle().textContent();
    await NewsList.ClickNewsCardReadMore();
    const detailedNewsTitle = await NewsDetails.GetNewsTitle();

    expect(detailedNewsTitle).toContain(FirstNewsCardTitle);
  });
