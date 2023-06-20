import React from 'react';

import { Loader } from './Loader';
import { act, render } from '../../../../../p1p3-mobile/src/test';

describe('My Loader ', function () {
  beforeEach(async () => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render full screen correctly', async () => {
    const loader = render(<Loader />);
    const result = loader.getByTestId('loader');
    await act(async () => {});
    expect(result).toBeTruthy();
  });

  it('should render for button correctly', async () => {
    const loader = render(<Loader isButton />);
    const result = loader.getByTestId('loaderButton');
    await act(async () => {});
    expect(result).toBeTruthy();
  });
});
