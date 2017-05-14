import { browser, by, element } from 'protractor';

export class InvestinART400Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('investinart-root h1')).getText();
  }
}
