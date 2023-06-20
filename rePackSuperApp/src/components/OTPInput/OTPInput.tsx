import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput } from 'react-native';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { Loader } from '../Loader';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import {
  CodeInputText,
  OTPInputView,
  HiddenTextInput,
  CodeShownContainer,
  CodeShownText,
  InputView,
  LinkSendCodeButton,
  LinkSendCodeText,
  ButtonContainer,
  ContinueButton,
  ContinueButtonText,
  ErrorCodeInputText,
  UpdatePhoneButton,
  UpdatePhoneButtonText,
} from './OTPInput.css';

export interface OTPInputProps {
  testID?: string;
  isErrorOTPInput?: boolean;
  isValidOTP?: boolean;
  onPressEnter: any;
  onPressReSendOTPCode: any;
  isLoadingOTP: boolean;
  setError?: any;
  setRef?: any;
  showUpdatePhone?: boolean;
  onPressUpdatePhone?: any;
}

const handleBorderColor = (error, focused) => {
  if (error) {
    return theme.RED_COLOR_1;
  } else if (focused) {
    return theme.PRIMARY_COLOR;
  }
  return theme.TERTIARY_COLOR;
};

const handleErrorCodeText = (error, valid, locale) => {
  if (error) {
    if (!valid) {
      return translateWithFallback('InvalidOTPCode', 'Invalid Code', locale);
    }
    return translateWithFallback('Error', 'Oops, it looks like something went wrong, try again later.', locale);
  }
};

const handleOnPress = (error, setError, data, setData) => {
  if (error) {
    if (data.length === 6) {
      setError(false);
      setData('');
    }
  }
};

const disableButton = data => {
  if (data.length === 6) {
    return false;
  }
  return true;
};

export const OTPInput: React.FC<OTPInputProps> = props => {
  const maxLength = 6;
  const CodeInputArray = new Array(maxLength).fill(0);

  const { locale } = useLocale();

  const [dataInput, setDataInput] = useState('');
  const [timer, setTimer] = useState(60);
  const [updatePhoneTimer, setUpdatePhoneTimer] = useState(30);

  const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);
  const updatePhoneTimeoutCallback = useCallback(() => setUpdatePhoneTimer(currTimer => currTimer - 1), []);
  const hiddenInputTextRef = useRef(null) as React.MutableRefObject<TextInput>;

  useEffect(() => {
    const interval = setInterval(() => {
      timeOutCallback();
    }, 1000);
    if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      updatePhoneTimeoutCallback();
    }, 1000);
    if (updatePhoneTimer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [updatePhoneTimer]);

  const resetTimer = () => {
    if (!timer) {
      setTimer(60);
    }
  };

  const resetUpdatePhoneTimer = () => {
    if (!updatePhoneTimer) {
      setUpdatePhoneTimer(120);
    }
  };

  const handleLinkResendCode = () => {
    if (timer > 0) {
      return `${translateWithFallback(
        'WaitOTPCode1',
        'You can resend the code in',
        locale
      )} ${timer} ${translateWithFallback('Seconds', 'seconds', locale)}`;
    } else if (timer === 0) {
      return translateWithFallback('ResendOTPCode', 'Click here to resend the code', locale);
    }
  };

  const getUpdatePhoneLabel = () => {
    if (updatePhoneTimer > 0) {
      return `${translateWithFallback(
        'WaitUpdateMobilePhone',
        'You can update your phone in',
        locale
      )} ${updatePhoneTimer} ${translateWithFallback('Seconds', 'seconds', locale)}`;
    } else if (updatePhoneTimer === 0) {
      return translateWithFallback('UpdateMobilePhone', 'Update mobile phone', locale);
    }
  };

  const handleCodeShown = (_value, index) => {
    const emptyInputChar = '';
    const digit = dataInput[index] || emptyInputChar;

    const isCurrentDigit = index === dataInput.length;
    const isCodeFull = dataInput.length === maxLength;

    const isFocused = isCurrentDigit || isCodeFull;

    return (
      <CodeShownContainer key={index} borderColor={handleBorderColor(props.isErrorOTPInput, isFocused)}>
        <CodeShownText>{digit}</CodeShownText>
      </CodeShownContainer>
    );
  };

  return (
    <OTPInputView testID={props.testID} onPress={Keyboard.dismiss}>
      <CodeInputText
        testID="codeInputText"
        color={props.isErrorOTPInput ? theme.ALERT_CRITICAL_COLOR : theme.PRIMARY_COLOR}
      >
        {translateWithFallback('Code', 'Code', locale)}
      </CodeInputText>
      <InputView
        testID="inputView"
        onPress={() => {
          handleOnPress(props.isErrorOTPInput, props.setError, dataInput, setDataInput);
        }}
      >
        {({ pressed }) => {
          if (pressed) hiddenInputTextRef?.current?.focus();
          return <>{CodeInputArray.map(handleCodeShown)}</>;
        }}
      </InputView>
      <ErrorCodeInputText
        testID="errorCodeInputText"
        color={props.isErrorOTPInput ? theme.ALERT_CRITICAL_COLOR : theme.PRIMARY_COLOR}
      >
        {handleErrorCodeText(props.isErrorOTPInput, !props.isValidOTP, locale)}
      </ErrorCodeInputText>
      <HiddenTextInput
        testID="hiddenTextInput"
        maxLength={maxLength}
        value={dataInput}
        keyboardType={'number-pad'}
        onChangeText={value => {
          const inputData = value.replace(/\D/g, '');
          props.setError(false);
          setDataInput(inputData);
        }}
        textContentType="oneTimeCode"
        autoComplete="sms-otp"
        ref={hiddenInputTextRef}
      />
      {props.showUpdatePhone && (
        <UpdatePhoneButton
          testID="updatePhoneButton"
          onPress={() => {
            if (updatePhoneTimer === 0) {
              props.onPressUpdatePhone();
              resetUpdatePhoneTimer();
            }
          }}
          disabled={updatePhoneTimer !== 0}
        >
          <UpdatePhoneButtonText testID="updatePhoneButtonText">{getUpdatePhoneLabel()}</UpdatePhoneButtonText>
        </UpdatePhoneButton>
      )}
      <LinkSendCodeButton
        testID="linkSendCodeButton"
        onPress={() => {
          if (timer === 0) {
            props.onPressReSendOTPCode();
            resetTimer();
          }
        }}
        disabled={timer !== 0}
      >
        <LinkSendCodeText testID="linkSendCodeText">{handleLinkResendCode()}</LinkSendCodeText>
      </LinkSendCodeButton>
      <ButtonContainer>
        <ContinueButton
          testID="continueButton"
          onPress={() => {
            props.onPressEnter(dataInput);
          }}
          disabled={disableButton(dataInput) || props.isLoadingOTP}
        >
          {props.isLoadingOTP ? (
            <Loader isButton color={theme.BLACK} />
          ) : (
            <ContinueButtonText testID="continueButtonText">
              {translateWithFallback('Continue', 'Continue', locale)}
            </ContinueButtonText>
          )}
        </ContinueButton>
      </ButtonContainer>
    </OTPInputView>
  );
};
