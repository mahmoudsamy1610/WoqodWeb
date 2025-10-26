export class EventsDetails {
  constructor(page) {
    this.page = page;

    // Locators
    this.EventTitle = page.locator('p.font-Cairo-Bold.font-bold');
    this.EventBody = page.locator('#detailed-body');
    this.EventImage = page.locator('img.w-full.ng-lazyloaded');
    this.EventLocation = page.locator('section >> a[href*="google"]');
    this.EventStartDate = page.locator('p.font-Cairo-Regular:text-matches("Start date")');
    this.EventEndDate = page.locator('p.font-Cairo-Regular:text-matches("End date")');
  }

  // Methods

  async GetEventTitle() {
    return await this.EventTitle.textContent();
  }

  async GetEventBody() {
    return await this.EventBody.textContent();
  }

  GetEventImage() {
    return this.EventImage;
  }

  GetEventLocation() {
    return this.EventLocation;
  }

  async GetEventStartDate() {
    return await this.EventStartDate.textContent();
  }

  async GetEventEndDate() {
    return await this.EventEndDate.textContent();
  }
}

export default EventsDetails;