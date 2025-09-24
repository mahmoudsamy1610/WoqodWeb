import ElementMatcher from '../../utils/playwrightUtils/ElementMatcher.js';


class OurStoryContent {

   
    constructor(Page) {
        this.PageName = 'OurStory';
        this.PageUrl= '/pages/our_story';
        this.Page = Page;

        //Elements
        this.MainMenu = Page.locator("div.header-bg");
        this.Banner = Page.locator("div.absolute.w-full.h-full.left-0")
        this.BreadCrumb = Page.locator("div[class='bg-white']");
        this.TextBody = Page.locator('#detailed-body');
        this.footer = Page.locator("footer.flex");

        
    }
    

    async GoToOurStoryPage(Domain) {
        await this.Page.goto(Domain+this.PageUrl);
    }


    async OurStoryElementBaseSnapshot(ElementName , Element) {
        return await ElementMatcher.BaselineElementScreenShot(this.PageName, ElementName , Element);

    }

    async OurStoryElementTestSnapshot(Element) {
        return await ElementMatcher.TestElement(Element);
    
    }

    async OurStoryElementBaseSnapshotName(ElementName) {
        return await ElementMatcher.GetElementBaseShotName(this.PageName, ElementName);
    }

}



export default OurStoryContent;