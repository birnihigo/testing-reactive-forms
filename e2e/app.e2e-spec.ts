import { TestingReactiveFromsPage } from './app.po';

describe('testing-reactive-froms App', () => {
  let page: TestingReactiveFromsPage;

  beforeEach(() => {
    page = new TestingReactiveFromsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
