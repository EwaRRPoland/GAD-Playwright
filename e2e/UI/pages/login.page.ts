import { Page } from '@playwright/test';

export class Login {
  async navigate(page: Page) {
    await page.goto('http://localhost:3000/login/');
  }

  async login(page: Page, email: string, password: string) {
    // await page.fill(':nth-child(2) > #username', email);
    // await page.fill('#password', password);
    // await page.click('#loginButton');
    //
    //await page.getByPlaceholder('Enter User Email').click();
    await page.getByPlaceholder('Enter User Email').fill('abc@abc.abc');
    //await page.getByPlaceholder('Enter User Email').click();
    //await page.getByPlaceholder('Enter Password').click();
    await page.getByPlaceholder('Enter Password').fill('123$123');
    await page.getByLabel('keep me sign in').check();
    await page.getByRole('button', { name: 'LogIn' }).click();
  }
}
