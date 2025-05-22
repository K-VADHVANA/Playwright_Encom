# Test info

- Name: Checking roles
- Location: C:\Users\nipatel\Playwright\playwright-pom\tests\CreateUsers.test.ts:25:5

# Error details

```
Error: page.type: Test ended.
Call log:
  - waiting for locator('//button[@class=\'btn-search\']')

    at UserRolePage.SearchRoleByName (C:\Users\nipatel\Playwright\playwright-pom\pages\UsersRolePage.ts:18:25)
    at C:\Users\nipatel\Playwright\playwright-pom\tests\CreateUsers.test.ts:30:14
```

# Test source

```ts
   1 | import { Page } from '@playwright/test';
   2 |
   3 | export class UserRolePage {
   4 |     readonly page: Page;
   5 |
   6 |     constructor(page: Page) {
   7 |         this.page = page;
   8 |     }
   9 |
  10 |     private Elements = {
  11 |         searchBtn: "//button[@class='btn-search']"
  12 |         
  13 |     }
  14 |
  15 |    
  16 |
  17 |     async SearchRoleByName(rolename: string) {
> 18 |         await this.page.type(this.Elements.searchBtn,rolename);
     |                         ^ Error: page.type: Test ended.
  19 |     }
  20 | }
```