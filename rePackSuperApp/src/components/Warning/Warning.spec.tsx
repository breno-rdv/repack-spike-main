import React from 'react';

import renderer from 'react-test-renderer';
import { Warning } from './Warning';

import dissatisfiedImage from '../../../../../p1p3-mobile/src/assets/images/dissatisfied.png';

describe('My Warning ', function () {
  let description: string;
  beforeEach(async () => {
    description = 'description';
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    const testRenderer = renderer.create(<Warning description={description} icon={dissatisfiedImage} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Warning)).toBeTruthy();
  });

  it('should render correctly', async () => {
    const testRenderer = renderer.create(<Warning description={description} icon={dissatisfiedImage} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: 'description' }).props.children).toEqual(description);
    expect(testInstance.findByProps({ testID: 'icon' })).toBeTruthy();
  });
});
