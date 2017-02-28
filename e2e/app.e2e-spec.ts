import { InvestinArtPage } from './app.po';

describe('investin-art App', () => {
  let page: InvestinArtPage;

  beforeEach(() => {
    page = new InvestinArtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('investin-art works!');
  });
});
