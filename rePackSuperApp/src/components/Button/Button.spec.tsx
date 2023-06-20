import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { Button } from './Button';
import { Text } from 'react-native';
import { fireEvent, render } from '../../../../../p1p3-mobile/src/test';
import { act } from 'react-native-testing-library';

describe('My button ', function () {
  beforeEach(async () => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    const testRenderer = renderer.create(<Button text="test" />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Button)).toBeTruthy();
  });

  it('should have the text with test', async () => {
    const testRenderer = renderer.create(<Button text="test" />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Button).findByType(Text).props.children).toEqual('test');
  });

  it('should render a loader if loading is passed', async () => {
    const button = render(<Button text="test" loading />);
    await act(async () => {});
    const loader = button.getByTestId('loaderButton');
    expect(loader).toBeTruthy();
  });

  it('should call function when clicked', async () => {
    const onPress = jest.fn();
    const button = render(<Button text="test" onPress={onPress} />);
    await act(async () => {});
    expect(button.getByTestId('button')).toBeTruthy();

    const clickable = button.getByTestId('button');

    fireEvent.press(clickable);

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should not call function when its loading state', async () => {
    const onPress = jest.fn();
    const button = render(<Button text="test" onPress={onPress} loading />);
    await act(async () => {});
    expect(button.getByTestId('button')).toBeTruthy();

    const clickable = button.getByTestId('button');

    fireEvent.press(clickable);

    expect(onPress).not.toHaveBeenCalled();
  });
});
