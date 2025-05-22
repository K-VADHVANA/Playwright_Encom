# Test info

- Name: User Flow - Login to Create Offer >> create a new offer
- Location: C:\Users\kvadhvana\playwright-pom\tests\login_user.test.ts:52:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Select tickets' })

    at MyOffersPage.createOfferWithName (C:\Users\kvadhvana\playwright-pom\pages\Myoffers.ts:59:40)
    at C:\Users\kvadhvana\playwright-pom\tests\login_user.test.ts:57:5
```

# Page snapshot

```yaml
- img
- text:    
- img: KV
- text: 
- link " My offers":
  - /url: /offers
- link " Products":
  - /url: /products
- text: 
- link "V VAT rates":
  - /url: /vatrate
- link "L Ledger accounts":
  - /url: /ledgeraccounts
- link " Orders":
  - /url: /orders
- link " Capacity":
  - /url: /quota
- text: 
- link " Pricing":
  - /url: /pricing
- link " Promotions":
  - /url: /promotions
- link " Customers":
  - /url: /customers
- link " Visitor info forms":
  - /url: /forms
- link " External Codes":
  - /url: /externalcodes
- link " Offers Shop":
  - /url: /offershop
- img
- text: GIN SAFARIWORLD
- banner:
  - text: 
  - heading "Create offer" [level=1]
- text: 1. Offer details 2. Tickets & Capacity
- region "Tickets":
  - text: Tickets
  - img
  - text: Select tickets
- button "Activate"
- button "Save as draft"
- button "Prev step"
- text:  
```

# Test source

```ts
   1 | import { Page, Locator } from '@playwright/test';
   2 | import path from 'path';
   3 | import fs from 'fs';
   4 |
   5 | export class MyOffersPage {
   6 |   readonly page: Page;
   7 |
   8 |   private Elements: {
   9 |     sidebarExpandBtn: Locator;
  10 |     myOffersMenuItem: Locator;
  11 |     createOfferBtn: Locator;
  12 |     ticketCard: Locator;
  13 |     offerNameInput: Locator;
  14 |     offerImageInput: Locator;
  15 |     activateBtn: Locator;
  16 |     errorMessage: Locator;
  17 |     donebtn: Locator;
  18 |     nextBtn: Locator;
  19 |     selectTicketType: Locator;  
  20 |   };
  21 |
  22 |   constructor(page: Page) {
  23 |     this.page = page;
  24 |
  25 |     this.Elements = {
  26 |       sidebarExpandBtn: this.page.locator('.icons8-double-right'),
  27 |       myOffersMenuItem: this.page.getByText('My offers'),
  28 |       createOfferBtn: this.page.locator('#offer-list-btn-create-offer-id'),
  29 |       ticketCard: this.page.locator('#offer-activate-only-id'),
  30 |       offerNameInput: this.page.locator('#offer-create-text-offer-name-id'),
  31 |       offerImageInput: this.page.locator('input[type="file"]'), // Hidden input for file upload
  32 |       activateBtn: this.page.getByRole('button', { name: 'Activate' }),
  33 |       errorMessage: this.page.getByText('Offer name is required'),
  34 |       donebtn: this.page.getByRole('button', { name: 'Done' }),
  35 |       nextBtn: this.page.getByRole('button', { name: 'Next step' }),
  36 |       selectTicketType: this.page.getByRole('button', { name: 'Select tickets' }),
  37 |     };
  38 |   }
  39 |
  40 |   async goToMyOffers() {
  41 |     await this.Elements.sidebarExpandBtn.click();
  42 |     await this.Elements.myOffersMenuItem.click();
  43 |     await this.Elements.sidebarExpandBtn.click(); // Collapse again
  44 |   }
  45 | async createOfferWithName(name: string) {
  46 |   await this.Elements.createOfferBtn.click();
  47 |   await this.Elements.ticketCard.click();
  48 |   await this.Elements.offerNameInput.fill(name);
  49 |
  50 |   // ✅ Fixed relative path
  51 |   
  52 |   const imagePath = path.resolve(__dirname, '../utils/offerImage.png');
  53 |   await this.Elements.offerImageInput.setInputFiles(imagePath);
  54 |   if (!fs.existsSync(imagePath)) {
  55 |   throw new Error(`Image file not found at: ${imagePath}`);
  56 | }
  57 |   await this.Elements.donebtn.click();
  58 |   await this.Elements.nextBtn.click();
> 59 |   await this.Elements.selectTicketType.click();
     |                                        ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  60 |   await this.Elements.activateBtn.click();
  61 | }
  62 | }
  63 |
```