# Test info

- Name: User Flow - Login to Create Offer >> create a new offer
- Location: C:\Users\kvadhvana\playwright-pom\tests\login_user.test.ts:52:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Activate' })
    - locator resolved to <button id="offer-create-btn-active-offer-id" class="btn btn-primary btn-medium btn-active margin-left-20 margin-right-20 float-right">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <enviso-toast class="show" _nghost-ng-c4260226433="">…</enviso-toast> from <enviso-alert _nghost-ng-c2429199863="" _ngcontent-ng-c2985647552="">…</enviso-alert> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <enviso-toast class="show" _nghost-ng-c4260226433="">…</enviso-toast> from <enviso-alert _nghost-ng-c2429199863="" _ngcontent-ng-c2985647552="">…</enviso-alert> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <enviso-toast class="show" _nghost-ng-c4260226433="">…</enviso-toast> from <enviso-alert _nghost-ng-c2429199863="" _ngcontent-ng-c2985647552="">…</enviso-alert> subtree intercepts pointer events
  16 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="wrapper-inner" _ngcontent-ng-c2013685="">…</div> from <div class="steps-wrapper" _ngcontent-ng-c3309536623="">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable

    at MyOffersPage.createOfferWithName (C:\Users\kvadhvana\playwright-pom\pages\Myoffers.ts:52:35)
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
- region "General":
  - text: General Offer name *
  - textbox "Enter offer name": Automation_ticket
  - text: Description
  - textbox "About your offer"
  - text: Tags 
  - textbox "Enter a tag"
  - button "+"
  - text: Offer image* Upload your .png or .jpg file here Offer image is with a 2:1 ratio with minimum dimensions 1200 x 600 pixels  Crop image
  - button "Cancel"
  - button "Done"
- region "Offer period":
  - text: Offer period Starts from
  - button:
    - img
  - text: Select start date
  - textbox
  - text: Ends on
  - button:
    - img
  - text: Select end date
  - textbox
- region "Visit duration":
  - text: Visit duration
  - spinbutton: "0"
  - text: Hours
  - spinbutton: "0"
  - text: Minutes
- button "Activate"
- button "Save as draft"
- button "Next step"
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
  17 |   };
  18 |
  19 |   constructor(page: Page) {
  20 |     this.page = page;
  21 |
  22 |     this.Elements = {
  23 |       sidebarExpandBtn: this.page.locator('.icons8-double-right'),
  24 |       myOffersMenuItem: this.page.getByText('My offers'),
  25 |       createOfferBtn: this.page.locator('#offer-list-btn-create-offer-id'),
  26 |       ticketCard: this.page.locator('#offer-activate-only-id'),
  27 |       offerNameInput: this.page.locator('#offer-create-text-offer-name-id'),
  28 |       offerImageInput: this.page.locator('input[type="file"]'), // Hidden input for file upload
  29 |       activateBtn: this.page.getByRole('button', { name: 'Activate' }),
  30 |       errorMessage: this.page.getByText('Offer name is required'),
  31 |     };
  32 |   }
  33 |
  34 |   async goToMyOffers() {
  35 |     await this.Elements.sidebarExpandBtn.click();
  36 |     await this.Elements.myOffersMenuItem.click();
  37 |     await this.Elements.sidebarExpandBtn.click(); // Collapse again
  38 |   }
  39 | async createOfferWithName(name: string) {
  40 |   await this.Elements.createOfferBtn.click();
  41 |   await this.Elements.ticketCard.click();
  42 |   await this.Elements.offerNameInput.fill(name);
  43 |
  44 |   // ✅ Fixed relative path
  45 |   
  46 |   const imagePath = path.resolve(__dirname, '../utils/offerImage.png');
  47 |   await this.Elements.offerImageInput.setInputFiles(imagePath);
  48 |   if (!fs.existsSync(imagePath)) {
  49 |   throw new Error(`Image file not found at: ${imagePath}`);
  50 | }
  51 |
> 52 |   await this.Elements.activateBtn.click();
     |                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  53 | }
  54 | }
  55 |
```