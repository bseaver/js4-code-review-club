import { ClubPage } from './app.po';

describe('club App', () => {
  let page: ClubPage;

  beforeEach(() => {
    page = new ClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
