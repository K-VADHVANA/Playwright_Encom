# Test info

- Name: Create new users
- Location: C:\Users\nipatel\Playwright\playwright-pom\tests\CreateUsers.test.ts:9:5

# Error details

```
TimeoutError: page.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//span[contains(text(), \'Log out\')]')
    - locator resolved to <span evtranslate="">Log out</span>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for" https://login.test-enviso.io/oauth2/logout?client_id=912953ee-d6f6-4dcf-8ed3-9efc6aa52949&post_logout_redirect_uri=https%3A%2F%2Fcloud.test-enviso.io%2Flogout" navigation to finish...
    - navigated to "https://login.test-enviso.io/oauth2/logout?client_id=912953ee-d6f6-4dcf-8ed3-9efc6aa52949&post_logout_redirect_uri=https%3A%2F%2Fcloud.test-enviso.io%2Flogout"
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

    at CloudDashboardPage.Logout (C:\Users\nipatel\Playwright\playwright-pom\pages\CloudDashboardPage.ts:32:25)
```

# Page snapshot

```yaml
- img
- text:    
- img "FreeCharge Corporation"
- text: 
- link " Dashboard":
  - /url: /home
- link " Users":
  - /url: /useraccounts
- link " User roles":
  - /url: /roles
- link " Logs":
  - /url: /logs
- link " Support":
  - /url: /support
- link " Settings":
  - /url: /settings
- img
- text: GIN Free Charge
- banner
- text: You are succesfully logged out.
- button "Go to login"
- complementary:
  - img "Company brand"
- img
- paragraph: "End of life: System VAT rates"
- paragraph: Feb 7th 25
- link "View latest updates":
  - /url: https://gantner-com.statuspal.eu/info_notices/185647
- button:
  - img
```

# Test source

```ts
   1 | import { Page, expect } from '@playwright/test';
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
  28 |        
  29 |         await this.page.click(this.Elements.profileMnu);
  30 |
  31 |         
> 32 |         await this.page.click(this.Elements.logoutLnk);
     |                         ^ TimeoutError: page.click: Timeout 10000ms exceeded.
  33 |     }
  34 | }
```