import { InvestinARTPage } from './app.po';

describe('investin-art App', () => {
  let page: InvestinARTPage;

  beforeEach(() => {
    page = new InvestinARTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('investinart works!');
  });
});
