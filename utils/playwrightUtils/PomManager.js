import OurStoryContent from '../../pages/aboutUs/OurStoryContent.js';

class PomManager {

    constructor(page) {
        this.OurStoryPage = new OurStoryContent(page);

    }


    CallOurStoryPage() {
        return this.OurStoryPage;
    }

}



export default PomManager;