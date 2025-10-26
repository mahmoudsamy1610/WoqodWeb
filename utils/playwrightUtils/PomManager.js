import OurStoryContent from '../../pages/aboutUs/OurStoryContent.js';
import ContactUsLanding from '../../pages/contactUs/ContactUsLanding.js';
import HomePage from '../../pages/home/HomePage.js';
import NewsDetails from '../../pages/mediaCenter/NewsDetails.js';
import NewsList from '../../pages/mediaCenter/NewsList.js';
import EventsList from '../../pages/mediaCenter/EventsList.js';
import EventsDetails from '../../pages/mediaCenter/EventsDetails.js';


class PomManager {

    constructor(page) {
        this.page = page;
        this.OurStoryPage = new OurStoryContent(page);
        this.ContactUsLanding = new ContactUsLanding(page);
        this.HomePage = new HomePage(page);
        this.NewsDetails = new NewsDetails(page);
        this.NewsList = new NewsList(page);
        this.EventsList = new EventsList(page);
        this.EventsDetails = new EventsDetails(page);

    }

    CallOurStoryPage() {
        return this.OurStoryPage;
    }

    CallContactUsLandingPage() {
        return this.ContactUsLanding;
    }

    CallHomePage() {
        return this.HomePage;
    }

    CallNewsDetailsPage() {
        return this.NewsDetails;
    }

    CallNewsListPage() {
        return this.NewsList;
    }

    CallEventsListPage() {
        return this.EventsList;
    }

    CallEventsDetailsPage() {
        return this.EventsDetails;
    }

}



export default PomManager;