import { URLShortenerAngular4Page } from './app.po';

describe('url-shortener-angular4 App', () => {
  let page: URLShortenerAngular4Page;

  beforeEach(() => {
    page = new URLShortenerAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
