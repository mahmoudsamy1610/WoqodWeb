import { test, expect } from '@playwright/test';
import PomManager from '../../utils/playwrightUtils/PomManager.js';


 test.beforeEach(async ({ page, baseURL }) => {
    const POMManager = new PomManager(page);
    const EventsList = POMManager.CallEventsListPage();
    await EventsList.GoToEventsPage(baseURL);
  });


test('Verify events list is not empty', async ({ page }) => {
  const POMManager = new PomManager(page);
  const EventsList = POMManager.CallEventsListPage();

  const EventsCardItem = await EventsList.GetEventsCardItem();
  expect(EventsCardItem).toBeVisible();
});

test('Verify events card details are visible', async ({ page }) => {
  const POMManager = new PomManager(page);
  const EventsList = POMManager.CallEventsListPage();

  const EventsCardImage = await EventsList.GetEventsCardImage();
  const EventsCardTitle = await EventsList.GetEventsCardTitle();
  const EventsCardDescription = await EventsList.GetEventsCardDescription();
  const EventsCardCategory = await EventsList.GetEventsCardCategory();
  const EventsCardLocation = await EventsList.GetEventsCardLocation();

    expect(EventsCardImage).toBeVisible();
    expect(EventsCardTitle).toBeVisible();
    expect(EventsCardDescription).toBeVisible();
    expect(EventsCardCategory).toBeVisible();
    expect(EventsCardLocation).toBeVisible();

});

test('Verify category filter is correct for getting events', async ({ page }) => {
  const POMManager = new PomManager(page);
  const EventsList = POMManager.CallEventsListPage();

  const Category = 'Fahes';
  await EventsList.SelectEventsCategory(Category);
  await EventsList.EventsFilterButton.click();
  const EventsCardCategory = await EventsList.GetEventsCardCategory().textContent();
    
  expect(EventsCardCategory).toContain(Category);
  
});


test('Verify date filter is getting correct events', async ({ page }) => {
  const POMManager = new PomManager(page);
  const EventsList = POMManager.CallEventsListPage();

  const FromDate = '10/1/2025';
  const ToDate = '12/31/2025';
  await EventsList.SelectEventsDate(FromDate, ToDate);
  await EventsList.EventsFilterButton.click();
  const FilteredEventStartDate = await EventsList.GetEventsCardStartDate();
  const FilteredEventEndDate = await EventsList.GetEventsCardEndDate();

  expect(FilteredEventStartDate).toBeVisible();
  expect(FilteredEventEndDate).toBeVisible();

});


test('Verify opening events details', async ({ page }) => {
  const POMManager = new PomManager(page);
  const EventsList = POMManager.CallEventsListPage();
  const EventsDetails = POMManager.CallEventsDetailsPage();

  const FirstEventCardTitle = await EventsList.GetEventsCardTitle().textContent();
  await EventsList.ClickEventsCardReadMore();
  const EventDetailsTitle = await EventsDetails.GetEventTitle();

  expect(EventDetailsTitle).toContain(FirstEventCardTitle);
});