import { test, expect } from '@playwright/test';
import { LoginPage } from '../../UI/pages/login.page';
import { HomePage } from '../../UI/pages/home.page';
import { UserPage } from '../../UI/pages/user.page';

import {
  loginData1,
  loginData2,
  loginData3,
} from '../../test-data/UI/login.data';
import { invalidEmails, invalidPasswords } from '../../test-data/UI/test.data';

test.describe('User Authentication Tests. User Registration, Login and Deletion Test', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let userPage: UserPage;

  test.beforeEach(async ({ page }) => {
    userPage = new UserPage(page);
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await page.goto('http://localhost:3000/register.html');
  });

  // 3 replaces test group no. 3

  invalidEmails.forEach((incorrectEmail) => {
    test(
      `should not register user with invalid email format: ${incorrectEmail}`,
      { tag: ['@smoke', '@registration'] },
      async ({ page }) => {
        // Arrange
        const { firstName, lastName, password } = loginData2;

        // Act - Register
        await userPage.createUser(
          firstName,
          lastName,
          incorrectEmail,
          password,
        );

        // Assert - Registration
        await expect(page.getByText('Please provide a valid email')).toHaveText(
          'Please provide a valid email address',
        );
      },
    );
  });

  // 5 replaces test group no. 5
  // no password validation, you can create an account with a single character password
  // these tests will fail once password verification is implemented

  invalidPasswords.forEach((password) => {
    test(
      `should validate password requirements during registration: ${password}`,
      { tag: ['@smoke', '@registration', '@login'] },
      async ({ page }) => {
        // Arrange
        const { firstName, lastName, email } = loginData1;

        // Act - Register
        await userPage.createUser(firstName, lastName, email, password);

        // Assert - Registration
        await expect(page.getByTestId('alert-popup')).toHaveText(
          'User created',
        );

        // Act - Login
        await loginPage.login(email, password);

        // Assert - Login
        await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

        // Act & Assert - Deletion
        await homePage.deleteUser();
      },
    );
  });

  // 1
  test(
    'should register a new user successfully and log in',
    { tag: ['@e2e', '@registration', '@login', '@deletion'] },
    async ({ page }) => {
      // Arrange
      const { firstName, lastName, email, password } = loginData1;

      // Act - Register
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

  // 2a
  test(
    'should not register user with missing required field: firstName',
    { tag: ['@smoke', '@registration'] },
    async ({ page }) => {
      // Arrange
      const { lastName, email, password } = loginData1;
      const firstNameEmpty = '';
      // Act - Register
      await userPage.createUser(firstNameEmpty, lastName, email, password);

      // Assert - Registration
      await expect(page.getByText('This field is required')).toHaveText(
        'This field is required',
      );
    },
  );

  // 2b
  test(
    'should not register user with missing required field: lastName',
    { tag: ['@smoke', '@registration'] },
    async ({ page }) => {
      // Arrange
      const { firstName, email, password } = loginData1;
      const lastNameEmpty = '';
      // Act - Register
      await userPage.createUser(firstName, lastNameEmpty, email, password);

      // Assert - Registration
      await expect(page.getByText('This field is required')).toHaveText(
        'This field is required',
      );
    },
  );

  // 2c
  test(
    'should not register user with missing required field: email',
    { tag: ['@smoke', '@registration'] },
    async ({ page }) => {
      // Arrange
      const { firstName, lastName, password } = loginData1;
      const emailEmpty = '';
      // Act - Register
      await userPage.createUser(firstName, lastName, emailEmpty, password);

      // Assert - Registration
      await expect(page.getByText('This field is required')).toHaveText(
        'This field is required',
      );
    },
  );

  // 2d
  test(
    'should not register user with missing required field: password',
    { tag: ['@smoke', '@registration'] },
    async ({ page }) => {
      // Arrange
      const { firstName, lastName, email } = loginData1;
      const passwordEmpty = '';
      // Act - Register
      await userPage.createUser(firstName, lastName, email, passwordEmpty);

      // Assert - Registration
      await expect(page.getByText('This field is required')).toHaveText(
        'This field is required',
      );
    },
  );

  // 4
  test(
    'should not register user with an existing email',
    { tag: ['@e2e', '@registration', '@login', '@deletion'] },
    async ({ page }) => {
      // Arrange
      const { firstName, lastName, email, password } = loginData3;
      const password2 = '456$456';

      // Act - Register
      await userPage.createUser(firstName, lastName, email, password);

      // Assert - Registration
      await expect(page.getByTestId('alert-popup')).toHaveText('User created');

      // Act - Login
      await loginPage.login(email, password);

      // Assert - Login
      await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

      // Act - Logout
      await homePage.logout();

      // Act - Register at the same email
      await page.goto('http://localhost:3000/register.html');
      await userPage.createUser(firstName, lastName, email, password2);

      // Assert - Registration
      await expect(page.getByTestId('alert-popup')).toHaveText(
        'User not created! Email not unique',
      );
      // Act - Re-Login to deletion
      await loginPage.login(email, password);

      // Assert - Login
      await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

      // Act & Assert - Deletion
      await homePage.deleteUser();
    },
  );

  // 6
  test(
    'should not allow login after account deletion',
    { tag: ['@e2e', '@registration', '@login', '@deletion'] },
    async ({ page }) => {
      // Arrange
      const { firstName, lastName, email, password } = loginData1;
      //
      // Act - Register
      await userPage.createUser(firstName, lastName, email, password);

      // Assert - Registration
      await expect(page.getByTestId('alert-popup')).toHaveText('User created');

      // Act - Login
      await loginPage.login(email, password);

      // Assert - Login
      await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

      // Act & Assert - Deletion
      await homePage.deleteUser();

      //
      // Act - Re-Login
      await page.waitForTimeout(2000); // 2 second delay to re-login
      await page.goto('http://localhost:3000/login/');
      await loginPage.login(email, password);

      // Assert - Login
      //await page.waitForTimeout(2000); // 2 second delay
      await expect(page.getByTestId('login-error')).toHaveText(
        `Invalid username or password`,
      );
    },
  );

  // 7a
  test(
    'should not login user with invalid email',
    { tag: ['@e2e', '@registration', '@login', '@deletion'] },
    async ({ page }) => {
      // Arrange
      const { firstName, lastName, email, password } = loginData1;
      const emailInvalid = 'a@h.com';

      // Act - Register
      await userPage.createUser(firstName, lastName, email, password);

      // Assert - Registration
      await expect(page.getByTestId('alert-popup')).toHaveText('User created');

      // Act - Invalid Login
      await loginPage.login(emailInvalid, password);

      // Assert - Login
      await expect(page.getByTestId('login-error')).toHaveText(
        `Invalid username or password`,
      );

      // Act - RE- Login
      await loginPage.login(email, password);

      // Assert - Login
      await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

      // Act & Assert - Deletion
      await homePage.deleteUser();
    },
  );

  // 7b
  test(
    'should not login user with invalid password',
    { tag: ['@e2e', '@registration', '@login', '@deletion'] },
    async ({ page }) => {
      // Arrange
      const { firstName, lastName, email, password } = loginData1;
      const passwordInvalid = '45!5';

      // Act - Register
      await userPage.createUser(firstName, lastName, email, password);

      // Assert - Registration
      await expect(page.getByTestId('alert-popup')).toHaveText('User created');

      // Act - Invalid password
      await loginPage.login(email, passwordInvalid);

      // Assert - Login
      await expect(page.getByTestId('login-error')).toHaveText(
        `Invalid username or password`,
      );

      // Act - RE- Login
      await loginPage.login(email, password);

      // Assert - Login
      await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

      // Act & Assert - Deletion
      await homePage.deleteUser();
    },
  );

  // 7c
  test(
    'should not login user with empty email',
    { tag: ['@e2e', '@registration', '@login', '@deletion'] },
    async ({ page }) => {
      // Arrange
      const { firstName, lastName, email, password } = loginData1;
      const emailInvalid = '';

      // Act - Register
      await userPage.createUser(firstName, lastName, email, password);

      // Assert - Registration
      await expect(page.getByTestId('alert-popup')).toHaveText('User created');

      // Act - Invalid Login
      await loginPage.login(emailInvalid, password);

      // Assert - Login
      await expect(page.getByTestId('login-error')).toHaveText(
        `Invalid username or password`,
      );

      // Act - RE- Login
      await loginPage.login(email, password);

      // Assert - Login
      await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

      // Act & Assert - Deletion
      await homePage.deleteUser();
    },
  );

  // 7d
  test(
    'should not login user with empty password',
    { tag: ['@e2e', '@registration', '@login', '@deletion'] },
    async ({ page }) => {
      // Arrange
      const { firstName, lastName, email, password } = loginData1;
      const passwordInvalid = '';

      // Act - Register
      await userPage.createUser(firstName, lastName, email, password);

      // Assert - Registration
      await expect(page.getByTestId('alert-popup')).toHaveText('User created');

      // Act - Invalid Login
      await loginPage.login(email, passwordInvalid);

      // Assert - Login
      await expect(page.getByTestId('login-error')).toHaveText(
        `Invalid username or password`,
      );

      // Act - RE- Login
      await loginPage.login(email, password);

      // Assert - Login
      await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

      // Act & Assert - Deletion
      await homePage.deleteUser();
    },
  );

  // 8
  test(
    'should log out user successfully. Successful registration, login, logout and relogin, deletion',
    {
      tag: ['@e2e', '@registration', '@login', '@logout', '@deletion'],
    },
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

      // Act - Logout
      await homePage.logout();

      // Act - Login
      await loginPage.login(email, password);

      // Assert - Login
      await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

      // Act & Assert - Deletion
      await homePage.deleteUser();
    },
  );

  //9 - to do
  //   test('should auto log out user after inactivity', async ({ page }) => {
  //     // Implementacja testu automatycznego wylogowania po bezczynności
  //   });

  //10 - to do
  //   test('should not allow access to secured resources after logout', async ({
  //     page,
  //   }) => {
  //     // Implementacja testu dostępu do zasobów po wylogowaniu
  //   });

  //11 - to do
  //   test('should log out user from multiple devices', async ({ page }) => {
  //     // Implementacja testu wylogowania z wielu urządzeń
  //   });

  // 12 - to do
  //   test('should manage user data after account deletion', async ({ page }) => {
  //     // Implementacja testu zarządzania danymi po usunięciu konta
  //   });
});
