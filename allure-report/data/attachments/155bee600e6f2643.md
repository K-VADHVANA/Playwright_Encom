# Test info

- Name: Create new users
- Location: C:\Users\nipatel\Playwright\playwright-pom\tests\CreateUsers.test.ts:9:5

# Error details

```
Error: page.click: Test ended.
Call log:
  - waiting for locator('//enviso-dropdown-host[@class=\'enviso-topbar-50-lower\']')

    at CloudDashboardPage.Logout (C:\Users\nipatel\Playwright\playwright-pom\pages\CloudDashboardPage.ts:29:25)
```

# Test source

```ts
   1 | import { Page } from '@playwright/test';
   2 |
   3 | export class CloudDashboardPage {
   4 |     readonly page: Page;
   5 |
   6 |     constructor(page: Page) {
   7 |         this.page = page;
   8 |     }
   9 |
  10 |     private Elements = {
  11 |         expandIcn: "//i[@class='icons8-double-right pin-icon']",
  12 |         userMnu: "//div[contains(text(), 'Users')]",
  13 |         profileMnu: "//enviso-dropdown-host[@class='enviso-topbar-50-lower']",
  14 |         logoutLnk: "//span[contains(text(), 'Log out')]"
  15 |         
  16 |     }
  17 |
  18 |     async clickOnMenu(item:string){
  19 |         await this.page.click(this.Elements.expandIcn);
  20 |
  21 |         switch(item){
  22 |             case "Users" : await this.page.click(this.Elements.userMnu);
  23 |         }
  24 |     }
  25 |
  26 |     async Logout(){
  27 |         console.log("Logging Out!");
  28 |         console.log(await this.page.isVisible(this.Elements.profileMnu));
> 29 |         await this.page.click(this.Elements.profileMnu);
     |                         ^ Error: page.click: Test ended.
  30 |
  31 |         await this.page.waitForTimeout(5000);
  32 |         await this.page.click(this.Elements.logoutLnk);
  33 |     }
  34 | }
```