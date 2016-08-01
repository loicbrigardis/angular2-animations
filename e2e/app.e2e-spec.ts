import { Ang2AnimPage } from './app.po';

describe('ang2-anim App', function() {
  let page: Ang2AnimPage;

  beforeEach(() => {
    page = new Ang2AnimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
