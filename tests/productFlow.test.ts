import { expect, test } from '../hooks/baseTest';
import { LoginPage } from '../pages/loginPage';
import { AddProductPage } from '../pages/addproductPage';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';
import { DashboardPage } from '../pages/dashboardPage';
import createProductData from '../utils/encomData.json';

test('Create, verify, and delete(optional) Product', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(createProductData.admin.username, createProductData.admin.password);

  const productPage = new AddProductPage(page);
  const data = createProductData.product;

  await productPage.openProductTab();
  await productPage.fillProductForm(data);
  await productPage.selectAndCheckProductCard(data.crossProductCategory, data.crossProduct);
  await productPage.submit();

  await productPage.openProductTab();

  // Optional delete
  // await productPage.verifyProductAndDelete(data.title);
  await page.waitForTimeout(5000);
});

test('Complete Purchase Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Login as customer explicitly
  await loginPage.goto();
  await loginPage.login(createProductData.user.username, createProductData.user.password);

  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

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

  await page.waitForTimeout(5000);
});

test('Dashboard Page Verification', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Login as admin explicitly
  await loginPage.goto();
  await loginPage.login(createProductData.admin.username, createProductData.admin.password);

  const dashboardPage = new DashboardPage(page);

  await dashboardPage.validateDashboardUrl();
  await dashboardPage.validateStatisticsAreDigitsOnly();
  await dashboardPage.scrollToLatestOrdersAndValidate();
  await dashboardPage.clickViewAllAndValidate();

  const updatedStatus = await dashboardPage.changeFirstOrderStatusTo('Processing');
  expect(updatedStatus.toLowerCase()).toBe('processing');

  await dashboardPage.clickNotificationBell();
  await dashboardPage.closeFirstNotificationIfPresent();

  await page.waitForTimeout(10000);
});
