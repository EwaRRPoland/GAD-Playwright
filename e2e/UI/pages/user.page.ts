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
    await page.getByRole('link', { name: 'Register' }).click();
    //await page.getByTestId('firstname-input').click();
    await page.getByTestId('firstname-input').fill('Xxxx');
    //await page.getByTestId('lastname-input').click();
    await page.getByTestId('lastname-input').fill('Yyyy');
    //await page.getByTestId('email-input').click();
    await page.getByTestId('email-input').fill('abc@abc.abc');
    //await page.getByTestId('password-input').click();
    await page.getByTestId('password-input').fill('123$123');
    await page.getByTestId('register-button').click();
  }
}
