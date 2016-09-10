import { XiTicketsFrontendPage } from './app.po';

describe('xi-tickets-frontend App', function() {
  let page: XiTicketsFrontendPage;

  beforeEach(() => {
    page = new XiTicketsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
