import { Page } from '@playwright/test';

export class HomePage {
  async navigate(page: Page) {
    //
    await page.goto('http://localhost:3000/');
  }

  // Quick Navigation buttons:
  async logout(page: Page) {
    await page.getByTestId('logoutButton').click();
  }

  async myProfile(page: Page) {
    await page.click('#btnMyAccountLink > .button-primary');
  }

  async myArticles(page: Page) {
    await page.click('#btnArticlesLink > .button-primary');
  }

  async deleteUser(page: Page) {
    // delete user
    //await page.click('[data-testid="deleteButton"]');

    // Access the window object of the current page and stub the alert method
    //await page.evaluate(() => {
    //window.alert = () => {}; // Stub the alert method
    //});

    // Verify the user is deleted
    //await page.waitForSelector('[data-testid="deleteButton"]', {
    //state: 'hidden',
    //});
    page.once('dialog', (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByTestId('deleteButton').click();
  }

  // menu-main-gui buttons L:
  async getUsers(page: Page) {
    await page.click('text=Users');
  }

  async getArticles(page: Page) {
    await page.click('text=Articles');
  }

  async getComments(page: Page) {
    await page.click('text=Comments');
  }

  async getFlashposts(page: Page) {
    await page.click('text=Flashposts');
  }

  async getStatistics(page: Page) {
    await page.click('text=Statistics');
  }

  // menu-main-gui buttons R:
  async backofficeTools(page: Page) {
    await page.click('[href="/tools/backoffice.html"] > .hovertext > img');
  }

  async jaktestowacPl(page: Page) {
    await page.click(
      '[style="text-decoration: none; color: white"] > .hovertext > img',
    );
  }
}
