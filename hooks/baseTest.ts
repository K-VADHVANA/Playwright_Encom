// hooks/baseTest.ts
import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import createProductData from '../utils/encomData.json';

type MyFixtures = {
  page: Page;
};

export const test = base.extend<MyFixtures>({});

test.beforeAll(async () => {
  console.log('🚀 beforeAll - Runs once before all tests');
});

test.afterAll(async () => {
  console.log('🧹 afterAll - Runs once after all tests');
});

test.beforeEach(async ({ page }) => {
  console.log('🚀 beforeEach - Test starting');
  // NO login here
});

test.afterEach(async ({ page }, testInfo) => {
  console.log(`✅ afterEach - Completed: ${testInfo.title}`);

  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  }

  await page.close();
});

export { expect };

// hooks/baseTest.ts

// import { test as base, expect, Page } from '@playwright/test';

// type MyFixtures = {
//   page: Page;
// };

// export const test = base.extend<MyFixtures>({});

// test.beforeAll(async () => {
//   console.log('🚀 beforeAll - Runs once before all tests');
// });

// test.afterAll(async () => {
//   console.log('🧹 afterAll - Runs once after all tests');
// });

// test.afterEach(async ({ page }, testInfo) => {
//   console.log(`✅ afterEach - Completed: ${testInfo.title}`);

//   if (testInfo.status !== testInfo.expectedStatus) {
//     await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
//   }

//   await page.close();
// });

// export { expect };

