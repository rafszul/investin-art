import { browser, element, by } from 'protractor';

export class InvestinArtPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('investin-art-root h1')).getText();
  }
}
