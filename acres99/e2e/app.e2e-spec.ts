import { Acres99Page } from './app.po';

describe('acres99 App', function() {
  let page: Acres99Page;

  beforeEach(() => {
    page = new Acres99Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
