import {test,expect} from "playwright/test";
import loginpage from "../pages/login";
import { gupconfig } from "../GUP.config";
export async function login(page,baseURL){
    const enter = new loginpage (page);
    await page.goto(`${baseURL}login`);
    await enter.enterusername(gupconfig.loggedinuser.username);
    await enter.enterpassword(gupconfig.loggedinuser.password);
    await enter.submit();
    await page.waitForTimeout(5000);
    await page.close();
    
}
test("loginauthentication", async({page,baseURL})=>{
    await login (page,baseURL);
})