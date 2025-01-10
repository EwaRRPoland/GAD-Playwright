import { test, expect } from '@playwright/test';
import { LoginPage } from '../../UI/pages/login.page';
import { HomePage } from '../../UI/pages/home.page';
import { UserPage } from '../../UI/pages/user.page';

import { loginData1 } from '../../test-data/UI/login.data';

test.describe('User Registration, Login, and Deletion Test', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let userPage: UserPage;

  test.beforeEach(async ({ page }) => {
    userPage = new UserPage(page);
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  });

  test(
    'successful registration, login, and deletion',
    { tag: ['@e2e', '@registration', '@login', '@deletion'] },
    async ({ page }) => {
      // Arrange
      const { firstName, lastName, email, password } = loginData1;

      // Act - Register
      await page.goto('http://localhost:3000/register.html');
      await userPage.createUser(firstName, lastName, email, password);

      // Assert - Registration
      await expect(page.getByTestId('alert-popup')).toHaveText('User created');

      // Act - Login
      await loginPage.login(email, password);

      // Assert - Login
      await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

      // Act & Assert - Deletion
      await homePage.deleteUser();
    },
  );
});
