
import {test,expect} from "playwright/test";
import loginpage from "../pages/login";
import { gupconfig } from "../GUP.config";
import news from "../pages/news";
test("loginauthentication", async({page,baseURL})=>{
    const enter = new loginpage (page);
   
    await page.goto(`${baseURL}login`);
    await enter.enterusername(gupconfig.loggedinuser.username);
    await enter.enterpassword(gupconfig.loggedinuser.password);
    await page. waitForTimeout(2000);
    await enter.submit();
    await page. waitForTimeout(2000);
   

   
});
const newsnavigation = async ({page,baseURL}) =>{
    const footer = new news (page);
// await page.goto(`${baseURL}news-and-communications`);

//news link
await page. waitForTimeout(2000);
//await footer.selectfooter();
//await page.waitForTimeout(2000);
await footer.dropdown();
await page.waitForTimeout(3000);
await footer.selectoption();
await page.waitForTimeout(4000);
await footer.news();
await page.waitForTimeout(2000);
await footer.return();

await page.waitForTimeout(3000);
};
for (let i= 0; i<50 ; i++){
    test(`news section interaction - Test ${i + 1}`, async ({ page,baseURL }) => {
        await newsnavigation({ page,baseURL});
    });
}