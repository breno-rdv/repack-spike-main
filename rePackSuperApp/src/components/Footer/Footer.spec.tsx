import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from './Footer';

describe('My Footer ', function () {
  let footerText: string;

  beforeEach(async () => {
    footerText = 'FooterText';
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render horizontalScrollView ', async () => {
    const testRenderer = renderer.create(<Footer footerText={footerText} />);

    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: 'footer' })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'footerText' }).props.children).toEqual(footerText);
  });
});
