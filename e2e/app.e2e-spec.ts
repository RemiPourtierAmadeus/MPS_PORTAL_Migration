import { MPSPORTALPage } from './app.po';

describe('mps-portal App', function() {
  let page: MPSPORTALPage;

  beforeEach(() => {
    page = new MPSPORTALPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
