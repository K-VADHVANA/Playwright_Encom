import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly sidebarCategories: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input#search-input');
    this.sidebarCategories = page.locator('#categories-list li.flex');
  }

  async validateSidebarCategories(expected: string[]) {
    const count = await this.sidebarCategories.count();
    const actual: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await this.sidebarCategories.nth(i).innerText();
      const normalized = text.trim().toLowerCase().replace(/\s+/g, '-');
      actual.push(normalized);
    }

    expect(actual).toEqual(expected);
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
  }

  async clickProductFromResults(productName: string) {
    const productCard = this.page.locator(`div.group:has-text("${productName}")`);
    await expect(productCard).toBeVisible();
    await productCard.click();
  }
}
