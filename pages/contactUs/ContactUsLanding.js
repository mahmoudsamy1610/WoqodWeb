

export class ContacUsLanding {
    
    constructor(page) {
        this.page = page;
        this.PageName = 'ContacUsLanding';
        this.PageUrl= '/contact-us';
        
        //Elements
        this.Form = page.locator("form.w-full.bg-white.ng-untouched.ng-pristine.ng-invalid");
        this.Name = page.locator("#fullname");
        this.Email = page.locator("#email");
        this.MobileNumber = page.locator("#mobileNumber");
        this.FeedbackTypeButton = page.locator("div.flex.flex-col.gap-6.w-full > div:nth-child(2) > div:nth-child(2)");
        this.FeedbackTypeList = page.getByText('Complaints');  //("div.flex.flex-col.gap-6.w-full > div:nth-child(2) > div:nth-child(2) > app-ddl-stander-multi > div > div > ul");
        this.FeedbackSourceButton = page.locator("div.flex.flex-col.gap-6.w-full > div:nth-child(3) > div:nth-child(1)");
        this.FeedbackSourceList = page.locator("div.flex.flex-col.gap-6.w-full > div:nth-child(3) > div:nth-child(1) > app-ddl-stander-multi > div > div > ul > li:nth-child(2)");
        this.FeedbackCategoryButton = page.locator("div.flex.flex-col.gap-6.w-full > div:nth-child(3) > div:nth-child(2)");
        this.FeedbackCategoryList = page.locator("div.flex.flex-col.gap-6.w-full > div:nth-child(3) > div:nth-child(2) > app-ddl-stander-multi > div > div > ul > li:nth-child(2)");
        this.FileAttachment = page.locator("div.flex.flex-col.gap-6.w-full > div:nth-child(4) > div:nth-child(1) > app-attachment-new-style > div > input");
        this.Company = page.locator("#company");
        this.Description = page.locator("#comment");
        this.Submit = page.getByRole('button', { name: 'Submit' });
        this.SuccessMessage = page.locator("div.modal-body > section > div > h1");
        

        //this.FeedbackCategory
        //this.FileAttachment
        //this.Company
        //this.Description
        //this.Submit

        

    }

    async GotoContactUsLandingPage(Domain) {
        await this.page.goto(Domain+this.PageUrl);
    }

    async SubmitValidContactUsForm(Name, Email , MobileNumber, FileUrl, Company ,Comment) {
        await this.Name.fill(Name);
        await this.Email.fill(Email);
        await this.MobileNumber.fill(MobileNumber);
        await this.FeedbackTypeButton.click();
        await this.FeedbackTypeList.click();
        await this.FeedbackSourceButton.click();
        await this.FeedbackSourceList.click();
        await this.FeedbackCategoryButton.click();
        await this.FeedbackCategoryList.click();
        await this.FileAttachment.setInputFiles(FileUrl);
        await this.Company.fill(Company);   
        await this.Description.fill(Comment);
        await this.Submit.click();
    }   
    
    
   

}

export default ContacUsLanding;