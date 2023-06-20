import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { UpdateInfo } from './UpdateInfo';
import previewIcon from '../../../../../p1p3-mobile/src/assets/icons/home/bankBills.png';

jest.useFakeTimers();

describe('My PreviewCard ', function () {
  let testID: string;
  let icon: any;
  let text: string;
  let value: any;
  let isLoading: boolean;

  beforeEach(async () => {
    testID = 'TestId';
    icon = previewIcon;
    text = 'Text';
    value = 'Value';
  });
  beforeAll(async () => {
    jest.useFakeTimers();
  });
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render updateInfo', async () => {
    const testInstance = render(
      <UpdateInfo
        testID={testID}
        icon={icon}
        text={text}
        value={value}
        isLoading={isLoading}
        onPressHandler={() => {}}
      />
    );

    expect(testInstance.queryByTestId(testID)).toBeTruthy();
    expect(testInstance.queryByTestId('icon')).toBeTruthy();
    expect(testInstance.queryByTestId('text').props.children).toEqual(text + value);
  });
});
