import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { CheckBoxContainer } from './CheckBoxContainer';
import { fireEvent } from '../../../../../p1p3-mobile/src/test';

describe('Check box container ', function () {
  let testID;
  let testIDCheckBox;
  let testIDCheckBoxText;
  let checkBoxDisable;
  let checkBoxValue;
  let checkBoxText;

  beforeEach(async () => {
    testID = 'testId';
    testIDCheckBox = 'testIdCheckBox';
    testIDCheckBoxText = 'testIdCheckBoxText';
    checkBoxDisable = true;
    checkBoxValue = true;
    checkBoxText = 'Testing checkbox';
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render check box container correctly', async () => {
    const testRenderer = renderer.create(
      <CheckBoxContainer
        testID={testID}
        testIDCheckBox={testIDCheckBox}
        testIDCheckBoxText={testIDCheckBoxText}
        checkBoxDisable={checkBoxDisable}
        checkBoxValue={checkBoxValue}
        onValueChange={() => {}}
        checkBoxText={checkBoxText}
      />
    );

    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: testID })).toBeTruthy();
    expect(testInstance.findByProps({ testIDCheckBox: testIDCheckBox })).toBeTruthy();
    expect(testInstance.findByProps({ testIDCheckBoxText: testIDCheckBoxText })).toBeTruthy();
    expect(testInstance.findByProps({ testID: testIDCheckBoxText })).toBeTruthy();
    expect(testInstance.findByProps({ testID: testIDCheckBoxText }).props.children).toEqual(checkBoxText);
  });

  it('should call onValueChange', async () => {
    const onValueChange = jest.fn();
    const testRenderer = renderer.create(
      <CheckBoxContainer
        testID={testID}
        testIDCheckBox={testIDCheckBox}
        testIDCheckBoxText={testIDCheckBoxText}
        checkBoxDisable={checkBoxDisable}
        checkBoxValue={checkBoxValue}
        onValueChange={onValueChange}
        checkBoxText={checkBoxText}
      />
    );

    const testInstance = testRenderer.root;
    const checkBox = testInstance.findByProps({ testID: testIDCheckBox });
    fireEvent(checkBox, 'onValueChange', { nativeEvent: {} });
    expect(onValueChange).toBeCalledTimes(1);
  });
});
