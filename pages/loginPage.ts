import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get Elements() {
    return {
      usernameInput: this.page.getByPlaceholder("username"),
      passwordInput: this.page.locator("#password"),
      loginButton: this.page.locator("#login-button")
    };
  }

  async goto() {
    await this.page.goto('http://13.232.93.41:4200/login');
  }

  async login(username: string, password: string) {
    await this.Elements.usernameInput.fill(username);
    await this.Elements.passwordInput.fill(password);
    await this.Elements.loginButton.click();
  }
}
