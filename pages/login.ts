import {Page} from "playwright/test";
export default class loginpage{
    constructor (public page:Page){

    }
    async enterlogin(username,password){
        await this.enterusername(username);
        await this.enterpassword(password);
        await this.submit();
    }
    async enterusername(username:string){
        // await this.page.locator('//input[@class="field clearable form-control"]').fill(username);
    const x = await this.page.locator('//input[@class="field clearable form-control"]');
          await x.clear();
          await x.fill(username);

    }
    async enterpassword(password:string){
        await this.page.locator('(//input[@class="field form-control"])[6]').fill(password);
    }
    async submit(){
        await this.page.locator("//span[text()='Sign In']").click();
    }

}

