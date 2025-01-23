import { Locator, Page } from '@playwright/test';

export class MyArticlesPage {
  addArticleButton: Locator;
  titleInput: Locator;
  bodyText: Locator;
  saveButton: Locator;

  constructor(private page: Page) {
    this.addArticleButton = this.page.getByRole('button', {
      name: 'Add Article',
    });
    this.titleInput = this.page.getByTestId('title-input');
    this.bodyText = this.page.getByTestId('body-text');
    this.saveButton = this.page.getByTestId('save');
  }

  async addArticle(): Promise<void> {
    await this.addArticleButton.click();
  }
  async addTitle(titleRandom: string): Promise<void> {
    await this.titleInput.fill(titleRandom);
  }
  async addText(textRandom: string): Promise<void> {
    await this.bodyText.fill(textRandom);
  }
  async saveArticle(): Promise<void> {
    await this.saveButton.click();
  }
}
