import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React, { useState } from 'react';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { removeMask } from '../../../../../p1p3-mobile/src/managers/Mask';
import { Button } from '../Button';
import { Input } from '../Input';
import { ButtonContainer, ErrorText, InputContainer, RequiredText, WarningText } from './OnboardInput.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export interface OnboardInputProps {
  testID?: string;
  label: string;
  placeholder: string;
  onPressEnter: any;
  isLoading: boolean;
  fieldMask?: any;
  keepMask?: boolean;
  validation: any;
  inputLength?: number;
  keyboardType?: string;
  optionalField?: boolean;
  isError?: boolean;
  setIsError?: any;
  errorMessage?: any;
  secureTextEntry?: any;
  customComponent?: any;
  autoCapitalize?: string;
  buttonText?: string;
  removeSpaces?: boolean;
	removeLetterWithAccent?: boolean;
}

export const OnboardInput: React.FC<OnboardInputProps> = ({ ...props }) => {
  const [dataInput, setDataInput] = useState('');
  const { locale } = useLocale();

  const sanitizeField = (value: string) => {
    if (props.removeSpaces) {
      return value.replace(/\s+/g, '');
    }
    return value;
  };

  return (
    <>
      <InputContainer>
        {props.optionalField && (
          <RequiredText>
            {translateWithFallback('NotMandatoryField', 'This field is not mandatory.', locale)}
          </RequiredText>
        )}
        <Input
          testID={props.testID}
          maxLength={props.inputLength}
          label={props.label}
          placeholder={props.placeholder}
          placeholderTextColor={theme.GRAY_COLOR_500}
          value={dataInput}
          keyboardType={props.keyboardType}
          onChangeText={value => {
            const fieldValue = sanitizeField(value);
            props.fieldMask ? setDataInput(props.fieldMask(fieldValue)) : setDataInput(fieldValue);
            if (props.isError) {
              props.setIsError(false);
            }
          }}
          autoFocus
          isError={props.isError}
          secureTextEntry={props.secureTextEntry}
          customComponent={props.customComponent}
          autoCapitalize={props.autoCapitalize}
          androidKeyboardFocus={true}
					{...props}
        />
        {!props.optionalField && !props.isError && (
          <WarningText>*{translateWithFallback('ObligatoryInfo', 'Required field', locale)}</WarningText>
        )}
        {props.isError && <ErrorText testID={'inputErrorText'}>{props.errorMessage}</ErrorText>}
      </InputContainer>
      <ButtonContainer>
        <Button
          testID="continueButton"
          onPress={() => {
            if (props.keepMask) {
              props.onPressEnter(dataInput);
            } else {
              props.onPressEnter(props.fieldMask ? removeMask(dataInput) : dataInput);
            }
          }}
          boldText={true}
          loading={props.isLoading}
          disabled={!props.validation(dataInput)}
          text={props.buttonText ? props.buttonText : translateWithFallback('Continue', 'Continue', locale)}
        />
      </ButtonContainer>
    </>
  );
};
