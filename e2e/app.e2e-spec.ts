import { InvestinART400Page } from './app.po';

describe('investin-art400 App', () => {
  let page: InvestinART400Page;

  beforeEach(() => {
    page = new InvestinART400Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('investinart works!');
  });
});
