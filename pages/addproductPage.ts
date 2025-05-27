import { Locator, Page, expect } from '@playwright/test';

export class AddProductPage {
  readonly page: Page;
  readonly productTab: Locator;
  readonly addProductBtn: Locator;
  readonly titleInput: Locator;
  readonly thumbnailInput: Locator;
  readonly descriptionTextarea: Locator;
  readonly categorySelect: Locator;
  readonly priceInput: Locator;
  readonly stockInput: Locator;
  readonly discountInput: Locator;
  readonly tagsInput: Locator;
  readonly addTagButton: Locator;
  readonly submitButton: Locator;
  readonly categoryDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTab = page.locator('#products-button');
    this.addProductBtn = page.locator('#add-product-button');
    this.titleInput = page.locator('#title');
    this.thumbnailInput = page.locator('#thumbnail');
    this.descriptionTextarea = page.locator('#description');
    this.priceInput = page.locator('#price');
    this.stockInput = page.locator('#stock');
    this.discountInput = page.locator('#discount');
    this.tagsInput = page.locator('#tags-input');
    this.addTagButton = page.locator('#add-tag-button');
    this.submitButton = page.locator('#submit-button');
    this.categorySelect = page.getByLabel('Category *');
    this.categoryDropdown = page.locator('#category-dropdown-container select#category');

  }

  async openProductTab() {
    await this.productTab.click();
  }

  async fillProductForm(data: any) {
    await this.addProductBtn.click();
    await this.titleInput.fill(data.title);
    await this.thumbnailInput.fill(data.thumbnail);
    await this.descriptionTextarea.fill(data.description);
    await this.categorySelect.selectOption({ label: data.category });
    await this.priceInput.fill(data.price);
    await this.stockInput.fill(data.stock);
    await this.discountInput.fill(data.discount);

    for (const tag of data.tags) {
      await this.tagsInput.fill(tag);
      await this.addTagButton.click();
    }
  }

  async selectAndCheckProductCard(category: string, productName: string) {
  // Wait for dropdown to appear/become visible (with timeout)
  await this.page.waitForSelector('#category-dropdown-container select#category', { state: 'visible', timeout: 10000 });

  // Now select option
  await this.categoryDropdown.selectOption({ label: category });

  // Wait for product cards container (optional but safer)
  const productCards = this.page.locator('div[id^="product-item-"]');

  // Filter cards that have the product name text
  const matchingCard = productCards.filter({ hasText: productName });

  // Verify there's exactly 1 matching card and it is visible
  await expect(matchingCard).toHaveCount(1);
  await expect(matchingCard).toBeVisible();

  // Locate checkbox inside card and click
  const productCheckbox = matchingCard.locator('input[type="checkbox"]');
  await expect(productCheckbox).toBeVisible();
  await productCheckbox.click();
}

  async submit() {
    await this.submitButton.click();
  }

  async verifyProductAndDelete(productName: string) {
    const product = this.page.locator('td', { hasText: productName });
    await product.click();
    const deleteProductBtn = this.page.locator('#delete-button');
    await deleteProductBtn.click();
  }
}
