# Test info

- Name: Create new users
- Location: C:\Users\nipatel\Playwright\playwright-pom\tests\login.test.ts:8:5

# Error details

```
Error: page.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[contains(text(), \'Create user\')]')
    - locator resolved to <button evtranslate="" class="btn btn-primary" _ngcontent-ng-c2813674329="">Create user</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

    at LoginPage.createUser (C:\Users\nipatel\Playwright\playwright-pom\pages\LoginPage.ts:35:21)
    at C:\Users\nipatel\Playwright\playwright-pom\tests\login.test.ts:17:25
```

# Test source

```ts
   1 | import { Page } from '@playwright/test';
   2 |
   3 | export class LoginPage {
   4 |   readonly page: Page;
   5 |
   6 |   constructor(page: Page) {
   7 |     this.page = page;
   8 |   }
   9 |
  10 |   private Elements = {
  11 |     loginUser: "//input[@id='loginId']",
  12 |     nextBtnUser: "//button[@id='next-button']",
  13 |     loginPass: "//input[@id='password']",
  14 |     loginBtn: "//button[contains(text(), 'Log in')]",
  15 |     createBtn: "//button[contains(text(), 'Create user')]",
  16 |     fName: "//input[@name='txtFirstName']",
  17 |     lname: "//input[@name='txtLastName']",
  18 |     email: "//input[@name='txtEmail']",
  19 |     roleDrp: "//select[@name='drpRole']",
  20 |     valueDrop: "//option[contains(text(), 'Full access')]",
  21 |     hoverSection: "//i[@class='icons8-double-right pin-icon']",
  22 |     userMenu: "//div[contains(text(), 'Users')]",
  23 |     cancelBtn: "//button[contains(text(), 'Cancel')]"
  24 | }
  25 |
  26 | async navigateToEnvisoLoginPage() {
  27 |     await this.page.goto("https://cloud.test-enviso.io/login");
  28 |     await this.page.waitForTimeout(5000);
  29 |     
  30 | }
  31 |
  32 | async createUser(firstname: string, lastname: string, email: string) {
  33 |     
  34 |     
> 35 |     await this.page.click(this.Elements.createBtn);
     |                     ^ Error: page.click: Target page, context or browser has been closed
  36 |     await this.page.type(this.Elements.fName, firstname);
  37 |     await this.page.type(this.Elements.lname, lastname);
  38 |     await this.page.type(this.Elements.email, email);
  39 |
  40 |    await this.page.locator(this.Elements.roleDrp).selectOption({ label: 'Full access (but not super admin)' });
  41 |    //await this.page.waitForTimeout(2000);
  42 |    await this.page.click(this.Elements.cancelBtn);
  43 |    // await this.page.locator(this.Elements.roleDrp).selectOption({ index: 2 });
  44 |
  45 | }
  46 |
  47 | async userLogin(email: string, password: string){
  48 |     await this.page.type(this.Elements.loginUser, email);
  49 |
  50 |     await this.page.click(this.Elements.nextBtnUser);
  51 |
  52 |     await this.page.type(this.Elements.loginPass, password);
  53 |
  54 |     await this.page.click(this.Elements.loginBtn);
  55 |
  56 |     await this.page.click(this.Elements.hoverSection);
  57 |     await this.page.click(this.Elements.userMenu);
  58 | }
  59 |
  60 | //   async navigate() {
  61 | //     await this.page.goto('/login');
  62 | //   }
  63 |
  64 | //   async enterUsername(username: string) {
  65 | //     await this.page.fill('input[name="username"]', username);
  66 | //   }
  67 |
  68 | //   async enterPassword(password: string) {
  69 | //     await this.page.fill('input[name="password"]', password);
  70 | //   }
  71 |
  72 | //   async clickLogin() {
  73 | //     await this.page.click('button[type="submit"]');
  74 | //   }
  75 |
  76 | //   async login(username: string, password: string) {
  77 | //     await this.enterUsername(username);
  78 | //     await this.enterPassword(password);
  79 | //     await this.clickLogin();
  80 | //   }
  81 | }
  82 |
```