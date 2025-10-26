import { expect } from '@playwright/test';

export class NewList {
  constructor(page) {
    this.page = page;
    this.PageName = 'NewsList';
    this.PageUrl = 'media-center/news-and-announcements';

    // Locators
    this.NewsMainButton = page.locator('a[href="/web/en/media-center/news-and-announcements"].active');
    this.Button2025 = page.locator('ul.years-time-line >> button:has-text("2025")');
    this.Button2024 = page.locator('ul.years-time-line >> button:has-text("2024")'); 
    this.Button2023 = page.locator('ul.years-time-line >> button:has-text("2023")');
    this.NewsCard = page.locator('ul.w-full.flex.flex-row.flex-wrap >> li:nth-child(1)');
    this.NewsCardImage = page.locator('ul.w-full.flex.flex-row.flex-wrap > li:first-child img[alt="Card Image"]');
    this.NewsCardTitle = page.locator('ul.w-full.flex.flex-row.flex-wrap >> li:first-child >> p.line-clamp-2')
    this.NewsCardDescription = page.locator('ul.w-full.flex.flex-row.flex-wrap > li:first-child p.text-sm');
    this.NewsCardReadMore = page.locator('ul.w-full.flex.flex-row.flex-wrap > li:first-child a.btn-style');

  
  }

  // Methods

  // Navigation
  async GoToNewsListPage(Domain) {
    this.page.goto(Domain + this.PageUrl);
    await this.page.waitForLoadState('networkidle');

  }

  async Open2025News() {
    await this.Button2025.click();
    await this.page.waitForLoadState('networkidle');
  }

  async Open2024News() {
    await this.Button2024.click();
    await this.page.waitForLoadState('networkidle');
  }

  async Open2023News() {
    await this.Button2023.click();
    await this.page.waitForLoadState('networkidle');
  }

  // News Card Methods

   GetNewsCardItem() {
    return this.NewsCard;
  }

   GetNewsCardImage() {
    return  this.NewsCard;
  }


   GetNewsCardTitle() {
    return  this.NewsCardTitle;

  }

   GetNewsCardDescription() {
    return  this.NewsCardDescription;
  }

   ClickNewsCardReadMore() {
     this.NewsCardReadMore.click();
  }

 
}

export default NewList;