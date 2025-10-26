import { test, expect } from '@playwright/test';
import PomManager from '../../utils/playwrightUtils/PomManager.js';


test.beforeEach(async ({ page , baseURL}) => {
    const POMManager = new PomManager(page);
    const HomePage = POMManager.CallHomePage();
    await HomePage.GotoHomePage(baseURL);
});


test('Verify news section in home page', async ({ page }) => {

    const POMManager = new PomManager(page);  
    const HomePage = POMManager.CallHomePage();

    await expect(HomePage.NewsSectionTitle).toHaveText('WOQOD News');

});



test('Verify news data in home page', async ({ page }) => {

    const POMManager = new PomManager(page);  
    const HomePage = POMManager.CallHomePage();
    
    await expect(HomePage.NewsSectionTitle).toHaveText('WOQOD News');   

});


test('verify all news items data in home page', async ({ page }) => {

    const POMManager = new PomManager(page);  
    const HomePage = POMManager.CallHomePage();

    for (let col = 1; col <= 2; col++) {
        for (let row = 1; row <= 3; row++) {
          
            await expect(HomePage.GetNewsCardDayDate(col , row)).toBeVisible();
            await expect(HomePage.GetNewsCardMonthDate(col , row)).toBeVisible();
            await expect(HomePage.GetNewsCardTitle(col , row)).toBeVisible();
            await expect(HomePage.GetNewsCardDescription(col , row)).toBeVisible();
            await expect(HomePage.GetNewsCardReadMore(col , row)).toBeVisible();
        }   
    }
});


test('Verify "view all news" button', async ({ page , baseURL }) => {

        const POMManager = new PomManager(page);  
        const HomePage = POMManager.CallHomePage(); 
        await HomePage.ClickAllNewsButton();
        await expect(page).toHaveURL(baseURL + 'media-center/news-and-announcements');
    });


test('Verify opening news details from home page', async ({ page }) => {

        const POMManager = new PomManager(page);  
        const HomePage = POMManager.CallHomePage(); 
        const NewsDetails = POMManager.CallNewsDetailsPage();

        const NewsCardTitle = await HomePage.GetNewsCardTitle(1 , 1).textContent();
        await HomePage.ClickNewsCardReadMore(1 , 1);
        await page.waitForLoadState('networkidle');
        const NewsDetailsTitle = await NewsDetails.GetNewsTitle();
        expect(NewsDetailsTitle).toContain(NewsCardTitle);


});
