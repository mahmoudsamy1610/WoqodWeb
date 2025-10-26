
class HomePage {

    constructor(page) {
        this.page = page;
        this.PageName = 'HomePage';
       // this.NewsItemColumnNumber = NewsItemColumnNumber;
       // this.NewsItemRowNumber = NewsItemRowNumber;
        
        //Elements (first item of news)
        this.NewsSectionTitle = page.locator("app-news > section > div > div > p");
        this.AllNewsButton = page.locator("app-news > section > div > div > div > app-btn-one");
        this.NewsCardDayDate = page.locator("app-news > section > div > div > div:nth-child(1) > ul > li:nth-child(2) > div:nth-child(1) > span:nth-child(1)");
        this.NewsCardMonthDate = page.locator("app-news > section > div > div > div:nth-child(1) > ul > li:nth-child(2) > div:nth-child(1) > span:nth-child(2)");   
        this.NewsCardTitle = page.locator("app-news > section > div > div > div:nth-child(1) > ul > li:nth-child(1)> div:nth-child(2) > a:nth-child(1)");
        this.NewsCardDescription = page.locator("app-news > section > div > div > div:nth-child(1) > ul > li:nth-child(1)> div:nth-child(2) > a:nth-child(2)");
        this.NewsCardReadMore = page.locator("app-news > section > div > div > div:nth-child(1) > ul > li:nth-child(1)> div:nth-child(2) > a:nth-child(3)");
        
        

        
    }

    
     async GotoHomePage(Domain) {
        await this.page.goto(Domain);
    }


    GetNewsCardDayDate(Col , Row) {
        return this.page.locator("app-news > section > div > div > div:nth-child("+Col+") > ul > li:nth-child("+Row+")> div:nth-child(1) > span:nth-child(1)");
    }   

    GetNewsCardMonthDate(Col , Row) {
        return this.page.locator("app-news > section > div > div > div:nth-child("+Col+") > ul > li:nth-child("+Row+")> div:nth-child(1) > span:nth-child(2)");
    }   
    
     GetNewsCardTitle(Col , Row) {       
        return this.page.locator("app-news > section > div > div > div:nth-child("+Col+") > ul > li:nth-child("+Row+")> div:nth-child(2) > a:nth-child(1) ");
    }

    GetNewsCardDescription(Col , Row) {
        return this.page.locator("app-news > section > div > div > div:nth-child("+Col+") > ul > li:nth-child("+Row+")> div:nth-child(2) > a:nth-child(2) ");
    }   


    GetNewsCardReadMore(Col , Row) {
        return this.page.locator("app-news > section > div > div > div:nth-child("+Col+") > ul > li:nth-child("+Row+")> div:nth-child(2) > a:nth-child(3)");
    }   

    

    async ClickAllNewsButton() {
        await this.AllNewsButton.click();
    }   


    async ClickNewsCardReadMore(Col , Row) {
        await this.GetNewsCardReadMore(Col, Row).click();
    }   


}

export default HomePage;