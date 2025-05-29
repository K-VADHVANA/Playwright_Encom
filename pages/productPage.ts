import { Locator, Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.quantityInput = page.locator('input.w-20.border.border-gray-300.px-3.py-2');
    this.addToCartButton = page.getByRole('button', { name: 'Add To Cart' });
  }

  async setQuantity(quantity: string) {
    await this.quantityInput.fill(quantity);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
