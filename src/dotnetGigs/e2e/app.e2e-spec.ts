import { DotnetGigsPage } from './app.po';

describe('dotnet-gigs App', () => {
  let page: DotnetGigsPage;

  beforeEach(() => {
    page = new DotnetGigsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
