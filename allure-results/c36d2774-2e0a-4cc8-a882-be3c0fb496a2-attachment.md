# Test info

- Name: Create new users
- Location: C:\Users\nipatel\Playwright\playwright-pom\tests\CreateUsers.test.ts:9:5

# Error details

```
Error: page.isVisible: Unexpected token "/" while parsing css selector "/html/body/app-root/enviso-topbar/div/div[2]/enviso-dropdown-host". Did you mean to CSS.escape it?
Call log:
    - checking visibility of /html/body/app-root/enviso-topbar/div/div[2]/enviso-dropdown-host

    at CloudDashboardPage.Logout (C:\Users\nipatel\Playwright\playwright-pom\pages\CloudDashboardPage.ts:28:37)
    at C:\Users\nipatel\Playwright\playwright-pom\hooks\baseTest.ts:31:13
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
  13 |         profileMnu: "/html/body/app-root/enviso-topbar/div/div[2]/enviso-dropdown-host",
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
> 28 |         console.log(await this.page.isVisible(this.Elements.profileMnu));
     |                                     ^ Error: page.isVisible: Unexpected token "/" while parsing css selector "/html/body/app-root/enviso-topbar/div/div[2]/enviso-dropdown-host". Did you mean to CSS.escape it?
  29 |         await this.page.click(this.Elements.profileMnu);
  30 |
  31 |         await this.page.waitForTimeout(5000);
  32 |         await this.page.click(this.Elements.logoutLnk);
  33 |     }
  34 | }
```