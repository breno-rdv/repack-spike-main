import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { Layout } from './Layout';

describe('My layout ', function () {
  beforeEach(async () => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    const testRenderer = renderer.create(<Layout />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Layout)).toBeTruthy();
  });
});
