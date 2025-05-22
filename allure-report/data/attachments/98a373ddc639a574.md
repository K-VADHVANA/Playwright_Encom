# Test info

- Name: User Flow - Login to Create Offer >> Create and archive products
- Location: C:\Users\kvadhvana\playwright-pom\tests\login_user.test.ts:32:7

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('Enter product name')
    - locator resolved to <input type="text" required="" maxlength="50" formcontrolname="name" _ngcontent-ng-c665791045="" placeholder="Enter product name" class="form-control ng-untouched ng-pristine ng-invalid"/>
    - fill("Enviso_Automation_Adult_product")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    4 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 500ms

    at ProductsPage.createProduct (C:\Users\kvadhvana\playwright-pom\pages\productPage.ts:41:35)
    at C:\Users\kvadhvana\playwright-pom\tests\login_user.test.ts:41:5
```

# Test source

```ts
   1 | import { Page, Locator } from '@playwright/test';
   2 |  
   3 | export class ProductsPage {
   4 |   readonly page: Page;
   5 |  
   6 |   private Elements: {
   7 |     createBtn: Locator;
   8 |     nameInput: Locator;
   9 |     priceInput: Locator;
  10 |     descriptionInput: Locator;
  11 |     typeDropdown: Locator;
  12 |     vatDropdown: Locator;
  13 |     saveBtn: Locator;
  14 |     searchIcon: Locator;
  15 |     searchInput: Locator;
  16 |     searchResult: (name: string) => Locator;
  17 |     moreOptionsBtn: Locator;
  18 |     crossIcon: Locator;
  19 |   };
  20 |  
  21 |   constructor(page: Page) {
  22 |     this.page = page;
  23 |     this.Elements = {
  24 |       createBtn: this.page.locator('#btn-create-product-id'),
  25 |       nameInput: this.page.getByPlaceholder('Enter product name'),
  26 |       priceInput: this.page.locator('.enviso-input input[type="text"]'),
  27 |       descriptionInput: this.page.getByPlaceholder('Enter product description'),
  28 |       typeDropdown: this.page.locator('select[formcontrolname="type"]'),
  29 |       vatDropdown: this.page.locator('select[formcontrolname="vatRateId"]'),
  30 |       saveBtn: this.page.getByRole('button', { name: 'Save' }),
  31 |       searchIcon: this.page.locator('.icons8-search'),
  32 |       searchInput: this.page.getByPlaceholder('Search product'),
  33 |       searchResult: (name: string) => this.page.getByText(name).first(),
  34 |       moreOptionsBtn: this.page.locator('enviso-iconbutton[name="icons8-more"]').first(),
  35 |       crossIcon: this.page.locator('.icons8-delete').first()
  36 |     };
  37 |   }
  38 |  
  39 |   async createProduct(name: string, price: string, description: string, type: string) {
  40 |     await this.Elements.createBtn.click();
> 41 |     await this.Elements.nameInput.fill(name);
     |                                   ^ Error: locator.fill: Target page, context or browser has been closed
  42 |     await this.Elements.priceInput.fill(price);
  43 |     await this.Elements.descriptionInput.fill(description);
  44 |     await this.Elements.typeDropdown.selectOption({ label: type });
  45 |     await this.Elements.saveBtn.click();
  46 |   }
  47 |  
  48 |   async searchProduct(name: string) {
  49 |     await this.Elements.searchIcon.click();
  50 |     await this.Elements.searchInput.pressSequentially(name, { delay: 100 });
  51 |     await this.page.waitForTimeout(3000);
  52 |     return this.Elements.searchResult(name).isVisible();
  53 |   }
  54 |  
  55 |   async openProductOptions(name: string) {
  56 |     await this.Elements.searchResult(name).hover();
  57 |     await this.Elements.moreOptionsBtn.click();
  58 |   }
  59 |  
  60 |   async deleteProduct() {
  61 |     await this.Elements.crossIcon.click();
  62 |   }
  63 |  
  64 |   async isSaveButtonVisible(): Promise<boolean> {
  65 |     return await this.Elements.saveBtn.isVisible();
  66 |   }
  67 |  async archiveProduct() {
  68 |     const archiveOption = this.page.locator('.item-text', { hasText: 'Archive' });
  69 |     console.log("Is 'Archive' option visible?", await archiveOption.isVisible());
  70 |     await archiveOption.click();
  71 |  
  72 |     const archiveConfirm = this.page.getByRole('button', { name: 'Archive' });
  73 |     console.log("Is 'Archive' confirm button visible?", await archiveConfirm.isVisible());
  74 |     await archiveConfirm.click();
  75 |   }
  76 | }
  77 |  
  78 |  
```