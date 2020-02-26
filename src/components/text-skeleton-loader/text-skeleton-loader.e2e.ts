import { newE2EPage } from '@stencil/core/testing';

describe('text-skeleton-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<text-skeleton-loader></text-skeleton-loader>');
    const element = await page.find('text-skeleton-loader');
    expect(element).toHaveClass('hydrated');
  });

  it('add class -is-loading when property loading is true', async () => {
    const page = await newE2EPage();

    await page.setContent('<text-skeleton-loader></text-skeleton-loader>');
    const component = await page.find('text-skeleton-loader');

    component.setProperty('loading', true);
    await page.waitForChanges();
    const element = await page.find('text-skeleton-loader >>> span');
    expect(element.classList.contains('-is-loading')).toEqual(true);
  });

  it('remove class -is-loading when property loading is false', async () => {
    const page = await newE2EPage();

    await page.setContent('<text-skeleton-loader></text-skeleton-loader>');
    const component = await page.find('text-skeleton-loader');

    component.setProperty('loading', false);
    await page.waitForChanges();
    const element = await page.find('text-skeleton-loader >>> span');
    expect(element.classList.contains('-is-loading')).toEqual(false);
  });
});
