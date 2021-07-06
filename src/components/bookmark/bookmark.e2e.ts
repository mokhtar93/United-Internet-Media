import { newE2EPage } from '@stencil/core/testing';

describe('example', () => {
  const props = {
    id: '1',
    name: 'ahmed',
    link: 'www.facebook.com',
    tags: ['tag1', 'tag2']
  }

  it('should render a bookmark-component with props', async () => {
    const page = await newE2EPage();
    await page.setContent(`<app-bookmark></app-bookmark>`);
    await page.$eval('app-bookmark',
      (elm: any, { id, name, link, tags }) => {
        elm.id = id;
        elm.name = name;
        elm.link = link;
        elm.tags = tags;

      },
      props
    );
    await page.waitForChanges();

  });
});


