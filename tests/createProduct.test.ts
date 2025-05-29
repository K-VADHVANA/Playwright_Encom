import { test, expect } from '../hooks/baseTest';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { AddProductPage } from '../pages/addProductPage';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';
import createProductData from '../utils/createProductData.json';

test('Create, verify, and delete(optional) Product', async ({ page }) => {
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
<<<<<<< HEAD
  // await productPage.verifyProductAndDelete(data.title);
=======
<<<<<<< HEAD

  // Verify the created product exists and delete it
  // await productPage.verifyProductAndDelete(data.title);
=======
  await productPage.verifyProductAndDelete(data.title);
>>>>>>> 09147e21661fa5218edf421b30d54e08edcb4ca0
>>>>>>> 264cfd3a36b21605407007ae14accea686617bd9
});

test('Complete Purchase Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const dashboardPage = new DashboardPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(createProductData.user.username, createProductData.user.password);

  const productTitle = createProductData.product.title;

  await homePage.searchProduct(productTitle);
  await homePage.clickProductFromResults(productTitle);

  await productPage.setQuantity('1');
  await productPage.addToCart();

  await cartPage.goToCart();
  await cartPage.validateCartItem(productTitle);
  await cartPage.increaseQuantity();
  await cartPage.decreaseQuantity();
  await cartPage.checkout();
  await cartPage.completeRazorpayPayment();
  await page.waitForTimeout(10000);
});

test('Dashboard Page Verification', async ({ page }) => {
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