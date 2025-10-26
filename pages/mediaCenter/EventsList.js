import { th } from "@faker-js/faker";

export class EventsList {
  constructor(page) {
    this.page = page;
    this.PageName = 'NewsList';
    this.PageUrl = 'media-center/events';

    // Locators
    this.EventsMainButton = page.locator('a[href="/web/en/media-center/events"]');
    this.EventsDateFromFilter = page.locator('input[placeholder*="From Date"]');
    this.EventsDateToFilter = page.locator('input[placeholder*="To Date"]');
    this.EventsCategoryFilter = page.locator("select[name='eventCategory']");
    this.EventsFilterButton = page.getByRole('button', { name: 'Filter' });
    this.EventsCard = page.locator('app-card-w-category >> nth=0');
    this.EventsCardImage = page.locator('app-card-w-category >> nth=0 >> img[alt="Card Image"]');
    this.EventsStartDate = page.locator('app-card-w-category >> nth=0 >> div > div  > div:has-text("start date")');
    this.EventsEndDate = page.locator('app-card-w-category >> nth=0 >> div > div  > div:has-text("end date")');
    this.EventsCardTitle = page.locator('app-card-w-category >> nth=0 >> p.line-clamp-2');
    this.EventsCardDescription = page.locator('app-card-w-category >> nth=0 >> p.text-sm');
    this.EventsCardCategory = page.locator('app-card-w-category >> nth=0 >> p.uppercase');
    this.EventsCardLocation = page.locator('app-card-w-category >> nth=0 >> p:has-text("Location")');
    this.EventsCardReadMore = page.locator('app-card-w-category >> nth=0 >> app-btn-one:has-text("read more")');
  }


    // Methods
    // Navigation

     // Events Page Methods
  async GoToEventsPage(Domain) {
    await this.page.goto(Domain + this.PageUrl);
  }

 GetEventsCardItem() {
    return this.EventsCard;
  }

   GetEventsCardImage() {
    return  this.EventsCardImage; 
  }

  GetEventsCardStartDate() {
    return  this.EventsStartDate;
  }

    GetEventsCardEndDate() {
    return  this.EventsEndDate;
  }

   GetEventsCardTitle() {
    return  this.EventsCardTitle;
  }

  GetEventsCardDescription() {
    return  this.EventsCardDescription;
  }

   GetEventsCardLocation() {
     return this.EventsCardLocation;
  }

   GetEventsCardCategory() {
    return  this.EventsCardCategory;
  }

   async ClickEventsCardReadMore() {
    return  await this.EventsCardReadMore.click();
  }

  
  
  async SelectEventsCategory(category) {
    await this.EventsCategoryFilter.selectOption(category);
  }

  async SelectEventsDate(fromDate, toDate) {
    await this.EventsDateFromFilter.fill(fromDate);
    await this.EventsDateToFilter.fill(toDate);
  }

}

export default EventsList;
