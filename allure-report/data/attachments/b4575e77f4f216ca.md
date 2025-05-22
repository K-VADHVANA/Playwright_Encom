# Test info

- Name: Checking roles
- Location: C:\Users\nipatel\Playwright\playwright-pom\tests\CreateUsers.test.ts:25:5

# Error details

```
Error: page.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
Call log:
  - waiting for locator('//button[@class=\'btn-search\']')
    - locator resolved to <button class="btn-search" _ngcontent-ng-c3214509520="" data-cy="enviso-search-button-search">…</button>
    - fill("Enviso")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

    at UserRolePage.SearchRoleByName (C:\Users\nipatel\Playwright\playwright-pom\pages\UsersRolePage.ts:20:25)
    at C:\Users\nipatel\Playwright\playwright-pom\tests\CreateUsers.test.ts:30:5
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
  18 |         
  19 |         await this.page.click(this.Elements.searchBtn);
> 20 |         await this.page.fill(this.Elements.searchBtn, rolename);
     |                         ^ Error: page.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
  21 |         await this.page.waitForTimeout(5000);
  22 |     }
  23 | }
```