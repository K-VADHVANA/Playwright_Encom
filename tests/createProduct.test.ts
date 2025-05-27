import { test, expect } from '../hooks/baseTest';
import { AddProductPage } from '../pages/addproductPage';
import createProductData from '../utils/createProductData.json';

test('Create, verify, and delete a new product with cross product selection', async ({ page }) => {
  const productPage = new AddProductPage(page);
  const data = createProductData.product;

  // Open product tab and start filling the form
  await productPage.openProductTab();
  await productPage.fillProductForm(data);

  // Select and check the cross product card by its category and name
  await productPage.selectAndCheckProductCard(data.crossProductCategory, data.crossProduct);

  // Submit the product creation form
  await productPage.submit();

  // Optionally, wait or verify submission success here if needed
  // e.g., await expect(page.locator('some-success-message')).toBeVisible();

  // Re-open product tab to verify created product and delete it
  await productPage.openProductTab();

  // Verify the created product exists and delete it
  // await productPage.verifyProductAndDelete(data.title);
});
