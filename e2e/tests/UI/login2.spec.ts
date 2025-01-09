import { test, expect } from '@playwright/test';

test.describe('User Registration, Login, and Deletion Test', () => {
  test.beforeEach(async ({ page }) => {
    const urlRegister = 'http://localhost:3000/register.html';
    await page.goto(urlRegister);
  });

  test('successful login with correct credentials', async ({ page }) => {
    // Arrange
    const firstname = 'Axaabcg';
    const lastname = 'Bxaabcg';
    const email = 'xxd@ab.abc';
    const password = '123$123';

    // Act
    await page.getByTestId('firstname-input').fill(firstname);
    await page.getByTestId('lastname-input').fill(lastname);
    await page.getByTestId('email-input').fill(email);
    await page.getByTestId('password-input').fill(password);
    await page.getByTestId('register-button').click();

    // Assert
    await expect(page.getByTestId('alert-popup')).toHaveText(`User created`);

    // Arrange
    const urlLogin = 'http://localhost:3000/login/';

    // Act
    await page.goto(urlLogin);
    await page.getByPlaceholder('Enter User Email').fill(email);
    await page.getByPlaceholder('Enter Password').fill(password);
    await page.getByText('keep me sign in').click();
    await page.getByRole('button', { name: 'LogIn' }).click();

    // Assert
    await expect(page.getByTestId('hello')).toHaveText(`Hi ${email}!`);
  });

  // Dialog handling before clicking the delete button
  test.afterEach(async ({ page }) => {
    page.once('dialog', async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });

    await page.getByTestId('deleteButton').click();
  });
});
