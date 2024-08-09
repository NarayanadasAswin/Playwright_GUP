import { Page } from "@playwright/test";
export default class news{
    constructor (public page: Page){

    }
    async selectfooter (){
        await this.page.locator('//a[text() ="News"]').click();
    
    }

    async dropdown (){
        await this.page.locator('//button[@type="button" and @data-toggle="dropdown"]').click();
    }
    async selectoption (){
       const x = await this.page.locator ("//span[text()='first user test']");
       await x.click();
    }
    async news (){
        await this.page.locator ('(//a[text()=" Academy and training "])[1]').click();
    }
    async return (){
        await this.page.locator ('//a[text()="Return to the News Hub"]').click();

    }
}