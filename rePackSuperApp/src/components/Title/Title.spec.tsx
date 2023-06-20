import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from './Title';

describe('My Title ', function () {
  let testRenderer;
  let title: string;
  let subtitle: string;

  beforeEach(async () => {
    title = 'Title';
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly without subtitle', async () => {
    testRenderer = renderer.create(<Title title={title} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: 'title' }).props.children).toEqual(title);
    expect(testInstance.findByProps({ testID: 'subtitle' }).props.children).toBe(undefined);
  });

  it('should render correctly with subtitle', async () => {
    subtitle = 'Subtitle';
    testRenderer = renderer.create(<Title title={title} subtitle={subtitle} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: 'title' }).props.children).toEqual(title);
    expect(testInstance.findByProps({ testID: 'subtitle' }).props.children).toEqual(subtitle);
  });
});
