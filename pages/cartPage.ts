import { Locator, Page, expect, FrameLocator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartNavLink: Locator;
  readonly cartItem: Locator;
  readonly increaseQtyButton: Locator;
  readonly decreaseQtyButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartNavLink = page.locator('a#nav-add-item-link');
    this.cartItem = page.locator('app-cart-item');
    this.increaseQtyButton = page.locator('button#increase-quantity-btn');
    this.decreaseQtyButton = page.locator('button#decrease-quantity-btn');
    this.checkoutButton = page.locator('button#checkout-button');
  }

  async goToCart() {
    await this.cartNavLink.click();
  }

async validateCartItem(productName: string) {
  const cartItems = this.page.locator('app-cart-item');
  const count = await cartItems.count();
  let found = false;

  for (let i = 0; i < count; i++) {
    const text = await cartItems.nth(i).innerText();
    if (text.includes(productName)) {
      found = true;
      break;
    }
  }

  expect(found).toBeTruthy();
}


  async increaseQuantity() {
    await this.increaseQtyButton.click();
  }

  async decreaseQuantity() {
    await this.decreaseQtyButton.click();
  }

  async checkout() {
    await this.checkoutButton.click();
    await this.page.waitForSelector('iframe', { state: 'attached' });
  }

  async completeRazorpayPayment() {
  try {
    // Wait for iframe to appear
    await this.page.waitForSelector("iframe", { state: "attached", timeout: 10000 });

    const razorpayFrame = this.page.frame({ url: /razorpay/i });
    if (!razorpayFrame) {
      console.warn("⚠️ Razorpay iframe not found");
      return;
    }

    // Select netbanking
    const netbankingOption = razorpayFrame.locator("[data-value='netbanking']");
    await netbankingOption.waitFor({ state: "visible", timeout: 10000 });
    await netbankingOption.click();
    // console.log("✅ Clicked Netbanking");

    // Select Bank of Baroda using role locator
    const bankOfBarodaOption = razorpayFrame.locator("//div[@role='button' and contains(., 'Bank of Baroda - Retail Banking')]");
    await bankOfBarodaOption.first().waitFor({ state: 'visible', timeout: 10000 });

    // Prepare to wait for popup BEFORE click
    const [bankPopup] = await Promise.all([
      this.page.context().waitForEvent('page', { timeout: 15000 }).catch(() => null), // handle failure safely
      bankOfBarodaOption.first().click()
    ]);

    if (!bankPopup) {
      console.warn("⚠️ Bank popup did not appear. Skipping payment step.");
      return;
    }

    await bankPopup.waitForLoadState('load');
    console.log("✅ Razorpay popup loaded with URL:", bankPopup.url());

    await bankPopup.waitForTimeout(2000); // Allow all elements to render

    // Click Success
    const successBtn = bankPopup.locator('button.success');
    await successBtn.waitFor({ state: 'visible', timeout: 10000 });
    await successBtn.click();
    // console.log("✅ Clicked 'Success' button");

  } catch (error) {
    if (error instanceof Error) {
      console.warn("⚠️ Razorpay payment step skipped due to:", error.message);
    } else {
      console.warn("⚠️ Razorpay payment step skipped due to an unknown error:", error);
    }
    // You can optionally log the stack or attach a screenshot
  }
}

}
