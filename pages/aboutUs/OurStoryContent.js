import ElementMatcher from '../../utils/playwrightUtils/ElementMatcher.js';


class OurStoryContent {

   
    constructor(Page) {
        this.PageName = 'OurStory';
        this.PageUrl= '/pages/our_story';
        this.Page = Page;
        this.TextBody = Page.locator('#detailed-body');
        
    }
    

    async GoToOurStoryPage(Domain) {
        await this.Page.goto(Domain+this.PageUrl);
    }


    async OurStoryElementBaseSnapshot(ElementName) {
        return await ElementMatcher.BaselineElementScreenShot(this.PageName, ElementName , this.TextBody);

    }

    async OurStoryElementTestSnapshot() {
        return await ElementMatcher.TestElement(this.TextBody);
    
    }

    async OurStoryElementBaseSnapshotName(ElementName) {
        return await ElementMatcher.GetElementBaseShotName(this.PageName, ElementName);
    }

}



export default OurStoryContent;