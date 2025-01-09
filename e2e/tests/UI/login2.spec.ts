import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/register.html');

  await page.getByTestId('firstname-input').fill('Axaabc');

  await page.getByTestId('lastname-input').fill('Bxaabc');

  await page.getByTestId('email-input').fill('xxd@ab.ab');

  await page.getByTestId('password-input').fill('123$123');
  await page.getByTestId('register-button').click();
  //

  await page.goto('http://localhost:3000/login/');
  await page.getByPlaceholder('Enter User Email').fill('xxd@ab.ab');

  await page.getByPlaceholder('Enter Password').fill('123$123');
  await page.getByText('keep me sign in').click();
  await page.getByRole('button', { name: 'LogIn' }).click();

  // Obsługa okienka dialogowego przed kliknięciem przycisku usuwania
  page.once('dialog', async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  await page.getByTestId('deleteButton').click();
});
