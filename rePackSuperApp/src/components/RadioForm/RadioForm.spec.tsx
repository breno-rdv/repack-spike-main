import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '../../../../../p1p3-mobile/src/test';
import { act } from 'react-native-testing-library';
import { RadioForm } from './RadioForm';

describe('Radio Form Component ', function () {
  beforeEach(async () => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    const setChecked = jest.fn();
    const checked = 'test1';
    const testRenderer = renderer.create(
      <RadioForm elements={['test1', 'test2']} checked={checked} setChecked={setChecked} />
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(RadioForm)).toBeTruthy();
  });

  it('should call function when clicked', async () => {
    const setChecked = jest.fn();
    const checked = 'test1';
    const radioForm = render(<RadioForm elements={['test1', 'test2']} checked={checked} setChecked={setChecked} />);
    await act(async () => {});
    expect(radioForm.getByTestId('radioFormtest1')).toBeTruthy();
    const clickable = radioForm.getByTestId('radioFormtest1');

    fireEvent.press(clickable);

    expect(setChecked).toHaveBeenCalled();
  });
});
