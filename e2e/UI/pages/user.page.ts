import { Page } from '@playwright/test';

export class CreateUser {
  async navigate(page: Page) {
    await page.goto('http://localhost:3000/register.html');
  }

  async register(
    page: Page,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    await page.fill('#firstname', firstName);
    await page.fill('#lastname', lastName);
    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.click('#registerButton');
  }
}
