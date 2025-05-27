import { Locator, Page, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly statNumbers: Locator;
  readonly latestOrdersTitle: Locator;
  readonly viewAllButton: Locator;
  readonly firstOrderDropdown: Locator;
  readonly notificationBell: Locator;
  readonly closeNotificationButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.statNumbers = page.locator('.card-body h2');
    this.latestOrdersTitle = page.getByRole('heading', { name: 'Latest Orders' });
    this.viewAllButton = page.locator('#view-all-button');
    this.firstOrderDropdown = page.locator('#status-select-1');
    this.notificationBell = page.locator('#notification-toggle-button'); // ✅ Step 7
    this.closeNotificationButtons = page.locator('button:has-text("×")'); // ✅ Step 8
  }

  async validateDashboardUrl() {
    await expect(this.page).toHaveURL('http://13.232.93.41:4200/admin');
  }

  async validateStatisticsAreDigitsOnly() {
    const count = await this.statNumbers.count();
    for (let i = 0; i < count; i++) {
      const text = await this.statNumbers.nth(i).innerText();
      expect(text.replace(/,/g, '').trim()).toMatch(/^\d+$/);
    }
  }

  async scrollToLatestOrdersAndValidate() {
    await this.latestOrdersTitle.scrollIntoViewIfNeeded();
    await expect(this.latestOrdersTitle).toBeVisible();
  }

  async clickViewAllAndValidate() {
    await this.viewAllButton.scrollIntoViewIfNeeded();
    await expect(this.viewAllButton).toBeVisible();
    await expect(this.viewAllButton).toBeEnabled();

    await Promise.all([
      this.page.waitForURL('**/admin/orders'),
      this.viewAllButton.click(),
    ]);

    await expect(this.page).toHaveURL('http://13.232.93.41:4200/admin/orders');
  }

  async changeFirstOrderStatusTo(statusLabel: string) {
    const dropdown = this.firstOrderDropdown;

    await dropdown.scrollIntoViewIfNeeded();
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toBeEnabled();

    const options = dropdown.locator('option');
    const labels = await options.allTextContents();
    console.log(`Available status options: ${labels.join(', ')}`);

    const match = labels.find(label => label.trim().toLowerCase() === statusLabel.trim().toLowerCase());
    if (!match) {
      throw new Error(`Status label "${statusLabel}" not found. Available: ${labels.join(', ')}`);
    }

    await dropdown.selectOption({ label: match });
    return await dropdown.inputValue();
  }

  async clickNotificationBell() {
    await this.notificationBell.click();
  }

  async closeFirstNotificationIfPresent() {
    const closeCount = await this.closeNotificationButtons.count();
    if (closeCount > 0) {
      await this.closeNotificationButtons.nth(0).click();
    }
  }
}
