import OurStoryContent from '../../pages/aboutUs/OurStoryContent.js';
import ContactUsLanding from '../../pages/contactUs/ContactUsLanding.js';

class PomManager {

    constructor(page) {
        this.page = page;
        this.OurStoryPage = new OurStoryContent(page);
        this.ContactUsLanding = new ContactUsLanding(page);
    }

    CallOurStoryPage() {
        return this.OurStoryPage;
    }

    CallContactUsLandingPage() {
        return this.ContactUsLanding;
    }


}



export default PomManager;