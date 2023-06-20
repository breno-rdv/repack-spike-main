import React from 'react';
import 'react-native';
import { act, fireEvent, render } from '../../../../../p1p3-mobile/src/test';
import { OTPInput } from './OTPInput';

describe('Load OTPInput', function () {
  let isErrorOTPInput: boolean;
  let isValidOTP: boolean;
  let onPressEnter: any;
  let onPressReSendOTPCode: any;
  let isLoadingOTP: boolean;
  let setError: any;

  beforeEach(async () => {});
  beforeAll(async () => {
    jest.useFakeTimers();
  });
  afterEach(async () => {});
  afterAll(async () => {});

  it('should display OTPInput when called', async () => {
    isErrorOTPInput = false;
    isValidOTP = true;
    onPressEnter = () => {};
    onPressReSendOTPCode = () => {};
    isLoadingOTP = false;
    const testRenderer = render(
      <OTPInput
        isErrorOTPInput={isErrorOTPInput}
        isValidOTP={isValidOTP}
        onPressEnter={onPressEnter}
        onPressReSendOTPCode={onPressReSendOTPCode}
        isLoadingOTP={isLoadingOTP}
      />
    );
    expect(testRenderer).toBeTruthy();

    await act(async () => {});

    expect(testRenderer.getByTestId('codeInputText')).toBeTruthy();
    expect(testRenderer.getByTestId('inputView')).toBeTruthy();
    expect(testRenderer.getByTestId('hiddenTextInput')).toBeTruthy();
    expect(testRenderer.getByTestId('linkSendCodeButton')).toBeTruthy();
    expect(testRenderer.getByTestId('linkSendCodeText')).toBeTruthy();
    expect(testRenderer.getByTestId('continueButton')).toBeTruthy();
    expect(testRenderer.getByTestId('continueButtonText')).toBeTruthy();
    expect(testRenderer.getByTestId('errorCodeInputText')).toBeTruthy();
    expect(testRenderer.queryByTestId('updatePhoneButton')).toBeNull();
    expect(testRenderer.queryByTestId('updatePhoneButtonText')).toBeNull();
  });

  it('should display OTPInput with update phone option', async () => {
    isErrorOTPInput = false;
    isValidOTP = true;
    onPressEnter = () => {};
    onPressReSendOTPCode = () => {};
    isLoadingOTP = false;
    const testRenderer = render(
      <OTPInput
        isErrorOTPInput={isErrorOTPInput}
        isValidOTP={isValidOTP}
        onPressEnter={onPressEnter}
        onPressReSendOTPCode={onPressReSendOTPCode}
        isLoadingOTP={isLoadingOTP}
        showUpdatePhone={true}
      />
    );
    expect(testRenderer).toBeTruthy();

    await act(async () => {});

    expect(testRenderer.getByTestId('codeInputText')).toBeTruthy();
    expect(testRenderer.getByTestId('inputView')).toBeTruthy();
    expect(testRenderer.getByTestId('hiddenTextInput')).toBeTruthy();
    expect(testRenderer.getByTestId('linkSendCodeButton')).toBeTruthy();
    expect(testRenderer.getByTestId('linkSendCodeText')).toBeTruthy();
    expect(testRenderer.getByTestId('continueButton')).toBeTruthy();
    expect(testRenderer.getByTestId('continueButtonText')).toBeTruthy();
    expect(testRenderer.getByTestId('errorCodeInputText')).toBeTruthy();
    expect(testRenderer.getByTestId('updatePhoneButton')).toBeTruthy();
    expect(testRenderer.getByTestId('updatePhoneButtonText')).toBeTruthy();
  });

  it('should change input', async () => {
    isErrorOTPInput = false;
    isValidOTP = true;
    onPressEnter = () => {};
    onPressReSendOTPCode = () => {};
    isLoadingOTP = false;
    setError = () => {};

    const { getByTestId } = render(
      <OTPInput
        isErrorOTPInput={isErrorOTPInput}
        isValidOTP={isValidOTP}
        onPressEnter={onPressEnter}
        onPressReSendOTPCode={onPressReSendOTPCode}
        isLoadingOTP={isLoadingOTP}
        setError={setError}
      />
    );

    const hiddenTextInput = getByTestId('hiddenTextInput');
    fireEvent.changeText(hiddenTextInput, '123456');
    expect(hiddenTextInput.props.value).toEqual('123456');
  });
});
