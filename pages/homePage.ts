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
