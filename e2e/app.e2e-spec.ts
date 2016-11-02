import { Ng2DragDropPage } from './app.po';

describe('ng2-drag-drop App', function() {
  let page: Ng2DragDropPage;

  beforeEach(() => {
    page = new Ng2DragDropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
