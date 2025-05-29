<<<<<<< HEAD
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
=======
import { test, expect } from '@playwright/test';

test('Validate dashboard stats and orders', async ({ page }) => {
  // Navigate to dashboard
  await page.goto('http://13.232.93.41:4200/admin/dashboard');

  // --- Validate Common Statistics Counts ---
  const stats = await page.locator('.CommonStatisticsCard .card-body h2');
  const count = await stats.count();
  for (let i = 0; i < count; i++) {
    const text = await stats.nth(i).innerText();
    expect(text).toMatch(/^\d+$/); // only numbers
  }

  // --- Scroll to "Latest Orders" section ---
  const latestOrdersTitle = page.getByRole('heading', { name: 'Latest Orders' });
  await latestOrdersTitle.scrollIntoViewIfNeeded();
  await expect(latestOrdersTitle).toBeVisible();

  // --- Click "View All" and verify redirection ---
  const viewAllBtn = page.getByRole('button', { name: 'View All' });
  await viewAllBtn.click();

  await expect(page).toHaveURL('http://13.232.93.41:4200/admin/orders');

  // --- Handle Dropdown for Order Status ---
  const orderStatusDropdown = page.locator('select'); // Assuming <select> for dropdown
  await expect(orderStatusDropdown.first()).toBeVisible();

  // Change first dropdown value
  await orderStatusDropdown.first().selectOption({ label: 'Processing' });
  const selectedValue = await orderStatusDropdown.first().inputValue();
  expect(['Completed', 'Processing', 'Pending']).toContain(selectedValue);
});
>>>>>>> 264cfd3a36b21605407007ae14accea686617bd9
