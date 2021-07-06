import { newE2EPage } from '@stencil/core/testing';

describe('example', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    const element = await page.find('app-home');
    expect(element).toHaveClass('hydrated');
  });

  it('should render a bookmark-component', async () => {
    const page = await newE2EPage();
    await page.setContent(`<bookmark></bookmark>`);
    const el = await page.find('bookmark');
    expect(el).not.toBeNull();
  });

  it('should render a add-form-component', async () => {
    const page = await newE2EPage();
    await page.setContent(`<add-form></add-form>`);
    const el = await page.find('add-form');
    expect(el).not.toBeNull();
  });

  it('should render a bookmark-component with props', async () => {
    const props = {
      id: '1',
      name: 'ahmed',
      link: 'www.facebook.com',
      tags: ['tag1', 'tag2']
    }
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


