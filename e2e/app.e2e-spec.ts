import { ConectamosPage } from './app.po';

describe('conectamos App', function() {
  let page: ConectamosPage;

  beforeEach(() => {
    page = new ConectamosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
