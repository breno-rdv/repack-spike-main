import React from 'react';
import 'react-native';
import { act, render } from '../../../../../p1p3-mobile/src/test';
import { DynamicLoading } from './DynamicLoading';
import { NavigationContext } from '@react-navigation/native';

const navContext = {
  isFocused: () => true,
  addListener: jest.fn(() => jest.fn()),
};

describe('Dynamic Loading', function () {
  beforeEach(async () => {});
  beforeAll(async () => {
    jest.useFakeTimers();
  });
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render all components', async () => {
    const testRenderer = render(
      <NavigationContext.Provider value={navContext}>
        <DynamicLoading />
      </NavigationContext.Provider>
    );

    expect(testRenderer.getByTestId('primaryText')).toBeTruthy();
    expect(testRenderer.getByTestId('progressLinearBar')).toBeTruthy();
    expect(testRenderer.getByTestId('progressLinearBarContent')).toBeTruthy();
    await act(async () => {});
  });

  it('should have functional timer and alter progress bar', async () => {
    const testRenderer = render(
      <NavigationContext.Provider value={navContext}>
        <DynamicLoading />
      </NavigationContext.Provider>
    );
    jest.advanceTimersByTime(2550);

    const { getByTestId } = testRenderer;
    expect(getByTestId('primaryText')).toBeTruthy();
    const progressBarContent = testRenderer.getByTestId('progressLinearBarContent');
    expect(progressBarContent.props.style[0].width).toBe('100%');
    await act(async () => {});
  });

  it('should stop timers from progressing when forced timeout', async () => {
    const testRenderer = render(
      <NavigationContext.Provider value={navContext}>
        <DynamicLoading forcedTimeout={5} />
      </NavigationContext.Provider>
    );
    jest.advanceTimersByTime(5150);

    const { getByTestId } = testRenderer;
    expect(getByTestId('primaryText')).toBeTruthy();
    const progressBarContent = testRenderer.getByTestId('progressLinearBarContent');
    expect(progressBarContent.props.style[0].width).toBe('82%');
    jest.advanceTimersByTime(1000);
    expect(progressBarContent.props.style[0].width).toBe('82%');

    await act(async () => {});
  });
});
