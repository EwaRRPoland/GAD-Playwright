import { Page } from '@playwright/test';

export class Login {
  async navigate(page: Page) {
    await page.goto('http://localhost:3000/login/');
  }

  async login(page: Page, email: string, password: string) {
    await page.fill(':nth-child(2) > #username', email);
    await page.fill('#password', password);
    await page.click('#loginButton');
  }
}
