import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

import { LoginPage } from '../../UI/pages/login.page';
import { HomePage } from '../../UI/pages/home.page';
import { UserPage } from '../../UI/pages/user.page';
import { MyArticlesPage } from '../../UI/pages/myArticles.page';

test.describe('Articles End-to-End Tests', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let userPage: UserPage;
  let myArticlesPage: MyArticlesPage;

  test.beforeEach(async ({ page }) => {
    userPage = new UserPage(page);
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    myArticlesPage = new MyArticlesPage(page);

    await page.goto('http://localhost:3000/register.html');
  });
  test(
    'Create Article and Comment- Success',
    {
      tag: [
        '@e2e',
        '@registration',
        '@login',
        '@title',
        '@article',
        '@comment',
      ],
    },
    async ({ page }) => {
      // Arrange
      const email = faker.internet.email();
      const password = faker.internet.password();
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const titleRandom = faker.lorem.sentence();
      const textRandom = faker.lorem.paragraphs(3);

      // Act - Register
      await userPage.createUser(firstName, lastName, email, password);

      // Assert - Registration
      await expect(page.getByTestId('alert-popup')).toHaveText('User created');

      // Act - Login
      await loginPage.login(email, password);

      // Assert - Login
      await expect(loginPage.userName).toHaveText(`Hi ${email}!`);

      // Act - My articles
      await homePage.myArticles();

      // Act & Assert - Add article
      await myArticlesPage.addArticle();
      await myArticlesPage.addTitle(titleRandom);
      await myArticlesPage.addText(textRandom);
      await myArticlesPage.saveArticle();

      // Assert - Articles
      await expect(page.getByTestId('alert-popup')).toHaveText(
        `Article was created`,
      );

      //do zrobienia

      //   await page
      //     .locator('div')
      //     .filter({ hasText: 'No Comments' })
      //     .nth(3)
      //     .click();
      //   await page.locator('#add-new').click();
      //   //await page.locator('#body').click();
      //   await page.locator('#body').fill('very simple article');
      //   await page.getByRole('button', { name: 'Save' }).click();
    },
  );

  //   test('Create Article - Missing Data', async ({ page }) => {
  //     // Implement test logic for creating article with missing data
  //   });

  //   test('Create Article - Invalid Data', async ({ page }) => {
  //     // Implement test logic for creating article with invalid data
  //   });

  //   test('Create Article - Tag Validation', async ({ page }) => {
  //     // Implement test logic for tag validation
  //   });

  //   test('Edit Article - Success', async ({ page }) => {
  //     // Implement test logic for successful article editing
  //   });

  //   test('Edit Article - Missing Data', async ({ page }) => {
  //     // Implement test logic for editing article with missing data
  //   });

  //   test('Edit Article - Versioning Check', async ({ page }) => {
  //     // Implement test logic for checking versioning
  //   });

  //   test('Delete Article - Success', async ({ page }) => {
  //     // Implement test logic for successful article deletion
  //   });

  //   test('Delete Article - Confirmation', async ({ page }) => {
  //     // Implement test logic for article deletion confirmation
  //   });

  //   test('Delete Article - Access Post Deletion', async ({ page }) => {
  //     // Implement test logic for accessing deleted article
  //   });

  //   test('Display Articles - Success', async ({ page }) => {
  //     // Implement test logic for successful article display
  //   });

  //   test('Display Articles - Pagination', async ({ page }) => {
  //     // Implement test logic for pagination handling
  //   });

  //   test('Display Articles - Filtering and Sorting', async ({ page }) => {
  //     // Implement test logic for filtering and sorting articles
  //   });

  //   test('Comments on Articles - Add Comment', async ({ page }) => {
  //     // Implement test logic for adding comment to article
  //   });

  //   test('Comments on Articles - Edit Comment', async ({ page }) => {
  //     // Implement test logic for editing comment
  //   });

  //   test('Comments on Articles - Delete Comment', async ({ page }) => {
  //     // Implement test logic for deleting comment
  //   });
});
