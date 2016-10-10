import { DPaaSPage } from './app.po';

describe('dpaa-s App', function() {
  let page: DPaaSPage;

  beforeEach(() => {
    page = new DPaaSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
