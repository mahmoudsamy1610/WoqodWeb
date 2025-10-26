import { expect } from '@playwright/test';

export class NewsDetails {
  constructor(page) {
    this.page = page;
    this.PageName = 'NewsDetails';


    // Locators
    this.NewsTitle = page.locator("p.font-Cairo-Bold.text-\\[26px\\]");
    this.NewsPublishDate = page.locator('div.text-\\[\#011C35\\].text-\\[16px\\] > span');
    this.NewsImage = page.locator('img.cursor-pointer.ltr\\:lg\\:float-right.rounded-\\[5px\\]');
    this.NewsBody = page.locator('#detailed-body');
  }

  // Methods

  async GetNewsTitle() {
    return await this.NewsTitle.textContent();
  }

  async GetNewsPublishDate() {
    return await this.NewsPublishDate.textContent();
  }

  async GetNewsImage() {
    return await this.NewsImage.getAttribute();
  }

  async GetNewsBodyText() {
    return await this.NewsBody.textContent();
  }
}

export default NewsDetails;