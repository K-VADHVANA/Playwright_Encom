import { test, expect } from '../hooks/baseTest';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { AddProductPage } from '../pages/addproductPage';
import createProductData from '../utils/createProductData.json';

test('Create, verify, and delete a new product with cross product selection', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new AddProductPage(page);
  const data = createProductData.product;

  // Login
  await loginPage.goto();
  await loginPage.login(createProductData.login.username,createProductData.login.password);

  // Create product
  await productPage.openProductTab();
  await productPage.fillProductForm(data);
  await productPage.selectAndCheckProductCard(data.crossProductCategory, data.crossProduct);
  await productPage.submit();

  // Verify and delete product
  await productPage.openProductTab();
  await productPage.verifyProductAndDelete(data.title);
});

test('Complete Dashboard Page Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login(createProductData.login.username,createProductData.login.password);

  // Validate dashboard page loaded
  await dashboardPage.validateDashboardUrl();

  // Validate dashboard statistics
  await dashboardPage.validateStatisticsAreDigitsOnly();

  // Validate Latest Orders section
  await dashboardPage.scrollToLatestOrdersAndValidate();

  // Click "View All" and validate navigation
  await dashboardPage.clickViewAllAndValidate();

  // Change first order status
  const updatedStatus = await dashboardPage.changeFirstOrderStatusTo('Processing');
  expect(updatedStatus.toLowerCase()).toBe('processing');

  // Notification bell interaction
  await dashboardPage.clickNotificationBell();
  await dashboardPage.closeFirstNotificationIfPresent();

  await page.waitForTimeout(10000); // Optional: Wait for observation
});