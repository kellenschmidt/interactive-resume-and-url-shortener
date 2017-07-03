import { URLShortenerAngularPage } from './app.po';

describe('url-shortener-angular App', () => {
  let page: URLShortenerAngularPage;

  beforeEach(() => {
    page = new URLShortenerAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
