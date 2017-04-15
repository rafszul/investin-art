import { browser, element, by } from 'protractor';

export class InvestinARTPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('investinart-root h1')).getText();
  }
}
