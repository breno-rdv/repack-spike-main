import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { IconCard } from './IconCard';

describe('My BankBillCard ', function () {
  let testRenderer: any;

  beforeEach(async () => {
    testRenderer = renderer.create(<IconCard onPressHandler={() => {}} />);
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(IconCard)).toBeTruthy();
  });

  it('should have all expected values', async () => {
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: 'iconText' }).props.children).toBeUndefined();
  });
});
