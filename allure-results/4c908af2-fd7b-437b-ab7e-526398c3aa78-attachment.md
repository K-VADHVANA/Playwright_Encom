# Test info

- Name: Create new users
- Location: C:\Users\nipatel\Playwright\playwright-pom\tests\CreateUsers.test.ts:10:5

# Error details

```
TimeoutError: page.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('//button[contains(text(), \'Create user\')]')

    at UserPage.createUser (C:\Users\nipatel\Playwright\playwright-pom\pages\UsersPage.ts:23:25)
    at C:\Users\nipatel\Playwright\playwright-pom\tests\CreateUsers.test.ts:20:28
```

# Test source

```ts
   1 | import { Page } from '@playwright/test';
   2 |
   3 | export class UserPage {
   4 |     readonly page: Page;
   5 |
   6 |     constructor(page: Page) {
   7 |         this.page = page;
   8 |     }
   9 |
  10 |     private Elements = {
  11 |         createUserBtn: "//button[contains(text(), 'Create user')]",
  12 |         firstNameTxt: "//input[@name='txtFirstName']",
  13 |         lastNameTxt: "//input[@name='txtLastName']",
  14 |         emailTxt: "//input[@name='txtEmail']",
  15 |         roleDrp: "//select[@name='drpRole']",
  16 |         cancelBtn: "//button[contains(text(), 'Cancel')]",
  17 |         
  18 |     }
  19 |
  20 |    
  21 |
  22 |     async createUser(firstname: string, lastname: string, email: string) {
> 23 |         await this.page.click(this.Elements.createUserBtn);
     |                         ^ TimeoutError: page.click: Timeout 10000ms exceeded.
  24 |         await this.page.fill(this.Elements.firstNameTxt, firstname);
  25 |         await this.page.fill(this.Elements.lastNameTxt, lastname);
  26 |         await this.page.fill(this.Elements.emailTxt, email);
  27 |
  28 |         await this.page.locator(this.Elements.roleDrp).selectOption({ label: 'Full access (but not super admin)' });
  29 |
  30 |         await this.page.click(this.Elements.cancelBtn);
  31 |
  32 |     }
  33 | }
```